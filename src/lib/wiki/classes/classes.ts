import { subClasses_Clerics } from "./sub_classes-cleric";
import { subClasses_Rogues } from "./sub_classes-rogues";

export const classes = {
		title: 'Classes',
		href: '/classes',
		description: 'Class options, subclass guidance, and campaign availability.',
		children: [
			{
				title: 'Artificer',
				href: '/classes/artificer',
				description: 'A magical inventor who turns tools, crafted gear, and arcane techniques into flexible problem-solving.',
				tags: ['arcane', 'crafting', 'support', 'utility', 'half-caster']
			},
			{
				title: 'Barbarian',
				href: '/classes/barbarian',
				description: 'A primal warrior built around rage, raw strength, toughness, and explosive melee pressure.',
				tags: ['tank', 'melee', 'brute', 'burst-damage', 'sustained-damage']
			},
			{
				title: 'Bard',
				href: '/classes/bard',
				description: 'A charismatic performer who supports allies, manipulates enemies, and blends magic with creativity.',
				tags: ['spellcasting', 'support', 'face', 'control', 'utility']
			},
			{
				title: 'Cleric',
				href: '/classes/cleric',
				description: 'A divine spellcaster who channels faith, protection, healing, and sacred power.',
				tags: ['spellcasting', 'divine', 'healer', 'support', 'control'],
				children: subClasses_Clerics
			},
			{
				title: 'Druid',
				href: '/classes/druid',
				description: 'A nature-focused spellcaster who uses primal magic, healing, elemental force, and shapeshifting.',
				tags: ['spellcasting', 'primal', 'healer', 'utility', 'shapeshifting']
			},
			{
				title: 'Fighter',
				href: '/classes/fighter',
				description: 'A master of weapons and armor with strong combat consistency, durability, and tactical flexibility.',
				tags: ['melee', 'ranged', 'tank', 'sustained-damage', 'tactical']
			},
			{
				title: 'Monk',
				href: '/classes/monk',
				description: 'A disciplined martial artist who uses speed, focus, mobility, and supernatural physical control.',
				tags: ['melee', 'mobility', 'control', 'skirmisher', 'sustained-damage']
			},
			{
				title: 'Paladin',
				href: '/classes/paladin',
				description: 'A sacred warrior bound by an oath, combining martial strength with divine magic and protection.',
				tags: ['tank', 'melee', 'divine', 'support', 'burst-damage']
			},
			{
				title: 'Ranger',
				href: '/classes/ranger',
				description: 'A wilderness warrior who combines martial skill, tracking, survival, and primal magic.',
				tags: ['ranged', 'melee', 'explorer', 'primal', 'half-caster']
			},
			{
				title: 'Rogue',
				href: '/classes/rogue',
				description: 'A skill-focused class built around precision, stealth, mobility, and clever problem-solving.',
				tags: ['stealth', 'skills', 'mobility', 'burst-damage', 'utility'],
				children: subClasses_Rogues
			},
			{
				title: 'Sorcerer',
				href: '/classes/sorcerer',
				description: 'An innate spellcaster who draws power from bloodline, gift, curse, or magical origin.',
				tags: ['spellcasting', 'arcane', 'burst-damage', 'control', 'innate-magic']
			},
			{
				title: 'Warlock',
				href: '/classes/warlock',
				description: 'An occult spellcaster empowered by a pact with an otherworldly patron.',
				tags: ['spellcasting', 'arcane', 'dark-magic', 'burst-damage', 'pact-magic']
			},
			{
				title: 'Wizard',
				href: '/classes/wizard',
				description: 'A studied arcane caster who learns, prepares, and controls a wide range of powerful spells.',
				tags: ['spellcasting', 'arcane', 'control', 'utility', 'rituals']
			},
			{
				title: 'Gunslinger',
				href: '/classes/gunslinger',
				description: 'A risky ranged combat class built around firearms, quick timing, grit, and precision shots.',
				tags: ['ranged', 'firearms', 'burst-damage', 'precision', 'risky']
			},
			{
				title: 'Monster Hunter',
				href: '/classes/monster-hunter',
				description: 'A trained specialist who studies, tracks, and destroys dangerous creatures using knowledge and weapons.',
				tags: ['monster-hunting', 'melee', 'ranged', 'skills', 'tactical']
			},
			{
				title: 'Pugilist',
				href: '/classes/pugilist',
				description: 'A rough streetfighter who survives through grit, fists, endurance, and reckless confidence.',
				tags: ['melee', 'brute', 'tank', 'sustained-damage', 'grit']
			},
			{
				title: 'Captain',
				href: '/classes/captain',
				description: 'A battlefield leader who inspires allies, gives direction, and stands strong in the front line.',
				tags: ['leader', 'support', 'tank', 'tactical', 'melee']
			},
			{
				title: 'Champion',
				href: '/classes/champion',
				description: 'A weapon-focused warrior who relies on courage, physical power, and direct combat skill.',
				tags: ['melee', 'brute', 'sustained-damage', 'simple', 'weapon-master']
			},
			{
				title: 'Messenger',
				href: '/classes/messenger',
				description: 'A quick traveller and advisor who carries news, avoids danger, and supports the group through mobility.',
				tags: ['mobility', 'support', 'skills', 'explorer', 'utility']
			},
			{
				title: 'Scholar',
				href: '/classes/scholar',
				description: 'A learned character focused on lore, ancient knowledge, healing arts, and careful support.',
				tags: ['skills', 'support', 'healer', 'utility', 'knowledge']
			},
			{
				title: 'Treasure Hunter',
				href: '/classes/treasure-hunter',
				description: 'A cunning adventurer who seeks lost things, handles danger, and thrives on exploration.',
				tags: ['stealth', 'skills', 'explorer', 'utility', 'mobility']
			},
			{
				title: 'Warden',
				href: '/classes/warden',
				description: 'A protector who blends martial strength, survival knowledge, and guardianship of others.',
				tags: ['tank', 'melee', 'primal', 'support', 'protector']
			},
			{
				title: 'Illrigger',
				href: '/classes/illrigger',
				description: 'An infernal knight who uses discipline, fear, strategy, and hellish power to dominate the battlefield.',
				tags: ['tank', 'melee', 'infernal', 'dark-magic', 'control']
			},
			{
				title: 'Blood Hunter',
				href: '/classes/blood-hunter',
				description: 'A dark warrior who sacrifices part of themselves to hunt monsters and empower their attacks.',
				tags: ['melee', 'monster-hunting', 'blood-magic', 'dark-magic', 'burst-damage']
			},
			{
				title: 'Vampyr',
				href: '/classes/vampyr',
				description: 'A homebrew blood-cursed class that uses vampiric gifts, hunger, charm, and blood magic as dangerous power.',
				tags: ['dark-magic', 'blood-magic', 'undead', 'charm', 'melee']
			},
			{
				title: 'Mournbound',
				href: '/classes/mournbound',
				description: 'A Mournbound is a cursed warrior whose sadness has become physical.',
				tags: ['melee', 'dark-magic', 'cursed', 'control', 'chains', 'grief']
			}
		]
	}