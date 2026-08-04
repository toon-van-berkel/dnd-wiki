/*
	Location: src/lib/typescript/pages/seo.ts
	Use: Builds page-level SEO metadata from central page data and route overrides.
*/
import { base as site, internals as coreInternals } from '$lib/typescript/data/core/_index_';
import type { PageData, PagePath } from '$lib/typescript/data/_index_';
import { getPageLabel } from './currentPage';

export type SeoMetadataInput = {
	readonly title?: string;
	readonly description?: string;
	readonly image?: {
		readonly href: string;
		readonly alt: string;
		readonly width?: number;
		readonly height?: number;
	};
	readonly type?: 'article' | 'website';
};

export type SeoMetadata = {
	readonly title: string;
	readonly description: string;
	readonly canonicalUrl: string;
	readonly imageUrl: string;
	readonly imageAlt: string;
	readonly imageWidth?: number;
	readonly imageHeight?: number;
	readonly iconUrl: string;
	readonly icon512Url: string;
	readonly appleTouchIconUrl: string;
	readonly type: 'article' | 'website';
	readonly twitterCard: 'summary' | 'summary_large_image';
};

type SeoImage = {
	readonly href: string;
	readonly alt: string;
	readonly width?: number;
	readonly height?: number;
};

const siteName = site.siteSocial;
const siteUrl = site.siteLink;
const defaultDescription = 'Browse D&D Portal Wiki rules, classes, subclasses, spells, campaign references, and project information.';
const defaultImage = coreInternals.website.logos.social;
const iconImage = coreInternals.website.logos.icon;
const icon512Image = coreInternals.website.logos.icon512;
const appleTouchIcon = coreInternals.website.logos.appleTouchIcon;

function normalizeText(value: string): string {
	return value.replace(/\s+/g, ' ').trim();
}

function getDisplayTitle(title: string): string {
	return title
		.replace(/^D&D Portal Wiki\s+-\s+/i, '')
		.replace(/^D&D Portal\s+-\s+/i, '');
}

function formatTitle(title: string): string {
	const cleanTitle = getDisplayTitle(normalizeText(title));

	if (!cleanTitle || cleanTitle === siteName) {
		return siteName;
	}

	return `${cleanTitle} - ${siteName}`;
}

function getCanonicalPath(pathname: string, basePath = ''): string {
	const pathWithoutBase =
		basePath && pathname !== basePath && pathname.startsWith(`${basePath}/`)
			? pathname.slice(basePath.length)
			: pathname;
	const cleanPath = pathWithoutBase || '/';

	if (cleanPath === '/') {
		return '/';
	}

	return cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
}

function getAbsoluteSiteUrl(href: string): string {
	return new URL(href, siteUrl).href;
}

function getPageImage(pageData: PageData | null): SeoImage {
	const image =
		pageData?.images?.header?.female ??
		pageData?.images?.header?.male ??
		pageData?.images?.card?.female ??
		pageData?.images?.card?.male;

	if (image?.sources.l) {
		return {
			href: image.sources.l,
			alt: image.alt
		};
	}

	if (pageData?.img.href && !pageData.img.href.endsWith('.svg')) {
		return pageData.img;
	}

	return defaultImage;
}

export function createSeoMetadata({
	path,
	pageData,
	routeSeo,
	pathname,
	basePath = ''
}: {
	readonly path: PagePath | null;
	readonly pageData: PageData | null;
	readonly routeSeo?: SeoMetadataInput;
	readonly pathname: string;
	readonly basePath?: string;
}): SeoMetadata {
	const image = routeSeo?.image ?? getPageImage(pageData);
	const title =
		routeSeo?.title ??
		(path && pageData ? getPageLabel(path) : pageData?.title ?? siteName);
	const description =
		routeSeo?.description ??
		pageData?.descriptions?.medium ??
		pageData?.descriptions?.short ??
		pageData?.description ??
		defaultDescription;
	const canonicalPath = getCanonicalPath(pathname, basePath);
	const imageUrl = getAbsoluteSiteUrl(image.href);

	return {
		title: formatTitle(title),
		description: normalizeText(description),
		canonicalUrl: getAbsoluteSiteUrl(canonicalPath),
		imageUrl,
		imageAlt: normalizeText(image.alt),
		imageWidth: image.width,
		imageHeight: image.height,
		iconUrl: getAbsoluteSiteUrl(iconImage.href),
		icon512Url: getAbsoluteSiteUrl(icon512Image.href),
		appleTouchIconUrl: getAbsoluteSiteUrl(appleTouchIcon.href),
		type: routeSeo?.type ?? (canonicalPath === '/' ? 'website' : 'article'),
		twitterCard: imageUrl.endsWith('.svg') ? 'summary' : 'summary_large_image'
	};
}

export function createSpellSeoMetadata(spell: {
	readonly name: string;
	readonly levelLabel: string;
	readonly school: string;
	readonly description: readonly string[];
}): SeoMetadataInput {
	const intro = `${spell.name} is a ${spell.levelLabel.toLowerCase()} ${spell.school} spell.`;
	const description = normalizeText(`${intro} ${spell.description[0] ?? ''}`);

	return {
		title: spell.name,
		description,
		image: defaultImage,
		type: 'article'
	};
}
