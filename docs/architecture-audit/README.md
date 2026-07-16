# Architecture Audit

This architecture audit now contains both the original audit history and the current post-Phase-7 baseline. `inventory.json` is refreshed from the current repository and inventories 169 source/config/text files, 64 route Svelte files, 20 Svelte components, 121 type declarations, 195 functions, 22 data/config exports, and 30 style sources. Generated directories were excluded.

## Current Architectural Model

Confirmed fact: `src/lib/wiki/registry.ts` imports class data from `src/lib/wiki/classes/classes.ts` and species data from `src/lib/wiki/species/species.ts`, flattens those records into `wikiPages`, and validates ids, hrefs, parents, and footer ids. `src/lib/wiki/navigation.ts` derives `navigation` from `wikiPages`. `src/lib/wiki/search-index.ts` derives search entries from `wikiPages`, search tags, and availability metadata. `src/routes/classes/+layout.svelte` and `src/routes/species/+layout.svelte` render `PageHeader` from registry metadata.

Strong parts: registry validation exists; navigation/search are mostly derived; campaign identities are centralized in `src/lib/config/campaigns.ts`; shared form/button/panel mixins exist.

Main causes of confusion: styling is split across global, shared, component, route, and inline styles; route folders and asset folders still physically mirror registry hrefs.

Highest-risk source-of-truth problems after Phase 6: image assets are still convention-based, legal/site-owner prose still repeats human-readable owner/contact text where intentional, and several legal/information route styles still have page-specific layouts that can be incrementally moved onto shared primitives.

Highest-risk styling overlap after Phase 6: the core panel/card, button, focus, reduced-motion, availability badge, NavTree, and shell breakpoint foundations are now shared. Remaining styling debt is mostly page-specific legal/information route composition.

Accidental hubs: `src/lib/wiki/registry.ts`, `src/lib/wiki/search-index.ts`, `src/lib/utils/wiki-search.ts`, `src/routes/search/+page.svelte`, and the legal route SCSS files.

Compatibility-only or suspicious: none currently remain for campaign or class metadata; `src/lib/data/classes.ts`, `src/lib/data/parties.ts`, and `src/lib/data/dungeon-masters.ts` have been removed after imports converged.

## Phase 7 Current Baseline

Phase 7 removed only confirmed residue: deleted campaign/class data modules are no longer present in `tsconfig.test.json`, accidental internal lookup maps are no longer exported from campaign/registry modules, and `findNavigationItem` is local to navigation. No folder migration, behavioral redesign, route restructure, or styling redesign occurred.

Current compatibility facades retained: none.

Current deleted modules kept only as migration history:

| Removed file | Current replacement |
| --- | --- |
| `src/lib/data/classes.ts` | Class metadata under `src/lib/wiki/classes/` |
| `src/lib/data/parties.ts` | Campaign identity data under `src/lib/config/campaigns.ts` |
| `src/lib/data/dungeon-masters.ts` | Campaign identity data under `src/lib/config/campaigns.ts` |

The current dependency direction remains: config/data/domain modules do not import UI; registry does not import navigation/search; navigation and search derive from registry; layouts own PageHeader/document metadata; route pages own body content.

## Immediate Rules Before Refactor

- Do not add `PageHeader` to class/species child pages.
- Put class/species metadata in domain data, not route headers.
- Put campaign identity data in `src/lib/config/campaigns.ts`.
- Put availability centrally, not as inline `AvailabilityBadges` props.
- Use shared form/button/panel mixins before adding route-local control styles.

## Phase 0 Baseline Result

Phase 0 fixed the verified baseline errors without moving folders, renaming domain modules, deleting compatibility modules, or introducing a second registry. The original baseline failures were the `AvailabilityNode | undefined` TypeScript error in `src/lib/data/availability.ts`, invalid `"Party 1"` through `"Party 6"` availability props in four route pages, and missing SVG module declarations for `src/lib/wiki/icons.ts` under `tsconfig.test.json`.

Added coverage now protects registry uniqueness and parent resolution, layout-owned `PageHeader` rendering, recursive availability lookup and path normalization, campaign party-code validity, icon id validation, navigation derivation, search exclusion of collection pages, and preference id sanitization.

Remaining structural issues are intentionally deferred: route body files still coexist with domain metadata, compatibility facades remain in place, availability is still in `src/lib/data/availability.ts`, icon validation is still local to the current icon map, and the styling duplication documented in this audit has not been consolidated.

Recommended Phase 1 scope: codify registry/domain metadata as the page metadata source of truth and campaign config as the party/DM source of truth, then migrate duplicated route metadata into those sources without moving domain folders yet.

