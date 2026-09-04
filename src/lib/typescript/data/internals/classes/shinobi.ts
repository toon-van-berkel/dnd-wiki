import {
	createBasicClass,
	link,
	text
} from './_basic-class';
import { createInternalPage } from '../_helpers_';
import type {
	InlineContent,
	PageContentSection,
	ProgressionData,
	ProgressionFeature
} from '$lib/typescript/pages/content-types';

const imageBaseUrl = '/images/classes/shinobi';
const images = {
	card: {
		female: {
			alt: 'A female Shinobi class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-female-s.webp`,
				m: `${imageBaseUrl}/card-female-m.webp`,
				l: `${imageBaseUrl}/card-female-l.webp`
			}
		},
		male: {
			alt: 'A male Shinobi class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-male-s.webp`,
				m: `${imageBaseUrl}/card-male-m.webp`,
				l: `${imageBaseUrl}/card-male-l.webp`
			}
		}
	},
	header: {
		female: {
			alt: 'A female Shinobi class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-female-s.webp`,
				m: `${imageBaseUrl}/card-female-m.webp`,
				l: `${imageBaseUrl}/card-female-l.webp`
			}
		},
		male: {
			alt: 'A male Shinobi class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-male-s.webp`,
				m: `${imageBaseUrl}/card-male-m.webp`,
				l: `${imageBaseUrl}/card-male-l.webp`
			}
		}
	}
} as const;

const feature = (
	level: number,
	title: string,
	description: InlineContent
) => ({
	level,
	title,
	description
});

const featureLink = (
	label: string,
	sectionId: string
): ProgressionFeature<string> => ({
	label,
	sectionId
});

const shinobiProgression: ProgressionData<string> = {
	title: 'Shinobi progression',
	heading: 'Shinobi Progression',
	description:
		'See how the Shinobi develops from level 1 to 20 through Chakra, techniques, inherited manifestations, Fortune Dice and specialized training.',
	columns: [
		{
			key: 'level',
			label: 'Level',
			format: 'ordinal'
		},
		{
			key: 'proficiencyBonus',
			label: 'Prof.',
			path: 'internals.rules.abbreviations.pb',
			format: 'signed'
		},
		{
			key: 'features',
			label: 'Features'
		},
		{
			key: 'chakraPoints',
			label: 'Chakra Points'
		},
		{
			key: 'techniquesKnown',
			label: 'Techniques Known'
		},
		{
			key: 'maximumTechniqueRank',
			label: 'Maximum Technique Rank'
		},
		{
			key: 'fortuneDie',
			label: 'Fortune Die'
		}
	],
	rows: [
		{
			level: 1,
			proficiencyBonus: 2,
			features: [
				featureLink('Shinobi Training', 'shinobi-training'),
				featureLink('Chakra Pool', 'chakra-pool'),
				featureLink('Chakra Origin', 'chakra-origin'),
				featureLink('Chakra Techniques', 'chakra-techniques')
			],
			values: {
				chakraPoints: 3,
				techniquesKnown: 3,
				maximumTechniqueRank: 'I',
				fortuneDie: '-'
			}
		},
		{
			level: 2,
			proficiencyBonus: 2,
			features: [
				featureLink('Shinobi Step', 'shinobi-step'),
				featureLink('Fortune Dice', 'fortune-dice')
			],
			values: {
				chakraPoints: 4,
				techniquesKnown: 4,
				maximumTechniqueRank: 'I',
				fortuneDie: 'd6'
			}
		},
		{
			level: 3,
			proficiencyBonus: 2,
			features: [featureLink('Shinobi Path', 'shinobi-path')],
			values: {
				chakraPoints: 5,
				techniquesKnown: 4,
				maximumTechniqueRank: 'I',
				fortuneDie: 'd6'
			}
		},
		{
			level: 4,
			proficiencyBonus: 2,
			features: [
				{
					label: 'Ability Score Improvement',
					path: 'internals.rules.abbreviations.asi',
					sectionId: 'ability-score-improvement'
				}
			],
			values: {
				chakraPoints: 6,
				techniquesKnown: 5,
				maximumTechniqueRank: 'I',
				fortuneDie: 'd6'
			}
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [
				featureLink('Extra Attack', 'extra-attack'),
				featureLink('Chakra-Infused Strike', 'chakra-infused-strike'),
				featureLink('Developed Manifestation', 'developed-manifestation'),
				featureLink('Rank II Techniques', 'rank-ii-techniques')
			],
			values: {
				chakraPoints: 8,
				techniquesKnown: 5,
				maximumTechniqueRank: 'II',
				fortuneDie: 'd6'
			}
		},
		{
			level: 6,
			proficiencyBonus: 3,
			features: [
				featureLink('Shinobi Path Feature', 'shinobi-path'),
				featureLink('Improved Fortune', 'improved-fortune')
			],
			values: {
				chakraPoints: 9,
				techniquesKnown: 6,
				maximumTechniqueRank: 'II',
				fortuneDie: 'd8'
			}
		},
		{
			level: 7,
			proficiencyBonus: 3,
			features: [featureLink('Evasion', 'evasion')],
			values: {
				chakraPoints: 10,
				techniquesKnown: 6,
				maximumTechniqueRank: 'II',
				fortuneDie: 'd8'
			}
		},
		{
			level: 8,
			proficiencyBonus: 3,
			features: [
				{
					label: 'Ability Score Improvement',
					path: 'internals.rules.abbreviations.asi',
					sectionId: 'ability-score-improvement'
				}
			],
			values: {
				chakraPoints: 11,
				techniquesKnown: 7,
				maximumTechniqueRank: 'II',
				fortuneDie: 'd8'
			}
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [
				featureLink('Chakra Movement', 'chakra-movement'),
				featureLink('Advanced Manifestation', 'advanced-manifestation'),
				featureLink('Rank III Techniques', 'rank-iii-techniques')
			],
			values: {
				chakraPoints: 13,
				techniquesKnown: 7,
				maximumTechniqueRank: 'III',
				fortuneDie: 'd8'
			}
		},
		{
			level: 10,
			proficiencyBonus: 4,
			features: [featureLink('Shinobi Path Feature', 'shinobi-path')],
			values: {
				chakraPoints: 14,
				techniquesKnown: 8,
				maximumTechniqueRank: 'III',
				fortuneDie: 'd8'
			}
		},
		{
			level: 11,
			proficiencyBonus: 4,
			features: [
				featureLink('Chakra-Infused Strike Improvement', 'chakra-infused-strike-improvement'),
				featureLink('Improved Fortune', 'improved-fortune')
			],
			values: {
				chakraPoints: 15,
				techniquesKnown: 8,
				maximumTechniqueRank: 'III',
				fortuneDie: 'd10'
			}
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Ability Score Improvement',
					path: 'internals.rules.abbreviations.asi',
					sectionId: 'ability-score-improvement'
				}
			],
			values: {
				chakraPoints: 16,
				techniquesKnown: 9,
				maximumTechniqueRank: 'III',
				fortuneDie: 'd10'
			}
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [
				featureLink('Unbroken Focus', 'unbroken-focus'),
				featureLink('Greater Manifestation', 'greater-manifestation'),
				featureLink('Rank IV Techniques', 'rank-iv-techniques')
			],
			values: {
				chakraPoints: 18,
				techniquesKnown: 9,
				maximumTechniqueRank: 'IV',
				fortuneDie: 'd10'
			}
		},
		{
			level: 14,
			proficiencyBonus: 5,
			features: [featureLink('Shinobi Path Feature', 'shinobi-path')],
			values: {
				chakraPoints: 19,
				techniquesKnown: 10,
				maximumTechniqueRank: 'IV',
				fortuneDie: 'd10'
			}
		},
		{
			level: 15,
			proficiencyBonus: 5,
			features: [featureLink('Perfect Chakra Control', 'perfect-chakra-control')],
			values: {
				chakraPoints: 20,
				techniquesKnown: 10,
				maximumTechniqueRank: 'IV',
				fortuneDie: 'd10'
			}
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Ability Score Improvement',
					path: 'internals.rules.abbreviations.asi',
					sectionId: 'ability-score-improvement'
				}
			],
			values: {
				chakraPoints: 21,
				techniquesKnown: 11,
				maximumTechniqueRank: 'IV',
				fortuneDie: 'd10'
			}
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [
				featureLink('Chakra-Infused Strike Improvement', 'chakra-infused-strike-improvement'),
				featureLink('Perfected Manifestation', 'perfected-manifestation'),
				featureLink('Improved Fortune', 'improved-fortune'),
				featureLink('Rank V Techniques', 'rank-v-techniques')
			],
			values: {
				chakraPoints: 23,
				techniquesKnown: 11,
				maximumTechniqueRank: 'V',
				fortuneDie: 'd12'
			}
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [featureLink('Hidden Technique Mastery', 'hidden-technique-mastery')],
			values: {
				chakraPoints: 24,
				techniquesKnown: 12,
				maximumTechniqueRank: 'V',
				fortuneDie: 'd12'
			}
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Ability Score Improvement',
					path: 'internals.rules.abbreviations.asi',
					sectionId: 'ability-score-improvement'
				}
			],
			values: {
				chakraPoints: 25,
				techniquesKnown: 12,
				maximumTechniqueRank: 'V',
				fortuneDie: 'd12'
			}
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [featureLink('Kage State', 'kage-state')],
			values: {
				chakraPoints: 30,
				techniquesKnown: 14,
				maximumTechniqueRank: 'V',
				fortuneDie: 'd12'
			}
		}
	]
};

