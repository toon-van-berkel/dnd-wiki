import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const current = core.internals.website;

export const website = {
	homepage: createInternalPage({
		href: '/',

		img: current.logos.wide,

		title: current.name.normal,
		subTitle: 'Campaign rules and reference wiki',
		description: `Open the D&D Portal Wiki homepage.`
	})
} as const;
