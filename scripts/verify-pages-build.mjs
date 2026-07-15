import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(rootDir, 'build');
const rawBasePath = process.env.BASE_PATH ?? '';
const basePath = rawBasePath === '/' ? '' : rawBasePath.replace(/\/+$/, '');
const errors = [];

if (rawBasePath && rawBasePath !== '/' && !rawBasePath.startsWith('/')) {
	errors.push({
		file: 'BASE_PATH',
		url: rawBasePath,
		reason: 'BASE_PATH must start with /'
	});
}

function report(file, url, reason) {
	errors.push({ file, url, reason });
}

function walk(dir) {
	if (!fs.existsSync(dir)) {
		return [];
	}

	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const absolutePath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			return walk(absolutePath);
		}

		return absolutePath;
	});
}

function relativeFile(file) {
	return path.relative(rootDir, file).replaceAll(path.sep, '/');
}

function isIgnoredUrl(url) {
	return (
		!url ||
		/^(?:https?:|\/\/|data:|blob:|mailto:|tel:|#)/i.test(url) ||
		url.startsWith('%sveltekit.')
	);
}

function stripSuffix(url) {
	const index = url.search(/[?#]/);
	return index === -1 ? url : url.slice(0, index);
}

function splitSrcset(srcset) {
	return srcset
		.split(',')
		.map((candidate) => candidate.trim().split(/\s+/)[0])
		.filter(Boolean);
}

function publicPathForFile(file, kind) {
	const relativePath = path.relative(buildDir, file).replaceAll(path.sep, '/');

	if (kind === 'html' && relativePath.endsWith('/index.html')) {
		return `/${basePath ? `${basePath.slice(1)}/` : ''}${relativePath.replace(/index\.html$/, '')}`;
	}

	return `/${basePath ? `${basePath.slice(1)}/` : ''}${relativePath}`;
}

function resolvePublicPath(url, file, kind) {
	const cleanUrl = stripSuffix(url);

	if (!cleanUrl) {
		return null;
	}

	if (cleanUrl.startsWith('/')) {
		if (basePath && cleanUrl !== basePath && !cleanUrl.startsWith(`${basePath}/`)) {
			report(
				relativeFile(file),
				url,
				`root-relative local URL omits BASE_PATH (${basePath})`
			);
			return null;
		}

		return basePath && cleanUrl.startsWith(basePath)
			? cleanUrl.slice(basePath.length) || '/'
			: cleanUrl;
	}

	const baseUrl = new URL(publicPathForFile(file, kind), 'https://example.invalid');
	return new URL(cleanUrl, baseUrl).pathname.replace(basePath, '') || '/';
}

function candidateFilesForPublicPath(publicPath) {
	const normalized = decodeURIComponent(publicPath).replace(/^\/+/, '');
	const direct = path.join(buildDir, normalized);

	return [
		direct,
		path.join(direct, 'index.html'),
		path.join(buildDir, normalized.replace(/\/$/, ''), 'index.html'),
		path.join(buildDir, `${normalized}.html`)
	];
}

function verifyLocalUrl(file, kind, url) {
	if (isIgnoredUrl(url)) {
		return;
	}

	const publicPath = resolvePublicPath(url, file, kind);

	if (!publicPath) {
		return;
	}

	if (publicPath === '/') {
		if (!fs.existsSync(path.join(buildDir, 'index.html'))) {
			report(relativeFile(file), url, 'route link resolves to missing build/index.html');
		}

		return;
	}

	if (!candidateFilesForPublicPath(publicPath).some((candidate) => fs.existsSync(candidate))) {
		report(relativeFile(file), url, 'local URL does not resolve to a generated file');
	}
}

function inspectHtml(file) {
	const content = fs
		.readFileSync(file, 'utf8')
		.replace(/<pre\b[\s\S]*?<\/pre>/gi, '')
		.replace(/<code\b[\s\S]*?<\/code>/gi, '');
	const attrPattern = /\b(src|href|poster|srcset)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
	let match;

	while ((match = attrPattern.exec(content))) {
		const attribute = match[1].toLowerCase();
		const value = match[2] ?? match[3] ?? match[4] ?? '';

		if (attribute === 'srcset') {
			for (const srcsetUrl of splitSrcset(value)) {
				verifyLocalUrl(file, 'html', srcsetUrl);
			}
			continue;
		}

		verifyLocalUrl(file, 'html', value);
	}
}

function inspectCss(file) {
	const content = fs.readFileSync(file, 'utf8');
	const urlPattern = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^'")]+))\s*\)/gi;
	let match;

	while ((match = urlPattern.exec(content))) {
		const value = (match[1] ?? match[2] ?? match[3] ?? '').trim();
		verifyLocalUrl(file, 'css', value);
	}
}

if (!fs.existsSync(buildDir)) {
	report('build', 'build', 'build directory does not exist');
}

const allFiles = walk(buildDir);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const cssFiles = allFiles.filter((file) => file.endsWith('.css'));
const svelteKitAssets = allFiles.filter((file) =>
	path.relative(buildDir, file).replaceAll(path.sep, '/').startsWith('_app/immutable/')
);

if (!fs.existsSync(path.join(buildDir, 'index.html'))) {
	report('build/index.html', 'index.html', 'build/index.html does not exist');
}

if (htmlFiles.length === 0) {
	report('build', '*.html', 'no generated HTML files found');
}

if (svelteKitAssets.length === 0) {
	report('build/_app/immutable', '_app/immutable', 'SvelteKit immutable assets are missing');
}

for (const file of htmlFiles) {
	inspectHtml(file);
}

for (const file of cssFiles) {
	inspectCss(file);
}

if (errors.length) {
	console.error('GitHub Pages build verification failed:');

	for (const error of errors) {
		console.error(`- ${error.file}: ${error.url} - ${error.reason}`);
	}

	process.exit(1);
}

console.log(
	`Verified ${htmlFiles.length} HTML files and ${cssFiles.length} CSS files for BASE_PATH="${basePath}".`
);
