# Functions And Utilities

## `scripts/test-wiki-search.mjs`
- Exported functions/types: PartyId, DungeonMasterId, wikiPageBy, findNavigationItem, resolveSrcset, wikiIconIds, WikiPageEntry, NavigationItem, SearchEntry.
- Purpose: TypeScript/JavaScript module exporting PartyId, DungeonMasterId, wikiPageBy, findNavigationItem, resolveSrcset, wikiIconIds, WikiPageEntry, NavigationItem, SearchEntry.
- Important internal functions: titlesFor, createMemoryStorage, findNavigationItem, splitSuffix, resolveSrcset, routePageFiles, sourceFiles, scriptFiles, styleFiles, documentationFiles, currentInventorySourceFiles, isInventorySourceFile, isGeneratedPath, extractImportSpecifiers, cssCustomPropertyDefinitions, cssCustomPropertyReferences, sourceConsumers, isCompatibilityFacade, resolveSassImport, routeSourcePathForHref, routeSourceExistsForHref, hrefForRouteSource, assertLayoutOwnsPageHeaders, assertLayoutOwnsAvailabilityBadges, countMatches, flattenAvailability, flattenAvailabilityNode, flattenDomainPages, domainRecordsByKind, registryEntryForDomainPage, assertDomainPageHasSingleRegistryEntry, flattenNavigation, assertUniqueHrefs, assertNoRuntimeImportCycles, visit, runtimeCoreImports, resolveSourceImport, findSourcePath, escapeRegExp.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: no importer found.
- Side effects: reads or writes localStorage in browser, executes validation logic when npm scripts run.
- Browser/Svelte dependencies: localStorage.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: uses path strings/hrefs.
- Presentation logic/data ownership: browser storage key/value behaviour.
- Concerns: depends on $lib/wiki modules that are deleted in current working tree; depends on config module name that does not exist in current working tree.

## `scripts/verify-pages-build.mjs`
- Exported functions/types: none detected.
- Purpose: TypeScript/JavaScript module with local logic and no detected named exports.
- Important internal functions: report, walk, relativeFile, isIgnoredUrl, stripSuffix, splitSrcset, publicPathForFile, resolvePublicPath, candidateFilesForPublicPath, verifyLocalUrl, inspectHtml, inspectCss.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: no importer found.
- Side effects: executes validation logic when npm scripts run.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: uses path strings/hrefs.
- Presentation logic/data ownership: none detected.
- Concerns: none detected.

## `src/lib/components/layout/snippets/helpers/NavTree.scss`
- Exported functions/types: none detected.
- Purpose: SCSS styles for NavTree, including selectors .nav-tree, .nav-tree__link, .nav-tree__link, .navigation-item__icon, .nav-tree__marker, .navigation-item__icon, .navigation-item__icon, .nav-tree__link.
- Important internal functions: none detected.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/components/layout/snippets/helpers/NavTree.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: none detected.

## `src/lib/components/layout/snippets/helpers/NavTree.svelte`
- Exported functions/types: NavTree.
- Purpose: Svelte component NavTree; renders/imports component tags Record.
- Important internal functions: isActive, isActiveBranch, isExpanded, toggleExpanded, resetExpansionForPath, childListId.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/components/layout/snippets/Sidebar.svelte, src/lib/components/layout/snippets/helpers/NavTree.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: Svelte runes.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: uses path strings/hrefs.
- Presentation logic/data ownership: none detected.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

## `src/lib/helpers/Icon-Types.ts`
- Exported functions/types: IconCategory, IconName, IconPath, IconReference, IconType, Props.
- Purpose: TypeScript/JavaScript module exporting IconCategory, IconName, IconPath, IconReference, IconType, Props.
- Important internal functions: none detected.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/helpers/Icon-helper.ts, src/lib/helpers/Icon.svelte, src/lib/layout/snippets/Sidebar-Types.ts, src/lib/pages/IconCallout/IconCallout-Types.ts, src/lib/pages/IconLinkCard/IconLinkCard-Types.ts, src/lib/pages/StatusLegend/StatusLegend-Types.ts, src/lib/pages/StepList/StepList-Types.ts.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: generic infrastructure.
- Naming/location fit: new implementation area; likely intentional.
- Equivalent logic elsewhere: Icon system.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: new high-priority implementation area per user context.

