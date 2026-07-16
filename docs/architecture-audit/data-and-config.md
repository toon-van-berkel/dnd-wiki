# Data And Config

## Current State After Phase 7

The current editable data/config owners are:

- `src/lib/config/campaigns.ts` for Party and Dungeon Master identities, order, relationships, and Party colour token names.
- `src/lib/config/site.ts` for site-level identity values.
- `src/lib/data/availability.ts` for availability decisions by canonical Wiki href.
- `src/lib/data/ai-images.ts`, `src/lib/data/changelog.ts`, and `src/lib/data/sources.ts` for their specific content datasets.
- `src/lib/wiki/classes/`, `src/lib/wiki/species/`, and `src/lib/wiki/static-pages.ts` for page metadata.
- `src/lib/wiki/registry.ts` for the derived combined page registry.

The old `src/lib/data/classes.ts`, `src/lib/data/parties.ts`, and `src/lib/data/dungeon-masters.ts` modules are removed. Do not edit or import them.

## Historical Snapshot

The inventory table below is the original audit snapshot. Phase result sections supersede rows for removed compatibility files and later ownership changes.

| File:line | Export | Category | Ownership |
| --- | --- | --- | --- |
| src/lib/config/campaigns.ts:1 | campaignConfig | config | authoritative or label map |
| src/lib/config/campaigns.ts:95 | dungeonMasters | config | authoritative or label map |
| src/lib/config/campaigns.ts:96 | parties | config | authoritative or label map |
| src/lib/config/campaigns.ts:97 | dungeonMasterById | config | authoritative or label map |
| src/lib/config/campaigns.ts:100 | partyById | config | authoritative or label map |
| src/lib/config/site.ts:1 | siteConfig | config | authoritative or label map |
| src/lib/data/ai-images.ts:218 | aiEditedImages | data | authoritative or label map |
| src/lib/data/ai-images.ts:220 | aiImages | data | authoritative or label map |
| src/lib/data/availability.ts:22 | availability | data | authoritative or label map |
| src/lib/data/changelog.ts:31 | changeTypeLabels | data | authoritative or label map |
| src/lib/data/changelog.ts:40 | changelog | data | authoritative or label map |
| src/lib/data/classes.ts:3 | classes | data | authoritative or label map |
| src/lib/data/sources.ts:44 | sourceKindLabels | data | authoritative or label map |
| src/lib/data/sources.ts:51 | sourceStatusLabels | data | authoritative or label map |
| src/lib/data/sources.ts:57 | sourceAccessLabels | data | authoritative or label map |
| src/lib/data/sources.ts:64 | sources | data | authoritative or label map |
| src/lib/utils/wiki-search.ts:16 | SEARCH_QUERY_KEYS | utility | authoritative or label map |
| src/lib/wiki/classes/classes.ts:4 | classes | wiki-domain | authoritative or label map |
| src/lib/wiki/classes/sub_classes-cleric.ts:1 | subClasses_Clerics | wiki-domain | authoritative or label map |
| src/lib/wiki/classes/sub_classes-rogues.ts:1 | subClasses_Rogues | wiki-domain | authoritative or label map |
| src/lib/wiki/icons.ts:5 | wikiIcons | wiki-domain | authoritative or label map |
| src/lib/wiki/registry.ts:188 | wikiPages | wiki-domain | derived |
| src/lib/wiki/registry.ts:200 | wikiPageById | wiki-domain | derived |
| src/lib/wiki/registry.ts:203 | wikiPageByHref | wiki-domain | derived |
| src/lib/wiki/search-index.ts:22 | contentTypeLabels | wiki-domain | authoritative or label map |
| src/lib/wiki/search-tags.ts:20 | searchTagGroupLabels | wiki-domain | authoritative or label map |
| src/lib/wiki/search-tags.ts:33 | searchTagGroupOrder | wiki-domain | authoritative or label map |
| src/lib/wiki/search-tags.ts:46 | searchTags | wiki-domain | authoritative or label map |
| src/lib/wiki/search-tags.ts:107 | searchTagById | wiki-domain | authoritative or label map |
| src/lib/wiki/species/species-elfs.ts:1 | elfs | wiki-domain | authoritative or label map |
| src/lib/wiki/species/species-humans.ts:1 | humans | wiki-domain | authoritative or label map |
| src/lib/wiki/species/species.ts:4 | species | wiki-domain | authoritative or label map |

