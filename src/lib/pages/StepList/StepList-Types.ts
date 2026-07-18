// site\src\lib\pages\StepList\StepList-Types.ts
import type { IconReference } from '$lib/helpers/Icon-Types';

export type StepListItem = {
	title: string;
	description?: string;
	icon?: IconReference;
};

export type StepListProps = {
	items: readonly StepListItem[];
	startAt?: number;
	class?: string;
};