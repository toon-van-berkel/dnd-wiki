import type { ShinobiPageData } from './types';

export const shinobiProgression = {
	caption: 'The Shinobi',
	description:
		'The Shinobi table shows the features, Chakra Points, techniques known, maximum technique rank and Fortune Die gained at each level.',
	metrics: [
		{ key: 'chakra', label: 'Chakra Points', shortLabel: 'Chakra' },
		{ key: 'techniques', label: 'Techniques Known', shortLabel: 'Techniques' },
		{ key: 'maxRank', label: 'Maximum Technique Rank', shortLabel: 'Max rank' },
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
			values: { chakra: 3, techniques: 3, maxRank: 'I', fortune: '-' }
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
			features: [{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }],
			values: { chakra: 6, techniques: 5, maxRank: 'I', fortune: 'd6' }
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [
				{ label: 'Extra Attack', href: '#extra-attack' },
				{ label: 'Chakra-Infused Strike', href: '#chakra-infused-strike' },
				{ label: 'Developed Manifestation', href: '#developed-manifestation' },
				{ label: 'Rank II Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 8, techniques: 5, maxRank: 'II', fortune: 'd6' }
		},
		{
			level: 6,
			proficiencyBonus: 3,
			features: [
				{ label: 'Shinobi Path Feature', href: '#shinobi-path' },
				{ label: 'Improved Fortune', href: '#improved-fortune-6' }
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
			features: [{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }],
			values: { chakra: 11, techniques: 7, maxRank: 'II', fortune: 'd8' }
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [
				{ label: 'Chakra Movement', href: '#chakra-movement' },
				{ label: 'Advanced Manifestation', href: '#advanced-manifestation' },
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
				{ label: 'Chakra-Infused Strike Improvement', href: '#chakra-infused-strike-improvement-11' },
				{ label: 'Improved Fortune', href: '#improved-fortune-11' }
			],
			values: { chakra: 15, techniques: 8, maxRank: 'III', fortune: 'd10' }
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }],
			values: { chakra: 16, techniques: 9, maxRank: 'III', fortune: 'd10' }
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [
				{ label: 'Unbroken Focus', href: '#unbroken-focus' },
				{ label: 'Greater Manifestation', href: '#greater-manifestation' },
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
			features: [{ label: 'Perfect Chakra Control', href: '#perfect-chakra-control' }],
			values: { chakra: 20, techniques: 10, maxRank: 'IV', fortune: 'd10' }
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }],
			values: { chakra: 21, techniques: 11, maxRank: 'IV', fortune: 'd10' }
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [
				{ label: 'Chakra-Infused Strike Improvement', href: '#chakra-infused-strike-improvement-17' },
				{ label: 'Perfected Manifestation', href: '#perfected-manifestation' },
				{ label: 'Improved Fortune', href: '#improved-fortune-17' },
				{ label: 'Rank V Techniques', href: '#chakra-techniques' }
			],
			values: { chakra: 23, techniques: 11, maxRank: 'V', fortune: 'd12' }
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [{ label: 'Hidden Technique Mastery', href: '#hidden-technique-mastery' }],
			values: { chakra: 24, techniques: 12, maxRank: 'V', fortune: 'd12' }
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [{ label: 'Ability Score Improvement', href: '#ability-score-improvement' }],
			values: { chakra: 25, techniques: 12, maxRank: 'V', fortune: 'd12' }
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [{ label: 'Kage State', href: '#kage-state' }],
			values: { chakra: 30, techniques: 14, maxRank: 'V', fortune: 'd12' }
		}
	]
} satisfies ShinobiPageData['progression'];

export const shinobiCoreTraits = {
	imageHref: '/classes/shinobi',
	imageAlt: 'A Shinobi preparing to strike while channeling chakra.',
	imageCaption: 'A Shinobi combines speed, martial training and supernatural chakra techniques.',
	imagePosition: 'center center',
	rows: [
		{ label: 'Primary Abilities', value: [{ text: 'Dexterity and Wisdom' }] },
		{ label: 'Hit Die', value: [{ text: 'd8' }] },
		{ label: 'Saving Throws', value: [{ text: 'Dexterity and Intelligence' }] },
		{ label: 'Armor', value: [{ text: 'Light armor' }] },
		{
			label: 'Weapons',
			value: [{ text: 'Simple weapons and martial melee weapons that have the Finesse property' }]
		},
		{
			label: 'Tools',
			value: [{ text: "Disguise kit, plus herbalism kit, poisoner's kit or thieves' tools" }]
		},
		{
			label: 'Skills',
			value: [{ text: 'Choose three from the Shinobi skill list' }]
		}
	]
} satisfies ShinobiPageData['coreTraits'];

