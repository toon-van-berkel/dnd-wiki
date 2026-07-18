// site\src\lib\pages\StepList\StepList-Types.ts
import type { IconReference } from '$lib/components/Icon/Icon-Types';

export type StepListItem = {
	title: string;
	description?: string;
	icon?: IconReference;
	href?: string;
};

export type StepListProps = {
	items: readonly StepListItem[];
	startAt?: number;
	class?: string;
};