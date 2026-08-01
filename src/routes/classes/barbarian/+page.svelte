<!--
	Location: src/routes/classes/barbarian/+page.svelte
	Use: Data-driven Barbarian page proof of concept.
-->
<script lang="ts">
	import { getData } from '$lib/typescript/data/_index_';

	import CoreTraits from '$lib/svelte/components/page/CoreTraits.svelte';
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import ProgressionTable from '$lib/svelte/components/page/ProgressionTable.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	const barbarian = getData('internals.classes.barbarian');
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />

		<CoreTraits
			traits={barbarian.content.coreTraits}
			section={barbarian.content.sections.coreTraits}
			startingEquipmentSection={barbarian.content.sections.startingEquipment}
		/>

		<ProgressionTable
			data={barbarian.content.progression}
			section={barbarian.content.sections.progression}
		/>

		<section
			class="wiki-article__section"
			id={barbarian.content.sections.primalPaths.id}
			aria-labelledby={`${barbarian.content.sections.primalPaths.id}-title`}
		>
			<h2 id={`${barbarian.content.sections.primalPaths.id}-title`}>
				{barbarian.content.sections.primalPaths.title}
			</h2>

			<div class="wiki-article__cards">
				<PageCard
					page="internals.classes.barbarian.subclasses.berserker"
					variant="icon"
					density="compact"
					eyebrow="Barbarian subclass"
				/>

				<PageCard
					page="internals.classes.barbarian.subclasses.zealot"
					variant="icon"
					density="compact"
					eyebrow="Barbarian subclass"
				/>
			</div>
		</section>
	</article>

	<aside class="page-layout__toc">
		<TableOfContents sections={barbarian.content.tableOfContents} />
	</aside>
</div>
