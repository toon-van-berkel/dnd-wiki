// site\src\lib\layout\snippets\Sidebar-data.ts
import type { SidebarContent } from './Sidebar-Types';

export const sidebarContent: SidebarContent = {
	main: [
		{
			name: 'Wiki home',
			url: '/',
			icon: 'iconsList.util.home'
		},
		{
			name: 'Search',
			url: '/search',
			icon: 'iconsList.util.search'
		},
		{
			name: 'Preferences',
			url: '/preferences',
			icon: 'iconsList.util.cog'
		}
	],

	browse: [
		{
			name: 'Rules',
			url: '/rules',
			icon: 'iconsList.entity.book',
			children: [
				{
					name: 'Movement',
					url: '/rules/movement',
					icon: 'iconsList.movement.walking',
					children: [
						{
							name: 'Speed',
							url: '/rules/movement/speed',
							icon: 'iconsList.combat.initiative'
						}
					]
				},
				{
					name: 'Fighting',
					url: '/rules/fighting',
					icon: 'iconsList.game.combat'
				}
			]
		},
		{
			name: 'Monsters',
			url: '/monsters',
			icon: 'iconsList.game.monster'
		},
		{
			name: 'Locations',
			url: '/locations',
			icon: 'iconsList.entity.location'
		},
		{
			name: 'Classes',
			url: '/classes',
			icon: 'iconsList.game.character',
			children: [
				{
					name: 'Artificer',
					url: '/classes/artificer',
					icon: 'iconsList.class.artificer'
				},
				{
					name: 'Barbarian',
					url: '/classes/barbarian',
					icon: 'iconsList.class.barbarian'
				}
			]
		},
		{
			name: 'Species',
			url: '/species',
			icon: 'iconsList.entity.person',
			children: [
				{
					name: 'Dwarf',
					url: '/species/dwarf'
				},
				{
					name: 'Elf',
					url: '/species/elf'
				}
			]
		}
	],

	resources: [
		{
			name: 'Sources',
			url: '/sources',
			icon: 'iconsList.game.source-book'
		},
		{
			name: 'Changelog',
			url: '/changelog',
			icon: 'iconsList.entity.archive'
		},
		{
			name: 'Credits',
			url: '/credits',
			icon: 'iconsList.entity.person'
		}
	]
};