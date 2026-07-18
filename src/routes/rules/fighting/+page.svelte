<script lang="ts">
	import CampaignNote from '$lib/components/feedback/CampaignNote.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
</script>

<PageSection title="Flanking">
	<p>Flanking grants a +2 bonus to melee attack rolls instead of advantage. This keeps positioning useful without overwhelming class features that already grant advantage.</p>
	<CampaignNote partyId="i2">
		<p>Party 2 uses the same bonus for large tactical encounters, but the DM may waive it for theatre-of-the-mind scenes.</p>
	</CampaignNote>
</PageSection>

<PageSection title="Critical hits">
	<p>On a critical hit, roll the damage dice twice and add modifiers once. Extra dice from class features or spells are doubled when they are part of the attack damage.</p>
</PageSection>

<PageSection title="Creative actions">
	<p>Creative actions are encouraged. Describe the goal and the risk, then the DM chooses a check, save, or contest that fits the situation.</p>
</PageSection>
