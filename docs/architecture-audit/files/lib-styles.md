# Lib Styles

Files in this report: 11.

## `src/lib/styles/_breakpoints.scss`

**Role:**  
SCSS styles for _breakpoints.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/AvailabilityBadges.scss, src/lib/components/WikiPreferences.scss, src/lib/components/WikiTable.scss, src/lib/components/layout/Panel.svelte, src/lib/components/layout/snippets/Header.scss, src/lib/components/layout/snippets/Sidebar.scss, src/lib/styles/wiki-layout.scss, src/routes/about/About.scss, src/routes/search/Search.scss.

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

## `src/lib/styles/_buttons.scss`

**Role:**  
SCSS styles for _buttons.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
mixins.

**Consumers:**  
src/lib/components/forms/ActionButton.svelte, src/routes/about/About.scss, src/routes/search/Search.scss.

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

## `src/lib/styles/_forms.scss`

**Role:**  
SCSS styles for _forms.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
mixins.

**Consumers:**  
src/lib/components/forms/SelectField.svelte, src/routes/search/Search.scss.

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

## `src/lib/styles/_panels.scss`

**Role:**  
SCSS styles for _panels.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
./base/mixins.

**Consumers:**  
src/lib/components/AvailabilityBadges.scss, src/lib/components/ChildLinkGrid.scss, src/lib/components/PageSection.scss, src/lib/components/WikiTable.scss, src/lib/components/feedback/EmptyState.svelte, src/lib/components/layout/Panel.svelte, src/lib/components/search/SearchFilterGroup.svelte, src/routes/about/About.scss, src/routes/search/Search.scss.

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

## `src/lib/styles/base/_global.scss`

**Role:**  
SCSS styles for _global, including selectors .sr-only.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
../tokens.

**Consumers:**  
src/lib/styles/styles.scss.

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

## `src/lib/styles/base/_mixins.scss`

**Role:**  
SCSS styles for _mixins.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/ChildLinkGrid.scss, src/lib/components/WikiTable.scss, src/lib/components/layout/snippets/Sidebar.scss, src/lib/components/layout/snippets/helpers/NavTree.scss, src/lib/page/layout/navigation/PageHeader.scss, src/lib/styles/_panels.scss, src/lib/styles/styles.scss, src/lib/styles/wiki-layout.scss, src/routes/search/Search.scss.

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

## `src/lib/styles/base/_reset.scss`

**Role:**  
SCSS styles for _reset.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/styles/styles.scss.

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

## `src/lib/styles/layout/_wiki.scss`

**Role:**  
SCSS styles for _wiki.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/styles/styles.scss.

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

## `src/lib/styles/styles.scss`

**Role:**  
SCSS styles for styles.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
./base/global, ./base/mixins, ./base/reset, ./layout/wiki.

**Consumers:**  
src/routes/+layout.svelte.

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

## `src/lib/styles/tokens.scss`

**Role:**  
SCSS styles for tokens.

**Key contents:**  
Exports none detected; global design tokens, party color variables, availability color variables.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/styles/base/_global.scss.

**Data ownership:**  
global design tokens, party color variables, availability color variables.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/styles/wiki-layout.scss`

**Role:**  
SCSS styles for wiki-layout, including selectors .wiki-shell, .sidebar-toggle, .wiki-shell__grid--sidebar-collapsed, .wiki-shell__sidebar-slot, .wiki-shell, .sidebar-toggle, .wiki-shell, .sidebar-toggle.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/breakpoints, $lib/styles/base/mixins.

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
