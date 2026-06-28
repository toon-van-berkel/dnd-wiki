export type NavigationItem = {
	title: string;
	href: string;
	description?: string;
	children?: NavigationItem[];
};

// This file controls sidebar order and nesting only. Article content lives in src/routes.
export const navigation: NavigationItem[] = [
	{
		title: 'Species',
		href: '/species',
		description: 'Playable peoples and campaign availability.',
		children: [
			{
				title: 'Human',
				href: '/species/human',
				description: 'Adaptable people found throughout the setting.'
			},
			{
				title: 'Elf',
				href: '/species/elf',
				description: 'Long-lived people with several distinct cultures.',
				children: [
					{
						title: 'Astral Elf',
						href: '/species/elf/astral-elf',
						description: 'Elves shaped by life beyond the ordinary world.'
					}
				]
			}
		]
	},
	{
		title: 'Classes',
		href: '/classes',
		description: 'Class options, subclass guidance, and campaign availability.',
		children: [
			{
				title: 'Artificer',
				href: '/classes/artificer',
				description: 'A magical inventor who turns tools, crafted gear, and arcane techniques into flexible problem-solving.'
			},
			{
				title: 'Barbarian',
				href: '/classes/barbarian',
				description: 'A primal warrior built around rage, raw strength, toughness, and explosive melee pressure.'
			},
			{
				title: 'Bard',
				href: '/classes/bard',
				description: 'A charismatic performer who supports allies, manipulates enemies, and blends magic with creativity.'
			},
			{
				title: 'Cleric',
				href: '/classes/cleric',
				description: 'A divine spellcaster who channels faith, protection, healing, and sacred power.',
				children: [
					{
						title: 'Life Domain',
						href: '/classes/cleric/life-domain',
						description: 'A cleric domain focused on protection, restoration, and keeping allies alive.'
					},
					{
						title: 'Death Domain',
						href: '/classes/cleric/life-domain',
						description: '...'
					}
				]
			},
			{
				title: 'Druid',
				href: '/classes/druid',
				description: 'A nature-focused spellcaster who uses primal magic, healing, elemental force, and shapeshifting.'
			},
			{
				title: 'Fighter',
				href: '/classes/fighter',
				description: 'A master of weapons and armor with strong combat consistency, durability, and tactical flexibility.'
			},
			{
				title: 'Monk',
				href: '/classes/monk',
				description: 'A disciplined martial artist who uses speed, focus, mobility, and supernatural physical control.'
			},
			{
				title: 'Paladin',
				href: '/classes/paladin',
				description: 'A sacred warrior bound by an oath, combining martial strength with divine magic and protection.'
			},
			{
				title: 'Ranger',
				href: '/classes/ranger',
				description: 'A wilderness warrior who combines martial skill, tracking, survival, and primal magic.'
			},
			{
				title: 'Rogue',
				href: '/classes/rogue',
				description: 'A skill-focused class built around precision, stealth, mobility, and clever problem-solving.',
				children: [
					{
						title: 'Arcane Trickster',
						href: '/classes/rogue/arcane-trickster',
						description: 'A rogue archetype that mixes stealth and precision with subtle arcane magic.'
					},
					{
						title: 'Assassin',
						href: '/classes/rogue/assassin',
						description: 'A rogue archetype focused on ambushes, infiltration, and eliminating targets quickly.'
					},
					{
						title: 'Thief',
						href: '/classes/rogue/thief',
						description: 'A rogue archetype focused on agility, utility, climbing, sneaking, and fast item use.'
					},
					{
						title: 'Inquisitive',
						href: '/classes/rogue/inquisitive',
						description: ''
					},
					{
						title: 'Mastermind',
						href: '/classes/rogue/mastermind',
						description: ''
					},
					{
						title: 'Phantom',
						href: '/classes/rogue/phantom',
						description: ''
					},
					{
						title: 'Scout',
						href: '/classes/rogue/scout',
						description: ''
					},
					{
						title: 'Soulknife',
						href: '/classes/rogue/soulknife',
						description: ''
					},
					{
						title: 'Swashbuckler',
						href: '/classes/rogue/swashbuckler',
						description: ''
					}
				]
			},
			{
				title: 'Sorcerer',
				href: '/classes/sorcerer',
				description: 'An innate spellcaster who draws power from bloodline, gift, curse, or magical origin.'
			},
			{
				title: 'Warlock',
				href: '/classes/warlock',
				description: 'An occult spellcaster empowered by a pact with an otherworldly patron.'
			},
			{
				title: 'Wizard',
				href: '/classes/wizard',
				description: 'A studied arcane caster who learns, prepares, and controls a wide range of powerful spells.'
			},
			{
				title: 'Gunslinger',
				href: '/classes/gunslinger',
				description: 'A risky ranged combat class built around firearms, quick timing, grit, and precision shots.'
			},
			{
				title: 'Monster Hunter',
				href: '/classes/monster-hunter',
				description: 'A trained specialist who studies, tracks, and destroys dangerous creatures using knowledge and weapons.'
			},
			{
				title: 'Pugilist',
				href: '/classes/pugilist',
				description: 'A rough streetfighter who survives through grit, fists, endurance, and reckless confidence.'
			},
			{
				title: 'Captain',
				href: '/classes/captain',
				description: 'A battlefield leader who inspires allies, gives direction, and stands strong in the front line.'
			},
			{
				title: 'Champion',
				href: '/classes/champion',
				description: 'A weapon-focused warrior who relies on courage, physical power, and direct combat skill.'
			},
			{
				title: 'Messenger',
				href: '/classes/messenger',
				description: 'A quick traveller and advisor who carries news, avoids danger, and supports the group through mobility.'
			},
			{
				title: 'Scholar',
				href: '/classes/scholar',
				description: 'A learned character focused on lore, ancient knowledge, healing arts, and careful support.'
			},
			{
				title: 'Treasure Hunter',
				href: '/classes/treasure-hunter',
				description: 'A cunning adventurer who seeks lost things, handles danger, and thrives on exploration.'
			},
			{
				title: 'Warden',
				href: '/classes/warden',
				description: 'A protector who blends martial strength, survival knowledge, and guardianship of others.'
			},
			{
				title: 'Illrigger',
				href: '/classes/illrigger',
				description: 'An infernal knight who uses discipline, fear, strategy, and hellish power to dominate the battlefield.'
			},
			{
				title: 'Blood Hunter',
				href: '/classes/blood-hunter',
				description: 'A dark warrior who sacrifices part of themselves to hunt monsters and empower their attacks.'
			},
			{
				title: 'Vampyr',
				href: '/classes/vampyr',
				description: 'A homebrew blood-cursed class that uses vampiric gifts, hunger, charm, and blood magic as dangerous power.'
			}
		]
	},
	{
		title: 'Rules',
		href: '/rules',
		description: 'House rules and table rulings.',
		children: [
			{
				title: 'Movement',
				href: '/rules/movement',
				description: 'Positioning, difficult terrain, and travel rulings.'
			},
			{
				title: 'Fighting',
				href: '/rules/fighting',
				description: 'Combat rulings, critical hits, and flanking.'
			}
		]
	},
	{
		title: 'Monsters',
		href: '/monsters',
		description: 'Creatures discovered during the campaigns.'
	},
	{
		title: 'Locations',
		href: '/locations',
		description: 'Places, settlements, and regions.'
	}
];

export function findNavigationItem(
	href: string,
	items: NavigationItem[] = navigation
): NavigationItem | undefined {
	for (const item of items) {
		if (item.href === href) return item;

		if (item.children) {
			const match = findNavigationItem(href, item.children);
			if (match) return match;
		}
	}

	return undefined;
}

export function getNavigationChildren(href: string): NavigationItem[] {
	return findNavigationItem(href)?.children ?? [];
}
