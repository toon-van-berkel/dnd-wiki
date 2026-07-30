/*  
    Location: src\lib\typescript\pages\pageBuilder.ts
    use:
*/
import * as components from '$lib/typescript/components/_index_';

export const page = {
    sidebar: components.sidebarData,
    footer: components.footerData
};

export function buildPage() {
    return page;
}