## `src/lib/helpers/Icon-data.ts`
- Exported functions/types: iconsList.
- Purpose: TypeScript/JavaScript module exporting iconsList.
- Important internal functions: none detected.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/helpers/Icon-Types.ts, src/lib/helpers/Icon-helper.ts.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: generic infrastructure.
- Naming/location fit: new implementation area; likely intentional.
- Equivalent logic elsewhere: Icon system.
- Path/id risk: none detected.
- Presentation logic/data ownership: icon import map and icon reference categories.
- Concerns: new high-priority implementation area per user context.

## `src/lib/helpers/Icon-helper.ts`
- Exported functions/types: getIcon, resolveIcon.
- Purpose: TypeScript/JavaScript module exporting getIcon, resolveIcon.
- Important internal functions: getIcon, resolveIcon.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/helpers/Icon.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: generic infrastructure.
- Naming/location fit: new implementation area; likely intentional.
- Equivalent logic elsewhere: Icon system.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: new high-priority implementation area per user context.

## `src/lib/helpers/Icon.scss`
- Exported functions/types: none detected.
- Purpose: SCSS styles for Icon, including selectors .icon, .icon--normal, .icon--in-text, .icon--change-on-hover, .icon.
- Important internal functions: none detected.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/helpers/Icon.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: generic infrastructure.
- Naming/location fit: new implementation area; likely intentional.
- Equivalent logic elsewhere: none detected.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: new high-priority implementation area per user context.

## `src/lib/helpers/Icon.svelte`
- Exported functions/types: Icon.
- Purpose: Svelte component Icon; accepts props class.
- Important internal functions: none detected.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/layout/snippets/Sidebar.svelte, src/lib/pages/IconCallout/IconCallout.svelte, src/lib/pages/IconLinkCard/IconLinkCard.svelte, src/lib/pages/StatusLegend/StatusLegend.svelte, src/lib/pages/StepList/StepList.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: Svelte runes.
- Generic or feature-specific: generic infrastructure.
- Naming/location fit: new implementation area; likely intentional.
- Equivalent logic elsewhere: Icon system.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: new high-priority implementation area per user context.

## `src/lib/helpers/parties-helper.ts`
- Exported functions/types: get.
- Purpose: TypeScript/JavaScript module exporting get.
- Important internal functions: none detected.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: no importer found.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: new implementation area; likely intentional.
- Equivalent logic elsewhere: Party/campaign config.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: new high-priority implementation area per user context.

## `src/lib/utils/availability-metadata.ts`
- Exported functions/types: AvailabilityMetadata, getAvailabilityMetadataForHref, getAvailabilityPartyIds, getDungeonMasterIdsForPartyIds, getAvailabilityParties, getAvailabilityLabel.
- Purpose: TypeScript/JavaScript module exporting AvailabilityMetadata, getAvailabilityMetadataForHref, getAvailabilityPartyIds, getDungeonMasterIdsForPartyIds, getAvailabilityParties, getAvailabilityLabel.
- Important internal functions: getAvailabilityMetadataForHref, getAvailabilityPartyIds, getDungeonMasterIdsForPartyIds, getAvailabilityParties, getAvailabilityLabel, unique.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/components/AvailabilityBadges.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: Availability.
- Path/id risk: uses path strings/hrefs.
- Presentation logic/data ownership: none detected.
- Concerns: all detected logic is commented out.

## `src/lib/utils/content-filters.ts`
- Exported functions/types: FILTER_ALL_ID, FilterableMetadata, ContentFilterSelection, matchesPartyFilter, matchesDungeonMasterFilter, matchesContentFilters, sanitizeStoredFilters.
- Purpose: TypeScript/JavaScript module exporting FILTER_ALL_ID, FilterableMetadata, ContentFilterSelection, matchesPartyFilter, matchesDungeonMasterFilter, matchesContentFilters, sanitizeStoredFilters.
- Important internal functions: matchesSelectedIds, matchesPartyFilter, matchesDungeonMasterFilter, matchesContentFilters, sanitizeStoredFilters.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: no importer found.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: all detected logic is commented out.

## `src/lib/utils/index.ts`
- Exported functions/types: cleanPath, getPathParts.
- Purpose: TypeScript/JavaScript module exporting cleanPath, getPathParts.
- Important internal functions: cleanPath, getPathParts.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/page/layout/navigation/snippets/Tags-helpers.ts.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: none detected.

