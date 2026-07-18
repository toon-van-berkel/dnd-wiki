import type { PageRegistryEntry } from '$lib/page/registry';

export type FooterPageLink = Pick<PageRegistryEntry, 'id' | 'title' | 'href'>;

export type FooterLinkGroup = {
	id: string;
	title: string;
	links: FooterPageLink[];
};

export type FooterExternalLink = {
	id: string;
	label: string;
	href: string;
	external?: boolean;
};

export type FooterModel = {
	internalGroups: FooterLinkGroup[];
	communityLinks: FooterExternalLink[];
	externalResourceLinks: FooterExternalLink[];
	actionLinks: FooterExternalLink[];
	attributionLinks: FooterPageLink[];
};
