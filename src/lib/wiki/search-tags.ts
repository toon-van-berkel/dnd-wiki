export type SearchTagGroupId =
	| 'role'
	| 'combat'
	| 'damage'
	| 'defence'
	| 'magic'
	| 'utility'
	| 'exploration'
	| 'social'
	| 'crafting'
	| 'flavour';

export type SearchTag = {
	id: string;
	label: string;
	group: SearchTagGroupId;
	description?: string;
};

export const searchTagGroupLabels: Record<SearchTagGroupId, string> = {
	role: 'Role',
	combat: 'Combat',
	damage: 'Damage',
	defence: 'Defence',
	magic: 'Magic',
	utility: 'Utility',
	exploration: 'Exploration',
	social: 'Social',
	crafting: 'Crafting',
	flavour: 'Theme & Flavour'
};

export const searchTagGroupOrder: SearchTagGroupId[] = [
	'role',
	'combat',
	'damage',
	'defence',
	'magic',
	'utility',
	'exploration',
	'social',
	'crafting',
	'flavour'
];

export const searchTags = [
	{ id: 'ambush', label: 'Ambush', group: 'combat' },
	{ id: 'arcane', label: 'Arcane', group: 'magic' },
	{ id: 'blood-magic', label: 'Blood Magic', group: 'magic' },
	{ id: 'brute', label: 'Brute', group: 'combat' },
	{ id: 'burst-damage', label: 'Burst Damage', group: 'combat' },
	{ id: 'chains', label: 'Chains', group: 'flavour' },
	{ id: 'charm', label: 'Charm', group: 'social' },
	{ id: 'combat', label: 'Combat', group: 'combat' },
	{ id: 'control', label: 'Control', group: 'role' },
	{ id: 'crafting', label: 'Crafting', group: 'crafting' },
	{ id: 'cursed', label: 'Cursed', group: 'flavour' },
	{ id: 'dark-magic', label: 'Dark Magic', group: 'magic' },
	{ id: 'deception', label: 'Deception', group: 'social' },
	{ id: 'divine', label: 'Divine', group: 'magic' },
	{ id: 'duelist', label: 'Duelist', group: 'combat' },
	{ id: 'explorer', label: 'Explorer', group: 'exploration' },
	{ id: 'face', label: 'Face', group: 'social' },
	{ id: 'firearms', label: 'Firearms', group: 'combat' },
	{ id: 'grief', label: 'Grief', group: 'flavour' },
	{ id: 'grit', label: 'Grit', group: 'defence' },
	{ id: 'half-caster', label: 'Half Caster', group: 'magic' },
	{ id: 'healer', label: 'Healer', group: 'role' },
	{ id: 'infernal', label: 'Infernal', group: 'flavour' },
	{ id: 'infiltration', label: 'Infiltration', group: 'exploration' },
	{ id: 'innate-magic', label: 'Innate Magic', group: 'magic' },
	{ id: 'insight', label: 'Insight', group: 'social' },
	{ id: 'investigation', label: 'Investigation', group: 'exploration' },
	{ id: 'knowledge', label: 'Knowledge', group: 'exploration' },
	{ id: 'leader', label: 'Leader', group: 'role' },
	{ id: 'melee', label: 'Melee', group: 'combat' },
	{ id: 'mobility', label: 'Mobility', group: 'combat' },
	{ id: 'monster-hunting', label: 'Monster Hunting', group: 'exploration' },
	{ id: 'movement', label: 'Movement', group: 'utility' },
	{ id: 'necrotic', label: 'Necrotic', group: 'damage' },
	{ id: 'pact-magic', label: 'Pact Magic', group: 'magic' },
	{ id: 'precision', label: 'Precision', group: 'combat' },
	{ id: 'primal', label: 'Primal', group: 'magic' },
	{ id: 'protector', label: 'Protector', group: 'role' },
	{ id: 'protection', label: 'Protection', group: 'defence' },
	{ id: 'psionic', label: 'Psionic', group: 'magic' },
	{ id: 'ranged', label: 'Ranged', group: 'combat' },
	{ id: 'rituals', label: 'Rituals', group: 'magic' },
	{ id: 'risky', label: 'Risky', group: 'flavour' },
	{ id: 'shapeshifting', label: 'Shapeshifting', group: 'magic' },
	{ id: 'simple', label: 'Simple', group: 'utility' },
	{ id: 'skills', label: 'Skills', group: 'utility' },
	{ id: 'skirmisher', label: 'Skirmisher', group: 'combat' },
	{ id: 'spellcasting', label: 'Spellcasting', group: 'magic' },
	{ id: 'stealth', label: 'Stealth', group: 'combat' },
	{ id: 'support', label: 'Support', group: 'role' },
	{ id: 'survival', label: 'Survival', group: 'exploration' },
	{ id: 'sustained-damage', label: 'Sustained Damage', group: 'damage' },
	{ id: 'tactical', label: 'Tactical', group: 'combat' },
	{ id: 'tank', label: 'Tank', group: 'role' },
	{ id: 'travel', label: 'Travel', group: 'exploration' },
	{ id: 'undead', label: 'Undead', group: 'flavour' },
	{ id: 'utility', label: 'Utility', group: 'utility' },
	{ id: 'weapon-master', label: 'Weapon Master', group: 'combat' }
] as const satisfies readonly SearchTag[];

export const searchTagById: ReadonlyMap<string, SearchTag> = new Map(
	searchTags.map((tag) => [tag.id, tag])
);
