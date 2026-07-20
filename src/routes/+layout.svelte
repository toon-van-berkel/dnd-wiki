<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	import Metadata from '$lib/page/Metadata/Metadata.svelte';
	import PageHeader from '$lib/page/PageHeader/PageHeader.svelte';
	import SiteShell from '$lib/layout/SiteShell/SiteShell.svelte';
	import { getPageEntryByHref } from '$lib/page/registry';

	import '$lib/styles/styles.scss';

	type Props = {
		children: Snippet;
		data: LayoutData;
	};

	let { children, data }: Props = $props();

	const pageEntry = $derived(getPageEntryByHref(data.pathname));
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
