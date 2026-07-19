# Types

## Current State After Phase 7

Shared types remain owned by their boundary modules:

- `WikiDomainPage` in `src/lib/wiki/domain.ts`.
- `WikiPageEntry`, `WikiPageKind`, and `FooterPageGroup` in `src/lib/wiki/registry.ts`.
- `NavigationItem` in `src/lib/wiki/navigation.ts`.
- `SearchEntry` and `SearchEntryKind` in `src/lib/wiki/search-index.ts`.
- `PartyId`, `DungeonMasterId`, `Party`, and `DungeonMaster` in `src/lib/config/campaigns.ts`.
- `PageAvailability`, `AvailabilityNode`, and `AvailabilityConfig` in `src/lib/data/availability.ts`.
- `WikiIconId` in `src/lib/wiki/icon-ids.ts`.
- `WikiPreferences` in `src/lib/utils/wiki-preferences.ts`.

Removed type surfaces remain dead: `PartyCode`, `PartyOption`, `ClassCode`, and `ClassData` from the deleted data compatibility modules.

## Historical Snapshot

The inventory table below is the original audit snapshot. Phase result sections supersede rows for files or aliases removed in later phases.

| File:line | Type | Export/local | Category |
| --- | --- | --- | --- |
| scripts/test-wiki-search.mjs:300 | selections | local/imported | script |
| scripts/test-wiki-search.mjs:306 | facets | local/imported | script |
| scripts/test-wiki-search.mjs:340 | and | local/imported | script |
| src/lib/components/AvailabilityBadges.svelte:4 | PageAvailability | local/imported | component |
| src/lib/components/AvailabilityBadges.svelte:9 | Props | local/imported | component |
| src/lib/components/CampaignNote.svelte:4 | Props | local/imported | component |
| src/lib/components/ChildLinkGrid.svelte:5 | Gender | local/imported | component |
| src/lib/components/ChildLinkGrid.svelte:7 | ChildPageLink | local/imported | component |
| src/lib/components/ChildLinkGrid.svelte:16 | Props | local/imported | component |
| src/lib/components/feedback/EmptyState.svelte:4 | Props | local/imported | component |
| src/lib/components/forms/ActionButton.svelte:4 | Props | local/imported | component |
| src/lib/components/forms/SelectField.svelte:2 | SelectOption | local/imported | component |
| src/lib/components/forms/SelectField.svelte:7 | Props | local/imported | component |
| src/lib/components/layout/Panel.svelte:4 | Props | local/imported | component |
| src/lib/components/layout/snippets/Header.svelte:12 | Props | local/imported | component |
| src/lib/components/layout/snippets/helpers/NavTree.svelte:7 | Props | local/imported | component |
| src/lib/components/layout/snippets/Sidebar.svelte:8 | Props | local/imported | component |
| src/lib/components/layout/WikiLayout.svelte:8 | Props | local/imported | component |
| src/lib/components/PageHeader.svelte:4 | Props | local/imported | component |
| src/lib/components/PageSection.svelte:4 | Props | local/imported | component |
| src/lib/components/RuleTag.svelte:2 | Props | local/imported | component |
| src/lib/components/search/SearchFilterGroup.svelte:4 | SearchFilterOption | exported | component |
| src/lib/components/search/SearchFilterGroup.svelte:11 | Props | local/imported | component |
| src/lib/components/WikiImage.svelte:5 | Props | local/imported | component |
| src/lib/components/WikiPreferences.svelte:13 | WikiPreferences | local/imported | component |
| src/lib/components/WikiTable.svelte:2 | Props | local/imported | component |
| src/lib/config/campaigns.ts:90 | DungeonMasterId | exported | config |
| src/lib/config/campaigns.ts:91 | PartyId | exported | config |
| src/lib/config/campaigns.ts:90 | DungeonMaster | exported | config |
| src/lib/config/campaigns.ts:91 | Party | exported | config |
| src/lib/data/ai-images.ts:1 | AiImageType | exported | data |
| src/lib/data/ai-images.ts:8 | AiImageEntry | exported | data |
| src/lib/data/ai-images.ts:22 | ClassCardSet | local/imported | data |
| src/lib/data/availability.ts:1 | PartyCode | local/imported | data |
| src/lib/data/availability.ts:3 | PageAvailability | exported | data |
| src/lib/data/availability.ts:10 | AvailabilityNode | exported | data |
| src/lib/data/availability.ts:14 | AvailabilityBranch | exported | data |
| src/lib/data/availability.ts:16 | AvailabilityConfig | exported | data |
| src/lib/data/changelog.ts:1 | ChangeType | exported | data |
| src/lib/data/changelog.ts:9 | ChangeLink | exported | data |
| src/lib/data/changelog.ts:15 | ChangeItem | exported | data |
| src/lib/data/changelog.ts:22 | ChangelogRelease | exported | data |
| src/lib/data/changelog.ts:53 | filters | local/imported | data |
| src/lib/data/classes.ts:12 | ClassCode | exported | data |
| src/lib/data/classes.ts:13 | ClassData | exported | data |
| src/lib/data/dungeon-masters.ts:5 | DungeonMaster | local/imported | data |
| src/lib/data/dungeon-masters.ts:6 | DungeonMasterId | local/imported | data |
| src/lib/data/parties.ts:6 | Party | local/imported | data |
| src/lib/data/parties.ts:7 | PartyId | local/imported | data |
| src/lib/data/parties.ts:12 | PartyCode | exported | data |
| src/lib/data/parties.ts:12 | Party | exported | data |
| src/lib/data/parties.ts:14 | PartyOption | exported | data |
| src/lib/data/sources.ts:1 | SourceKind | exported | data |
| src/lib/data/sources.ts:7 | SourceStatus | exported | data |
| src/lib/data/sources.ts:12 | SourceAccess | exported | data |
| src/lib/data/sources.ts:18 | SourceLink | exported | data |
| src/lib/data/sources.ts:23 | SourceEntry | exported | data |
| src/lib/utils/availability-metadata.ts:1 | PageAvailability | local/imported | utility |
| src/lib/utils/availability-metadata.ts:5 | Party | local/imported | utility |
| src/lib/utils/availability-metadata.ts:6 | DungeonMasterId | local/imported | utility |
| src/lib/utils/availability-metadata.ts:7 | PartyId | local/imported | utility |
| src/lib/utils/availability-metadata.ts:10 | AvailabilityMetadata | exported | utility |
| src/lib/utils/content-filters.ts:3 | FilterableMetadata | exported | utility |
| src/lib/utils/content-filters.ts:8 | ContentFilterSelection | exported | utility |
| src/lib/utils/wiki-preferences.ts:5 | WikiPreferences | exported | utility |
| src/lib/utils/wiki-search.ts:5 | SearchEntry | local/imported | utility |
| src/lib/utils/wiki-search.ts:6 | SearchEntryKind | local/imported | utility |
| src/lib/utils/wiki-search.ts:12 | SearchTagGroupId | local/imported | utility |
| src/lib/utils/wiki-search.ts:23 | WikiSearchFilters | exported | utility |
| src/lib/utils/wiki-search.ts:28 | WikiSearchState | exported | utility |
| src/lib/utils/wiki-search.ts:33 | ScoredSearchEntry | exported | utility |
| src/lib/utils/wiki-search.ts:38 | SearchTypeFacet | exported | utility |
| src/lib/utils/wiki-search.ts:45 | SearchTagFacet | exported | utility |
| src/lib/utils/wiki-search.ts:53 | SearchTagFacetGroup | exported | utility |
| src/lib/wiki/icons.ts:11 | WikiIconId | exported | wiki-domain |
| src/lib/wiki/navigation.ts:4 | WikiPageEntry | local/imported | wiki-domain |
| src/lib/wiki/navigation.ts:5 | WikiPageKind | local/imported | wiki-domain |
| src/lib/wiki/navigation.ts:10 | SearchEntryKind | exported | wiki-domain |
| src/lib/wiki/navigation.ts:12 | NavigationItem | exported | wiki-domain |
| src/lib/wiki/registry.ts:6 | WikiPageKind | exported | wiki-domain |
| src/lib/wiki/registry.ts:27 | WikiPageEntry | exported | wiki-domain |
| src/lib/wiki/registry.ts:44 | DomainPage | local/imported | wiki-domain |
| src/lib/wiki/search-index.ts:2 | WikiPageEntry | local/imported | wiki-domain |
| src/lib/wiki/search-index.ts:2 | WikiPageKind | local/imported | wiki-domain |
| src/lib/wiki/search-index.ts:5 | SearchEntryKind | exported | wiki-domain |
| src/lib/wiki/search-index.ts:5 | SearchEntry | exported | wiki-domain |
| src/lib/wiki/search-tags.ts:1 | SearchTagGroupId | exported | wiki-domain |
| src/lib/wiki/search-tags.ts:1 | SearchTag | exported | wiki-domain |
| src/routes/+layout.svelte:7 | Props | local/imported | route |
| src/routes/+page.svelte:6 | PartyId | local/imported | route |
| src/routes/accessibility/+page.svelte:105 | prioritises | local/imported | route |
| src/routes/accessibility/+page.svelte:118 | fonts | local/imported | route |
| src/routes/accessibility/+page.svelte:135 | elements | local/imported | route |
| src/routes/changelog/+page.svelte:9 | ChangeType | local/imported | route |
| src/routes/changelog/+page.svelte:12 | ChangeFilter | local/imported | route |
| src/routes/classes/+layout.svelte:9 | Props | local/imported | route |
| src/routes/classes/artificer/+page.svelte:191 | of | local/imported | route |
| src/routes/classes/artificer/+page.svelte:191 | of | local/imported | route |
| src/routes/cookies/+page.svelte:7 | StorageTechnology | local/imported | route |
| src/routes/cookies/+page.svelte:40 | preference | local/imported | route |
| src/routes/cookies/+page.svelte:40 | preference | local/imported | route |
| src/routes/cookies/+page.svelte:140 | preferences | local/imported | route |
| src/routes/cookies/+page.svelte:140 | preferences | local/imported | route |
| src/routes/cookies/+page.svelte:350 | filters | local/imported | route |
| src/routes/cookies/+page.svelte:426 | choices | local/imported | route |
| src/routes/cookies/+page.svelte:140 | preferences | local/imported | route |
| src/routes/credits/+page.svelte:297 | assets | local/imported | route |
| src/routes/credits/+page.svelte:297 | assets | local/imported | route |
| src/routes/credits/+page.svelte:297 | assets | local/imported | route |
| src/routes/credits/+page.svelte:412 | elements | local/imported | route |
| src/routes/privacy/+page.svelte:239 | filters | local/imported | route |
| src/routes/privacy/+page.svelte:259 | where | local/imported | route |
| src/routes/privacy/+page.svelte:539 | of | local/imported | route |
| src/routes/search/+page.svelte:24 | WikiSearchState | local/imported | route |
| src/routes/search/+page.svelte:26 | SearchEntryKind | local/imported | route |
| src/routes/search/+page.svelte:457 | and | local/imported | route |
| src/routes/sources/+page.svelte:11 | SourceKind | local/imported | route |
| src/routes/sources/+page.svelte:14 | SourceFilter | local/imported | route |
| src/routes/species/+layout.svelte:9 | Props | local/imported | route |

