<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	const classPages = getNavigationChildren('/classes').map(({ title, href, description, tags }) => ({
		title,
		href,
		description: description ?? '',
		tags: tags ?? []
	}));
</script>

<svelte:head><title>Classes — D&D Portal</title></svelte:head>

<PageSection title="Choosing a class">
	<p>Choose a class whose core play style you will enjoy for more than one session. Your mechanics and character story should support each other, but they do not need to match a stereotype.</p>
	<p>Subclass availability can differ from the parent class, so check both pages before finalizing a character.</p>
</PageSection>

<section class="page-links" aria-labelledby="class-pages-heading">
	<h2 id="class-pages-heading">Class pages</h2>
	<ChildLinkGrid links={classPages} imagesInFolder="classes" />
</section>

<style lang="scss">
	.page-links { margin-top: 2.25rem; h2 { margin: 0 0 1rem; color: var(--text-heading); font-size: 1.05rem; } }
</style>
