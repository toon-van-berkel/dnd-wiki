/*  
    Location: src/lib/typescript/components/navbar/navbar-types.ts
    use:
*/

import type { LinkPath } from '$lib/typescript/data/_index_';

export type NavbarAction = {
	path: LinkPath;
	label: string;
};

export type NavbarDataType = {
	logoPath: LinkPath;
	searchPath: LinkPath;
	actions: readonly NavbarAction[];
};