## Type Consolidation Candidates

- `PartyCode` was removed in Phase 5; new code uses `PartyId`.
- `SearchEntryKind` is owned by `src/lib/wiki/search-index.ts` as a search boundary alias of `WikiPageKind`; navigation no longer owns or re-exports it.
- `WikiDomainPage` is owned by `src/lib/wiki/domain.ts`; `WikiPageEntry` remains registry-owned because it is the flattened registry output.
- Availability types should live with the availability source and be reused by components/metadata.
- Keep one-off component `Props` local; export reusable shapes only.
- Replace broad `string` ids with derived unions for page ids, icon ids, party ids, DM ids, and search tags where practical.

## Phase 5 Type Ownership Result

| Type | Owner | Notes |
| --- | --- | --- |
| `WikiDomainPage` | `src/lib/wiki/domain.ts` | Authoring contract for nested domain records. Uses readonly metadata arrays and readonly `children`. |
| `WikiPageKind` | `src/lib/wiki/registry.ts` | Registry-owned page kind union reused by domain and search boundaries. |
| `WikiPageEntry` | `src/lib/wiki/registry.ts` | Flattened registry output. Not aliased to `WikiDomainPage`. |
| `NavigationItem` | `src/lib/wiki/navigation.ts` | Navigation projection. Carries stable icon IDs and readonly child/tag arrays. |
| `SearchEntry` | `src/lib/wiki/search-index.ts` | Search projection/enrichment. Registry metadata fields remain compatible but search-only fields stay search-owned. |
| `SearchEntryKind` | `src/lib/wiki/search-index.ts` | Alias of `WikiPageKind` for search state and facets. |
| `PartyId` | `src/lib/config/campaigns.ts` | Derived from `campaignConfig.parties`. No manual union. |
| `DungeonMasterId` | `src/lib/config/campaigns.ts` | Derived from `campaignConfig.dungeonMasters`. No manual union. |
| `PartyCode` | removed | The compatibility alias had no consumers after Phase 2 imports converged. |
| `PageAvailability`, `AvailabilityNode`, `AvailabilityConfig` | `src/lib/data/availability.ts` | Availability-owned. Status arrays are readonly in the public contract and copied on lookup. |
| `WikiIconId` | `src/lib/wiki/icon-ids.ts` | Stable icon ID union. Asset URL resolution remains in `src/lib/wiki/icons.ts`. |
| `WikiPreferences` | `src/lib/utils/wiki-preferences.ts` | Browser-local storage contract for optional Party/DM IDs. |
| Component `Props` | local component files | Remain local unless an exact semantic contract has multiple consumers. |

Removed obsolete compatibility type/export surface:

- `src/lib/data/parties.ts`
- `src/lib/data/dungeon-masters.ts`
- `PartyCode`
- `PartyOption`
- `getPartyIdByName`

Structural tests now guard against manual `PartyId`/`DungeonMasterId` unions outside `campaigns.ts`, arbitrary `as PartyId` or `as DungeonMasterId` casts, duplicate SVG module declarations, and new global `types.ts`/`helpers.ts` catch-all modules.
