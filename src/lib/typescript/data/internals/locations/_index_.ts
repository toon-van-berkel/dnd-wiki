import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.locations;

export const locations = {
	page: createInternalPage({
		href: current.baseUrl,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'World locations',
		description: `Explore regions, settlements, landmarks, planes,
			and other important locations within campaign settings.`
	})
} as const;