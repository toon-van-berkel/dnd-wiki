import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import type {
	CoreTraitsData,
	ProgressionData
} from '$lib/typescript/pages/content-types';

const website = core.internals.website;
const classes = core.internals.classes;
const current = classes.barbarian;

const baseUrl = `${classes.baseUrl}/${current.name.slug}`;
const imageBaseUrl = '/images/classes/barbarian';
const barbarianImages = {
	female: {
		alt: `A female Barbarian standing as a powerful primal
			warrior prepared for battle.`,
		caption: `A Barbarian channels primal force before entering the
			front line of battle.`,
		position: '70% center',
		sources: {
			s: `${imageBaseUrl}/card-female-s.webp`,
			m: `${imageBaseUrl}/card-female-m.webp`,
			l: `${imageBaseUrl}/card-female-l.webp`
		}
	},

	male: {
		alt: `A male Barbarian standing as a powerful primal
			warrior prepared for battle.`,
		caption: `A Barbarian channels primal force before entering the
			front line of battle.`,
		position: '70% center',
		sources: {
			s: `${imageBaseUrl}/card-male-s.webp`,
			m: `${imageBaseUrl}/card-male-m.webp`,
			l: `${imageBaseUrl}/card-male-l.webp`
		}
	}
} as const;

const multiclassingRequirement = [
	{ type: 'text', text: 'You must have a ' },
	{
		type: 'link',
		path: 'internals.rules.abilityScores.strength',
		label: 'Strength'
	},
	{
		type: 'text',
		text: ' score of 13 or higher to '
	},
	{
		type: 'link',
		path: 'internals.rules.characterCreation.multiclassing',
		label: 'multiclass'
	},
	{
		type: 'text',
		text: ' into or out of the Barbarian class.'
	}
] as const;

const coreTraits = {
	traits: [
		{
			label: 'Primary Ability',
			value: [
				{
					type: 'link',
					path: 'internals.rules.abilityScores.strength',
					label: 'Strength'
				}
			]
		},
		{
			label: 'Hit Point Die',
			value: [{ type: 'text', text: 'd12 per Barbarian level' }]
		},
		{
			label: 'Saving Throw Proficiencies',
			value: [
				{
					type: 'link',
					path: 'internals.rules.abilityScores.strength',
					label: 'Strength'
				},
				{ type: 'text', text: ' and ' },
				{
					type: 'link',
					path: 'internals.rules.abilityScores.constitution',
					label: 'Constitution'
				}
			]
		},
		{
			label: 'Skill Proficiencies',
			value: [
				{
					type: 'text',
					text: 'Choose two: '
				},
				{
					type: 'link',
					path: 'internals.rules.skills.animalHandling',
					label: 'Animal Handling'
				},
				{ type: 'text', text: ', ' },
				{
					type: 'link',
					path: 'internals.rules.skills.athletics',
					label: 'Athletics'
				},
				{ type: 'text', text: ', ' },
				{
					type: 'link',
					path: 'internals.rules.skills.intimidation',
					label: 'Intimidation'
				},
				{ type: 'text', text: ', ' },
				{
					type: 'link',
					path: 'internals.rules.skills.nature',
					label: 'Nature'
				},
				{ type: 'text', text: ', ' },
				{
					type: 'link',
					path: 'internals.rules.skills.perception',
					label: 'Perception'
				},
				{ type: 'text', text: ', ' },
				{
					type: 'link',
					path: 'internals.rules.skills.survival',
					label: 'Survival'
				}
			]
		},
		{
			label: 'Weapon Proficiencies',
			value: [
				{
					type: 'link',
					path: 'internals.rules.equipment.simpleWeapons',
					label: 'Simple weapons'
				},
				{ type: 'text', text: ' and ' },
				{
					type: 'link',
					path: 'internals.rules.equipment.martialWeapons',
					label: 'martial weapons'
				}
			]
		},
		{
			label: 'Armor Proficiencies',
			value: [
				{
					type: 'link',
					path: 'internals.rules.equipment.lightArmor',
					label: 'Light armor'
				},
				{ type: 'text', text: ', ' },
				{
					type: 'link',
					path: 'internals.rules.equipment.mediumArmor',
					label: 'medium armor'
				},
				{ type: 'text', text: ', and ' },
				{
					type: 'link',
					path: 'internals.rules.equipment.shields',
					label: 'shields'
				}
			]
		}
	],

	startingEquipment: [
		{
			label: 'Option 1',
			instruction: 'Choose one',
			choices: [
				[
					{
						type: 'link',
						path: 'internals.rules.equipment.greataxe',
						label: 'A greataxe'
					}
				],
				[
					{
						type: 'link',
						path: 'internals.rules.equipment.martialWeapons',
						label: 'any martial melee weapon'
					}
				]
			]
		},
		{
			label: 'Option 2',
			instruction: 'Choose one',
			choices: [
				[
					{
						type: 'link',
						path: 'internals.rules.equipment.handaxes',
						label: 'Two handaxes'
					}
				],
				[
					{
						type: 'link',
						path: 'internals.rules.equipment.simpleWeapons',
						label: 'any simple weapon'
					}
				]
			]
		},
		{
			label: 'Also included',
			items: [
				[
					{
						type: 'link',
						path: 'internals.rules.equipment.explorersPack',
						label: `An explorer's pack`
					}
				],
				[
					{
						type: 'link',
						path: 'internals.rules.equipment.javelins',
						label: 'Four javelins'
					}
				]
			]
		}
	]
} as const satisfies CoreTraitsData;

