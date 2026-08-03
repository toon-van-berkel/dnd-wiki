/*  
    Location: src/lib/typescript/components/sidebar/sidebar-types.ts
    use:
*/

import type { LinkPath } from '$lib/typescript/data/_index_';

export type SidebarNode = {
	path: LinkPath;
	children: readonly SidebarNode[];
};

export type SidebarSection = {
	title: string;
	roots: readonly SidebarNode[];
};

export type SidebarDataType = {
	sections: readonly SidebarSection[];
};
