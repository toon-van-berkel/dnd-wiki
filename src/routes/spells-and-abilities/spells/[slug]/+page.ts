import { error } from '@sveltejs/kit';
import { getSpellBySlug, spells } from '$lib/data/spells';

import type { PageLoad } from './$types';

export const prerender = true;

export const entries = () => spells.map((spell) => ({ slug: spell.slug }));

export const load: PageLoad = ({ params }) => {
	const spell = getSpellBySlug(params.slug);

	if (!spell) {
		throw error(404, 'Spell not found');
	}

	return { spell };
};
