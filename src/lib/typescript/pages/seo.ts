/*
	Location: src/lib/typescript/pages/seo.ts
	Use: Builds page-level SEO metadata from central page data and route overrides.
*/
import { base as site, internals as coreInternals } from '$lib/typescript/data/core/_index_';
import type { PageData, PagePath } from '$lib/typescript/data/_index_';
import { getData } from '$lib/typescript/data/_index_';
import { getBreadcrumbItems, getPageLabel } from './currentPage';

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
	readonly structuredDataJson: string | null;
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

function getTitlePathSegments(canonicalPath: string): readonly string[] {
	return canonicalPath
		.split('/')
		.filter(Boolean);
}

function getParentPageLabel(path: PagePath | null): string | null {
	const items = getBreadcrumbItems(path);

	if (items.length < 2) {
		return null;
	}

	return items[items.length - 2].label;
}

function formatContextTitle({
	title,
	pageData,
	path,
	canonicalPath
}: {
	readonly title: string;
	readonly pageData: PageData | null;
	readonly path: PagePath | null;
	readonly canonicalPath: string;
}): string {
	if (pageData?.seoTitle) {
		return normalizeText(pageData.seoTitle);
	}

	const cleanTitle = getDisplayTitle(normalizeText(title));
	const segments = getTitlePathSegments(canonicalPath);

	if (!cleanTitle || cleanTitle === siteName) {
		return siteName;
	}

	if (segments[0] === 'classes') {
		if (segments.length === 2) {
			return `${cleanTitle} Class - ${siteName}`;
		}

		if (segments.length >= 3) {
			const parentLabel = getParentPageLabel(path);
			const classLabel = parentLabel && parentLabel !== 'Classes'
				? parentLabel
				: pageData?.subTitle.replace(/\s+subclass$/i, '') ?? '';
			const context = classLabel ? `${classLabel} Subclass` : 'Subclass';

			return `${cleanTitle} - ${context} - ${siteName}`;
		}
	}

	if (segments[0] === 'rules') {
		if (segments[1] === 'spellcasting') {
			return `Spellcasting Rules: ${cleanTitle} - ${siteName}`;
		}

		if (pageData?.subTitle && !cleanTitle.toLowerCase().includes(pageData.subTitle.toLowerCase())) {
			return `${cleanTitle} ${pageData.subTitle} - ${siteName}`;
		}
	}

	if (segments[0] === 'spells') {
		if (segments.length === 1) {
			return formatTitle(cleanTitle);
		}

		if (
			/^cantrips$|^spellcasting$|^\d(?:st|nd|rd|th)-level$/i.test(segments[1])
		) {
			return `Spell List: ${cleanTitle} - ${siteName}`;
		}

		return `${cleanTitle} Spell - ${siteName}`;
	}

	return formatTitle(cleanTitle);
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

function getAbsoluteCanonicalUrl(href: string): string {
	return getAbsoluteSiteUrl(getCanonicalPath(href));
}

function createWebsiteStructuredData(description: string) {
	return {
		'@type': 'WebSite',
		'@id': getAbsoluteSiteUrl('/#website'),
		url: getAbsoluteSiteUrl('/'),
		name: site.siteBase,
		alternateName: siteName,
		description
	};
}

function createBreadcrumbStructuredData(path: PagePath | null) {
	const items = getBreadcrumbItems(path);

	if (items.length < 2) {
		return null;
	}

	return {
		'@type': 'BreadcrumbList',
		'@id': `${getAbsoluteCanonicalUrl(getData(items[items.length - 1].path).href)}#breadcrumb`,
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			item: getAbsoluteCanonicalUrl(getData(item.path).href)
		}))
	};
}

function createStructuredDataJson({
	path,
	description,
	canonicalPath
}: {
	readonly path: PagePath | null;
	readonly description: string;
	readonly canonicalPath: string;
}): string | null {
	const graph = [
		...(canonicalPath === '/' ? [createWebsiteStructuredData(description)] : []),
		...(canonicalPath !== '/'
			? [createBreadcrumbStructuredData(path)].filter(Boolean)
			: [])
	];

	if (graph.length === 0) {
		return null;
	}

	return JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': graph
	});
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
	const normalizedDescription = normalizeText(description);

	return {
		title: formatContextTitle({
			title,
			pageData,
			path,
			canonicalPath
		}),
		description: normalizedDescription,
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
		structuredDataJson: createStructuredDataJson({
			path,
			description: normalizedDescription,
			canonicalPath
		}),
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
