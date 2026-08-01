import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import type {
	CoreTraitsData,
	InlineContent,
	PageContentBlock,
	PageContentSection,
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

const berserkerImages = {
	female: {
		...barbarianImages.female,
		alt: 'A Berserker Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const zealotImages = {
	male: {
		...barbarianImages.male,
		alt: 'A Zealot Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const ancestralGuardianImages = {
	female: {
		...barbarianImages.female,
		alt: 'An Ancestral Guardian Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const battleragerImages = {
	male: {
		...barbarianImages.male,
		alt: 'A Battlerager Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const beastImages = {
	female: {
		...barbarianImages.female,
		alt: 'A Beast Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const giantImages = {
	male: {
		...barbarianImages.male,
		alt: 'A Giant Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const stormHeraldImages = {
	female: {
		...barbarianImages.female,
		alt: 'A Storm Herald Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const totemWarriorImages = {
	male: {
		...barbarianImages.male,
		alt: 'A Totem Warrior Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const wildMagicImages = {
	female: {
		...barbarianImages.female,
		alt: 'A Wild Magic Barbarian subclass fallback portrait.',
		position: 'right top'
	}
} as const;

const abilityScoreLinks = {
	strength: {
		type: 'link',
		path: 'internals.rules.abilityScores.strength'
	},
	dexterity: {
		type: 'link',
		path: 'internals.rules.abilityScores.dexterity'
	},
	constitution: {
		type: 'link',
		path: 'internals.rules.abilityScores.constitution'
	},
	wisdom: {
		type: 'link',
		path: 'internals.rules.abilityScores.wisdom'
	},
	charisma: {
		type: 'link',
		path: 'internals.rules.abilityScores.charisma'
	}
} as const;

const damageTypeLinks = {
	acid: {
		type: 'link',
		path: 'internals.rules.damageTypes.acid'
	},
	bludgeoning: {
		type: 'link',
		path: 'internals.rules.damageTypes.bludgeoning'
	},
	cold: {
		type: 'link',
		path: 'internals.rules.damageTypes.cold'
	},
	fire: {
		type: 'link',
		path: 'internals.rules.damageTypes.fire'
	},
	force: {
		type: 'link',
		path: 'internals.rules.damageTypes.force'
	},
	lightning: {
		type: 'link',
		path: 'internals.rules.damageTypes.lightning'
	},
	necrotic: {
		type: 'link',
		path: 'internals.rules.damageTypes.necrotic'
	},
	piercing: {
		type: 'link',
		path: 'internals.rules.damageTypes.piercing'
	},
	psychic: {
		type: 'link',
		path: 'internals.rules.damageTypes.psychic'
	},
	radiant: {
		type: 'link',
		path: 'internals.rules.damageTypes.radiant'
	},
	slashing: {
		type: 'link',
		path: 'internals.rules.damageTypes.slashing'
	},
	thunder: {
		type: 'link',
		path: 'internals.rules.damageTypes.thunder'
	}
} as const;

const conditionLinks = {
	blinded: {
		type: 'link',
		path: 'internals.rules.conditions.blinded'
	},
	charmed: {
		type: 'link',
		path: 'internals.rules.conditions.charmed'
	},
	deafened: {
		type: 'link',
		path: 'internals.rules.conditions.deafened'
	},
	exhaustion: {
		type: 'link',
		path: 'internals.rules.conditions.exhaustion'
	},
	frightened: {
		type: 'link',
		path: 'internals.rules.conditions.frightened'
	},
	incapacitated: {
		type: 'link',
		path: 'internals.rules.conditions.incapacitated'
	},
	prone: {
		type: 'link',
		path: 'internals.rules.conditions.prone'
	},
	unconscious: {
		type: 'link',
		path: 'internals.rules.conditions.unconscious'
	}
} as const;

const actionLinks = {
	attackAction: {
		type: 'link',
		path: 'internals.rules.actions.attackAction'
	},
	bonusAction: {
		type: 'link',
		path: 'internals.rules.actions.bonusAction'
	},
	dash: {
		type: 'link',
		path: 'internals.rules.actions.dash'
	},
	reaction: {
		type: 'link',
		path: 'internals.rules.actions.reaction'
	}
} as const;

const movementLinks = {
	climbing: {
		type: 'link',
		path: 'internals.rules.movement.climbing'
	},
	flying: {
		type: 'link',
		path: 'internals.rules.movement.flying'
	},
	jumping: {
		type: 'link',
		path: 'internals.rules.movement.jumping'
	},
	speed: {
		type: 'link',
		path: 'internals.rules.movement.speed'
	},
	swimming: {
		type: 'link',
		path: 'internals.rules.movement.swimming'
	}
} as const;

const equipmentLinks = {
	heavyArmor: {
		type: 'link',
		path: 'internals.rules.equipment.heavyArmor',
		label: 'heavy armor'
	},
	shield: {
		type: 'link',
		path: 'internals.rules.equipment.shields',
		label: 'shield'
	}
} as const;

const combatLinks = {
	armorClass: {
		type: 'link',
		path: 'internals.rules.combat.armorClass',
		label: 'armor class'
	},
	attackRolls: {
		type: 'link',
		path: 'internals.rules.combat.attackRoll',
		label: 'attack rolls'
	},
	criticalHit: {
		type: 'link',
		path: 'internals.rules.combat.criticalHit',
		label: 'critical hit'
	},
	damageRoll: {
		type: 'link',
		path: 'internals.rules.combat.damageRoll',
		label: 'damage roll'
	},
	hitPoints: {
		type: 'link',
		path: 'internals.rules.combat.hitPoints',
		label: 'hit points'
	},
	initiativeRolls: {
		type: 'link',
		path: 'internals.rules.combat.initiativeRoll',
		label: 'initiative rolls'
	},
	meleeAttack: {
		type: 'link',
		path: 'internals.rules.combat.meleeAttack',
		label: 'melee attack'
	},
	meleeWeaponAttack: {
		type: 'link',
		path: 'internals.rules.combat.meleeWeaponAttack',
		label: 'melee weapon attack'
	}
} as const;

const restLinks = {
	longRest: {
		type: 'link',
		path: 'internals.rules.rests.longRest',
		label: 'long rest'
	},
	shortRest: {
		type: 'link',
		path: 'internals.rules.rests.shortRest',
		label: 'short rest'
	}
} as const;

const spellcastingLinks = {
	concentration: {
		type: 'link',
		path: 'internals.rules.spellcasting.concentration',
		label: 'concentrate'
	},
	spells: {
		type: 'link',
		path: 'internals.rules.spellcasting.spells',
		label: 'spells'
	}
} as const;

const d20TestLinks = {
	abilityChecks: {
		type: 'link',
		path: 'internals.rules.d20Tests.abilityCheck',
		label: 'checks'
	},
	difficultyClass: {
		type: 'link',
		path: 'internals.rules.d20Tests.difficultyClass',
		label: 'DC'
	},
	savingThrow: {
		type: 'link',
		path: 'internals.rules.d20Tests.savingThrow',
		label: 'saving throw'
	},
	savingThrows: {
		type: 'link',
		path: 'internals.rules.d20Tests.savingThrow',
		label: 'saving throws'
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
		text: ' score of 13 or higher in order to multiclass in or out of this class.'
	}
] as const;

const sections = {
	multiclassing: {
		id: 'multiclassing',
		title: 'Multiclassing'
	},
	progression: {
		id: 'progression',
		title: 'The Barbarian'
	},
	classFeatures: {
		id: 'class-features',
		title: 'Class Features'
	},
	coreTraits: {
		id: 'core-traits',
		title: 'Core Traits'
	},
	hitPoints: {
		id: 'hit-points',
		title: 'Hit Points'
	},
	proficiencies: {
		id: 'proficiencies',
		title: 'Proficiencies'
	},
	startingEquipment: {
		id: 'starting-equipment',
		title: 'Starting Equipment'
	},
	rage: {
		id: 'rage',
		title: 'Rage'
	},
	unarmoredDefense: {
		id: 'unarmored-defense',
		title: 'Unarmored Defense'
	},
	dangerSense: {
		id: 'danger-sense',
		title: 'Danger Sense'
	},
	recklessAttack: {
		id: 'reckless-attack',
		title: 'Reckless Attack'
	},
	primalPath: {
		id: 'primal-path',
		title: 'Primal Path'
	},
	primalKnowledge: {
		id: 'primal-knowledge',
		title: 'Primal Knowledge'
	},
	abilityScoreImprovement: {
		id: 'ability-score-improvement',
		title: 'Ability Score Improvement'
	},
	extraAttack: {
		id: 'extra-attack',
		title: 'Extra Attack'
	},
	fastMovement: {
		id: 'fast-movement',
		title: 'Fast Movement'
	},
	feralInstinct: {
		id: 'feral-instinct',
		title: 'Feral Instinct'
	},
	instinctivePounce: {
		id: 'instinctive-pounce',
		title: 'Instinctive Pounce'
	},
	brutalCritical: {
		id: 'brutal-critical',
		title: 'Brutal Critical'
	},
	relentlessRage: {
		id: 'relentless-rage',
		title: 'Relentless Rage'
	},
	persistentRage: {
		id: 'persistent-rage',
		title: 'Persistent Rage'
	},
	indomitableMight: {
		id: 'indomitable-might',
		title: 'Indomitable Might'
	},
	primalChampion: {
		id: 'primal-champion',
		title: 'Primal Champion'
	},
	primalPaths: {
		id: 'primal-paths',
		title: 'Primal Paths'
	}
} as const;

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
			label: 'Hit Dice',
			value: [{ type: 'text', text: '1d12 per barbarian level' }]
		},
		{
			label: 'Saving Throws',
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
			label: 'Skills',
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
			label: 'Weapons',
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
			label: 'Armor',
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
			label: 'Optie 1',
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
						label: 'Any martial melee weapon'
					}
				]
			]
		},
		{
			label: 'Optie 2',
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
						label: 'Any simple weapon'
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

const startingEquipmentIntro = [
	{
		type: 'text',
		text: `You start with the following equipment, in addition to the
			equipment granted by your background.`
	}
] as const;

function getCoreTrait(label: (typeof coreTraits.traits)[number]['label']) {
	const trait = coreTraits.traits.find((row) => row.label === label);

	if (!trait) {
		throw new Error(`Missing Barbarian core trait: ${label}`);
	}

	return trait;
}

const hitPointRows = [
	getCoreTrait('Hit Dice'),
	{
		label: 'Hit Points at 1st Level',
		value: [
			{ type: 'text', text: '12 + your ' },
			abilityScoreLinks.constitution,
			{ type: 'text', text: ' modifier' }
		]
	},
	{
		label: 'Hit Points at Higher Levels',
		value: [
			{
				type: 'text',
				text: '1d12 (or 7) + your '
			},
			abilityScoreLinks.constitution,
			{
				type: 'text',
				text: ' modifier per barbarian level after 1st'
			}
		]
	}
] as const;

const proficiencyRows = [
	getCoreTrait('Armor'),
	getCoreTrait('Weapons'),
	{
		label: 'Tools',
		value: [{ type: 'text', text: 'None' }]
	},
	getCoreTrait('Saving Throws'),
	getCoreTrait('Skills')
] as const;

const primalPathCardGroups = [
	{
		title: 'Official Paths',
		cards: [
			{
				page: 'internals.classes.barbarian.subclasses.ancestralGuardian',
				source: `Xanathar's Guide to Everything`
			},
			{
				page: 'internals.classes.barbarian.subclasses.battlerager',
				source: `Sword Coast Adventurer's Guide`
			},
			{
				page: 'internals.classes.barbarian.subclasses.beast',
				source: `Tasha's Cauldron of Everything`
			},
			{
				page: 'internals.classes.barbarian.subclasses.berserker',
				source: `Player's Handbook`
			},
			{
				page: 'internals.classes.barbarian.subclasses.giant',
				source: 'Bigby Presents: Glory of the Giants'
			},
			{
				page: 'internals.classes.barbarian.subclasses.stormHerald',
				source: `Xanathar's Guide to Everything`
			},
			{
				page: 'internals.classes.barbarian.subclasses.totemWarrior',
				source: `Player's Handbook`
			},
			{
				page: 'internals.classes.barbarian.subclasses.wildMagic',
				source: `Tasha's Cauldron of Everything`
			},
			{
				page: 'internals.classes.barbarian.subclasses.zealot',
				source: `Xanathar's Guide to Everything`
			}
		]
	},
	{
		title: 'Archived Unearthed Arcana',
		cards: [
			{
				title: 'Beast',
				source: 'Unearthed Arcana 67: Subclasses, Part 1',
				description: `An archived Unearthed Arcana Barbarian Primal Path
					option from Unearthed Arcana 67: Subclasses, Part 1.`
			},
			{
				title: 'Giant',
				source: 'Unearthed Arcana 83: Giant Options',
				description: `An archived Unearthed Arcana Barbarian Primal Path
					option from Unearthed Arcana 83: Giant Options.`
			},
			{
				title: 'Wild Soul',
				source: 'Unearthed Arcana 60: Barbarian and Monk',
				description: `An archived Unearthed Arcana Barbarian Primal Path
					option from Unearthed Arcana 60: Barbarian and Monk.`
			}
		]
	}
] as const;

const classFeatureSections = [
	{
		...sections.classFeatures,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'As a barbarian, you gain the following class features.'
					}
				]
			}
		]
	},
	{
		...sections.hitPoints,
		blocks: [
			{
				type: 'table',
				caption: 'Hit Points',
				columns: {
					label: 'Property',
					value: 'Value'
				},
				rows: hitPointRows
			}
		]
	},
	{
		...sections.proficiencies,
		blocks: [
			{
				type: 'table',
				caption: 'Proficiencies',
				columns: {
					label: 'Property',
					value: 'Value'
				},
				rows: proficiencyRows
			}
		]
	},
	{
		...sections.rage,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `In battle, you fight with primal ferocity. On your
							turn, you can enter a rage as a `
					},
					actionLinks.bonusAction,
					{
						type: 'text',
						text: '.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `While raging, you gain the following benefits if
							you aren't wearing `
					},
					equipmentLinks.heavyArmor,
					{
						type: 'text',
						text: ':'
					}
				]
			},
			{
				type: 'list',
				items: [
					[
						{
							type: 'text',
							text: 'You have advantage on '
						},
						abilityScoreLinks.strength,
						{
							type: 'text',
							text: ' '
						},
						d20TestLinks.abilityChecks,
						{
							type: 'text',
							text: ' and '
						},
						abilityScoreLinks.strength,
						{
							type: 'text',
							text: ' '
						},
						d20TestLinks.savingThrows,
						{
							type: 'text',
							text: '.'
						}
					],
					[
						{
							type: 'text',
							text: 'When you make a '
						},
						combatLinks.meleeWeaponAttack,
						{
							type: 'text',
							text: ' using '
						},
						abilityScoreLinks.strength,
						{
							type: 'text',
							text: ', you gain a bonus to the '
						},
						combatLinks.damageRoll,
						{
							type: 'text',
							text: ` that increases as you gain levels as a
								barbarian, as shown in the Rage Damage column of
								the Barbarian table.`
						}
					],
					[
						{
							type: 'text',
							text: 'You have resistance to '
						},
						damageTypeLinks.bludgeoning,
						{
							type: 'text',
							text: ', '
						},
						damageTypeLinks.piercing,
						{
							type: 'text',
							text: ', and '
						},
						damageTypeLinks.slashing,
						{
							type: 'text',
							text: ' damage.'
						}
					]
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `If you are able to cast `
					},
					spellcastingLinks.spells,
					{
						type: 'text',
						text: `, you can't cast them or `
					},
					spellcastingLinks.concentration,
					{
						type: 'text',
						text: ' on them while raging.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Your rage lasts for 1 minute. It ends early if you
							are knocked `
					},
					conditionLinks.unconscious,
					{
						type: 'text',
						text: ` or if your turn ends and you haven't attacked a
							hostile creature since your last turn or taken damage
							since then. You can also end your rage on your turn
							as a `
					},
					actionLinks.bonusAction,
					{
						type: 'text',
						text: '.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Once you have raged the number of times shown for
							your barbarian level in the Rages column of the
							Barbarian table, you must finish a `
					},
					restLinks.longRest,
					{
						type: 'text',
						text: ' before you can rage again.'
					}
				]
			}
		]
	},
	{
		...sections.unarmoredDefense,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `While you are not wearing any armor, your `
					},
					combatLinks.armorClass,
					{
						type: 'text',
						text: ' equals:'
					}
				]
			},
			{
				type: 'formula',
				content: [
					{
						type: 'text',
						text: '10 + your '
					},
					abilityScoreLinks.dexterity,
					{
						type: 'text',
						text: ' modifier + your '
					},
					abilityScoreLinks.constitution,
					{
						type: 'text',
						text: ' modifier'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'You can use a '
					},
					equipmentLinks.shield,
					{
						type: 'text',
						text: ' and still gain this benefit.'
					}
				]
			}
		]
	},
	{
		...sections.dangerSense,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `At 2nd level, you gain an uncanny sense of when
							things nearby aren't as they should be, giving you
							an edge when you dodge away from danger.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'You have advantage on '
					},
					abilityScoreLinks.dexterity,
					{
						type: 'text',
						text: ' '
					},
					d20TestLinks.savingThrows,
					{
						type: 'text',
						text: ` against effects that you can see, such as traps
							and `
					},
					spellcastingLinks.spells,
					{
						type: 'text',
						text: '.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `To gain this benefit, you can't be `
					},
					conditionLinks.blinded,
					{
						type: 'text',
						text: ', '
					},
					conditionLinks.deafened,
					{
						type: 'text',
						text: ', or '
					},
					conditionLinks.incapacitated,
					{
						type: 'text',
						text: '.'
					}
				]
			}
		]
	},
	{
		...sections.recklessAttack,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Starting at 2nd level, you can throw aside all
							concern for defense to attack with fierce
							desperation.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `When you make your first attack on your turn, you
							can decide to attack recklessly.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Doing so gives you advantage on '
					},
					combatLinks.meleeWeaponAttack,
					{
						type: 'text',
						text: ' '
					},
					combatLinks.attackRolls,
					{
						type: 'text',
						text: ' using '
					},
					abilityScoreLinks.strength,
					{
						type: 'text',
						text: ' during this turn, but '
					},
					combatLinks.attackRolls,
					{
						type: 'text',
						text: ` against you have advantage until your next turn.`
					}
				]
			}
		]
	},
	{
		...sections.primalPath,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `At 3rd level, you choose a path that shapes the
							nature of your rage.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Your choice grants you features at 3rd level and
							again at 6th, 10th, and 14th levels.`
					}
				]
			},
			{
				type: 'card-grid',
				groups: primalPathCardGroups
			}
		]
	},
	{
		...sections.primalKnowledge,
		optional: true,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `When you reach 3rd level and again at 10th level,
							you gain proficiency in one skill of your choice
							from the list of skills available to barbarians at
							1st level.`
					}
				]
			}
		]
	},
	{
		...sections.abilityScoreImprovement,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `When you reach 4th level, and again at 8th, 12th,
							16th, and 19th level, you can increase one ability
							score of your choice by 2, or you can increase two
							ability scores of your choice by 1.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `As normal, you can't increase an ability score
							above 20 using this feature.`
					}
				]
			}
		]
	},
	{
		...sections.extraAttack,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Beginning at 5th level, you can attack twice,
							instead of once, whenever you take the `
					},
					actionLinks.attackAction,
					{
						type: 'text',
						text: ' on your turn.'
					}
				]
			}
		]
	},
	{
		...sections.fastMovement,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Starting at 5th level, your `
					},
					movementLinks.speed,
					{
						type: 'text',
						text: ` increases by 10 feet while you aren't wearing `
					},
					equipmentLinks.heavyArmor,
					{
						type: 'text',
						text: '.'
					}
				]
			}
		]
	},
	{
		...sections.feralInstinct,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `By 7th level, your instincts are so honed that you
							have advantage on `
					},
					combatLinks.initiativeRolls,
					{
						type: 'text',
						text: '.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Additionally, if you are surprised at the
							beginning of combat and aren't `
					},
					conditionLinks.incapacitated,
					{
						type: 'text',
						text: `, you can act normally on your first turn, but
							only if you enter your rage before doing anything
							else on that turn.`
					}
				]
			}
		]
	},
	{
		...sections.instinctivePounce,
		optional: true,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `At 7th level, as part of the `
					},
					actionLinks.bonusAction,
					{
						type: 'text',
						text: ` you take to enter your rage, you can move up to
							half your `
					},
					movementLinks.speed,
					{
						type: 'text',
						text: '.'
					}
				]
			}
		]
	},
	{
		...sections.brutalCritical,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Beginning at 9th level, you can roll one additional
							weapon damage die when determining the extra damage
							for a `
					},
					combatLinks.criticalHit,
					{
						type: 'text',
						text: ' with a '
					},
					combatLinks.meleeAttack,
					{
						type: 'text',
						text: '.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `This increases to two additional dice at 13th level
							and three additional dice at 17th level.`
					}
				]
			}
		]
	},
	{
		...sections.relentlessRage,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Starting at 11th level, your rage can keep you
							fighting despite grievous wounds.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `If you drop to 0 `
					},
					combatLinks.hitPoints,
					{
						type: 'text',
						text: ` while you're raging and don't die outright, you
							can make a `
					},
					d20TestLinks.difficultyClass,
					{
						type: 'text',
						text: ' 10 '
					},
					abilityScoreLinks.constitution,
					{
						type: 'text',
						text: ' '
					},
					d20TestLinks.savingThrow,
					{
						type: 'text',
						text: '.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'If you succeed, you drop to 1 hit point instead.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Each time you use this feature after the first, the
							DC increases by 5.`
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'When you finish a '
					},
					restLinks.shortRest,
					{
						type: 'text',
						text: ' or '
					},
					restLinks.longRest,
					{
						type: 'text',
						text: ', the DC resets to 10.'
					}
				]
			}
		]
	},
	{
		...sections.persistentRage,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Beginning at 15th level, your rage is so fierce
							that it ends early only if you fall `
					},
					conditionLinks.unconscious,
					{
						type: 'text',
						text: ' or if you choose to end it.'
					}
				]
			}
		]
	},
	{
		...sections.indomitableMight,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: `Beginning at 18th level, if your total for a
							`
					},
					abilityScoreLinks.strength,
					{
						type: 'text',
						text: ' check is less than your '
					},
					abilityScoreLinks.strength,
					{
						type: 'text',
						text: ` score, you can use that score in place of the
							total.`
					}
				]
			}
		]
	},
	{
		...sections.primalChampion,
		blocks: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'At 20th level, you embody the power of the wilds.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Your '
					},
					abilityScoreLinks.strength,
					{
						type: 'text',
						text: ' and '
					},
					abilityScoreLinks.constitution,
					{
						type: 'text',
						text: ' scores increase by 4.'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Your maximum for those scores is now 24.'
					}
				]
			}
		]
	}
] as const satisfies readonly PageContentSection[];

const barbarianProgression = {
	title: 'The Barbarian',
	heading: 'The Barbarian',
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
				{ label: 'Rage', sectionId: sections.rage.id },
				{ label: 'Unarmored Defense', sectionId: sections.unarmoredDefense.id }
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
				{ label: 'Reckless Attack', sectionId: sections.recklessAttack.id },
				{ label: 'Danger Sense', sectionId: sections.dangerSense.id }
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
				{ label: 'Primal Path', sectionId: sections.primalPath.id },
				{
					label: 'Primal Knowledge',
					sectionId: sections.primalKnowledge.id,
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
			features: [
				{
					label: 'Ability Score Improvement',
					sectionId: sections.abilityScoreImprovement.id
				}
			],
			values: {
				rages: 3,
				rageDamage: 2
			}
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [
				{ label: 'Extra Attack', sectionId: sections.extraAttack.id },
				{ label: 'Fast Movement', sectionId: sections.fastMovement.id }
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
				{ label: 'Feral Instinct', sectionId: sections.feralInstinct.id },
				{
					label: 'Instinctive Pounce',
					sectionId: sections.instinctivePounce.id,
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
			features: [
				{
					label: 'Ability Score Improvement',
					sectionId: sections.abilityScoreImprovement.id
				}
			],
			values: {
				rages: 4,
				rageDamage: 2
			}
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Brutal Critical (1 die)',
					sectionId: sections.brutalCritical.id
				}
			],
			values: {
				rages: 4,
				rageDamage: 3
			}
		},
		{
			level: 10,
			proficiencyBonus: 4,
			features: [
				{ label: 'Path Feature' },
				{
					label: 'Primal Knowledge',
					sectionId: sections.primalKnowledge.id,
					optional: true
				}
			],
			values: {
				rages: 4,
				rageDamage: 3
			}
		},
		{
			level: 11,
			proficiencyBonus: 4,
			features: [
				{ label: 'Relentless Rage', sectionId: sections.relentlessRage.id }
			],
			values: {
				rages: 4,
				rageDamage: 3
			}
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [
				{
					label: 'Ability Score Improvement',
					sectionId: sections.abilityScoreImprovement.id
				}
			],
			values: {
				rages: 5,
				rageDamage: 3
			}
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Brutal Critical (2 dice)',
					sectionId: sections.brutalCritical.id
				}
			],
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
			features: [
				{ label: 'Persistent Rage', sectionId: sections.persistentRage.id }
			],
			values: {
				rages: 5,
				rageDamage: 3
			}
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [
				{
					label: 'Ability Score Improvement',
					sectionId: sections.abilityScoreImprovement.id
				}
			],
			values: {
				rages: 5,
				rageDamage: 4
			}
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Brutal Critical (3 dice)',
					sectionId: sections.brutalCritical.id
				}
			],
			values: {
				rages: 6,
				rageDamage: 4
			}
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [
				{ label: 'Indomitable Might', sectionId: sections.indomitableMight.id }
			],
			values: {
				rages: 6,
				rageDamage: 4
			}
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [
				{
					label: 'Ability Score Improvement',
					sectionId: sections.abilityScoreImprovement.id
				}
			],
			values: {
				rages: 6,
				rageDamage: 4
			}
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [
				{ label: 'Primal Champion', sectionId: sections.primalChampion.id }
			],
			values: {
				rages: 'Unlimited',
				rageDamage: 4
			}
		}
	]
} as const satisfies ProgressionData;

type BarbarianSubclassKey = keyof typeof current.subclasses;
type BarbarianSubclassImage = {
	readonly alt: string;
	readonly caption?: string;
	readonly position?: string;
	readonly sources: {
		readonly s: string;
		readonly m: string;
		readonly l: string;
	};
};
type BarbarianSubclassImages = Partial<
	Record<'female' | 'male', BarbarianSubclassImage>
>;

function textParagraph(text: string): PageContentBlock {
	return {
		type: 'paragraph',
		content: [
			{
				type: 'text',
				text
			}
		]
	};
}

function paragraph(content: InlineContent): PageContentBlock {
	return {
		type: 'paragraph',
		content
	};
}

function featureSection(
	id: string,
	title: string,
	blocks: readonly PageContentBlock[]
): PageContentSection {
	return {
		id,
		title,
		blocks
	};
}

function createSubclassPage(
	key: BarbarianSubclassKey,
	source: string,
	shortDescription: string,
	longDescription: readonly InlineContent[],
	featureSections: readonly PageContentSection[],
	images: BarbarianSubclassImages
) {
	const subclass = current.subclasses[key];

	return createInternalPage({
		href: `${baseUrl}/${subclass.name.slug}`,

		img: current.logos.simple,

		images: {
			card: images,
			header: images
		},

		label: subclass.name.short,
		title: `${website.name.short} - ${subclass.name.normal}`,
		subTitle: `${current.name.normal} subclass`,
		descriptions: {
			short: shortDescription,
			medium: `Explore the ${subclass.name.normal}, a Barbarian Primal
				Path from ${source}.`,
			long: longDescription
		},

		header: {
			sections: [
				{
					id: `${subclass.name.slug}-source`,
					title: 'Source',
					content: [
						{
							type: 'text',
							text: source
						}
					]
				}
			]
		},

		navigation: {
			parent: 'internals.classes.barbarian.page'
		},

		tags: [
			'barbarian',
			'subclass',
			'primal-path',
			subclass.name.slug
		],

		content: {
			source,
			featureSections,
			tableOfContents: featureSections.map(({ id, title }) => ({
				id,
				title
			}))
		}
	});
}

const subclassFeatureSections = {
	ancestralGuardian: [
		featureSection('ancestral-protectors', 'Ancestral Protectors', [
			paragraph([
				{ type: 'text', text: 'While you are raging, the first creature you hit with an ' },
				combatLinks.attackRolls,
				{ type: 'text', text: ' on your turn becomes the focus of your ancestral spirits until the start of your next turn.' }
			]),
			textParagraph(
				'That creature has a harder time harming anyone except you, and your allies are protected against the damage it deals.'
			)
		]),
		featureSection('spirit-shield', 'Spirit Shield', [
			paragraph([
				{ type: 'text', text: 'While raging, you can use your ' },
				actionLinks.reaction,
				{ type: 'text', text: ' to reduce damage taken by a creature you can see within 30 feet.' }
			]),
			textParagraph(
				'The spirit shield becomes stronger as you gain Barbarian levels.'
			)
		]),
		featureSection('consult-the-spirits', 'Consult the Spirits', [
			textParagraph(
				'You can call on ancestral spirits to cast divination magic without using a spell slot or material components.'
			),
			paragraph([
				{ type: 'text', text: 'Your ' },
				abilityScoreLinks.wisdom,
				{ type: 'text', text: ' is the spellcasting ability for this feature, and the use refreshes after a ' },
				restLinks.shortRest,
				{ type: 'text', text: ' or ' },
				restLinks.longRest,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('vengeful-ancestors', 'Vengeful Ancestors', [
			paragraph([
				{ type: 'text', text: 'When Spirit Shield prevents damage, your ancestral spirits also strike back with ' },
				damageTypeLinks.force,
				{ type: 'text', text: ' damage equal to the amount prevented.' }
			])
		])
	],

	battlerager: [
		featureSection('battlerager-restriction', 'Restriction: Dwarves Only', [
			textParagraph(
				'This path is normally limited to dwarves, though a DM can lift that restriction to fit the campaign.'
			)
		]),
		featureSection('battlerager-armor', 'Battlerager Armor', [
			paragraph([
				{ type: 'text', text: 'Spiked armor becomes part of your fighting style. While raging in it, you can make a spiked-armor ' },
				combatLinks.meleeWeaponAttack,
				{ type: 'text', text: ' as a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: '.' }
			]),
			paragraph([
				{ type: 'text', text: 'The armor can also deal ' },
				damageTypeLinks.piercing,
				{ type: 'text', text: ' damage when you successfully grapple a creature.' }
			])
		]),
		featureSection('reckless-abandon', 'Reckless Abandon', [
			paragraph([
				{ type: 'text', text: 'When you use Reckless Attack while raging, you gain temporary ' },
				combatLinks.hitPoints,
				{ type: 'text', text: ' based on your ' },
				abilityScoreLinks.constitution,
				{ type: 'text', text: ' modifier.' }
			])
		]),
		featureSection('battlerager-charge', 'Battlerager Charge', [
			paragraph([
				{ type: 'text', text: 'While raging, you can ' },
				actionLinks.dash,
				{ type: 'text', text: ' as a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('spiked-retribution', 'Spiked Retribution', [
			paragraph([
				{ type: 'text', text: 'When a nearby creature hits you with a ' },
				combatLinks.meleeAttack,
				{ type: 'text', text: ', your spiked armor deals ' },
				damageTypeLinks.piercing,
				{ type: 'text', text: ' damage back if you are raging and not ' },
				conditionLinks.incapacitated,
				{ type: 'text', text: '.' }
			])
		])
	],

	beast: [
		featureSection('form-of-the-beast', 'Form of the Beast', [
			paragraph([
				{ type: 'text', text: 'When you rage, you manifest a natural weapon such as a bite, claws, or tail. It counts as a simple ' },
				combatLinks.meleeWeaponAttack,
				{ type: 'text', text: ' option for you.' }
			]),
			paragraph([
				{ type: 'text', text: 'The forms focus on survival, extra attacks during the ' },
				actionLinks.attackAction,
				{ type: 'text', text: ', or defensive ' },
				actionLinks.reaction,
				{ type: 'text', text: ' options that can raise your ' },
				combatLinks.armorClass,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('bestial-soul', 'Bestial Soul', [
			paragraph([
				{ type: 'text', text: 'Your natural weapons become magical, and after a rest you can choose a bestial adaptation for ' },
				movementLinks.swimming,
				{ type: 'text', text: ', ' },
				movementLinks.climbing,
				{ type: 'text', text: ', or ' },
				movementLinks.jumping,
				{ type: 'text', text: '.' }
			]),
			paragraph([
				{ type: 'text', text: 'Some options use your ' },
				movementLinks.speed,
				{ type: 'text', text: ' or a ' },
				abilityScoreLinks.strength,
				{ type: 'text', text: ' check to determine how far you can move.' }
			])
		]),
		featureSection('infectious-fury', 'Infectious Fury', [
			paragraph([
				{ type: 'text', text: 'When you hit a creature with your natural weapon while raging, you can force a ' },
				d20TestLinks.savingThrow,
				{ type: 'text', text: ' against a DC based on your ' },
				abilityScoreLinks.constitution,
				{ type: 'text', text: ' modifier.' }
			]),
			paragraph([
				{ type: 'text', text: 'On a failed save, the target either lashes out at another creature or suffers ' },
				damageTypeLinks.psychic,
				{ type: 'text', text: ' damage.' }
			])
		]),
		featureSection('call-the-hunt', 'Call the Hunt', [
			paragraph([
				{ type: 'text', text: 'When you rage, you can empower willing allies nearby. You gain temporary ' },
				combatLinks.hitPoints,
				{ type: 'text', text: ', and each empowered ally can add extra damage once on its turn.' }
			])
		])
	],

	berserker: [
		featureSection('frenzy', 'Frenzy', [
			paragraph([
				{ type: 'text', text: 'When you rage, you can enter a frenzy and make a ' },
				combatLinks.meleeWeaponAttack,
				{ type: 'text', text: ' as a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: ' on later turns during that rage.' }
			]),
			paragraph([
				{ type: 'text', text: 'When the frenzy ends, the strain gives you a level of ' },
				conditionLinks.exhaustion,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('mindless-rage', 'Mindless Rage', [
			paragraph([
				{ type: 'text', text: 'While raging, you cannot be ' },
				conditionLinks.charmed,
				{ type: 'text', text: ' or ' },
				conditionLinks.frightened,
				{ type: 'text', text: ', and either effect is suspended if it was already affecting you.' }
			])
		]),
		featureSection('intimidating-presence', 'Intimidating Presence', [
			paragraph([
				{ type: 'text', text: 'You can use your action to frighten a creature that can see or hear you. The save DC uses your ' },
				abilityScoreLinks.charisma,
				{ type: 'text', text: ' modifier.' }
			])
		]),
		featureSection('retaliation', 'Retaliation', [
			paragraph([
				{ type: 'text', text: 'When a creature within 5 feet damages you, you can use your ' },
				actionLinks.reaction,
				{ type: 'text', text: ' to make a ' },
				combatLinks.meleeWeaponAttack,
				{ type: 'text', text: ' against it.' }
			])
		])
	],

	giant: [
		featureSection('giants-power', "Giant's Power", [
			textParagraph(
				'You learn the Giant language or another language if you already know it, and you gain a primal cantrip tied to giant magic.'
			),
			paragraph([
				{ type: 'text', text: 'Your ' },
				abilityScoreLinks.wisdom,
				{ type: 'text', text: ' is the spellcasting ability for that cantrip.' }
			])
		]),
		featureSection('giants-havoc', "Giant's Havoc", [
			paragraph([
				{ type: 'text', text: 'While raging, your thrown weapon attacks can use your ' },
				abilityScoreLinks.strength,
				{ type: 'text', text: ' and add your Rage Damage, and your reach increases as your body grows larger.' }
			])
		]),
		featureSection('elemental-cleaver', 'Elemental Cleaver', [
			paragraph([
				{ type: 'text', text: 'When you rage, you can charge a weapon with ' },
				damageTypeLinks.acid,
				{ type: 'text', text: ', ' },
				damageTypeLinks.cold,
				{ type: 'text', text: ', ' },
				damageTypeLinks.fire,
				{ type: 'text', text: ', ' },
				damageTypeLinks.lightning,
				{ type: 'text', text: ', or ' },
				damageTypeLinks.thunder,
				{ type: 'text', text: ' power. It deals extra damage, can be thrown, and returns to your hand after a thrown attack.' }
			]),
			paragraph([
				{ type: 'text', text: 'You can later change the selected damage type with a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('mighty-impel', 'Mighty Impel', [
			paragraph([
				{ type: 'text', text: 'As a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: ', you can move a nearby creature to another space. Unwilling creatures make a ' },
				abilityScoreLinks.strength,
				{ type: 'text', text: ' ' },
				d20TestLinks.savingThrow,
				{ type: 'text', text: ' against your feature DC.' }
			])
		]),
		featureSection('demiurgic-colossus', 'Demiurgic Colossus', [
			textParagraph(
				'Your rage makes you larger and extends your reach further, while Mighty Impel and Elemental Cleaver both become stronger.'
			)
		])
	],

	stormHerald: [
		featureSection('storm-aura', 'Storm Aura', [
			paragraph([
				{ type: 'text', text: 'When you rage, you create a 10-foot storm aura. You can activate its effect when rage begins and again as a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: '.' }
			]),
			paragraph([
				{ type: 'text', text: 'Desert deals ' },
				damageTypeLinks.fire,
				{ type: 'text', text: ' damage nearby, sea calls ' },
				damageTypeLinks.lightning,
				{ type: 'text', text: ' with a ' },
				abilityScoreLinks.dexterity,
				{ type: 'text', text: ' ' },
				d20TestLinks.savingThrow,
				{ type: 'text', text: ', and tundra grants temporary ' },
				combatLinks.hitPoints,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('storm-soul', 'Storm Soul', [
			paragraph([
				{ type: 'text', text: 'Your chosen storm environment grants resistance and a practical environmental benefit tied to desert heat, sea travel, or tundra ' },
				damageTypeLinks.cold,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('shielding-storm', 'Shielding Storm', [
			textParagraph(
				'Creatures you choose inside your storm aura gain the same damage resistance granted by Storm Soul.'
			)
		]),
		featureSection('raging-storm', 'Raging Storm', [
			paragraph([
				{ type: 'text', text: 'Your aura gains a stronger retaliatory or control effect while raging, such as damaging attackers, knocking foes ' },
				conditionLinks.prone,
				{ type: 'text', text: ', or reducing ' },
				movementLinks.speed,
				{ type: 'text', text: '.' }
			])
		])
	],

	totemWarrior: [
		featureSection('spirit-seeker', 'Spirit Seeker', [
			textParagraph(
				'You gain ritual access to animal-focused magic that helps you sense through or speak with beasts.'
			)
		]),
		featureSection('totem-spirit', 'Totem Spirit', [
			paragraph([
				{ type: 'text', text: 'When you adopt a totem spirit, your rage gains a persistent benefit such as broad damage resistance, improved movement, longer jumps, or pack support for allied ' },
				combatLinks.meleeAttack,
				{ type: 'text', text: ' rolls.' }
			])
		]),
		featureSection('aspect-of-the-beast', 'Aspect of the Beast', [
			textParagraph(
				'Your chosen spirit grants a broader exploration benefit tied to carrying, sight, travel pace, skills, tracking, or stealth.'
			)
		]),
		featureSection('spirit-walker', 'Spirit Walker', [
			textParagraph(
				'You can commune with the natural world through your totem spirit by casting nature-focused divination magic as a ritual.'
			)
		]),
		featureSection('totemic-attunement', 'Totemic Attunement', [
			paragraph([
				{ type: 'text', text: 'Your totem bond deepens into a combat feature that can protect allies, grant rage-powered flight, knock enemies ' },
				conditionLinks.prone,
				{ type: 'text', text: ', or add another ' },
				combatLinks.meleeWeaponAttack,
				{ type: 'text', text: '.' }
			])
		])
	],

	wildMagic: [
		featureSection('magic-awareness', 'Magic Awareness', [
			paragraph([
				{ type: 'text', text: 'As an action, you can sense nearby ' },
				spellcastingLinks.spells,
				{ type: 'text', text: ' and magic items that are not hidden behind total cover.' }
			]),
			paragraph([
				{ type: 'text', text: 'Uses refresh after a ' },
				restLinks.longRest,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('wild-surge', 'Wild Surge', [
			paragraph([
				{ type: 'text', text: 'When you rage, you roll for a magical surge. Some results call for a ' },
				d20TestLinks.savingThrow,
				{ type: 'text', text: ' against a DC based on your ' },
				abilityScoreLinks.constitution,
				{ type: 'text', text: ' modifier.' }
			]),
			textParagraph(
				'The surge table can teleport you, harm enemies, protect allies, alter nearby terrain, or add temporary magical effects to your attacks.'
			)
		]),
		featureSection('bolstering-magic', 'Bolstering Magic', [
			paragraph([
				{ type: 'text', text: 'As an action, you can touch a creature to improve an ' },
				combatLinks.attackRolls,
				{ type: 'text', text: ' or ability check, or help restore a spell slot.' }
			])
		]),
		featureSection('unstable-backlash', 'Unstable Backlash', [
			paragraph([
				{ type: 'text', text: 'While raging, taking damage or failing a ' },
				d20TestLinks.savingThrow,
				{ type: 'text', text: ' lets you use your ' },
				actionLinks.reaction,
				{ type: 'text', text: ' to roll a new Wild Surge effect.' }
			])
		]),
		featureSection('controlled-surge', 'Controlled Surge', [
			textParagraph(
				'When rolling on the Wild Surge table, you can roll twice and choose the result, with duplicate rolls letting you choose any effect.'
			)
		])
	],

	zealot: [
		featureSection('divine-fury', 'Divine Fury', [
			paragraph([
				{ type: 'text', text: 'While raging, the first creature you hit on each turn with a weapon attack takes extra ' },
				damageTypeLinks.necrotic,
				{ type: 'text', text: ' or ' },
				damageTypeLinks.radiant,
				{ type: 'text', text: ' damage.' }
			])
		]),
		featureSection('warrior-of-the-gods', 'Warrior of the Gods', [
			textParagraph(
				'Magic that restores you to life can ignore the material component cost.'
			)
		]),
		featureSection('fanatical-focus', 'Fanatical Focus', [
			paragraph([
				{ type: 'text', text: 'Once during each rage, you can reroll a failed ' },
				d20TestLinks.savingThrow,
				{ type: 'text', text: ' and must use the new result.' }
			])
		]),
		featureSection('zealous-presence', 'Zealous Presence', [
			paragraph([
				{ type: 'text', text: 'As a ' },
				actionLinks.bonusAction,
				{ type: 'text', text: ', you can inspire nearby creatures and give them advantage on ' },
				combatLinks.attackRolls,
				{ type: 'text', text: ' and ' },
				d20TestLinks.savingThrows,
				{ type: 'text', text: ' until your next turn.' }
			]),
			paragraph([
				{ type: 'text', text: 'The use refreshes after a ' },
				restLinks.longRest,
				{ type: 'text', text: '.' }
			])
		]),
		featureSection('rage-beyond-death', 'Rage Beyond Death', [
			paragraph([
				{ type: 'text', text: 'While raging, dropping to 0 ' },
				combatLinks.hitPoints,
				{ type: 'text', text: ' does not immediately make you ' },
				conditionLinks.unconscious,
				{ type: 'text', text: '.' }
			]),
			textParagraph(
				'You still track death saves, and if your rage ends while you are still at 0 hit points, the accumulated results can still kill you.'
			)
		])
	]
} as const satisfies Record<BarbarianSubclassKey, readonly PageContentSection[]>;

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

		header: {
			sections: [
				{
					...sections.multiclassing,
					content: multiclassingRequirement
				}
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
		ancestralGuardian: createSubclassPage(
			'ancestralGuardian',
			`Xanathar's Guide to Everything`,
			`An Ancestral Guardian fights through protective spirits, pulling
				enemy pressure onto themselves and shielding nearby allies.`,
			[
				[
					{
						type: 'text',
						text: `Ancestral Guardians turn rage into a bond with the
							warriors, guides, or guardian spirits of their people.`
					}
				],
				[
					{
						type: 'text',
						text: `Their features mark enemies, reduce incoming harm,
							and eventually let the spirits retaliate when they
							protect someone.`
					}
				]
			],
			subclassFeatureSections.ancestralGuardian,
			ancestralGuardianImages
		),

		battlerager: createSubclassPage(
			'battlerager',
			`Sword Coast Adventurer's Guide`,
			`A Battlerager throws themselves into brutal armored contact,
				using spiked armor, reckless momentum, and close pressure.`,
			[
				[
					{
						type: 'text',
						text: `Battleragers are reckless front-line Barbarians who
							make armor part of the attack instead of only defense.`
					}
				],
				[
					{
						type: 'text',
						text: `The path focuses on spiked armor, grappling pressure,
							temporary hit points, and staying dangerous when
							enemies strike back.`
					}
				]
			],
			subclassFeatureSections.battlerager,
			battleragerImages
		),

		beast: createSubclassPage(
			'beast',
			`Tasha's Cauldron of Everything`,
			`A Beast Barbarian lets a feral shape surface through rage,
				gaining natural weapons, adaptations, and predatory fury.`,
			[
				[
					{
						type: 'text',
						text: `The Path of the Beast expresses rage as a physical
							transformation, drawing claws, teeth, tails, and other
							primal traits out of the body.`
					}
				],
				[
					{
						type: 'text',
						text: `Its features combine flexible natural weapons,
							movement adaptations, psychic pressure, and party-wide
							hunting momentum.`
					}
				]
			],
			subclassFeatureSections.beast,
			beastImages
		),

		berserker: createSubclassPage(
			'berserker',
			`Player's Handbook`,
			`A Berserker follows a path of unrestrained fury, turning
				rage into relentless close-range aggression and overwhelming
				physical pressure.`,
			[
				[
					{
						type: 'text',
						text: `Berserkers choose the most direct expression of
							Barbarian rage: more attacks, fewer restraints, and a
							willingness to exhaust the body for immediate force.`
					}
				],
				[
					{
						type: 'text',
						text: `The subclass is simple, dangerous, and focused on
							staying frightening in melee even when enemies try to
							control or punish it.`
					}
				]
			],
			subclassFeatureSections.berserker,
			berserkerImages
		),

		giant: createSubclassPage(
			'giant',
			'Bigby Presents: Glory of the Giants',
			`A Giant Barbarian grows into enormous battlefield presence,
				throwing weapons, hurling creatures, and channeling elemental force.`,
			[
				[
					{
						type: 'text',
						text: `Barbarians on the Path of the Giant draw on giant
							magic until rage changes their size, reach, and command
							over the battlefield.`
					}
				],
				[
					{
						type: 'text',
						text: `The path favors thrown weapons, elemental damage,
							physical repositioning, and becoming too large to
							ignore.`
					}
				]
			],
			subclassFeatureSections.giant,
			giantImages
		),

		stormHerald: createSubclassPage(
			'stormHerald',
			`Xanathar's Guide to Everything`,
			`A Storm Herald carries a supernatural aura of desert, sea, or
				tundra, turning rage into weather around the front line.`,
			[
				[
					{
						type: 'text',
						text: `Storm Heralds manifest rage as an environmental
							aura. Desert heat, sea `
					},
					damageTypeLinks.lightning,
					{
						type: 'text',
						text: ', or tundra '
					},
					damageTypeLinks.cold,
					{
						type: 'text',
						text: ' follows them into battle.'
					}
				],
				[
					{
						type: 'text',
						text: `Their features are built around repeated aura
							pressure, resistance, group protection, and stronger
							control while raging.`
					}
				]
			],
			subclassFeatureSections.stormHerald,
			stormHeraldImages
		),

		totemWarrior: createSubclassPage(
			'totemWarrior',
			`Player's Handbook`,
			`A Totem Warrior shapes rage through spirit guides, choosing
				animal aspects for defense, movement, senses, or pack tactics.`,
			[
				[
					{
						type: 'text',
						text: `Totem Warriors bind their rage to spirit animals,
							choosing different benefits as their connection grows.`
					}
				],
				[
					{
						type: 'text',
						text: `The subclass is modular: each totem choice changes
							how the Barbarian protects, moves, scouts, or controls
							melee space.`
					}
				]
			],
			subclassFeatureSections.totemWarrior,
			totemWarriorImages
		),

		wildMagic: createSubclassPage(
			'wildMagic',
			`Tasha's Cauldron of Everything`,
			`A Wild Magic Barbarian erupts with unpredictable arcane power,
				turning rage into surges, support, and unstable reactions.`,
			[
				[
					{
						type: 'text',
						text: `Wild Magic Barbarians carry raw magic in their rage,
							releasing strange effects whenever battle pushes that
							power to the surface.`
					}
				],
				[
					{
						type: 'text',
						text: `The path mixes randomness with support: surges can
							disrupt enemies, empower allies, and eventually become
							easier to guide.`
					}
				]
			],
			subclassFeatureSections.wildMagic,
			wildMagicImages
		),

		zealot: createSubclassPage(
			'zealot',
			`Xanathar's Guide to Everything`,
			`A Zealot channels divine fury through rage, combining
				destructive sacred power with supernatural endurance and an
				almost impossible refusal to remain fallen.`,
			[
				[
					{
						type: 'text',
						text: `Zealots turn rage into sacred violence, driven by
							divine purpose, fanatical focus, or a power that refuses
							to let them fall easily.`
					}
				],
				[
					{
						type: 'text',
						text: 'The path adds '
					},
					damageTypeLinks.radiant,
					{
						type: 'text',
						text: ' or '
					},
					damageTypeLinks.necrotic,
					{
						type: 'text',
						text: ` force, protects key saves, inspires allies, and lets
							the Barbarian fight on past the point where most
							warriors collapse.`
					}
				]
			],
			subclassFeatureSections.zealot,
			zealotImages
		)
	},

	content: {
		sections,
		tableOfContents: [
			sections.multiclassing,
			sections.progression,
			{
				...sections.coreTraits,
				children: [
					sections.hitPoints,
					sections.proficiencies,
					sections.startingEquipment
				]
			},
			{
				...sections.classFeatures,
				children: [
					sections.rage,
					sections.unarmoredDefense,
					sections.dangerSense,
					sections.recklessAttack,
					sections.primalPath,
					sections.primalKnowledge,
					sections.abilityScoreImprovement,
					sections.extraAttack,
					sections.fastMovement,
					sections.feralInstinct,
					sections.instinctivePounce,
					sections.brutalCritical,
					sections.relentlessRage,
					sections.persistentRage,
					sections.indomitableMight,
					sections.primalChampion
				]
			}
		],
		coreTraits,
		startingEquipmentIntro,
		classFeatureSections,
		progression: barbarianProgression
	}
} as const;
