<!--
	Location: src/routes/equipment/[item]/+page.svelte
	Use: Equipment detail pages.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { getPugilistEquipmentBySlug } from '$lib/typescript/data/internals/classes/pugilist';

	import ReferenceDetail from '$lib/svelte/components/page/ReferenceDetail.svelte';

	const item = $derived(getPugilistEquipmentBySlug(page.params.item ?? ''));
</script>

{#if item}
	<ReferenceDetail
		eyebrow={`${item.type} - ${item.rarity}`}
		title={item.name}
		description={item.description}
		meta={[
			{ label: 'Type', value: item.type },
			{ label: 'Rarity', value: item.rarity },
			{ label: 'Attunement', value: item.attunement ? 'Requires attunement' : 'No attunement' }
		]}
		tags={item.tags}
		sectionTitle="Item Text"
	/>
{:else}
	<article class="wiki-article">
		<section class="wiki-article__section">
			<h1>Equipment Not Found</h1>
			<p class="wiki-article__copy">No equipment reference exists for this page.</p>
		</section>
	</article>
{/if}
