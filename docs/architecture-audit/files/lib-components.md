# Lib Components

Files in this report: 32.

## `src/lib/components/AvailabilityBadges.scss`

**Role:**  
SCSS styles for AvailabilityBadges, including selectors .availability, .availability.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints, $lib/styles/panels.

**Consumers:**  
src/lib/components/AvailabilityBadges.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/AvailabilityBadges.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/AvailabilityBadges.svelte`

**Role:**  
Svelte component AvailabilityBadges.

**Key contents:**  
Exports AvailabilityBadges; no obvious owned data.

**Imports/dependencies:**  
$lib/data/availability, $lib/utils/availability-metadata, ./AvailabilityBadges.scss.

**Consumers:**  
src/routes/species/+layout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/AvailabilityBadges.scss.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/CampaignNote.scss`

**Role:**  
SCSS styles for CampaignNote, including selectors .campaign-note.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/CampaignNote.svelte.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/CampaignNote.svelte`

**Role:**  
Svelte component CampaignNote; entire implementation is commented out.

**Key contents:**  
Exports CampaignNote; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/locations/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/CampaignNote.scss.

**Current status:**  
duplicate.

**Concerns:**  
entire component is commented out.

**Confidence:**  
high.

## `src/lib/components/ChildLinkGrid.scss`

**Role:**  
SCSS styles for ChildLinkGrid, including selectors .child-links.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/base/mixins, $lib/styles/panels.

**Consumers:**  
src/lib/components/ChildLinkGrid.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/ChildLinkGrid.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/ChildLinkGrid.svelte`

**Role:**  
Svelte component ChildLinkGrid; renders/imports component tags Gender; uses browser localStorage.

**Key contents:**  
Exports ChildLinkGrid; browser storage key/value behaviour.

**Imports/dependencies:**  
svelte, $lib/utils/paths, ./ChildLinkGrid.scss.

**Consumers:**  
src/routes/classes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/species/+page.svelte, src/routes/species/elf/+page.svelte.

**Data ownership:**  
browser storage key/value behaviour.

**Related files:**  
src/lib/components/ChildLinkGrid.scss.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/PageDocumentMetadata.svelte`

**Role:**  
Svelte component PageDocumentMetadata; writes document head metadata; entire implementation is commented out.

**Key contents:**  
Exports PageDocumentMetadata; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/classes/+layout.svelte, src/routes/species/+layout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
duplicate.

**Concerns:**  
entire component is commented out.

**Confidence:**  
high.

## `src/lib/components/PageHeader.scss`

**Role:**  
SCSS styles for PageHeader, including selectors .page-header.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/PageHeader.svelte.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/PageHeader.svelte`

**Role:**  
Svelte component PageHeader; renders/imports component tags RuleTag; entire implementation is commented out.

**Key contents:**  
Exports PageHeader; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/species/+layout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/PageHeader.scss.

**Current status:**  
duplicate.

**Concerns:**  
entire component is commented out.

**Confidence:**  
high.

## `src/lib/components/PageSection.scss`

**Role:**  
SCSS styles for PageSection, including selectors .page-section.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/panels.

**Consumers:**  
src/lib/components/PageSection.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/PageSection.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/PageSection.svelte`

**Role:**  
Svelte component PageSection.

**Key contents:**  
Exports PageSection; no obvious owned data.

**Imports/dependencies:**  
svelte, ./PageSection.scss.

**Consumers:**  
src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/content-removal/+page.svelte, src/routes/contribution-terms/+page.svelte, src/routes/cookies/+page.svelte, src/routes/credits/+page.svelte, src/routes/legal/+page.svelte, src/routes/locations/+page.svelte, src/routes/monsters/+page.svelte, src/routes/preferences/+page.svelte, src/routes/privacy/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/sources/+page.svelte, src/routes/species/+page.svelte, src/routes/species/elf/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/PageSection.scss.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/RuleTag.scss`

**Role:**  
SCSS styles for RuleTag, including selectors .tag.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/RuleTag.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/RuleTag.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/RuleTag.svelte`

**Role:**  
Svelte component RuleTag.

**Key contents:**  
Exports RuleTag; no obvious owned data.

**Imports/dependencies:**  
./RuleTag.scss.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/RuleTag.scss.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/WikiImage.svelte`

**Role:**  
Svelte component WikiImage; renders/imports component tags HTMLImgAttributes.

**Key contents:**  
Exports WikiImage; no obvious owned data.

**Imports/dependencies:**  
svelte/elements, $lib/utils/paths.

**Consumers:**  
src/lib/components/layout/snippets/Footer.svelte.

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

## `src/lib/components/WikiPreferences.scss`

**Role:**  
SCSS styles for WikiPreferences, including selectors .wiki-preferences__fields, .wiki-preferences__footer, .wiki-preferences__fields, .wiki-preferences__footer.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/WikiPreferences.svelte.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/WikiPreferences.svelte`

**Role:**  
Svelte component WikiPreferences; renders/imports component tags Panel, SelectField, ActionButton; entire implementation is commented out.

**Key contents:**  
Exports WikiPreferences; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/preferences/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/WikiPreferences.scss.

**Current status:**  
duplicate.

**Concerns:**  
entire component is commented out.

**Confidence:**  
high.

## `src/lib/components/WikiTable.scss`

**Role:**  
SCSS styles for WikiTable, including selectors .wiki-table, .wiki-table, .wiki-table.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints, $lib/styles/base/mixins, $lib/styles/panels.

**Consumers:**  
src/lib/components/WikiTable.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/WikiTable.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/WikiTable.svelte`

