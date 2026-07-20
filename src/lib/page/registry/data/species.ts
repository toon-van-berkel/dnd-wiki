import type { PageRegistryEntry } from '../Registry-Types';

export const speciesPages = [
	{
		id: 'species',
		title: 'Species',
		href: '/species',
		description: 'Playable peoples and campaign availability.',
		eyebrow: 'Character options',
		icon: 'iconsList.entity.person',
		searchable: false,
		navigation: true
	},
	{
		id: 'species--human',
		title: 'Human',
		href: '/species/human',
		description: 'Adaptable people found throughout the setting.',
		eyebrow: 'Species option',
		parentId: 'species',
		icon: 'iconsList.entity.person',
		aliases: ['humans'],
		keywords: ['lineage', 'race']
	},
	{
		id: 'species--elf',
		title: 'Elf',
		href: '/species/elf',
		description: 'Long-lived people with several distinct cultures.',
		eyebrow: 'Species option',
		parentId: 'species',
		icon: 'iconsList.entity.person',
		aliases: ['elves'],
		keywords: ['lineage', 'race']
	},
	{
		id: 'species--chakraborn',
		title: 'Chakraborn',
		href: '/species/chakraborn',
		description:
			'A humanoid species born with an unusually powerful chakra network and an instinctive connection to movement, supernatural energy and fate.',
		eyebrow: 'Species',
		kind: 'species',
		parentId: 'species',
		icon: 'iconsList.monster.humanoid',
		tags: [
			'Species',
			'Chakraborn',
			'Chakra',
			'Humanoid',
			'Dexterity',
			'Wisdom',
			'Fortune',
			'Homebrew'
		],
		keywords: [
			'Chakraborn',
			'Chakra',
			'Species',
			'Race',
			'Humanoid',
			'Dexterity',
			'Wisdom',
			'Fortune',
			'Thread of Fate',
			'Chakra Sense',
			'Chakra-Tuned Movement',
			'Shinobi',
			'Homebrew'
		],
		aliases: ['chakra born', 'chakra-born'],
		authorId: 'toon'
	},
	{
		id: 'species--elf--astral-elf',
		title: 'Astral Elf',
		href: '/species/elf/astral-elf',
		description: 'Elves shaped by life beyond the ordinary world.',
		eyebrow: 'Species option',
		parentId: 'species--elf',
		icon: 'iconsList.entity.person',
		aliases: ['astral elves'],
		keywords: ['lineage', 'race', 'elf']
	}
] satisfies PageRegistryEntry[];
