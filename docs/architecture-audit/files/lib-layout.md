# Lib Layout

Files in this report: 6.

## `src/lib/layout/Wiki.scss`

**Role:**  
SCSS styles for Wiki, including selectors .wiki__content.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/layout/Wiki.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/layout/Wiki.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/layout/Wiki.svelte`

**Role:**  
Svelte component Wiki; renders/imports component tags Sidebar.

**Key contents:**  
Exports Wiki; no obvious owned data.

**Imports/dependencies:**  
./snippets/Sidebar.svelte, ./Wiki.scss.

**Consumers:**  
src/routes/+layout.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/layout/Wiki.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context; contains root-absolute asset or route path; check base-path handling.

**Confidence:**  
high.

## `src/lib/layout/snippets/Sidebar-Data.ts`

**Role:**  
TypeScript/JavaScript module exporting sidebarContent.

**Key contents:**  
Exports sidebarContent; new sidebar navigation labels, URLs, icons, grouping.

**Imports/dependencies:**  
./Sidebar-Types.

**Consumers:**  
no importer found.

**Data ownership:**  
new sidebar navigation labels, URLs, icons, grouping.

**Related files:**  
src/lib/layout/snippets/Sidebar-Types.ts, src/lib/layout/snippets/Sidebar.scss, src/lib/layout/snippets/Sidebar.svelte.

**Current status:**  
likely-active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/layout/snippets/Sidebar-Types.ts`

**Role:**  
TypeScript/JavaScript module exporting SidebarMainItem, SidebarBrowseItem, SidebarResourceItem, SidebarContent.

**Key contents:**  
Exports SidebarMainItem, SidebarBrowseItem, SidebarResourceItem, SidebarContent; no obvious owned data.

**Imports/dependencies:**  
$lib/helpers/Icon-Types.

**Consumers:**  
src/lib/layout/snippets/Sidebar-Data.ts, src/lib/layout/snippets/Sidebar.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/layout/snippets/Sidebar-Data.ts, src/lib/layout/snippets/Sidebar.scss, src/lib/layout/snippets/Sidebar.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/layout/snippets/Sidebar.scss`

**Role:**  
SCSS styles for Sidebar, including selectors .sidebar, .sidebar__section, .sidebar__section--resources, .sidebar__heading, .sidebar__list, .sidebar__item, .sidebar__tree-item, .sidebar__link.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/layout/snippets/Sidebar.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/layout/snippets/Sidebar-Data.ts, src/lib/layout/snippets/Sidebar-Types.ts, src/lib/layout/snippets/Sidebar.svelte.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.

## `src/lib/layout/snippets/Sidebar.svelte`

**Role:**  
Svelte component Sidebar; renders/imports component tags Icon.

**Key contents:**  
Exports Sidebar; no obvious owned data.

**Imports/dependencies:**  
$app/state, $lib/helpers/Icon.svelte, ./Sidebar-data, ./Sidebar-Types, ./Sidebar.scss.

**Consumers:**  
src/lib/layout/Wiki.svelte.

**Data ownership:**  
none detected.

**Related files:**  
src/lib/layout/snippets/Sidebar-Data.ts, src/lib/layout/snippets/Sidebar-Types.ts, src/lib/layout/snippets/Sidebar.scss.

**Current status:**  
active.

**Concerns:**  
new high-priority implementation area per user context.

**Confidence:**  
high.
