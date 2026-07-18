import type { PageRegistryEntry } from '../Registry-Types';

export const rulePages = [
	{
		id: 'rules',
		title: 'Rules',
		href: '/rules',
		description:
			'Custom rulings used at our table. These pages summarize how we resolve common situations without reproducing book text.',
		eyebrow: 'House rules',
		icon: 'iconsList.entity.book',
		searchable: false,
		navigation: true
	},
	{
		id: 'rules--movement',
		title: 'Movement',
		href: '/rules/movement',
		description: 'Table rulings for tactical positioning, hazardous terrain, and travel.',
		eyebrow: 'Rule page',
		parentId: 'rules',
		icon: 'iconsList.movement.walking',
		tags: ['combat', 'travel', 'movement'],
		keywords: ['speed', 'terrain', 'positioning', 'exploration'],
		navigation: true
	},
	{
		id: 'rules--fighting',
		title: 'Fighting',
		href: '/rules/fighting',
		description: 'Combat rulings intended to keep encounters tactical, quick, and easy to understand.',
		eyebrow: 'Rule page',
		parentId: 'rules',
		icon: 'iconsList.game.combat',
		tags: ['combat', 'melee', 'ranged'],
		keywords: ['critical hits', 'flanking', 'attacks'],
		navigation: true
	}
] satisfies PageRegistryEntry[];
