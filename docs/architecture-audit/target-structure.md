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
