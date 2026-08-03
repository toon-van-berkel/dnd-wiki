/*
	Location: scripts/audit-prelive.mjs
	Use: Checks release-blocking data, route, asset, and placeholder issues.
*/
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createServer } from 'vite';

const root = process.cwd();
const srcDir = join(root, 'src');
const staticDir = join(root, 'static');
const sourceExtensions = new Set(['.svelte', '.ts', '.js', '.scss']);
const ignoredSourceParts = [
	`${join('src', 'lib', 'typescript', 'data', 'internals', 'rules', 'spellcasting', 'spells', 'spell-data.ts')}`
];
const ignoredPlaceholderLineParts = [
	'&::placeholder',
	'placeholder=',
	'placeholder:',
	'placeholder?',
	'{placeholder',
	'placeholder ??',
	'temporary placeholders'
];

function isRecord(value) {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isLinkData(value) {
	return (
		isRecord(value) &&
		typeof value.href === 'string' &&
		typeof value.external === 'boolean' &&
		typeof value.title === 'string' &&
		typeof value.subTitle === 'string' &&
		typeof value.description === 'string' &&
		isRecord(value.img) &&
		typeof value.img.href === 'string' &&
		typeof value.img.alt === 'string'
	);
}

function isPageData(value) {
	return isLinkData(value) && value.external === false;
}

function shouldRecurseInto(key, value) {
	return (
		isRecord(value) &&
		key !== 'img' &&
		key !== 'images' &&
		key !== 'logos'
	);
}

function collectFiles(dir) {
	return readdirSync(dir)
		.flatMap((name) => {
			const path = join(dir, name);
			const stats = statSync(path);

			return stats.isDirectory() ? collectFiles(path) : [path];
		});
}

function collectLinks(value, path = '') {
	if (isLinkData(value) && path) {
		return [{ path, value }];
	}

	if (!isRecord(value)) {
		return [];
	}

	return Object.entries(value).flatMap(([key, child]) => {
		if (!shouldRecurseInto(key, child)) {
			return [];
		}

		return collectLinks(child, path ? `${path}.${key}` : key);
	});
}

function collectInternalAssets(value, assets = new Set()) {
	if (typeof value === 'string' && value.startsWith('/')) {
		if (/\.(avif|gif|ico|jpg|jpeg|png|svg|webp)$/i.test(value)) {
			assets.add(value);
		}

		return assets;
	}

	if (Array.isArray(value)) {
		for (const item of value) {
			collectInternalAssets(item, assets);
		}

		return assets;
	}

	if (isRecord(value)) {
		for (const child of Object.values(value)) {
			collectInternalAssets(child, assets);
		}
	}

	return assets;
}

function normalizeHref(href) {
	const clean = href.split(/[?#]/, 1)[0] || '/';

	if (clean.length > 1 && clean.endsWith('/')) {
		return clean.slice(0, -1);
	}

	return clean;
}

function isKnownInternalRoute(href) {
	const clean = normalizeHref(href);

	if (!clean.startsWith('/')) {
		return true;
	}

	return (
		clean === '/' ||
		clean === '/search' ||
		clean === '/classes' ||
		clean === '/spells' ||
		clean === '/rules/spellcasting/cantrips' ||
		clean === '/rules/spellcasting/spells' ||
		/^\/classes\/[^/]+(?:\/[^/]+)?$/.test(clean) ||
		/^\/rules\/.+$/.test(clean) ||
		/^\/spells\/[^/]+$/.test(clean) ||
		/^\/[a-z0-9-]+$/.test(clean)
	);
}

function fileExistsForAsset(assetHref) {
	return existsSync(join(staticDir, assetHref.replace(/^\//, '')));
}

function getDataValue(data, path) {
	return path
		.split('.')
		.reduce((current, key) => isRecord(current) ? current[key] : undefined, data);
}

function collectQuotedDataPaths() {
	const paths = new Set();
	const regex = /['"`]((?:internals|externals|socials)(?:\.[A-Za-z0-9_-]+)+)['"`]/g;

	for (const file of collectFiles(srcDir)) {
		const relative = file.slice(root.length + 1);

		if (!sourceExtensions.has(extname(file)) || ignoredSourceParts.includes(relative)) {
			continue;
		}

		const content = readFileSync(file, 'utf8');
		let match;

		while ((match = regex.exec(content))) {
			paths.add(match[1]);
		}
	}

	return [...paths].sort();
}

function collectSourceAssetUrls() {
	const assets = new Set();
	const regex = /url\(['"]?(\/[^'")]+)['"]?\)|src=['"](\.\/[^'"]+)['"]/g;

	for (const file of collectFiles(srcDir)) {
		if (!sourceExtensions.has(extname(file))) {
			continue;
		}

		const content = readFileSync(file, 'utf8');
		let match;

		while ((match = regex.exec(content))) {
			if (match[1] && /\.(avif|gif|ico|jpg|jpeg|png|svg|webp)$/i.test(match[1])) {
				assets.add(match[1]);
			}
		}
	}

	return [...assets].sort();
}

function collectPlaceholderFindings() {
	const patterns = [
		/TODO/i,
		/FIXME/i,
		/needs to be added/i,
		/still needs/i,
		/Use the equipment package/i,
		/No .*description is available yet/i,
		/No .*data has been added/i
	];
	const findings = [];

	for (const file of collectFiles(srcDir)) {
		if (!sourceExtensions.has(extname(file))) {
			continue;
		}

		const lines = readFileSync(file, 'utf8').split(/\r?\n/);

		lines.forEach((line, index) => {
			if (ignoredPlaceholderLineParts.some((part) => line.includes(part))) {
				return;
			}

			if (patterns.some((pattern) => pattern.test(line))) {
				findings.push({
					file: file.slice(root.length + 1),
					line: index + 1,
					text: line.trim()
				});
			}
		});
	}

	return findings;
}

function report(title, findings) {
	if (!findings.length) {
		console.log(`PASS ${title}`);
		return false;
	}

	console.log(`FAIL ${title}`);

	for (const finding of findings.slice(0, 80)) {
		console.log(`  - ${finding}`);
	}

	if (findings.length > 80) {
		console.log(`  ... ${findings.length - 80} more`);
	}

	return true;
}

function getCrawlBaseUrl() {
	const arg = process.argv.find((item) => item.startsWith('--crawl='));

	return arg?.slice('--crawl='.length) ?? process.env.CRAWL_BASE_URL ?? '';
}

function shouldCrawlBuiltOutput() {
	return process.argv.includes('--crawl-built') || process.env.CRAWL_BUILT === 'true';
}

async function crawlUrls(baseUrl, urls) {
	if (!baseUrl) {
		return [];
	}

	const failures = [];
	const uniqueUrls = [...new Set(urls)].sort();
	const concurrency = 20;
	let index = 0;

	async function worker() {
		while (index < uniqueUrls.length) {
			const url = uniqueUrls[index++];
			const target = new URL(url, baseUrl).href;

			try {
				const response = await fetch(target, {
					redirect: 'manual'
				});

				if (response.status < 200 || response.status >= 400) {
					failures.push(`${url} returned ${response.status}`);
				}
			} catch (error) {
				failures.push(`${url} failed: ${error.message}`);
			}
		}
	}

	await Promise.all(Array.from({ length: concurrency }, () => worker()));

	return failures;
}

async function crawlBuiltOutput(urls) {
	const serverEntry = join(root, '.svelte-kit', 'output', 'server', 'index.js');
	const manifestEntry = join(root, '.svelte-kit', 'output', 'server', 'manifest.js');

	if (!existsSync(serverEntry) || !existsSync(manifestEntry)) {
		return ['SvelteKit build output is missing. Run pnpm build first.'];
	}

	const [{ Server }, { manifest }] = await Promise.all([
		import(pathToFileURL(serverEntry).href),
		import(pathToFileURL(manifestEntry).href)
	]);
	const app = new Server(manifest);
	await app.init({ env: process.env });

	const failures = [];
	const uniqueUrls = [...new Set(urls)].sort();
	const concurrency = 20;
	let index = 0;

	async function worker() {
		while (index < uniqueUrls.length) {
			const url = uniqueUrls[index++];
			const target = new URL(url, 'http://localhost').href;

			try {
				const response = await app.respond(new Request(target), {
					platform: {},
					getClientAddress: () => '127.0.0.1'
				});

				if (response.status < 200 || response.status >= 400) {
					failures.push(`${url} returned ${response.status}`);
				}
			} catch (error) {
				failures.push(`${url} failed: ${error.message}`);
			}
		}
	}

	await Promise.all(Array.from({ length: concurrency }, () => worker()));

	return failures;
}

const server = await createServer({
	appType: 'custom',
	server: {
		middlewareMode: true
	}
});

try {
	const { data } = await server.ssrLoadModule('/src/lib/typescript/data/_index_.ts');
	const { spells } = await server.ssrLoadModule(
		'/src/lib/typescript/data/internals/rules/spellcasting/spells/spell-data.ts'
	);
	const links = collectLinks(data);
	const pages = links.filter(({ value }) => isPageData(value));
	const hrefCounts = new Map();

	for (const { value } of pages) {
		const href = normalizeHref(value.href);
		hrefCounts.set(href, (hrefCounts.get(href) ?? 0) + 1);
	}

	const duplicateHrefs = [...hrefCounts.entries()]
		.filter(([, count]) => count > 1)
		.map(([href, count]) => `${href} appears ${count} times`);
	const badRoutes = pages
		.filter(({ value }) => !isKnownInternalRoute(value.href))
		.map(({ path, value }) => `${path} -> ${value.href}`);
	const badDataPaths = collectQuotedDataPaths()
		.filter((path) => getDataValue(data, path) === undefined);
	const missingAssets = [
		...collectInternalAssets(data),
		...collectSourceAssetUrls()
	]
		.filter((asset, index, all) => all.indexOf(asset) === index)
		.filter((asset) => !fileExistsForAsset(asset));
	const invalidSpellRoutes = spells
		.filter((spell) => !/^[-a-z0-9]+$/.test(spell.slug))
		.map((spell) => spell.slug);
	const duplicateSpellRoutes = [...spells.reduce((counts, spell) => {
		counts.set(spell.slug, (counts.get(spell.slug) ?? 0) + 1);
		return counts;
	}, new Map()).entries()]
		.filter(([, count]) => count > 1)
		.map(([slug, count]) => `/spells/${slug} appears ${count} times`);
	const crawlBaseUrl = getCrawlBaseUrl();
	const routeUrls = [
		...pages
			.map(({ value }) => value.href)
			.filter((href) => href.startsWith('/')),
		...spells.map((spell) => `/spells/${spell.slug}`)
	];
	const crawlBuilt = shouldCrawlBuiltOutput();
	const crawlFailures = crawlBuilt
		? await crawlBuiltOutput(routeUrls)
		: await crawlUrls(crawlBaseUrl, routeUrls);
	const placeholderFindings = collectPlaceholderFindings()
		.map((finding) => `${finding.file}:${finding.line} ${finding.text}`);

	console.log(`Indexed link entries: ${links.length}`);
	console.log(`Indexed page entries: ${pages.length}`);
	console.log(`Indexed spell routes: ${spells.length}`);
	if (crawlBaseUrl) {
		console.log(`Crawled local base URL: ${crawlBaseUrl}`);
	}
	if (crawlBuilt) {
		console.log('Crawled built SvelteKit output');
	}

	const failed = [
		report('duplicate internal hrefs', duplicateHrefs),
		report('unknown internal route shapes', badRoutes),
		report('missing central data paths used in source', badDataPaths),
		report('missing internal static assets', missingAssets),
		report('invalid spell route slugs', invalidSpellRoutes),
		report('duplicate spell route slugs', duplicateSpellRoutes),
		report('local HTTP route crawl', crawlFailures),
		report('placeholder or unfinished content markers', placeholderFindings)
	].some(Boolean);

	process.exitCode = failed ? 1 : 0;
} finally {
	await server.close();
}
