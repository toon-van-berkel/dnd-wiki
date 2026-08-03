/*  
    Location: src/lib/typescript/components/navbar/navbar.ts
    use:
*/

import type { NavbarDataType } from './navbar-types';

export const navbarData = {
	logoPath: 'internals.website.homepage',
	searchPath: 'internals.utility.search',
	actions: [
		{
			path: 'externals.discord.homepage',
			label: 'Discord'
		},
		{
			path: 'externals.youtube.homepage',
			label: 'YouTube'
		},
		{
			path: 'internals.utility.preferences',
			label: 'Preferences'
		}
	]
} as const satisfies NavbarDataType;