const shinobiFeatures = [
	feature(1, 'Shinobi Training', [
		text(
			'Your training has prepared you for infiltration, pursuit, and sudden combat. You gain the proficiencies listed in the Shinobi class description and can use traditional Shinobi weapon names for existing weapon statistics.'
		)
	]),
	feature(1, 'Chakra Pool', [
		text('You possess a pool of Chakra Points shown in the Shinobi table. You spend Chakra Points to activate techniques and class features, and regain all expended Chakra Points when you finish a '),
		link('internals.rules.rests.shortRest', 'short rest'),
		text(' or '),
		link('internals.rules.rests.longRest', 'long rest'),
		text(' after at least 30 minutes of meditation, breathing control, equipment maintenance, or chakra exercises. You cannot regain Chakra Points from more than two short rests between long rests.')
	]),
	feature(1, 'Chakra Techniques', [
		link('internals.rules.abilityScores.wisdom', 'Wisdom'),
		text(' is your technique ability for Shinobi techniques. Your Technique Save DC is 8 + your proficiency bonus + your Wisdom modifier, and your Technique Attack Modifier is your proficiency bonus + your Wisdom modifier. Techniques use chakra control, physical movement, and hand signs; unless stated otherwise, you need at least one free hand and cannot activate a technique while '),
		link('internals.rules.conditions.incapacitated', 'incapacitated'),
		text(', '),
		link('internals.rules.conditions.unconscious', 'unconscious'),
		text(', petrified, or unable to move either hand.')
	]),
	feature(1, 'Chakra Origin', [
		text('At 1st level, determine how your chakra developed. Choose Trained Affinity for a stable elemental Chakra Nature, or Bloodline of Fate to roll on the Rare Chakra Heritage table.')
	]),
	feature(2, 'Shinobi Step', [
		text('As a '),
		link('internals.rules.actions.bonusAction', 'bonus action'),
		text(', you can take the '),
		link('internals.rules.actions.dash', 'Dash'),
		text(', '),
		link('internals.rules.actions.disengage', 'Disengage'),
		text(', or '),
		link('internals.rules.actions.hide', 'Hide'),
		text(' action.')
	]),
	feature(2, 'Fortune Dice', [
		text('You possess a number of Fortune Dice equal to your proficiency bonus. When you or another creature you can see within 30 feet makes an '),
		link('internals.rules.combat.attackRoll', 'attack roll'),
		text(', '),
		link('internals.rules.d20Tests.abilityCheck', 'ability check'),
		text(', or '),
		link('internals.rules.d20Tests.savingThrow', 'saving throw'),
		text(', you can use your reaction and expend one Fortune Die to add it to an ally roll or subtract it from an enemy roll. You decide after the d20 is rolled but before the outcome is announced.')
	]),
	feature(3, 'Shinobi Path', [
		text('At 3rd level, choose the specialized discipline through which you apply your Shinobi training. Your path grants features at 3rd, 6th, 10th, and 14th level.')
	]),
	feature(4, 'Ability Score Improvement', [
		text('When you reach this level, you can increase one ability score by 2, increase two ability scores by 1, or select a feat for which you qualify. You cannot increase an ability score above 20 using this feature.')
	]),
	feature(5, 'Extra Attack', [
		text('You can attack twice, instead of once, whenever you take the '),
		link('internals.rules.actions.attackAction', 'Attack action'),
		text(' on your turn. Activating a technique is not the Attack action unless the technique explicitly states otherwise.')
	]),
	feature(5, 'Chakra-Infused Strike', [
		text('Once on each of your turns when you hit a creature with a weapon attack or unarmed strike, you deal an additional 1d6 damage. The damage type is determined by the technique, Chakra Nature, or Rare Chakra Heritage used to empower the strike. If no feature determines the damage type, the additional damage is '),
		link('internals.rules.damageTypes.force', 'force'),
		text(' damage.')
	]),
	feature(5, 'Developed Manifestation', [
		text('Your Chakra Origin develops further. Trained Affinity teaches one additional Nature Technique associated with your chosen Chakra Nature. Bloodline of Fate teaches one additional Heritage Technique associated with your Rare Chakra Heritage. The technique must be of a rank you can use and does not count against your techniques known.')
	]),
	feature(5, 'Rank II Techniques', [
		text('Your maximum technique rank becomes II, allowing you to learn and activate Rank II Shinobi techniques for which you meet the requirements.')
	]),
	feature(6, 'Improved Fortune', [
		text('Your Fortune Die improves as shown in the Shinobi table. At 6th level it becomes a d8 and you regain one expended Fortune Die when you finish a short rest. At 11th level it becomes a d10 and you regain up to two expended Fortune Dice on a short rest. At 17th level it becomes a d12 and all expended Fortune Dice return on a short or long rest.')
	]),
	feature(7, 'Evasion', [
		text('When an effect allows you to make a '),
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' saving throw to take only half damage, you instead take no damage on a successful save and half damage on a failed save. You cannot use this feature while '),
		link('internals.rules.conditions.incapacitated', 'incapacitated'),
		text('.')
	]),
	feature(9, 'Chakra Movement', [
		text('While you are not incapacitated, you can move across liquids and vertical surfaces as though they were solid ground. If you are knocked '),
		link('internals.rules.conditions.prone', 'prone'),
		text(' or become incapacitated while standing on a liquid or vertical surface, you immediately begin falling or sinking.')
	]),
	feature(9, 'Advanced Manifestation', [
		text('Once on each of your turns when you activate a technique associated with your Chakra Origin, add your '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom'),
		text(' modifier to one damage roll or healing roll of that technique. If the technique produces neither damage nor healing, you instead gain temporary hit points equal to your Wisdom modifier.')
	]),
	feature(9, 'Rank III Techniques', [
		text('Your maximum technique rank becomes III, allowing you to learn and activate Rank III Shinobi techniques for which you meet the requirements.')
	]),
	feature(11, 'Chakra-Infused Strike Improvement', [
		text('The additional damage from Chakra-Infused Strike becomes 2d6 at 11th level and 3d6 at 17th level.')
	]),
	feature(13, 'Unbroken Focus', [
		text('You have advantage on '),
		link('internals.rules.abilityScores.constitution', 'Constitution'),
		text(' saving throws made to maintain '),
		link('internals.rules.spellcasting.concentration', 'concentration'),
		text(' on a Shinobi technique. When you fail one of those saves, you can spend 2 Chakra Points to reroll it and must use the new result.')
	]),
	feature(13, 'Greater Manifestation', [
		text('Once on each of your turns when you activate a technique associated with your Chakra Origin, reduce its Chakra Point cost by 1, to a minimum cost of 1.')
	]),
	feature(13, 'Rank IV Techniques', [
		text('Your maximum technique rank becomes IV, allowing you to learn and activate Rank IV Shinobi techniques for which you meet the requirements.')
	]),
	feature(15, 'Perfect Chakra Control', [
		text('Once on each of your turns, reduce the Chakra Point cost of one Rank I technique by 1, to a minimum cost of 0. Hostile effects cannot remove your Chakra Points unless you are '),
		link('internals.rules.conditions.unconscious', 'unconscious'),
		text('.')
	]),
	feature(17, 'Perfected Manifestation', [
		text('Choose one Rank IV or lower technique associated with your Chakra Origin. You can activate that technique once without spending Chakra Points, regain the use after a short or long rest, and can change the selected technique whenever you gain another Shinobi level.')
	]),
	feature(17, 'Rank V Techniques', [
		text('Your maximum technique rank becomes V, allowing you to learn and activate the strongest Shinobi techniques for which you meet the requirements.')
	]),
	feature(18, 'Hidden Technique Mastery', [
		text('Choose one Rank III or lower technique you know as your Signature Technique. Its Chakra Point cost is reduced by 1, to a minimum of 0. You can activate it once without spending Chakra Points, regain that use after a long rest, and it cannot be removed, replaced, or forgotten against your will.')
	]),
	feature(20, 'Kage State', [
		text('As a bonus action, you enter a Kage State for 1 minute. You immediately regain 10 Chakra Points, gain advantage on Dexterity and Wisdom saving throws, reduce technique Chakra Point costs by 2 to a minimum of 1, can use one Fortune Die each turn without expending it, and increase your walking speed by 20 feet. The state ends early if you become '),
		link('internals.rules.conditions.unconscious', 'unconscious'),
		text('.')
	]),
	feature(20, 'Multiclassing', [
		text('To multiclass into or out of the Shinobi class, you must have a '),
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' score of at least 13 and a '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom'),
		text(' score of at least 13. A multiclass character gains light armor, simple weapons, shortswords, disguise kits, and one skill from the Shinobi skill list, but does not gain Shinobi saving throw proficiencies, the additional tool choice, starting equipment, or the complete Shinobi weapon proficiency list.')
	])
] as const;

