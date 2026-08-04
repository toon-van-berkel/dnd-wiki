<!--
	Location: src/routes/discord/+page.svelte
	Use: Data-driven Discord community landing page.
-->
<script lang="ts">
	import type {
		PageContentSection as PageContentSectionData,
		PageTableOfContentsSection
	} from '$lib/typescript/data/_index_';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';

	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	type DiscordPageContent = {
		readonly sections: readonly PageContentSectionData[];
		readonly tableOfContents: readonly PageTableOfContentsSection[];
	};

	function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
		return typeof value === 'object' && value !== null && !Array.isArray(value);
	}

	function getDiscordPageContent(value: unknown): DiscordPageContent | null {
		if (!isRecord(value) || !isRecord(value.content)) {
			return null;
		}

		return Array.isArray(value.content.sections) &&
			Array.isArray(value.content.tableOfContents)
			? {
					sections: value.content.sections as readonly PageContentSectionData[],
					tableOfContents: value.content.tableOfContents as readonly PageTableOfContentsSection[]
				}
			: null;
	}

	const currentPage = getCurrentPageContext();
	let content = $derived(getDiscordPageContent(currentPage.data));
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />

		{#if content}
			{#each content.sections as section}
				<PageContentSection {section} />
			{/each}
		{/if}
	</article>

	{#if content?.tableOfContents.length}
		<aside class="page-layout__toc">
			<TableOfContents sections={content.tableOfContents} />
		</aside>
	{/if}
</div>
