<!-- <script lang="ts">
	import type { Snippet } from 'svelte';
	import { getParty, type PartyId } from '$lib/config/campaigns';

	type Props = {
		partyId: PartyId;
		children: Snippet;
	};

	let { partyId, children }: Props = $props();

	let party = $derived(getParty(partyId));
	let partyName = $derived(party?.name ?? partyId);
	let colorToken = $derived(party?.colorToken ?? '--accent');
	let softColorToken = $derived(party?.softColorToken ?? '--accent-soft');
	let style = $derived(`--campaign: var(${colorToken}); --campaign-soft: var(${softColorToken})`);
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
</style> -->
