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
	readonly faviconHref: string;
	readonly iconSvgHref: string;
	readonly icon96Href: string;
	readonly icon192Href: string;
	readonly icon512Href: string;
	readonly appleTouchIconHref: string;
	readonly manifestHref: string;
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
const favicon = coreInternals.website.logos.favicon;
const iconImage = coreInternals.website.logos.icon;
const icon96Image = coreInternals.website.logos.icon96;
const icon192Image = coreInternals.website.logos.icon192;
const icon512Image = coreInternals.website.logos.icon512;
const appleTouchIcon = coreInternals.website.logos.appleTouchIcon;
const manifest = coreInternals.website.logos.manifest;

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
	const image = routeSeo?.image ?? defaultImage;
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
		faviconHref: favicon.href,
		iconSvgHref: iconImage.href,
		icon96Href: icon96Image.href,
		icon192Href: icon192Image.href,
		icon512Href: icon512Image.href,
		appleTouchIconHref: appleTouchIcon.href,
		manifestHref: manifest.href,
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
