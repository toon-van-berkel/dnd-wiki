import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const sourceRoots = ['src', 'scripts'];

function walk(directory) {
	if (!existsSync(directory)) return [];

	return readdirSync(directory).flatMap((entryName) => {
		const path = join(directory, entryName);
		const stat = statSync(path);

		if (stat.isDirectory()) {
			if (/^(?:node_modules|\.svelte-kit|build|dist|coverage)$/.test(entryName)) return [];
			return walk(path);
		}

		return [relative('.', path).replaceAll('\\', '/')];
	});
}

function read(path) {
	return readFileSync(path, 'utf8');
}

function sourceFiles(pattern = /\.(?:svelte|ts|js|mjs|scss|md|json)$/) {
	return sourceRoots.flatMap(walk).filter((path) => pattern.test(path));
}

function registrySources() {
	return walk('src/lib/page/registry/data').filter((path) => path.endsWith('.ts'));
}

function collectLiteralValues(source, property) {
	const pattern = new RegExp(`${property}:\\s*['"]([^'"]+)['"]`, 'g');
	return [...source.matchAll(pattern)].map((match) => match[1]);
}

function registryValues(property) {
	return registrySources().flatMap((path) => collectLiteralValues(read(path), property));
}

function routeHrefFromPage(path) {
	const route = path
		.replace(/^src\/routes/, '')
		.replace(/\/\+page\.svelte$/, '');

	return route || '/';
}

function dynamicTechniqueHrefs() {
	return [...read('src/lib/data/techniques/shinobi.ts').matchAll(/slug: '([^']+)'/g)]
		.map((match) => `/spells-and-abilities/techniques/${match[1]}`);
}

function dynamicSpellHrefs() {
	return [...read('src/lib/data/spells/spells.ts').matchAll(/slug: '([^']+)'/g)]
		.map((match) => `/spells-and-abilities/spells/${match[1]}`);
}

function arrayLiteralValues(source, exportName) {
	const match = source.match(new RegExp(`export const ${exportName}\\s*=\\s*\\[([\\s\\S]*?)\\]`));
	if (!match) return [];
	return [...match[1].matchAll(/['"]([^'"]+)['"]/g)].map((value) => value[1]);
}

test('page registry has stable unique ids and existing routes', () => {
	const ids = registryValues('id');
	const hrefs = registryValues('href');
	const routeHrefs = new Set(
		walk('src/routes')
			.filter((path) => path.endsWith('/+page.svelte') || path === 'src/routes/+page.svelte')
			.map(routeHrefFromPage)
	);
	for (const href of [...dynamicTechniqueHrefs(), ...dynamicSpellHrefs()]) {
		routeHrefs.add(href);
	}

	assert.equal(ids.length, new Set(ids).size, 'registry ids must be unique');
	assert.equal(hrefs.length, new Set(hrefs).size, 'registry hrefs must be unique');

	for (const href of hrefs) {
		assert.ok(routeHrefs.has(href), `registry href ${href} must have a route`);
	}
});

