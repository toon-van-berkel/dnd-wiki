import { classes } from "./classes/classes";
import { species } from "./species/species";

export type NavigationItem = {
	title: string;
	href: string;
	description?: string;
	tags?: string[];
	icon?: string[];
	children?: NavigationItem[];
};

// This file controls sidebar order and nesting only. Article content lives in src/routes.
export const navigation: NavigationItem[] = [
	species,
	classes,
	{
		title: 'Rules',
		href: '/rules',
		description: 'House rules and table rulings.',
		children: [
			{
				title: 'Combat',
				href: '/',
				description: '',
				children: [
					{
						title: 'Bonus Actions',
						href: '/',
						description: '',
						children: [
							{
								title: 'Bonus Actions Overview',
								href: '/',
								description: '',
							},
							{
								title: 'Bonus Action Features',
								href: '/',
								description: '',
								children: [
									{
										title: 'Cunning Action',
										href: '/',
										description: ''
									},
									{
										title: 'Step of the Wind',
										href: '/',
										description: ''
									},
									{
										title: 'Nimble Escape',
										href: '/',
										description: ''
									},
									{
										title: 'Expeditious Retreat',
										href: '/',
										description: ''
									}
								]
							}
						]
					}
				]
			},
			{
				title: 'Movement',
				href: '/rules/movement',
				description: 'Positioning, difficult terrain, and travel rulings.'
			},
			{
				title: 'Fighting',
				href: '/rules/fighting',
				description: 'Combat rulings, critical hits, and flanking.'
			}
		]
	},
	{
		title: 'Monsters',
		href: '/monsters',
		description: 'Creatures discovered during the campaigns.'
	},
	{
		title: 'Locations',
		href: '/locations',
		description: 'Places, settlements, and regions.'
	}
];

export function findNavigationItem(
	href: string,
	items: NavigationItem[] = navigation
): NavigationItem | undefined {
	for (const item of items) {
		if (item.href === href) return item;

		if (item.children) {
			const match = findNavigationItem(href, item.children);
			if (match) return match;
		}
	}

	return undefined;
}

export function getNavigationChildren(href: string): NavigationItem[] {
	return findNavigationItem(href)?.children ?? [];
}
