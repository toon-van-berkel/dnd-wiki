# Dependency Map

## Root Layout

```mermaid
flowchart TD
  A["src/routes/+layout.svelte"] --> B["$lib/layout/Wiki.svelte"]
  A --> C["$lib/styles/styles.scss"]
  A --> D["$lib/wiki/registry (missing)"]
  B --> E["src/lib/layout/snippets/Sidebar.svelte"]
  E --> F["src/lib/layout/snippets/Sidebar-Data.ts"]
  E --> G["src/lib/helpers/Icon.svelte"]
```

## Page Header

```mermaid
flowchart TD
  Route["routes with local page.header.ts"] --> H["src/lib/page/layout/navigation/PageHeader.svelte"]
  H --> A["AllowedIn snippet + local AllowedIn-data"]
  H --> T["Tags snippet + local Tags-data"]
  H --> B["Breadcrumbs helper"]
  Legacy["src/lib/components/PageHeader.svelte"] -. commented out .-> RT["RuleTag"]
```

## Sidebar Navigation

```mermaid
flowchart TD
  ActiveWiki["src/lib/layout/Wiki.svelte"] --> ActiveSidebar["src/lib/layout/snippets/Sidebar.svelte"]
  ActiveSidebar --> ActiveData["src/lib/layout/snippets/Sidebar-Data.ts"]
  OldWiki["src/lib/components/layout/WikiLayout.svelte"] --> OldSidebar["src/lib/components/layout/snippets/Sidebar.svelte"]
  OldSidebar --> MissingNav["$lib/wiki/navigation (missing)"]
```

## Footer

```mermaid
flowchart TD
  OldLayout["WikiLayout.svelte"] --> Footer["Footer.svelte"]
  Footer --> Config["$lib/config/config"]
  Footer --> MissingRegistry["$lib/wiki/registry (missing)"]
```

## Search

```mermaid
flowchart TD
  SearchPage["src/routes/search/+page.svelte"] --> SearchUtil["$lib/utils/wiki-search (commented exports)"]
  SearchPage --> MissingIndex["$lib/wiki/search-index (missing)"]
  OldHeader["Header.svelte (commented)"] --> SearchUtil
```

## Availability

```mermaid
flowchart TD
  NewHeader["src/lib/page/layout/navigation/PageHeader.svelte"] --> AllowedIn["AllowedIn.svelte"]
  AllowedIn --> LocalAllowedData["AllowedIn-data.ts"]
  LegacyBadges["AvailabilityBadges.svelte"] --> AvailabilityData["src/lib/data/availability.ts (commented)"]
  LegacyBadges --> AvailabilityMetadata["availability-metadata.ts (commented)"]
```

## Party/Campaign

```mermaid
flowchart TD
  HomeData["src/routes/page.data.ts"] --> Parties["src/lib/config/parties.ts"]
  Parties --> Tokens["src/lib/styles/tokens.scss"]
  Dms["src/lib/config/dms.ts"] -. no active consumer found .-> Parties
  MissingCampaigns["$lib/config/campaigns (missing)"] -. expected by older components/tests .-> OldConsumers["WikiPreferences, CampaignNote, tests"]
```

## Metadata/Homepage/Icon

```mermaid
flowchart TD
  Home["src/routes/+page.svelte"] --> Metadata["src/lib/page/Metadata.svelte"]
  Home --> NewCards["src/lib/pages/* components"]
  Home --> HomeData["src/routes/page.data.ts"]
  NewCards --> Icon["src/lib/helpers/Icon.svelte"]
  Icon --> IconData["src/lib/helpers/Icon-data.ts"]
  IconData --> SvgIcons["src/lib/assets/icons/**/*.svg"]
```

## Violations

- Generic/legacy layout components import deleted domain registries (`$lib/wiki/navigation`, `$lib/wiki/registry`).
- New homepage data imports deleted `$lib/wiki/registry`, mixing new page components with removed old registry contracts.
- Route-local metadata duplicates site identity and social metadata instead of deriving from config.
- New sidebar owns navigation labels/URLs separately from any registry source of truth.
- Party config and DM config are separated but `parties.ts` stores `dmId` values `toon`/`tijs`, while `dms.ts` keys are `i1`/`i2`.
- Root-absolute asset paths appear in active layout code despite GitHub Pages base-path requirements.
