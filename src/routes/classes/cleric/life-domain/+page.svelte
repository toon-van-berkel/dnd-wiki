<script lang="ts">
	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import CampaignNote from '$lib/components/CampaignNote.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Life Domain — D&D Portal</title></svelte:head>

<PageHeader title="Life Domain" description="A cleric tradition devoted to preserving life, supporting allies, and protecting communities." eyebrow="Cleric domain" tags={['Subclass', 'Cleric', 'Support']} />

<AvailabilityBadges allowed={['Party 1', 'Party 2']} limited={['Party 3']} banned={['Party 4']} />

<PageSection title="Character guidance">
	<p>Life Domain characters should define what kinds of life or community they feel responsible for. Their beliefs can create difficult choices without preventing the party from acting.</p>
	<CampaignNote campaign="Party 3">
		<p>Party 3 may use this domain, but its divine source must connect to one of the surviving wilderness shrines.</p>
	</CampaignNote>
</PageSection>
