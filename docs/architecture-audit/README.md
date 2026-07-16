# Architecture Audit

This architecture audit now contains both the original audit history and the current post-Phase-8 baseline. `inventory.json` is refreshed from the current repository and inventories 169 source/config/text files, 64 route Svelte files, 20 Svelte components, 122 type declarations, 194 functions, 22 data/config exports, and 30 style sources. Generated directories were excluded.

## Current Architectural Model

Confirmed fact: `src/lib/wiki/registry.ts` imports class data from `src/lib/wiki/classes/classes.ts` and species data from `src/lib/wiki/species/species.ts`, flattens those records into `wikiPages`, and validates ids, hrefs, parents, and footer ids. `src/lib/wiki/navigation.ts` derives `navigation` from `wikiPages`. `src/lib/wiki/search-index.ts` derives search entries from `wikiPages`, search tags, and availability metadata. `src/routes/classes/+layout.svelte` and `src/routes/species/+layout.svelte` render `PageHeader` from registry metadata.

Strong parts: registry validation exists; navigation/search are mostly derived; campaign identities are centralized in `src/lib/config/campaigns.ts`; shared form/button/panel mixins exist.

Main causes of confusion: styling is split across global, shared, component, route, and inline styles; route folders and asset folders still physically mirror registry hrefs.

Highest-risk source-of-truth problems after Phase 6: image assets are still convention-based, legal/site-owner prose still repeats human-readable owner/contact text where intentional, and several legal/information route styles still have page-specific layouts that can be incrementally moved onto shared primitives.

Highest-risk styling overlap after Phase 6: the core panel/card, button, focus, reduced-motion, availability badge, NavTree, and shell breakpoint foundations are now shared. Remaining styling debt is mostly page-specific legal/information route composition.

Accidental hubs: `src/lib/wiki/registry.ts`, `src/lib/wiki/search-index.ts`, `src/lib/utils/wiki-search.ts`, `src/routes/search/+page.svelte`, and the legal route SCSS files.

Compatibility-only or suspicious: none currently remain for campaign or class metadata; `src/lib/data/classes.ts`, `src/lib/data/parties.ts`, and `src/lib/data/dungeon-masters.ts` have been removed after imports converged.

## Phase 8 Current Baseline

Phase 8 normalized low-risk cross-library imports toward the authoritative `$lib/...` module paths, kept legitimate local relative imports for adjacent components and same-domain files, and documented that the current ownership model is the final editing guide. No source folders moved, no runtime behavior changed, and no new registry/configuration/domain layer was introduced.

Final recommendation: stop after Phase 8 instead of performing the broad target folder migration. The remaining folder inconsistencies are mostly cosmetic now that metadata, campaign data, availability, registry, navigation, search, document metadata, and shared styling ownership are documented and guarded by structural tests.

## Phase 7 Baseline

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
- Use `$lib/...` imports for Svelte/app imports that cross library ownership boundaries. Plain TypeScript modules compiled by `tsconfig.test.json` may keep explicit relative `.js` imports because the emitted test JavaScript runs directly in Node. Keep relative imports for adjacent components, recursive local components, route-adjacent styles, and same-domain files.
- Use `import type` for imports that exist only for TypeScript types.

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

## Where should I edit this now?

