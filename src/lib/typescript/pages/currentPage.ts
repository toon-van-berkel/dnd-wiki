/*
	Location: src/lib/typescript/pages/currentPage.ts
	Use: Resolves internal URLs to centralized page data and breadcrumbs.
*/

import {
	data,
	getData,
	type LinkData,
	type LinkPath,
	type PageData,
	type PagePath
} from '$lib/typescript/data/_index_';

export type CurrentPageContext = {
	readonly pathname: string;
	readonly path: PagePath | null;
	readonly data: PageData | null;
};

export type CurrentPageResolution = {
	readonly path: PagePath | null;
	readonly data: PageData | null;
};

export type BreadcrumbItem = {
	readonly path: PagePath;
	readonly label: string;
};

const homeHref = '/';

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasStringProperty<
	T extends Readonly<Record<string, unknown>>,
	K extends string
>(value: T, key: K): value is T & Readonly<Record<K, string>> {
	return typeof value[key] === 'string';
}

function isLinkData(value: unknown): value is LinkData {
	if (!isRecord(value)) {
		return false;
	}

	if (
		!hasStringProperty(value, 'href') ||
		typeof value.external !== 'boolean' ||
		!hasStringProperty(value, 'title') ||
		!hasStringProperty(value, 'subTitle') ||
		!hasStringProperty(value, 'description') ||
		!isRecord(value.img)
	) {
		return false;
	}

	return (
		hasStringProperty(value.img, 'href') &&
		hasStringProperty(value.img, 'alt')
	);
}

function isPageData(value: unknown): value is PageData {
	return isLinkData(value) && value.external === false;
}

function getValue(path: string): unknown {
	return path
		.split('.')
		.reduce<unknown>((current, key) => {
			if (!isRecord(current)) {
				return undefined;
			}

			return current[key];
		}, data);
}

function toLinkPath(path: string, value: unknown): LinkPath {
	if (!isLinkData(value)) {
		throw new Error(`Path "${path}" does not resolve to link data.`);
	}

	return path as LinkPath;
}

function toPagePath(path: string, value: unknown): PagePath {
	if (!isPageData(value)) {
		throw new Error(`Path "${path}" does not resolve to page data.`);
	}

	return path as PagePath;
}

function shouldRecurseInto(key: string, value: unknown): boolean {
	return (
		isRecord(value) &&
		key !== 'img' &&
		key !== 'images' &&
		key !== 'tags' &&
		key !== 'descriptions' &&
		key !== 'navigation'
	);
}

function collectPageEntries(
	value: unknown,
	path = ''
): readonly [PagePath, PageData][] {
	if (isPageData(value) && path) {
		return [[toPagePath(path, value), value]];
	}

	if (!isRecord(value)) {
		return [];
	}

	return Object.entries(value).flatMap(([key, child]) => {
		if (!shouldRecurseInto(key, child)) {
			return [];
		}

		return collectPageEntries(child, path ? `${path}.${key}` : key);
	});
}

export function normalizeInternalHref(href: string, basePath = ''): string {
	const parsedHref = href.split(/[?#]/, 1)[0] || homeHref;
	const withoutBase =
		basePath &&
		parsedHref !== basePath &&
		parsedHref.startsWith(`${basePath}/`)
			? parsedHref.slice(basePath.length)
			: parsedHref;
	const normalized = withoutBase || homeHref;

	if (normalized.length > 1 && normalized.endsWith('/')) {
		return normalized.slice(0, -1);
	}

	return normalized;
}

const pageEntries = collectPageEntries(data);
const hrefToPagePath = new Map(
	pageEntries.map(([path, pageData]) => [
		normalizeInternalHref(pageData.href),
		path
	])
);
const pagePathSet = new Set<string>(pageEntries.map(([path]) => path));
const fileExtensionPattern = /\.[A-Za-z0-9]+$/;

export const homePagePath = hrefToPagePath.get(homeHref) ?? null;

export function getCanonicalInternalHref(href: string, basePath = ''): string {
	if (!href.startsWith('/') || href.startsWith('//')) {
		return href;
	}

	if (/[?#]/.test(href) || fileExtensionPattern.test(href)) {
		return `${basePath}${href}`;
	}

	const normalized = normalizeInternalHref(href, basePath);

	return normalized === homeHref
		? `${basePath}${homeHref}`
		: `${basePath}${normalized}/`;
}

export function isLinkPath(path: string): path is LinkPath {
	return isLinkData(getValue(path));
}

export function resolveLinkPath(path: string): LinkPath | null {
	return isLinkPath(path) ? toLinkPath(path, getValue(path)) : null;
}

export function resolveCurrentPage(
	pathname: string,
	basePath = ''
): CurrentPageResolution {
	const normalizedPathname = normalizeInternalHref(pathname, basePath);
	const path = hrefToPagePath.get(normalizedPathname) ?? null;

	if (!path) {
		return {
			path: null,
			data: null
		};
	}

	return {
		path,
		data: getData(path)
	};
}

function getNavigationParentPath(pageData: PageData): PagePath | null {
	const parent = pageData.navigation?.parent;

	if (!parent || !pagePathSet.has(parent)) {
		return null;
	}

	return toPagePath(parent, getValue(parent));
}

function getParentPathFromHref(pageData: PageData): PagePath | null {
	const hrefParts = normalizeInternalHref(pageData.href)
		.split('/')
		.filter(Boolean);

	while (hrefParts.length > 0) {
		hrefParts.pop();
		const parentHref = `/${hrefParts.join('/')}`;
		const normalizedParentHref =
			parentHref === '/' ? homeHref : normalizeInternalHref(parentHref);
		const parentPath = hrefToPagePath.get(normalizedParentHref);

		if (parentPath) {
			return parentPath;
		}
	}

	return null;
}

function getParentPath(path: PagePath): PagePath | null {
	const pageData = getData(path);

	return (
		getNavigationParentPath(pageData) ??
		getParentPathFromHref(pageData) ??
		(path !== homePagePath ? homePagePath : null)
	);
}

function getDisplayTitle(title: string): string {
	return title
		.replace(/^D&D Portal Wiki\s+-\s+/i, '')
		.replace(/^D&D Portal\s+-\s+/i, '');
}

export function getPageLabel(path: LinkPath | PagePath): string {
	const link = getData(path);

	if ('label' in link && typeof link.label === 'string') {
		return link.label;
	}

	if (
		'navigation' in link &&
		isRecord(link.navigation) &&
		hasStringProperty(link.navigation, 'label')
	) {
		return link.navigation.label;
	}

	return getDisplayTitle(link.title);
}

export function getBreadcrumbItems(path: PagePath | null): readonly BreadcrumbItem[] {
	if (!path) {
		return [];
	}

	const seen = new Set<PagePath>();
	const items: BreadcrumbItem[] = [];
	let currentPath: PagePath | null = path;

	while (currentPath && !seen.has(currentPath)) {
		seen.add(currentPath);
		items.push({
			path: currentPath,
			label: getPageLabel(currentPath)
		});

		currentPath = getParentPath(currentPath);
	}

	if (
		homePagePath &&
		!seen.has(homePagePath) &&
		path !== homePagePath
	) {
		items.push({
			path: homePagePath,
			label: getPageLabel(homePagePath)
		});
	}

	return items.reverse();
}

export function getBreadcrumbBackPath(
	items: readonly BreadcrumbItem[]
): PagePath | null {
	if (items.length >= 2) {
		return items[items.length - 2].path;
	}

	return homePagePath;
}
