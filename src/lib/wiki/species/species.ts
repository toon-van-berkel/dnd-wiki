import { elfs } from './species-elfs.js';
import { humans } from './species-humans.js';

import type { WikiDomainPage } from '../domain.js';

export const species = {
    title: 'Species',
	href: '/species',
	description: 'Playable peoples and campaign availability.',
	kind: 'collection',
	icon: 'species',
	searchable: false,
	children: [
        humans,
		elfs
	]
} satisfies WikiDomainPage;
