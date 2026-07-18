<!-- site\src\routes\classes\+layout.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	import PageDocumentMetadata from '$lib/components/PageDocumentMetadata.svelte';
	import { getWikiPageByHref } from '$lib/wiki/registry';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	let pageMeta = $derived(
		getWikiPageByHref(page.url.pathname)
	);
</script>

{@render children()}