## Where to edit Wiki metadata now

Phase 1 makes class, subclass, species, and child-species page metadata domain-owned. The current flow is:

```text
src/lib/wiki/classes or src/lib/wiki/species
-> src/lib/wiki/registry.ts
-> navigation/search/layout/PageHeader/ChildLinkGrid
```

### Add a class

Add the metadata once in `src/lib/wiki/classes/classes.ts` under `classes.children`. Add the route body file under `src/routes/classes/<slug>/+page.svelte`. Add availability in `src/lib/data/availability.ts` only when the class differs from the default/current availability assumptions. Add image files only when the class needs cards or other assets.

### Add a subclass

Add the nested metadata once in the relevant class submodule under `src/lib/wiki/classes/`, for example `sub_classes-cleric.ts` or `sub_classes-rogues.ts`, and keep it attached through the parent class `children` array. Add the route body file under the matching nested route. Add availability only when the subclass differs from the parent or needs explicit campaign approval/limits.

### Add a species

Add the metadata once in `src/lib/wiki/species/`, then include that domain record in `src/lib/wiki/species/species.ts`. Add the route body file under `src/routes/species/<slug>/+page.svelte`. Add availability only when needed.

### Add a child species

Add the nested metadata once under the parent species domain record, using `children` to express the relationship. Add the route body file under the matching nested route. Add availability only when the child species differs from the parent or needs an explicit rule.

### Rename a class or species

Update the title, href, aliases, and related metadata in the authoritative class/species domain file. Registry ids, navigation labels, search entries, layout headers, and child cards update from that record. A physical route folder rename may still be required so SvelteKit serves the new href, and asset folders may still need manual renames until the asset manifest is consolidated.

### Change description, tags, keywords, aliases, or icon

Edit the single authoritative domain record in `src/lib/wiki/classes/` or `src/lib/wiki/species/`. The registry, PageHeader, navigation, search, and child cards derive from that record. Availability remains in `src/lib/data/availability.ts`; campaign identities remain in `src/lib/config/campaigns.ts`.

Remaining honest caveat: image assets are still keyed by href/folder conventions. Phase 1 removed editable class-name duplication from `src/lib/data/ai-images.ts`, but asset organization itself is still a later cleanup.

## Where to edit campaign data now

Phase 2 makes `src/lib/config/campaigns.ts` the single editable source for Party and Dungeon Master identity data. The current flow is:

```text
src/lib/config/campaigns.ts
-> derived parties/dungeonMasters/allPartyIds/selectAllParties
-> availability/preferences/sidebar/badges/search metadata
```

### Add a Party

Add one Party record in `campaignConfig.parties` with its stable id, name, shortName, member summary, dmId, order, colorToken, and softColorToken. Add CSS token values in `src/lib/styles/tokens.scss` only when new Party colours are needed. Derived Party arrays, all-party availability selections, preferences, sidebar accents, and tests update from the config record.

### Rename a Party

Edit the Party `name` and `shortName` in `src/lib/config/campaigns.ts`. Preferences store stable Party ids, so saved preferences continue to resolve. Sidebar labels, preference options, availability labels, CampaignNote headings, and the home Party table update automatically.

### Add a Dungeon Master

Add one Dungeon Master record in `campaignConfig.dungeonMasters` with its stable id, full name, and shortName. Preference options and validators derive from that record.

### Assign a Party to a Dungeon Master

Edit the Party `dmId` once in `campaignConfig.parties`. `getDungeonMasterForParty`, `getPartiesForDungeonMaster`, availability metadata, and search metadata derive the relationship from that field.

### Change Party order

Edit the Party `order` once. The exported `parties` array is sorted by that value, so sidebar accents, preferences, and the home Party table follow the configured order.

### Change Party colours

Edit the Party token names in `campaignConfig.parties` only when the semantic token reference changes. Actual colour values remain in `src/lib/styles/tokens.scss`; Phase 2 tests validate that every configured token exists.

### Allow content in every campaign

Use the central `selectAllParties()` helper from `src/lib/config/campaigns.ts`.

### Allow content in selected campaigns

Use `selectParties()` with stable Party ids in `src/lib/data/availability.ts`. These lists are availability decisions, not Party identity definitions.

Remaining honest caveat: legal/about prose still contains owner or Party names as human-readable text. Styling tokens still live in SCSS while token names live in campaign config, by design.

## Where to edit availability now

Phase 3 makes `src/lib/data/availability.ts` the single editable source for page availability decisions. The current flow is:

```text
src/lib/data/availability.ts
-> getAvailabilityByHref(canonical href)
-> AvailabilityBadges/search availability metadata/content filters
```

