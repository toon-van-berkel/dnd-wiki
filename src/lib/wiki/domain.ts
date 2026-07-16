import type { WikiIconId } from './icon-ids.js';
import type { WikiPageKind } from './registry.js';

export type WikiDomainPage = {
	title: string;
	href: string;
	description?: string;
	eyebrow?: string;
	kind: WikiPageKind;
	searchable?: boolean;
	navigation?: boolean;
	tags?: readonly string[];
	keywords?: readonly string[];
	aliases?: readonly string[];
	icon?: WikiIconId;
	children?: readonly WikiDomainPage[];
};
