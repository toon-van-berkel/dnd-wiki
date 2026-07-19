# Lib Page

Files in this report: 20.

## `src/lib/page/Metadata-Types.ts`

**Role:**  
TypeScript/JavaScript module exporting PageMetadata.

**Key contents:**  
Exports PageMetadata; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/Metadata.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/Metadata.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/Metadata.svelte`

**Role:**  
Svelte component Metadata; writes document head metadata.

**Key contents:**  
Exports Metadata; no obvious owned data.

**Imports/dependencies:**  
./Metadata-Types.

**Consumers:**  
src/routes/+page.svelte, src/routes/classes/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/Metadata-Types.ts.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/main/other-pages.md`

**Role:**  
Markdown documentation or project guidance.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unresolved.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/main/related-pages.md`

**Role:**  
Markdown documentation or project guidance.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unresolved.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/PageHeader-Types.ts`

**Role:**  
TypeScript/JavaScript module exporting PageHeader.

**Key contents:**  
Exports PageHeader; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/PageHeader.scss, src/lib/page/layout/navigation/PageHeader.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/PageHeader.scss`

**Role:**  
SCSS styles for PageHeader, including selectors .page__header.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
$lib/styles/base/mixins.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/PageHeader-Types.ts, src/lib/page/layout/navigation/PageHeader.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/PageHeader.svelte`

**Role:**  
Svelte component PageHeader; renders/imports component tags AllowedIn, Tags, BreadCrumbs.

**Key contents:**  
Exports PageHeader; no obvious owned data.

**Imports/dependencies:**  
$app/state, ./PageHeader-Types, ./snippets/AllowedIn.svelte, ./snippets/Tags.svelte, ./snippets/Breadcrumbs.svelte, ./snippets/AllowedIn-helper, ./snippets/Tags-helpers, ./PageHeader.scss.

**Consumers:**  
src/routes/+page.svelte, src/routes/classes/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/movement/+page.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/PageHeader-Types.ts, src/lib/page/layout/navigation/PageHeader.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts`

**Role:**  
TypeScript/JavaScript module exporting Availability.

**Key contents:**  
Exports Availability; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/snippets/AllowedIn-data.ts, src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/AllowedIn.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/AllowedIn-data.ts, src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/AllowedIn.svelte, src/lib/page/layout/navigation/snippets/Allowedin.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/AllowedIn-data.ts`

**Role:**  
TypeScript/JavaScript module exporting allowedIn.

**Key contents:**  
Exports allowedIn; no obvious owned data.

**Imports/dependencies:**  
$lib/config/parties-helper, ./AllowedIn-Types.

**Consumers:**  
src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts, src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/AllowedIn.svelte, src/lib/page/layout/navigation/snippets/Allowedin.scss.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; new high-priority implementation area per user context.

**Confidence:**  
high; imports include unresolved targets.

## `src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts`

**Role:**  
TypeScript/JavaScript module exporting getAllowedIn.

**Key contents:**  
Exports getAllowedIn; no obvious owned data.

**Imports/dependencies:**  
./AllowedIn-data, ./AllowedIn-Types.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts, src/lib/page/layout/navigation/snippets/AllowedIn-data.ts, src/lib/page/layout/navigation/snippets/AllowedIn.svelte, src/lib/page/layout/navigation/snippets/Allowedin.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/AllowedIn.svelte`

**Role:**  
Svelte component AllowedIn.

**Key contents:**  
Exports AllowedIn; no obvious owned data.

**Imports/dependencies:**  
./AllowedIn-Types, ./Allowedin.scss.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts, src/lib/page/layout/navigation/snippets/AllowedIn-data.ts, src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/Allowedin.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Allowedin.scss`

**Role:**  
SCSS styles for Allowedin, including selectors .allowedin.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/snippets/AllowedIn.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts, src/lib/page/layout/navigation/snippets/AllowedIn-data.ts, src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/AllowedIn.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Breadcrumbs-Type.ts`

**Role:**  
TypeScript/JavaScript module exporting Breadcrumbs.

**Key contents:**  
Exports Breadcrumbs; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/snippets/Breadcrumbs-helpers.ts.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Breadcrumbs-helpers.ts`

**Role:**  
TypeScript/JavaScript module exporting getUrl, handleBack.

**Key contents:**  
Exports getUrl, handleBack; no obvious owned data.

**Imports/dependencies:**  
$app/navigation, ./Breadcrumbs-Type.

**Consumers:**  
src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Breadcrumbs-Type.ts, src/lib/page/layout/navigation/snippets/Breadcrumbs.scss, src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Breadcrumbs.scss`

**Role:**  
SCSS styles for Breadcrumbs, including selectors .breadcrumbs.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Breadcrumbs-Type.ts, src/lib/page/layout/navigation/snippets/Breadcrumbs-helpers.ts, src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte`

**Role:**  
Svelte component Breadcrumbs.

**Key contents:**  
Exports Breadcrumbs; no obvious owned data.

**Imports/dependencies:**  
$app/state, ./Breadcrumbs-helpers, ./Breadcrumbs.scss.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Breadcrumbs-Type.ts, src/lib/page/layout/navigation/snippets/Breadcrumbs-helpers.ts, src/lib/page/layout/navigation/snippets/Breadcrumbs.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Tags-data.ts`

**Role:**  
TypeScript/JavaScript module exporting tags.

**Key contents:**  
Exports tags; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/snippets/Tags-helpers.ts.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Tags-helpers.ts, src/lib/page/layout/navigation/snippets/Tags.scss, src/lib/page/layout/navigation/snippets/Tags.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Tags-helpers.ts`

**Role:**  
TypeScript/JavaScript module exporting getTags.

**Key contents:**  
Exports getTags; no obvious owned data.

**Imports/dependencies:**  
$lib/utils/index, ./Tags-data.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Tags-data.ts, src/lib/page/layout/navigation/snippets/Tags.scss, src/lib/page/layout/navigation/snippets/Tags.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Tags.scss`

**Role:**  
SCSS styles for Tags, including selectors .tags.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/page/layout/navigation/snippets/Tags.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Tags-data.ts, src/lib/page/layout/navigation/snippets/Tags-helpers.ts, src/lib/page/layout/navigation/snippets/Tags.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/page/layout/navigation/snippets/Tags.svelte`

**Role:**  
Svelte component Tags.

**Key contents:**  
Exports Tags; no obvious owned data.

**Imports/dependencies:**  
./Tags.scss.

**Consumers:**  
src/lib/page/layout/navigation/PageHeader.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/page/layout/navigation/snippets/Tags-data.ts, src/lib/page/layout/navigation/snippets/Tags-helpers.ts, src/lib/page/layout/navigation/snippets/Tags.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.
