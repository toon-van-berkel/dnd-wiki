import type { PageRegistryEntry } from '../Registry-Types';

const classParent = {
	parentId: 'classes',
	eyebrow: 'Class option'
} as const;

const rogueParent = {
	parentId: 'classes--rogue',
	eyebrow: 'Rogue archetype'
} as const;

const clericParent = {
	parentId: 'classes--cleric',
	eyebrow: 'Cleric domain'
} as const;

export const classPages = [
	{
		id: 'classes',
		title: 'Classes',
		href: '/classes',
		description: 'Class options, subclass guidance, and campaign availability.',
		eyebrow: 'Character options',
		icon: 'iconsList.game.character',
		searchable: false,
		navigation: true
	},
	{
		id: 'classes--artificer',
		title: 'Artificer',
		href: '/classes/artificer',
		description:
			'A magical inventor who turns tools, crafted gear, and arcane techniques into flexible problem-solving.',
		icon: 'iconsList.class.artificer',
		aliases: ['inventor'],
		tags: ['arcane', 'crafting', 'support', 'utility', 'half-caster'],
		...classParent
	},
	{
		id: 'classes--barbarian',
		title: 'Barbarian',
		href: '/classes/barbarian',
		description:
			`<p>Barbarians are mighty warriors who are powered by primal forces of the multiverse that manifest as a 
			Rage. More than a mere emotion—and not limited to anger—this Rage is an incarnation of a predator’s ferocity, 
			a storm’s fury, and a sea’s turmoil.</p>
			<p>Some Barbarians personify their Rage as a fierce spirit or revered forebear. Others see it as a connection 
			to the pain and anguish of the world, as an impersonal tangle of wild magic, or as an expression of their 
			own deepest self. For every Barbarian, their Rage is a power that fuels not just battle prowess, but also 
			uncanny reflexes and heightened senses.</p>
			<p>Barbarians often serve as protectors and leaders in their communities. They charge headlong into danger so 
			those under their protection don’t have to. Their courage in the face of danger makes Barbarians perfectly 
			suited for adventure.</p>`,
		icon: 'iconsList.class.barbarian',
		tags: ['tank', 'melee', 'brute', 'burst-damage', 'sustained-damage'],
		...classParent
	},
	{
		id: 'classes--bard',
		title: 'Bard',
		href: '/classes/bard',
		description:
			'A charismatic performer who supports allies, manipulates enemies, and blends magic with creativity.',
		icon: 'iconsList.class.bard',
		tags: ['spellcasting', 'support', 'face', 'control', 'utility'],
		...classParent
	},
	{
		id: 'classes--cleric',
		title: 'Cleric',
		href: '/classes/cleric',
		description:
			'A divine spellcaster who channels faith, protection, healing, and sacred power.',
		icon: 'iconsList.class.cleric',
		tags: ['spellcasting', 'divine', 'healer', 'support', 'control'],
		...classParent
	},
	{
		id: 'classes--cleric--life-domain',
		title: 'Life Domain',
		href: '/classes/cleric/life-domain',
		description: 'A cleric domain focused on protection, restoration, and keeping allies alive.',
		icon: 'iconsList.class.cleric',
		keywords: ['cleric', 'subclass', 'domain'],
		tags: ['healer', 'support', 'divine', 'tank', 'protection'],
		...clericParent
	},
	{
		id: 'classes--cleric--death-domain',
		title: 'Death Domain',
		href: '/classes/cleric/death-domain',
		description: 'A cleric domain focused on death, undeath, and necrotic power.',
		icon: 'iconsList.class.cleric',
		keywords: ['cleric', 'subclass', 'domain'],
		tags: ['dark-magic', 'divine', 'undead', 'necrotic', 'burst-damage'],
		...clericParent
	},
	{
		id: 'classes--druid',
		title: 'Druid',
		href: '/classes/druid',
		description:
			'A nature-focused spellcaster who uses primal magic, healing, elemental force, and shapeshifting.',
		icon: 'iconsList.class.druid',
		tags: ['spellcasting', 'primal', 'healer', 'utility', 'shapeshifting'],
		...classParent
	},
	{
		id: 'classes--fighter',
		title: 'Fighter',
		href: '/classes/fighter',
		description:
			'A master of weapons and armor with strong combat consistency, durability, and tactical flexibility.',
		icon: 'iconsList.class.fighter',
		aliases: ['warrior'],
		tags: ['melee', 'ranged', 'tank', 'sustained-damage', 'tactical'],
		...classParent
	},
	{
		id: 'classes--monk',
		title: 'Monk',
		href: '/classes/monk',
		description:
			'A disciplined martial artist who uses speed, focus, mobility, and supernatural physical control.',
		icon: 'iconsList.class.monk',
		tags: ['melee', 'mobility', 'control', 'skirmisher', 'sustained-damage'],
		...classParent
	},
	{
		id: 'classes--paladin',
		title: 'Paladin',
		href: '/classes/paladin',
		description:
			'A sacred warrior bound by an oath, combining martial strength with divine magic and protection.',
		icon: 'iconsList.class.paladin',
		tags: ['tank', 'melee', 'divine', 'support', 'burst-damage'],
		...classParent
	},
	{
		id: 'classes--ranger',
		title: 'Ranger',
		href: '/classes/ranger',
		description:
			'A wilderness warrior who combines martial skill, tracking, survival, and primal magic.',
		icon: 'iconsList.class.ranger',
		tags: ['ranged', 'melee', 'explorer', 'primal', 'half-caster'],
		...classParent
	},
	{
		id: 'classes--rogue',
		title: 'Rogue',
		href: '/classes/rogue',
		description:
			'A skill-focused class built around precision, stealth, mobility, and clever problem-solving.',
		icon: 'iconsList.class.rogue',
		aliases: ['thief'],
		tags: ['stealth', 'skills', 'mobility', 'burst-damage', 'utility'],
		...classParent
	},
	{
		id: 'classes--rogue--arcane-trickster',
		title: 'Arcane Trickster',
		href: '/classes/rogue/arcane-trickster',
		description: 'A rogue archetype that mixes stealth and precision with subtle arcane magic.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['stealth', 'skills', 'arcane', 'utility', 'control'],
		...rogueParent
	},
	{
		id: 'classes--rogue--assassin',
		title: 'Assassin',
		href: '/classes/rogue/assassin',
		description: 'A rogue archetype focused on ambushes, infiltration, and eliminating targets quickly.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['stealth', 'burst-damage', 'infiltration', 'precision', 'ambush'],
		...rogueParent
	},
	{
		id: 'classes--rogue--thief',
		title: 'Thief',
		href: '/classes/rogue/thief',
		description: 'A rogue archetype focused on agility, utility, climbing, sneaking, and fast item use.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['stealth', 'skills', 'mobility', 'utility', 'explorer'],
		...rogueParent
	},
	{
		id: 'classes--rogue--inquisitive',
		title: 'Inquisitive',
		href: '/classes/rogue/inquisitive',
		description: 'A rogue archetype focused on careful investigation, insight, and finding hidden openings.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['skills', 'investigation', 'insight', 'precision', 'utility'],
		...rogueParent
	},
	{
		id: 'classes--rogue--mastermind',
		title: 'Mastermind',
		href: '/classes/rogue/mastermind',
		description: 'A rogue archetype focused on tactics, manipulation, leadership, and social control.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['support', 'face', 'tactical', 'leader', 'deception'],
		...rogueParent
	},
	{
		id: 'classes--rogue--phantom',
		title: 'Phantom',
		href: '/classes/rogue/phantom',
		description: 'A rogue archetype touched by death, echoes, and restless spirits.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['stealth', 'dark-magic', 'undead', 'burst-damage', 'utility'],
		...rogueParent
	},
	{
		id: 'classes--rogue--scout',
		title: 'Scout',
		href: '/classes/rogue/scout',
		description: 'A rogue archetype focused on wilderness movement, ambushes, and survival.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['mobility', 'explorer', 'ranged', 'skills', 'survival'],
		...rogueParent
	},
	{
		id: 'classes--rogue--soulknife',
		title: 'Soulknife',
		href: '/classes/rogue/soulknife',
		description: 'A rogue archetype using psionic talent and psychic blades.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['psionic', 'stealth', 'skills', 'burst-damage', 'mobility'],
		...rogueParent
	},
	{
		id: 'classes--rogue--swashbuckler',
		title: 'Swashbuckler',
		href: '/classes/rogue/swashbuckler',
		description: 'A rogue archetype built around charm, speed, and single-combat flair.',
		icon: 'iconsList.class.rogue',
		keywords: ['rogue', 'subclass'],
		tags: ['melee', 'mobility', 'face', 'duelist', 'burst-damage'],
		...rogueParent
	},
	{
		id: 'classes--sorcerer',
		title: 'Sorcerer',
		href: '/classes/sorcerer',
		description: 'An innate spellcaster who draws power from bloodline, gift, curse, or magical origin.',
		icon: 'iconsList.class.sorcerer',
		tags: ['spellcasting', 'arcane', 'burst-damage', 'control', 'innate-magic'],
		...classParent
	},
	{
		id: 'classes--warlock',
		title: 'Warlock',
		href: '/classes/warlock',
		description: 'An occult spellcaster empowered by a pact with an otherworldly patron.',
		icon: 'iconsList.class.warlock',
		tags: ['spellcasting', 'arcane', 'dark-magic', 'burst-damage', 'pact-magic'],
		...classParent
	},
	{
		id: 'classes--wizard',
		title: 'Wizard',
		href: '/classes/wizard',
		description: 'A studied arcane caster who learns, prepares, and controls a wide range of powerful spells.',
		icon: 'iconsList.class.wizard',
		tags: ['spellcasting', 'arcane', 'control', 'utility', 'rituals'],
		...classParent
	},
	{
		id: 'classes--gunslinger',
		title: 'Gunslinger',
		href: '/classes/gunslinger',
		description: 'A risky ranged combat class built around firearms, quick timing, grit, and precision shots.',
		icon: 'iconsList.entity.weapon',
		tags: ['ranged', 'firearms', 'burst-damage', 'precision', 'risky'],
		...classParent
	},
	{
		id: 'classes--monster-hunter',
		title: 'Monster Hunter',
		href: '/classes/monster-hunter',
		description:
			'A trained specialist who studies, tracks, and destroys dangerous creatures using knowledge and weapons.',
		icon: 'iconsList.game.monster',
		tags: ['monster-hunting', 'melee', 'ranged', 'skills', 'tactical'],
		...classParent
	},
	{
		id: 'classes--pugilist',
		title: 'Pugilist',
		href: '/classes/pugilist',
		description:
			'A rough streetfighter who survives through grit, fists, endurance, and reckless confidence.',
		icon: 'iconsList.weapon.strike',
		tags: ['melee', 'brute', 'tank', 'sustained-damage', 'grit'],
		...classParent
	},
	{
		id: 'classes--captain',
		title: 'Captain',
		href: '/classes/captain',
		description:
			'A battlefield leader who inspires allies, gives direction, and stands strong in the front line.',
		icon: 'iconsList.game.party',
		tags: ['leader', 'support', 'tank', 'tactical', 'melee'],
		...classParent
	},
	{
		id: 'classes--champion',
		title: 'Champion',
		href: '/classes/champion',
		description: 'A weapon-focused warrior who relies on courage, physical power, and direct combat skill.',
		icon: 'iconsList.entity.weapon',
		tags: ['melee', 'brute', 'sustained-damage', 'simple', 'weapon-master'],
		...classParent
	},
	{
		id: 'classes--messenger',
		title: 'Messenger',
		href: '/classes/messenger',
		description:
			'A quick traveller and advisor who carries news, avoids danger, and supports the group through mobility.',
		icon: 'iconsList.entity.scroll',
		tags: ['mobility', 'support', 'skills', 'explorer', 'utility'],
		...classParent
	},
	{
		id: 'classes--scholar',
		title: 'Scholar',
		href: '/classes/scholar',
		description:
			'A learned character focused on lore, ancient knowledge, healing arts, and careful support.',
		icon: 'iconsList.entity.book',
		tags: ['skills', 'support', 'healer', 'utility', 'knowledge'],
		...classParent
	},
	{
		id: 'classes--treasure-hunter',
		title: 'Treasure Hunter',
		href: '/classes/treasure-hunter',
		description:
			'A cunning adventurer who seeks lost things, handles danger, and thrives on exploration.',
		icon: 'iconsList.entity.loot',
		tags: ['stealth', 'skills', 'explorer', 'utility', 'mobility'],
		...classParent
	},
	{
		id: 'classes--warden',
		title: 'Warden',
		href: '/classes/warden',
		description: 'A protector who blends martial strength, survival knowledge, and guardianship of others.',
		icon: 'iconsList.entity.armor',
		tags: ['tank', 'melee', 'primal', 'support', 'protector'],
		...classParent
	},
	{
		id: 'classes--illrigger',
		title: 'Illrigger',
		href: '/classes/illrigger',
		description:
			'An infernal knight who uses discipline, fear, strategy, and hellish power to dominate the battlefield.',
		icon: 'iconsList.class.paladin',
		tags: ['tank', 'melee', 'infernal', 'dark-magic', 'control'],
		...classParent
	},
	{
		id: 'classes--blood-hunter',
		title: 'Blood Hunter',
		href: '/classes/blood-hunter',
		description:
			'A dark warrior who sacrifices part of themselves to hunt monsters and empower their attacks.',
		icon: 'iconsList.hp.blood',
		tags: ['melee', 'monster-hunting', 'blood-magic', 'dark-magic', 'burst-damage'],
		...classParent
	},
	{
		id: 'classes--vampyr',
		title: 'Vampyr',
		href: '/classes/vampyr',
		description:
			'A homebrew blood-cursed class that uses vampiric gifts, hunger, charm, and blood magic as dangerous power.',
		icon: 'iconsList.hp.blood',
		aliases: ['vampire'],
		tags: ['dark-magic', 'blood-magic', 'undead', 'charm', 'melee'],
		...classParent
	},
	{
		id: 'classes--mournbound',
		title: 'Mournbound',
		href: '/classes/mournbound',
		description: 'A Mournbound is a cursed warrior whose sadness has become physical.',
		icon: 'iconsList.entity.wand',
		tags: ['melee', 'dark-magic', 'cursed', 'control', 'chains', 'grief'],
		...classParent
	}
] satisfies PageRegistryEntry[];
