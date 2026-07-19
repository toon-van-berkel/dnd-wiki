// site\src\lib\page\registry\Registry-Types.ts
import type { IconReference } from '$lib/components/Icon/Icon-Types';

export type PageId = string;

export type PageKind =
	| 'information'
	| 'settings'
	| 'legal'
	| 'collection'
	| 'rule'
	| 'class'
	| 'subclass'
	| 'species';

export type PageRegistryEntry = {
	id: PageId;
	title: string;
	href: string;

	description?: string;
	shortDescription?: string;
	longDescription?: string;

	eyebrow?: string;
	kind?: PageKind;
	parentId?: PageId;
	icon?: IconReference;
	tags?: string[];
	keywords?: string[];
	aliases?: string[];
	searchable?: boolean;
	navigation?: boolean;
	footer?: boolean;
	header?: boolean;

	metadata?: {
		title?: string;
		description?: string;
		image?: string;
		type?: string;
		noindex?: boolean;
	};
};