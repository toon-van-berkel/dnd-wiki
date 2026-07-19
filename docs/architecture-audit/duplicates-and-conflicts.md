# Duplicates And Conflicts

## PageHeader
- Exact files: src/lib/page/layout/navigation/PageHeader.svelte, src/lib/components/PageHeader.svelte, src/lib/components/PageHeader.scss, src/lib/page/layout/navigation/PageHeader.scss.
- Purpose: competing or transitional implementation of PageHeader.
- Meaningful differences: High: two header APIs exist, and older component file is commented out while routes import both newer and legacy infrastructure.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/routes/+page.svelte, src/routes/classes/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/species/+layout.svelte, src/lib/page/layout/navigation/PageHeader.svelte.
- Newest-looking implementation: src/lib/page/layout/navigation/PageHeader.svelte.
- Currently active: src/lib/page/layout/navigation/PageHeader.svelte.
- Both active: no.
- Probably obsolete: src/lib/components/PageHeader.svelte, src/lib/components/PageHeader.scss, src/lib/page/layout/navigation/PageHeader.scss.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: two header APIs exist, and older component file is commented out while routes import both newer and legacy infrastructure.

## PageSection
- Exact files: src/lib/pages/PageSection/PageSection.svelte, src/lib/components/PageSection.svelte.
- Purpose: competing or transitional implementation of PageSection.
- Meaningful differences: Medium: both implementations are imported by routes, with different props and behavior.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/lib/pages/PageSection/PageSection.svelte, src/routes/+page.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/content-removal/+page.svelte, src/routes/contribution-terms/+page.svelte, src/routes/cookies/+page.svelte, src/routes/credits/+page.svelte, src/routes/legal/+page.svelte, src/routes/locations/+page.svelte, src/routes/monsters/+page.svelte, src/routes/preferences/+page.svelte, src/routes/privacy/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/sources/+page.svelte, src/routes/species/+page.svelte, src/routes/species/elf/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte.
- Newest-looking implementation: src/lib/pages/PageSection/PageSection.svelte.
- Currently active: src/lib/pages/PageSection/PageSection.svelte, src/lib/components/PageSection.svelte.
- Both active: yes.
- Probably obsolete: none confirmed.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: Medium: both implementations are imported by routes, with different props and behavior.

## Site shell/layout
- Exact files: src/lib/layout/Wiki.svelte, src/lib/components/layout/WikiLayout.svelte.
- Purpose: competing or transitional implementation of Site shell/layout.
- Meaningful differences: High: root layout imports the newer shell, while the older shell carries sidebar collapse, header, footer, and storage behavior.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/routes/+layout.svelte.
- Newest-looking implementation: src/lib/layout/Wiki.svelte.
- Currently active: src/lib/layout/Wiki.svelte.
- Both active: no.
- Probably obsolete: src/lib/components/layout/WikiLayout.svelte.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: root layout imports the newer shell, while the older shell carries sidebar collapse, header, footer, and storage behavior.

## Sidebar
- Exact files: src/lib/layout/snippets/Sidebar.svelte, src/lib/components/layout/snippets/Sidebar.svelte.
- Purpose: competing or transitional implementation of Sidebar.
- Meaningful differences: High: newer sidebar owns hardcoded navigation data, older sidebar expects deleted registry navigation.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/lib/layout/Wiki.svelte, src/lib/components/layout/WikiLayout.svelte.
- Newest-looking implementation: src/lib/layout/snippets/Sidebar.svelte.
- Currently active: src/lib/layout/snippets/Sidebar.svelte.
- Both active: no.
- Probably obsolete: src/lib/components/layout/snippets/Sidebar.svelte.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: newer sidebar owns hardcoded navigation data, older sidebar expects deleted registry navigation.

## Metadata
- Exact files: src/lib/page/Metadata.svelte, src/lib/components/PageDocumentMetadata.svelte, src/routes/page.meta.ts, src/routes/classes/page.meta.ts.
- Purpose: competing or transitional implementation of Metadata.
- Meaningful differences: High: document metadata exists in route-local objects and older registry-based component; siteConfig import is missing.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/routes/+page.svelte, src/routes/classes/+page.svelte, src/routes/classes/+layout.svelte, src/routes/species/+layout.svelte, src/routes/+page.svelte, src/routes/classes/+page.svelte.
- Newest-looking implementation: src/lib/page/Metadata.svelte.
- Currently active: src/lib/page/Metadata.svelte, src/routes/page.meta.ts, src/routes/classes/page.meta.ts.
- Both active: yes.
- Probably obsolete: src/lib/components/PageDocumentMetadata.svelte.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: document metadata exists in route-local objects and older registry-based component; siteConfig import is missing.

