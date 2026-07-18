<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid/ChildLinkGrid.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { getPageChildren } from '$lib/page/registry';

	const subclassPages = getPageChildren('classes--cleric').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));
</script>

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
