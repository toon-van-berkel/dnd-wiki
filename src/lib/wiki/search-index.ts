export type SearchEntry = {
	title: string;
	href: string;
	category: string;
	description: string;
	tags?: string[];
};

// Search metadata only. Keep article content in its route file.
export const searchIndex: SearchEntry[] = [
	{ title: 'Species', href: '/species', category: 'Species', description: 'Playable species and campaign availability.', tags: ['characters'] },
	{ title: 'Human', href: '/species/human', category: 'Species', description: 'Adaptable people found throughout the setting.', tags: ['allowed'] },
	{ title: 'Elf', href: '/species/elf', category: 'Species', description: 'Long-lived people with several distinct cultures.', tags: ['limited'] },
	{ title: 'Astral Elf', href: '/species/elf/astral-elf', category: 'Species', description: 'Elves shaped by life beyond the ordinary world.', tags: ['approval'] },
	{ title: 'Classes', href: '/classes', category: 'Classes', description: 'Available classes and character roles.', tags: ['characters'] },
	{ title: 'Cleric', href: '/classes/cleric', category: 'Classes', description: 'A divine class driven by conviction and service.', tags: ['divine'] },
	{ title: 'Life Domain', href: '/classes/cleric/life-domain', category: 'Classes', description: 'A cleric domain focused on protection and recovery.', tags: ['subclass'] },
	{ title: 'Rogue', href: '/classes/rogue', category: 'Classes', description: 'A skill-focused class built around precision, stealth, and mobility.', tags: ['dexterity', 'skills', 'stealth'] },
	{ title: 'Rules', href: '/rules', category: 'Rules', description: 'House rules and table rulings.', tags: ['global'] },
	{ title: 'Movement', href: '/rules/movement', category: 'Rules', description: 'Table rulings for positioning, terrain, and travel.', tags: ['combat', 'travel'] },
	{ title: 'Fighting', href: '/rules/fighting', category: 'Rules', description: 'Combat rulings including flanking and critical hits.', tags: ['combat'] },
	{ title: 'Monsters', href: '/monsters', category: 'Bestiary', description: 'Creatures encountered in the campaigns.', tags: ['bestiary'] },
	{ title: 'Locations', href: '/locations', category: 'World', description: 'Places discovered in the campaign world.', tags: ['setting'] }
];