| Change | Authoritative edit | Derived consumers | Unavoidable second edit |
| --- | --- | --- | --- |
| Add a class | `src/lib/wiki/classes/classes.ts` | `src/lib/wiki/registry.ts`, `src/lib/wiki/navigation.ts`, `src/lib/wiki/search-index.ts`, PageHeader, document metadata, child cards | Add `src/routes/classes/<slug>/+page.svelte`; add assets or availability only when needed |
| Add a subclass | Relevant `src/lib/wiki/classes/sub_classes-*.ts` child record | Registry parent, navigation, search, class layout, child cards | Add nested route body; add availability only when different or explicit |
| Add a species | `src/lib/wiki/species/*.ts` | Registry, navigation, search, PageHeader, document metadata, child cards | Add `src/routes/species/<slug>/+page.svelte`; add assets or availability only when needed |
| Add a child species | Parent species `children` record in `src/lib/wiki/species/*.ts` | Registry parent, navigation, search, species layout, child cards | Add nested route body; add availability only when different or explicit |
| Add a static page | `src/lib/wiki/static-pages.ts` | Registry, root layout, `PageDocumentMetadata`, PageHeader, navigation/footer/search when flags allow | Add physical route body |
| Add a route body | `src/routes/**/+page.svelte` | SvelteKit route body rendering only | Add matching metadata in domain/static page source first |
| Rename a page | Domain record or `src/lib/wiki/static-pages.ts` title/href | Registry-derived title, href, nav, search, cards, footer, document metadata | Rename the SvelteKit route folder when the canonical href changes; rename assets keyed by href when used |
| Change a title | Domain record or `src/lib/wiki/static-pages.ts` | Header, document title, navigation, footer, search, cards | None unless the canonical href also changes |
| Change a description | Domain record or `src/lib/wiki/static-pages.ts` | Header description, meta description, search, cards | None |
| Change tags | Domain record or `src/lib/wiki/static-pages.ts` | Search metadata and PageHeader tags | Add tag definitions in `src/lib/wiki/search-tags.ts` only for new tag ids |
| Change an icon ID | Domain/static metadata record | Registry, navigation item, NavTree mask rendering | Add the id to `src/lib/wiki/icon-ids.ts` if new |
| Map an icon asset | `src/lib/wiki/icons.ts` | NavTree CSS-mask rendering through `getWikiIcon()` | Add/import the asset file |
| Add a Party | `src/lib/config/campaigns.ts` | Preferences, sidebar, availability labels, search metadata | Add CSS token values in `src/lib/styles/tokens.scss` only for new Party colours |
| Add a Dungeon Master | `src/lib/config/campaigns.ts` | Preferences and Party relationship helpers | None unless prose intentionally mentions the name |
| Assign a Party to a Dungeon Master | Party `dmId` in `src/lib/config/campaigns.ts` | DM relevance and Party grouping helpers | None |
| Change Party ordering | Party `order` in `src/lib/config/campaigns.ts` | Derived Party arrays, preferences, sidebar accents | None |
| Change Party colors | Party token names in `src/lib/config/campaigns.ts`; token values in `src/lib/styles/tokens.scss` | Sidebar accents, campaign notes, badges using tokens | Both files are required when the token name and actual colour value both change |
| Change availability | `src/lib/data/availability.ts` | Badges, availability metadata, content filters | None |
| Change search metadata | Domain/static page metadata and `src/lib/wiki/search-tags.ts` for tag definitions | `src/lib/wiki/search-index.ts` and `src/lib/utils/wiki-search.ts` derive results/facets | None unless changing search scoring or UI behavior |
| Change navigation behavior | Registry navigation flags plus `src/lib/wiki/navigation.ts` for projection behavior | Sidebar, NavTree, child cards | Component edits only for interaction/rendering changes |
| Add an icon ID | `src/lib/wiki/icon-ids.ts` | Type validation and registry metadata | Map the asset in `src/lib/wiki/icons.ts` |
| Add a footer page | Footer ID group in `src/lib/wiki/registry.ts` | Footer label and href derive from registry | Static/domain page entry if new |
| Add a home quick link | `homeQuickLinkIds` in `src/routes/+page.svelte` | Link title, href, and description derive from registry | Image choice if needed |
| Change document metadata rendering | `src/lib/components/PageDocumentMetadata.svelte` | Root/classes/species layouts render document title and description | None |
| Change navigation styling | `src/lib/components/layout/snippets/helpers/NavTree.scss` or shell styles | Sidebar/NavTree UI | None |
| Change a shared panel | `src/lib/styles/_panels.scss` | PageSection, Panel, cards using panel mixins | Route-local composition only when page-specific |
| Change a button | `src/lib/styles/_buttons.scss` or `ActionButton.svelte` | Shared button/action consumers | None |
| Change a form control | `src/lib/styles/_forms.scss` or form components | Preferences/search form controls | None |
| Change a breakpoint | `src/lib/styles/_breakpoints.scss` | Shell, panels, route styles using shared variables | None |
| Change route-specific composition | Route-adjacent SCSS | Only that route | None |

## Current data-flow summary

| Flow | Current path |
| --- | --- |
| Wiki metadata | Domain metadata in `src/lib/wiki/classes/` and `src/lib/wiki/species/`, plus static metadata in `src/lib/wiki/static-pages.ts`, flows into `src/lib/wiki/registry.ts`; layouts use registry entries for `PageHeader` and `PageDocumentMetadata`; navigation, footer links, search entries, and child cards derive from registry helpers. |
| Campaign data | `src/lib/config/campaigns.ts` derives Party and Dungeon Master arrays/helpers; availability, preferences, sidebar accents, and search metadata consume those helpers. |
| Availability | `src/lib/data/availability.ts` owns decisions; `getAvailabilityByHref()` feeds `AvailabilityBadges`, `src/lib/utils/availability-metadata.ts`, search relevance, and filters. |
| Icons | `src/lib/wiki/icon-ids.ts` defines valid ids; page metadata stores ids; registry/navigation preserve ids; `src/lib/wiki/icons.ts` maps ids to SVG assets for CSS-mask rendering. |
| Styling | `src/lib/styles/tokens.scss` and shared Sass primitives feed component-owned SCSS and route-level composition styles. |
