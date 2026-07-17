<!-- site\src\routes\+layout.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import '$lib/styles/global.scss';
	import '$lib/styles/reset.scss';
	import '$lib/styles/wiki-layout.scss';
	import WikiLayout from '$lib/components/layout/WikiLayout.svelte';
	import { getWikiPageByHref } from '$lib/wiki/registry';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	function normalizeRoutePathname(pathname: string) {
		if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
			return pathname.slice(base.length) || '/';
		}

		return pathname;
	}

	function getRoutePageMeta(pathname: string) {
		const routePathname = normalizeRoutePathname(pathname);
		const pageMeta = getWikiPageByHref(routePathname);

		if (pageMeta) return pageMeta;

		return routePathname.endsWith('/') ? getWikiPageByHref('/') : undefined;
	}

	let routePageMeta = $derived(getRoutePageMeta(page.url.pathname));
	let childLayoutOwnsHeader = $derived(
		routePageMeta ? /^\/(?:classes|species)(?:\/|$)/.test(routePageMeta.href) : false
	);
	let pageMeta = $derived(
		childLayoutOwnsHeader ? undefined : routePageMeta
	);
</script>

<svelte:head>
	<meta name="theme-color" content="#0b0d0c" />
</svelte:head>

<WikiLayout>
	{@render children()}
</WikiLayout>
