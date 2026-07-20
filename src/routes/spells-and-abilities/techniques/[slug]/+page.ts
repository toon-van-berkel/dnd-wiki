import { error } from '@sveltejs/kit';
import { getTechniqueBySlug, techniques } from '$lib/data/techniques';

import type { PageLoad } from './$types';

export const entries = () => techniques.map((technique) => ({ slug: technique.slug }));

export const load: PageLoad = ({ params }) => {
	const technique = getTechniqueBySlug(params.slug);

	if (!technique) {
		throw error(404, 'Technique not found');
	}

	return { technique };
};
