<!--
	Location: src/routes/classes/[class]/+page.svelte
	Use: Generic class page for DOCX content-pack classes.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { getContentPackClassBySlug } from '$lib/typescript/data/internals/classes/content-pack';

	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import ProgressionTable from '$lib/svelte/components/page/ProgressionTable.svelte';
	import StartingEquipment from '$lib/svelte/components/page/StartingEquipment.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	let classData = $derived(getContentPackClassBySlug(page.params.class ?? ''));
	let content = $derived(classData?.content);
</script>

{#if content}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			<PageContentSection section={content.sections.identity} />
			<PageContentSection section={content.sections.coreTraits} />

			<StartingEquipment
				groups={content.startingEquipment}
				section={{
					id: 'starting-equipment',
					title: 'Starting Equipment'
				}}
			/>

			<ProgressionTable
				data={content.progression}
				section={{
					id: 'progression',
					title: content.progression.heading
				}}
			/>

			<PageContentSection section={content.sections.classFeaturesOverview} />

			{#each content.sections.featureSections as section}
				<PageContentSection {section} headingLevel="subsection" />
			{/each}

			<PageContentSection section={content.sections.subclasses} />

			{#if content.sections.archivedOptions}
				<PageContentSection section={content.sections.archivedOptions} />
			{/if}
		</article>

		<aside class="page-layout__toc">
			<TableOfContents sections={content.tableOfContents} />
		</aside>
	</div>
{/if}