### Allow content in every campaign

Edit the page entry in `src/lib/data/availability.ts` and use `allowed: selectAllParties()`.

### Allow content in selected campaigns

Use `selectParties()` with stable Party ids, for example `allowed: selectParties('i1', 'i4')`.

### Limit content

Place Party ids in `limited`.

### Ban content

Place Party ids in `banned`.

### Require approval

Place Party ids in `approval`.

### Add subclass availability

Add the availability under the parent class `children` map so the authored path matches the registry href, for example `/classes/cleric/life-domain`.

### Add child-species availability

Add the availability under the parent species `children` map so the authored path matches the registry href, for example `/species/elf/astral-elf`.

### Change availability

Edit only `src/lib/data/availability.ts`. Route files do not own availability, `AvailabilityBadges` does not own availability, and search does not own availability.

The current rule is exact-entry only: a page shows availability only when its exact canonical href has an authored entry. Child pages do not inherit parent availability. This preserves the pre-Phase-3 behavior where unconfigured subclasses or child species showed no badge. Dungeon Master relevance is derived from Party availability through campaign configuration.

## Where to edit page metadata now

Phase 4 makes static and domain page metadata registry-owned. The current flow is:

```text
src/lib/wiki/static-pages.ts or class/species domain data
-> src/lib/wiki/registry.ts
-> layouts/PageHeader/document metadata/navigation/footer/search/cards
```

### Add a static page

Add one metadata entry in `src/lib/wiki/static-pages.ts`, then add the physical route body under `src/routes`. Set `navigation`, footer ID membership, and `searchable` intentionally.

### Change a page title

Edit the authoritative static-page entry or class/species domain record once. Layout headers, document titles, navigation, footer links, search, and cards derive from it.

### Change a description

Edit the authoritative metadata entry once. Route files should not repeat descriptions for headers or document metadata.

### Change page tags

Edit the authoritative metadata entry with valid search tag IDs.

### Add a footer page

Add its stable page ID to the footer group ordering in `src/lib/wiki/registry.ts`. Footer labels and hrefs derive from the registry entry.

### Add a child-page card

Register the child page and make it navigable where appropriate. Parent card lists derive through navigation/registry helpers.

### Add a home quick link

Add the registry page ID to `homeQuickLinkIds` in `src/routes/+page.svelte`. Do not repeat title, href, or description there. Presentation-only image metadata may remain in the route.

### Change an icon

Change the icon ID in the authoritative metadata entry. Valid IDs remain owned by `src/lib/wiki/icon-ids.ts`, and SVG assets are resolved by `src/lib/wiki/icons.ts`.

Remaining honest caveat: changing a href still requires the matching SvelteKit route folder to be renamed manually, and asset folders may still need manual alignment.

## Where types and utilities live now

Phase 5 keeps types beside the boundary they describe. It did not add a global `types.ts`, a general helper barrel, or a second registry.

### Type owners

| Concept | Owner |
| --- | --- |
| `WikiDomainPage` | `src/lib/wiki/domain.ts` |
| `WikiPageEntry` | `src/lib/wiki/registry.ts` |
| `WikiPageKind` | `src/lib/wiki/registry.ts` |
| `NavigationItem` | `src/lib/wiki/navigation.ts` |
| `SearchEntry` and `SearchEntryKind` | `src/lib/wiki/search-index.ts` |
| `PartyId`, `DungeonMasterId`, `Party`, `DungeonMaster` | `src/lib/config/campaigns.ts` |
| `PartyCode` | Removed; use `PartyId` |
| `PageAvailability`, `AvailabilityNode`, `AvailabilityConfig` | `src/lib/data/availability.ts` |
| `WikiIconId` | `src/lib/wiki/icon-ids.ts` |
| Preference storage type | `src/lib/utils/wiki-preferences.ts` |
| Component `Props` | Local to the component unless a contract is genuinely shared |

### Utility owners

| Utility | Owner |
| --- | --- |
| Registry lookup and child/footer lookup | `src/lib/wiki/registry.ts` |
| Registry href normalization | local to `src/lib/wiki/registry.ts` |
| Availability href normalization and lookup | `src/lib/data/availability.ts` |
| App route path resolution | `src/lib/utils/paths.ts` via `resolveAppPath()` |
| Asset path and `srcset` resolution | `src/lib/utils/paths.ts` via `resolveAssetPath()` and `resolveSrcset()` |
| Party/Dungeon Master validation | `src/lib/config/campaigns.ts` |
| Preference parsing and localStorage access | `src/lib/utils/wiki-preferences.ts` |
| Search query normalization/tokenization/scoring | `src/lib/utils/wiki-search.ts` |