test('navigation and footer use registry page ids only', () => {
	const ids = new Set(registryValues('id'));
	const navigation = read('src/lib/config/navigation.ts');
	const referencedIds = [...navigation.matchAll(/['"]([a-z0-9-]+(?:--[a-z0-9-]+)*)['"]/g)]
		.map((match) => match[1])
		.filter((id) => !['main', 'browse', 'resources', 'wiki', 'project', 'legal'].includes(id));

	for (const id of referencedIds) {
		assert.ok(ids.has(id), `navigation references unknown page ${id}`);
	}

	assert.doesNotMatch(navigation, /\bhref\s*:/);
	assert.doesNotMatch(navigation, /\btitle\s*:/);
	assert.doesNotMatch(navigation, /\blabel\s*:/);
});

test('party and person config own names and membership', () => {
	const people = read('src/lib/config/people.ts');
	const parties = read('src/lib/config/parties.ts');

	assert.match(people, /export const people/);
	assert.match(parties, /memberIds:/);
	assert.match(parties, /dmId:/);
	assert.doesNotMatch(parties, /\bmembers\s*:/);
	assert.ok(!existsSync('src/lib/config/dms.ts'), 'DM names must not be stored separately');
});

test('availability is page-id keyed and party-id based', () => {
	const availability = read('src/lib/data/availability.ts');
	const registryIds = new Set(registryValues('id'));
	const partyIds = new Set(arrayLiteralValues(read('src/lib/config/parties.ts'), 'guestPlayerIds'));

	for (const id of registryValues('id')) {
		if (id.startsWith('classes--') || id.startsWith('species--')) {
			registryIds.add(id);
		}
	}

	for (const id of collectLiteralValues(availability, 'pageId')) {
		assert.ok(registryIds.has(id), `availability references unknown page ${id}`);
	}

	for (const match of availability.matchAll(/['"](i[1-8])['"]/g)) {
		assert.ok(/^i[1-8]$/.test(match[1]));
	}

	assert.doesNotMatch(availability, /Party 1|Party 2|LuckyClover|FCGoonUnited/);
	assert.ok(partyIds.has('sam'), 'guest players are authored in party config');
});

test('deleted wiki architecture and duplicate systems stay deleted', () => {
	const forbiddenPaths = [
		['src/lib', 'wiki'].join('/'),
		['src/lib/domains', 'wiki'].join('/'),
		'src/lib/components/home',
		['src/lib/components', 'PageHeader.svelte'].join('/'),
		['src/lib/components', 'PageSection.svelte'].join('/'),
		['src/lib/layout', 'Wiki.svelte'].join('/'),
		['src/lib/layout/snippets', 'Sidebar.svelte'].join('/'),
		['src/lib/components/layout', 'WikiLayout.svelte'].join('/'),
		['src/lib/utils', 'wiki-search.ts'].join('/'),
		['src/lib/utils', 'wiki-preferences.ts'].join('/')
	];

	for (const path of forbiddenPaths) {
		assert.ok(!existsSync(path), `${path} should not exist`);
	}
});

test('source imports use current architecture paths', () => {
	const wikiSpecifier = new RegExp(`['"]\\$lib/${'wiki'}(?:/|['"])`);
	const deletedWikiUtilities = new RegExp(`utils/${'wiki'}-(?:search|preferences)`);
	const sourceImportJs = /from ['"][^'"]+\.js['"]/;

	for (const file of sourceFiles(/\.(?:svelte|ts)$/)) {
		const source = read(file);
		assert.doesNotMatch(source, wikiSpecifier, `${file} imports deleted wiki architecture`);
		assert.doesNotMatch(source, /config\/campaigns/, `${file} imports deleted campaign config`);
		assert.doesNotMatch(source, deletedWikiUtilities, `${file} imports deleted utility`);
		assert.doesNotMatch(source, sourceImportJs, `${file} has a normal source .js import`);
	}
});

test('route pages leave page identity to the root layout', () => {
	for (const file of walk('src/routes').filter((path) => path.endsWith('+page.svelte'))) {
		const source = read(file);
		assert.doesNotMatch(source, /import\s+PageHeader/, `${file} imports PageHeader`);
		assert.doesNotMatch(source, /<PageHeader\b/, `${file} renders PageHeader`);
		assert.doesNotMatch(source, /<svelte:head\b/, `${file} declares document metadata`);
	}
});

test('root layout owns metadata and PageHeader', () => {
	const layout = read('src/routes/+layout.svelte');
	const layoutLoad = read('src/routes/+layout.ts');
	assert.match(layout, /Metadata/);
	assert.match(layout, /PageHeader/);
	assert.match(layout, /getPageEntryByHref/);
	assert.match(layout, /data\.pathname/);
	assert.match(layoutLoad, /normalizeRoutePathname/);
	assert.match(layoutLoad, /export const load/);
});
