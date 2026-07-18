// site\src\lib\layout\snippets\Sidebar-Types.ts
import type { IconReference } from '$lib/helpers/Icon-Types';

export type SidebarMainItem = {
	name: string;
	url: string;
	icon: IconReference;
};

export type SidebarBrowseItem = {
	name: string;
	url: string;
	icon?: IconReference;
	children?: SidebarBrowseItem[];
};

export type SidebarResourceItem = {
	name: string;
	url: string;
	icon: IconReference;
};

export type SidebarContent = {
	main: SidebarMainItem[];
	browse: SidebarBrowseItem[];
	resources: SidebarResourceItem[];
};