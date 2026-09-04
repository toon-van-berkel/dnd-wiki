/*
	Location: scripts/audit-prelive.mjs
	Use: Checks release-blocking data, route, asset, and placeholder issues.
*/
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { createServer } from 'vite';

const root = process.cwd();
const srcDir = join(root, 'src');
const staticDir = join(root, 'static');
const buildDir = join(root, 'build');
const sourceExtensions = new Set(['.svelte', '.ts', '.js', '.scss']);
const generatedTextExtensions = new Set([
	'.css',
	'.html',
	'.js',
	'.json',
	'.map',
	'.svg',
	'.txt',
	'.webmanifest',
	'.xml'
]);
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

function toPosixPath(path) {
	return path.replaceAll('\\', '/');
}

function getBuildFiles() {
	if (!existsSync(buildDir)) {
		return [];
	}

	return collectFiles(buildDir);
}

function getBuildTextFiles() {
	return getBuildFiles()
		.filter((file) => generatedTextExtensions.has(extname(file)));
}

function getBuildHtmlFiles() {
	return getBuildFiles()
		.filter((file) => extname(file) === '.html')
		.filter((file) => toPosixPath(file.slice(buildDir.length + 1)) !== '404.html');
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

function withTrailingSlash(href) {
	const [path, suffix = ''] = href.split(/([?#].*)/, 2);

	if (path === '/' || path.endsWith('/')) {
		return href;
	}

	return `${path}/${suffix}`;
}

function getOutputFileForRoute(href) {
	const cleanUrl = normalizeHref(withTrailingSlash(href));
	const routePath = cleanUrl === '/' ? 'index.html' : join(cleanUrl.slice(1), 'index.html');

	return join(buildDir, routePath);
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
		clean === '/discord' ||
		clean === '/rules/spellcasting/cantrips' ||
		clean === '/rules/spellcasting/spells' ||
		/^\/classes\/[^/]+(?:\/[^/]+)?$/.test(clean) ||
		/^\/discord\/[^/]+$/.test(clean) ||
		/^\/equipment\/[^/]+$/.test(clean) ||
		/^\/equipment\/[^/]+\/[^/]+$/.test(clean) ||
		/^\/npcs\/[^/]+$/.test(clean) ||
		/^\/rules\/.+$/.test(clean) ||
		/^\/spells\/[^/]+$/.test(clean) ||
		/^\/[a-z0-9-]+$/.test(clean)
	);
}

function fileExistsForAsset(assetHref) {
	return existsSync(join(staticDir, assetHref.replace(/^\//, '')));
}

function buildFileExistsForAsset(assetHref) {
	return existsSync(join(buildDir, assetHref.replace(/^\//, '')));
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

function decodeHtmlEntities(value) {
	return value
		.replace(/&quot;/g, '"')
		.replace(/&#34;/g, '"')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>');
}

function getAttributeMap(tag) {
	const attributes = new Map();
	const regex = /([A-Za-z_:][-A-Za-z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
	let match;

	while ((match = regex.exec(tag))) {
		const [, name, doubleQuoted, singleQuoted, unquoted] = match;

		if (name === tag.match(/^<\s*([^\s/>]+)/)?.[1]) {
			continue;
		}

		attributes.set(name.toLowerCase(), decodeHtmlEntities(doubleQuoted ?? singleQuoted ?? unquoted ?? ''));
	}

	return attributes;
}

function getCurrentRouteFromHtmlFile(file) {
	const relative = toPosixPath(file.slice(buildDir.length + 1));

	if (relative === 'index.html') {
		return '/';
	}

	return `/${relative.replace(/\/index\.html$/, '/')}`;
}

function isSameSiteAbsoluteUrl(value, productionOrigin) {
	try {
		const url = new URL(value);

		return url.origin === productionOrigin || url.origin === 'http://sveltekit-prerender';
	} catch {
		return false;
	}
}

function toInternalBuildPath(value, htmlFile, productionOrigin) {
	if (!value || value.startsWith('#')) {
		return null;
	}

	if (/^(mailto|tel|javascript):/i.test(value)) {
		return null;
	}

	const baseUrl = `${productionOrigin}${getCurrentRouteFromHtmlFile(htmlFile)}`;

	try {
		const url = new URL(value, baseUrl);

		if (url.origin !== productionOrigin && url.origin !== 'http://sveltekit-prerender') {
			return null;
		}

		return url.pathname || '/';
	} catch {
		return null;
	}
}

function getTagAttributes(content, tagName) {
	const regex = new RegExp(`<${tagName}\\b[^>]*>`, 'gi');
	const tags = [];
	let match;

	while ((match = regex.exec(content))) {
		tags.push(getAttributeMap(match[0]));
	}

	return tags;
}

function isAssetPath(pathname) {
	return /\.(avif|css|gif|ico|jpg|jpeg|js|json|png|svg|txt|webmanifest|webp|xml)$/i.test(pathname);
}

function collectPrerenderOriginFindings() {
	return getBuildTextFiles()
		.flatMap((file) => {
			const content = readFileSync(file, 'utf8');

			if (!content.includes('sveltekit-prerender')) {
				return [];
			}

			return [`${toPosixPath(file.slice(root.length + 1))} contains sveltekit-prerender`];
		});
}

function collectGeneratedHtmlSeoFindings(productionOrigin) {
	const titleCounts = new Map();
	const titleFiles = new Map();
	const findings = {
		badCanonicals: [],
		missingTitles: [],
		duplicateTitles: [],
		missingDescriptions: [],
		h1Counts: [],
		missingCanonicals: [],
		internalLinksMarkedExternal: [],
		brokenInternalLinks: [],
		internalLinksMissingTrailingSlash: [],
		duplicateIds: [],
		invalidAriaDescribedby: [],
		interactiveTooltipContent: [],
		missingSeoAssets: [],
		invalidJsonLd: []
	};

	for (const file of getBuildHtmlFiles()) {
		const relative = toPosixPath(file.slice(root.length + 1));
		const content = readFileSync(file, 'utf8');
		const titles = [...content.matchAll(/<title>([\s\S]*?)<\/title>/gi)]
			.map((match) => decodeHtmlEntities(match[1].replace(/\s+/g, ' ').trim()))
			.filter(Boolean);

		if (titles.length !== 1) {
			findings.missingTitles.push(`${relative} has ${titles.length} title tags`);
		} else {
			titleCounts.set(titles[0], (titleCounts.get(titles[0]) ?? 0) + 1);
			titleFiles.set(titles[0], [...(titleFiles.get(titles[0]) ?? []), relative]);
		}

		const descriptions = getTagAttributes(content, 'meta')
			.filter((attributes) => attributes.get('name')?.toLowerCase() === 'description')
			.map((attributes) => attributes.get('content')?.trim() ?? '')
			.filter(Boolean);

		if (descriptions.length !== 1) {
			findings.missingDescriptions.push(`${relative} has ${descriptions.length} meta descriptions`);
		}

		const canonicals = getTagAttributes(content, 'link')
			.filter((attributes) => attributes.get('rel')?.toLowerCase() === 'canonical')
			.map((attributes) => attributes.get('href') ?? '')
			.filter(Boolean);

		if (canonicals.length !== 1) {
			findings.missingCanonicals.push(`${relative} has ${canonicals.length} canonical links`);
		} else if (!canonicals[0].startsWith(`${productionOrigin}/`)) {
			findings.badCanonicals.push(`${relative} canonical is ${canonicals[0]}`);
		}

		const h1Count = (content.match(/<h1\b/gi) ?? []).length;

		if (h1Count !== 1) {
			findings.h1Counts.push(`${relative} has ${h1Count} H1 elements`);
		}

		const idCounts = new Map();

		for (const tag of [...content.matchAll(/<[^/!][^>]*\sid=(?:"([^"]+)"|'([^']+)'|([^\s"'=<>`]+))[^>]*>/gi)]) {
			const id = decodeHtmlEntities(tag[1] ?? tag[2] ?? tag[3] ?? '');

			if (id) {
				idCounts.set(id, (idCounts.get(id) ?? 0) + 1);
			}
		}

		for (const [id, count] of idCounts.entries()) {
			if (count > 1) {
				findings.duplicateIds.push(`${relative} has duplicate id "${id}" ${count} times`);
			}
		}

		for (const tag of getTagAttributes(content, 'a')) {
			const describedBy = tag.get('aria-describedby');

			if (!describedBy) {
				continue;
			}

			for (const id of describedBy.split(/\s+/).filter(Boolean)) {
				if (!idCounts.has(id)) {
					findings.invalidAriaDescribedby.push(`${relative} aria-describedby references missing id "${id}"`);
				}
			}
		}

		const tooltipRegex = /<(?<tag>[A-Za-z][A-Za-z0-9:-]*)\b(?<attrs>[^>]*)\brole=["']tooltip["'][^>]*>(?<body>[\s\S]*?)<\/\k<tag>>/gi;
		let tooltipMatch;

		while ((tooltipMatch = tooltipRegex.exec(content))) {
			if (/<(?:a|button|input|select|textarea)\b/i.test(tooltipMatch.groups?.body ?? '')) {
				findings.interactiveTooltipContent.push(`${relative} has interactive content inside role="tooltip"`);
			}
		}

		for (const tag of getTagAttributes(content, 'a')) {
			const href = tag.get('href') ?? '';
			const internalPath = toInternalBuildPath(href, file, productionOrigin);

			if (!internalPath) {
				continue;
			}

			if (tag.get('target') === '_blank' || /\bnoopener\b|\bnoreferrer\b/i.test(tag.get('rel') ?? '')) {
				findings.internalLinksMarkedExternal.push(`${relative} links internally to ${href} with external-link attributes`);
			}

			const outputFile = isAssetPath(internalPath)
				? join(buildDir, internalPath.replace(/^\//, ''))
				: getOutputFileForRoute(internalPath);

			if (!existsSync(outputFile)) {
				findings.brokenInternalLinks.push(`${relative} links to missing ${href}`);
			}

			if (
				internalPath !== '/' &&
				!isAssetPath(internalPath) &&
				!/[?#]/.test(href) &&
				existsSync(getOutputFileForRoute(internalPath)) &&
				!new URL(href, `${productionOrigin}${getCurrentRouteFromHtmlFile(file)}`).pathname.endsWith('/')
			) {
				findings.internalLinksMissingTrailingSlash.push(`${relative} links to ${href} without trailing slash`);
			}
		}

		const seoAssetCandidates = [
			...getTagAttributes(content, 'link')
				.filter((attributes) => {
					const rel = attributes.get('rel')?.toLowerCase() ?? '';
					return rel === 'icon' || rel === 'apple-touch-icon' || rel === 'manifest';
				})
				.map((attributes) => attributes.get('href') ?? ''),
			...getTagAttributes(content, 'meta')
				.filter((attributes) => {
					const property = attributes.get('property')?.toLowerCase() ?? '';
					const name = attributes.get('name')?.toLowerCase() ?? '';
					return property === 'og:image' || name === 'twitter:image';
				})
				.map((attributes) => attributes.get('content') ?? '')
		];

		for (const asset of seoAssetCandidates) {
			const internalPath = toInternalBuildPath(asset, file, productionOrigin);

			if (internalPath && !buildFileExistsForAsset(internalPath)) {
				findings.missingSeoAssets.push(`${relative} references missing SEO asset ${asset}`);
			}
		}

		const jsonLdRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
		let jsonLdMatch;

		while ((jsonLdMatch = jsonLdRegex.exec(content))) {
			try {
				JSON.parse(decodeHtmlEntities(jsonLdMatch[1].trim()));
			} catch (error) {
				findings.invalidJsonLd.push(`${relative} has invalid JSON-LD: ${error.message}`);
			}
		}
	}

	findings.duplicateTitles = [...titleCounts.entries()]
		.filter(([, count]) => count > 1)
		.map(([title, count]) => `${title} appears ${count} times: ${titleFiles.get(title).join(', ')}`);

	return findings;
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
	if (!existsSync(buildDir)) {
		return ['Static build output is missing. Run pnpm build first.'];
	}

	const failures = [];
	const uniqueUrls = [...new Set(urls)].sort();

	for (const url of uniqueUrls) {
		const cleanUrl = normalizeHref(withTrailingSlash(url));
		const routePath = cleanUrl === '/' ? 'index.html' : join(cleanUrl.slice(1), 'index.html');
		const outputFile = join(buildDir, routePath);

		if (!existsSync(outputFile)) {
			failures.push(`${url} missing ${routePath}`);
		}
	}

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
	const { base } = await server.ssrLoadModule('/src/lib/typescript/data/core/_index_.ts');
	const { spells } = await server.ssrLoadModule(
		'/src/lib/typescript/data/internals/rules/spellcasting/spells/spell-data.ts'
	);
	const productionOrigin = base.siteLink.replace(/\/$/, '');
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
	const prerenderOriginFindings = collectPrerenderOriginFindings();
	const generatedHtmlSeoFindings = crawlBuilt
		? collectGeneratedHtmlSeoFindings(productionOrigin)
		: {
				badCanonicals: [],
				missingTitles: [],
				duplicateTitles: [],
				missingDescriptions: [],
				h1Counts: [],
				missingCanonicals: [],
				internalLinksMarkedExternal: [],
				brokenInternalLinks: [],
				internalLinksMissingTrailingSlash: [],
				duplicateIds: [],
				invalidAriaDescribedby: [],
				interactiveTooltipContent: [],
				missingSeoAssets: [],
				invalidJsonLd: []
			};
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
		report('generated public files without sveltekit-prerender origin', prerenderOriginFindings),
		report('generated canonical URLs use HTTPS production URLs', generatedHtmlSeoFindings.badCanonicals),
		report('generated pages have titles', generatedHtmlSeoFindings.missingTitles),
		report('generated page titles are unique', generatedHtmlSeoFindings.duplicateTitles),
		report('generated pages have meta descriptions', generatedHtmlSeoFindings.missingDescriptions),
		report('generated pages have exactly one H1', generatedHtmlSeoFindings.h1Counts),
		report('generated pages have canonical links', generatedHtmlSeoFindings.missingCanonicals),
		report('internal links are not marked as external', generatedHtmlSeoFindings.internalLinksMarkedExternal),
		report('generated internal links resolve', generatedHtmlSeoFindings.brokenInternalLinks),
		report('generated internal page links use trailing slashes', generatedHtmlSeoFindings.internalLinksMissingTrailingSlash),
		report('generated pages do not contain duplicate IDs', generatedHtmlSeoFindings.duplicateIds),
		report('aria-describedby references existing IDs', generatedHtmlSeoFindings.invalidAriaDescribedby),
		report('tooltip popups do not contain interactive content', generatedHtmlSeoFindings.interactiveTooltipContent),
		report('referenced SEO assets exist in build output', generatedHtmlSeoFindings.missingSeoAssets),
		report('generated JSON-LD syntax', generatedHtmlSeoFindings.invalidJsonLd),
		report('placeholder or unfinished content markers', placeholderFindings)
	].some(Boolean);

	process.exitCode = failed ? 1 : 0;
} finally {
	await server.close();
}
