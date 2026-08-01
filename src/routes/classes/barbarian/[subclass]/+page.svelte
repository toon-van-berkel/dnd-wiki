<!--
	Location: src/routes/classes/barbarian/[subclass]/+page.svelte
	Use: Data-driven Barbarian subclass pages.
-->
<script lang="ts">
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import type {
		PageContentSection as PageContentSectionData,
		PageTableOfContentsSection
	} from '$lib/typescript/data/_index_';

	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	type SubclassPageContent = {
		readonly source: string;
		readonly featureSections: readonly PageContentSectionData[];
		readonly tableOfContents: readonly PageTableOfContentsSection[];
	};

	function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
		return typeof value === 'object' && value !== null && !Array.isArray(value);
	}

	function isSubclassPageData(
		value: unknown
	): value is { readonly content: SubclassPageContent } {
		return isRecord(value) && isRecord(value.content);
	}

	const currentPage = getCurrentPageContext();
	let content = $derived(
		isSubclassPageData(currentPage.data) ? currentPage.data.content : null
	);
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
{/if}
