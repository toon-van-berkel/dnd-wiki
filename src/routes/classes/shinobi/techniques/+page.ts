import { redirect } from '@sveltejs/kit';
import { resolveAppPath } from '$lib/utils/paths';

export const load = () => {
	throw redirect(308, resolveAppPath('/spells-and-abilities/techniques'));
};
