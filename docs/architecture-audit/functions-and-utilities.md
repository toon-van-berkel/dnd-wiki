# Functions And Utilities

## Current State After Phase 7

Current public utility boundaries:

- Campaign helpers in `src/lib/config/campaigns.ts`: Party/DM lookup, validation, relationship lookup, `selectParties()`, and `selectAllParties()`.
- Availability helpers in `src/lib/data/availability.ts`: `normalizeAvailabilityHref()`, `getAvailabilityByHref()`, `getAvailabilityInventory()`, and `validateAvailabilityConfig()`.
- Availability metadata in `src/lib/utils/availability-metadata.ts`: derives Party/DM metadata from the canonical availability lookup.
- Registry helpers in `src/lib/wiki/registry.ts`: page lookup, child lookup, footer page lookup, and registry validation. Internal lookup maps are no longer exported.
- Navigation helpers in `src/lib/wiki/navigation.ts`: `navigation` and `getNavigationChildren()`. Recursive `findNavigationItem()` is local.
- Search helpers in `src/lib/utils/wiki-search.ts`: query state, scoring, facets, suggestions, and URL parameter handling.
- Path helpers in `src/lib/utils/paths.ts`: app path, asset path, and `srcset` base-path handling.

## Historical Snapshot

The inventory table below is the original audit snapshot. Phase result sections supersede rows for removed compatibility files or changed helper ownership.

