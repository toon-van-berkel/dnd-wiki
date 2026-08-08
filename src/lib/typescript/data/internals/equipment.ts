import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const website = core.internals.website;
const current = core.internals.equipment;

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
	})
} as const;
