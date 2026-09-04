<!--
	Location: src/routes/npcs/[npc]/+page.svelte
	Use: NPC detail pages.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { getPugilistNpcBySlug } from '$lib/typescript/data/internals/classes/pugilist';

	import NpcDetail from '$lib/svelte/components/page/NpcDetail.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';

	const npc = $derived(getPugilistNpcBySlug(page.params.npc ?? ''));
</script>

{#if npc}
	<NpcDetail {npc} />
{:else}
	<NotFound />
{/if}