| File:line | Function | Export/local | Parameters | Category |
| --- | --- | --- | --- | --- |
| scripts/test-wiki-search.mjs:46 | titlesFor | local | state | script |
| scripts/test-wiki-search.mjs:56 | createMemoryStorage | local | initial = {} | script |
| scripts/test-wiki-search.mjs:374 | routePageFiles | local | directory | script |
| scripts/verify-pages-build.mjs:19 | report | local | file, url, reason | script |
| scripts/verify-pages-build.mjs:23 | walk | local | dir | script |
| scripts/verify-pages-build.mjs:39 | relativeFile | local | file | script |
| scripts/verify-pages-build.mjs:43 | isIgnoredUrl | local | url | script |
| scripts/verify-pages-build.mjs:51 | stripSuffix | local | url | script |
| scripts/verify-pages-build.mjs:56 | splitSrcset | local | srcset | script |
| scripts/verify-pages-build.mjs:63 | publicPathForFile | local | file, kind | script |
| scripts/verify-pages-build.mjs:73 | resolvePublicPath | local | url, file, kind | script |
| scripts/verify-pages-build.mjs:99 | candidateFilesForPublicPath | local | publicPath | script |
| scripts/verify-pages-build.mjs:111 | verifyLocalUrl | local | file, kind, url | script |
| scripts/verify-pages-build.mjs:135 | inspectHtml | local | file | script |
| scripts/verify-pages-build.mjs:158 | inspectCss | local | file | script |
| src/lib/components/ChildLinkGrid.svelte:25 | cleanTitle | local | title: string | component |
| src/lib/components/ChildLinkGrid.svelte:29 | getOppositeGender | local | gender: Gender | component |
| src/lib/components/ChildLinkGrid.svelte:33 | getRandomGender | local | - | component |
| src/lib/components/ChildLinkGrid.svelte:54 | buildLinkToImage | local | link: ChildPageLink | component |
| src/lib/components/ChildLinkGrid.svelte:66 | buildBackgroundStyle | local | link: ChildPageLink | component |
| src/lib/components/layout/snippets/Header.svelte:31 | clearSearch | local | - | component |
| src/lib/components/layout/snippets/Header.svelte:35 | submitSearch | local | - | component |
| src/lib/components/layout/snippets/Header.svelte:46 | handleResultNavigation | local | - | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:27 | isActive | local | href: string | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:31 | isActiveBranch | local | item: NavigationItem | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:38 | isExpanded | local | item: NavigationItem | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:42 | toggleExpanded | local | item: NavigationItem | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:46 | resetExpansionForPath | local | _currentPathname: string | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:50 | childListId | local | item: NavigationItem | component |
| src/lib/components/layout/WikiLayout.svelte:21 | closeMenu | local | - | component |
| src/lib/components/layout/WikiLayout.svelte:25 | toggleSidebar | local | - | component |
| src/lib/components/layout/WikiLayout.svelte:34 | handleKeydown | local | event: KeyboardEvent | component |
| src/lib/components/WikiPreferences.svelte:36 | updatePreference | local | nextPreference: WikiPreferences | component |
| src/lib/components/WikiPreferences.svelte:42 | clearPreferences | local | - | component |
| src/lib/config/campaigns.ts:104 | getDungeonMaster | exported | id: string | config |
| src/lib/config/campaigns.ts:108 | getParty | exported | id: string | config |
| src/lib/config/campaigns.ts:112 | getPartiesForDungeonMaster | exported | dmId: DungeonMasterId | config |
| src/lib/config/campaigns.ts:116 | getDungeonMasterForParty | exported | partyId: PartyId | config |
| src/lib/config/campaigns.ts:122 | isDungeonMasterId | exported | value: unknown | config |
| src/lib/config/campaigns.ts:126 | isPartyId | exported | value: unknown | config |
| src/lib/config/campaigns.ts:130 | validateCampaignConfig | exported | - | config |
| src/lib/data/ai-images.ts:187 | createClassCardEntries | local | classCard: ClassCardSet | data |
| src/lib/data/availability.ts:18 | selectAllParties | local | - | data |
| src/lib/data/availability.ts:133 | normalizeAvailabilityHref | local | href: string | data |
| src/lib/data/availability.ts:146 | getAvailabilityNode | local | section: string, pageSegments: string[] | data |
| src/lib/data/availability.ts:173 | getPageAvailabilityFromNode | local | node: AvailabilityNode \| undefined | data |
| src/lib/data/availability.ts:188 | getAvailabilityByHref | exported | href: string \| undefined | data |
| src/lib/data/classes.ts:15 | selectClass | exported | path: string | data |
| src/lib/data/parties.ts:18 | selectParties | exported | ...codes: PartyCode[] | data |
| src/lib/data/parties.ts:22 | getPartyIdByName | exported | name: string | data |
| src/lib/utils/availability-metadata.ts:15 | getAvailabilityMetadataForHref | exported | href: string | utility |
| src/lib/utils/availability-metadata.ts:34 | getAvailabilityPartyIds | exported | pageAvailability: PageAvailability | utility |
| src/lib/utils/availability-metadata.ts:43 | getDungeonMasterIdsForPartyIds | exported | partyIds: string[] | utility |
| src/lib/utils/availability-metadata.ts:51 | getAvailabilityParties | exported | partyIds: readonly string[] | utility |
| src/lib/utils/availability-metadata.ts:55 | getAvailabilityLabel | exported | partyIds: readonly string[] | utility |
| src/lib/utils/availability-metadata.ts:61 | getAvailabilityForHref | local | href: string | utility |
| src/lib/utils/content-filters.ts:13 | matchesSelectedIds | local | itemIds: readonly string[] \| undefined, selectedIds: readonly string[] | utility |
| src/lib/utils/content-filters.ts:25 | matchesPartyFilter | exported | item: FilterableMetadata, selectedPartyIds: readonly string[] | utility |
| src/lib/utils/content-filters.ts:32 | matchesDungeonMasterFilter | exported | item: FilterableMetadata, selectedDmIds: readonly string[] | utility |
| src/lib/utils/content-filters.ts:39 | matchesContentFilters | exported | item: FilterableMetadata, selectedFilters: ContentFilterSelection | utility |
| src/lib/utils/content-filters.ts:49 | sanitizeStoredFilters | exported | value: unknown, validPartyIds: ReadonlySet<string>, validDmIds: ReadonlySet<string> | utility |
| src/lib/utils/paths.ts:8 | splitSuffix | local | path: string | utility |
| src/lib/utils/paths.ts:21 | normalizeInput | local | path?: string \| null | utility |
| src/lib/utils/paths.ts:29 | isAlreadyBasePrefixed | local | pathname: string | utility |
| src/lib/utils/paths.ts:33 | resolveAppPath | exported | path?: string \| null | utility |
| src/lib/utils/paths.ts:50 | resolveAssetPath | exported | path?: string \| null | utility |
| src/lib/utils/paths.ts:70 | resolveSrcset | exported | srcset?: string \| null | utility |
| src/lib/utils/wiki-preferences.ts:13 | createEmptyWikiPreferences | exported | - | utility |
| src/lib/utils/wiki-preferences.ts:17 | sanitizeWikiPreferences | exported | value: unknown | utility |
| src/lib/utils/wiki-preferences.ts:36 | parseWikiPreferences | exported | rawValue: string \| null | utility |
| src/lib/utils/wiki-preferences.ts:48 | loadWikiPreferences | exported | - | utility |
| src/lib/utils/wiki-preferences.ts:56 | saveWikiPreferences | exported | preferences: WikiPreferences | utility |
| src/lib/utils/wiki-preferences.ts:70 | clearWikiPreferences | exported | - | utility |
| src/lib/utils/wiki-preferences.ts:78 | isRecord | local | value: unknown | utility |
| src/lib/utils/wiki-search.ts:63 | createEmptySearchState | exported | - | utility |
| src/lib/utils/wiki-search.ts:72 | searchWiki | exported | state: WikiSearchState | utility |
| src/lib/utils/wiki-search.ts:82 | getCollectionSuggestions | exported | query: string, limit = 5 | utility |
| src/lib/utils/wiki-search.ts:94 | getSearchSuggestions | exported | query: string, limit = 8 | utility |
| src/lib/utils/wiki-search.ts:111 | matchesSearchFilters | exported | entry: SearchEntry, filters: WikiSearchFilters | utility |
| src/lib/utils/wiki-search.ts:119 | getTypeFacets | exported | state: WikiSearchState | utility |
| src/lib/utils/wiki-search.ts:143 | getTagFacets | exported | state: WikiSearchState | utility |
| src/lib/utils/wiki-search.ts:168 | groupTagFacets | exported | facets: SearchTagFacet[] | utility |
| src/lib/utils/wiki-search.ts:200 | readSearchStateFromParams | exported | searchParams: URLSearchParams | utility |
| src/lib/utils/wiki-search.ts:209 | writeSearchStateToParams | exported | searchParams: URLSearchParams, state: WikiSearchState | utility |
| src/lib/utils/wiki-search.ts:223 | resetPageForSearchChange | exported | state: WikiSearchState | utility |
| src/lib/utils/wiki-search.ts:230 | getAvailableTypeFilters | exported | - | utility |
| src/lib/utils/wiki-search.ts:234 | getAvailableTagFilters | exported | - | utility |
| src/lib/utils/wiki-search.ts:238 | normaliseSearchQuery | exported | value: string | utility |
| src/lib/utils/wiki-search.ts:259 | tokeniseSearchQuery | exported | query: string | utility |
| src/lib/utils/wiki-search.ts:263 | buildHeaderSearchHref | exported | rawQuery: string, options: { currentRouteId?: string \| null; currentSearchParams?: URLSearchParams; } = {} | utility |
| src/lib/utils/wiki-search.ts:289 | scoreSearchEntry | local | entry: SearchEntry, query: string, tokens: string[] | utility |
| src/lib/utils/wiki-search.ts:348 | compareScoredEntries | local | a: ScoredSearchEntry, b: ScoredSearchEntry | utility |
| src/lib/utils/wiki-search.ts:358 | getSearchableFields | local | entry: SearchEntry | utility |
| src/lib/utils/wiki-search.ts:370 | tokenAppears | local | token: string, fields: string[] | utility |
| src/lib/utils/wiki-search.ts:374 | countTokenMatches | local | tokens: string[], fields: string[] | utility |
| src/lib/utils/wiki-search.ts:378 | matchesQuery | local | entry: SearchEntry, tokens: string[] | utility |
| src/lib/utils/wiki-search.ts:382 | matchesTypeSelection | local | entry: SearchEntry, typeIds: SearchEntryKind[] | utility |
| src/lib/utils/wiki-search.ts:386 | matchesTagSelection | local | entry: SearchEntry, tagIds: string[] | utility |
| src/lib/utils/wiki-search.ts:390 | sanitizeTypeIds | local | ids: string[] | utility |
| src/lib/utils/wiki-search.ts:394 | sanitizeTagIds | local | ids: string[] | utility |
| src/lib/utils/wiki-search.ts:398 | parseListParam | local | value: string \| null | utility |
| src/lib/utils/wiki-search.ts:405 | parsePage | local | value: string \| null | utility |
| src/lib/utils/wiki-search.ts:410 | clampPage | local | page: number, totalPages: number | utility |
| src/lib/utils/wiki-search.ts:414 | writeParam | local | searchParams: URLSearchParams, key: string, value: string | utility |
| src/lib/utils/wiki-search.ts:422 | getBlankTitleRank | local | entry: SearchEntry | utility |
| src/lib/utils/wiki-search.ts:429 | getSearchTagLabel | exported | id: string | utility |
| src/lib/utils/wiki-search.ts:435 | normalizeWhitespace | local | value: string | utility |
| src/lib/utils/wiki-search.ts:439 | singularize | local | value: string | utility |
| src/lib/wiki/icons.ts:13 | getWikiIcon | exported | iconId: WikiIconId \| undefined | wiki-domain |
| src/lib/wiki/navigation.ts:29 | findNavigationItem | exported | href: string, items: NavigationItem[] = navigation | wiki-domain |
| src/lib/wiki/navigation.ts:50 | getNavigationChildren | exported | href: string | wiki-domain |
| src/lib/wiki/navigation.ts:54 | toNavigationItem | local | entry: WikiPageEntry | wiki-domain |
| src/lib/wiki/registry.ts:208 | getWikiPage | exported | id: string | wiki-domain |
| src/lib/wiki/registry.ts:212 | getWikiPageByHref | exported | href: string | wiki-domain |
| src/lib/wiki/registry.ts:225 | getWikiChildren | exported | parentId: string | wiki-domain |
| src/lib/wiki/registry.ts:229 | validateWikiRegistry | exported | - | wiki-domain |
| src/lib/wiki/registry.ts:269 | flattenDomainPage | local | page: DomainPage, options: { parentId?: string; eyebrow?: string; navigation?: boolean; } = {} | wiki-domain |
| src/lib/wiki/registry.ts:308 | domainEyebrow | local | kind: WikiPageKind, fallback?: string | wiki-domain |
| src/lib/wiki/registry.ts:316 | createPageId | local | href: string | wiki-domain |
| src/lib/wiki/registry.ts:320 | normalizeHref | local | href: string | wiki-domain |
| src/lib/wiki/registry.ts:326 | detectParentCycles | local | - | wiki-domain |
| src/lib/wiki/search-index.ts:51 | buildSearchIndex | local | items: WikiPageEntry[] | wiki-domain |
| src/lib/wiki/search-index.ts:55 | toSearchEntry | local | item: WikiPageEntry | wiki-domain |
| src/lib/wiki/search-index.ts:81 | validateSearchIndex | local | entries: SearchEntry[] | wiki-domain |
| src/lib/wiki/search-index.ts:118 | validateSearchTags | local | - | wiki-domain |
| src/routes/changelog/+page.svelte:84 | formatDate | local | date: string | route |
| src/routes/changelog/+page.svelte:93 | clearFilters | local | - | route |
| src/routes/cookies/+page.svelte:65 | removeLocalStoragePreference | local | key: string | route |
| src/routes/cookies/+page.svelte:74 | isPreferenceRemoved | local | key: string | route |
| src/routes/search/+page.svelte:68 | applyStateFromUrl | local | - | route |
| src/routes/search/+page.svelte:79 | setQueryInput | local | value: string | route |
| src/routes/search/+page.svelte:85 | submitSearch | local | replaceState = false | route |
| src/routes/search/+page.svelte:93 | toggleType | local | typeId: SearchEntryKind, checked: boolean | route |
| src/routes/search/+page.svelte:100 | toggleTag | local | tagId: string, checked: boolean | route |
| src/routes/search/+page.svelte:107 | clearFilters | local | - | route |
| src/routes/search/+page.svelte:114 | resetSearch | local | - | route |
| src/routes/search/+page.svelte:127 | closeFiltersOnMobile | local | - | route |
| src/routes/search/+page.svelte:133 | removeType | local | typeId: SearchEntryKind | route |
| src/routes/search/+page.svelte:137 | removeTag | local | tagId: string | route |
| src/routes/search/+page.svelte:141 | chooseSuggestion | local | href: string | route |
| src/routes/search/+page.svelte:147 | handleSuggestionKeydown | local | event: KeyboardEvent | route |
| src/routes/search/+page.svelte:176 | goToResultsPage | local | pageNumber: number | route |
| src/routes/search/+page.svelte:183 | syncUrlState | local | replaceState: boolean | route |

