<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<svelte:head><title>Monsters — D&D Portal</title></svelte:head>

<PageHeader title="Monsters" description="A player-safe bestiary of creatures encountered during our campaigns." eyebrow="Bestiary" tags={['Setting', 'Player Knowledge']} />

<PageSection title="Using the bestiary">
	<p>Monster pages record what the parties have learned in play. They may include rumors, visible behavior, and practical discoveries without exposing hidden statistics.</p>
	<p>This overview is ready for individual creature pages as the campaigns encounter them.</p>
</PageSection>

<PageSection title="Known creature types">
	<ul>
		<li><strong>Common threats:</strong> creatures widely recognized by local communities.</li>
		<li><strong>Rare sightings:</strong> unusual beings known through incomplete reports.</li>
		<li><strong>Campaign discoveries:</strong> creatures documented by one specific party.</li>
	</ul>
</PageSection>
