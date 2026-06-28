import { asset, resolve } from '$app/paths';
import type { Asset } from '$app/types';

const resolvePath = resolve as unknown as (path: string) => string;

export function resolveAppPath(path: string) {
	return resolvePath(path);
}

export function resolveAssetPath(path: string) {
	return asset(path as Asset);
}
