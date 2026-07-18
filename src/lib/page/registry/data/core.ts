import type { PageRegistryEntry } from '../Registry-Types';

export const corePages = [
	{
		id: 'home',
		title: 'Rules for our table',
		href: '/',
		description:
			'A practical campaign wiki for our players. Use it as the source of truth for table rulings, character options, and campaign-specific exceptions.',
		eyebrow: 'D&D Portal wiki',
		icon: 'iconsList.util.home',
		searchable: false
	},
	{
		id: 'search',
		title: 'Search the Wiki',
		href: '/search',
		description:
			'Search individual rules, character options, spells, equipment, creatures, locations, and other Wiki content.',
		eyebrow: 'Wiki search',
		icon: 'iconsList.util.search',
		searchable: false
	},
	{
		id: 'preferences',
		title: 'Preferences',
		href: '/preferences',
		description: 'Set browser-local Wiki preferences for campaign availability context.',
		eyebrow: 'Settings',
		icon: 'iconsList.util.cog',
		searchable: false
	},
	{
		id: 'monsters',
		title: 'Monsters',
		href: '/monsters',
		description: 'A player-safe bestiary of creatures encountered during our campaigns.',
		eyebrow: 'Bestiary',
		icon: 'iconsList.game.monster',
		searchable: false,
		navigation: true
	},
	{
		id: 'locations',
		title: 'Locations',
		href: '/locations',
		description:
			'Settlements, regions, landmarks, and other places discovered in the campaign world.',
		eyebrow: 'World guide',
		icon: 'iconsList.entity.location',
		searchable: false,
		navigation: true
	}
] satisfies PageRegistryEntry[];
