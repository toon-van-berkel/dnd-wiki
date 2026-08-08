import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const website = core.internals.website;
const current = core.internals.npcs;

export const npcs = {
	page: createInternalPage({
		href: current.baseUrl,

		img: current.logos.simple,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Nonplayer characters',
		description: `Browse NPC references, stat blocks, challenge ratings,
			actions, traits, and encounter notes.`,

		content: {
			sections: [
				{
					id: 'npc-overview',
					title: 'NPC Overview',
					blocks: [
						{
							type: 'paragraph',
							content: [
								{
									type: 'text',
									text: `NPCs collect nonplayer character references that can be
										used for encounters, recurring campaign characters,
										training scenes, rivals, allies, and other table-facing
										character roles.`
								}
							]
						}
					]
				}
			],
			tableOfContents: [
				{
					id: 'npc-overview',
					title: 'NPC Overview'
				},
				{
					id: 'npc-browser',
					title: 'NPC Browser'
				}
			]
		},

		tags: ['npcs', 'nonplayer characters', 'stat blocks', 'characters']
	})
} as const;
