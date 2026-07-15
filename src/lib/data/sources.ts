export type SourceKind =
	| 'official-book'
	| 'official-online'
	| 'third-party'
	| 'project';

export type SourceStatus =
	| 'actively-used'
	| 'reference'
	| 'planned';

export type SourceAccess =
	| 'free'
	| 'paid'
	| 'mixed'
	| 'private';

export type SourceLink = {
	label: string;
	href: string;
};

export type SourceEntry = {
	id: string;
	title: string;
	kind: SourceKind;
	status: SourceStatus;
	access: SourceAccess;

	publisher?: string;
	authors?: string[];
	edition?: string;
	publicationYear?: number;

	description: string;
	usage: string;

	url?: string;
	additionalLinks?: SourceLink[];

	notes?: string;
};

export const sourceKindLabels: Record<SourceKind, string> = {
	'official-book': 'Official publication',
	'official-online': 'Official online source',
	'third-party': 'Third-party source',
	project: 'Project source'
};

export const sourceStatusLabels: Record<SourceStatus, string> = {
	'actively-used': 'Actively used',
	reference: 'Reference only',
	planned: 'Planned'
};

export const sourceAccessLabels: Record<SourceAccess, string> = {
	free: 'Publicly accessible',
	paid: 'Commercial publication',
	mixed: 'Mixed access',
	private: 'Private project material'
};

