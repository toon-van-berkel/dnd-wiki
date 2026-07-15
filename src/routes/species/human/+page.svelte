<script lang="ts">
	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import CampaignNote from '$lib/components/CampaignNote.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Human — D&D Portal</title></svelte:head>

<PageHeader title="Human" description="Adaptable and widespread, humans build communities in nearly every settled region." eyebrow="Species" tags={['Species', 'Versatile']} />

<AvailabilityBadges />

<PageSection title="At our table">
	<p>Human characters can come from any established culture in the setting. Start with a home, a personal tie, and one reason to travel with the party.</p>
	<ul>
		<li>Choose a culture that matches the campaign region.</li>
		<li>Work with the DM before inventing a major noble house or organization.</li>
	</ul>
	<CampaignNote campaign="Party 1">
		<p>Human characters in Party 1 may begin with one additional language tied to the capital.</p>
	</CampaignNote>
</PageSection>
