<script lang="ts">
	import CampaignNote from '$lib/components/CampaignNote.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Movement — D&D Portal</title></svelte:head>

<PageHeader title="Movement" description="Table rulings for tactical positioning, hazardous terrain, and travel." eyebrow="Rule page" tags={['Global', 'Combat', 'Travel']} />

<PageSection title="Tactical movement">
	<p>State your intended destination and route clearly when positioning matters. The table resolves small measurement differences in favor of keeping play moving.</p>
	<ul>
		<li>Moving through uncertain terrain may require a check or cost additional movement.</li>
		<li>Climbing onto unstable objects can create a benefit and a risk.</li>
		<li>You may break up movement around actions when the situation allows it.</li>
	</ul>
</PageSection>

<PageSection title="Travel pace">
	<p>The group chooses a travel pace based on urgency, caution, and available light. Faster travel makes it harder to notice threats or useful details.</p>
	<CampaignNote campaign="Party 3">
		<p>Party 3 has advantage on navigation checks inside the Elderwood while following marked ranger trails.</p>
	</CampaignNote>
</PageSection>