const shinobiClass = createBasicClass({
	name: 'Shinobi',
	slug: 'shinobi',
	role: 'Mobile chakra-wielding combatant',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' and '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons and martial melee weapons that have the Finesse property')],
	tools: [text('Disguise kit and one of the following: herbalism kit, poisoner\'s kit, or thieves\' tools')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' and '),
		link('internals.rules.abilityScores.intelligence', 'Intelligence')
	],
	skills: [
		text('Choose three from '),
		link('internals.rules.skills.acrobatics', 'Acrobatics'),
		text(', '),
		link('internals.rules.skills.arcana', 'Arcana'),
		text(', '),
		link('internals.rules.skills.athletics', 'Athletics'),
		text(', '),
		link('internals.rules.skills.deception', 'Deception'),
		text(', '),
		link('internals.rules.skills.insight', 'Insight'),
		text(', '),
		link('internals.rules.skills.investigation', 'Investigation'),
		text(', '),
		link('internals.rules.skills.medicine', 'Medicine'),
		text(', '),
		link('internals.rules.skills.nature', 'Nature'),
		text(', '),
		link('internals.rules.skills.perception', 'Perception'),
		text(', '),
		link('internals.rules.skills.sleightOfHand', 'Sleight of Hand'),
		text(', '),
		link('internals.rules.skills.stealth', 'Stealth'),
		text(', and '),
		link('internals.rules.skills.survival', 'Survival')
	],
	description:
		'A mobile chakra-wielding combatant who combines martial training, supernatural techniques, inherited abilities and control over fortune.',
	longDescription: [
		[
			text(
				'Shinobi are trained operatives who combine physical discipline with the supernatural manipulation of chakra.'
			)
		],
		[
			text(
				'They move through the battlefield at extreme speed, deceive enemies with transformations and illusions, and unleash techniques shaped by elemental affinities or inherited bloodlines.'
			)
		],
		[
			text(
				'A Shinobi is defined by two major choices: Chakra Origin determines the nature or heritage of their chakra, while Shinobi Path determines how that power is trained and applied.'
			)
		]
	],
	startingEquipment: [
		{
			label: 'Armor and tools',
			items: [
				[text('Leather armor')],
				[text('A disguise kit')]
			]
		},
		{
			label: 'Weapon option',
			instruction: 'Choose one',
			choices: [
				[text('A shortsword')],
				[text('Two daggers')]
			]
		},
		{
			label: 'Ranged option',
			instruction: 'Choose one',
			choices: [
				[text('A shortbow and a quiver containing 20 arrows')],
				[text('Ten darts')]
			]
		},
		{
			label: 'Pack option',
			instruction: 'Choose one',
			choices: [
				[text('A burglar\'s pack')],
				[
					link('internals.equipment.explorersPack', 'An explorer\'s pack')
				]
			]
		},
		{
			label: 'Tool option',
			instruction: 'Choose one',
			choices: [
				[text('Herbalism kit')],
				[text('Poisoner\'s kit')],
				[text('Thieves\' tools')]
			]
		}
	],
	features: shinobiFeatures,
	tags: ['class', 'shinobi', 'homebrew', 'chakra', 'techniques', 'martial', 'wisdom', 'dexterity']
});