**Role:**  
Svelte component WikiTable.

**Key contents:**  
Exports WikiTable; no obvious owned data.

**Imports/dependencies:**  
./WikiTable.scss.

**Consumers:**  
src/routes/classes/artificer/+page.svelte, src/routes/classes/rogue/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/WikiTable.scss.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/feedback/EmptyState.svelte`

**Role:**  
Svelte component EmptyState.

**Key contents:**  
Exports EmptyState; no obvious owned data.

**Imports/dependencies:**  
svelte, $lib/styles/panels.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/forms/ActionButton.svelte`

**Role:**  
Svelte component ActionButton.

**Key contents:**  
Exports ActionButton; no obvious owned data.

**Imports/dependencies:**  
svelte, $lib/styles/buttons.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/forms/SelectField.svelte`

**Role:**  
Svelte component SelectField.

**Key contents:**  
Exports SelectField; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/forms.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/Panel.svelte`

**Role:**  
Svelte component Panel.

**Key contents:**  
Exports Panel; no obvious owned data.

**Imports/dependencies:**  
svelte, $lib/styles/breakpoints, $lib/styles/panels.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/WikiLayout.svelte`

**Role:**  
Svelte component WikiLayout; renders/imports component tags Header, Sidebar, Footer; uses browser localStorage.

**Key contents:**  
Exports WikiLayout; browser storage key/value behaviour.

**Imports/dependencies:**  
svelte, ./snippets/Header.svelte, ./snippets/Sidebar.svelte, ./snippets/Footer.svelte.

**Consumers:**  
no importer found.

**Data ownership:**  
browser storage key/value behaviour.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/snippets/Footer.scss`

**Role:**  
SCSS styles for Footer, including selectors .site-footer, .site-footer__inner, .site-footer__legal-inner, .site-footer__inner, .site-footer__introduction, .site-footer__brand, .site-footer__brand-mark, .site-footer__brand-mark.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/layout/snippets/Footer.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/Footer.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/snippets/Footer.svelte`

**Role:**  
Svelte component Footer; renders/imports component tags WikiImage.

**Key contents:**  
Exports Footer; no obvious owned data.

**Imports/dependencies:**  
$lib/components/WikiImage.svelte, $lib/config/config, $lib/utils/paths, $lib/wiki/registry, ./Footer.scss.

**Consumers:**  
src/lib/components/layout/WikiLayout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/Footer.scss.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree; contains root-absolute asset or route path; check base-path handling.

**Confidence:**  
high; imports include unresolved targets.

## `src/lib/components/layout/snippets/Header.scss`

**Role:**  
SCSS styles for Header, including selectors .header, .search, .search__result-copy, .header, .search, .header, .search.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/Header.svelte.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/snippets/Header.svelte`

**Role:**  
Svelte component Header; entire implementation is commented out.

**Key contents:**  
Exports Header; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/layout/WikiLayout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/Header.scss.

**Current status:**  
duplicate.

**Concerns:**  
entire component is commented out.

**Confidence:**  
high.

## `src/lib/components/layout/snippets/Sidebar.scss`

**Role:**  
SCSS styles for Sidebar, including selectors .sidebar, .sidebar, .sidebar, .sidebar.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints, $lib/styles/base/mixins.

**Consumers:**  
src/lib/components/layout/snippets/Sidebar.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/Sidebar.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/snippets/Sidebar.svelte`

**Role:**  
Svelte component Sidebar; renders/imports component tags NavTree.

**Key contents:**  
Exports Sidebar; no obvious owned data.

**Imports/dependencies:**  
$app/state, $lib/config/parties, $lib/wiki/navigation, $lib/utils/paths, ./helpers/NavTree.svelte, ./Sidebar.scss.

**Consumers:**  
src/lib/components/layout/WikiLayout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/Sidebar.scss.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/lib/components/layout/snippets/helpers/NavTree.scss`

**Role:**  
SCSS styles for NavTree, including selectors .nav-tree, .nav-tree__link, .nav-tree__link, .navigation-item__icon, .nav-tree__marker, .navigation-item__icon, .navigation-item__icon, .nav-tree__link.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/base/mixins.

**Consumers:**  
src/lib/components/layout/snippets/helpers/NavTree.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/helpers/NavTree.svelte.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/components/layout/snippets/helpers/NavTree.svelte`

**Role:**  
Svelte component NavTree; renders/imports component tags Record.

**Key contents:**  
Exports NavTree; no obvious owned data.

**Imports/dependencies:**  
$lib/wiki/navigation, $lib/wiki/icons, $lib/utils/paths, ./NavTree.svelte, ./NavTree.scss.

**Consumers:**  
src/lib/components/layout/snippets/Sidebar.svelte, src/lib/components/layout/snippets/helpers/NavTree.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/components/layout/snippets/helpers/NavTree.scss.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/lib/components/search/SearchFilterGroup.svelte`

**Role:**  
Svelte component SearchFilterGroup.

**Key contents:**  
Exports SearchFilterGroup; no obvious owned data.

**Imports/dependencies:**  
svelte, $lib/styles/mixins, $lib/styles/panels.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unresolved.

**Concerns:**  
imports at least one missing or case-mismatched internal target.

**Confidence:**  
high; imports include unresolved targets.
