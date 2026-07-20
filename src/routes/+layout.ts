// site\src\routes\+layout.ts
import { base } from '$app/paths';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

function normalizeRoutePathname(pathname: string) {
	if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
		return pathname.slice(base.length) || '/';
	}

	return pathname;
}

export const load: LayoutLoad = ({ url }) => ({
	pathname: normalizeRoutePathname(url.pathname)
});
