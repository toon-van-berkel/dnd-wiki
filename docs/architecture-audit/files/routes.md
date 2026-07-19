# Routes

Files in this report: 82.

## `src/routes/+layout.svelte`

**Role:**  
Svelte component +layout; renders/imports component tags Wiki; writes document head metadata.

**Key contents:**  
Exports +layout; no obvious owned data.

**Imports/dependencies:**  
$app/paths, $app/state, svelte, $lib/layout/Wiki.svelte, $lib/wiki/registry, $lib/styles/styles.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/routes/+layout.ts.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/+layout.ts`

**Role:**  
TypeScript/JavaScript module exporting prerender, trailingSlash.

**Key contents:**  
Exports prerender, trailingSlash; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/routes/+layout.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags Metadata, PageHeader, PageSection, CardGrid, IconLinkCard, StepList, StatusLegend, AccentDetailsCard, IconCallout, TagList.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/page/Metadata.svelte, $lib/page/layout/navigation/PageHeader.svelte, $lib/pages/PageSection/PageSection.svelte, $lib/pages/AccentDetailsCard/AccentDetailsCard.svelte, $lib/pages/CardGrid/CardGrid.svelte, $lib/pages/IconCallout/IconCallout.svelte, $lib/pages/IconLinkCard/IconLinkCard.svelte, $lib/pages/StatusLegend/StatusLegend.svelte, $lib/pages/StepList/StepList.svelte, $lib/pages/TagList/TagList.svelte, ./page.data, ./page.meta, ./page.header.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/about/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; hardcoded GitHub repository URL.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, ./About.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
hardcoded GitHub repository URL.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/about/About.scss`

**Role:**  
SCSS styles for About, including selectors .about-feature, .about-feature__marker, .about-action, .about-comparison, .about-comparison__card, .about-comparison__eyebrow, .about-links, .about-comparison.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints, $lib/styles/buttons, $lib/styles/mixins, $lib/styles/panels.

**Consumers:**  
src/routes/about/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/accessibility/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; hardcoded GitHub repository URL.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, ./Accessibility.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
hardcoded GitHub repository URL.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
contains root-absolute asset or route path; check base-path handling.

**Confidence:**  
high.

## `src/routes/accessibility/Accessibility.scss`

**Role:**  
SCSS styles for Accessibility, including selectors .accessibility-summary, .accessibility-feature, .accessibility-report, .accessibility-feature__icon, .accessibility-report__icon, .accessibility-report, .accessibility-code, .accessibility-comparison.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/accessibility/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/ai/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/ai-images, ./AITransparency.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/ai/AITransparency.scss`

**Role:**  
SCSS styles for AITransparency, including selectors .ai-definitions, .ai-gallery, .ai-card, .ai-card__image-link, .ai-card__image, .ai-card__content, .ai-card__heading, .ai-card__type.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/ai/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/changelog/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags ChangeFilter, PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/changelog, ./Changelog.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/changelog/Changelog.scss`

**Role:**  
SCSS styles for Changelog, including selectors .changelog-summary, .changelog-categories, .changelog-category, .changelog-category--added, .changelog-category--changed, .changelog-category--fixed, .changelog-category--content, .changelog-category--removed.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/changelog/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/classes/+layout.svelte`

**Role:**  
Svelte component +layout.

**Key contents:**  
Exports +layout; no obvious owned data.

**Imports/dependencies:**  
$app/state, svelte, $lib/components/PageDocumentMetadata.svelte, $lib/wiki/registry.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/classes/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags Metadata, PageHeader, PageSection, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/ChildLinkGrid.svelte, $lib/pages/PageSection.svelte, $lib/wiki/navigation, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/page/Metadata.svelte, ../page.meta.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree; contains root-absolute asset or route path; check base-path handling.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/classes/artificer/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, WikiTable, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/PageSection.svelte, $lib/components/WikiTable.svelte, $lib/components/ChildLinkGrid.svelte, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/classes/barbarian/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/bard/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/blood-hunter/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/captain/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/champion/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/cleric/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/classes/cleric/death-domain/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/cleric/life-domain/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/druid/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/fighter/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/gunslinger/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/illrigger/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/messenger/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/monk/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/monster-hunter/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/mournbound/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/page.header.ts`

**Role:**  
TypeScript/JavaScript module exporting headerdata.

**Key contents:**  
Exports headerdata; route-local page-header title, eyebrow, description.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/classes/+page.svelte.

**Data ownership:**  
route-local page-header title, eyebrow, description.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/classes/page.meta.ts`

**Role:**  
TypeScript/JavaScript module exporting metadata.

**Key contents:**  
Exports metadata; route-local SEO/social metadata.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
route-local SEO/social metadata.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/classes/paladin/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/pugilist/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/ranger/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, WikiTable, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/PageSection.svelte, $lib/components/WikiTable.svelte, $lib/components/ChildLinkGrid.svelte, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/classes/rogue/arcane-trickster/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/assassin/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/inquisitive/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/mastermind/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/phantom/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/scout/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/soulknife/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/swashbuckler/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/rogue/thief/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/scholar/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/sorcerer/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/treasure-hunter/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/vampyr/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/warden/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/warlock/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/classes/wizard/+page.svelte`

**Role:**  
Svelte component +page.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
empty route/component file.

**Confidence:**  
high.

## `src/routes/content-removal/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, ./ContentRemoval.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/content-removal/ContentRemoval.scss`