## Findings

- Registry API: `getWikiPage`, `getWikiPageByHref`, `getWikiChildren`, `flattenDomainPage`, `createPageId`, `normalizeHref`.
- Navigation API: `navigation`, `getNavigationChildren`; `findNavigationItem` and `toNavigationItem` are local implementation helpers.
- Availability API after Phase 3: `getAvailabilityByHref` is the canonical lookup for UI and search metadata. `AvailabilityBadges` calls it by href, and `availability-metadata.ts` derives Party/Dungeon Master metadata from its returned `PageAvailability`.
- Browser-only behavior: `wiki-preferences.ts`, `Header.svelte`, and `routes/search/+page.svelte` touch localStorage/navigation/browser state and guard or depend on client context.
- Duplicate normalization: href/path cleanup, search query cleanup, localStorage parsing, search id validation, route matching.

## Phase 4 Registry And Metadata Utilities

- `src/lib/wiki/registry.ts` exports `getFooterPages(group)` and `getFooterPageGroups()`. These are registry-derived footer helpers, not a second footer registry.
- `src/lib/components/PageDocumentMetadata.svelte` is the single document metadata rendering boundary. It receives a `WikiPageEntry`, formats the title with `siteConfig.name`, and emits the matching meta description when one exists.
- The root layout uses `getWikiPageByHref(page.url.pathname)` for static/information/legal/rules/search/preference pages. Class and species layouts keep using the same registry lookup for their domains.
- `scripts/test-wiki-search.mjs` now contains structural validation for route existence, route-owned metadata, footer derivation, home quick-link derivation, child-card derivation, and static searchability.

