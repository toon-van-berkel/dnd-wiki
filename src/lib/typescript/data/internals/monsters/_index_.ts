import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.monsters;

export const monsters = {
	page: createInternalPage({
		href: current.baseUrl,

		img: current.logos.simple,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Creatures and enemies',
		description: `Browse monsters, creatures, enemies, statistics,
			abilities, lore, and encounter information.`
	})
} as const;