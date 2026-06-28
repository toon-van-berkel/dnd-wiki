<script lang="ts">
	import CampaignNote from '$lib/components/CampaignNote.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Fighting — D&D Portal</title></svelte:head>

<PageHeader title="Fighting" description="Combat rulings intended to keep encounters tactical, quick, and easy to understand." eyebrow="Rule page" tags={['Global', 'Combat']} />

<PageSection title="Flanking">
	<p>When two allies threaten a creature from opposite sides, each gains a +2 bonus to melee attack rolls against it.</p>
	<p>A creature cannot be flanked by an attacker it cannot meaningfully perceive or engage.</p>
</PageSection>

<PageSection title="Critical hits">
	<p>Roll the attack’s damage dice twice, then add modifiers once. Resolve additional effects after the total damage is known.</p>
	<CampaignNote campaign="Party 2">
		<p>Party 2 uses brutal criticals: maximize one weapon damage die, then roll the remaining damage dice.</p>
	</CampaignNote>
</PageSection>

<PageSection title="Creative actions">
	<p>Describe the outcome you want before rolling. The DM sets a check, cost, or tradeoff based on the situation. A creative action should not replace another character’s defining ability.</p>
</PageSection>
