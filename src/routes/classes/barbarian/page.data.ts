// site/src/lib/data/classes/barbarian.ts
import type { ClassProgressionData } from '$lib/pages/ClassProgression/ClassProgression-Types';
import type { ClassTraitsData } from '$lib/pages/ClassTraits/ClassTraits-Types';

export const barbarianProgression = {
	caption: 'The Barbarian',

	description:
		'The Barbarian table shows the features, proficiency bonus, rage uses, and rage damage gained at each level.',

	metrics: [
		{
			key: 'rages',
			label: 'Rages'
		},
		{
			key: 'rageDamage',
			label: 'Rage Damage',
			shortLabel: 'Rage damage'
		}
	],

	rows: [
		{
			level: 1,
			proficiencyBonus: 2,
			features: [
				{ label: 'Rage', href: '#rage' },
				{
					label: 'Unarmored Defense',
					href: '#unarmored-defense'
				}
			],
			values: {
				rages: 2,
				rageDamage: '+2'
			}
		},
		{
			level: 2,
			proficiencyBonus: 2,
			features: [
				{
					label: 'Reckless Attack',
					href: '#reckless-attack'
				},
				{
					label: 'Danger Sense',
					href: '#danger-sense'
				}
			],
			values: {
				rages: 2,
				rageDamage: '+2'
			}
		},
		{
			level: 3,
			proficiencyBonus: 2,
			features: [
				{
					label: 'Primal Path',
					href: '#primal-path'
				},
				{
					label: 'Primal Knowledge',
					href: '#primal-knowledge',
					optional: true
				}
			],
			values: {
				rages: 3,
				rageDamage: '+2'
			}
		},
		{
			level: 4,
			proficiencyBonus: 2,
			features: [
				{
					label: 'Ability Score Improvement',
					href: '#ability-score-improvement'
				}
			],
			values: {
				rages: 3,
				rageDamage: '+2'
			}
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [
				{
					label: 'Extra Attack',
					href: '#extra-attack'
				},
				{
					label: 'Fast Movement',
					href: '#fast-movement'
				}
			],
			values: {
				rages: 3,
				rageDamage: '+2'
			}
		},
		{
			level: 6,
			proficiencyBonus: 3,
			features: [
				{
					label: 'Primal Path feature',
					href: '#primal-path'
				}
			],
			values: {
				rages: 4,
				rageDamage: '+2'
			}
		},
		{
			level: 7,
			proficiencyBonus: 3,
			features: [
				{
					label: 'Feral Instinct',
					href: '#feral-instinct'
				},
				{
					label: 'Instinctive Pounce',
					href: '#instinctive-pounce',
					optional: true
				}
			],
			values: {
				rages: 4,
				rageDamage: '+2'
			}
		},
		{
			level: 8,
			proficiencyBonus: 3,
			features: [
				{
					label: 'Ability Score Improvement',
					href: '#ability-score-improvement'
				}
			],
			values: {
				rages: 4,
				rageDamage: '+2'
			}
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Brutal Critical',
					href: '#brutal-critical'
				}
			],
			values: {
				rages: 4,
				rageDamage: '+3'
			}
		},
		{
			level: 10,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Primal Path feature',
					href: '#primal-path'
				},
				{
					label: 'Primal Knowledge',
					href: '#primal-knowledge',
					optional: true
				}
			],
			values: {
				rages: 4,
				rageDamage: '+3'
			}
		},
		{
			level: 11,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Relentless Rage',
					href: '#relentless-rage'
				}
			],
			values: {
				rages: 4,
				rageDamage: '+3'
			}
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Ability Score Improvement',
					href: '#ability-score-improvement'
				}
			],
			values: {
				rages: 5,
				rageDamage: '+3'
			}
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Brutal Critical',
					href: '#brutal-critical'
				}
			],
			values: {
				rages: 5,
				rageDamage: '+3'
			}
		},
		{
			level: 14,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Primal Path feature',
					href: '#primal-path'
				}
			],
			values: {
				rages: 5,
				rageDamage: '+3'
			}
		},
		{
			level: 15,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Persistent Rage',
					href: '#persistent-rage'
				}
			],
			values: {
				rages: 5,
				rageDamage: '+3'
			}
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Ability Score Improvement',
					href: '#ability-score-improvement'
				}
			],
			values: {
				rages: 5,
				rageDamage: '+4'
			}
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Brutal Critical',
					href: '#brutal-critical'
				}
			],
			values: {
				rages: 6,
				rageDamage: '+4'
			}
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Indomitable Might',
					href: '#indomitable-might'
				}
			],
			values: {
				rages: 6,
				rageDamage: '+4'
			}
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Ability Score Improvement',
					href: '#ability-score-improvement'
				}
			],
			values: {
				rages: 6,
				rageDamage: '+4'
			}
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Primal Champion',
					href: '#primal-champion'
				}
			],
			values: {
				rages: 'Unlimited',
				rageDamage: '+4'
			}
		}
	]
} satisfies ClassProgressionData;

export const barbarianCoreTraits = {
	imageHref: '/classes/barbarian',
	imageAlt:
		'A battle-hardened Barbarian holding a heavy axe in a stormy mountain landscape.',
	imageCaption:
		'A battle-hardened Barbarian stands ready with a heavy axe beneath a storm-darkened sky.',
	imagePosition: 'top right',

	rows: [
		{
			label: 'Primary Ability',
			value: [
				{
					text: 'Strength'
				}
			]
		},
		{
			label: 'Hit Point Die',
			value: [
				{
					text: 'd12 per Barbarian level'
				}
			]
		},
		{
			label: 'Saving Throw Proficiencies',
			value: [
				{
					text: 'Strength and Constitution'
				}
			]
		},
		{
			label: 'Skill Proficiencies',
			value: [
				{
					text: 'Choose two: ',
					variant: 'emphasis'
				},
				{
					text:
						'Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival',
					variant: 'accent'
				}
			]
		},
		{
			label: 'Weapon Proficiencies',
			value: [
				{
					text:
						'Simple weapons and martial weapons'
				}
			]
		},
		{
			label: 'Armor Proficiencies',
			value: [
				{
					text:
						'Light armor, medium armor, and shields'
				}
			]
		},
		{
			label: 'Starting Equipment',
			value: [
				{
					text: 'Choose one:\n• A greataxe\n• Any martial melee weapon\n\nChoose one:\n• Two handaxes\n• Any simple weapon\n\nYou also receive:\n• An explorer’s pack\n• Four javelins'
				}
			]
		}
	]
} satisfies ClassTraitsData;