## Party/campaign config
- Exact files: src/lib/config/parties.ts, src/lib/config/dms.ts, src/lib/config/config.ts, src/lib/helpers/parties-helper.ts.
- Purpose: competing or transitional implementation of Party/campaign config.
- Meaningful differences: High: consumers still import deleted `$lib/config/campaigns`, and new party ids use dmId strings that do not match dms ids.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/lib/components/layout/snippets/Sidebar.svelte, src/lib/helpers/parties-helper.ts, src/routes/page.data.ts, src/lib/components/layout/snippets/Footer.svelte.
- Newest-looking implementation: src/lib/config/parties.ts.
- Currently active: src/lib/config/parties.ts, src/lib/config/dms.ts, src/lib/config/config.ts.
- Both active: yes.
- Probably obsolete: src/lib/helpers/parties-helper.ts.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: consumers still import deleted `$lib/config/campaigns`, and new party ids use dmId strings that do not match dms ids.

## Icon system
- Exact files: src/lib/helpers/Icon.svelte, src/lib/helpers/Icon-data.ts, src/lib/helpers/Icon-helper.ts, src/lib/helpers/Icon-Types.ts.
- Purpose: competing or transitional implementation of Icon system.
- Meaningful differences: Medium: new icon map replaces deleted `$lib/wiki/icons`, while older components still import `$lib/wiki/icons`.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/lib/layout/snippets/Sidebar.svelte, src/lib/pages/IconCallout/IconCallout.svelte, src/lib/pages/IconLinkCard/IconLinkCard.svelte, src/lib/pages/StatusLegend/StatusLegend.svelte, src/lib/pages/StepList/StepList.svelte, src/lib/helpers/Icon-Types.ts, src/lib/helpers/Icon-helper.ts, src/lib/helpers/Icon.svelte, src/lib/helpers/Icon-helper.ts, src/lib/helpers/Icon.svelte, src/lib/layout/snippets/Sidebar-Types.ts, src/lib/pages/IconCallout/IconCallout-Types.ts, src/lib/pages/IconLinkCard/IconLinkCard-Types.ts, src/lib/pages/StatusLegend/StatusLegend-Types.ts, src/lib/pages/StepList/StepList-Types.ts.
- Newest-looking implementation: src/lib/helpers/Icon.svelte.
- Currently active: src/lib/helpers/Icon.svelte, src/lib/helpers/Icon-data.ts, src/lib/helpers/Icon-helper.ts, src/lib/helpers/Icon-Types.ts.
- Both active: yes.
- Probably obsolete: none confirmed.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: Medium: new icon map replaces deleted `$lib/wiki/icons`, while older components still import `$lib/wiki/icons`.

## Search
- Exact files: src/lib/utils/wiki-search.ts, src/lib/search/SearchInput.svelte, src/routes/search/+page.svelte, src/routes/search/Search.scss.
- Purpose: competing or transitional implementation of Search.
- Meaningful differences: High: utility implementation is entirely commented out and search route imports deleted `$lib/wiki/search-index`.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: none detected.
- Newest-looking implementation: src/routes/search/+page.svelte.
- Currently active: src/routes/search/+page.svelte, src/routes/search/Search.scss.
- Both active: yes.
- Probably obsolete: src/lib/utils/wiki-search.ts, src/lib/search/SearchInput.svelte.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: utility implementation is entirely commented out and search route imports deleted `$lib/wiki/search-index`.

## Availability
- Exact files: src/lib/data/availability.ts, src/lib/utils/availability-metadata.ts, src/lib/components/AvailabilityBadges.svelte, src/lib/page/layout/navigation/snippets/AllowedIn.svelte.
- Purpose: competing or transitional implementation of Availability.
- Meaningful differences: High: current helper/data modules are mostly commented while newer header snippets use local data files.
- Modification clues: newer implementation generally lives in `src/lib/page`, `src/lib/pages`, `src/lib/layout`, or `src/lib/helpers`, with July 18 timestamps in this working tree.
- Known consumers: src/lib/components/AvailabilityBadges.svelte, src/lib/components/AvailabilityBadges.svelte, src/routes/species/+layout.svelte, src/lib/page/layout/navigation/PageHeader.svelte.
- Newest-looking implementation: src/lib/page/layout/navigation/snippets/AllowedIn.svelte.
- Currently active: src/lib/page/layout/navigation/snippets/AllowedIn.svelte, src/lib/page/layout/navigation/snippets/AllowedIn-data.ts, src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts.
- Both active: yes.
- Probably obsolete: src/lib/data/availability.ts, src/lib/utils/availability-metadata.ts, src/lib/components/AvailabilityBadges.svelte.
- Confidence: medium-high, based on imports and timestamps, but removal risk remains until deleted/missing registry migration is resolved.
- Risk of removing wrong one: High: current helper/data modules are mostly commented while newer header snippets use local data files.
