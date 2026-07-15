import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import test from 'node:test';
import {
	dungeonMasters,
	getDungeonMaster,
	getParty,
	getPartiesForDungeonMaster,
	parties,
	validateCampaignConfig
} from '../.svelte-kit/wiki-search-tests/src/lib/config/campaigns.js';
import {
	footerPageIds,
	getWikiChildren,
	getWikiPage,
	getWikiPageByHref,
	validateWikiRegistry,
	wikiPages
} from '../.svelte-kit/wiki-search-tests/src/lib/wiki/registry.js';
import {
	collectionEntries,
	searchableEntries
} from '../.svelte-kit/wiki-search-tests/src/lib/wiki/search-index.js';
import {
	buildHeaderSearchHref,
	createEmptySearchState,
	getTagFacets,
	getTypeFacets,
	groupTagFacets,
	paginateResults,
	readSearchStateFromParams,
	resetPageForSearchChange,
	searchWiki
} from '../.svelte-kit/wiki-search-tests/src/lib/utils/wiki-search.js';
import {
	clearWikiPreferences,
	createEmptyWikiPreferences,
	loadWikiPreferences,
	parseWikiPreferences,
	saveWikiPreferences,
	sanitizeWikiPreferences
} from '../.svelte-kit/wiki-search-tests/src/lib/utils/wiki-preferences.js';
import { navigation } from '../.svelte-kit/wiki-search-tests/src/lib/wiki/navigation.js';

function titlesFor(state) {
	return searchWiki({
		query: '',
		typeIds: [],
		tagIds: [],
		page: 1,
		...state
	}).map((entry) => entry.title);
}

function createMemoryStorage(initial = {}) {
	const store = new Map(Object.entries(initial));

	return {
		getItem: (key) => store.get(key) ?? null,
		setItem: (key, value) => store.set(key, String(value)),
		removeItem: (key) => store.delete(key)
	};
}

test('campaign configuration validates', () => {
	assert.doesNotThrow(validateCampaignConfig);
});

test('every party id is unique', () => {
	assert.equal(new Set(parties.map((party) => party.id)).size, parties.length);
});

test('every Dungeon Master id is unique', () => {
	assert.equal(new Set(dungeonMasters.map((dungeonMaster) => dungeonMaster.id)).size, dungeonMasters.length);
});

test('configured parties reference valid Dungeon Masters', () => {
	for (const party of parties) {
		assert.ok(getDungeonMaster(party.dmId), `${party.id} references ${party.dmId}`);
	}
});

test('party ordering is stable', () => {
	assert.deepEqual(
		parties.map((party) => party.id),
		['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']
	);
});

test('party and Dungeon Master lookups work', () => {
	assert.equal(getParty('i2')?.shortName, 'LuckyClover');
	assert.equal(getDungeonMaster('toon')?.shortName, 'Toon');
	assert.ok(getPartiesForDungeonMaster('toon').some((party) => party.id === 'i1'));
});

test('Wiki registry validates', () => {
	assert.doesNotThrow(validateWikiRegistry);
});

test('every Wiki page id is unique', () => {
	assert.equal(new Set(wikiPages.map((page) => page.id)).size, wikiPages.length);
});

test('every Wiki page href is unique', () => {
	assert.equal(new Set(wikiPages.map((page) => page.href)).size, wikiPages.length);
});

test('registry parent ids resolve', () => {
	for (const page of wikiPages) {
		if (page.parentId) {
			assert.ok(getWikiPage(page.parentId), `${page.id} references ${page.parentId}`);
		}
	}
});

test('navigation derives from registry', () => {
	assert.deepEqual(
		navigation.map((item) => item.href),
		wikiPages.filter((page) => page.navigation === true && !page.parentId).map((page) => page.href)
	);
	assert.ok(getWikiChildren('classes').some((page) => page.href === '/classes/rogue'));
});

test('footer page references resolve', () => {
	for (const pageId of footerPageIds) {
		assert.ok(getWikiPage(pageId), pageId);
	}
});

