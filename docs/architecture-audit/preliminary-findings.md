# Preliminary Findings

## Confirmed

- The current working tree has deleted `$lib/wiki/*` files while active routes and components still import them.
- The current working tree has no `src/lib/config/campaigns.ts` or `src/lib/config/site.ts`, while older components/tests still import those names.
- `src/lib/page`, `src/lib/pages`, `src/lib/layout`, and `src/lib/helpers` contain newer-looking implementations and are used by the homepage/root shell.
- Older components under `src/lib/components` include active simple components, fully commented-out components, and disconnected layout code.
- There are duplicate PageHeader, PageSection, shell, sidebar, metadata, search, availability, icon, and party/campaign systems.
- Several route pages are empty placeholders but still exist as SvelteKit routes.
- Route-local metadata/header data repeats site identity strings also present in config.
- Navigation labels and URLs are hardcoded in the new sidebar data rather than derived from the missing registry.
- Root-absolute asset paths are present in active layout code.

## Likely

- The deletion of `$lib/wiki/*` is part of an in-progress migration toward the newer page/config/helper structure, but consumers were not fully migrated.
- `src/lib/components/layout/WikiLayout.svelte` is likely legacy relative to `src/lib/layout/Wiki.svelte`, but it contains behavior not present in the new shell.
- `src/lib/components/PageHeader.svelte`, `CampaignNote.svelte`, `PageDocumentMetadata.svelte`, and `WikiPreferences.svelte` are likely parked/commented legacy code.
- Static class/species card art is conventionally referenced through `ChildLinkGrid` when navigation child data exists, so absence of literal references is not enough to delete it.

## Unresolved

- Whether the deleted wiki registry modules should be restored, replaced by `src/lib/config/pages.ts`, or superseded by route-local data is not decided by this audit.
- Whether commented components are intentional temporary parking or should remain for future migration cannot be proven from imports alone.
- Several static assets have no direct reference in current source but may be convention-based route artwork.
- The exact final source of truth for page identity, tags, availability, and navigation remains unresolved.
