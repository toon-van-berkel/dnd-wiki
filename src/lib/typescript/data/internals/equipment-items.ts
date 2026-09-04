/*
	Location: src/lib/typescript/data/internals/equipment-items.ts
	Use: Central equipment item data for equipment browser, pages, links, and search.
*/
import {
	pugilistEquipmentItems,
	type PugilistEquipmentItem
} from './classes/pugilist';
import type { InlineContent } from '$lib/typescript/pages/content-types';

type EquipmentImage = {
	readonly href: string;
	readonly alt: string;
};

export type EquipmentStatistic = {
	readonly label: string;
	readonly value: InlineContent;
};

export type EquipmentItem = {
	readonly name: string;
	readonly slug: string;
	readonly type: string;
	readonly category: string;
	readonly source: string;
	readonly rarity: string;
	readonly attunement: boolean;
	readonly cost?: string;
	readonly weight?: string;
	readonly damage?: InlineContent;
	readonly properties?: readonly InlineContent[];
	readonly mastery?: {
		readonly name: string;
		readonly description: InlineContent;
	};
	readonly description: InlineContent;
	readonly statistics?: readonly EquipmentStatistic[];
	readonly tags: readonly string[];
	readonly img: EquipmentImage;
};

export type EquipmentType = {
	readonly label: string;
	readonly slug: string;
	readonly description: string;
	readonly tags: readonly string[];
};

const playerHandbook = "Player's Handbook";
const pugilistSource = 'Pugilist Clean Edition';

const text = (value: string): InlineContent[number] => ({
	type: 'text',
	text: value
});

const link = (path: string, label: string): InlineContent[number] => ({
	type: 'link',
	path,
	label
});

const icon = (href: string, alt: string): EquipmentImage => ({
	href,
	alt
});

export function createEquipmentSlug(name: string): string {
	return name
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/\+(\d+)/g, 'plus-$1')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function createEquipmentHref(item: EquipmentItem): string {
	return `/equipment/${getEquipmentItemTypeSlug(item)}/${item.slug}`;
}

function createPathKey(slug: string): string {
	return slug.replace(/-([a-z0-9])/g, (_match, character: string) => character.toUpperCase());
}

function fromPugilistItem(item: PugilistEquipmentItem): EquipmentItem {
	const slug = createEquipmentSlug(item.name);

	return {
		name: item.name,
		slug,
		type: item.type,
		category: item.type,
		source: pugilistSource,
		rarity: item.rarity,
		attunement: item.attunement,
		description: item.description,
		statistics: [
			{ label: 'Type', value: [text(item.type)] },
			{ label: 'Rarity', value: [text(item.rarity)] },
			{
				label: 'Attunement',
				value: [text(item.attunement ? 'Requires attunement' : 'No attunement')]
			},
			{ label: 'Source', value: [text(pugilistSource)] }
		],
		tags: item.tags,
		img: icon('/icons/white/entity/tool.svg', `A stylized icon representing ${item.name}.`)
	};
}

