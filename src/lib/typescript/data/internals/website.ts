import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const current = core.internals.website;

export const website = {
	homepage: createInternalPage({
		href: '/',

		img: current.logos.wide,

		title: current.name.normal,
		seoTitle: 'D&D Portal Wiki | Classes, Spells, Rules & Homebrew',
		subTitle: 'Campaign rules and reference wiki',
		description: `Browse rules, classes, spells, campaign references,
			project information, and other D&D Portal Wiki content.`,
		descriptions: {
			long: [
				[
					{
						type: 'text',
						text: 'D&D Portal Wiki is a campaign rules and reference site for Dungeons & Dragons content used by the connected campaigns.'
					}
				],
				[
					{
						type: 'text',
						text: 'Use it to browse character classes, subclasses, rules references, spells, species, monsters, locations, and table-specific material from one central navigation structure.'
					}
				],
				[
					{
						type: 'text',
						text: 'Pages use shared data paths, reusable components, hover previews, and structured page metadata so rules and references stay connected instead of becoming isolated notes.'
					}
				]
			]
		}
	})
} as const;