export const sources: SourceEntry[] = [
	{
		id: 'dnd-basic-rules-2018',
		title: 'D&D Basic Rules',
		kind: 'official-book',
		status: 'actively-used',
		access: 'free',
		publisher: 'Wizards of the Coast',
		edition: 'Fifth Edition',
		publicationYear: 2018,
		description:
			'The freely published basic rules for creating characters, adventuring, combat, spellcasting, monsters, and magic items.',
		usage:
			'Used as a primary reference for general Fifth Edition terminology and commonly used rules.',
		url: 'https://www.dndbeyond.com/sources/dnd/basic-rules-2014',
		notes:
			'The wiki may simplify or reorganise rules for readability. The official source remains authoritative.'
	},
	{
		id: 'players-handbook-35',
		title: "Player's Handbook",
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2003,
		description:
			'The primary player-facing rulebook for characters, classes, races, equipment, combat, skills, feats, and spellcasting.',
		usage:
			'Used when researching older rules, character options, terminology, and inspiration for homebrew material.'
	},
	{
		id: 'dungeon-masters-guide-35',
		title: "Dungeon Master's Guide",
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2003,
		description:
			'The primary Dungeon Master reference for running games, creating adventures, rewards, encounters, and magic items.',
		usage:
			'Used as a reference for encounter design, campaign organisation, magic items, and Dungeon Master guidance.'
	},
	{
		id: 'complete-arcane',
		title: 'Complete Arcane',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2004,
		description:
			'A supplement containing arcane classes, prestige classes, feats, spells, and character concepts.',
		usage:
			'Used as inspiration and historical reference for arcane classes, mechanics, and homebrew concepts.'
	},
	{
		id: 'complete-divine',
		title: 'Complete Divine',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2004,
		description:
			'A supplement focused on divine magic, religious characters, classes, prestige classes, feats, and spells.',
		usage:
			'Used as inspiration for religious organisations, divine characters, and homebrew mechanics.'
	},
	{
		id: 'complete-adventurer',
		title: 'Complete Adventurer',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2005,
		description:
			'A supplement focused on skill-based characters, specialised classes, prestige classes, feats, and equipment.',
		usage:
			'Used as inspiration for rogues, scouts, adventurers, explorers, and other skill-focused options.'
	},
	{
		id: 'complete-psionic',
		title: 'Complete Psionic',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2006,
		description:
			'A supplement covering psionic classes, prestige classes, feats, powers, and psionic character options.',
		usage:
			'Used as a historical and mechanical reference for psionic and mind-based homebrew content.'
	},
	{
		id: 'complete-mage',
		title: 'Complete Mage',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2006,
		description:
			'A supplement focused on arcane characters, magical archetypes, alternative class features, feats, and spells.',
		usage:
			'Used as reference material when developing magical archetypes and alternative class features.'
	},
	{
		id: 'complete-champion',
		title: 'Complete Champion',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2007,
		description:
			'A supplement about religious organisations, affiliations, divine options, domain feats, and character devotion.',
		usage:
			'Used as inspiration for factions, religions, affiliations, and divine character options.'
	},
	{
		id: 'complete-scoundrel',
		title: 'Complete Scoundrel',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2007,
		description:
			'A supplement focused on scoundrels, trickery, skill tricks, prestige classes, feats, and unconventional characters.',
		usage:
			'Used as inspiration for rogue-like classes, skill tricks, social mechanics, and deceptive character options.'
	},
	{
		id: 'fiend-folio',
		title: 'Fiend Folio',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2003,
		description:
			'A collection of monsters, fiends, templates, and unusual creatures.',
		usage:
			'Used as a creature reference and as inspiration for monsters, encounters, and transformations.'
	},
	{
		id: 'savage-species',
		title: 'Savage Species',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2003,
		description:
			'A supplement about playing monsters, monster classes, templates, abilities, feats, equipment, and transformations.',
		usage:
			'Used as inspiration for unusual playable species, monster characters, and transformation mechanics.'
	},
	{
		id: 'miniatures-handbook',
		title: 'Miniatures Handbook',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2003,
		description:
			'A supplement containing classes, prestige classes, feats, spells, monsters, and miniature-combat material.',
		usage:
			'Used as historical reference for classes and combat-related mechanics.'
	},
	{
		id: 'draconomicon',
		title: 'Draconomicon: The Book of Dragons',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		publicationYear: 2003,
		description:
			'A detailed reference about dragons, their anatomy, behaviour, societies, combat abilities, spells, and treasure.',
		usage:
			'Used when researching dragons, dragon encounters, draconic lore, and dragon-related homebrew content.'
	},
	{
		id: 'magic-item-compendium',
		title: 'Magic Item Compendium',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		description:
			'A large collection of magic armour, weapons, clothing, tools, item sets, and magic-item rules.',
		usage:
			'Used as inspiration and reference material for magic items and equipment.'
	},
	{
		id: 'spell-compendium',
		title: 'Spell Compendium',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3.5',
		description:
			'A consolidated collection of spells from numerous official supplements and publications.',
		usage:
			'Used as reference material when researching spells and developing homebrew magical effects.'
	},
	{
		id: 'shining-south',
		title: 'Shining South',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Forgotten Realms — Dungeons & Dragons 3.5',
		publicationYear: 2004,
		description:
			'A Forgotten Realms regional supplement containing locations, races, regions, feats, classes, spells, and creatures.',
		usage:
			'Used as regional and setting reference material.'
	},
	{
		id: 'deities-and-demigods',
		title: 'Deities and Demigods',
		kind: 'official-book',
		status: 'reference',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Dungeons & Dragons 3rd Edition',
		publicationYear: 2002,
		description:
			'A supplement about gods, divine ranks, pantheons, worship, divine abilities, and immortal characters.',
		usage:
			'Used as inspiration for deities, religions, divine beings, and high-level campaign concepts.'
	},
	{
		id: 'mordenkainen-monsters-multiverse',
		title: "Mordenkainen Presents: Monsters of the Multiverse",
		kind: 'official-book',
		status: 'actively-used',
		access: 'paid',
		publisher: 'Wizards of the Coast',
		edition: 'Fifth Edition',
		publicationYear: 2021,
		description:
			'A collection of revised playable species and monster statistics from several Fifth Edition publications.',
		usage:
			'Used as a reference for playable species and Fifth Edition monster information.'
	},
	{
		id: 'dnd-beyond',
		title: 'D&D Beyond',
		kind: 'official-online',
		status: 'actively-used',
		access: 'mixed',
		publisher: 'Wizards of the Coast',
		description:
			'The official digital toolset and online rules reference for Dungeons & Dragons.',
		usage:
			'Used to verify current terminology, classes, species, spells, equipment, magic items, monsters, and other official game material.',
		url: 'https://www.dndbeyond.com/',
		additionalLinks: [
			{
				label: 'Species',
				href: 'https://www.dndbeyond.com/species'
			},
			{
				label: 'Classes',
				href: 'https://www.dndbeyond.com/classes'
			},
			{
				label: 'Backgrounds',
				href: 'https://www.dndbeyond.com/backgrounds'
			},
			{
				label: 'Feats',
				href: 'https://www.dndbeyond.com/feats'
			},
			{
				label: 'Spells',
				href: 'https://www.dndbeyond.com/spells'
			},
			{
				label: 'Equipment',
				href: 'https://www.dndbeyond.com/equipment'
			},
			{
				label: 'Magic Items',
				href: 'https://www.dndbeyond.com/magic-items'
			},
			{
				label: 'Monsters',
				href: 'https://www.dndbeyond.com/monsters'
			}
		],
		notes:
			'Some D&D Beyond material is freely accessible, while other material requires ownership, a subscription, or another form of access.'
	},
	{
		id: 'wizards-fan-content-policy',
		title: 'Wizards of the Coast Fan Content Policy',
		kind: 'official-online',
		status: 'actively-used',
		access: 'free',
		publisher: 'Wizards of the Coast',
		description:
			'The policy describing how certain Wizards of the Coast intellectual property may be used in unofficial fan-created content.',
		usage:
			'Used as a legal and publishing reference for the operation of D&D Portal.',
		url: 'https://company.wizards.com/en/legal/fancontentpolicy'
	},
	{
		id: 'campaign-house-rules',
		title: 'D&D Portal campaign rules',
		kind: 'project',
		status: 'actively-used',
		access: 'private',
		publisher: 'D&D Portal',
		description:
			'Original house rules, campaign decisions, availability restrictions, interpretations, and table agreements created for campaigns connected to D&D Portal.',
		usage:
			'Used whenever a campaign intentionally differs from an official rule or applies an additional restriction.',
		notes:
			'Campaign rules should be clearly labelled and must not be mistaken for official Dungeons & Dragons rules.'
	},
	{
		id: 'dnd-portal-homebrew',
		title: 'D&D Portal homebrew material',
		kind: 'project',
		status: 'actively-used',
		access: 'private',
		publisher: 'D&D Portal and named contributors',
		description:
			'Original classes, subclasses, species, monsters, items, spells, locations, and mechanics made for campaigns connected to D&D Portal.',
		usage:
			'Used as optional campaign content where explicitly permitted by the Dungeon Master.',
		notes:
			'Ownership remains with the named author unless a separate licence or agreement states otherwise.'
	},
	{
		id: 'player-feedback',
		title: 'Player and Dungeon Master feedback',
		kind: 'project',
		status: 'actively-used',
		access: 'private',
		publisher: 'D&D Portal community',
		description:
			'Feedback, playtest results, corrections, questions, and suggestions provided by players and Dungeon Masters.',
		usage:
			'Used to improve clarity, identify errors, balance homebrew content, and refine campaign rules.'
	}
];