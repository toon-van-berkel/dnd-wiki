<!--
	Location: src/routes/equipment/[item]/+page.svelte
	Use: Equipment detail pages.
-->
<script lang="ts">
	import { page } from '$app/state';
	import {
		equipmentItems,
		getEquipmentTypeBySlug
	} from '$lib/typescript/data/internals/equipment-items';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import type {
		PageContentSection as PageContentSectionData,
		PageTableOfContentsSection
	} from '$lib/typescript/data/_index_';

	import EquipmentBrowser from '$lib/svelte/components/page/EquipmentBrowser.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	type EquipmentTypeContent = {
		readonly sections: readonly PageContentSectionData[];
		readonly tableOfContents: readonly PageTableOfContentsSection[];
	};

	function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
		return typeof value === 'object' && value !== null && !Array.isArray(value);
	}

	function getEquipmentTypeContent(value: unknown): EquipmentTypeContent | null {
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
	const equipmentType = $derived(getEquipmentTypeBySlug(page.params.item ?? ''));
	let content = $derived(getEquipmentTypeContent(currentPage.data));
</script>

{#if equipmentType && currentPage.data && content}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			{#each content.sections as section}
				<PageContentSection {section} />
			{/each}

			<EquipmentBrowser
				items={equipmentItems}
				initialType={equipmentType.label}
				showTypeFilter={false}
				heading={`${equipmentType.label} Browser`}
			/>
		</article>

		{#if content.tableOfContents.length}
			<aside class="page-layout__toc">
				<TableOfContents sections={content.tableOfContents} />
			</aside>
		{/if}
	</div>
{:else}
	<NotFound />
{/if}