## Major Concepts

- Classes/subclasses: source is `src/lib/wiki/classes/classes.ts` and `sub_classes-*.ts`; route bodies, assets, and availability remain separate concerns.
- Species: source is `src/lib/wiki/species/*.ts`; species route headers are layout-owned and dead species availability entries without matching registry pages were removed in Phase 3.
- Registry/navigation/search: `registry.ts` is authoritative for static pages and flattened domain pages; `navigation.ts` and `search-index.ts` are derived.
- Availability: central table is `src/lib/data/availability.ts`; UI and search metadata use `getAvailabilityByHref()`.
- Parties/DMs: `src/lib/config/campaigns.ts` is authoritative. The old `src/lib/data/parties.ts` and `src/lib/data/dungeon-masters.ts` compatibility facades were removed in Phase 5 after scans confirmed no remaining consumers.
- Site/sources/changelog/AI/images/icons: `site.ts`, `sources.ts`, `changelog.ts`, `ai-images.ts`, and `wiki/icons.ts` own their specific data, but legal constants and asset mapping are repeated.

## Required Class And Species Trace

| Example | Name/slug/url | Description | Tags/keywords | Availability | Image/icon/page content | Flow |
| --- | --- | --- | --- | --- | --- | --- |
| Cleric | classes.ts title Cleric, href /classes/cleric | classes.ts; route prose | classes.ts tags | availability.ts classes.cleric | static/classes/cleric; route body | domain -> registry -> navigation/search -> class layout -> header/badges |
| Life Domain | sub_classes-cleric.ts href /classes/cleric/life-domain | sub_classes-cleric.ts; route body prose | keywords/tags in sub_classes-cleric.ts | availability.ts nested life-domain | static/classes/cleric/life-domain; route body | subclass data -> registry -> nav/search -> class layout |
| Rogue | classes.ts | classes.ts; route prose | classes.ts tags | availability.ts classes.rogue | static/classes/rogue; ai-images.ts; route table | domain -> registry -> nav/search -> layout -> route body |
| Assassin | sub_classes-rogues.ts href /classes/rogue/assassin | sub_classes-rogues.ts | sub_classes-rogues.ts tags | no explicit central nested availability | static/classes/rogue/assassin; route shell; ai-images.ts | subclass data -> registry -> nav/search -> layout |
| Elf | species-elfs.ts | species-elfs.ts; route prose | species keywords | availability.ts species.elf | static/species/elf; route body | species data -> registry -> nav/search -> species layout |
| Tiefling | no current registry/domain page | none found | none found | no current availability entry | no route/domain/image found | future content only |
| Tiefling Hybrid | no current registry/domain page | none found | none found | no current availability entry | no route/domain/image found | future content only |

## Party And Dungeon Master Trace

| Concept | Locations | Finding |
| --- | --- | --- |
| Party IDs i1-i8 | campaigns.ts; availability.ts; tests | Availability entries reference stable ids as decisions; identity source is config. |
| Party names/short names | campaigns.ts; derived Sidebar/WikiPreferences/home table/prose | Config is source; legal/prose mentions may remain intentional text. |
| Party colors | campaigns.ts token names; tokens.scss values | Token names and values are intentionally split and validated. |
| DM identities | campaigns.ts; tests/prose | Config is source; dead facade removed. |
| Availability usage | availability.ts; AvailabilityBadges; search-index via availability-metadata | Search and UI share `getAvailabilityByHref()`. |
| Preferences/cookies/privacy | wiki-preferences.ts; WikiPreferences.svelte; cookies/privacy routes | Storage key and id semantics are documented route-locally. |

## Phase 2 Campaign Data Result

`src/lib/config/campaigns.ts` is now the only editable source for campaign identity data. It owns Party ids, Party names, Party short names, member summaries used by the home table, display order, colour token names, soft colour token names, Dungeon Master ids, Dungeon Master names, and Party `dmId` relationships.

