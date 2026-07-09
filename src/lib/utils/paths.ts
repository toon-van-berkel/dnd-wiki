import { asset, resolve } from '$app/paths';
import type { Asset } from '$app/types';

const resolvePath = resolve as unknown as (path: string) => string;

export function resolveAppPath(path?: string | null) {
	const value = path?.trim();

	if (!value) return undefined;

	if (
		value.startsWith('http://') ||
		value.startsWith('https://') ||
		value.startsWith('mailto:') ||
		value.startsWith('tel:')
	) {
		return value;
	}

	return resolvePath(value.startsWith('/') ? value : `/${value}`);
}

export function resolveAssetPath(path?: string | null) {
	const value = path?.trim();

	if (!value) return undefined;

	if (
		value.startsWith('http://') ||
		value.startsWith('https://') ||
		value.startsWith('data:') ||
		value.startsWith('blob:')
	) {
		return value;
	}

	return asset((value.startsWith('/') ? value : `/${value}`) as Asset);
}