**Role:**  
SCSS styles for ContentRemoval, including selectors .removal-summary, .removal-details, .removal-categories, .removal-outcomes, .removal-categories__label, .removal-notice, .removal-notice__icon, .removal-action.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/content-removal/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/contribution-terms/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, ./ContributionTerms.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/contribution-terms/ContributionTerms.scss`

**Role:**  
SCSS styles for ContributionTerms, including selectors .contribution-summary, .contribution-notice, .contribution-feature, .contribution-notice, .contribution-feature, .contribution-notice__icon, .contribution-feature__icon, .contribution-notice__icon.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/contribution-terms/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/cookies/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection; uses browser localStorage.

**Key contents:**  
Exports +page; browser storage key/value behaviour.

**Imports/dependencies:**  
$lib/utils/paths, $lib/utils/wiki-preferences, $lib/components/PageSection.svelte, ./CookieNotice.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
browser storage key/value behaviour.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/cookies/CookieNotice.scss`

**Role:**  
SCSS styles for CookieNotice, including selectors .cookie-summary, .cookie-status, .cookie-status__icon, .cookie-definitions, .cookie-list, .cookie-card, .cookie-empty, .cookie-empty__icon.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/cookies/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/credits/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; hardcoded GitHub repository URL.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
hardcoded GitHub repository URL.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/legal/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/PageSection.svelte, $lib/config/site.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on config module name that does not exist in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/locations/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, CampaignNote.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/monsters/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/PageSection.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/page.data.ts`

**Role:**  
TypeScript/JavaScript module exporting quickLinks, wikiSteps, availabilityStatuses, partyCards, guestPlayers.

**Key contents:**  
Exports quickLinks, wikiSteps, availabilityStatuses, partyCards, guestPlayers; homepage quick-link presentation, homepage steps, status legend copy, guest player names.

**Imports/dependencies:**  
$lib/config/parties, $lib/wiki/registry, $lib/pages/AccentDetailsCard/AccentDetailsCard-Types, $lib/pages/IconLinkCard/IconLinkCard-Types, $lib/pages/StatusLegend/StatusLegend-Types, $lib/pages/StepList/StepList-Types.

**Consumers:**  
src/routes/+page.svelte.

**Data ownership:**  
homepage quick-link presentation, homepage steps, status legend copy, guest player names.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/page.header.ts`

**Role:**  
TypeScript/JavaScript module exporting headerdata.

**Key contents:**  
Exports headerdata; route-local page-header title, eyebrow, description.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/+page.svelte.

**Data ownership:**  
route-local page-header title, eyebrow, description.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/page.meta.ts`

**Role:**  
TypeScript/JavaScript module exporting metadata.

**Key contents:**  
Exports metadata; route-local SEO/social metadata.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/+page.svelte, src/routes/classes/+page.svelte.

**Data ownership:**  
route-local SEO/social metadata.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/preferences/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags WikiPreferences, PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/PageSection.svelte, $lib/components/WikiPreferences.svelte, $lib/utils/paths.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/privacy/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection; uses browser localStorage.

**Key contents:**  
Exports +page; browser storage key/value behaviour.

**Imports/dependencies:**  
$lib/utils/paths, $lib/utils/wiki-preferences, $lib/components/PageSection.svelte, ./PrivacyNotice.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
browser storage key/value behaviour.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/privacy/PrivacyNotice.scss`

**Role:**  
SCSS styles for PrivacyNotice, including selectors .privacy-summary, .privacy-details, .privacy-retention, .privacy-notice, .privacy-notice__icon, .privacy-storage, .privacy-provider, .privacy-purpose-list.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/privacy/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/rules/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageHeader, PageSection, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/rules/fighting/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, CampaignNote.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/rules/movement/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, CampaignNote, PageHeader, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/rules/movement/page.header.ts`

**Role:**  
TypeScript/JavaScript module exporting headerdata.

**Key contents:**  
Exports headerdata; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/rules/movement/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/rules/page.header.ts`

**Role:**  
TypeScript/JavaScript module exporting headerdata.

**Key contents:**  
Exports headerdata; route-local page-header title, eyebrow, description.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/rules/+page.svelte.

**Data ownership:**  
route-local page-header title, eyebrow, description.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/search/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags SearchEntryKind, T, SearchFilterGroup, EmptyState, ActionButton; entire implementation is commented out.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
entire component is commented out.

**Confidence:**  
high.

## `src/routes/search/Search.scss`

**Role:**  
SCSS styles for Search, including selectors .search-page, .search-page__mobile-actions, .search-panel, .search-panel__form, .search-panel__field, .form-control, .search-panel, .search-results.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints, $lib/styles/buttons, $lib/styles/forms, $lib/styles/base/mixins, $lib/styles/panels.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/sources/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags SourceFilter, PageSection.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/sources, ./Sources.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/sources/Sources.scss`

**Role:**  
SCSS styles for Sources, including selectors .source-summary, .source-definitions, .source-controls, .source-search, .source-filters, .source-filter--active, .source-result-count, .source-list.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/sources/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/species/+layout.svelte`

**Role:**  
Svelte component +layout; renders/imports component tags PageDocumentMetadata, PageHeader, AvailabilityBadges.

**Key contents:**  
Exports +layout; no obvious owned data.

**Imports/dependencies:**  
$app/state, svelte, $lib/components/AvailabilityBadges.svelte, $lib/components/PageDocumentMetadata.svelte, $lib/components/PageHeader.svelte, $lib/wiki/registry.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/species/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/species/elf/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, ChildLinkGrid.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/routes/species/elf/astral-elf/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, CampaignNote.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/routes/species/human/+page.svelte`

**Role:**  
Svelte component +page; renders/imports component tags PageSection, CampaignNote.

**Key contents:**  
Exports +page; no obvious owned data.

**Imports/dependencies:**  
$lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.