export const shinobiPageData = {
	coreTraits: shinobiCoreTraits,
	progression: shinobiProgression,
	summaryRows: [
		['Primary Abilities', 'Dexterity and Wisdom'],
		['Hit Die', 'd8'],
		['Saving Throw Proficiencies', 'Dexterity and Intelligence'],
		['Armor', 'Light armor'],
		['Weapons', 'Simple weapons and martial melee weapons that have the Finesse property'],
		[
			'Tools',
			"Disguise kit and one of the following: herbalism kit, poisoner's kit or thieves' tools"
		],
		[
			'Skills',
			'Choose three from Acrobatics, Arcana, Athletics, Deception, Insight, Investigation, Medicine, Nature, Perception, Sleight of Hand, Stealth and Survival'
		]
	],
	hitPointRows: [
		['Hit Dice', '1d8 per Shinobi level'],
		['Hit Points at 1st Level', '8 + your Constitution modifier'],
		['Hit Points at Higher Levels', '1d8, or 5, plus your Constitution modifier per Shinobi level after 1st']
	],
	proficiencyRows: [
		['Armor', 'Light armor. The Shinobi does not gain proficiency with shields.'],
		['Weapons', 'Simple weapons and martial melee weapons that have the Finesse property'],
		[
			'Tools',
			"Disguise kit and one of the following: herbalism kit, poisoner's kit or thieves' tools"
		],
		['Saving Throws', 'Dexterity and Intelligence'],
		[
			'Skills',
			'Choose three from Acrobatics, Arcana, Athletics, Deception, Insight, Investigation, Medicine, Nature, Perception, Sleight of Hand, Stealth and Survival'
		]
	],
	weaponRows: [
		['Kunai', 'Dagger'],
		['Shuriken', 'Dart'],
		['Senbon', 'Dart'],
		['Short ninja blade', 'Shortsword'],
		['Chain sickle', 'Whip'],
		['Combat staff', 'Quarterstaff']
	],
	startingEquipment: [
		'Leather armor',
		'A shortsword or two daggers',
		'A shortbow and a quiver containing 20 arrows, or ten darts',
		"A burglar's pack or an explorer's pack",
		'A disguise kit',
		"One herbalism kit, poisoner's kit or set of thieves' tools with which you are proficient"
	],
	rareHeritageRows: [
		['01-10', 'Dual Affinity'],
		['11-17', 'Yin Release'],
		['18-24', 'Yang Release'],
		['25-31', 'Ice Release'],
		['32-38', 'Lava Release'],
		['39-45', 'Boil Release'],
		['46-52', 'Storm Release'],
		['53-59', 'Magnet Release'],
		['60-65', 'Explosion Release'],
		['66-71', 'Scorch Release'],
		['72-77', 'Crystal Release'],
		['78-82', 'Swift Release'],
		['83-87', 'Chakra Chains'],
		['88-91', 'Living Shadow'],
		['92-94', 'Bone Bloodline'],
		['95-97', 'Dojutsu'],
		['98-99', 'Wood Release'],
		['100', 'Mythic Heritage']
	],
	initialManifestations: [
		[
			'Dual Affinity',
			'Choose two different standard Chakra Natures. You can learn Nature Techniques belonging to either nature. You learn one additional Rank I Nature Technique from either chosen nature. It does not count against your number of techniques known.'
		],
		[
			'Yin Release',
			'Gain proficiency in either Deception or Insight. If you already have proficiency in the chosen skill, your proficiency bonus is doubled for checks made with it. Whenever one of your Shinobi techniques would deal force damage, you can cause it to deal psychic damage instead.'
		],
		[
			'Yang Release',
			'Your hit point maximum increases by 1 for every Shinobi level you possess. It increases by 1 whenever you gain another Shinobi level.'
		],
		[
			'Ice Release',
			'You have resistance to cold damage. You can learn Nature Techniques that require Water Release or Wind Release.'
		],
		[
			'Lava Release',
			'You have resistance to fire damage. You can learn Nature Techniques that require Earth Release or Fire Release.'
		],
		[
			'Boil Release',
			'You have resistance to poison damage and advantage on saving throws against the Poisoned condition. You can learn Nature Techniques that require Fire Release or Water Release.'
		],
		[
			'Storm Release',
			'You have resistance to lightning damage. You can learn Nature Techniques that require Lightning Release or Water Release.'
		],
		[
			'Magnet Release',
			'A thrown weapon used by you returns to your hand immediately after the attack. Returning a weapon in this way requires no action. Your normal and long ranges with thrown weapons increase by 10 feet.'
		],
		[
			'Explosion Release',
			'You have resistance to thunder damage. Once on each of your turns when a Shinobi technique deals damage, you can deal additional thunder damage equal to your proficiency bonus to one creature damaged by that technique.'
		],
		[
			'Scorch Release',
			'A creature that takes fire damage from one of your Shinobi techniques cannot regain hit points until the start of your next turn.'
		],
		[
			'Crystal Release',
			'While wearing light armor or no armor and not wielding a shield, you gain a +1 bonus to Armor Class.'
		],
		[
			'Swift Release',
			'Your walking speed increases by 5 feet. You can add your proficiency bonus to initiative rolls.'
		],
		[
			'Chakra Chains',
			'As a bonus action, you can form or dismiss a chakra chain in an empty hand. It is a magical melee weapon with the Finesse and Reach properties. It deals 1d6 force damage on a hit. The chain disappears when it leaves your possession.'
		],
		[
			'Living Shadow',
			'You gain darkvision out to 60 feet. If you already have darkvision, its range increases by 30 feet. You can take the Hide action while lightly obscured by dim light.'
		],
		[
			'Bone Bloodline',
			'As a bonus action, you can form or dismiss a bone weapon in an empty hand. It is a magical melee weapon with the Finesse property. It deals 1d6 piercing or slashing damage, chosen when the weapon is formed. The weapon disappears when it leaves your possession.'
		],
		[
			'Dojutsu',
			'Gain proficiency in Perception. If you already have proficiency in Perception, your proficiency bonus is doubled for checks made with it. You have advantage on Wisdom (Perception) checks that rely on sight.'
		],
		[
			'Wood Release',
			'As a bonus action, choose a 5-foot square of ground you can see within 30 feet. Roots and wooden growths fill the square until the start of your next turn, making it difficult terrain. A creature standing in the square when you create it must succeed on a Strength saving throw against your Technique Save DC or have its speed reduced to 0 until the start of your next turn. You can use this manifestation a number of times equal to your proficiency bonus and regain all uses after a long rest.'
		],
		[
			'Mythic Heritage',
			'Roll twice on the Rare Chakra Heritage table and gain both results. Reroll duplicate results and reroll any additional result of 100.'
		]
	]
} satisfies ShinobiPageData;
