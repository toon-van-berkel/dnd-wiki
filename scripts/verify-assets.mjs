import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildIconRegistrySource } from './generate-icon-registry.mjs';
import { buildPageCardAssetSource } from './generate-page-card-assets.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const staticRoot = path.join(repoRoot, 'static');
const iconRegistryFile = path.join(repoRoot, 'src', 'lib', 'components', 'Icon', 'Icon-data.ts');
const pageCardManifestFile = path.join(repoRoot, 'src', 'lib', 'data', 'generated', 'PageCardAssets.ts');
const sourceRoots = ['src', 'scripts'];
const ignoredDirectoryNames = new Set(['node_modules', '.svelte-kit', 'build', 'dist', 'coverage', '.git']);
const cardFilenamePattern = /^card-(female|male)-[sml]\.webp$/;

const errors = [];

async function readText(file) {
	return fs.readFile(file, 'utf8');
}

async function listFiles(directory) {
	const entries = await fs.readdir(directory, { withFileTypes: true });
	const files = [];

	for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
		if (ignoredDirectoryNames.has(entry.name)) {
			continue;
		}

		const fullPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			files.push(...(await listFiles(fullPath)));
			continue;
		}

		if (entry.isFile()) {
			files.push(fullPath);
		}
	}

	return files;
}

function publicPathToStaticPath(publicPath) {
	const [pathname] = publicPath.split(/[?#]/);

	if (!pathname.startsWith('/')) {
		throw new Error(`Internal asset path must be root-relative: ${publicPath}`);
	}

	if (pathname.includes('..')) {
		throw new Error(`Internal asset path cannot contain traversal: ${publicPath}`);
	}

	const absolutePath = path.resolve(staticRoot, pathname.slice(1));
	const relative = path.relative(staticRoot, absolutePath);

	if (relative.startsWith('..') || path.isAbsolute(relative)) {
		throw new Error(`Internal asset path escapes static/: ${publicPath}`);
	}

	return absolutePath;
}

async function exactPathExists(absolutePath) {
	const relativeFromRepo = path.relative(repoRoot, absolutePath);

	if (relativeFromRepo.startsWith('..') || path.isAbsolute(relativeFromRepo)) {
		return false;
	}

	const relativeParts = relativeFromRepo.split(path.sep).filter(Boolean);
	let current = repoRoot;

	for (const part of relativeParts) {
		let entries;
		try {
			entries = await fs.readdir(current);
		} catch {
			return false;
		}

		if (!entries.includes(part)) {
			return false;
		}

		current = path.join(current, part);
	}

	try {
		const stat = await fs.stat(current);
		return stat.isFile();
	} catch {
		return false;
	}
}

async function assertGeneratedFileCurrent(file, expectedContent, command) {
	const current = await readText(file);

	if (current !== expectedContent) {
		errors.push(`${path.relative(repoRoot, file)} is stale. Run ${command}.`);
	}
}

function extractInternalAssetPaths(source) {
	const paths = new Set();
	const pathPattern = /['"`](\/(?!\/)(?:[^'"`\\\s]|\s(?!))*?\.(?:svg|webp|png|jpe?g|gif|avif))(?:[?#][^'"`]*)?['"`]/gi;
	let match;

	while ((match = pathPattern.exec(source))) {
		paths.add(match[1]);
	}

	return [...paths];
}

async function assertPublicAssetExists(publicPath, sourceLabel) {
	try {
		const filePath = publicPathToStaticPath(publicPath);

		if (!(await exactPathExists(filePath))) {
			errors.push(`${sourceLabel} references missing static asset ${publicPath}`);
		}
	} catch (error) {
		errors.push(`${sourceLabel}: ${error.message}`);
	}
}

async function verifyGeneratedRegistries() {
	await assertGeneratedFileCurrent(
		iconRegistryFile,
		await buildIconRegistrySource(),
		'npm run generate:icons'
	);
	await assertGeneratedFileCurrent(
		pageCardManifestFile,
		await buildPageCardAssetSource(),
		'npm run generate:page-assets'
	);
}

async function verifyIconAssets() {
	const iconSource = await readText(iconRegistryFile);
	const paths = extractInternalAssetPaths(iconSource).filter((assetPath) =>
		assetPath.startsWith('/icons/')
	);

	for (const publicPath of paths) {
		await assertPublicAssetExists(publicPath, 'Icon registry');
	}

	for (const file of await listFiles(path.join(staticRoot, 'icons'))) {
		const relative = path.relative(path.join(staticRoot, 'icons'), file).replace(/\\/g, '/');
		if (!relative.endsWith('.svg')) {
			errors.push(`Unsupported file under static/icons: ${relative}`);
		}
	}
}

async function verifyPageCardAssets() {
	const manifestSource = await readText(pageCardManifestFile);
	const paths = extractInternalAssetPaths(manifestSource).filter((assetPath) =>
		assetPath.startsWith('/classes/') || assetPath.startsWith('/species/')
	);

	for (const publicPath of paths) {
		await assertPublicAssetExists(publicPath, 'Page-card manifest');
	}

	for (const root of ['classes', 'species']) {
		const rootPath = path.join(staticRoot, root);
		for (const file of await listFiles(rootPath)) {
			const filename = path.basename(file);
			if (filename.startsWith('card-') && !cardFilenamePattern.test(filename)) {
				errors.push(
					`Unsupported page-card filename: ${path.relative(staticRoot, file).replace(/\\/g, '/')}`
				);
			}
		}
	}
}

async function verifySourceAssetReferences() {
	const files = [];
	for (const root of sourceRoots) {
		files.push(...(await listFiles(path.join(repoRoot, root))));
	}

	const hashedAssetPattern = /\b[\w-]+\.[A-Za-z0-9_-]{7,}\.(?:svg|webp|png|jpe?g|gif|avif)\b/;
	const fragileCardPatterns = [/card-\$\{/, /imagesInFolder/, /cleanTitle\(/];
	const fragileIconPattern = /\$lib\/assets\/icons/;

	for (const file of files) {
		const relative = path.relative(repoRoot, file).replace(/\\/g, '/');
		const source = await readText(file);

		if (hashedAssetPattern.test(source)) {
			errors.push(`${relative} contains a Vite-hashed asset filename.`);
		}

		if (fragileIconPattern.test(source)) {
			errors.push(`${relative} imports the old bundled icon asset tree.`);
		}

		if (relative.startsWith('src/') && fragileCardPatterns.some((pattern) => pattern.test(source))) {
			errors.push(`${relative} contains runtime card-image filename construction.`);
		}

		if (relative !== 'scripts/test-paths.mjs') {
			for (const publicPath of extractInternalAssetPaths(source)) {
				await assertPublicAssetExists(publicPath, relative);
			}
		}
	}
}

await verifyGeneratedRegistries();
await verifyIconAssets();
await verifyPageCardAssets();
await verifySourceAssetReferences();

if (errors.length > 0) {
	console.error(errors.join('\n'));
	process.exitCode = 1;
} else {
	console.log('Asset verification passed.');
}