const barbarianProgression = {
	title: 'The Barbarian',
	heading: 'Barbarian Progression',
	description: `Barbarian level progression from 1st through 20th level.`,
	columns: [
		{
			key: 'level',
			label: 'Level',
			format: 'ordinal'
		},
		{
			key: 'proficiencyBonus',
			label: 'Proficiency Bonus',
			shortLabel: 'PB',
			format: 'signed'
		},
		{
			key: 'features',
			label: 'Features'
		},
		{
			key: 'rages',
			label: 'Rages'
		},
		{
			key: 'rageDamage',
			label: 'Rage Damage',
			format: 'signed'
		}
	],
	rows: [
		{
			level: 1,
			proficiencyBonus: 2,
			features: [
				{ label: 'Rage' },
				{ label: 'Unarmored Defense' }
			],
			values: {
				rages: 2,
				rageDamage: 2
			}
		},
		{
			level: 2,
			proficiencyBonus: 2,
			features: [
				{ label: 'Reckless Attack' },
				{ label: 'Danger Sense' }
			],
			values: {
				rages: 2,
				rageDamage: 2
			}
		},
		{
			level: 3,
			proficiencyBonus: 2,
			features: [
				{ label: 'Primal Path' },
				{
					label: 'Primal Knowledge',
					optional: true
				}
			],
			values: {
				rages: 3,
				rageDamage: 2
			}
		},
		{
			level: 4,
			proficiencyBonus: 2,
			features: [{ label: 'Ability Score Improvement' }],
			values: {
				rages: 3,
				rageDamage: 2
			}
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [
				{ label: 'Extra Attack' },
				{ label: 'Fast Movement' }
			],
			values: {
				rages: 3,
				rageDamage: 2
			}
		},
		{
			level: 6,
			proficiencyBonus: 3,
			features: [{ label: 'Path Feature' }],
			values: {
				rages: 4,
				rageDamage: 2
			}
		},
		{
			level: 7,
			proficiencyBonus: 3,
			features: [
				{ label: 'Feral Instinct' },
				{
					label: 'Instinctive Pounce',
					optional: true
				}
			],
			values: {
				rages: 4,
				rageDamage: 2
			}
		},
		{
			level: 8,
			proficiencyBonus: 3,
			features: [{ label: 'Ability Score Improvement' }],
			values: {
				rages: 4,
				rageDamage: 2
			}
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [{ label: 'Brutal Critical (1 die)' }],
			values: {
				rages: 4,
				rageDamage: 3
			}
		},
		{
			level: 10,
			proficiencyBonus: 4,
			features: [{ label: 'Path Feature' }],
			values: {
				rages: 4,
				rageDamage: 3
			}
		},
		{
			level: 11,
			proficiencyBonus: 4,
			features: [{ label: 'Relentless Rage' }],
			values: {
				rages: 4,
				rageDamage: 3
			}
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [{ label: 'Ability Score Improvement' }],
			values: {
				rages: 5,
				rageDamage: 3
			}
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [{ label: 'Brutal Critical (2 dice)' }],
			values: {
				rages: 5,
				rageDamage: 3
			}
		},
		{
			level: 14,
			proficiencyBonus: 5,
			features: [{ label: 'Path Feature' }],
			values: {
				rages: 5,
				rageDamage: 3
			}
		},
		{
			level: 15,
			proficiencyBonus: 5,
			features: [{ label: 'Persistent Rage' }],
			values: {
				rages: 5,
				rageDamage: 3
			}
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [{ label: 'Ability Score Improvement' }],
			values: {
				rages: 5,
				rageDamage: 4
			}
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [{ label: 'Brutal Critical (3 dice)' }],
			values: {
				rages: 6,
				rageDamage: 4
			}
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [{ label: 'Indomitable Might' }],
			values: {
				rages: 6,
				rageDamage: 4
			}
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [{ label: 'Ability Score Improvement' }],
			values: {
				rages: 6,
				rageDamage: 4
			}
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [{ label: 'Primal Champion' }],
			values: {
				rages: 'Unlimited',
				rageDamage: 4
			}
		}
	]
} as const satisfies ProgressionData;