test('PageHeader does not insert a default eyebrow', () => {
	const source = readFileSync('src/lib/components/PageHeader.svelte', 'utf8');
	assert.equal(source.includes("?? 'Wiki reference'"), false);
	assert.match(source, /\{#if eyebrow\}/);
});

test('classes layout owns page headers for its child pages', () => {
	const layoutSource = readFileSync('src/routes/classes/+layout.svelte', 'utf8');
	assert.match(layoutSource, /import PageHeader/);
	assert.match(layoutSource, /getWikiPageByHref\(page\.url\.pathname\)/);
	assert.match(layoutSource, /<PageHeader/);

	for (const pagePath of routePageFiles('src/routes/classes')) {
		const source = readFileSync(pagePath, 'utf8');
		assert.doesNotMatch(source, /import\s+PageHeader/, `${pagePath} imports PageHeader`);
		assert.doesNotMatch(source, /<PageHeader\b/, `${pagePath} renders PageHeader`);
		assert.doesNotMatch(source, /getWikiPage\(/, `${pagePath} resolves page metadata locally`);
		assert.doesNotMatch(source, /\bpageMeta\b/, `${pagePath} duplicates layout metadata state`);
	}
});

test('registry href lookup handles trailing slashes and deployment base paths', () => {
	assert.equal(getWikiPageByHref('/classes/')?.id, 'classes');
	assert.equal(getWikiPageByHref('/test-repository/classes')?.id, 'classes');
	assert.equal(
		getWikiPageByHref('/test-repository/classes/cleric/life-domain?x=1#top')?.id,
		'classes--cleric--life-domain'
	);
});

test('SearchFilterGroup skips empty option groups', () => {
	const source = readFileSync('src/lib/components/search/SearchFilterGroup.svelte', 'utf8');
	assert.match(source, /\{#if options\.length\}/);
});

test('SearchFilterGroup keeps accessible group names while moving visible titles inside', () => {
	const source = readFileSync('src/lib/components/search/SearchFilterGroup.svelte', 'utf8');
	assert.match(source, /<legend class="sr-only">\{title\}<\/legend>/);
	assert.match(source, /<div class="search-filter-group__header">/);
	assert.match(source, /<h3>\{title\}<\/h3>/);
	assert.doesNotMatch(source, /<legend>\s*\{#if collapsible\}/);
});

test('SearchFilterGroup option rows use padded reusable option markup', () => {
	const source = readFileSync('src/lib/components/search/SearchFilterGroup.svelte', 'utf8');
	assert.match(source, /class="search-filter-option"/);
	assert.match(source, /grid-template-columns: auto minmax\(0, 1fr\) auto/);
});

test('SelectField uses the shared form-control class', () => {
	const source = readFileSync('src/lib/components/forms/SelectField.svelte', 'utf8');
	assert.match(source, /class="form-control"/);
	assert.match(source, /@include forms\.select-control/);
});

test('Preferences still use SelectField', () => {
	const source = readFileSync('src/lib/components/WikiPreferences.svelte', 'utf8');
	assert.match(source, /import SelectField/);
	assert.match(source, /<SelectField/);
});

test('Search uses reusable filter groups and shared form controls', () => {
	const source = readFileSync('src/routes/search/+page.svelte', 'utf8');
	assert.match(source, /import SearchFilterGroup/);
	assert.match(source, /<SearchFilterGroup/);
	assert.match(source, /class="form-control"/);
});

test('missing localStorage data returns empty preferences', () => {
	globalThis.localStorage = createMemoryStorage();
	assert.deepEqual(loadWikiPreferences(), {});
	delete globalThis.localStorage;
});

test('valid saved preferences are restored', () => {
	assert.deepEqual(parseWikiPreferences('{"partyId":"i1","dmId":"toon"}'), {
		partyId: 'i1',
		dmId: 'toon'
	});
});

test('invalid preference JSON does not throw', () => {
	assert.deepEqual(parseWikiPreferences('{bad-json'), {});
});

test('unknown party IDs are removed', () => {
	assert.deepEqual(sanitizeWikiPreferences({ partyId: 'missing', dmId: 'toon' }), { dmId: 'toon' });
});

test('unknown Dungeon Master IDs are removed', () => {
	assert.deepEqual(sanitizeWikiPreferences({ partyId: 'i1', dmId: 'unknown' }), { partyId: 'i1' });
});

test('partial preferences remain valid', () => {
	assert.deepEqual(sanitizeWikiPreferences({ partyId: 'i2' }), { partyId: 'i2' });
	assert.deepEqual(sanitizeWikiPreferences({ dmId: 'toon' }), { dmId: 'toon' });
});

test('clearing preferences returns the empty state', () => {
	globalThis.localStorage = createMemoryStorage();
	saveWikiPreferences({ partyId: 'i1', dmId: 'toon' });
	clearWikiPreferences();
	assert.deepEqual(loadWikiPreferences(), createEmptyWikiPreferences());
	delete globalThis.localStorage;
});

test('preference parsing does not require browser globals', () => {
	delete globalThis.localStorage;
	assert.deepEqual(parseWikiPreferences(null), {});
});

test('collection pages do not participate in facets', () => {
	const typeFacets = getTypeFacets(createEmptySearchState());
	assert.equal(typeFacets.some((facet) => facet.id === 'collection'), false);
	assert.equal(searchableEntries.some((entry) => entry.kind === 'collection'), false);
	assert.ok(collectionEntries.some((entry) => entry.kind === 'collection'));
});

test('irrelevant content types are omitted', () => {
	const facets = getTypeFacets({ query: 'elf', typeIds: [], tagIds: [], page: 1 });
	assert.equal(facets.some((facet) => facet.id === 'class'), false);
	assert.ok(facets.some((facet) => facet.id === 'species'));
});

test('relevant content types show correct counts', () => {
	const species = getTypeFacets({ query: 'elf', typeIds: [], tagIds: [], page: 1 }).find(
		(facet) => facet.id === 'species'
	);
	assert.equal(species?.count, 2);
});

test('selected zero-count content types remain visible', () => {
	const classFacet = getTypeFacets({ query: 'elf', typeIds: ['class'], tagIds: [], page: 1 }).find(
		(facet) => facet.id === 'class'
	);
	assert.equal(classFacet?.selected, true);
	assert.equal(classFacet?.count, 0);
});

test('empty tag groups are omitted', () => {
	const groups = groupTagFacets(getTagFacets({ query: 'elf', typeIds: [], tagIds: [], page: 1 }));
	assert.equal(groups.some((group) => group.facets.length === 0), false);
});

test('irrelevant tags are omitted', () => {
	const facets = getTagFacets({ query: 'elf', typeIds: [], tagIds: [], page: 1 });
	assert.equal(facets.some((facet) => facet.id === 'stealth'), false);
});

test('selected zero-count tags remain visible', () => {
	const facet = getTagFacets({ query: 'elf', typeIds: [], tagIds: ['stealth'], page: 1 }).find(
		(tag) => tag.id === 'stealth'
	);
	assert.equal(facet?.selected, true);
	assert.equal(facet?.count, 0);
});

test('tags are returned in the correct groups', () => {
	const groups = groupTagFacets(getTagFacets(createEmptySearchState()));
	assert.ok(groups.find((group) => group.id === 'combat')?.facets.some((tag) => tag.id === 'melee'));
	assert.ok(groups.find((group) => group.id === 'flavour')?.facets.some((tag) => tag.id === 'infernal'));
});

test('search-query changes update facets', () => {
	const allTypeCount = getTypeFacets(createEmptySearchState()).length;
	const elfTypeCount = getTypeFacets({ query: 'elf', typeIds: [], tagIds: [], page: 1 }).length;
	assert.ok(elfTypeCount < allTypeCount);
});

test('content-type selections update tag facets', () => {
	const classTags = getTagFacets({ query: '', typeIds: ['class'], tagIds: [], page: 1 });
	assert.equal(classTags.some((tag) => tag.id === 'travel'), false);
	assert.ok(classTags.some((tag) => tag.id === 'melee'));
});

test('tag selections update content-type facets', () => {
	const facets = getTypeFacets({ query: '', typeIds: [], tagIds: ['stealth'], page: 1 });
	assert.ok(facets.every((facet) => facet.count > 0));
});

test('facet calculations use the complete result set before pagination', () => {
	const allResults = searchWiki(createEmptySearchState());
	const classFacet = getTypeFacets(createEmptySearchState()).find((facet) => facet.id === 'class');
	assert.equal(classFacet?.count, allResults.filter((entry) => entry.kind === 'class').length);
});

test('page results remain limited to 30', () => {
	const page = paginateResults(searchWiki(createEmptySearchState()), 1);
	assert.ok(page.items.length <= 30);
});

test('invalid URL filters are removed', () => {
	const state = readSearchStateFromParams(new URLSearchParams('type=species,missing&tags=stealth,nope'));
	assert.deepEqual(state.typeIds, ['species']);
	assert.deepEqual(state.tagIds, ['stealth']);
});

test('header search query generation trims whitespace', () => {
	assert.equal(buildHeaderSearchHref('  stealth   rogue  '), '/search?q=stealth+rogue');
});

test('empty header search navigates to /search', () => {
	assert.equal(buildHeaderSearchHref('   '), '/search');
});

test('header search with text creates the correct q parameter', () => {
	assert.equal(buildHeaderSearchHref('elf'), '/search?q=elf');
});

test('search page header submission preserves valid type and tag filters but removes page', () => {
	assert.equal(
		buildHeaderSearchHref('rogue', {
			currentRouteId: '/search',
			currentSearchParams: new URLSearchParams('type=class,missing&tags=stealth,nope&page=3')
		}),
		'/search?q=rogue&type=class&tags=stealth'
	);
});

test('collection entries are excluded from normal results', () => {
	assert.equal(titlesFor({ query: 'species' }).includes('Species'), false);
	assert.ok(collectionEntries.some((entry) => entry.title === 'Species'));
});

test('individual Species entries remain searchable', () => {
	assert.ok(titlesFor({ query: 'human' }).includes('Human'));
	assert.ok(titlesFor({ query: 'elf' }).includes('Elf'));
});

test('exact title matches rank above description-only matches', () => {
	const results = searchWiki({ query: 'rogue', typeIds: [], tagIds: [], page: 1 });
	assert.equal(results[0].title, 'Rogue');
});

test('aliases and multi-word queries are searchable', () => {
	assert.ok(titlesFor({ query: 'race' }).includes('Human'));
	assert.ok(titlesFor({ query: 'stealth rogue' }).includes('Rogue'));
});

test('search/filter changes reset the page to 1', () => {
	assert.equal(resetPageForSearchChange({ query: 'rogue', typeIds: ['class'], tagIds: [], page: 3 }).page, 1);
});

function routePageFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);

		if (entry.isDirectory()) {
			return routePageFiles(path);
		}

		return entry.isFile() && entry.name === '+page.svelte' ? [relative('.', path)] : [];
	});
}