const shinobiWeaponPresentation: PageContentSection = {
	id: 'shinobi-weapon-presentation',
	title: 'Shinobi Weapon Presentation',
	blocks: [
		{
			type: 'paragraph',
			content: [
				text(
					'These names represent alternative appearances for existing weapons. They do not change the weapon\'s normal statistics unless a Shinobi feature or technique explicitly states otherwise.'
				)
			]
		},
		{
			type: 'table',
			caption: 'Shinobi weapon presentation',
			showCaption: true,
			columns: {
				label: 'Shinobi Weapon',
				value: 'Existing Weapon Statistics'
			},
			rows: [
				{
					label: 'Kunai',
					value: [text('Dagger')]
				},
				{
					label: 'Shuriken',
					value: [text('Dart')]
				},
				{
					label: 'Senbon',
					value: [text('Dart')]
				},
				{
					label: 'Short ninja blade',
					value: [text('Shortsword')]
				},
				{
					label: 'Chain sickle',
					value: [text('Whip')]
				},
				{
					label: 'Combat staff',
					value: [text('Quarterstaff')]
				}
			]
		}
	]
};

function pathSection(
	id: string,
	title: string,
	blocks: PageContentSection['blocks']
): PageContentSection {
	return {
		id,
		title,
		blocks
	};
}

function pathParagraph(value: string): PageContentSection['blocks'][number] {
	return {
		type: 'paragraph',
		content: [text(value)]
	};
}

function pathList(items: readonly string[]): PageContentSection['blocks'][number] {
	return {
		type: 'list',
		items: items.map((item) => [text(item)])
	};
}

function pathTable(rows: readonly {
	readonly level: string;
	readonly feature: string;
}[]): PageContentSection['blocks'][number] {
	return {
		type: 'table',
		caption: 'Path features',
		showCaption: true,
		columns: {
			label: 'Shinobi Level',
			value: 'Feature'
		},
		rows: rows.map((row) => ({
			label: row.level,
			value: [text(row.feature)]
		}))
	};
}

function createPathContent(
	source: string,
	featureSections: readonly PageContentSection[]
) {
	return {
		source,
		featureSections,
		tableOfContents: featureSections.map(({ id, title }) => ({
			id,
			title
		}))
	};
}

function createShinobiPath(
	slug: string,
	name: string,
	description: string,
	featureSections: readonly PageContentSection[]
) {
	return createInternalPage({
		href: `/classes/shinobi/${slug}`,
		img: {
			href: '/icons/white/game/character.svg',
			alt: 'A stylized character icon representing a shinobi path.'
		},
		images,
		label: name,
		title: `D&D Portal - ${name}`,
		subTitle: 'Shinobi subclass',
		description,
		descriptions: {
			short: description,
			medium: description,
			long: [
				[text(description)],
				[text(`${name} changes how the Shinobi applies chakra, techniques, reactions, and path features during play.`)],
				[text('This page collects the path overview, feature progression, subclass features, and playstyle guidance.')]
			]
		},
		navigation: {
			parent: 'internals.classes.shinobi.page'
		},
		tags: ['shinobi', 'subclass', slug],
		content: createPathContent('D&D Portal homebrew', featureSections)
	});
}

