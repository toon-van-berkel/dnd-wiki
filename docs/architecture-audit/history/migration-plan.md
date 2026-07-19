# Migration Plan

## Phase 0: Add Safety Tests And Validation
Goal: protect behavior before movement. Files affected: tests/scripts. Add registry, availability parity, party token, route-header ownership, and search index tests. Rollback: delete tests.

Status after Phase 0 baseline: complete. Verified fixes covered the original TypeScript/Svelte/test-compilation failures, recursive availability lookup, SVG module typing, duplicate species `PageHeader` ownership, and registry/icon validation. `npm run check --if-present`, `npm run test --if-present`, `npm run build`, `npm run verify:pages --if-present`, standalone `npx svelte-check --tsconfig ./tsconfig.json`, and the `BASE_PATH="/test-repository"` build/verify pair pass using the existing Volta-managed npm installation.

No large migration occurred in Phase 0. The current architecture still uses the existing registry, existing class/species domain folders, current compatibility modules, and current styling structure.

## Phase 1: Confirm Sources Of Truth
Goal: codify that registry/domain data owns page metadata and campaign config owns parties/DMs. This phase should be first to stop class names, routes, tags, and descriptions from being entered multiple times.

Exact Phase 1 recommendation: keep the current folder layout, then make registry/domain metadata the only owner of page title, description, href, tags, parent, navigation, footer, and icon ids for class/species/rules-style wiki pages. Keep route files focused on body content and section headings. Do not remove compatibility modules until all imports are migrated and covered by tests.

Status after Phase 1 metadata baseline: complete for class, subclass, species, and child-species Wiki metadata. Domain records now use the shared `WikiDomainPage` contract, registry flattening no longer casts domain records, navigation/search/card data is derived from registry output, and class/species route files no longer declare structural head/header metadata. The stale duplicate `src/lib/data/classes.ts` module was removed.

Known remaining non-Phase-1 edit points: SvelteKit route folders still need physical renames when hrefs change, image asset folders and href keys still need matching updates, static/information routes still own their own route-local headers, and styling/campaign/availability location consolidation remains deferred.

## Phase 2: Consolidate Campaign Data
Goal: move party member lists, select-all helpers, and token validation behind campaign config/domain. Affects campaigns.ts, data facades, sidebar, preferences, home route. Tests: party order, preferences, sidebar, token validation. Rollback: keep facades.

Status after Phase 2 campaign baseline: complete. `src/lib/config/campaigns.ts` now owns Party ids, names, short names, member summaries, order, colour token names, Dungeon Master ids/names, and Party-to-Dungeon-Master relationships. Derived exports include `parties`, `dungeonMasters`, `partyIds`, `dungeonMasterIds`, `allPartyIds`, `selectParties`, `selectAllParties`, validators, and relationship lookups. Availability imports the central Party helpers, preferences sanitize through central validators, Sidebar and CampaignNote render from Party records, and compatibility facades are re-export-only.

No folder migration, availability relocation, search rewrite, or styling consolidation occurred. Actual colour values intentionally remain in `src/lib/styles/tokens.scss` and are validated by tests.

## Phase 3: Consolidate Wiki Domain Data
Goal: consolidate availability ownership around canonical Wiki hrefs/page ids without moving the broad folder structure yet. Affects `src/lib/data/availability.ts`, availability metadata utilities, badge consumers, search metadata, and route-level availability usage. Tests: no inline availability props as authoritative data, recursive lookup parity, invalid Party ids rejected, availability/search labels derive from campaign config, and base-path builds still pass.

Exact Phase 3 recommendation: make availability the next single source of truth by keying it to canonical registry hrefs or ids, keep UI/search on `getAvailabilityByHref`, remove any remaining route-owned availability declarations, and document how to edit availability separately from campaign identity. Do not start styling consolidation or the target folder migration in Phase 3.

Status after Phase 3 availability baseline: complete. `src/lib/data/availability.ts` is the single editable source for page availability decisions. `AvailabilityBadges` accepts only a canonical `href`, class/species layouts pass `pageMeta.href`, search availability metadata derives through `getAvailabilityByHref()`, and route files no longer render or import `AvailabilityBadges` for class/species availability decisions. The active rule is exact-entry only: child pages do not inherit parent availability unless they have their own authored entry.

Validation now rejects unknown Wiki hrefs, collection-page entries, duplicate Party ids within a status, Party ids in conflicting statuses, unknown Party ids, empty availability nodes, and malformed nodes. Dead availability entries for non-registry species pages were removed because every authored availability href must map to one registry page.

## Phase 4: Derive Registry/Navigation/Search
Goal: remove route-local child arrays and metadata where registry can derive them. Affects rules/classes/species routes and navigation/search modules. Tests: sidebar, child link grids, search facets.

Exact Phase 4 recommendation: consolidate remaining non-availability derivation gaps in registry/navigation/search and route child-card helpers, especially static/information page metadata and any remaining route-local child arrays. Do not start broad folder migration or styling consolidation in Phase 4.

Status after Phase 4 page metadata baseline: complete. Static and information page metadata now lives in `src/lib/wiki/static-pages.ts`; class/species metadata remains domain-owned. The central registry combines those sources, root/class/species layouts own `PageHeader` plus document metadata, footer links derive from registry page IDs, home quick links use curated registry IDs, rules child cards derive from navigation, and structural tests validate route existence and duplicate route-local metadata.

No folder migration, broad styling consolidation, availability relocation, campaign rework, search scoring rewrite, or second registry was introduced.

## Phase 5: Consolidate Types
Goal: remove duplicate aliases and export stable domain types. Affects campaign, availability, search, registry. Rollback: temporary aliases.

