import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const website = core.internals.website;
const current = core.internals.utility;

export const utility = {
	faq: createInternalPage({
		href: current.faq.href,

		title: `${website.name.short} - ${current.faq.name.normal}`,
		subTitle: 'Frequently asked questions',
		description: `Find answers to frequently asked questions about the
			D&D Portal Wiki, its content, features, and development.`
	}),

	search: createInternalPage({
		href: current.search.href,

		img: current.search.logos.simple,

		title: `${website.name.short} - ${current.search.name.normal}`,
		subTitle: 'Search the wiki',
		description: `Search the D&D Portal Wiki for rules, character
			options, creatures, locations, and other available content.`
	})
} as const;