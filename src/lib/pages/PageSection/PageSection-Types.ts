// site\src\lib\pages\PageSection\PageSection-Types.ts
import type { Snippet } from 'svelte';

export type PageSectionVariant = 'default' | 'featured';

export type Props = {
	children: Snippet;
	title?: string;
	description?: string;
	eyebrow?: string;
	id?: string;
	variant?: PageSectionVariant;
	collapsible?: boolean;
	defaultExpanded?: boolean;
};