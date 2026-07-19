// site\src\lib\pages\IconCallout\IconCallout-Types.ts
import type { Snippet } from 'svelte';

import type { IconReference } from '$lib/components/Icon/Icon-Types';

export type IconCalloutProps = {
	title: string;
	icon: IconReference;
	description?: string;
	color?: string;
	background?: string;
	children?: Snippet;
	class?: string;
};