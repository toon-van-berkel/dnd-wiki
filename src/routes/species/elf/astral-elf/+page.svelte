<script lang="ts">
	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import CampaignNote from '$lib/components/CampaignNote.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Astral Elf — D&D Portal</title></svelte:head>

<PageHeader title="Astral Elf" description="An uncommon elf lineage shaped by distant realms and an unusual relationship with time." eyebrow="Elf lineage" tags={['Species', 'Elf', 'Approval']} />

<AvailabilityBadges limited={['Party 1']} banned={['Party 3', 'Party 4']} approval={['Party 2']} />

<PageSection title="Character guidance">
	<p>Astral elves are rare in the current setting. A character needs a clear reason to have arrived, a grounded goal, and a connection that keeps them with the party.</p>
	<p>Do not assume detailed knowledge of planar events. The DM will provide campaign-relevant information during character creation.</p>
	<CampaignNote campaign="Party 1">
		<p>Party 1 may use this option only when the character is connected to the campaign’s observatory storyline.</p>
	</CampaignNote>
</PageSection>