Exact Phase 5 recommendation: consolidate remaining type aliases and compatibility facades only where imports already converge. Focus on removing stale aliases, tightening shared registry/navigation/search return types, and reducing compatibility files that are demonstrably unused. Do not start folder migration or styling consolidation in Phase 5.

Status after Phase 5 type/utility baseline: complete. Important shared types now have documented owners beside their authoritative boundary: domain authoring types in `wiki/domain.ts`, flattened registry types in `wiki/registry.ts`, navigation projections in `wiki/navigation.ts`, search projections in `wiki/search-index.ts`, campaign IDs in `config/campaigns.ts`, availability types in `data/availability.ts`, icon IDs in `wiki/icon-ids.ts`, and preference storage in `utils/wiki-preferences.ts`.

Unused campaign compatibility facades were removed: `src/lib/data/parties.ts` and `src/lib/data/dungeon-masters.ts`. The unused `PartyCode`, `PartyOption`, and `getPartyIdByName` exports were removed with them. Registry, navigation, search, campaign, and availability result arrays now expose readonly/copy-safe boundaries where practical, and tests guard SVG declaration ownership, manual campaign ID unions/casts, removed facade imports, path utility contracts, mutation-sensitive helpers, and runtime import cycles among core modules.

No folder migration, broad styling consolidation, search scoring rewrite, route restructure, second type system, or general-purpose barrel/helper layer was introduced.

## Phase 6: Consolidate Shared Styling
Goal: move repeated panel/card/form/button/focus/reduced-motion patterns into shared mixins/components. Risk: visual regressions. Manual checks: desktop/mobile/focus/reduced motion.

Status after Phase 6 styling baseline: complete for shared styling foundations. `_breakpoints.scss` now owns common responsive thresholds, `_mixins.scss` owns focus/reduced-motion/interactive transitions, `_panels.scss` owns panel/surface/interactive-card foundations, and `_buttons.scss` owns reusable button/action foundations. Search/about route styles and core component styles now consume those primitives where repeated surfaces and controls matched.

Phase 6 also added structural tests for Sass partial boundaries, token reference validation, Party/availability color ownership, no legacy `@import`, no `!important`, shell/shared breakpoint usage, NavTree single row hover surface, and content-sized availability badges.

No folder migration, metadata/data architecture changes, route restructuring, or styling redesign occurred. Remaining styling work is legal/information route composition cleanup and any future extraction of repeated page-specific list/card patterns.

## Phase 7: Remove Compatibility Modules
Goal: remove any remaining compatibility modules after later phases introduce them or reveal stale imports. The known class and campaign data facades (`data/classes.ts`, `data/parties.ts`, `data/dungeon-masters.ts`) are already removed as of Phase 5.

Status after Phase 7 cleanup baseline: complete. The refreshed inventory represents the current repository instead of the original audit snapshot, deleted data modules are removed from active compiler inputs and application imports, no compatibility facades remain, accidental internal lookup exports were localized, and structural tests now guard deleted-module references, facades, current inventory coverage, component consumers, Sass import resolution, shared Sass primitive consumption, and current documentation guidance.

Phase 7 did not move folders, change route URLs, redesign styling, change metadata values, change campaign identities, change availability decisions, alter search scoring/filtering, or create a second registry/configuration/source tree.

### Phase 7 Migration Readiness

Result: **Ready with conditions**.

Evidence:

- Test coverage is strong and includes registry, route ownership, availability, campaign, search, styling, dependency-cycle, and Phase 7 structural checks.
- Core dependency direction is valid: config/data/domain modules do not depend on UI; registry does not depend on navigation/search; navigation/search derive from registry.
- Active compatibility facades: none.
- Known dead modules: removed and documented only as migration history.
- Source-of-truth ownership is clear enough to support a folder migration.
- Rollback readiness is good because the worktree is tracked by Git and Phase 7 made small scoped edits.

Conditions before starting the major folder migration:

- Commit or otherwise checkpoint the connected Phase 0-7 work; the worktree is intentionally dirty and broad.
- Keep route-folder and asset-folder coupling in mind when moving domain files; href changes still require physical route/asset work.
- Do not fold legal/site-owner prose or asset manifests into the folder migration unless that is explicitly scoped.
- Preserve the current validation suite and run it after each movement batch.

## Phase 8: Final Import Cleanup And Documentation
Goal: normalize imports, verify inventory and current docs, and make the final migration decision. Required checks: check, lint if present, test, build, verify pages.

Status after Phase 8 normalization: complete. Svelte/app source imports use authoritative `$lib/...` paths where low-risk, while plain TypeScript modules that are emitted by `tsconfig.test.json` keep explicit relative `.js` imports so Node can execute the compiled tests. Legitimate local relative imports remain for same-folder domain files, adjacent components, recursive components, and styles. The audit README now contains the final editing guide and current data-flow summary. `target-structure.md` was reassessed against the current architecture instead of treated as an automatic next step.

Final migration outcome: **A. Stop after Phase 8**.

Evidence:

- Ownership is clear: class/species metadata, static page metadata, campaign data, availability decisions, registry projection, navigation, search, icons, document metadata, and shared styling primitives each have documented owners.
- Structural tests cover registry uniqueness, route existence, PageHeader/document metadata ownership, campaign and availability invariants, import boundaries, documentation links, inventory coverage, and runtime cycles.
- No compatibility facades remain for class/campaign metadata, and deleted modules are documented only as migration history.
- The remaining physical coupling is unavoidable in SvelteKit: href changes still require route-folder renames, and asset files still require explicit file changes.
- Moving to `src/lib/domains/` would touch many imports and produce review churn without eliminating a current source-of-truth problem.

Recommendation: do not begin a folder migration. Future work should be feature- or pain-driven: make small local moves only if a module becomes hard to discover in practice, and commit any such move independently with the existing validation suite.
