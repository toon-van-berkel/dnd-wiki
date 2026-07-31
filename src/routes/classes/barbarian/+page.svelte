<!--
	Location: src/routes/classes/barbarian/+page.svelte
	Use: Data-driven Barbarian page proof of concept.
-->
<script lang="ts">
	import { getData } from '$lib/typescript/data/_index_';

	import CoreTraits from '$lib/svelte/components/page/CoreTraits.svelte';
	import InlineContent from '$lib/svelte/components/page/InlineContent.svelte';
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import ProgressionTable from '$lib/svelte/components/page/ProgressionTable.svelte';

	const barbarian = getData('internals.classes.barbarian');
</script>

<article class="barbarian-page">
	<PageHeader />

	<section class="barbarian-page__section" aria-labelledby="barbarian-multiclassing-title">
		<h2 id="barbarian-multiclassing-title">Multiclassing</h2>

		<p class="barbarian-page__copy barbarian-page__copy--wide">
			<InlineContent content={barbarian.content.multiclassingRequirement} />
		</p>
	</section>

	<CoreTraits traits={barbarian.content.coreTraits} />

	<ProgressionTable data={barbarian.content.progression} />

	<section class="barbarian-page__section" aria-labelledby="barbarian-paths-title">
		<h2 id="barbarian-paths-title">Primal Paths</h2>

		<div class="barbarian-page__cards">
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
