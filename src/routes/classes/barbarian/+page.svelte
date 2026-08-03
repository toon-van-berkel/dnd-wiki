<!--
	Location: src/routes/classes/barbarian/+page.svelte
	Use: Data-driven Barbarian page proof of concept.
-->
<script lang="ts">
	import { getData } from '$lib/typescript/data/_index_';

	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import ProgressionTable from '$lib/svelte/components/page/ProgressionTable.svelte';
	import StartingEquipment from '$lib/svelte/components/page/StartingEquipment.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	const barbarian = getData('internals.classes.barbarian');
	const classFeatureOverview = barbarian.content.classFeatureSections[0];
	const coreTraitSections = barbarian.content.classFeatureSections.slice(1, 3);
	const classFeatureSections = barbarian.content.classFeatureSections.slice(3);
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />

		<ProgressionTable
			data={barbarian.content.progression}
			section={barbarian.content.sections.progression}
		/>

		<section
			class="wiki-article__section"
			id={barbarian.content.sections.coreTraits.id}
			aria-labelledby={`${barbarian.content.sections.coreTraits.id}-title`}
		>
			<h2 id={`${barbarian.content.sections.coreTraits.id}-title`}>
				{barbarian.content.sections.coreTraits.title}
			</h2>
		</section>

		{#each coreTraitSections as section}
			<PageContentSection {section} headingLevel="subsection" />
		{/each}

		<StartingEquipment
			groups={barbarian.content.coreTraits.startingEquipment}
			intro={barbarian.content.startingEquipmentIntro}
			section={barbarian.content.sections.startingEquipment}
			headingLevel="subsection"
		/>

		<PageContentSection section={classFeatureOverview} />

		{#each classFeatureSections as section}
			<PageContentSection {section} headingLevel="subsection" />
		{/each}
	</article>

	<aside class="page-layout__toc">
		<TableOfContents sections={barbarian.content.tableOfContents} />
	</aside>
</div>
