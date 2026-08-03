/*  
    Location: src\lib\typescript\pages\pageBuilder.ts
    use:
*/
import * as components from '$lib/typescript/components/_index_';

export const page = {
	navbar: components.navbarData,
	sidebar: components.sidebarData,
	footer: components.footerData
};

export function buildPage() {
    return page;
}
