# Architecture Audit

This directory started as a read-only architecture audit for the SvelteKit + Svelte 5 + TypeScript project. The migration has now been implemented, so this README describes the current architecture and points historical planning documents to `history/`.

Repository: `C:/Users/toonv/Development/dnd-wiki/site`

## Current Source Ownership

| Area | Owns |
| --- | --- |
| `src/lib/page` | Page infrastructure: metadata, headers, breadcrumbs, tags, availability presentation, and page registry. |
| `src/lib/page/registry` | Stable page IDs, titles, hrefs, descriptions, parent relationships, tags, icons, navigation eligibility, footer membership, and registry validation. |
| `src/lib/pages` | Reusable route-body content structures such as `PageSection`, card grids, icon cards, step lists, status legends, callouts, and tag lists. |
| `src/lib/layout` | Persistent application shell, header, sidebar, footer, responsive menu behavior, and sidebar collapse state. |
| `src/lib/components` | Small generic UI components: icons, forms, feedback, child-link grids, tables, images, and rule tags. |
| `src/lib/config` | Stable identities and configuration: site identity, people, parties, and navigation ordering. |
| `src/lib/data` | Editable datasets: availability, sources, changelog, and AI image disclosure data. |
| `src/lib/search` | Search indexing, scoring, state parsing, filtering, facets, pagination, and search UI. |
| `src/lib/preferences` | Browser preference types, storage, validation, and UI. |
| `src/lib/utils` | Cross-cutting utilities, currently path and asset resolution. |
| `src/routes` | Route body content and route-specific interaction only. |

## Current Registry API

`src/lib/page/registry/index.ts` exports:

- `pageRegistry`
- `getPageEntry`
- `getPageEntryByHref`
- `getPageChildren`
- `getPageParent`
- `getPageAncestors`
- `getNavigationPages`
- `getFooterPages`

## Historical Documents

The following files describe older planning states and are no longer current:

- `history/migration-plan.md`
- `history/target-structure.md`
- `history/project-structure.md`
- `history/types.md`
- `history/styling.md`
- `history/duplication.md`

The audit files that described the pre-migration working tree remain at the top level for reference.

## Reports

- [Project context](project-context.md)
- [Inventory JSON](inventory.json)
- [Components](components.md)
- [Routes and pages](routes-and-pages.md)
- [Data and config](data-and-config.md)
- [Functions and utilities](functions-and-utilities.md)
- [Styles and assets](styles-and-assets.md)
- [Dependency map](dependency-map.md)
- [Duplicates and conflicts](duplicates-and-conflicts.md)
- [Import problems](import-problems.md)
- [Sources of truth](sources-of-truth.md)
- [Preliminary findings](preliminary-findings.md)
- [Validation](validation.md)
- [Editing guide](editing-guide.md)
- [Historical planning documents](history/)
