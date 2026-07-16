# Sources Of Truth

| Concept | Current authoritative file | Other files containing same information | Status | Risk | Recommended authoritative source | Recommended derived consumers |
| --- | --- | --- | --- | --- | --- | --- |
| Site name | src/lib/config/site.ts | Footer imports config; route pages repeat D&D Portal/D&D Portal Wiki | Partial | Medium | src/lib/config/site.ts | Footer and legal/about pages |
| Owner/contact email | src/lib/config/site.ts plus route constants | about/accessibility/legal/content-removal/contribution/cookies repeat literals | Duplicate | Medium | src/lib/config/site.ts or src/lib/config/legal.ts | Legal and footer pages |
| Page title | src/lib/wiki/static-pages.ts and domain data | Physical route folders still mirror hrefs | Good | Low | Registry/domain page metadata | Layouts, head metadata, search |
| Page description | src/lib/wiki/static-pages.ts and domain data | Route body prose can mention summaries | Good | Low | Registry/domain page metadata | PageHeader/search/cards |
| Page href | Domain data/static registry | Route paths and child link arrays repeat hrefs | Partial | High | Domain page records | Registry/navigation/search |
| Page tags | Domain/static page records | Route pages no longer own header tags | Good | Low | Domain page records using search tag ids | PageHeader/search facets |
| Class title/description/tags | src/lib/wiki/classes/classes.ts and nested class submodules | Route prose can mention names; asset entries are keyed by href only | Good | Low | wiki class domain | Registry/navigation/search/layout/cards |
| Class href | src/lib/wiki/classes/classes.ts and nested class submodules | Route folders and image asset href keys still need matching physical paths | Partial | Medium | wiki class domain | Registry/navigation/search/layout/cards |
| Subclass parent | Nested subclass arrays in src/lib/wiki/classes | Route path and asset path still reflect the parent slug | Good | Low | Nested domain record | Registry/nav/search |
| Species title/description/tags | src/lib/wiki/species/*.ts | Route prose can mention names | Good | Low | wiki species domain | Registry/layout/search/cards |
| Species href | src/lib/wiki/species/*.ts | Route folders still need matching physical paths | Partial | Medium | wiki species domain | Registry/layout/search/cards |
| Party identity/order/DM | src/lib/config/campaigns.ts | Route prose may mention names in sentences | Good | Low | campaign config/domain | Sidebar/preferences/availability |
| Party colour | config token id + tokens.scss values | Actual colour values intentionally remain in tokens.scss | Partial | Medium | campaign config/token registry | Sidebar/badges/notes |
| Availability | src/lib/data/availability.ts | Route prose can mention availability concepts but no structural route props remain | Good | Low | wiki availability domain | Badges/search metadata |
| Search tags | src/lib/wiki/search-tags.ts | Page records store ids; headers use labels | Partial | Medium | search tag registry | Search facets/PageHeader |
| Navigation visibility | registry navigation flags | Route tree implicitly creates pages | Good | Low | registry | Sidebar/NavTree |
| Footer visibility | registry footer page ID groups | None for registered footer links | Good | Low | registry footer ID groups | Footer |
| Icon | src/lib/wiki/icon-ids.ts plus domain/static page icon fields | SVG asset imports remain in src/lib/wiki/icons.ts | Good | Low | icon id contract and icon registry | Registry/NavTree |
| Image | static folders and ai-images.ts | ChildLinkGrid infers paths from titles | Duplicate | Medium | asset manifest keyed by domain id | Cards/AI transparency |

## Phase 0 Baseline Notes

Phase 0 confirmed the current intended ownership chain for class/species pages: registry/domain metadata feeds the nearest active route layout, the layout renders `PageHeader`, and child `+page.svelte` files render body content only. Confirmed duplicate species headers and inline availability badges were removed from species child pages.

Availability now has one public lookup path for UI and search metadata: `getAvailabilityByHref(href)`. It normalizes paths, ignores query strings and hashes, supports recursive nested children, returns `{}` for unknown paths, and resolves explicit component props without overwriting configured values with `undefined`.

SVG/icon ownership remains unchanged: the registry stores stable icon ids, navigation carries those ids, and `NavTree` resolves them through `getWikiIcon` for CSS-mask rendering. Phase 0 added SVG import typing and registry validation for unknown icon ids.

Remaining source-of-truth work for Phase 1: route-local prose and section headings are fine, but duplicated page metadata should be moved toward registry/domain records. Compatibility modules and styling duplicates remain documented debt, not Phase 0 cleanup targets.

## Phase 1 Metadata Source Matrix

| Concept | Status | Current authoritative source | Remaining duplicate/edit point |
| --- | --- | --- | --- |
| class title | Good | `src/lib/wiki/classes/classes.ts` and class submodules | None for Wiki metadata |
| class href | Partial | `src/lib/wiki/classes/classes.ts` and class submodules | SvelteKit route folders and AI image href keys must still match |
| class description | Good | `src/lib/wiki/classes/classes.ts` and class submodules | None for Wiki metadata |
| class tags | Good | `src/lib/wiki/classes/classes.ts` and class submodules | None for Wiki metadata |
| subclass title | Good | nested records under `src/lib/wiki/classes/` | None for Wiki metadata |
| subclass parent | Good | `children` nesting under the parent class record | Route and asset folder paths still physically mirror the relationship |
| species title | Good | `src/lib/wiki/species/*.ts` | None for Wiki metadata |
| species href | Partial | `src/lib/wiki/species/*.ts` | SvelteKit route folders must still match |
| child species parent | Good | `children` nesting under the parent species record | Route folder paths still physically mirror the relationship |
| navigation title | Good | derived from `wikiPages` | None for Wiki metadata |
| search title | Good | derived from `wikiPages` | None for normal search entries |
| page icon | Good | static/domain page `icon` using `WikiIconId` | SVG asset import list remains the icon URL registry |

Phase 1 removed `src/lib/data/classes.ts`, removed class/species route-owned head metadata, removed registry boundary casts, and added structural tests against route-local metadata declarations. Static/information pages still keep their existing route-local headers unless a later phase expands the layout-derived metadata pattern beyond class/species routes.

## Phase 2 Campaign Source Matrix

| Concept | Status | Current authoritative source | Remaining duplicate/edit point |
| --- | --- | --- | --- |
| Party ID | Good | `src/lib/config/campaigns.ts` object keys and Party `id` fields | Availability entries reference stable ids as content decisions |
| Party name | Good | `src/lib/config/campaigns.ts` | Human-readable route/legal prose may mention names |
| Party short name | Good | `src/lib/config/campaigns.ts` | None for structural UI |
| Party order | Good | `src/lib/config/campaigns.ts` | None |
| Party colour token name | Good | `src/lib/config/campaigns.ts` | Token existence is validated against SCSS |
| Party colour value | Good | `src/lib/styles/tokens.scss` | Token names are referenced from campaign config |
| Dungeon Master ID | Good | `src/lib/config/campaigns.ts` object keys and Dungeon Master `id` fields | None |
| Dungeon Master name | Good | `src/lib/config/campaigns.ts` | Legal/site-owner prose still repeats owner names where intentional |
| Party-to-Dungeon-Master relationship | Good | Party `dmId` in `src/lib/config/campaigns.ts` | None |
| all Party IDs | Good | Derived `allPartyIds` from sorted `parties` | None |
| selectAllParties | Good | Derived helper in `src/lib/config/campaigns.ts` | None |
| preference validation | Good | `isPartyId` and `isDungeonMasterId` from `src/lib/config/campaigns.ts` | None |
| availability Party types | Good | `PartyId` from `src/lib/config/campaigns.ts` | Availability remains physically in `src/lib/data/availability.ts` |
| sidebar Party rendering | Good | `parties` from `src/lib/config/campaigns.ts` | None |

The old compatibility facades `src/lib/data/parties.ts` and `src/lib/data/dungeon-masters.ts` were removed in Phase 5 after scans confirmed no remaining consumers. Import campaign identity data and helpers from `src/lib/config/campaigns.ts`.

## Phase 3 Availability Source Matrix

| Concept | Status | Current authoritative source | Remaining duplicate/edit point |
| --- | --- | --- | --- |
| Page availability | Good | `src/lib/data/availability.ts` | None for structural availability decisions |
| Allowed Parties | Good | `allowed` arrays in `src/lib/data/availability.ts` | Party identities derive from campaign config |
| Limited Parties | Good | `limited` arrays in `src/lib/data/availability.ts` | None |
| Banned Parties | Good | `banned` arrays in `src/lib/data/availability.ts` | None |
| Approval Parties | Good | `approval` arrays in `src/lib/data/availability.ts` | None |
| Availability href ownership | Good | Canonical Wiki hrefs from registry-matching availability tree | Physical route folders still need to match registry hrefs |
| Availability path normalization | Good | `normalizeAvailabilityHref()` in `src/lib/data/availability.ts` backed by registry href resolution | Broader app asset path normalization remains separate |
| Availability UI rendering | Good | `AvailabilityBadges href={pageMeta.href}` in class/species layouts | Static/information routes do not use availability badges |
| Search availability metadata | Good | `getAvailabilityMetadataForHref()` via `getAvailabilityByHref()` | Search scoring itself remains separate |
| Dungeon Master availability relevance | Good | Derived from Party ids through campaign configuration | None |
| Availability inheritance | Good | Exact-entry only; no parent inheritance | Add explicit child entries when a child page should show availability |
| Availability validation | Good | `validateAvailabilityConfig()` plus structural tests | Runtime validation runs at module load and in tests |

## Phase 4 Page Metadata Source Matrix

| Concept | Status | Current authoritative source | Remaining duplicate/edit point |
| --- | --- | --- | --- |
| static page title | Good | `src/lib/wiki/static-pages.ts` | None for rendered headers/document titles |
| static page href | Partial | `src/lib/wiki/static-pages.ts` | SvelteKit route folders must still match |
| static page description | Good | `src/lib/wiki/static-pages.ts` | Body prose may restate concepts |
| page eyebrow | Good | static/domain metadata | None |
| page tags | Good | static/domain metadata using search tag IDs | None for structural metadata |
| page icon | Good | static/domain metadata plus `icon-ids.ts` | SVG asset imports remain in `icons.ts` |
| navigation visibility | Good | registry/domain `navigation` flags | None |
| footer visibility | Good | footer page ID groups in `src/lib/wiki/registry.ts` | Footer group headings remain component UI labels |
| searchability | Good | static/domain `searchable` flags | Search scoring remains separate |
| document title | Good | nearest metadata-owning layout via `PageDocumentMetadata` | None |
| meta description | Good | nearest metadata-owning layout via `PageDocumentMetadata` | None |
| child-page cards | Good | `getNavigationChildren()` and registry metadata | Presentation-only image choices remain separate |
| home quick links | Good | curated registry page IDs in `src/routes/+page.svelte` | Presentation-only image choices remain separate |
| footer links | Good | registry footer page IDs and `getFooterPages()` | External/community links remain manual |
| rules parent relationships | Good | `parentId` in static page metadata | None |
| route existence | Good | test validation maps registry hrefs to `src/routes/**/+page.svelte` | Filesystem renames are still manual |

## Phase 5 Type And Utility Source Matrix

| Concept | Status | Current authoritative source | Remaining duplicate/edit point |
| --- | --- | --- | --- |
| domain page type | Good | `src/lib/wiki/domain.ts` | None |
| registry page type | Good | `src/lib/wiki/registry.ts` | None |
| page kind | Good | `src/lib/wiki/registry.ts` | Used by domain/search as a shared registry-owned union |
| navigation type | Good | `src/lib/wiki/navigation.ts` | None |
| search entry type | Good | `src/lib/wiki/search-index.ts` | None |
| Party ID type | Good | `src/lib/config/campaigns.ts` derived from `campaignConfig` | Availability entries reference IDs as content decisions |
| Dungeon Master ID type | Good | `src/lib/config/campaigns.ts` derived from `campaignConfig` | None |
| availability type | Good | `src/lib/data/availability.ts` | None |
| icon ID type | Good | `src/lib/wiki/icon-ids.ts` | SVG asset mapping remains in `src/lib/wiki/icons.ts` |
| preference type | Good | `src/lib/utils/wiki-preferences.ts` | None |
| canonical href normalization | Good | registry and availability modules own route-href normalization for their specific lookup contracts | App/asset path resolution intentionally remains separate |
| app path resolution | Good | `src/lib/utils/paths.ts` `resolveAppPath()` | None |
| asset path resolution | Good | `src/lib/utils/paths.ts` `resolveAssetPath()`/`resolveSrcset()` | None |
| compatibility exports | Dead | none retained for campaign/class metadata | Removed `data/classes.ts`, `data/parties.ts`, and `data/dungeon-masters.ts` |

## Phase 6 Styling Source Matrix

| Concept | Status | Current authoritative source | Remaining duplicate/edit point |
| --- | --- | --- | --- |
| design token names | Good | `src/lib/styles/tokens.scss` | Component/route styles reference tokens |
| Party/availability color values | Good | `src/lib/styles/tokens.scss` | Campaign config owns Party token names |
| shared breakpoints | Good | `src/lib/styles/_breakpoints.scss` | Some one-off legal route thresholds remain local |
| focus ring | Good | `src/lib/styles/_mixins.scss` | Avoid route-local outline stacks |
| reduced motion | Good | `src/lib/styles/_mixins.scss` | Some page-specific reduced-motion blocks may remain until touched |
| panel/card foundation | Partial | `src/lib/styles/_panels.scss` | Legal/information route card compositions still local |
| button/action foundation | Partial | `src/lib/styles/_buttons.scss` | Some page-specific action links still local |
| form control foundation | Good | `src/lib/styles/_forms.scss` | Search and reusable form components use it |
| shell breakpoints | Good | `_breakpoints.scss` used by shell/header/sidebar/panel/preferences | None for shared shell threshold |
| NavTree hover surface | Good | `NavTree.scss` row state using shared mixins | Link/toggle hover intentionally remains transparent |
| availability badge sizing | Good | `AvailabilityBadges.scss` using `panels.surface` | None |
| route-local legal styling | Partial | route-adjacent SCSS | Composition remains local; shared primitives should be used when touched |

## Phase 7 Final Source-Of-Truth Verification

| Concept | Status | Current editable owner | Remaining issue |
| --- | --- | --- | --- |
| class metadata | Good | `src/lib/wiki/classes/` | Route folder/assets still mirror hrefs physically |
| subclass metadata | Good | nested class domain records | Route folder/assets still mirror hrefs physically |
| species metadata | Good | `src/lib/wiki/species/` | Route folder/assets still mirror hrefs physically |
| child-species metadata | Good | nested species domain records | Route folder/assets still mirror hrefs physically |
| static page metadata | Good | `src/lib/wiki/static-pages.ts` | Route folder must exist separately |
| combined registry | Good | `src/lib/wiki/registry.ts` | None |
| Party identities | Good | `src/lib/config/campaigns.ts` | Availability references stable IDs as decisions |
| Dungeon Master identities | Good | `src/lib/config/campaigns.ts` | Intentional legal/prose mentions may remain |
| Party-to-DM relationships | Good | Party `dmId` in `src/lib/config/campaigns.ts` | None |
| availability decisions | Good | `src/lib/data/availability.ts` | Exact-entry only; no inherited child availability |
| Wiki icon IDs | Good | `src/lib/wiki/icon-ids.ts` | None |
| icon asset mappings | Good | `src/lib/wiki/icons.ts` | Asset files still live under `src/lib/assets/icons` |
| document metadata rendering | Good | root/classes/species layouts through `PageDocumentMetadata` | None for registered pages |
| navigation projection | Good | `src/lib/wiki/navigation.ts` derived from registry | None |
| search projection | Good | `src/lib/wiki/search-index.ts` derived from registry plus search metadata | Search scoring remains separate |
| Party colors | Good | token names in campaign config; values in `tokens.scss` | Intentional split validated by tests |
| availability colors | Good | `src/lib/styles/tokens.scss` | None |
| breakpoints | Good | `src/lib/styles/_breakpoints.scss` | Page-specific one-off thresholds may remain local |
| panel primitives | Partial | `src/lib/styles/_panels.scss` | Some legal/information route compositions remain local |
| button primitives | Partial | `src/lib/styles/_buttons.scss` | Some page-specific action links remain local |
| focus primitives | Good | `src/lib/styles/_mixins.scss` | None for shared focus foundation |
| deleted compatibility modules | Dead | none retained | Removed files are documented only in migration history |
