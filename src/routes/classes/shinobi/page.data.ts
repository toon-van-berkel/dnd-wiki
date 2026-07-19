// site\src\routes\classes\shinobi\page.data.ts
import type { ClassProgressionData } from '$lib/pages/ClassProgression/ClassProgression-Types';
import type { ClassTraitsData } from '$lib/pages/ClassTraits/ClassTraits-Types';

export const shinobiProgression = {
	caption: 'The Shinobi',
	description:
		'The Shinobi table shows the features, Chakra Points, techniques known, highest technique rank, and Fortune Die gained at each level.',
	metrics: [
		{ key: 'chakra', label: 'Chakra Points', shortLabel: 'Chakra' },
		{ key: 'techniques', label: 'Techniques Known', shortLabel: 'Techniques' },
		{ key: 'maxRank', label: 'Maximum Rank', shortLabel: 'Max rank' },
		{ key: 'fortune', label: 'Fortune Die', shortLabel: 'Fortune' }
	],
	rows: [
		{
			level: 1,
			proficiencyBonus: 2,
			features: [
				{ label: 'Shinobi Training', href: '#shinobi-training' },
				{ label: 'Chakra Pool', href: '#chakra-pool' },
				{ label: 'Chakra Origin', href: '#chakra-origin' },
				{ label: 'Chakra Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 3, techniques: 3, maxRank: 'I', fortune: '—' }
		},
		{
			level: 2,
			proficiencyBonus: 2,
			features: [
				{ label: 'Shinobi Step', href: '#shinobi-step' },
				{ label: 'Fortune Dice', href: '#fortune-dice' }
			],
			values: { chakra: 4, techniques: 4, maxRank: 'I', fortune: 'd6' }
		},
		{
			level: 3,
			proficiencyBonus: 2,
			features: [{ label: 'Shinobi Path', href: '#shinobi-path' }],
			values: { chakra: 5, techniques: 4, maxRank: 'I', fortune: 'd6' }
		},
		{
			level: 4,
			proficiencyBonus: 2,
			features: [
				{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }
			],
			values: { chakra: 6, techniques: 5, maxRank: 'I', fortune: 'd6' }
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [
				{ label: 'Extra Attack', href: '#extra-attack' },
				{ label: 'Chakra-Infused Strike', href: '#chakra-infused-strike' },
				{ label: 'Developed Manifestation', href: '#chakra-origin' },
				{ label: 'Rank II Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 8, techniques: 5, maxRank: 'II', fortune: 'd6' }
		},
		{
			level: 6,
			proficiencyBonus: 3,
			features: [
				{ label: 'Shinobi Path Feature', href: '#shinobi-path' },
				{ label: 'Improved Fortune', href: '#fortune-dice' }
			],
			values: { chakra: 9, techniques: 6, maxRank: 'II', fortune: 'd8' }
		},
		{
			level: 7,
			proficiencyBonus: 3,
			features: [{ label: 'Evasion', href: '#evasion' }],
			values: { chakra: 10, techniques: 6, maxRank: 'II', fortune: 'd8' }
		},
		{
			level: 8,
			proficiencyBonus: 3,
			features: [
				{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }
			],
			values: { chakra: 11, techniques: 7, maxRank: 'II', fortune: 'd8' }
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [
				{ label: 'Chakra Movement', href: '#chakra-movement' },
				{ label: 'Advanced Manifestation', href: '#chakra-origin' },
				{ label: 'Rank III Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 13, techniques: 7, maxRank: 'III', fortune: 'd8' }
		},
		{
			level: 10,
			proficiencyBonus: 4,
			features: [{ label: 'Shinobi Path Feature', href: '#shinobi-path' }],
			values: { chakra: 14, techniques: 8, maxRank: 'III', fortune: 'd8' }
		},
		{
			level: 11,
			proficiencyBonus: 4,
			features: [
				{ label: 'Chakra-Infused Strike (2d6)', href: '#chakra-infused-strike' },
				{ label: 'Greater Fortune', href: '#fortune-dice' }
			],
			values: { chakra: 15, techniques: 8, maxRank: 'III', fortune: 'd10' }
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [
				{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }
			],
			values: { chakra: 16, techniques: 9, maxRank: 'III', fortune: 'd10' }
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [
				{ label: 'Unbroken Focus', href: '#unbroken-focus' },
				{ label: 'Greater Manifestation', href: '#chakra-origin' },
				{ label: 'Rank IV Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 18, techniques: 9, maxRank: 'IV', fortune: 'd10' }
		},
		{
			level: 14,
			proficiencyBonus: 5,
			features: [{ label: 'Shinobi Path Feature', href: '#shinobi-path' }],
			values: { chakra: 19, techniques: 10, maxRank: 'IV', fortune: 'd10' }
		},
		{
			level: 15,
			proficiencyBonus: 5,
			features: [
				{ label: 'Perfect Chakra Control', href: '#perfect-chakra-control' }
			],
			values: { chakra: 20, techniques: 10, maxRank: 'IV', fortune: 'd10' }
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [
				{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }
			],
			values: { chakra: 21, techniques: 11, maxRank: 'IV', fortune: 'd10' }
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [
				{ label: 'Chakra-Infused Strike (3d6)', href: '#chakra-infused-strike' },
				{ label: 'Perfected Manifestation', href: '#chakra-origin' },
				{ label: 'Perfect Fortune', href: '#fortune-dice' },
				{ label: 'Rank V Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 23, techniques: 11, maxRank: 'V', fortune: 'd12' }
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [
				{ label: 'Hidden Technique Mastery', href: '#hidden-technique-mastery' }
			],
			values: { chakra: 24, techniques: 12, maxRank: 'V', fortune: 'd12' }
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [
				{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }
			],
			values: { chakra: 25, techniques: 12, maxRank: 'V', fortune: 'd12' }
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [{ label: 'Kage State', href: '#kage-state' }],
			values: { chakra: 30, techniques: 14, maxRank: 'V', fortune: 'd12' }
		}
	]
} satisfies ClassProgressionData;

export const shinobiCoreTraits = {
	imageHref: '/classes/shinobi',
	imageAlt: 'A Shinobi preparing to strike while channeling chakra.',
	imageCaption:
		'A disciplined Shinobi channels chakra while preparing to move through the battlefield.',
	imagePosition: 'center center',
	rows: [
		{
			label: 'Primary Abilities',
			value: [
				{
					text:
						'Dexterity for attacks and movement; Wisdom for chakra and techniques'
				}
			]
		},
		{
			label: 'Core Resource',
			value: [{ text: 'Chakra Points' }]
		},
		{
			label: 'Resource Recovery',
			value: [
				{
					text:
						'All expended Chakra Points return after a short or long rest'
				}
			]
		},
		{
			label: 'Technique Ability',
			value: [{ text: 'Wisdom' }]
		},
		{
			label: 'Combat Role',
			value: [{ text: 'Mobile striker and adaptable specialist' }]
		},
		{
			label: 'Origin Progression',
			value: [
				{
					text:
						'Chakra Origin manifestations at levels 1, 5, 9, 13, and 17'
				}
			]
		},
		{
			label: 'Subclass Progression',
			value: [
				{
					text:
						'Shinobi Path features at levels 3, 6, 10, and 14'
				}
			]
		}
	]
} satisfies ClassTraitsData;
