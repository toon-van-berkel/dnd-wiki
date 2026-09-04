import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';
import {
	equipmentItems,
	equipmentTypes,
	getEquipmentItemHref,
	getEquipmentItemPathKey,
	getEquipmentItemTypePathKey,
	getEquipmentTypeHref,
	getEquipmentTypePathKey,
	type EquipmentItem
} from './equipment-items';
import type { InlineContent, PageContentSection } from '$lib/typescript/pages/content-types';

const website = core.internals.website;
const current = core.internals.equipment;

const text = (value: string): InlineContent[number] => ({
	type: 'text',
	text: value
});

function createItemSections(item: EquipmentItem): readonly PageContentSection[] {
	const sections: PageContentSection[] = [
		{
			id: 'equipment-overview',
			title: 'Equipment Overview',
			blocks: [
				{
					type: 'paragraph',
					content: item.description
				}
			]
		}
	];

	const rows = [
		{ label: 'Type', value: [text(item.type)] },
		...(item.cost ? [{ label: 'Cost', value: [text(item.cost)] }] : []),
		...(item.damage ? [{ label: 'Damage', value: item.damage }] : []),
		...(item.weight ? [{ label: 'Weight', value: [text(item.weight)] }] : []),
		...(item.properties?.length
			? [{ label: 'Properties', value: item.properties.flatMap((property, index) => [
					...(index > 0 ? [text(', ')] : []),
					...property
				]) }]
			: []),
		{ label: 'Rarity', value: [text(item.rarity)] },
		{
			label: 'Attunement',
			value: [text(item.attunement ? 'Requires attunement' : 'No attunement')]
		},
		{ label: 'Source', value: [text(item.source)] }
	];

	sections.push({
		id: 'equipment-statistics',
		title: 'Equipment Statistics',
		blocks: [
			{
				type: 'table',
				caption: `${item.name} statistics`,
				columns: {
					label: 'Property',
					value: 'Value'
				},
				rows
			}
		]
	});

	if (item.mastery) {
		sections.push({
			id: 'weapon-mastery',
			title: 'Weapon Mastery',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [text(`${item.mastery.name}. `)]
						},
						...item.mastery.description
					]
				}
			]
		});
	}

	return sections;
}

function createEquipmentItemPage(item: EquipmentItem) {
	const verb = item.name.endsWith('s') && item.name !== "Explorer's Pack" ? 'are' : 'is';

	return createInternalPage({
		href: getEquipmentItemHref(item),
		img: item.img,
		label: item.name,
		title: `${website.name.short} - ${item.name}`,
		subTitle: 'Equipment reference',
		description: `${item.name} ${verb} an equipment reference
			used by character options, equipment choices, and rules.`,
		content: {
			sections: createItemSections(item),
			tableOfContents: [
				{
					id: 'equipment-overview',
					title: 'Equipment Overview'
				},
				{
					id: 'equipment-statistics',
					title: 'Equipment Statistics'
				},
				...(item.mastery
					? [
							{
								id: 'weapon-mastery',
								title: 'Weapon Mastery'
							}
						]
					: [])
			]
		},
		navigation: {
			parent: `internals.equipment.${getEquipmentItemTypePathKey(item)}`,
			hidden: true
		},
		tags: item.tags
	});
}

function createEquipmentTypePage(type: (typeof equipmentTypes)[number]) {
	const itemCount = equipmentItems.filter((item) => item.type === type.label).length;
	const typeReferenceLabel = /equipment|gear/i.test(type.label)
		? `${type.label.toLowerCase()} references`
		: `${type.label.toLowerCase()} equipment references`;

	return createInternalPage({
		href: getEquipmentTypeHref(type),
		img: current.logos.simple,
		label: type.label,
		title: `${website.name.short} - ${type.label}`,
		subTitle: 'Equipment type list',
		description: `Browse ${itemCount} ${typeReferenceLabel} with item text,
			filters, and detail pages.`,
		content: {
			sections: [
				{
					id: 'equipment-type-overview',
					title: `${type.label} Overview`,
					blocks: [
						{
							type: 'paragraph',
							content: [text(type.description)]
						}
					]
				}
			],
			tableOfContents: [
				{
					id: 'equipment-type-overview',
					title: `${type.label} Overview`
				},
				{
					id: 'equipment-browser',
					title: 'Equipment Browser'
				}
			]
		},
		navigation: {
			parent: 'internals.equipment.page'
		},
		tags: type.tags
	});
}

const typePages = Object.fromEntries(
	equipmentTypes.map((type) => [
		getEquipmentTypePathKey(type),
		createEquipmentTypePage(type)
	])
);

const itemPages = Object.fromEntries(
	equipmentItems.map((item) => [
		getEquipmentItemPathKey(item),
		createEquipmentItemPage(item)
	])
);

export const equipment = {
	page: createInternalPage({
		href: current.baseUrl,

		img: current.logos.simple,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Equipment and items',
		description: `Browse weapons, gear, magic items, rarity, attunement,
			item traits, and equipment descriptions.`,

		content: {
			sections: [
				{
					id: 'equipment-overview',
					title: 'Equipment Overview',
					blocks: [
						{
							type: 'paragraph',
							content: [
								{
									type: 'text',
									text: `Equipment collects weapons, adventuring gear, magic items,
										and other item references that can appear in character
										options, class content, rewards, and campaign play.`
								}
							]
						},
						{
							type: 'card-grid',
							groups: [
								{
									title: 'Equipment Types',
									cards: equipmentTypes.map((type) => ({
										page: `internals.equipment.${getEquipmentTypePathKey(type)}`,
										source: 'D&D Portal equipment data'
									}))
								}
							]
						}
					]
				}
			],
			tableOfContents: [
				{
					id: 'equipment-overview',
					title: 'Equipment Overview'
				},
				{
					id: 'equipment-browser',
					title: 'Equipment Browser'
				}
			]
		},

		tags: ['equipment', 'items', 'weapons', 'magic items', 'gear']
	}),

	...typePages,
	...itemPages
} as const;
