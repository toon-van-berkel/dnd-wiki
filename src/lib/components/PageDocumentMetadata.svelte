<script lang="ts">
	import { siteConfig } from '$lib/config/site';
	import type { WikiPageEntry } from '$lib/wiki/registry';

	type Props = {
		pageMeta?: WikiPageEntry;
	};

	let { pageMeta }: Props = $props();

	let documentTitle = $derived(`${pageMeta?.title ?? ''} | ${siteConfig.name}`);
</script>

<svelte:head>
	{#if pageMeta}
		<title>{documentTitle}</title>

		{#if pageMeta.description}
			<meta name="description" content={pageMeta.description} />
		{/if}
	{/if}
</svelte:head>
