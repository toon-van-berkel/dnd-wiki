<!--
	Location: src/routes/classes/[class]/[subclass]/+page.svelte
	Use: Generic subclass page for central subclass data.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { getSubclassBySlug } from '$lib/typescript/data/internals/classes/_index_';

	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	let subclassData = $derived(
		getSubclassBySlug(
			page.params.class ?? '',
			page.params.subclass ?? ''
		)
	);
	let content = $derived(subclassData?.content);
</script>

{#if content}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			{#each content.featureSections as section}
				<PageContentSection {section} />
			{/each}
		</article>

		<aside class="page-layout__toc">
			<TableOfContents sections={content.tableOfContents} />
		</aside>
	</div>
{:else}
	<NotFound />
{/if}