Do not add another navigation, footer, search, or metadata registry. Add narrowly scoped registry helpers only when consumers need derived registry data.

## Phase 5 Utility Ownership Result

| Utility area | Owner | Contract |
| --- | --- | --- |
| Registry lookup | `src/lib/wiki/registry.ts` | `getWikiPage`, `getWikiPageByHref`, `getWikiChildren`, `getFooterPages`, and `getFooterPageGroups` return registry-derived metadata. |
| Registry href normalization | `src/lib/wiki/registry.ts` local helper | Strips query/hash/trailing slash for registry lookups and supports deployment base-path suffix matching through `getWikiPageByHref`. |
| Availability lookup | `src/lib/data/availability.ts` | `normalizeAvailabilityHref()` and `getAvailabilityByHref()` normalize canonical Wiki hrefs and return copied readonly status arrays. |
| App path resolution | `src/lib/utils/paths.ts` | `resolveAppPath()` resolves internal route hrefs through SvelteKit base-path handling and leaves external URLs/anchors untouched. |
| Asset path resolution | `src/lib/utils/paths.ts` | `resolveAssetPath()` and `resolveSrcset()` resolve static assets through SvelteKit asset paths and leave external URLs/anchors untouched. |
| Party/DM validation | `src/lib/config/campaigns.ts` | `isPartyId()` and `isDungeonMasterId()` validate boundary strings before they become stable IDs. |
| Preference parsing | `src/lib/utils/wiki-preferences.ts` | Handles JSON/localStorage safely and sanitizes through campaign validators. |
| Search normalization | `src/lib/utils/wiki-search.ts` | Owns query whitespace, tokenization, search URL state, scoring, and facets. |

The removed campaign facades no longer own helper aliases. Import `selectParties()`, `selectAllParties()`, `getParty()`, `getDungeonMaster()`, and validators directly from `src/lib/config/campaigns.ts`.

Phase 5 deliberately kept different path contracts separate. Registry href normalization, availability href normalization, app route resolution, asset resolution, and generated Pages verification do not have identical semantics, so they were documented and tested instead of being merged into one ambiguous helper.
