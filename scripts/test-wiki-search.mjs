import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import test from 'node:test';
import {
	allPartyIds,
	campaignConfig,
	dungeonMasterIds,
	dungeonMasters,
	getDungeonMaster,
	getDungeonMasterForParty,
	getParty,
	getPartiesForDungeonMaster,
	isDungeonMasterId,
	isPartyId,
	partyIds,
	parties,
	selectAllParties,
	selectParties,
	validateCampaignConfig
} from '../.svelte-kit/wiki-search-tests/src/lib/config/campaigns.js';
import {
	availability,
	getAvailabilityInventory,
	getAvailabilityByHref,
	normalizeAvailabilityHref,
	validateAvailabilityConfig
} from '../.svelte-kit/wiki-search-tests/src/lib/data/availability.js';
import { aiGeneratedImages } from '../.svelte-kit/wiki-search-tests/src/lib/data/ai-images.js';
import { classes } from '../.svelte-kit/wiki-search-tests/src/lib/wiki/classes/classes.js';
import { species } from '../.svelte-kit/wiki-search-tests/src/lib/wiki/species/species.js';
import {
	getAvailabilityMetadataForHref
} from '../.svelte-kit/wiki-search-tests/src/lib/utils/availability-metadata.js';
import {
	sanitizeStoredFilters
} from '../.svelte-kit/wiki-search-tests/src/lib/utils/content-filters.js';
import {
	footerPageIds,
	getFooterPages,
	getWikiChildren,
	getWikiPage,
	getWikiPageByHref,
	validateWikiRegistry,
	wikiPages
} from '../.svelte-kit/wiki-search-tests/src/lib/wiki/registry.js';
import { staticPages } from '../.svelte-kit/wiki-search-tests/src/lib/wiki/static-pages.js';
import { wikiIconIds } from '../.svelte-kit/wiki-search-tests/src/lib/wiki/icon-ids.js';
import {
	collectionEntries,
	searchIndex,
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
import {
	getNavigationChildren,
	navigation
} from '../.svelte-kit/wiki-search-tests/src/lib/wiki/navigation.js';

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

test('campaign configuration object keys match internal ids', () => {
	for (const [key, party] of Object.entries(campaignConfig.parties)) {
		assert.equal(party.id, key);
	}

	for (const [key, dungeonMaster] of Object.entries(campaignConfig.dungeonMasters)) {
		assert.equal(dungeonMaster.id, key);
	}
});

test('configured parties reference valid Dungeon Masters', () => {
	for (const party of parties) {
		assert.ok(getDungeonMaster(party.dmId), `${party.id} references ${party.dmId}`);
	}
});

test('party ordering derives from configured order values', () => {
	const orderedConfigPartyIds = Object.values(campaignConfig.parties)
		.toSorted((a, b) => a.order - b.order)
		.map((party) => party.id);

	assert.deepEqual(parties.map((party) => party.id), orderedConfigPartyIds);
	assert.equal(new Set(parties.map((party) => party.order)).size, parties.length);
	assert.ok(parties.every((party) => Number.isInteger(party.order) && party.order > 0));
});

test('party and Dungeon Master lookups work', () => {
	for (const party of parties) {
		assert.strictEqual(getParty(party.id), party);
		assert.strictEqual(getDungeonMasterForParty(party.id), getDungeonMaster(party.dmId));
		assert.ok(isPartyId(party.id));
	}

	for (const dungeonMaster of dungeonMasters) {
		assert.strictEqual(getDungeonMaster(dungeonMaster.id), dungeonMaster);
		assert.ok(isDungeonMasterId(dungeonMaster.id));
	}

	assert.equal(isPartyId('unknown'), false);
	assert.equal(isDungeonMasterId('unknown'), false);
});

test('Dungeon Master party helpers derive ordered relationships', () => {
	for (const dungeonMaster of dungeonMasters) {
		assert.deepEqual(
			getPartiesForDungeonMaster(dungeonMaster.id),
			parties.filter((party) => party.dmId === dungeonMaster.id)
		);
	}
});

test('party id collections and selectors derive from configuration', () => {
	assert.deepEqual(partyIds, Object.keys(campaignConfig.parties));
	assert.deepEqual(dungeonMasterIds, Object.keys(campaignConfig.dungeonMasters));
	assert.deepEqual(allPartyIds, parties.map((party) => party.id));
	assert.deepEqual(selectAllParties(), parties.map((party) => party.id));
	assert.equal(new Set(selectAllParties()).size, parties.length);
});

test('campaign identity aliases are owned by campaign configuration only', () => {
	const source = readFileSync('src/lib/config/campaigns.ts', 'utf8');

	assert.match(source, /export type PartyId = keyof typeof campaignConfig\.parties/);
	assert.match(source, /export type DungeonMasterId = keyof typeof campaignConfig\.dungeonMasters/);
	assert.doesNotMatch(source, /\bPartyCode\b/);
});

test('selectParties preserves valid requested order and filters unknown ids', () => {
	const [firstParty, secondParty] = parties;
	assert.deepEqual(
		selectParties(secondParty.id, 'unknown-party', firstParty.id),
		[secondParty.id, firstParty.id]
	);
});

test('unused campaign compatibility modules have been removed', () => {
	for (const file of ['src/lib/data/parties.ts', 'src/lib/data/dungeon-masters.ts']) {
		assert.equal(existsSync(file), false, `${file} should not remain without consumers`);
	}
});

test('configured party colour tokens exist in tokens.scss', () => {
	const tokenSource = readFileSync('src/lib/styles/tokens.scss', 'utf8');
	const definedTokens = new Set([...tokenSource.matchAll(/(--[a-z0-9-]+)\s*:/g)].map((match) => match[1]));

	for (const party of parties) {
		assert.match(party.colorToken, /^--party-[a-z0-9-]+$/);
		assert.match(party.softColorToken, /^--party-[a-z0-9-]+-soft$/);
		assert.ok(definedTokens.has(party.colorToken), `${party.colorToken} is missing from tokens.scss`);
		assert.ok(definedTokens.has(party.softColorToken), `${party.softColorToken} is missing from tokens.scss`);
	}
});

test('campaign data is not duplicated in facades, imports, or local helpers', () => {
	for (const file of sourceFiles('src')) {
		const normalizedFile = file.replaceAll('\\', '/');

		if (normalizedFile === 'src/lib/config/campaigns.ts') {
			continue;
		}

		const source = readFileSync(file, 'utf8');

		assert.doesNotMatch(
			source,
			/\$lib\/data\/(?:parties|dungeon-masters)|\.\.?\/(?:\.\.\/)*data\/(?:parties|dungeon-masters)\.js/,
			`${file} imports a removed campaign compatibility module`
		);
		assert.doesNotMatch(source, /\bfunction\s+selectAllParties\b/, `${file} defines a local all-party helper`);
		assert.doesNotMatch(
			source,
			/selectParties\(\s*['"]i1['"]\s*,\s*['"]i2['"]\s*,\s*['"]i3['"]\s*,\s*['"]i4['"]\s*,\s*['"]i5['"]\s*,\s*['"]i6['"]\s*,\s*['"]i7['"]\s*,\s*['"]i8['"]\s*\)/,
			`${file} repeats the complete party id list`
		);
	}
});

test('deleted data modules have no active imports or compiler inputs', () => {
	const deletedModules = [
		'src/lib/data/classes.ts',
		'src/lib/data/parties.ts',
		'src/lib/data/dungeon-masters.ts'
	];
	const deletedImportPatterns = [
		/\$lib\/data\/classes\b/,
		/\$lib\/data\/parties\b/,
		/\$lib\/data\/dungeon-masters\b/,
		/src\/lib\/data\/classes\b/,
		/src\/lib\/data\/parties\b/,
		/src\/lib\/data\/dungeon-masters\b/
	];

	for (const deletedModule of deletedModules) {
		assert.equal(existsSync(deletedModule), false, `${deletedModule} should stay removed`);
	}

	for (const file of [...sourceFiles('src'), ...scriptFiles('scripts')]) {
		const source = readFileSync(file, 'utf8');
		const importSource = [...source.matchAll(/import\s+[\s\S]*?\s+from\s+['"][^'"]+['"]/g)]
			.map((match) => match[0])
			.join('\n');

		for (const pattern of deletedImportPatterns) {
			assert.doesNotMatch(importSource, pattern, `${file} imports a deleted data module`);
		}
	}

	const testConfig = readFileSync('tsconfig.test.json', 'utf8');

	for (const deletedModule of deletedModules) {
		assert.doesNotMatch(testConfig, new RegExp(escapeRegExp(deletedModule)), `tsconfig.test.json includes ${deletedModule}`);
	}
});

test('compatibility facades are either consumed pure re-exports or removed', () => {
	const facades = sourceFiles('src').filter(isCompatibilityFacade);

	for (const facade of facades) {
		const source = readFileSync(facade, 'utf8');
		const consumers = sourceConsumers(facade);

		assert.ok(consumers.length > 0, `${facade} is an unused compatibility facade`);
		assert.doesNotMatch(source, /\b(?:const|let|var)\s+\w+\s*=\s*(?:\{|\[)/, `${facade} contains editable data`);
		assert.doesNotMatch(source, /\bfunction\b|=>\s*\{/, `${facade} contains transformation logic`);
	}
});

test('core internal lookup maps and navigation search are not accidentally exported', () => {
	assert.doesNotMatch(readFileSync('src/lib/config/campaigns.ts', 'utf8'), /export const (?:partyById|dungeonMasterById)\b/);
	assert.doesNotMatch(readFileSync('src/lib/wiki/registry.ts', 'utf8'), /export const wikiPageBy(?:Id|Href)\b/);
	assert.doesNotMatch(readFileSync('src/lib/wiki/navigation.ts', 'utf8'), /export function findNavigationItem\b/);
});

test('campaign ids are not manually unioned or unsafely cast outside configuration', () => {
	for (const file of sourceFiles('src')) {
		const normalizedFile = file.replaceAll('\\', '/');
		const source = readFileSync(file, 'utf8');

		if (normalizedFile !== 'src/lib/config/campaigns.ts') {
			assert.doesNotMatch(
				source,
				/type\s+(?:PartyId|DungeonMasterId)\s*=\s*['"]/,
				`${file} manually declares a campaign id union`
			);
		}

		assert.doesNotMatch(
			source,
			/\bas\s+(?:PartyId|DungeonMasterId)\b/,
			`${file} casts an arbitrary string to a campaign id`
		);
	}
});

test('campaign exported arrays cannot mutate authoritative configuration order', () => {
	assert.throws(() => parties.push(parties[0]), TypeError);
	assert.throws(() => dungeonMasters.push(dungeonMasters[0]), TypeError);
	assert.throws(() => allPartyIds.push(allPartyIds[0]), TypeError);

	const selectedPartyIds = selectAllParties();
	selectedPartyIds.pop();
	assert.deepEqual(selectAllParties(), allPartyIds);
});

test('campaign UI derives identity labels from campaign configuration', () => {
	const sidebarSource = readFileSync('src/lib/components/layout/snippets/Sidebar.svelte', 'utf8');
	const preferencesSource = readFileSync('src/lib/components/WikiPreferences.svelte', 'utf8');
	const campaignNoteSource = readFileSync('src/lib/components/CampaignNote.svelte', 'utf8');
	const campaignNoteStyles = readFileSync('src/lib/components/CampaignNote.scss', 'utf8');
	const homeSource = readFileSync('src/routes/+page.svelte', 'utf8');

	assert.match(sidebarSource, /import \{ parties \} from '\$lib\/config\/campaigns'/);
	assert.match(sidebarSource, /\{#each parties as party\}/);
	assert.doesNotMatch(sidebarSource, /Party [1-8]|LuckyClover|FCGoonUnited|FemboyAss|Crops/);
	assert.match(preferencesSource, /import \{[\s\S]*dungeonMasters[\s\S]*parties[\s\S]*\} from '\$lib\/config\/campaigns'/);
	assert.doesNotMatch(preferencesSource, /Toon van Berkel|Party [1-8]|LuckyClover|FCGoonUnited|FemboyAss|Crops/);
	assert.match(campaignNoteSource, /partyId: PartyId/);
	assert.match(campaignNoteSource, /getParty\(partyId\)/);
	assert.doesNotMatch(campaignNoteStyles, /--party-[1-8]\b/);
	assert.doesNotMatch(homeSource, /satisfies Record<PartyId, string>|const partyMembers/);
});

test('content filter sanitisation uses campaign id validators', () => {
	assert.deepEqual(
		sanitizeStoredFilters({
			partyIds: [parties[0].id, 'unknown-party'],
			dmIds: [dungeonMasters[0].id, 'unknown-dm']
		}),
		{
			partyIds: [parties[0].id],
			dmIds: [dungeonMasters[0].id]
		}
	);
	assert.deepEqual(sanitizeStoredFilters(null), { partyIds: [], dmIds: [] });
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

test('every static page id is unique', () => {
	assert.equal(new Set(staticPages.map((page) => page.id)).size, staticPages.length);
});

test('every static page href is unique', () => {
	assert.equal(new Set(staticPages.map((page) => page.href)).size, staticPages.length);
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

test('footer pages derive labels and hrefs from registry metadata', () => {
	const source = readFileSync('src/lib/components/layout/snippets/Footer.svelte', 'utf8');

	for (const group of ['browse', 'project', 'legal']) {
		for (const page of getFooterPages(group)) {
			assert.ok(footerPageIds.includes(page.id), `${page.id} should be footer-addressable`);
			assert.match(source, /getFooterPages/);
			assert.doesNotMatch(source, new RegExp(`label:\\s*['"]${escapeRegExp(page.title)}['"]`));
			assert.doesNotMatch(source, new RegExp(`href:\\s*['"]${escapeRegExp(page.href)}['"]`));
		}
	}
});

test('root layout owns document metadata and PageHeader for static routes', () => {
	const source = readFileSync('src/routes/+layout.svelte', 'utf8');

	assert.match(source, /PageDocumentMetadata/);
	assert.match(source, /normalizeRoutePathname\(pathname\)/);
	assert.match(source, /getRoutePageMeta\(page\.url\.pathname\)/);
	assert.match(source, /<PageHeader\b/);
	assert.match(source, /childLayoutOwnsHeader/);
	assert.match(source, /routePageMeta\.href/);
	assert.match(source, /\$app\/paths/);
});

test('document metadata uses registry page metadata and site configuration', () => {
	const source = readFileSync('src/lib/components/PageDocumentMetadata.svelte', 'utf8');

	assert.match(source, /siteConfig/);
	assert.match(source, /\{#if pageMeta\}/);
	assert.match(source, /documentTitle/);
	assert.match(source, /pageMeta\.description/);
});

test('PageHeader does not insert a default eyebrow', () => {
	const source = readFileSync('src/lib/components/PageHeader.svelte', 'utf8');
	assert.equal(source.includes("?? 'Wiki reference'"), false);
	assert.match(source, /\{#if eyebrow\}/);
});

test('classes layout owns page headers for its child pages', () => {
	assertLayoutOwnsPageHeaders('src/routes/classes');
});

test('species layout owns page headers for its child pages', () => {
	assertLayoutOwnsPageHeaders('src/routes/species');
});

test('class and species layouts own availability badges for their child pages', () => {
	for (const directory of ['src/routes/classes', 'src/routes/species']) {
		assertLayoutOwnsAvailabilityBadges(directory);
	}
});

test('layout-owned route chains render at most one PageHeader and no child h1', () => {
	for (const directory of ['src/routes/classes', 'src/routes/species']) {
		const layoutSource = readFileSync(join(directory, '+layout.svelte'), 'utf8');

		for (const pagePath of routePageFiles(directory)) {
			const pageSource = readFileSync(pagePath, 'utf8');
			const pageHeaderCount = countMatches(layoutSource, /<PageHeader\b/g) + countMatches(pageSource, /<PageHeader\b/g);
			assert.equal(pageHeaderCount, 1, `${pagePath} has ${pageHeaderCount} active PageHeader render sites`);
			assert.doesNotMatch(pageSource, /<h1\b/, `${pagePath} renders a child h1 under a layout-owned PageHeader`);
		}
	}
});

test('layout-owned route chains render availability badges at most once', () => {
	for (const directory of ['src/routes/classes', 'src/routes/species']) {
		const layoutSource = readFileSync(join(directory, '+layout.svelte'), 'utf8');

		for (const pagePath of routePageFiles(directory)) {
			const pageSource = readFileSync(pagePath, 'utf8');
			const badgeCount =
				countMatches(layoutSource, /<AvailabilityBadges\b/g) +
				countMatches(pageSource, /<AvailabilityBadges\b/g);

			assert.equal(badgeCount, 1, `${pagePath} has ${badgeCount} active AvailabilityBadges render sites`);
		}
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

test('path utilities keep route, asset, suffix, and external URL contracts separate', () => {
	const source = readFileSync('src/lib/utils/paths.ts', 'utf8');

	assert.match(source, /const untouchedUrlPattern/);
	assert.match(source, /untouchedUrlPattern\.test\(value\)/);
	assert.match(source, /function splitSuffix/);
	assert.match(source, /resolvePath\(normalizedPathname\)/);
	assert.match(source, /asset\(normalizedPathname\)/);
	assert.ok(source.includes('replace(/^\\/?static\\//'));
	assert.match(source, /export function resolveSrcset/);
});

test('every registered physical page resolves to a route source file', () => {
	for (const page of wikiPages) {
		assert.ok(routeSourceExistsForHref(page.href), `${page.href} is missing ${routeSourcePathForHref(page.href)}`);
	}
});

test('every physical Wiki route resolves to a registry entry', () => {
	for (const pagePath of routePageFiles('src/routes')) {
		const href = hrefForRouteSource(pagePath);

		assert.ok(getWikiPageByHref(href), `${pagePath} maps to unregistered href ${href}`);
	}
});

test('registry icon ids validate', () => {
	assert.doesNotThrow(validateWikiRegistry);
	assert.ok(wikiPages.some((page) => page.icon === 'rules'));
	assert.ok(wikiPages.some((page) => page.icon === 'fiend'));
});

test('WikiIconId derives from icon ids and every icon id has an asset mapping', () => {
	const iconIdSource = readFileSync('src/lib/wiki/icon-ids.ts', 'utf8');
	const iconMapSource = readFileSync('src/lib/wiki/icons.ts', 'utf8');
	const navigationSource = readFileSync('src/lib/wiki/navigation.ts', 'utf8');

	assert.match(iconIdSource, /export const wikiIconIds = \[/);
	for (const iconId of wikiIconIds) {
		assert.match(iconMapSource, new RegExp(`\\b${escapeRegExp(iconId)}:`));
	}
	assert.match(navigationSource, /import type \{ WikiIconId \} from '\.\/icon-ids\.js'/);
	assert.doesNotMatch(navigationSource, /from '\.\/icons\.js'/);
});

test('registry, footer, navigation, and search arrays protect authoritative ordering', () => {
	assert.throws(() => wikiPages.push(wikiPages[0]), TypeError);
	assert.throws(() => footerPageIds.push(footerPageIds[0]), TypeError);
	assert.throws(() => navigation.push(navigation[0]), TypeError);
	assert.throws(() => searchIndex.push(searchIndex[0]), TypeError);

	const navigationChildren = getNavigationChildren('/classes');
	const navigationChildCount = navigationChildren.length;
	navigationChildren.pop();
	assert.equal(getNavigationChildren('/classes').length, navigationChildCount);

	const footerPages = getFooterPages('browse');
	const footerPageCount = footerPages.length;
	footerPages.pop();
	assert.equal(getFooterPages('browse').length, footerPageCount);
});

test('class domain records produce exactly one registry entry each', () => {
	for (const { page } of domainRecordsByKind(classes, 'class')) {
		assertDomainPageHasSingleRegistryEntry(page);
	}
});

test('subclass domain records produce exactly one registry entry each', () => {
	for (const { page } of domainRecordsByKind(classes, 'subclass')) {
		assertDomainPageHasSingleRegistryEntry(page);
	}
});

test('species domain records produce exactly one registry entry each', () => {
	for (const { page, parent } of flattenDomainPages(species)) {
		if (page.kind === 'species' && parent?.href === '/species') {
			assertDomainPageHasSingleRegistryEntry(page);
		}
	}
});

test('child species domain records produce exactly one registry entry each', () => {
	for (const { page, parent } of flattenDomainPages(species)) {
		if (page.kind === 'species' && parent && parent.href !== '/species') {
			assertDomainPageHasSingleRegistryEntry(page);
		}
	}
});

test('registry parent relationships match domain nesting', () => {
	for (const root of [classes, species]) {
		for (const { page, parent } of flattenDomainPages(root)) {
			if (!parent) {
				continue;
			}

			const registryEntry = registryEntryForDomainPage(page);
			const parentEntry = registryEntryForDomainPage(parent);

			assert.equal(registryEntry.parentId, parentEntry.id, `${page.href} should derive parent ${parent.href}`);
		}
	}
});

test('navigation titles, hrefs, icons, and child links match registry values', () => {
	for (const item of flattenNavigation(navigation)) {
		const registryEntry = getWikiPageByHref(item.href);

		assert.ok(registryEntry, `${item.href} should resolve to a registry page`);
		assert.equal(item.title, registryEntry.title);
		assert.equal(item.href, registryEntry.href);
		assert.equal(item.description, registryEntry.description);
		assert.deepEqual(item.tags ?? [], registryEntry.tags ?? []);
		assert.equal(item.icon, registryEntry.icon);
	}
});

test('search metadata is derived from registry values', () => {
	for (const entry of searchIndex) {
		const registryEntry = getWikiPage(entry.id);

		assert.ok(registryEntry, `${entry.id} should resolve to a registry page`);
		assert.equal(entry.title, registryEntry.title);
		assert.equal(entry.href, registryEntry.href);
		assert.equal(entry.description, registryEntry.description ?? '');
		assert.deepEqual(entry.tags, registryEntry.tags ?? []);
		assert.deepEqual(entry.keywords, registryEntry.keywords ?? []);
		assert.deepEqual(entry.aliases, registryEntry.aliases ?? []);
	}
});

test('search excludes non-searchable static pages from normal results', () => {
	for (const page of staticPages.filter((entry) => entry.searchable === false)) {
		assert.equal(
			searchableEntries.some((entry) => entry.id === page.id),
			false,
			`${page.id} should not be a normal search result`
		);
	}
});

test('rules pages have registry-owned parent relationships', () => {
	for (const rulePage of wikiPages.filter((page) => page.kind === 'rule')) {
		assert.equal(rulePage.parentId, 'rules', `${rulePage.id} should be a child of rules`);
		assert.ok(getWikiChildren('rules').some((child) => child.id === rulePage.id));
	}
});

test('class and species hrefs are unique by kind', () => {
	assertUniqueHrefs(wikiPages.filter((page) => page.kind === 'class'), 'class');
	assertUniqueHrefs(wikiPages.filter((page) => page.kind === 'subclass'), 'subclass');
	assertUniqueHrefs(wikiPages.filter((page) => page.kind === 'species'), 'species');
});

test('domain icons reach registry and navigation', () => {
	for (const root of [classes, species]) {
		assert.ok(root.icon, `${root.href} should define a domain icon`);

		const registryEntry = registryEntryForDomainPage(root);
		const navigationItem = flattenNavigation(navigation).find((item) => item.href === root.href);

		assert.equal(registryEntry.icon, root.icon);
		assert.equal(navigationItem?.icon, root.icon);
	}
});

test('route child cards use registry-derived navigation data', () => {
	for (const route of [
		{ page: 'src/routes/classes/+page.svelte', href: '/classes' },
		{ page: 'src/routes/classes/cleric/+page.svelte', href: '/classes/cleric' },
		{ page: 'src/routes/classes/rogue/+page.svelte', href: '/classes/rogue' },
		{ page: 'src/routes/rules/+page.svelte', href: '/rules' },
		{ page: 'src/routes/species/+page.svelte', href: '/species' },
		{ page: 'src/routes/species/elf/+page.svelte', href: '/species/elf' }
	]) {
		const source = readFileSync(route.page, 'utf8');
		const children = getNavigationChildren(route.href);

		assert.match(source, /getNavigationChildren/, `${route.page} should derive child cards from navigation`);
		assert.match(source, /<ChildLinkGrid\b/, `${route.page} should render derived child cards`);
		assert.ok(children.length > 0, `${route.href} should have registry-derived children`);
	}
});

test('home quick links derive from registry page ids', () => {
	const source = readFileSync('src/routes/+page.svelte', 'utf8');

	assert.match(source, /homeQuickLinkIds/);
	assert.match(source, /getWikiPage\(pageId\)/);
	assert.doesNotMatch(source, /title:\s*['"](?:Search the Wiki|Species|Classes|Movement|Fighting|Monsters|Locations)['"]/);
	assert.doesNotMatch(source, /href:\s*['"]\/(?:search|species|classes|rules\/movement|rules\/fighting|monsters|locations)['"]/);
	assert.doesNotMatch(source, /description:\s*['"][^'"]*(?:Search|Browse|Read|Review|Find|Explore)[^'"]*['"]/);
});

test('all route pages leave PageHeader and document metadata to layouts', () => {
	for (const pagePath of routePageFiles('src/routes')) {
		const source = readFileSync(pagePath, 'utf8');

		assert.doesNotMatch(source, /import PageHeader/, `${pagePath} imports PageHeader`);
		assert.doesNotMatch(source, /<PageHeader\b/, `${pagePath} renders PageHeader`);
		assert.doesNotMatch(source, /<svelte:head\b/, `${pagePath} declares route-local document metadata`);
		assert.doesNotMatch(source, /<h1\b/, `${pagePath} renders a route-local h1`);
	}
});

test('static route pages do not duplicate registry page metadata objects', () => {
	for (const page of staticPages) {
		const routePath = routeSourcePathForHref(page.href);
		const source = readFileSync(routePath, 'utf8');

		assert.doesNotMatch(source, new RegExp(`title=\\{?['"]${escapeRegExp(page.title)}['"]`), `${routePath} repeats ${page.title}`);
		assert.doesNotMatch(source, new RegExp(`description=\\{?['"]${escapeRegExp(page.description ?? '')}['"]`), `${routePath} repeats description`);
	}
});

test('class and species route files do not declare structural page metadata', () => {
	for (const directory of ['src/routes/classes', 'src/routes/species']) {
		for (const pagePath of routePageFiles(directory)) {
			const source = readFileSync(pagePath, 'utf8');

			assert.doesNotMatch(source, /<svelte:head\b/, `${pagePath} should let its layout own head metadata`);
			assert.doesNotMatch(source, /<PageHeader\b/, `${pagePath} should let its layout own PageHeader`);
			assert.doesNotMatch(source, /\btitle:\s*['"]/, `${pagePath} declares route-local title metadata`);
			assert.doesNotMatch(source, /\bhref:\s*['"]\/(?:classes|species)\b/, `${pagePath} declares route-local href metadata`);
			assert.doesNotMatch(source, /\bdescription:\s*['"]/, `${pagePath} declares route-local description metadata`);
			assert.doesNotMatch(source, /\btags:\s*\[/, `${pagePath} declares route-local tag metadata`);
		}
	}
});

test('class and species route files do not declare route-local availability', () => {
	for (const directory of ['src/routes/classes', 'src/routes/species']) {
		for (const pagePath of routePageFiles(directory)) {
			const source = readFileSync(pagePath, 'utf8');

			assert.doesNotMatch(source, /import AvailabilityBadges/, `${pagePath} imports AvailabilityBadges`);
			assert.doesNotMatch(source, /<AvailabilityBadges\b/, `${pagePath} renders AvailabilityBadges`);
			assert.doesNotMatch(source, /\b(?:allowed|limited|banned|approval)=\{/, `${pagePath} passes inline availability props`);
			assert.doesNotMatch(source, /\bPageAvailability\b/, `${pagePath} declares route-local PageAvailability`);
			assert.doesNotMatch(source, /\bselect(?:All)?Parties\(/, `${pagePath} declares route-local availability arrays`);
		}
	}
});

test('AvailabilityBadges uses canonical href lookup only', () => {
	const source = readFileSync('src/lib/components/AvailabilityBadges.svelte', 'utf8');

	assert.match(source, /getAvailabilityByHref\(href\)/);
	assert.doesNotMatch(source, /resolvePageAvailability/);
	assert.doesNotMatch(source, /\ballowed\b[\s\S]*\$props\(/);
	assert.doesNotMatch(source, /\blimited\b[\s\S]*\$props\(/);
	assert.doesNotMatch(source, /\bbanned\b[\s\S]*\$props\(/);
	assert.doesNotMatch(source, /\bapproval\b[\s\S]*\$props\(/);
});

test('availability metadata uses canonical availability lookup', () => {
	const source = readFileSync('src/lib/utils/availability-metadata.ts', 'utf8');

	assert.match(source, /getAvailabilityByHref\(href\)/);
	assert.doesNotMatch(source, /availability\[/);
	assert.doesNotMatch(source, /getAvailabilityNode/);
});

test('obsolete duplicate class data module has been removed', () => {
	assert.equal(existsSync('src/lib/data/classes.ts'), false);
});

test('registry does not manually declare class or species page metadata', () => {
	const source = readFileSync('src/lib/wiki/registry.ts', 'utf8');

	assert.doesNotMatch(source, /href:\s*['"]\/classes(?:\/|['"])/);
	assert.doesNotMatch(source, /href:\s*['"]\/species(?:\/|['"])/);
	assert.doesNotMatch(source, /title:\s*['"](?:Cleric|Rogue|Elf|Human|Astral Elf)['"]/);
	assert.doesNotMatch(source, /as DomainPage/);
});

test('shared type contracts remain owned by their boundary modules', () => {
	assert.match(readFileSync('src/lib/wiki/classes/classes.ts', 'utf8'), /satisfies WikiDomainPage/);
	assert.match(readFileSync('src/lib/wiki/species/species.ts', 'utf8'), /satisfies WikiDomainPage/);
	assert.match(readFileSync('src/lib/wiki/registry.ts', 'utf8'), /export type WikiPageEntry/);
	assert.match(readFileSync('src/lib/wiki/navigation.ts', 'utf8'), /export type NavigationItem/);
	assert.match(readFileSync('src/lib/wiki/search-index.ts', 'utf8'), /export type SearchEntry/);
});

test('SVG imports have one URL-string module declaration', () => {
	const declarations = sourceFiles('src')
		.map((file) => readFileSync(file, 'utf8'))
		.flatMap((source) => [...source.matchAll(/declare module ['"]\*\.svg['"]/g)]);
	const svgDeclaration = readFileSync('src/svg.d.ts', 'utf8');

	assert.equal(declarations.length, 1);
	assert.match(svgDeclaration, /const src: string/);
	assert.doesNotMatch(svgDeclaration, /\bany\b/);
});

test('no general-purpose global type or helper layer was introduced', () => {
	for (const file of ['src/lib/types.ts', 'src/lib/helpers.ts', 'src/lib/utils/helpers.ts']) {
		assert.equal(existsSync(file), false, `${file} should not exist`);
	}
});

test('every reusable Svelte component has a consumer', () => {
	const components = sourceFiles('src/lib/components').filter((file) => file.endsWith('.svelte'));

	for (const component of components) {
		assert.ok(sourceConsumers(component).length > 0, `${component} has no source consumer`);
	}
});

test('Sass module imports resolve to existing stylesheets', () => {
	for (const file of styleFiles('src')) {
		const source = readFileSync(file, 'utf8');

		for (const specifier of [...source.matchAll(/@use\s+['"]([^'"]+)['"]/g)].map((match) => match[1])) {
			assert.ok(resolveSassImport(file, specifier), `${file} imports missing stylesheet ${specifier}`);
		}
	}
});

test('shared Sass mixins and variables have consumers or foundation purpose', () => {
	const sharedPartials = [
		'src/lib/styles/_breakpoints.scss',
		'src/lib/styles/_buttons.scss',
		'src/lib/styles/_forms.scss',
		'src/lib/styles/_mixins.scss',
		'src/lib/styles/_panels.scss'
	];
	const allStyleSources = [...styleFiles('src'), ...sourceFiles('src')]
		.map((file) => `${file}\n${readFileSync(file, 'utf8')}`)
		.join('\n');
	const documentedFoundationMembers = new Set([
		'buttons.button-base',
		'forms.field-control',
		'mixins.reduced-motion',
		'panels.panel'
	]);

	for (const file of sharedPartials) {
		const namespace = file.match(/_([^\\/]+)\.scss$/)?.[1];
		const source = readFileSync(file, 'utf8');

		for (const mixinName of [...source.matchAll(/@mixin\s+([\w-]+)/g)].map((match) => match[1])) {
			if (documentedFoundationMembers.has(`${namespace}.${mixinName}`)) {
				continue;
			}

			const includePattern = new RegExp(`@include\\s+${escapeRegExp(namespace)}\\.${escapeRegExp(mixinName)}\\b`);

			assert.match(allStyleSources, includePattern, `${file} mixin ${mixinName} has no external consumer`);
		}

		for (const variableName of [...source.matchAll(/^\$([\w-]+):/gm)].map((match) => match[1])) {
			const variablePattern = new RegExp(`${escapeRegExp(namespace)}\\.\\$${escapeRegExp(variableName)}\\b`);

			assert.match(allStyleSources, variablePattern, `${file} variable ${variableName} has no external consumer`);
		}
	}
});

test('inventory describes the current source tree and excludes generated output', () => {
	const inventory = JSON.parse(readFileSync('docs/architecture-audit/inventory.json', 'utf8'));
	const inventoryPaths = new Set(inventory.files.map((entry) => entry.path));
	const actualPaths = currentInventorySourceFiles();

	assert.equal(inventory.phase, 'Phase 7 current inventory');
	assert.equal(inventory.counts.files, inventory.files.length);

	for (const file of actualPaths) {
		assert.ok(inventoryPaths.has(file), `${file} is missing from inventory.json`);
	}

	for (const entry of inventory.files) {
		assert.ok(existsSync(entry.path), `${entry.path} in inventory.json does not exist`);
		assert.equal(isGeneratedPath(entry.path), false, `${entry.path} should not be inventoried`);
	}

	for (const deletedFile of [
		'src/lib/data/classes.ts',
		'src/lib/data/parties.ts',
		'src/lib/data/dungeon-masters.ts'
	]) {
		assert.equal(inventoryPaths.has(deletedFile), false, `${deletedFile} should not be a current inventory entry`);
		assert.ok(inventory.migrationHistory.removedFiles.includes(deletedFile), `${deletedFile} should remain migration history`);
	}
});

test('architecture documentation current guidance does not point to deleted authoritative modules', () => {
	const docs = documentationFiles('docs/architecture-audit');
	const deletedAuthoritativePatterns = [
		/edit .*src\/lib\/data\/classes\.ts/i,
		/edit .*src\/lib\/data\/parties\.ts/i,
		/edit .*src\/lib\/data\/dungeon-masters\.ts/i,
		/current authoritative source.*src\/lib\/data\/classes\.ts/i,
		/current authoritative source.*src\/lib\/data\/parties\.ts/i,
		/current authoritative source.*src\/lib\/data\/dungeon-masters\.ts/i
	];

	for (const file of [...docs, 'AGENTS.md']) {
		const source = readFileSync(file, 'utf8');

		for (const pattern of deletedAuthoritativePatterns) {
			assert.doesNotMatch(source, pattern, `${file} points current work at a deleted module`);
		}
	}
});

test('architecture documentation Markdown links to repository files resolve', () => {
	for (const file of documentationFiles('docs/architecture-audit')) {
		const source = readFileSync(file, 'utf8');

		for (const target of [...source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1])) {
			if (/^(?:https?:|#|mailto:)/.test(target)) {
				continue;
			}

			const repositoryPath = target.split('#')[0].replace(/^\.?\//, '');

			if (!repositoryPath) {
				continue;
			}

			assert.ok(existsSync(repositoryPath), `${file} links to missing repository file ${target}`);
		}
	}
});

test('core Wiki/config/data modules have no runtime import cycles', () => {
	assertNoRuntimeImportCycles([
		'src/lib/wiki/domain.ts',
		'src/lib/wiki/registry.ts',
		'src/lib/wiki/static-pages.ts',
		'src/lib/wiki/navigation.ts',
		'src/lib/wiki/search-index.ts',
		'src/lib/wiki/icon-ids.ts',
		'src/lib/wiki/icons.ts',
		'src/lib/config/campaigns.ts',
		'src/lib/data/availability.ts',
		'src/lib/utils/availability-metadata.ts',
		'src/lib/utils/content-filters.ts',
		'src/lib/utils/wiki-preferences.ts'
	]);
});

test('AI class image metadata derives page labels from registry hrefs', () => {
	for (const image of aiGeneratedImages) {
		assert.ok(image.page, `${image.id} should reference a Wiki page href`);

		const registryEntry = getWikiPageByHref(image.page);

		assert.ok(registryEntry, `${image.id} references unknown Wiki page ${image.page}`);
		assert.equal(image.pageLabel, registryEntry.title);
		assert.match(image.title, new RegExp(`^${escapeRegExp(registryEntry.title)} - `));
	}
});

test('top-level class availability is resolved by href', () => {
	assert.deepEqual(getAvailabilityByHref('/classes/cleric'), {
		allowed: selectAllParties()
	});
});

test('subclass availability is resolved recursively', () => {
	assert.deepEqual(getAvailabilityByHref('/classes/cleric/life-domain'), {
		allowed: selectAllParties()
	});
});

test('top-level species availability is resolved by href', () => {
	assert.deepEqual(getAvailabilityByHref('/species/elf'), {
		allowed: selectParties('i1', 'i2', 'i4', 'i5', 'i6', 'i7', 'i8'),
		banned: selectParties('i3')
	});
});

test('nested species availability is resolved recursively', () => {
	assert.deepEqual(getAvailabilityByHref('/species/elf/astral-elf'), {
		limited: selectParties('i1'),
		banned: selectParties('i3', 'i4'),
		approval: selectParties('i2')
	});
});

test('third-level species descendant lookup is exact-only when no entry is authored', () => {
	assert.deepEqual(getAvailabilityByHref('/species/elf/astral-elf/unconfigured-child'), {});
});

test('unknown availability paths return an empty object', () => {
	assert.deepEqual(getAvailabilityByHref('/classes/unknown'), {});
	assert.deepEqual(getAvailabilityByHref('/'), {});
});

test('availability href normalization handles slashes, queries, and hashes', () => {
	assert.equal(normalizeAvailabilityHref('/classes/cleric/'), '/classes/cleric');
	assert.equal(normalizeAvailabilityHref('classes/cleric?x=1'), '/classes/cleric');
	assert.equal(normalizeAvailabilityHref('/classes/cleric#top'), '/classes/cleric');
	assert.equal(normalizeAvailabilityHref('/classes//cleric'), '/classes/cleric');
	assert.equal(normalizeAvailabilityHref('/test-repository/classes/cleric'), '/classes/cleric');
	assert.deepEqual(getAvailabilityByHref('/classes/cleric/?x=1#top'), getAvailabilityByHref('/classes/cleric'));
	assert.deepEqual(getAvailabilityByHref('/test-repository/classes/cleric'), getAvailabilityByHref('/classes/cleric'));
});

test('availability lookup returns only status fields', () => {
	const pageAvailability = getAvailabilityByHref('/classes/cleric');

	assert.deepEqual(Object.keys(pageAvailability), ['allowed']);
	assert.equal('children' in pageAvailability, false);
});

test('availability lookup returns defensive status arrays', () => {
	const originalAvailability = getAvailabilityByHref('/classes/cleric');
	const mutatedAvailability = getAvailabilityByHref('/classes/cleric');

	mutatedAvailability.allowed?.pop();

	assert.deepEqual(getAvailabilityByHref('/classes/cleric'), originalAvailability);
});

test('availability metadata uses the same nested lookup as the UI', () => {
	assert.deepEqual(getAvailabilityMetadataForHref('/species/elf/astral-elf'), {
		partyIds: selectParties('i1', 'i2'),
		dmIds: [getParty('i1')?.dmId]
	});
});

test('availability configuration validates', () => {
	assert.doesNotThrow(() => validateAvailabilityConfig(availability));
});

test('every authored availability node maps to a registry page', () => {
	for (const entry of getAvailabilityInventory()) {
		assert.ok(getWikiPageByHref(entry.href), `${entry.href} should resolve to a Wiki page`);
	}
});

test('availability party codes are valid campaign party ids', () => {
	for (const entry of getAvailabilityInventory()) {
		for (const partyId of [
			...entry.allowed,
			...entry.limited,
			...entry.banned,
			...entry.approval
		]) {
			assert.ok(getParty(partyId), `unknown availability party id ${partyId}`);
		}
	}
});

test('availability validation rejects unknown hrefs', () => {
	assert.throws(
		() => validateAvailabilityConfig({ classes: { 'unknown-class': { allowed: selectAllParties() } } }),
		/unknown Wiki href: \/classes\/unknown-class/
	);
});

test('availability validation rejects duplicate party ids in one status', () => {
	assert.throws(
		() => validateAvailabilityConfig({ classes: { cleric: { allowed: ['i1', 'i1'] } } }),
		/repeats Party i1 in allowed/
	);
});

test('availability validation rejects conflicting statuses', () => {
	assert.throws(
		() => validateAvailabilityConfig({ classes: { cleric: { allowed: ['i1'], banned: ['i1'] } } }),
		/Party i1 in both allowed and banned/
	);
});

test('availability validation rejects unknown party ids', () => {
	assert.throws(
		() => validateAvailabilityConfig({ classes: { cleric: { allowed: ['unknown-party'] } } }),
		/unknown Party unknown-party/
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

test('style primitives are selector-free Sass partials', () => {
	for (const file of [
		'src/lib/styles/_breakpoints.scss',
		'src/lib/styles/_buttons.scss',
		'src/lib/styles/_forms.scss',
		'src/lib/styles/_mixins.scss',
		'src/lib/styles/_panels.scss'
	]) {
		const source = readFileSync(file, 'utf8');

		assert.doesNotMatch(source, /^\s*\.[\w-]+/m, `${file} should not emit class selectors directly`);
		assert.doesNotMatch(source, /^\s*#[\w-]+/m, `${file} should not emit id selectors directly`);
	}
});

test('app styles use Sass modules instead of legacy imports or important overrides', () => {
	for (const file of styleFiles('src')) {
		const source = readFileSync(file, 'utf8');

		assert.doesNotMatch(source, /@import\b/, `${file} uses legacy Sass @import`);
		assert.doesNotMatch(source, /!important\b/, `${file} uses an important override`);
	}
});

test('style custom property references resolve to declared tokens or local variables', () => {
	const declaredVariables = cssCustomPropertyDefinitions();

	for (const file of [...styleFiles('src'), ...sourceFiles('src')]) {
		const source = readFileSync(file, 'utf8');

		for (const tokenName of cssCustomPropertyReferences(source)) {
			assert.ok(declaredVariables.has(tokenName), `${file} references undeclared ${tokenName}`);
		}
	}
});

test('party and availability color values stay owned by tokens.scss', () => {
	const tokenSource = readFileSync('src/lib/styles/tokens.scss', 'utf8');
	const ownedValues = [...tokenSource.matchAll(/--(?:party-[\w-]+|allowed|limited|banned|approval)(?:-soft)?:\s*([^;]+);/g)]
		.map((match) => match[1].trim().toLowerCase());

	for (const file of styleFiles('src')) {
		if (file.replaceAll('\\', '/') === 'src/lib/styles/tokens.scss') {
			continue;
		}

		const source = readFileSync(file, 'utf8').toLowerCase();

		for (const value of ownedValues) {
			assert.equal(source.includes(value), false, `${file} repeats token-owned color value ${value}`);
		}
	}
});

test('shared breakpoints and primitives are used at shell and page boundaries', () => {
	for (const file of [
		'src/lib/styles/wiki-layout.scss',
		'src/lib/components/layout/snippets/Sidebar.scss',
		'src/lib/components/layout/snippets/Header.scss',
		'src/lib/components/WikiPreferences.scss',
		'src/lib/components/layout/Panel.svelte'
	]) {
		const source = readFileSync(file, 'utf8');
		assert.match(source, /@use '\$lib\/styles\/breakpoints'/, `${file} should use shared breakpoints`);
	}

	for (const file of [
		'src/routes/search/Search.scss',
		'src/routes/about/About.scss',
		'src/lib/components/PageSection.scss',
		'src/lib/components/ChildLinkGrid.scss',
		'src/lib/components/WikiTable.scss'
	]) {
		const source = readFileSync(file, 'utf8');
		assert.match(source, /@use '\$lib\/styles\/(?:panels|buttons|mixins)'/, `${file} should use shared style primitives`);
	}
});

test('NavTree keeps one row hover surface and shared focus handling', () => {
	const source = readFileSync('src/lib/components/layout/snippets/helpers/NavTree.scss', 'utf8');

	assert.match(source, /@use '\$lib\/styles\/mixins'/);
	assert.match(source, /&__row\s*\{\s*@include mixins\.interactive-surface/);
	assert.match(source, /&:hover,\s*&:focus-within\s*\{\s*background: var\(--surface-raised\);/);
	assert.match(source, /@include mixins\.focus-ring\(var\(--accent\), 2px\)/);
	assert.match(source, /@include mixins\.focus-ring\(var\(--accent\), -2px\)/);
	assert.match(source, /&__link[\s\S]*?&:hover\s*\{\s*background:\s*transparent;/);
	assert.match(source, /&__toggle[\s\S]*?&:hover\s*\{\s*background:\s*transparent;/);
});

test('availability badges remain content-sized and token-driven', () => {
	const source = readFileSync('src/lib/components/AvailabilityBadges.scss', 'utf8');

	assert.match(source, /@include panels\.surface\(0\.85rem\)/);
	assert.match(source, /grid-auto-rows: max-content/);
	assert.match(source, /align-content: start/);
	assert.match(source, /height: fit-content/);
	assert.doesNotMatch(source, /#(?:[0-9a-f]{3}){1,2}\b/i);
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

function sourceFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);

		if (entry.isDirectory()) {
			return sourceFiles(path);
		}

		return entry.isFile() && /\.(svelte|ts)$/.test(entry.name) ? [relative('.', path)] : [];
	});
}

function scriptFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);

		if (entry.isDirectory()) {
			return scriptFiles(path);
		}

		return entry.isFile() && /\.(?:js|mjs|cjs)$/.test(entry.name) ? [relative('.', path)] : [];
	});
}

function styleFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);

		if (entry.isDirectory()) {
			return styleFiles(path);
		}

		return entry.isFile() && /\.scss$/.test(entry.name) ? [relative('.', path)] : [];
	});
}

function documentationFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);

		if (entry.isDirectory()) {
			return documentationFiles(path);
		}

		return entry.isFile() && /\.md$/.test(entry.name) ? [relative('.', path)] : [];
	});
}

function currentInventorySourceFiles(directory = '.') {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = relative('.', join(directory, entry.name)).replaceAll('\\', '/');

		if (entry.isDirectory()) {
			return isGeneratedPath(path) || entry.name === '.git' || entry.name === '.codex-tmp'
				? []
				: currentInventorySourceFiles(path);
		}

		if (!entry.isFile() || !isInventorySourceFile(path)) {
			return [];
		}

		return [path];
	});
}

function isInventorySourceFile(path) {
	if (path === 'docs/architecture-audit/inventory.json' || path === 'package-lock.json') {
		return false;
	}

	return /(?:^AGENTS\.md$|\.svelte$|\.ts$|\.js$|\.mjs$|\.cjs$|\.scss$|\.json$|\.md$|\.html$)/.test(path);
}

function isGeneratedPath(path) {
	return /^(?:node_modules|\.svelte-kit|build|dist|coverage)(?:\/|$)/.test(path.replaceAll('\\', '/'));
}

function cssCustomPropertyDefinitions() {
	return new Set(
		[...styleFiles('src'), ...sourceFiles('src')]
			.flatMap((file) => [...readFileSync(file, 'utf8').matchAll(/(--[a-z0-9-]+)\s*:/g)])
			.map((match) => match[1])
	);
}

function cssCustomPropertyReferences(source) {
	return [...source.matchAll(/var\(\s*(--[a-z0-9-]+)/g)].map((match) => match[1]);
}

function sourceConsumers(targetFile) {
	const normalizedTarget = targetFile.replaceAll('\\', '/');
	const targetBasename = normalizedTarget.split('/').at(-1);
	const targetWithoutExtension = normalizedTarget.replace(/\.(?:svelte|ts|js|mjs|scss)$/, '');
	const targetImportSuffix = targetWithoutExtension.replace(/^src\/lib\//, '$lib/');
	const consumers = [...sourceFiles('src'), ...scriptFiles('scripts')]
		.filter((file) => file.replaceAll('\\', '/') !== normalizedTarget)
		.filter((file) => {
			const source = readFileSync(file, 'utf8');

			return (
				source.includes(targetBasename) ||
				source.includes(targetWithoutExtension) ||
				source.includes(targetImportSuffix)
			);
		});

	return consumers;
}

function isCompatibilityFacade(file) {
	const source = readFileSync(file, 'utf8')
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith('//'));

	return (
		source.length > 0 &&
		source.every((line) =>
			/^(?:export\s+(?:type\s+)?\{[^}]+\}\s+from\s+['"][^'"]+['"];?|export\s+\*\s+from\s+['"][^'"]+['"];?)$/.test(line)
		)
	);
}

function resolveSassImport(fromFile, specifier) {
	const normalizedSpecifier = specifier.startsWith('$lib/')
		? specifier.replace(/^\$lib\//, 'src/lib/')
		: join(fromFile.split(/[\\/]/).slice(0, -1).join('/'), specifier).replaceAll('\\', '/');
	const extensionCandidates = normalizedSpecifier.endsWith('.scss')
		? [normalizedSpecifier]
		: [`${normalizedSpecifier}.scss`, `${normalizedSpecifier.split('/').slice(0, -1).join('/')}/_${normalizedSpecifier.split('/').at(-1)}.scss`];

	return extensionCandidates.find((candidate) => existsSync(candidate));
}

function routeSourcePathForHref(href) {
	return href === '/'
		? 'src/routes/+page.svelte'
		: join('src/routes', href.replace(/^\/+/, ''), '+page.svelte');
}

function routeSourceExistsForHref(href) {
	return existsSync(routeSourcePathForHref(href));
}

function hrefForRouteSource(pagePath) {
	const routePath = pagePath
		.replace(/^src[\\/]routes[\\/]/, '')
		.replace(/[\\/]?\+page\.svelte$/, '')
		.replaceAll('\\', '/');

	return routePath ? `/${routePath}` : '/';
}

function assertLayoutOwnsPageHeaders(directory) {
	const layoutPath = join(directory, '+layout.svelte');
	const layoutSource = readFileSync(layoutPath, 'utf8');

	assert.match(layoutSource, /import PageHeader/, `${layoutPath} should import PageHeader`);
	assert.match(layoutSource, /getWikiPageByHref\(page\.url\.pathname\)/, `${layoutPath} should use route metadata`);
	assert.match(layoutSource, /<PageHeader\b/, `${layoutPath} should render PageHeader`);

	for (const pagePath of routePageFiles(directory)) {
		const source = readFileSync(pagePath, 'utf8');

		assert.doesNotMatch(source, /import PageHeader/, `${pagePath} imports PageHeader under ${layoutPath}`);
		assert.doesNotMatch(source, /<PageHeader\b/, `${pagePath} renders PageHeader under ${layoutPath}`);
		assert.doesNotMatch(source, /getWikiPage\(/, `${pagePath} duplicates registry page lookup under ${layoutPath}`);
	}
}

function assertLayoutOwnsAvailabilityBadges(directory) {
	const layoutPath = join(directory, '+layout.svelte');
	const layoutSource = readFileSync(layoutPath, 'utf8');

	assert.match(layoutSource, /import AvailabilityBadges/, `${layoutPath} should import AvailabilityBadges`);
	assert.match(layoutSource, /<AvailabilityBadges href=\{pageMeta\.href\}/, `${layoutPath} should render AvailabilityBadges by href`);
	assert.doesNotMatch(layoutSource, /\b(?:allowed|limited|banned|approval)=\{/, `${layoutPath} should not pass inline availability props`);

	for (const pagePath of routePageFiles(directory)) {
		const source = readFileSync(pagePath, 'utf8');

		assert.doesNotMatch(source, /import AvailabilityBadges/, `${pagePath} imports AvailabilityBadges under ${layoutPath}`);
		assert.doesNotMatch(source, /<AvailabilityBadges\b/, `${pagePath} renders AvailabilityBadges under ${layoutPath}`);
	}
}

function countMatches(source, pattern) {
	return [...source.matchAll(pattern)].length;
}

function flattenAvailability(config) {
	return Object.values(config).flatMap((branch) => Object.values(branch).flatMap(flattenAvailabilityNode));
}

function flattenAvailabilityNode(node) {
	return [node, ...Object.values(node.children ?? {}).flatMap(flattenAvailabilityNode)];
}

function flattenDomainPages(page, parent = undefined) {
	return [
		{ page, parent },
		...(page.children ?? []).flatMap((child) => flattenDomainPages(child, page))
	];
}

function domainRecordsByKind(root, kind) {
	return flattenDomainPages(root).filter(({ page }) => page.kind === kind);
}

function registryEntryForDomainPage(page) {
	const registryEntry = getWikiPageByHref(page.href);

	assert.ok(registryEntry, `${page.href} should resolve to a registry entry`);

	return registryEntry;
}

function assertDomainPageHasSingleRegistryEntry(page) {
	const matches = wikiPages.filter((entry) => entry.href === page.href);

	assert.equal(matches.length, 1, `${page.href} should produce exactly one registry entry`);
	assert.equal(matches[0].title, page.title);
	assert.equal(matches[0].description, page.description);
	assert.deepEqual(matches[0].tags ?? [], page.tags ?? []);
	assert.deepEqual(matches[0].keywords ?? [], page.keywords ?? []);
	assert.deepEqual(matches[0].aliases ?? [], page.aliases ?? []);
	assert.equal(matches[0].icon, page.icon);
}

function flattenNavigation(items) {
	return items.flatMap((item) => [
		item,
		...flattenNavigation(item.children ?? [])
	]);
}

function assertUniqueHrefs(entries, label) {
	const hrefs = entries.map((entry) => entry.href);
	const uniqueHrefs = new Set(hrefs);

	assert.equal(uniqueHrefs.size, hrefs.length, `${label} hrefs should be unique`);
}

function assertNoRuntimeImportCycles(coreFiles) {
	const coreFileSet = new Set(coreFiles);
	const graph = new Map(coreFiles.map((file) => [file, runtimeCoreImports(file, coreFileSet)]));
	const visiting = new Set();
	const visited = new Set();

	function visit(file, stack) {
		if (visiting.has(file)) {
			const cycleStart = stack.indexOf(file);
			const cycle = [...stack.slice(cycleStart), file].join(' -> ');
			assert.fail(`Runtime import cycle detected: ${cycle}`);
		}

		if (visited.has(file)) {
			return;
		}

		visiting.add(file);

		for (const importedFile of graph.get(file) ?? []) {
			visit(importedFile, [...stack, importedFile]);
		}

		visiting.delete(file);
		visited.add(file);
	}

	for (const file of coreFiles) {
		visit(file, [file]);
	}
}

function runtimeCoreImports(file, coreFileSet) {
	const source = readFileSync(file, 'utf8');
	const imports = [...source.matchAll(/import\s+(?!type\b)[\s\S]*?\s+from\s+['"]([^'"]+)['"]/g)]
		.map((match) => match[1])
		.map((specifier) => resolveSourceImport(file, specifier))
		.filter((importedFile) => importedFile && coreFileSet.has(importedFile));

	return [...new Set(imports)];
}

function resolveSourceImport(fromFile, specifier) {
	if (!specifier.startsWith('.')) {
		return undefined;
	}

	const fromDirectory = fromFile.split(/[\\/]/).slice(0, -1).join('/');
	const sourcePath = join(fromDirectory, specifier)
		.replace(/\.js$/, '.ts')
		.replaceAll('\\', '/');

	return sourcePath;
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
