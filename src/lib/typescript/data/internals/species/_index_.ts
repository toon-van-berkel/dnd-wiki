import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.species;

export const species = {
	page: createInternalPage({
		href: current.baseUrl,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Playable species',
		description: `Browse playable species, their physical traits,
			cultural information, features, and character options.`
	})
} as const;