export const barbarian = {
	page: createInternalPage({
		href: baseUrl,

		img: current.logos.simple,

		images: {
			card: barbarianImages,
			header: barbarianImages
		},

		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Primal warrior',
		descriptions: {
			short: `A primal warrior who turns raw fury into endurance,
				mobility, and brutal melee pressure.`,
			medium: `Explore the ${current.name.normal} class, its rage,
				progression, core features, abilities, and available subclasses.`,
			long: [
				[
					{
						type: 'text',
						text: `Barbarians channel primal forces through Rage, but
							that power is more than ordinary anger.`
					}
				],
				[
					{
						type: 'text',
						text: `Different Barbarians understand Rage through
							spirits, ancestors, pain, wild magic, nature, or the
							deepest part of the self breaking through.`
					}
				],
				[
					{
						type: 'text',
						text: `Rage sharpens a Barbarian's combat ability,
							reflexes, senses, and raw physical force. In an
							adventuring party, Barbarians often become protectors
							and leaders because they willingly enter danger first
							and hold the line for everyone behind them.`
					}
				]
			]
		},

		navigation: {
			parent: 'internals.classes.page'
		},

		tags: [
			'barbarian',
			'class',
			'tank',
			'melee',
			'brute',
			'burst-damage',
			'sustained-damage',
			'martial',
			'strength',
			'rage',
			'primal',
			'frontline'
		]
	}),

	subclasses: {
		berserker: createInternalPage({
			href: `${baseUrl}/${current.subclasses.berserker.name.slug}`,

			img: current.logos.simple,

			label: current.subclasses.berserker.name.short,
			title: `${website.name.short} - ${current.subclasses.berserker.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.berserker.name.normal}
				subclass, its features, progression, and character options.`,
			navigation: {
				parent: 'internals.classes.barbarian.page'
			}
		}),

		zealot: createInternalPage({
			href: `${baseUrl}/${current.subclasses.zealot.name.slug}`,

			img: current.logos.simple,

			label: current.subclasses.zealot.name.short,
			title: `${website.name.short} - ${current.subclasses.zealot.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.zealot.name.normal}
				subclass, its divine fury, features, progression, and options.`,
			navigation: {
				parent: 'internals.classes.barbarian.page'
			}
		})
	},

	content: {
		multiclassingRequirement,
		coreTraits,
		progression: barbarianProgression
	}
} as const;
