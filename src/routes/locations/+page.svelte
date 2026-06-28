<script lang="ts">
	import CampaignNote from '$lib/components/CampaignNote.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Locations — D&D Portal</title></svelte:head>

<PageHeader title="Locations" description="Settlements, regions, landmarks, and other places discovered in the campaign world." eyebrow="World guide" tags={['Setting', 'Travel']} />

<PageSection title="The Lantern District">
	<p>A busy urban quarter built around workshops, markets, and narrow streets lit throughout the night. Travelers can find supplies here, but discretion costs extra.</p>
	<CampaignNote campaign="Party 1">
		<p>Party 1 has access to safe lodging above the Copper Kettle while they remain in good standing with its owner.</p>
	</CampaignNote>
</PageSection>

<PageSection title="The Elderwood">
	<p>An old forest where maintained roads become scarce and ordinary landmarks shift with the seasons. Local guides treat the interior with caution.</p>
</PageSection>