Path utilities remain deliberately separate: registry/availability hrefs normalize content routes, while `resolveAppPath()` and `resolveAssetPath()` handle SvelteKit base paths and must preserve external URLs, anchors, query strings, hashes, and asset semantics.

Compatibility facades retained: none.

Compatibility facades removed:

| Removed file | Replacement import path |
| --- | --- |
| `src/lib/data/parties.ts` | `src/lib/config/campaigns.ts` |
| `src/lib/data/dungeon-masters.ts` | `src/lib/config/campaigns.ts` |

Phase 5 also made registry, navigation, search, campaign, and availability result arrays safer at their public boundaries: exported derived arrays are readonly/frozen where appropriate, helpers that expose child/footer/status arrays return fresh arrays, and structural tests guard against local all-party helpers, manual campaign ID unions, arbitrary `PartyId`/`DungeonMasterId` casts, duplicate SVG declarations, and runtime cycles among the core Wiki/config/data modules.

## Where to edit styling now

Phase 6 keeps the existing folder structure and makes the shared SCSS partials the owner of reusable styling primitives:

| Concern | Edit here |
| --- | --- |
| Design tokens and actual color values | `src/lib/styles/tokens.scss` |
| Shared breakpoints | `src/lib/styles/_breakpoints.scss` |
| Focus rings, reduced motion, simple interactive transitions | `src/lib/styles/_mixins.scss` |
| Panel/card surfaces | `src/lib/styles/_panels.scss` |
| Button/action foundations | `src/lib/styles/_buttons.scss` |
| Form controls | `src/lib/styles/_forms.scss` |
| Shell layout | `src/lib/styles/wiki-layout.scss` plus shell components |
| Page-specific layout | Route-adjacent SCSS, using shared mixins first |

### Add or change a panel/card

Use `panels.panel`, `panels.surface`, or `panels.interactive-card` before writing a new border/radius/background/shadow stack. Page-specific spacing and layout can stay in the route or component stylesheet.

### Add or change a button/action link

Use `buttons.button-base`, `buttons.secondary-action`, or `buttons.accent-action`. Keep one-off content layout local, but do not repeat the foundation sizing, border, radius, disabled state, focus ring, and transition stack.

### Add or change focus or reduced-motion behavior

Use `mixins.focus-ring` and `mixins.reduced-motion`. Do not add ad hoc focus outlines or standalone reduced-motion blocks when the shared mixin applies.

### Add or change responsive thresholds

Use `breakpoints.$mobile-shell`, `$desktop-shell`, `$narrow-content`, `$mobile-content`, `$search-stack`, `$table-mobile`, and `$availability-mobile` for shared thresholds. Add a new breakpoint only when at least two consumers need the same threshold.

### Availability and navigation styles

`AvailabilityBadges.scss` owns status badge layout and must stay content-sized. `NavTree.scss` owns navigation row state; the row is the single hover surface while link/toggle hover remains transparent.

Remaining honest caveat: legal and information route SCSS still contains page-specific card/list compositions. Those should be migrated opportunistically to shared primitives when touched, without changing content, route ownership, or metadata flow.

## Where Should I Edit This?

