<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid/ChildLinkGrid.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { getPageChildren } from '$lib/page/registry';

	const classPages = getPageChildren('classes').map(({ title, href, shortDescription, description, tags }) => ({
		title,
		href,
		description: shortDescription ?? description ?? '',
		tags: tags ?? []
	}));
</script>

<PageSection
	variant="featured"
	title="Choosing a class"
	description="Choose a class based on the character you want to play, the role you want to fulfil, and the options available in your campaign."
	collapsible
>
	<p>
		Your class determines most of your character's abilities, combat style, progression, and
		overall role within the party. Some classes specialise in direct combat, while others focus
		on spellcasting, support, exploration, social interaction, or a mixture of several roles.
	</p>

	<p>
		Use the tags on each class to quickly compare its strengths and playstyle. Open a class page
		for its full rules, features, subclasses, progression, and campaign-specific adjustments.
	</p>

	<p>
		Class availability can differ between campaigns. Check the availability information shown
		on each page, and discuss restricted, third-party, or homebrew options with the Dungeon
		Master before creating your character.
	</p>
</PageSection>

<section class="page-links" aria-labelledby="class-pages-heading">
	<h2 id="class-pages-heading">Class pages</h2>
	<ChildLinkGrid links={classPages} />
</section>
