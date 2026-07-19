import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const staticRoot = path.join(repoRoot, 'static');
const outputFile = path.join(repoRoot, 'src', 'lib', 'data', 'generated', 'PageCardAssets.ts');
const scanRoots = ['classes', 'species'];
const cardPattern = /^card-(female|male)-([sml])\.webp$/;
const sizeNames = {
	s: 'small',
	m: 'medium',
	l: 'large'
};

async function pathExists(target) {
	try {
		await fs.access(target);
		return true;
	} catch {
		return false;
	}
}

async function listFiles(directory) {
	const entries = await fs.readdir(directory, { withFileTypes: true });
	const files = [];

	for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
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

export async function collectPageCardAssets() {
	const manifest = new Map();
	const errors = [];

	for (const rootName of scanRoots) {
		const root = path.join(staticRoot, rootName);
		if (!(await pathExists(root))) {
			continue;
		}

		for (const file of await listFiles(root)) {
			const relativeToRoot = path.relative(root, file).replace(/\\/g, '/');
			const filename = path.posix.basename(relativeToRoot);
			const match = filename.match(cardPattern);

			if (!match) {
				if (filename.startsWith('card-')) {
					errors.push(`Unsupported page-card filename: ${rootName}/${relativeToRoot}`);
				}
				continue;
			}

			const pageDirectory = path.posix.dirname(relativeToRoot);
			if (pageDirectory === '.') {
				errors.push(`Page-card asset cannot live at ${rootName} root: ${rootName}/${filename}`);
				continue;
			}

			const href = `/${rootName}/${pageDirectory}`;
			const gender = match[1];
			const size = sizeNames[match[2]];
			const publicPath = `${href}/${filename}`;
			const routeAssets = manifest.get(href) ?? {};
			const genderAssets = routeAssets[gender] ?? {};

			if (genderAssets[size]) {
				errors.push(`Duplicate page-card variant: ${href} ${gender} ${size}`);
				continue;
			}

			genderAssets[size] = publicPath;
			routeAssets[gender] = genderAssets;
			manifest.set(href, routeAssets);
		}
	}

	if (errors.length > 0) {
		throw new Error(errors.join('\n'));
	}

	return manifest;
}

export async function buildPageCardAssetSource() {
	const manifest = await collectPageCardAssets();
	const lines = [
		'// Generated file. Do not edit manually.',
		"// Run `npm run generate:page-assets` after changing page-card artwork in static/classes or static/species.",
		'',
		"export type PageCardGender = 'female' | 'male';",
		"export type PageCardSize = 'small' | 'medium' | 'large';",
		'',
		'export type PageCardAssetSet = Partial<Record<PageCardSize, string>>;',
		'export type PageCardAssets = Partial<Record<PageCardGender, PageCardAssetSet>>;',
		'export type PageCardAssetManifest = Record<string, PageCardAssets>;',
		'',
		'export const pageCardAssets = {'
	];

	for (const href of [...manifest.keys()].sort((a, b) => a.localeCompare(b))) {
		lines.push(`\t'${href}': {`);
		const routeAssets = manifest.get(href);
		for (const gender of ['female', 'male']) {
			const genderAssets = routeAssets[gender];
			if (!genderAssets) {
				continue;
			}

			lines.push(`\t\t${gender}: {`);
			for (const size of ['small', 'medium', 'large']) {
				if (genderAssets[size]) {
					lines.push(`\t\t\t${size}: '${genderAssets[size]}',`);
				}
			}
			lines.push('\t\t},');
		}
		lines.push('\t},');
	}

	lines.push('} as const satisfies PageCardAssetManifest;');
	lines.push('');

	return `${lines.join('\n')}\n`;
}

async function writeIfChanged(file, content) {
	await fs.mkdir(path.dirname(file), { recursive: true });
	let current = null;
	try {
		current = await fs.readFile(file, 'utf8');
	} catch {
		// Generated output may not exist yet.
	}

	if (current === content) {
		return false;
	}

	await fs.writeFile(file, content);
	return true;
}

export async function runPageCardAssetGenerator({ check = false } = {}) {
	const content = await buildPageCardAssetSource();

	if (check) {
		const current = await fs.readFile(outputFile, 'utf8');
		if (current !== content) {
			throw new Error(
				`${path.relative(repoRoot, outputFile)} is stale. Run npm run generate:page-assets.`
			);
		}
		return { changed: false, outputFile };
	}

	const changed = await writeIfChanged(outputFile, content);
	return { changed, outputFile };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	const check = process.argv.includes('--check');
	runPageCardAssetGenerator({ check })
		.then(({ changed }) => {
			if (!check) {
				console.log(changed ? 'Generated page-card asset manifest.' : 'Page-card asset manifest already current.');
			}
		})
		.catch((error) => {
			console.error(error.message);
			process.exitCode = 1;
		});
}