const pathsOverviewSections = [
	pathSection('path-of-taijutsu', 'Path of Taijutsu', [
		pathParagraph(
			'A relentless close-combat specialist who turns speed, precision and physical conditioning into a weapon.'
		)
	]),
	pathSection('path-of-elemental-ninjutsu', 'Path of Elemental Ninjutsu', [
		pathParagraph(
			'A master of elemental chakra who overwhelms enemies with destructive force and battlefield control.'
		)
	]),
	pathSection('path-of-genjutsu', 'Path of Genjutsu', [
		pathParagraph(
			'A mental manipulator who distorts perception, creates false realities and controls enemy decisions.'
		)
	]),
	pathSection('path-of-the-bloodline', 'Path of the Bloodline', [
		pathParagraph(
			'A specialist who dedicates every aspect of their training to awakening an inherited Rare Chakra Heritage.'
		)
	]),
	pathSection('path-of-the-medical-shinobi', 'Path of the Medical Shinobi', [
		pathParagraph(
			'A precise chakra specialist who restores allies, removes harmful conditions and weaponizes biological knowledge.'
		)
	]),
	pathSection('path-of-sealing', 'Path of Sealing', [
		pathParagraph(
			'A tactical specialist who stores chakra in formulas, prepares traps and suppresses supernatural abilities.'
		)
	]),
	pathSection('path-of-fortune', 'Path of Fortune', [
		pathParagraph(
			'A probability manipulator who turns unlikely events into reliable weapons.'
		)
	])
] as const;

const taijutsuSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'Shinobi who follow the Path of Taijutsu train their bodies to function as weapons. Rather than relying primarily on ranged ninjutsu or elaborate illusions, these warriors concentrate chakra into their muscles, reflexes and strikes.'
		),
		pathParagraph(
			'A Taijutsu Shinobi excels at closing the distance, pressuring dangerous opponents and escaping before an enemy can retaliate.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Taijutsu Training' },
			{ level: '6', feature: 'Flowing Counter' },
			{ level: '10', feature: 'Limit Release' },
			{ level: '14', feature: 'Perfect Taijutsu' }
		])
	]),
	pathSection('taijutsu-training', 'Taijutsu Training', [
		pathParagraph(
			'Your unarmed strikes deal 1d6 bludgeoning damage, and you can use Dexterity instead of Strength for their attack and damage rolls.'
		),
		pathParagraph(
			'After you take the Attack action and make at least one attack with an unarmed strike or Finesse weapon, you can make one unarmed strike as a bonus action.'
		),
		pathParagraph(
			'You also learn one Rank I Taijutsu Path Technique. It does not count against your number of techniques known.'
		)
	]),
	pathSection('flowing-counter', 'Flowing Counter', [
		pathParagraph(
			'When a creature within your reach hits you with an attack, you can use your reaction and expend 1 Chakra Point to reduce the damage by 1d10 + your Dexterity modifier + your Shinobi level.'
		),
		pathParagraph('If you reduce the damage to 0, choose one of the following.'),
		pathList([
			'Make one unarmed strike against the attacker.',
			'Move up to 10 feet without provoking opportunity attacks.'
		])
	]),
	pathSection('limit-release', 'Limit Release', [
		pathParagraph(
			'As a bonus action, you can expend 3 Chakra Points to release the physical limits placed upon your body for 1 minute.'
		),
		pathList([
			'Your walking speed increases by 10 feet.',
			'You have advantage on Strength and Dexterity ability checks.',
			'You have advantage on Strength and Dexterity saving throws.',
			'Once on each of your turns when you hit with a weapon attack or unarmed strike, the attack deals an additional 1d8 force damage.'
		]),
		pathParagraph(
			'The effect ends early if you become unconscious. Once you use this feature, you cannot use it again until you finish a long rest.'
		)
	]),
	pathSection('perfect-taijutsu', 'Perfect Taijutsu', [
		pathParagraph('Your unarmed strike damage die becomes a d10.'),
		pathParagraph(
			'When you take the Attack action and make every attack with an unarmed strike or Finesse weapon, you can make one additional unarmed strike as part of that action.'
		),
		pathParagraph(
			'Once on each of your turns when you hit a creature with an unarmed strike, move up to 10 feet without provoking opportunity attacks or force the target to make a Strength saving throw against your Technique Save DC. On a failed save, the target falls prone.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Fight primarily in melee.',
			'Use unarmed strikes.',
			'Move constantly during combat.',
			'Counter enemy attacks.',
			'Temporarily exceed normal physical limits.'
		])
	])
] as const;

const elementalSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'The Path of Elemental Ninjutsu is followed by Shinobi who dedicate themselves to transforming chakra into natural forces.'
		),
		pathParagraph(
			'These Shinobi create fire, water, earth, lightning and wind through practiced hand signs and precise chakra control. Some specialize in one nature, while others combine several elements to answer different threats.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Elemental Adept' },
			{ level: '6', feature: 'Secondary Nature' },
			{ level: '10', feature: 'Elemental Shaping' },
			{ level: '14', feature: 'Nature Mastery' }
		])
	]),
	pathSection('elemental-adept', 'Elemental Adept', [
		pathParagraph(
			'Learn two additional Nature Techniques associated with a Chakra Nature available to you. These techniques must be of a rank you can use and do not count against your number of techniques known.'
		),
		pathParagraph(
			'Once on each of your turns when you roll damage for a Nature Technique, add your Wisdom modifier to one damage roll of that technique.'
		)
	]),
	pathSection('secondary-nature', 'Secondary Nature', [
		pathParagraph('Choose one standard Chakra Nature you do not already possess.'),
		pathList(['Fire Release.', 'Wind Release.', 'Lightning Release.', 'Earth Release.', 'Water Release.']),
		pathParagraph(
			'You can learn Nature Techniques associated with the selected nature and learn one additional Nature Technique from that nature. It must be of a rank you can use and does not count against your number of techniques known.'
		)
	]),
	pathSection('elemental-shaping', 'Elemental Shaping', [
		pathParagraph(
			'When you activate a Nature Technique, you can expend 1 additional Chakra Point to apply one modification.'
		),
		pathList([
			'Distant: Double the technique range. If its range is Self, this option has no effect.',
			'Expanded: Increase a sphere or cylinder radius by 5 feet, a cone length by 10 feet, or a line width by 5 feet.',
			'Careful: Choose creatures up to your Wisdom modifier. They automatically succeed on saves against the technique and take no damage if they would normally take half damage on success.',
			'Piercing: The technique ignores resistance to its damage type.'
		])
	]),
	pathSection('nature-mastery', 'Nature Mastery', [
		pathParagraph('Your Nature Techniques ignore resistance to their damage types.'),
		pathParagraph(
			'When a creature is immune to damage dealt by a Nature Technique, treat that immunity as resistance instead.'
		),
		pathParagraph(
			'Once on each of your turns, reduce the Chakra Point cost of one Nature Technique by 1, to a minimum cost of 1.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Use large elemental attacks.',
			'Fight effectively at range.',
			'Control areas of the battlefield.',
			'Learn multiple Chakra Natures.',
			'Modify the shape and range of techniques.'
		])
	])
] as const;

const genjutsuSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'Shinobi who follow the Path of Genjutsu manipulate the chakra flowing through another creature nervous system. Their techniques distort sight, sound, memory and perception.'
		),
		pathParagraph(
			'A Genjutsu Shinobi can create false targets, conceal allies and trap enemies inside convincing illusions.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Genjutsu Training' },
			{ level: '6', feature: 'Distorted Perception' },
			{ level: '10', feature: 'Persistent Illusion' },
			{ level: '14', feature: 'World of Illusion' }
		])
	]),
	pathSection('genjutsu-training', 'Genjutsu Training', [
		pathParagraph(
			'Gain proficiency in either Deception or Insight. If you already have proficiency in the selected skill, your proficiency bonus is doubled for checks made with it.'
		),
		pathParagraph(
			'Learn two additional Genjutsu Path Techniques. They must be of a rank you can use and do not count against your number of techniques known.'
		)
	]),
	pathSection('distorted-perception', 'Distorted Perception', [
		pathParagraph(
			'When a creature you can see within 60 feet makes an attack roll, you can use your reaction and expend 1 Chakra Point to distort its perception.'
		),
		pathParagraph(
			'The creature must make a Wisdom saving throw against your Technique Save DC. On a failed save, the attack roll is made with disadvantage. If the attack misses, you can immediately move up to 10 feet without provoking opportunity attacks.'
		),
		pathParagraph('A creature immune to the charmed condition automatically succeeds on this saving throw.')
	]),
	pathSection('persistent-illusion', 'Persistent Illusion', [
		pathParagraph(
			'When a creature succeeds on a saving throw against one of your Genjutsu techniques, you can expend 1 Chakra Point to force it to reroll the saving throw. The creature must use the new result.'
		),
		pathParagraph(
			'You can use this feature once on each of your turns. In addition, when your concentration on a Genjutsu technique ends because you failed a concentration saving throw, the technique remains active until the end of your next turn.'
		)
	]),
	pathSection('world-of-illusion', 'World of Illusion', [
		pathParagraph(
			'As an action, choose a point you can see within 60 feet. Each creature of your choice in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw against your Technique Save DC.'
		),
		pathParagraph(
			'On a failed save, a creature is charmed and incapacitated for up to 1 minute as it becomes trapped inside a shared illusion. The effect requires concentration.'
		),
		pathParagraph(
			'An affected creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature also repeats the saving throw whenever it takes damage. Once you use this feature, you cannot use it again until you finish a long rest.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Control enemies without relying on direct damage.',
			'Create false targets and environments.',
			'Manipulate enemy attacks.',
			'Support infiltration and deception.',
			'Use psychic and illusion-based abilities.'
		])
	])
] as const;

const bloodlineSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'The Path of the Bloodline is followed by Shinobi who devote themselves to fully awakening an inherited power.'
		),
		pathParagraph(
			'Every Rare Chakra Heritage already grants an initial manifestation and develops through Chakra Origin features. This path intensifies that development and places the bloodline at the center of the Shinobi fighting style.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Awakened Heritage' },
			{ level: '6', feature: 'Inherited Adaptation' },
			{ level: '10', feature: 'Advanced Manifestation' },
			{ level: '14', feature: 'Bloodline Ascendance' }
		])
	]),
	pathSection('awakened-heritage', 'Awakened Heritage', [
		pathParagraph(
			'Learn two additional Heritage Techniques associated with your Rare Chakra Heritage. They must be of a rank you can use and do not count against your number of techniques known.'
		),
		pathParagraph(
			'Once on each of your turns when you activate a Heritage Technique, you gain temporary hit points equal to your proficiency bonus.'
		)
	]),
	pathSection('inherited-adaptation', 'Inherited Adaptation', [
		pathParagraph('Choose one adaptation. You can select a different adaptation whenever you gain another Shinobi level.'),
		pathList([
			'Hardened Form: While wearing light armor or no armor and not wielding a shield, you gain a +1 bonus to Armor Class.',
			'Predatory Senses: You gain darkvision out to 60 feet. If you already have darkvision, its range increases by 30 feet. You have advantage on initiative rolls.',
			'Overflowing Chakra: Your maximum number of Chakra Points increases by an amount equal to your proficiency bonus.',
			'Unyielding Mind: You have advantage on saving throws against being charmed or frightened.'
		])
	]),
	pathSection('advanced-manifestation', 'Advanced Manifestation', [
		pathParagraph(
			'Once on each of your turns, reduce the Chakra Point cost of one Heritage Technique by 1, to a minimum cost of 1.'
		),
		pathParagraph(
			'When a Heritage Technique has a duration of at least 1 minute, its duration is doubled, to a maximum of 24 hours.'
		)
	]),
	pathSection('bloodline-ascendance', 'Bloodline Ascendance', [
		pathParagraph(
			'As a bonus action, awaken the ascendant form of your Rare Chakra Heritage for 1 minute.'
		),
		pathList([
			'You gain temporary hit points equal to twice your Shinobi level.',
			'You have advantage on saving throws against techniques and spells.',
			'Once on each of your turns, reduce the Chakra Point cost of one Heritage Technique by 2, to a minimum cost of 1.',
			'Once on each of your turns when a Heritage Technique deals damage or restores hit points, add your Fortune Die to one damage or healing roll without expending the die.'
		]),
		pathParagraph(
			'The effect ends early if you become unconscious. Once you use this feature, you cannot use it again until you finish a long rest.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Make your Rare Chakra Heritage your primary identity.',
			'Learn additional Heritage Techniques.',
			'Gain defensive mutations or adaptations.',
			'Specialize heavily around one inherited ability.',
			'Temporarily awaken an ascendant form.'
		])
	])
] as const;

const medicalSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'Medical Shinobi use precise chakra control to close wounds, remove toxins and manipulate the biological systems of living creatures.'
		),
		pathParagraph(
			'The same knowledge that repairs tissue can also interrupt nerves, disable muscles and prevent an enemy from recovering.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Medical Training' },
			{ level: '6', feature: 'Chakra Scalpel' },
			{ level: '10', feature: 'Cellular Restoration' },
			{ level: '14', feature: 'Regenerative Seal' }
		])
	]),
	pathSection('medical-training', 'Medical Training', [
		pathParagraph(
			'Gain proficiency in Medicine. If you already have proficiency in Medicine, your proficiency bonus is doubled for checks made with it.'
		),
		pathParagraph(
			'You learn First Aid Technique if you do not already know it. It does not count against your number of techniques known.'
		),
		pathParagraph(
			'A creature can regain hit points from your First Aid Technique twice per short or long rest instead of once. Whenever one of your Shinobi techniques restores hit points to a creature, that creature also gains temporary hit points equal to your proficiency bonus.'
		)
	]),
	pathSection('chakra-scalpel', 'Chakra Scalpel', [
		pathParagraph(
			'As a bonus action, you can expend 1 Chakra Point to form a chakra scalpel around one or both hands for 1 minute.'
		),
		pathList([
			'Your unarmed strikes can deal force damage instead of bludgeoning damage.',
			'You can use Wisdom instead of Strength or Dexterity for the attack and damage rolls of your unarmed strikes.',
			'Once on each of your turns when you hit a creature with an unarmed strike, the creature takes an additional 1d8 force damage.',
			'A creature damaged by the additional force damage cannot regain hit points until the start of your next turn.'
		]),
		pathParagraph('The effect ends early if you become unconscious.')
	]),
	pathSection('cellular-restoration', 'Cellular Restoration', [
		pathParagraph(
			'As an action, touch a living creature and expend 3 Chakra Points. Choose one effect.'
		),
		pathList([
			'End the blinded condition.',
			'End the deafened condition.',
			'End the paralyzed condition.',
			'End the poisoned condition.',
			'End one disease affecting the target.',
			'Reduce the target exhaustion level by 1.'
		]),
		pathParagraph(
			'A creature cannot have its exhaustion reduced by this feature again until it finishes a long rest.'
		)
	]),
	pathSection('regenerative-seal', 'Regenerative Seal', [
		pathParagraph(
			'When you finish a long rest, place a Regenerative Seal on yourself or one willing creature you touch. The seal remains until you finish another long rest or place it on a different creature.'
		),
		pathParagraph(
			'When the sealed creature is reduced to half its hit point maximum or lower, you or the sealed creature can use a reaction to activate the seal.'
		),
		pathParagraph(
			'The creature regains 4d8 + your Wisdom modifier hit points and can immediately end one of these conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, or stunned. Once activated, the seal disappears.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Heal party members.',
			'Remove dangerous conditions.',
			'Stabilize injured allies.',
			'Fight with precise chakra scalpels.',
			'Combine support with melee pressure.'
		])
	])
] as const;

const sealingSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'The Path of Sealing teaches Shinobi to encode chakra into written formulas, tags and prepared symbols.'
		),
		pathParagraph(
			'Seals can store equipment, create defensive boundaries, suppress supernatural movement and restrain dangerous enemies.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Sealing Formula' },
			{ level: '6', feature: 'Suppression Seal' },
			{ level: '10', feature: 'Prepared Network' },
			{ level: '14', feature: 'Grand Binding Seal' }
		])
	]),
	pathSection('sealing-formula', 'Sealing Formula', [
		pathParagraph(
			'Gain proficiency with calligrapher supplies. If you already have this proficiency, your proficiency bonus is doubled for checks made with them.'
		),
		pathParagraph(
			'Learn two additional Sealing Path Techniques. They must be of a rank you can use and do not count against your number of techniques known.'
		),
		pathParagraph(
			'When you finish a short or long rest, you can prepare a number of chakra seals equal to your proficiency bonus.'
		),
		pathParagraph(
			'As an action, you can place one prepared seal on a surface or unattended object you can touch. A seal remains until it is activated, destroyed or you finish a long rest.'
		),
		pathParagraph(
			'When you activate a Sealing Technique, you can cause the technique to originate from one of your prepared seals within 60 feet instead of from yourself. The seal is consumed.'
		)
	]),
	pathSection('suppression-seal', 'Suppression Seal', [
		pathParagraph(
			'When a creature fails a saving throw against one of your Sealing Techniques, it becomes suppressed until the start of your next turn.'
		),
		pathList([
			'The creature cannot teleport.',
			'The creature cannot regain Chakra Points, Ki Points, Sorcery Points or similar class resources.',
			'The creature cannot take reactions.'
		])
	]),
	pathSection('prepared-network', 'Prepared Network', [
		pathParagraph(
			'The number of chakra seals you can prepare becomes equal to your proficiency bonus + your Wisdom modifier.'
		),
		pathParagraph(
			'The maximum range at which you can activate one of your prepared seals increases to 120 feet.'
		),
		pathParagraph(
			'You can place a prepared seal as a bonus action instead of an action. When a creature you can see moves within 10 feet of one of your prepared seals, you can use your reaction to activate a Sealing Technique through that seal.'
		)
	]),
	pathSection('grand-binding-seal', 'Grand Binding Seal', [
		pathParagraph(
			'As an action, choose one creature you can see within 30 feet. The creature must make a Charisma saving throw against your Technique Save DC.'
		),
		pathParagraph('On a failed save, the creature is sealed inside an extradimensional formula for up to 1 minute.'),
		pathList([
			'The creature is incapacitated.',
			'The creature has total cover.',
			'The creature speed is 0.',
			'The creature cannot affect or be affected by anything outside the seal.'
		]),
		pathParagraph(
			'The effect requires concentration. The sealed creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. Once you use this feature, you cannot use it again until you finish a long rest.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Prepare traps and magical formulas.',
			'Store and trigger effects remotely.',
			'Restrict enemy movement.',
			'Suppress supernatural resources.',
			'Temporarily imprison dangerous creatures.'
		])
	])
] as const;

