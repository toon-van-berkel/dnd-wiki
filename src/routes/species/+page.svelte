<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	const speciesPages = getNavigationChildren('/species').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));
</script>

<PageSection title="Choosing a species">
	<p>Choose an option that fits the campaign premise and gives your character a useful connection to the world. Availability labels override general assumptions.</p>
	<p>If a page says an option is limited or needs approval, discuss the character idea with the DM before finalizing it.</p>
</PageSection>

<section class="page-links" aria-labelledby="species-pages-heading">
	<h2 id="species-pages-heading">Species pages</h2>
	<ChildLinkGrid imagesInFolder="species" links={speciesPages} />
</section>

<style lang="scss">
	.page-links { margin-top: 2.25rem; h2 { margin: 0 0 1rem; color: var(--text-heading); font-size: 1.05rem; } }
</style>