const standardEquipmentItems: readonly EquipmentItem[] = [
	{
		name: 'Greataxe',
		slug: 'greataxe',
		type: 'Martial Melee Weapon',
		category: 'Weapon',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '30 gp',
		weight: '7 lb.',
		damage: [text('1d12 '), link('internals.rules.damageTypes.slashing', 'Slashing')],
		properties: [
			[link('internals.rules.equipment.martialWeapons', 'Martial weapon')],
			[text('Heavy')],
			[text('Two-Handed')]
		],
		mastery: {
			name: 'Cleave',
			description: [
				text('If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon damage, but do not add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.')
			]
		},
		description: [
			text('Proficiency with a greataxe lets you add your proficiency bonus to attack rolls you make with it. A greataxe is a heavy, two-handed martial melee weapon that deals slashing damage.')
		],
		tags: ['weapon', 'martial', 'melee', 'damage', 'combat'],
		img: icon('/icons/white/weapon/battleaxe.svg', 'A stylized axe icon representing a greataxe.')
	},
	{
		name: 'Handaxes',
		slug: 'handaxes',
		type: 'Simple Melee Weapon',
		category: 'Weapon',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '5 gp',
		weight: '2 lb.',
		damage: [text('1d6 '), link('internals.rules.damageTypes.slashing', 'Slashing')],
		properties: [
			[link('internals.rules.equipment.simpleWeapons', 'Simple weapon')],
			[text('Light')],
			[text('Thrown (range 20/60)')]
		],
		description: [
			text('Proficiency with handaxes lets you add your proficiency bonus to attack rolls you make with them. Handaxes are light simple melee weapons that can also be thrown.')
		],
		tags: ['weapon', 'simple', 'melee', 'thrown', 'damage', 'combat'],
		img: icon('/icons/white/weapon/handaxe.svg', 'A stylized handaxe icon representing handaxes.')
	},
	{
		name: 'Backpack',
		slug: 'backpack',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '2 gp',
		weight: '5 lb.',
		description: [
			text('A backpack is a carried container for basic supplies, travel gear, and loose adventuring equipment. It can hold a limited amount of gear and can also have bulky items strapped outside it.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('2 gp')] },
			{ label: 'Weight', value: [text('5 lb.')] },
			{ label: 'Capacity', value: [text('1 cubic foot or 30 pounds of gear')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'container', 'pack', 'storage'],
		img: icon('/icons/white/entity/pack.svg', 'A stylized pack icon representing a backpack.')
	},
	{
		name: 'Bedroll',
		slug: 'bedroll',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '1 gp',
		weight: '7 lb.',
		description: [
			text('A bedroll is portable sleeping gear for travel, wilderness camps, and rough lodging. It is ordinary equipment and does not create a rest by itself; the normal rest rules still decide what a character recovers.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('1 gp')] },
			{ label: 'Weight', value: [text('7 lb.')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'camping', 'travel', 'rest'],
		img: icon('/icons/white/entity/pack.svg', 'A stylized pack icon representing a bedroll.')
	},
	{
		name: 'Mess Kit',
		slug: 'mess-kit',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '2 sp',
		weight: '1 lb.',
		description: [
			text('A mess kit is compact eating and cooking equipment for a traveler. It covers ordinary camp-meal needs such as a cup, simple utensils, and a small pan or plate surface.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('2 sp')] },
			{ label: 'Weight', value: [text('1 lb.')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'camping', 'food', 'supplies'],
		img: icon('/icons/white/entity/tool.svg', 'A stylized tool icon representing a mess kit.')
	},
	{
		name: 'Tinderbox',
		slug: 'tinderbox',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '5 sp',
		weight: '1 lb.',
		description: [
			text('A tinderbox carries basic fire-starting supplies. Lighting '),
			link('internals.equipment.torch', 'a torch'),
			text(' or another exposed fuel source takes an '),
			link('internals.rules.actions.action', 'action'),
			text(', while starting a less prepared fire normally takes 1 minute.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('5 sp')] },
			{ label: 'Weight', value: [text('1 lb.')] },
			{
				label: 'Use Time',
				value: [
					link('internals.rules.actions.action', '1 action'),
					text(' for a torch or exposed fuel; 1 minute for other fires')
				]
			},
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'fire', 'survival', 'supplies'],
		img: icon('/icons/white/damage/fire.svg', 'A stylized flame icon representing a tinderbox.')
	},
	{
		name: 'Torch',
		slug: 'torch',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '1 cp',
		weight: '1 lb.',
		description: [
			text('A torch is a simple carried light source. Once lit, it burns for 1 hour, sheds bright light nearby and dim light farther out, and can deal minor '),
			link('internals.rules.damageTypes.fire', 'fire damage'),
			text(' when used to hit with a burning '),
			link('internals.rules.combat.meleeAttack', 'melee attack'),
			text('.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('1 cp')] },
			{ label: 'Weight', value: [text('1 lb.')] },
			{ label: 'Duration', value: [text('1 hour once lit')] },
			{ label: 'Light', value: [text('20-foot bright light, then 20-foot dim light')] },
			{ label: 'Damage', value: [text('1 '), link('internals.rules.damageTypes.fire', 'fire')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'light', 'fire', 'survival'],
		img: icon('/icons/white/damage/fire.svg', 'A stylized flame icon representing a torch.')
	},
	{
		name: 'Rations (1 day)',
		slug: 'rations',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '5 sp',
		weight: '2 lb.',
		description: [
			text('Rations are preserved travel food for one day. They are useful when characters cannot rely on foraging, inns, kitchens, or other normal food sources during exploration.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('5 sp')] },
			{ label: 'Weight', value: [text('2 lb.')] },
			{ label: 'Amount', value: [text('1 day of food')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'food', 'travel', 'supplies'],
		img: icon('/icons/white/entity/pack.svg', 'A stylized pack icon representing rations.')
	},
	{
		name: 'Waterskin',
		slug: 'waterskin',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '2 sp',
		weight: '5 lb. full',
		description: [
			text('A waterskin is a portable water container for travel and exploration. Its listed weight assumes it is full, and it holds enough liquid to matter when tracking supplies.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('2 sp')] },
			{ label: 'Weight', value: [text('5 lb. full')] },
			{ label: 'Capacity', value: [text('4 pints liquid')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'container', 'water', 'travel'],
		img: icon('/icons/white/entity/pack.svg', 'A stylized pack icon representing a waterskin.')
	},
	{
		name: 'Rope, hempen (50 feet)',
		slug: 'rope-hempen',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '1 gp',
		weight: '10 lb.',
		description: [
			text('Hempen rope is a 50-foot length of ordinary rope used for climbing, tying, hauling, securing gear, and improvised problem solving. It has '),
			link('internals.rules.abbreviations.hp', '2 HP'),
			text(' and can be burst with a '),
			link('internals.rules.abbreviations.dc', 'DC'),
			text(' 17 '),
			link('internals.rules.abilityScores.strength', 'Strength'),
			text(' check.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('1 gp')] },
			{ label: 'Weight', value: [text('10 lb.')] },
			{ label: 'Length', value: [text('50 feet')] },
			{ label: 'Durability', value: [link('internals.rules.abbreviations.hp', '2 HP')] },
			{
				label: 'Burst DC',
				value: [
					link('internals.rules.abbreviations.dc', 'DC'),
					text(' 17 '),
					link('internals.rules.abilityScores.strength', 'Strength'),
					text(' check')
				]
			},
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'rope', 'climbing', 'travel'],
		img: icon('/icons/white/entity/tool.svg', 'A stylized tool icon representing hempen rope.')
	},
	{
		name: 'Crowbar',
		slug: 'crowbar',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '2 gp',
		weight: '5 lb.',
		description: [
			text('A crowbar is a sturdy metal lever used to pry open stuck objects, force apart materials, and apply mechanical leverage. When leverage can reasonably help, using a crowbar grants advantage on relevant '),
			link('internals.rules.abilityScores.strength', 'Strength'),
			text(' checks.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('2 gp')] },
			{ label: 'Weight', value: [text('5 lb.')] },
			{
				label: 'Use',
				value: [
					text('Advantage on '),
					link('internals.rules.abilityScores.strength', 'Strength'),
					text(' checks when leverage applies')
				]
			},
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'tool', 'strength', 'exploration'],
		img: icon('/icons/white/entity/tool.svg', 'A stylized tool icon representing a crowbar.')
	},
	{
		name: 'Grappling Hook',
		slug: 'grappling-hook',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '2 gp',
		weight: '4 lb.',
		description: [
			text('A grappling hook is a hooked climbing aid normally used with rope. It helps secure a line to a ledge, wall, branch, railing, or other anchor point when climbing or hauling gear.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('2 gp')] },
			{ label: 'Weight', value: [text('4 lb.')] },
			{ label: 'Common Pairing', value: [link('internals.equipment.ropeHempen', 'Rope, hempen')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'climbing', 'rope', 'exploration'],
		img: icon('/icons/white/entity/tool.svg', 'A stylized tool icon representing a grappling hook.')
	},
	{
		name: "Healer's Kit",
		slug: 'healers-kit',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '5 gp',
		weight: '3 lb.',
		description: [
			text("A healer's kit contains bandages, salves, and splints for emergency care. As an "),
			link('internals.rules.actions.action', 'action'),
			text(', you can expend one use to stabilize a creature that has 0 '),
			link('internals.rules.abbreviations.hp', 'HP'),
			text(' without making a '),
			link('internals.rules.skills.medicine', 'Wisdom (Medicine)'),
			text(' check.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('5 gp')] },
			{ label: 'Weight', value: [text('3 lb.')] },
			{ label: 'Uses', value: [text('10')] },
			{
				label: 'Use Time',
				value: [link('internals.rules.actions.action', '1 action')]
			},
			{
				label: 'Effect',
				value: [
					text('Stabilize a creature at 0 '),
					link('internals.rules.abbreviations.hp', 'HP'),
					text(' without a '),
					link('internals.rules.skills.medicine', 'Wisdom (Medicine)'),
					text(' check')
				]
			},
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'healing', 'medicine', 'supplies'],
		img: icon('/icons/white/skill/medicine.svg', "A stylized medicine icon representing a healer's kit.")
	},
	{
		name: 'Oil (flask)',
		slug: 'oil-flask',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '1 sp',
		weight: '1 lb.',
		description: [
			text('A flask of oil can fuel lanterns or be used as a small hazardous surface. It can cover a creature or a 5-foot square, and when ignited it can add or deal 5 '),
			link('internals.rules.damageTypes.fire', 'fire damage'),
			text(' according to the oil use.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('1 sp')] },
			{ label: 'Weight', value: [text('1 lb.')] },
			{ label: 'Lantern Fuel', value: [text('6 hours per flask')] },
			{ label: 'Ground Area', value: [text('5-foot square')] },
			{ label: 'Damage', value: [text('5 '), link('internals.rules.damageTypes.fire', 'fire')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'oil', 'fire', 'lantern'],
		img: icon('/icons/white/damage/fire.svg', 'A stylized flame icon representing oil.')
	},
	{
		name: 'Lantern, bullseye',
		slug: 'lantern-bullseye',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '10 gp',
		weight: '2 lb.',
		description: [
			text('A bullseye lantern focuses light in a long cone instead of spreading it evenly. It burns for 6 hours on one flask of '),
			link('internals.equipment.oilFlask', 'oil'),
			text(', shedding bright light in a 60-foot cone and dim light for another 60 feet.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('10 gp')] },
			{ label: 'Weight', value: [text('2 lb.')] },
			{ label: 'Fuel', value: [link('internals.equipment.oilFlask', '1 flask of oil')] },
			{ label: 'Duration', value: [text('6 hours per flask')] },
			{ label: 'Light', value: [text('60-foot bright cone, then 60-foot dim cone')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'lantern', 'light', 'oil'],
		img: icon('/icons/white/attribute/light.svg', 'A stylized light icon representing a bullseye lantern.')
	},
	{
		name: 'Lantern, hooded',
		slug: 'lantern-hooded',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '5 gp',
		weight: '2 lb.',
		description: [
			text('A hooded lantern is a reusable light source that can be covered to reduce its glow. It burns for 6 hours on one flask of '),
			link('internals.equipment.oilFlask', 'oil'),
			text(', normally shedding bright and dim light, or only dim light when hooded.')
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('5 gp')] },
			{ label: 'Weight', value: [text('2 lb.')] },
			{ label: 'Fuel', value: [link('internals.equipment.oilFlask', '1 flask of oil')] },
			{ label: 'Duration', value: [text('6 hours per flask')] },
			{ label: 'Light', value: [text('30-foot bright light, then 30-foot dim light')] },
			{ label: 'Hooded Light', value: [text('5-foot dim light')] },
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'lantern', 'light', 'oil'],
		img: icon('/icons/white/attribute/light.svg', 'A stylized light icon representing a hooded lantern.')
	},
	{
		name: "Explorer's Pack",
		slug: 'explorers-pack',
		type: 'Adventuring Gear',
		category: 'Adventuring Gear',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '10 gp',
		weight: '59 lb.',
		description: [
			text("An explorer's pack is a bundled set of adventuring gear for overland travel, dungeon exploration, and basic survival supplies.")
		],
		statistics: [
			{ label: 'Type', value: [text('Adventuring Gear')] },
			{ label: 'Cost', value: [text('10 gp')] },
			{ label: 'Weight', value: [text('59 lb.')] },
			{
				label: 'Contents',
				value: [
					link('internals.equipment.backpack', 'Backpack'),
					text(', '),
					link('internals.equipment.bedroll', 'bedroll'),
					text(', '),
					link('internals.equipment.messKit', 'mess kit'),
					text(', '),
					link('internals.equipment.tinderbox', 'tinderbox'),
					text(', '),
					link('internals.equipment.torch', '10 torches'),
					text(', '),
					link('internals.equipment.rations', '10 days of rations'),
					text(', '),
					link('internals.equipment.waterskin', 'waterskin'),
					text(', and '),
					link('internals.equipment.ropeHempen', '50 feet of hempen rope'),
					text('.')
				]
			},
			{ label: 'Source', value: [text(playerHandbook)] }
		],
		tags: ['adventuring gear', 'pack', 'supplies'],
		img: icon('/icons/white/entity/pack.svg', "A stylized pack icon representing an explorer's pack.")
	},
	{
		name: 'Javelins',
		slug: 'javelins',
		type: 'Simple Melee Weapon',
		category: 'Weapon',
		source: playerHandbook,
		rarity: 'Mundane',
		attunement: false,
		cost: '5 sp',
		weight: '2 lb.',
		damage: [text('1d6 '), link('internals.rules.damageTypes.piercing', 'Piercing')],
		properties: [
			[link('internals.rules.equipment.simpleWeapons', 'Simple weapon')],
			[text('Thrown (range 30/120)')]
		],
		description: [
			text('Proficiency with javelins lets you add your proficiency bonus to attack rolls you make with them. Javelins are simple melee weapons commonly used at range through the thrown property.')
		],
		tags: ['weapon', 'simple', 'melee', 'thrown', 'damage', 'combat'],
		img: icon('/icons/white/weapon/spear.svg', 'A stylized spear icon representing javelins.')
	}
];

export const equipmentItems = [
	...standardEquipmentItems,
	...pugilistEquipmentItems.map(fromPugilistItem)
] as const satisfies readonly EquipmentItem[];

const equipmentTypeDetails: Readonly<Record<string, {
	readonly description: string;
	readonly tags: readonly string[];
}>> = {
	'Adventuring Gear': {
		description: 'Packs, torches, rope, rations, containers, and other non-weapon supplies used during travel, exploration, and dungeon play.',
		tags: ['adventuring gear', 'supplies', 'gear']
	},
	'Martial Melee Weapon': {
		description: 'Close-range weapons that usually require martial weapon proficiency and are used for weapon attacks in melee.',
		tags: ['weapon', 'martial', 'melee']
	},
	Potion: {
		description: 'Consumable items that usually take effect when drunk, applied, or otherwise used according to the item text.',
		tags: ['potion', 'consumable', 'magic item']
	},
	'Simple Melee Weapon': {
		description: 'Close-range weapons that use simple weapon proficiency and are commonly available to many classes.',
		tags: ['weapon', 'simple', 'melee']
	},
	Weapon: {
		description: 'Weapon references that cover attacks, damage, properties, and magic weapon effects where available.',
		tags: ['weapon', 'combat', 'damage']
	},
	'Wondrous item': {
		description: 'Magic items that do not fit another narrow equipment category and describe their own use rules in item text.',
		tags: ['wondrous item', 'magic item', 'equipment']
	}
} as const;

export const equipmentTypes = [...new Set(equipmentItems.map((item) => item.type))]
	.sort((left, right) => left.localeCompare(right))
	.map((label) => {
		const details = equipmentTypeDetails[label] ?? {
			description: `Equipment references with the ${label.toLowerCase()} type.`,
			tags: ['equipment']
		};

		return {
			label,
			slug: createEquipmentSlug(label),
			description: details.description,
			tags: details.tags
		};
	}) as readonly EquipmentType[];

export function getEquipmentItemHref(item: EquipmentItem): string {
	return createEquipmentHref(item);
}

export function getEquipmentItemTypeSlug(item: EquipmentItem): string {
	return createEquipmentSlug(item.type);
}

export function getEquipmentItemTypePathKey(item: EquipmentItem): string {
	return createPathKey(getEquipmentItemTypeSlug(item));
}

export function getEquipmentItemBySlug(slug: string): EquipmentItem | undefined {
	return equipmentItems.find((item) => item.slug === slug);
}

export function getEquipmentItemPathKey(item: EquipmentItem): string {
	return createPathKey(item.slug);
}

export function getEquipmentTypeHref(type: EquipmentType): string {
	return `/equipment/${type.slug}`;
}

export function getEquipmentTypeBySlug(slug: string): EquipmentType | undefined {
	return equipmentTypes.find((type) => type.slug === slug);
}

export function getEquipmentTypePathKey(type: EquipmentType): string {
	return createPathKey(type.slug);
}
