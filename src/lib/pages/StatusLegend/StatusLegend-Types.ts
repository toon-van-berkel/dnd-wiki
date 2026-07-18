// site\src\lib\pages\StatusLegend\StatusLegend-Types.ts
import type { IconReference } from '$lib/helpers/Icon-Types';

export type StatusLegendItem = {
	title: string;
	description?: string;
	icon: IconReference;
	color: string;
	background?: string;
};

export type StatusLegendProps = {
	items: readonly StatusLegendItem[];
	class?: string;
};