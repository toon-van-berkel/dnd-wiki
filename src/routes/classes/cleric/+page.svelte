<script lang="ts">
	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	const subclassPages = getNavigationChildren('/classes/cleric').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));
</script>

<svelte:head><title>Cleric — D&D Portal</title></svelte:head>

<PageHeader title="Cleric" description="Divine adventurers whose abilities are shaped by faith, duty, or service to a greater cause." eyebrow="Class" tags={['Class', 'Divine Magic']} />

<AvailabilityBadges allowed={['Party 1', 'Party 2', 'Party 3']} approval={['Party 4']} />

<PageSection title="At our table">
	<p>A cleric needs a source of conviction, but does not need to behave like a formal priest. Decide what principle, deity, or sacred duty drives the character.</p>
	<ul>
		<li>Discuss new deities with the DM before adding them to the setting.</li>
		<li>Divine power can be questioned, tested, or changed through play.</li>
	</ul>
</PageSection>

<section class="domain-links" aria-labelledby="domains-heading">
	<h2 id="domains-heading">Cleric domains</h2>
	<ChildLinkGrid links={subclassPages} imagesInFolder="classes/cleric" />
</section>

<style lang="scss">
	.domain-links { margin-top: 2.25rem; h2 { margin: 0 0 1rem; color: var(--text-heading); font-size: 1.05rem; } }
</style>