const fortuneSections = [
	pathSection('path-overview', 'Path Overview', [
		pathParagraph(
			'Some Shinobi survive through discipline. Others survive through a sequence of events that should have been impossible.'
		),
		pathParagraph(
			'The Path of Fortune allows a Shinobi to actively manipulate probability. Attacks miss by fractions of an inch, weapons strike precisely where needed and impossible opportunities appear at the perfect moment.'
		)
	]),
	pathSection('path-features', 'Path Features', [
		pathTable([
			{ level: '3', feature: 'Favored by Fortune' },
			{ level: '6', feature: 'Twist Misfortune' },
			{ level: '10', feature: 'Fortune\'s Reversal' },
			{ level: '14', feature: 'Impossible Outcome' }
		])
	]),
	pathSection('favored-by-fortune', 'Favored by Fortune', [
		pathParagraph('You gain one additional Fortune Die.'),
		pathParagraph(
			'When you roll initiative and have no Fortune Dice remaining, you regain one Fortune Die.'
		)
	]),
	pathSection('twist-misfortune', 'Twist Misfortune', [
		pathParagraph(
			'You can use Fortune Dice to affect damage and healing. When a creature you can see within 30 feet rolls damage or restores hit points, you can use your reaction and expend one Fortune Die.'
		),
		pathList([
			'Add the result to one damage or healing roll made by you or an ally.',
			'Subtract the result from one damage roll made by an enemy.'
		]),
		pathParagraph(
			'When subtracting damage, the reduction applies to one creature damaged by the effect.'
		)
	]),
	pathSection('fortunes-reversal', 'Fortune\'s Reversal', [
		pathParagraph(
			'When you or an ally you can see within 30 feet rolls a natural 1 on an attack roll, ability check or saving throw, you can use your reaction and expend one Fortune Die to force that creature to reroll the d20.'
		),
		pathParagraph(
			'When an enemy you can see within 30 feet rolls a natural 20 on an attack roll, you can use your reaction and expend one Fortune Die to force the enemy to reroll the d20. The new roll must be used.'
		)
	]),
	pathSection('impossible-outcome', 'Impossible Outcome', [
		pathParagraph(
			'When you or an ally you can see within 60 feet makes an attack roll, ability check or saving throw, you can replace the d20 result with a 20.'
		),
		pathParagraph(
			'Alternatively, when an enemy you can see within 60 feet makes an attack roll, ability check or saving throw, you can replace the d20 result with a 1.'
		),
		pathParagraph(
			'You make this decision after the roll is made but before the outcome is announced. Once you use this feature, you cannot use it again until you finish a long rest.'
		)
	]),
	pathSection('play-this-path-if', 'Play This Path If You Want To', [
		pathList([
			'Manipulate d20 rolls.',
			'Protect allies from failed saves.',
			'Cancel enemy critical hits.',
			'Improve damage and healing rolls.',
			'Force an extraordinary result at a decisive moment.'
		])
	])
] as const;

export const shinobi = {
	...shinobiClass,
	page: {
		...shinobiClass.page,
		images
	},
	content: {
		...shinobiClass.content,
		progression: shinobiProgression,
		sections: {
			...shinobiClass.content.sections,
			detailSections: [shinobiWeaponPresentation],
			subclasses: {
				id: 'shinobi-references',
				title: 'Shinobi References',
				blocks: [
					{
						type: 'card-grid',
						groups: [
							{
								title: 'Shinobi Paths',
								cards: [
									{
										page: 'internals.classes.shinobi.subclasses.paths',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.taijutsu',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.elementalNinjutsu',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.genjutsu',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.bloodline',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.medical',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.sealing',
										source: 'D&D Portal homebrew'
									},
									{
										page: 'internals.classes.shinobi.subclasses.fortune',
										source: 'D&D Portal homebrew'
									}
								]
							}
						]
					}
				]
			}
		},
		tableOfContents: [
			...shinobiClass.content.tableOfContents.slice(0, 2),
			{
				id: 'shinobi-weapon-presentation',
				title: 'Shinobi Weapon Presentation'
			},
			...shinobiClass.content.tableOfContents.slice(2).map((section) =>
				section.id === 'subclasses'
					? {
							...section,
							id: 'shinobi-references',
							title: 'Shinobi References'
						}
					: section
			)
		]
	},
	subclasses: {
		paths: createShinobiPath(
			'paths',
			'Shinobi Paths',
			'Specialized disciplines that determine how a Shinobi applies martial training and chakra.',
			pathsOverviewSections
		),
		elementalNinjutsu: createShinobiPath(
			'path-of-elemental-ninjutsu',
			'Path of Elemental Ninjutsu',
			'Elemental chakra techniques focused on offensive and environmental control.',
			elementalSections
		),
		fortune: createShinobiPath(
			'path-of-fortune',
			'Path of Fortune',
			'Luck, timing, and altered outcomes shaped through Shinobi training.',
			fortuneSections
		),
		genjutsu: createShinobiPath(
			'path-of-genjutsu',
			'Path of Genjutsu',
			'Illusion, misdirection, and mental pressure expressed through chakra.',
			genjutsuSections
		),
		sealing: createShinobiPath(
			'path-of-sealing',
			'Path of Sealing',
			'Restraining, binding, storing, and suppressing effects through sealing arts.',
			sealingSections
		),
		taijutsu: createShinobiPath(
			'path-of-taijutsu',
			'Path of Taijutsu',
			'Close-quarters physical technique, mobility, and disciplined body control.',
			taijutsuSections
		),
		bloodline: createShinobiPath(
			'path-of-the-bloodline',
			'Path of the Bloodline',
			'Inherited power that changes the Shinobi through a distinct bloodline gift.',
			bloodlineSections
		),
		medical: createShinobiPath(
			'path-of-the-medical-shinobi',
			'Path of the Medical Shinobi',
			'Healing, stabilization, and precise chakra control used to keep allies alive.',
			medicalSections
		)
	}
} as const;