| Task | Current file(s) | Why multiple files are required | Desired future single file |
| --- | --- | --- | --- |
| Add or rename a class | src/lib/wiki/classes/classes.ts; route under src/routes/classes; static/classes; maybe ai-images | Metadata, route body, assets, and AI image inventory are separate. | wiki class domain module |
| Add or rename a subclass | src/lib/wiki/classes/sub_classes-*.ts; nested route; static asset folder; availability | Parent relation is domain data; content/assets/availability are separate. | wiki class/subclass domain module |
| Add or rename a species | src/lib/wiki/species/*.ts; species route; static/species; availability | Metadata is domain-owned; body, assets, and availability are separate. | wiki species domain module |
| Add child species/subrace | species domain file; child route; availability tree | Nested page and availability trees are separate. | species domain module with child records |
| Change route title | src/lib/wiki/static-pages.ts or class/species domain data | Route folders may still need renaming when hrefs change. | registry/domain metadata |
| Change page description | src/lib/wiki/static-pages.ts or class/species domain data | None for header/search/card metadata. | registry/domain metadata |
| Add page tags | domain/static registry and sometimes route PageHeader labels | Search tags are ids; headers use labels. | registry/domain page tags |
| Change availability | src/lib/data/availability.ts | UI/search derive from `getAvailabilityByHref`; route files do not own availability. | wiki availability domain |
| Add a party | src/lib/config/campaigns.ts; tokens.scss when new colour values are needed | Identity/order/member summary/token names are config-owned; CSS values remain in tokens. | campaign config/domain |
| Add a Dungeon Master | src/lib/config/campaigns.ts; prose/tests if referenced | Config owns identities; prose can repeat names. | campaign config/domain |
| Change party colour | config token id; tokens.scss value | Token id and token value are intentionally split and validated. | campaign token registry |
| Add navigation icon | src/lib/wiki/icons.ts; registry icon field; asset folder | Icons are imported manually. | wiki icon registry |
| Change sidebar navigation | registry/domain navigation flags; navigation.ts; Sidebar/NavTree UI | Data is derived but UI behavior is component-local. | registry for data, navigation components for UI |
| Change search behaviour | wiki-search.ts; search-index.ts; search route; Header | Index, scoring, URL state, and UI are split. | wiki search domain |
| Add search tag | src/lib/wiki/search-tags.ts and page records | Definition and usage are separate. | search tag registry + page metadata |
| Change shared input | _forms.scss, SelectField, route SCSS | Route styles reimplement controls. | shared forms/control component |
| Change shared button | _buttons.scss, ActionButton, route action links | Route styles reimplement buttons. | ActionButton/shared button mixin |
| Change panel styling | _panels.scss, PageSection, route cards | Panel/card styles are repeated. | shared panel/card mixins |
| Change route-specific styling | route-adjacent SCSS or inline style | Route styles own page-only layout. | route stylesheet only |
| Add a new Wiki page | static/domain page record plus route body; availability/assets when needed | File routing still requires a physical SvelteKit route. | domain/registry page record plus route body |

## Where should I edit this now?

| Change | Authoritative edit | Derived consumers | Unavoidable second edit |
| --- | --- | --- | --- |
| Add or rename a class | `src/lib/wiki/classes/classes.ts` or nested class module | Registry, navigation, search, PageHeader, child cards | Matching route folder/body; assets if used |
| Add or rename a subclass | Relevant `src/lib/wiki/classes/sub_classes-*.ts` child record | Registry parent, navigation, search, class layout | Matching nested route folder/body; availability if different |
| Add or rename a species | `src/lib/wiki/species/*.ts` | Registry, navigation, search, PageHeader, child cards | Matching route folder/body; assets if used |
| Add a child species | Parent species `children` record | Registry parent, navigation, search, species layout | Matching nested route folder/body; availability if different |
| Add a static Wiki page | `src/lib/wiki/static-pages.ts` | Registry, document metadata, PageHeader, search/footer/nav when enabled | Matching route body |
| Change page title/description/tags | Domain record or `static-pages.ts` | Header, document metadata, search, cards, footer labels | Route folder rename only when href changes |
| Add a Party | `src/lib/config/campaigns.ts` | Preferences, sidebar, availability labels, search metadata | `tokens.scss` only for new colour values |
| Add a Dungeon Master | `src/lib/config/campaigns.ts` | Preferences and Party relationship helpers | None |
| Assign a Party to a Dungeon Master | Party `dmId` in `src/lib/config/campaigns.ts` | DM relevance and Party grouping helpers | None |
| Change availability | `src/lib/data/availability.ts` | Badges, availability metadata, content filters | None |
| Add an icon ID | `src/lib/wiki/icon-ids.ts` | Type validation and registry metadata | Map the asset in `src/lib/wiki/icons.ts` |
| Map an icon asset | `src/lib/wiki/icons.ts` | NavTree CSS-mask rendering | Add/import asset file |
| Add a footer page | Footer ID group in `src/lib/wiki/registry.ts` | Footer label and href derive from registry | Static/domain page entry if new |
| Add a home quick link | `homeQuickLinkIds` in `src/routes/+page.svelte` | Link title, href, and description derive from registry | Image choice if needed |
| Change navigation styling | `src/lib/components/layout/snippets/helpers/NavTree.scss` or shell styles | Sidebar/NavTree UI | None |
| Change a shared panel | `src/lib/styles/_panels.scss` | PageSection, Panel, cards using panel mixins | Route-local composition only when page-specific |
| Change a button | `src/lib/styles/_buttons.scss` or `ActionButton.svelte` | Shared button/action consumers | None |
| Change a form control | `src/lib/styles/_forms.scss` or form components | Preferences/search form controls | None |
| Change a breakpoint | `src/lib/styles/_breakpoints.scss` | Shell, panels, route styles using shared variables | None |
| Change route-specific composition | Route-adjacent SCSS | Only that route | None |
| Add a route body | `src/routes/**/+page.svelte` | SvelteKit route body rendering | Add registry/domain metadata separately |
