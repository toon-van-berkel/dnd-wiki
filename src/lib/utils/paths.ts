import { base, resolve } from '$app/paths';

import {
	isAlreadyBasePrefixed,
	isExternalUrl,
	normalizePublicBasePath,
	normalizeInput,
	resolveAssetPathWithBase,
	resolveSrcsetWithBase,
	shouldPreservePath,
	splitSuffix
} from './paths-core';

const resolvePath = resolve as (path: string) => string;
const appBasePath = normalizePublicBasePath(base);
const assetBasePath = normalizePublicBasePath(__STATIC_ASSET_BASE_PATH__);

export { isExternalUrl };

function normalizeRoutePathname(pathname: string) {
	if (pathname === '/') {
		return pathname;
	}

	if (/\.[a-z0-9]+$/i.test(pathname)) {
		return pathname;
	}

	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function resolveAppPath(path?: string | null) {
	const value = normalizeInput(path);

	if (shouldPreservePath(value)) {
		return value;
	}

	const { pathname, suffix } = splitSuffix(value);
	const rawPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
	const normalizedPathname = normalizeRoutePathname(rawPathname);

	if (isAlreadyBasePrefixed(normalizedPathname, appBasePath)) {
		return `${normalizedPathname}${suffix}`;
	}

	return `${resolvePath(normalizedPathname)}${suffix}`;
}

export function resolveAssetPath(path?: string | null) {
	const value = normalizeInput(path);

	if (shouldPreservePath(value)) {
		return value;
	}

	return resolveAssetPathWithBase(value, assetBasePath);
}

export function resolveSrcset(srcset?: string | null) {
	return resolveSrcsetWithBase(srcset, assetBasePath);
}