Derived campaign exports now feed consumers:

- `parties` and `dungeonMasters` are derived from `campaignConfig`.
- `partyIds`, `dungeonMasterIds`, and `allPartyIds` are derived collections.
- `selectAllParties()` derives from `allPartyIds`; no local all-party helper remains in availability.
- `selectParties()` validates Party ids through `isPartyId`.
- Preferences validate browser/localStorage strings through `isPartyId` and `isDungeonMasterId`.
- Sidebar campaign accents and CampaignNote labels/colours render from Party records.
- Availability metadata derives Party labels and Dungeon Master ids from campaign helpers.

Phase 5 removed the unused `src/lib/data/parties.ts` and `src/lib/data/dungeon-masters.ts` re-export facades. Import campaign identity data and helpers directly from `src/lib/config/campaigns.ts`.

Actual CSS colour values remain in `src/lib/styles/tokens.scss`. Phase 2 tests validate that every configured Party token and soft token exists there. The remaining intentional split is token-name ownership in TypeScript versus token-value ownership in SCSS.

## Phase 3 Availability Data Result

`src/lib/data/availability.ts` is now the only editable source for page availability decisions. The authored tree remains nested for readability, but every entry resolves to a canonical Wiki registry href through `getAvailabilityByHref()`.

Availability stores Party ids only:

- `allowed`
- `limited`
- `banned`
- `approval`

Party labels and Dungeon Master relevance are derived from `src/lib/config/campaigns.ts`; availability does not store Party names, Dungeon Master ids, or Dungeon Master names.

The current lookup rule is exact-entry only. A child page without its own availability entry returns `{}` and renders no badge. This preserves the current route behavior and avoids silently broadening or narrowing access for subclasses and child species.

Validation now requires every authored availability href to map to a registry page and rejects collection-page entries, duplicate Party ids, conflicting statuses, unknown Party ids, malformed nodes, empty nodes, and paths that normalize to a different canonical href. Obsolete availability entries for species pages that do not exist in the registry were removed.

## Phase 4 Page Metadata Result

`src/lib/wiki/static-pages.ts` now owns static and information page metadata: title, href, description, eyebrow, kind, tags, aliases, keywords, searchability, navigation visibility, and icon ids. Class and species metadata remains owned by their domain records under `src/lib/wiki/classes/` and `src/lib/wiki/species/`.

`src/lib/wiki/registry.ts` remains the single combined page registry. It imports static page records, flattens domain trees, validates ids/hrefs/icons/parents/footer references, and exposes registry-derived helpers for pages, children, and footer groups.

Route layouts now consume registry metadata for `PageHeader` and document metadata. Route pages contain body content only. The remaining intentional split is physical routing: a page href change still requires the corresponding `src/routes` folder to be renamed.

Footer link data is no longer an editable object list in the footer component. Footer grouping/order is a stable list of registry page IDs in `registry.ts`; labels and hrefs derive from the resolved page entries.

## Phase 5 Type And Utility Boundary Result

Campaign type ownership now lives only in `src/lib/config/campaigns.ts`. `PartyId` and `DungeonMasterId` derive from `campaignConfig`; the unused `PartyCode`, `PartyOption`, and `getPartyIdByName` compatibility exports were removed with the dead facades.

Availability still lives in `src/lib/data/availability.ts`, but its public status arrays are readonly and lookup results return fresh arrays so consumers cannot mutate authored availability arrays by accident.

Registry, navigation, and search remain separate boundaries:

- `wikiPages`, `footerPageIds`, `navigation`, `searchIndex`, `searchableEntries`, and `collectionEntries` are exposed as readonly/frozen derived arrays where practical.
- `getNavigationChildren()` and `getFooterPages()` return fresh arrays for consumer-side sorting or mapping.
- `NavigationItem` imports `WikiIconId` from `src/lib/wiki/icon-ids.ts`; SVG asset resolution remains in `src/lib/wiki/icons.ts`.
- Search metadata still derives from registry entries plus availability metadata; `SearchEntry` is not treated as a registry record.

No campaign compatibility facades remain. Replacement import path for both old campaign data modules is `src/lib/config/campaigns.ts`.
