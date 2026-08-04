/*  
	Location: src/lib/typescript/components/footer/footer.ts
	use:
*/

import type { FooterDataType } from './footer-types';
import { date } from '$lib/typescript/helpers/_index_';

export const footerData: FooterDataType = {
	informationSection: {
		img: {
			href: '/icons/color/internal/icon-color-dndportalwiki-wide.png',
			alt: `The D&D Portal Wiki logo representing an internal page within the
				website.`
		},

		title: 'D&D Portal Wiki',
		subTitle: 'Campaign rules and reference wiki',
		description: `An unofficial, fan-created reference website for campaign rules,
			character options, homebrew content, and tabletop resources.`,
		subDescription: 'Designed, developed, and maintained by Toon van Berkel.',

		buttons: [
			'externals.github.dndPortalWiki',
			'externals.mail.main',
			'internals.utility.faq'
		]
	},

	browseSection: {
		title: 'Browse',

		links: [
			'internals.utility.search',
			'internals.classes.page',
			'internals.species.page',
			'internals.rules.page',
			'internals.locations.page',
			'internals.monsters.page'
		]
	},

	projectSection: {
		title: 'Project',

		links: [
			'internals.project.about',
			'internals.project.credits',
			'internals.project.sources',
			'internals.project.aiTransparency',
			'internals.project.accessibility',
			'internals.project.changelog'
		]
	},

	legalSection: {
		title: 'Legal',

		links: [
			'internals.legal.notice',
			'internals.legal.privacy',
			'internals.legal.cookies',
			'internals.legal.contributionTerms',
			'internals.legal.contentRemoval'
		]
	},

	communitySection: {
		title: 'Community',

		links: [
			'internals.community.discord.page',
			'internals.community.issues',
			'internals.community.roadmap',
			'externals.github.dndPortalWiki',
			'externals.github.reportProblem',
			'externals.github.suggestContent'
		]
	},

	socialSection: {
		title: 'Community Discord',

		links: [
			'externals.discord.homepage',
			'externals.discord.rules',
			'externals.discord.announcements',
			'externals.discord.wikiUpdates',
			'externals.discord.general'
		]
	},

	youtubeSection: {
		title: 'Community Youtube',

		links: [
			'externals.youtube.homepage',
			'externals.youtube.featured',
			'externals.youtube.posts'
		]
	},

	externalSection: {
		title: 'External Resources',

		links: [
			'externals.dndbeyond.homepage',
			'externals.wizards.homepage',
			'externals.wizards.fanContentPolicy',
			'externals.dndbeyond.srd',
			'externals.svgpro.homepage',
			'externals.twdnd.homepage'
		]
	},

	bottomSection: {
		copyright: `©${date.year} Toon van Berkel. Original website content is
			protected unless otherwise stated.`,
		subCopyright: `Dungeons & Dragons, D&D, Wizards of the Coast, the dragon
			ampersand, and related properties belong to Wizards of the Coast LLC.`,
		warning: `<b>D&D Portal is unofficial fan content.</b> It is not approved,
			sponsored, or endorsed by Wizards of the Coast. Portions of referenced
			material may be Wizards property, and this site remains responsible for
			complying with applicable policies.`,

		reference: 'externals.wizards.fanContentPolicy',

		usage: {
			before: 'See',

			links: [
				'internals.project.credits',
				'internals.project.sources',
				'internals.legal.notice'
			],

			after: 'for attribution and usage information.'
		}
	}
};
