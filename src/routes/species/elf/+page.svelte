<script lang="ts">
	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	const elfPages = getNavigationChildren('/species/elf').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));
</script>

<svelte:head><title>Elf — D&D Portal</title></svelte:head>

<PageHeader title="Elf" description="Long-lived people whose communities preserve distinct traditions and relationships with magic." eyebrow="Species" tags={['Species', 'Lineages']} />

<AvailabilityBadges allowed={['Party 1', 'Party 2']} limited={['Party 3']} approval={['Party 4']} />

<PageSection title="Elves in the setting">
	<p>Elven cultures are not interchangeable. Choose a homeland or lineage page, then use it to ground your character’s outlook and relationships.</p>
	<p>A long lifespan does not mean your character already knows every secret of the world. Their experience should support the current starting level.</p>
</PageSection>

<section class="lineage-links" aria-labelledby="lineages-heading">
	<h2 id="lineages-heading">Elf lineages</h2>
	<ChildLinkGrid links={elfPages} />
</section>

<style lang="scss">
	.lineage-links { margin-top: 2.25rem; h2 { margin: 0 0 1rem; color: var(--text-heading); font-size: 1.05rem; } }
</style>
