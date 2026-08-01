import type {
	InlineContent,
	PageContentBlock,
	PageContentSection
} from '$lib/typescript/pages/content-types';

type RuleContent = {
	readonly sections: readonly PageContentSection[];
	readonly tableOfContents: readonly {
		readonly id: string;
		readonly title: string;
	}[];
};

type RuleDetails = {
	readonly overview: string;
	readonly use: string;
	readonly limits: readonly string[];
	readonly roll?: string;
	readonly extraBlocks?: readonly PageContentBlock[];
};

type RuleReference = {
	readonly name: {
		readonly normal: string;
		readonly slug: string;
	};
};

const sourceNote = {
	type: 'paragraph',
	content: [
		{
			type: 'text',
			text: 'This page is a compact play reference. If a spell, feature, monster, item, or DM ruling gives a more specific instruction, use that specific instruction.'
		}
	]
} as const satisfies PageContentBlock;

function text(content: string): InlineContent {
	return [
		{
			type: 'text',
			text: content
		}
	];
}

function paragraph(content: string): PageContentBlock {
	return {
		type: 'paragraph',
		content: text(content)
	};
}

function list(items: readonly string[]): PageContentBlock {
	return {
		type: 'list',
		items: items.map(text)
	};
}

function section(
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

function createRuleContent(details: RuleDetails): RuleContent {
	const sections = [
		section('what-it-is', 'What It Is', [
			paragraph(details.overview),
			sourceNote
		]),
		section('how-to-use-it', 'How To Use It', [
			paragraph(details.use)
		]),
		section('limits-and-rolls', 'Limits And Rolls', [
			list([
				...details.limits,
				details.roll ?? 'You only roll when the rule, DM, spell, item, or feature asks for a roll.'
			])
		]),
		...(details.extraBlocks?.length
			? [
					section('quick-reference', 'Quick Reference', details.extraBlocks)
				]
			: [])
	] as const;

	return {
		sections,
		tableOfContents: sections.map(({ id, title }) => ({
			id,
			title
		}))
	};
}

const actionDetails: Record<string, RuleDetails> = {
	action: {
		overview: 'An action is the main thing a creature does on its turn, such as attacking, hiding, searching, or using an object.',
		use: 'Choose one available action on your turn, unless a feature gives you another action or changes what you can do with it.',
		limits: [
			'You normally get one action on your turn.',
			'You can improvise an action, but the DM decides whether it is possible and what roll applies.',
			'Movement and brief communication are separate from your action unless another rule says otherwise.'
		]
	},
	attackAction: {
		overview: 'The Attack action lets you make a melee or ranged attack.',
		use: 'Choose a target, choose the attack you are using, then make an attack roll unless the attack rule says it works differently.',
		limits: [
			'Roll a d20 and add the relevant attack modifier; the attack hits if the total meets or beats the target Armor Class.',
			'Most characters make one attack with this action, but features such as Extra Attack can add more.',
			'Damage is rolled only after the attack hits, unless the attack or feature says otherwise.'
		],
		roll: 'Usually roll an attack roll, then a damage roll on a hit.'
	},
	bonusAction: {
		overview: 'A bonus action is a smaller action-like option granted by a specific rule.',
		use: 'Use a bonus action only when a feature, spell, item, class option, or other rule says you can.',
		limits: [
			'You do not automatically have a generic bonus action option.',
			'You can take at most one bonus action on your turn.',
			'If timing matters, the rule that grants the bonus action tells you when it can be used.'
		]
	},
	reaction: {
		overview: 'A reaction is a quick response to a trigger, often outside your own turn.',
		use: 'Use your reaction when a rule gives you a trigger, such as an opportunity attack or a readied action.',
		limits: [
			'You normally get one reaction per round.',
			'After using it, you cannot use another reaction until the start of your next turn.',
			'The triggering rule decides whether a roll is needed.'
		]
	},
	dash: {
		overview: 'Dash lets you spend your action to move farther on the same turn.',
		use: 'Increase your available movement for the turn by an amount equal to your speed after modifiers.',
		limits: [
			'Dash does not teleport you or ignore difficult terrain.',
			'If your speed is 0, Dash gives you no useful extra movement.',
			'Dash itself normally requires no roll.'
		]
	},
	disengage: {
		overview: 'Disengage lets you move away carefully without provoking opportunity attacks for the rest of the turn.',
		use: 'Take Disengage before moving out of hostile reach when avoiding opportunity attacks matters.',
		limits: [
			'Disengage only prevents opportunity attacks caused by your movement.',
			'It does not protect against readied attacks, area effects, or features that trigger differently.',
			'Disengage normally requires no roll.'
		]
	},
	dodge: {
		overview: 'Dodge focuses your turn on defense.',
		use: 'Until the start of your next turn, visible attackers have a harder time hitting you and your Dexterity saving throws improve.',
		limits: [
			'The benefit ends if you become incapacitated.',
			'The benefit also fails if your speed drops to 0.',
			'Dodge itself requires no roll.'
		]
	},
	help: {
		overview: 'Help lets you assist another creature with a task or set up an ally for a better attack.',
		use: 'Choose a creature you can reasonably help. The next relevant ability check or first qualifying attack gains advantage.',
		limits: [
			'You must be able to actually help with the task.',
			'For helping an attack, the target usually needs to be within 5 feet of you.',
			'Help itself normally requires no roll.'
		]
	},
	hide: {
		overview: 'Hide lets you try to become unseen and unheard.',
		use: 'Make a Dexterity (Stealth) check when the DM says hiding is possible.',
		limits: [
			'You usually cannot hide from a creature that can clearly see you.',
			'The DM compares your Stealth result against observers, often using passive Perception.',
			'Noise, movement, light, and cover can all change whether hiding is possible.'
		],
		roll: 'Roll Dexterity (Stealth).'
	},
	ready: {
		overview: 'Ready lets you prepare an action for a specific trigger before your next turn.',
		use: 'Choose the trigger and what you will do. If the trigger happens, you can use your reaction to perform the readied response.',
		limits: [
			'Ready spends your action now and your reaction later.',
			'If the trigger never happens, the readied response is lost.',
			'Readying a spell can require concentration until the trigger resolves.'
		]
	},
	search: {
		overview: 'Search is the action for actively looking for something.',
		use: 'Tell the DM what you are trying to find; the DM chooses the relevant check.',
		limits: [
			'Search is not automatic detection.',
			'Hidden creatures, traps, secret doors, tracks, or clues may use different checks.',
			'Common checks are Wisdom (Perception) and Intelligence (Investigation).'
		],
		roll: 'Usually roll Wisdom (Perception) or Intelligence (Investigation).'
	},
	useObject: {
		overview: 'Use an Object covers object interactions that require your action.',
		use: 'Use it when an item, device, door, lever, potion-like object, or second object interaction takes meaningful effort.',
		limits: [
			'Simple object interaction can often happen as part of movement or an action.',
			'Magic items and special objects can define their own activation rules.',
			'The DM asks for a roll only if use is uncertain, opposed, or risky.'
		]
	}
};

const conditionDetails: Record<string, readonly string[]> = {
	blinded: ['You cannot see.', 'Checks that require sight fail automatically.', 'Attack rolls against you have advantage; your attack rolls have disadvantage.'],
	charmed: ['You cannot attack or harmfully target the charmer.', 'The charmer has advantage on social checks against you.'],
	deafened: ['You cannot hear.', 'Checks that require hearing fail automatically.'],
	exhaustion: ['Exhaustion is measured in levels.', 'Higher levels apply harsher penalties.', 'Removing exhaustion depends on rest, magic, or the effect that caused it.'],
	frightened: ['You have disadvantage on ability checks and attack rolls while the source of fear is in line of sight.', 'You cannot willingly move closer to the source of fear.'],
	grappled: ['Your speed becomes 0.', 'The condition ends if the grappler is incapacitated or if you are moved out of reach.'],
	incapacitated: ['You cannot take actions or reactions.'],
	invisible: ['You cannot be seen without special senses or magic.', 'You are treated as heavily obscured for hiding.', 'Your attacks have advantage; attacks against you have disadvantage.'],
	paralyzed: ['You are incapacitated and cannot move or speak.', 'You automatically fail Strength and Dexterity saving throws.', 'Hits from within 5 feet become critical hits.'],
	petrified: ['You are transformed into a solid substance and are incapacitated.', 'You cannot move, speak, or perceive your surroundings.', 'You resist damage and automatically fail Strength and Dexterity saving throws.'],
	poisoned: ['You have disadvantage on attack rolls and ability checks.'],
	prone: ['Your only movement option is crawling unless you stand up.', 'Your attack rolls have disadvantage.', 'Nearby attackers have advantage against you; farther attackers have disadvantage.'],
	restrained: ['Your speed becomes 0.', 'Attack rolls against you have advantage and your attack rolls have disadvantage.', 'You have disadvantage on Dexterity saving throws.'],
	stunned: ['You are incapacitated, cannot move, and can barely speak.', 'You automatically fail Strength and Dexterity saving throws.', 'Attack rolls against you have advantage.'],
	unconscious: ['You are incapacitated, cannot move or speak, and are unaware.', 'You drop what you are holding and fall prone.', 'Hits from within 5 feet become critical hits.']
};

const exhaustionTable = {
	type: 'table',
	caption: 'Exhaustion Levels',
	showCaption: true,
	columns: {
		label: 'Level',
		value: 'Effect'
	},
	rows: [
		{ label: '1', value: text('Disadvantage on ability checks') },
		{ label: '2', value: text('Speed halved') },
		{ label: '3', value: text('Disadvantage on attack rolls and saving throws') },
		{ label: '4', value: text('Hit point maximum halved') },
		{ label: '5', value: text('Speed reduced to 0') },
		{ label: '6', value: text('Death') }
	]
} as const satisfies PageContentBlock;

const fallingTable = {
	type: 'table',
	caption: 'Falling Damage Examples',
	showCaption: true,
	columns: {
		label: 'Fall Distance',
		value: 'Damage'
	},
	rows: [
		{ label: '10 feet', value: text('1d6 bludgeoning damage') },
		{ label: '20 feet', value: text('2d6 bludgeoning damage') },
		{ label: '50 feet', value: text('5d6 bludgeoning damage') },
		{ label: '100 feet', value: text('10d6 bludgeoning damage') },
		{ label: '200 feet or more', value: text('20d6 bludgeoning damage maximum') }
	]
} as const satisfies PageContentBlock;

const movementDetails: Record<string, RuleDetails> = {
	walking: {
		overview: 'Walking is the default way most creatures spend movement.',
		use: 'Spend feet of movement up to your speed, mixing walking with other movement modes if you have enough movement left.',
		limits: [
			'Difficult terrain and special movement can increase movement cost.',
			'If your speed is 0, you cannot move by walking.',
			'Walking normally requires no roll.'
		]
	},
	speed: {
		overview: 'Speed is the number of feet a creature can normally move on its turn.',
		use: 'Track how much movement you spend as you walk, climb, swim, jump, stand up, or move through terrain.',
		limits: [
			'Speed can be reduced by conditions, armor, spells, terrain, or features.',
			'Different speeds are tracked separately when switching movement modes.',
			'Speed itself is not a roll.'
		]
	},
	climbing: {
		overview: 'Climbing covers vertical or difficult upward movement.',
		use: 'Spend movement to climb. Without a climbing speed, each foot usually costs 1 extra foot.',
		limits: [
			'A slippery or difficult climb can require a Strength (Athletics) check.',
			'Falling can happen if a climb fails or support is lost.',
			'A climbing speed avoids the extra movement cost when used for climbing.'
		],
		roll: 'Roll Strength (Athletics) when the climb is difficult or uncertain.'
	},
	swimming: {
		overview: 'Swimming covers movement through water or similar liquid hazards.',
		use: 'Spend movement to swim. Without a swimming speed, each foot usually costs 1 extra foot.',
		limits: [
			'Rough water can require a Strength (Athletics) check.',
			'Underwater combat and breathing can add separate restrictions.',
			'A swimming speed avoids the extra movement cost when used for swimming.'
		],
		roll: 'Roll Strength (Athletics) when the water is rough or the swim is risky.'
	},
	flying: {
		overview: 'Flying lets a creature move through the air using a flying speed.',
		use: 'Spend flying speed to move in three dimensions and bypass many ground obstacles.',
		limits: [
			'If a flying creature is knocked prone or its speed is reduced to 0, it can fall unless a rule keeps it aloft.',
			'Ceilings, wind, restraints, and magic can restrict flying.',
			'Flying normally requires no roll unless conditions are difficult.'
		]
	},
	burrowing: {
		overview: 'Burrowing lets a creature move through soil, sand, earth, or similar material if it has a burrowing speed.',
		use: 'Spend burrowing speed through a material the creature can burrow through.',
		limits: [
			'Burrowing does not automatically work through solid stone unless a rule says it does.',
			'The creature needs a burrowing speed or another feature that allows it.',
			'Burrowing normally requires no roll unless the DM rules the material is unstable or difficult.'
		]
	},
	crawling: {
		overview: 'Crawling is low movement often used while prone or in cramped spaces.',
		use: 'Spend movement to crawl when standing movement is impossible or when prone.',
		limits: [
			'Without a special rule, crawling costs extra movement.',
			'Being prone still affects attack rolls until you stand up.',
			'Crawling normally requires no roll.'
		]
	},
	jumping: {
		overview: 'Jumping uses Strength to determine how far or high you can leap.',
		use: 'For a long jump, a 10-foot run-up lets you jump up to your Strength score in feet. For a high jump, a 10-foot run-up lets you jump 3 + your Strength modifier feet.',
		limits: [
			'Standing jumps cover half the normal distance.',
			'Each foot jumped still costs movement.',
			'Obstacles or hard landings can require Athletics or Acrobatics checks.'
		],
		roll: 'Usually no roll for normal distance; roll Strength (Athletics) for difficult jumps or Dexterity (Acrobatics) to land cleanly in difficult terrain.'
	},
	difficultTerrain: {
		overview: 'Difficult terrain represents ground or obstacles that slow movement.',
		use: 'Each foot moved through difficult terrain costs 1 extra foot of movement.',
		limits: [
			'Multiple sources of difficult terrain in the same space do not normally multiply the cost further.',
			'Dash gives more movement, but the difficult terrain cost still applies.',
			'Difficult terrain normally requires no roll by itself.'
		]
	},
	falling: {
		overview: 'Falling handles damage and landing after dropping from height.',
		use: 'For every 10 feet fallen, roll 1d6 bludgeoning damage, to a maximum of 20d6. After the fall, the creature lands prone unless it avoids taking damage.',
		limits: [
			'Falls shorter than 10 feet normally deal no falling damage.',
			'Resistance to bludgeoning damage can reduce the damage if it applies.',
			'Some spells, features, or DM rulings can slow the fall, reduce damage, or change the landing.'
		],
		roll: 'Roll damage dice: floor(fall distance / 10) d6, maximum 20d6.',
		extraBlocks: [
			{
				type: 'formula',
				content: text('Falling damage = 1d6 bludgeoning per 10 feet fallen, maximum 20d6.')
			},
			fallingTable
		]
	},
	squeezing: {
		overview: 'Squeezing covers moving through a space too small for normal movement.',
		use: 'A creature can squeeze through a space large enough for a creature one size smaller than itself.',
		limits: [
			'Movement through the cramped space costs extra movement.',
			'The squeezing creature has worse attacks and Dexterity saving throws while squeezed.',
			'Attack rolls against the squeezing creature are easier.'
		]
	}
};

const skillAbility: Record<string, string> = {
	acrobatics: 'Dexterity',
	animalHandling: 'Wisdom',
	arcana: 'Intelligence',
	athletics: 'Strength',
	deception: 'Charisma',
	history: 'Intelligence',
	insight: 'Wisdom',
	intimidation: 'Charisma',
	investigation: 'Intelligence',
	medicine: 'Wisdom',
	nature: 'Intelligence',
	perception: 'Wisdom',
	performance: 'Charisma',
	persuasion: 'Charisma',
	religion: 'Intelligence',
	sleightOfHand: 'Dexterity',
	stealth: 'Dexterity',
	survival: 'Wisdom'
};

const abilityUses: Record<string, string> = {
	strength: 'physical force, lifting, breaking, grappling, climbing, jumping, swimming, and melee power when a rule calls for it',
	dexterity: 'agility, balance, reflexes, stealth, ranged attacks, initiative, and avoiding danger',
	constitution: 'health, stamina, breath, endurance, concentration checks, and resisting bodily strain',
	intelligence: 'reasoning, memory, investigation, arcane knowledge, history, nature, and religion',
	wisdom: 'awareness, intuition, perception, survival, medicine, insight, and reading the world around you',
	charisma: 'force of personality, deception, intimidation, performance, persuasion, and social influence'
};

export function createActionContent(item: RuleReference): RuleContent {
	return createRuleContent(actionDetails[item.name.slug] ?? actionDetails.action);
}

export function createConditionContent(item: RuleReference): RuleContent {
	const effects = conditionDetails[item.name.slug] ?? [
		'The condition changes what a creature can do until it ends.'
	];

	return createRuleContent({
		overview: `${item.name.normal} is a condition: a temporary game state that changes a creature's capabilities.`,
		use: `Apply ${item.name.normal.toLowerCase()} when a spell, feature, monster, hazard, or ruling imposes it. Track the duration or the rule that ends it.`,
		limits: effects,
		roll: 'The condition itself is not a roll; the effect that causes it tells you whether to roll an attack, saving throw, ability check, or nothing.',
		extraBlocks: item.name.slug === 'exhaustion' ? [exhaustionTable] : undefined
	});
}

export function createDamageTypeContent(item: RuleReference): RuleContent {
	return createRuleContent({
		overview: `${item.name.normal} is a damage type. Damage types label what kind of harm an attack, spell, hazard, or feature deals.`,
		use: `Use ${item.name.normal.toLowerCase()} when applying damage, resistance, immunity, vulnerability, or features that care about that damage type.`,
		limits: [
			'A damage type does not decide the damage dice by itself; the attack, spell, feature, or hazard gives the dice.',
			'Resistance usually halves damage of that type; vulnerability usually doubles it; immunity prevents it.',
			'If an effect changes the damage type, use the new type for resistance, immunity, vulnerability, and related features.'
		],
		roll: 'Roll the damage dice given by the source of the damage.'
	});
}

export function createMovementContent(item: RuleReference): RuleContent {
	return createRuleContent(movementDetails[item.name.slug] ?? {
		overview: `${item.name.normal} is a movement rule.`,
		use: 'Use it when a creature moves during exploration, encounters, or combat.',
		limits: [
			'Movement can be changed by terrain, conditions, speed, spells, and features.'
		]
	});
}

export function createSkillContent(item: RuleReference): RuleContent {
	const ability = skillAbility[item.name.slug] ?? 'an ability';

	return createRuleContent({
		overview: `${item.name.normal} is a skill used with ${ability} checks when a task matches that area of expertise.`,
		use: `When the DM calls for ${item.name.normal}, roll a d20 and add the relevant ${ability} modifier. Add proficiency bonus if you are proficient in the skill.`,
		limits: [
			'The DM chooses whether a skill applies.',
			'Having proficiency helps the roll, but it does not make impossible tasks possible automatically.',
			'Expertise or other features can change the bonus.'
		],
		roll: `Roll d20 + ${ability} modifier + proficiency bonus if proficient.`
	});
}

export function createAbilityScoreContent(item: RuleReference): RuleContent {
	const key = item.name.slug;
	const uses = abilityUses[key] ?? 'checks, saving throws, attacks, and features that name this ability';

	return createRuleContent({
		overview: `${item.name.normal} is one of the six ability scores that define what a character or creature is naturally good at.`,
		use: `Use ${item.name.normal} for ${uses}.`,
		limits: [
			'The DM chooses the ability for an uncertain task unless a rule already specifies it.',
			'Skills can pair with an ability score when the task fits that skill.',
			'A feature, spell, item, or saving throw can use this ability in a specific way.'
		],
		roll: `When a ${item.name.normal} roll is needed, roll d20 + the ${item.name.normal} modifier, plus proficiency bonus if a relevant proficiency applies.`
	});
}

export function createGenericRuleContent(item: RuleReference, category: string): RuleContent {
	return createRuleContent({
		overview: `${item.name.normal} is a ${category} reference used by rules, class features, spells, items, and rulings.`,
		use: `Use this reference when another rule mentions ${item.name.normal.toLowerCase()} or when you need to resolve that part of play.`,
		limits: [
			'The specific spell, feature, item, or DM ruling can add more precise instructions.',
			'Use the linked rule as the baseline when no more specific rule overrides it.'
		]
	});
}

export function createGroupContent(name: string, category: string): RuleContent {
	return createRuleContent({
		overview: `${name} collects related ${category} references in one place.`,
		use: 'Open a specific reference below when a class feature, spell, item, monster, or ruling points to it.',
		limits: [
			'These pages are quick references, not full character options.',
			'Specific rules override the general reference when they conflict.'
		]
	});
}
