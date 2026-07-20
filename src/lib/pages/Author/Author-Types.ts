import type { PersonId } from '$lib/config/people';

export type Props = {
	personId: PersonId;
	role?: string;
	subject?: string;
	description?: string;
	showAliases?: boolean;
	class?: string;
};
