import { siteConfig } from '$lib/config/site';
import { getFooterPages, getPageEntry } from '$lib/page/registry';
import type { PageId } from '$lib/page/registry';

import type { FooterExternalLink, FooterLinkGroup, FooterModel, FooterPageLink } from './Footer-Types';

const footerGroupTitles: Record<string, string> = {
	browse: 'Browse',
	project: 'Project',
	legal: 'Legal'
};

const attributionPageIds = ['credits', 'sources', 'legal'] satisfies PageId[];

function toPageLink(entry: FooterPageLink): FooterPageLink {
	return {
		id: entry.id,
		title: entry.title,
		href: entry.href
	};
}

function requirePage(id: PageId): FooterPageLink {
	const page = getPageEntry(id);

	if (!page) {
		throw new Error(`Unknown footer attribution page id: ${id}`);
	}

	return toPageLink(page);
}

function mailtoLink(email: string): string {
	return `mailto:${email}`;
}

function getInternalGroups(): FooterLinkGroup[] {
	return Object.entries(getFooterPages()).map(([id, entries]) => ({
		id,
		title: footerGroupTitles[id] ?? id,
		links: entries.map(toPageLink)
	}));
}

function getCommunityLinks(): FooterExternalLink[] {
	const links: FooterExternalLink[] = [
		{
			id: 'repository',
			label: 'GitHub Repository',
			href: siteConfig.repositoryUrl,
			external: true
		},
		{
			id: 'report',
			label: 'Report a Problem',
			href: siteConfig.newIssueUrl,
			external: true
		},
		{
			id: 'suggest',
			label: 'Suggest Content',
			href: siteConfig.suggestionUrl,
			external: true
		}
	];

	if (siteConfig.contactEmail) {
		links.push({
			id: 'email',
			label: 'Contact by Email',
			href: mailtoLink(siteConfig.contactEmail)
		});
	}

	return links;
}

function getActionLinks(): FooterExternalLink[] {
	const links: FooterExternalLink[] = [];

	if (siteConfig.portfolioUrl) {
		links.push({
			id: 'portfolio',
			label: 'Portfolio',
			href: siteConfig.portfolioUrl,
			external: true
		});
	}

	links.push({
		id: 'github',
		label: 'GitHub',
		href: siteConfig.repositoryUrl,
		external: true
	});

	if (siteConfig.linkedInUrl) {
		links.push({
			id: 'linkedin',
			label: 'LinkedIn',
			href: siteConfig.linkedInUrl,
			external: true
		});
	}

	if (siteConfig.contactEmail) {
		links.push({
			id: 'email',
			label: 'Email',
			href: mailtoLink(siteConfig.contactEmail)
		});
	}

	return links;
}

export function getFooterModel(): FooterModel {
	return {
		internalGroups: getInternalGroups(),
		communityLinks: getCommunityLinks(),
		externalResourceLinks: siteConfig.externalResources.map((resource) => ({
			id: resource.id,
			label: resource.label,
			href: resource.url,
			external: true
		})),
		actionLinks: getActionLinks(),
		attributionLinks: attributionPageIds.map(requirePage)
	};
}
