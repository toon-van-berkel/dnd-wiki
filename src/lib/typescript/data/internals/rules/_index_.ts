import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.rules;

export const rules = {
	page: createInternalPage({
		href: current.baseUrl,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Gameplay rules',
		description: `Browse general rules, combat mechanics, character
			rules, campaign rulings, and other gameplay information.`
	})
} as const;