## `src/lib/utils/paths.ts`
- Exported functions/types: resolveAppPath, resolveAssetPath, resolveSrcset.
- Purpose: TypeScript/JavaScript module exporting resolveAppPath, resolveAssetPath, resolveSrcset.
- Important internal functions: splitSuffix, normalizeInput, isAlreadyBasePrefixed, resolveAppPath, resolveAssetPath, resolveSrcset.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/lib/components/ChildLinkGrid.svelte, src/lib/components/WikiImage.svelte, src/lib/components/layout/snippets/Footer.svelte, src/lib/components/layout/snippets/Sidebar.svelte, src/lib/components/layout/snippets/helpers/NavTree.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/content-removal/+page.svelte, src/routes/contribution-terms/+page.svelte, src/routes/cookies/+page.svelte, src/routes/credits/+page.svelte, src/routes/preferences/+page.svelte, src/routes/privacy/+page.svelte, src/routes/sources/+page.svelte.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: generic infrastructure.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: uses path strings/hrefs.
- Presentation logic/data ownership: none detected.
- Concerns: none detected.

## `src/lib/utils/wiki-preferences.ts`
- Exported functions/types: WIKI_PREFERENCES_STORAGE_KEY, WikiPreferences, createEmptyWikiPreferences, sanitizeWikiPreferences, parseWikiPreferences, loadWikiPreferences, saveWikiPreferences, clearWikiPreferences.
- Purpose: TypeScript/JavaScript module exporting WIKI_PREFERENCES_STORAGE_KEY, WikiPreferences, createEmptyWikiPreferences, sanitizeWikiPreferences, parseWikiPreferences, loadWikiPreferences, saveWikiPreferences, clearWikiPreferences.
- Important internal functions: createEmptyWikiPreferences, sanitizeWikiPreferences, parseWikiPreferences, loadWikiPreferences, saveWikiPreferences, clearWikiPreferences, isRecord.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: src/routes/cookies/+page.svelte, src/routes/privacy/+page.svelte.
- Side effects: reads or writes localStorage in browser.
- Browser/Svelte dependencies: localStorage.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: none detected.
- Path/id risk: none detected.
- Presentation logic/data ownership: browser storage key/value behaviour.
- Concerns: imports at least one missing or case-mismatched internal target; depends on config module name that does not exist in current working tree.

## `src/lib/utils/wiki-search.ts`
- Exported functions/types: RESULTS_PER_PAGE, SEARCH_QUERY_KEYS, WikiSearchFilters, WikiSearchState, ScoredSearchEntry, SearchTypeFacet, SearchTagFacet, SearchTagFacetGroup, createEmptySearchState, searchWiki, getCollectionSuggestions, getSearchSuggestions, matchesSearchFilters, getTypeFacets, getTagFacets, groupTagFacets, paginateResults, readSearchStateFromParams, writeSearchStateToParams, resetPageForSearchChange, getAvailableTypeFilters, getAvailableTagFilters, normaliseSearchQuery, normalizeSearchText, tokeniseSearchQuery, buildHeaderSearchHref, getSearchTagLabel.
- Purpose: TypeScript/JavaScript module exporting RESULTS_PER_PAGE, SEARCH_QUERY_KEYS, WikiSearchFilters, WikiSearchState, ScoredSearchEntry, SearchTypeFacet, SearchTagFacet, SearchTagFacetGroup, createEmptySearchState, searchWiki, ....
- Important internal functions: createEmptySearchState, searchWiki, getCollectionSuggestions, getSearchSuggestions, matchesSearchFilters, getTypeFacets, getTagFacets, groupTagFacets, paginateResults, readSearchStateFromParams, writeSearchStateToParams, resetPageForSearchChange, getAvailableTypeFilters, getAvailableTagFilters, normaliseSearchQuery, tokeniseSearchQuery, buildHeaderSearchHref, scoreSearchEntry, compareScoredEntries, getSearchableFields, tokenAppears, countTokenMatches, matchesQuery, matchesTypeSelection, matchesTagSelection, sanitizeTypeIds, sanitizeTagIds, parseListParam, parsePage, clampPage, writeParam, getBlankTitleRank, getSearchTagLabel, normalizeWhitespace, singularize.
- Input/output behavior: inferred from exports and consumers; inspect source for exact parameter contracts where confidence is not high.
- Consumers: no importer found.
- Side effects: none detected.
- Browser/Svelte dependencies: none detected.
- Generic or feature-specific: feature-specific or unresolved.
- Naming/location fit: matches current path loosely.
- Equivalent logic elsewhere: Search.
- Path/id risk: none detected.
- Presentation logic/data ownership: none detected.
- Concerns: all detected logic is commented out.
