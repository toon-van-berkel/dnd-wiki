<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getParty, getPartyDisplayName, type PartyId } from '$lib/config/parties';

	let { partyId, children }: { partyId: PartyId; children: Snippet } = $props();

	const party = $derived(getParty(partyId));
	const partyName = $derived(getPartyDisplayName(party));
	const style = $derived(
		`--campaign: var(${party.colors.basic}); --campaign-soft: var(${party.colors.soft})`
	);
</script>

<aside class="campaign-note" {style} aria-label={`${partyName} campaign note`}>
	<div class="campaign-note__heading">
		<span aria-hidden="true"></span>
		<strong>{partyName} only</strong>
	</div>
	<div class="campaign-note__content">{@render children()}</div>
</aside>

<style lang="scss">
	@use './CampaignNote.scss';
</style>
