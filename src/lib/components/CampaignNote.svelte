<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		campaign: string;
		children: Snippet;
	};

	let { campaign, children }: Props = $props();

	let tone = $derived(campaign.toLowerCase().replaceAll(' ', '-'));
</script>

<aside class="campaign-note campaign-note--{tone}" aria-label={`${campaign} campaign note`}>
	<div class="campaign-note__heading">
		<span aria-hidden="true"></span>
		<strong>{campaign} only</strong>
	</div>
	<div class="campaign-note__content">{@render children()}</div>
</aside>

<style lang="scss">
	@use './CampaignNote.scss';
</style>
