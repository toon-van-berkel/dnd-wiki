# Target Structure

## Current Phase 7 Boundary

This file is a future migration sketch only. Phase 7 did not create `src/lib/domains`, move folders, or rename the current `wiki`, `data`, `config`, `utils`, `components`, `styles`, or `routes` directories. The current architecture remains documented in `README.md`, `project-structure.md`, `dependency-map.md`, and `sources-of-truth.md`.

## Future Sketch

Do not implement this during the audit. The goal is domain ownership, not one giant miscellaneous folder.

```text
src/lib/
  config/
    site.ts
    legal.ts
    campaigns.ts
  domains/
    wiki/
      registry/
      classes/
      species/
      rules/
      availability/
      navigation/
      search/
      icons/
      assets/
    preferences/
  components/
    layout/
    navigation/
    forms/
    feedback/
    wiki/
    search/
  styles/
    tokens/
    foundations/
    mixins/
    utilities/
  assets/
  utils/
```

| Folder | What belongs there | What must not belong there | Current files that would move |
| --- | --- | --- | --- |
| config | Site, legal/contact, campaign identities, party ordering, DM relationships, token ids | Wiki page metadata and route body prose | site.ts, campaigns.ts, legal constants from routes |
| domains/wiki/registry | Flattening, validation, page indexes, static page metadata | Class/species arrays and UI components | src/lib/wiki/registry.ts |
| domains/wiki/classes | Class/subclass metadata, ids, slugs, descriptions, tags, parent links | Route body markup | src/lib/wiki/classes/* |
| domains/wiki/species | Species/subspecies metadata | Route PageHeader duplication | src/lib/wiki/species/* |
| domains/wiki/availability | Availability config, lookup, metadata, labels | Inline badge data ownership | availability.ts, availability-metadata.ts |
| domains/wiki/navigation | Derived navigation builder/types | Sidebar render state | navigation.ts |
| domains/wiki/search | Search tags, index, scoring, facets, URL state | Generic path/localStorage helpers | search-index.ts, search-tags.ts, wiki-search.ts |
| domains/wiki/icons/assets | Icon ids and asset manifest | Component-only markup | icons.ts, assets/icons |
| domains/preferences | Preference schema and browser storage helpers | Party source data | wiki-preferences.ts |
| components/* | Reusable UI grouped by job | Domain source data | src/lib/components/** |
| styles/* | Tokens, foundations, mixins, utilities | Route-only layout | src/lib/styles/** |
| utils | Generic app utilities like path/asset resolution | Wiki search/availability logic | paths.ts |

## Phase 8 Reassessment

The original target structure would improve visual symmetry, but Phases 0-7 already resolved the practical ownership problems without moving folders. The remaining current pain is mostly discoverability for newcomers, not active metadata drift.

| Proposed move | Current pain solved | Files affected | Import churn | Regression risk | Discoverability benefit | Phase 8 decision |
| --- | --- | --- | --- | --- | --- | --- |
| `src/lib/wiki/classes/` -> `src/lib/domains/wiki/classes/` | Minimal; class ownership is already clear and tested | All class domain files plus registry/tests/docs imports | Medium | Low to medium because many href/route invariants must still be rechecked | Low | Do not move; mostly cosmetic |
| `src/lib/wiki/species/` -> `src/lib/domains/wiki/species/` | Minimal; species ownership is already clear and tested | Species domain files plus registry/tests/docs imports | Medium | Low to medium | Low | Do not move; mostly cosmetic |
| `src/lib/wiki/registry.ts` and `static-pages.ts` -> `domains/wiki/registry/` | Would group registry internals, but the current central registry path is explicit | Registry/static metadata imports across layouts, footer, tests, docs | Medium | Medium because registry is the main metadata boundary | Low to medium | Do not move now |
| `src/lib/data/availability.ts` and `src/lib/utils/availability-metadata.ts` -> `domains/wiki/availability/` | Would colocate decisions and metadata derivation | Availability, search-index, badges, tests, docs | Medium | Medium because availability affects UI/search relevance | Medium | Do not move; ownership is already documented |
| `src/lib/utils/wiki-search.ts`, `src/lib/wiki/search-index.ts`, and `search-tags.ts` -> `domains/wiki/search/` | Would group search index/scoring/tag logic | Search route, header, tests, docs | Medium | Medium because search behavior is user-facing | Medium | Defer indefinitely unless search grows substantially |
| `src/lib/wiki/icon-ids.ts` and `icons.ts` -> `domains/wiki/icons/` | Would group icon contract and asset map | Navigation, registry, tests, docs | Low | Low | Low | Do not move |
| `src/lib/utils/wiki-preferences.ts` -> `domains/preferences/` | Would name the preference domain explicitly | Preferences component/routes/tests/docs | Low | Low | Low | Do not move |
| `src/lib/styles/*.scss` -> `styles/tokens`, `styles/foundations`, etc. | Would make style categories more explicit | Most component and route styles | High | Medium visual-regression risk | Medium | Do not move without a dedicated styling-only task |
| Broad `src/lib/components/*` regrouping | Would improve UI browsing if component count grows | Component imports across routes/layouts/tests | Medium | Medium | Low today; component folders are already focused | Do not move |

Final assessment: the broad folder migration would be mostly cosmetic after Phase 8. The current tests protect behavior and ownership, but moving folders would still create import churn and review noise without removing an active source-of-truth problem.
