<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import PageDocumentMetadata from '$lib/components/PageDocumentMetadata.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { getWikiPageByHref } from '$lib/wiki/registry';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	let pageMeta = $derived(
		getWikiPageByHref(page.url.pathname)
	);
</script>

<PageDocumentMetadata {pageMeta} />

{#if pageMeta}
	<PageHeader
		title={pageMeta.title}
		description={pageMeta.description}
		eyebrow={pageMeta.eyebrow}
		tags={pageMeta.tags}
	/>

	<AvailabilityBadges href={pageMeta.href} />
{/if}

{@render children()}
