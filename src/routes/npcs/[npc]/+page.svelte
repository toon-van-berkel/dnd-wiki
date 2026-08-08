<!--
	Location: src/routes/npcs/[npc]/+page.svelte
	Use: NPC detail pages.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { getPugilistNpcBySlug } from '$lib/typescript/data/internals/classes/pugilist';

	import ReferenceDetail from '$lib/svelte/components/page/ReferenceDetail.svelte';

	const npc = $derived(getPugilistNpcBySlug(page.params.npc ?? ''));
</script>

{#if npc}
	<ReferenceDetail
		eyebrow={`NPC - CR ${npc.challenge}`}
		title={npc.name}
		description={npc.description}
		meta={[
			{ label: 'Category', value: 'NPC' },
			{ label: 'Challenge', value: `CR ${npc.challenge}` },
			{ label: 'Source', value: 'Pugilist Clean Edition' }
		]}
		sectionTitle="Stat Block"
	/>
{:else}
	<article class="wiki-article">
		<section class="wiki-article__section">
			<h1>NPC Not Found</h1>
			<p class="wiki-article__copy">No NPC reference exists for this page.</p>
		</section>
	</article>
{/if}
