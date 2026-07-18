<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	import Metadata from '$lib/page/Metadata/Metadata.svelte';
	import PageHeader from '$lib/page/PageHeader/PageHeader.svelte';
	import SiteShell from '$lib/layout/SiteShell/SiteShell.svelte';
	import { getPageEntryByHref } from '$lib/page/registry';

	import '$lib/styles/styles.scss';

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

	const pageEntry = $derived(getPageEntryByHref(normalizeRoutePathname(page.url.pathname)));
</script>

<svelte:head>
	<meta name="theme-color" content="#0b0d0c" />
</svelte:head>

<Metadata {pageEntry} />

<SiteShell>
	{#if pageEntry && pageEntry.header !== false}
		<PageHeader {pageEntry} />
	{/if}

	{@render children()}
</SiteShell>
