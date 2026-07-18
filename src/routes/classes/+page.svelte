<!-- site\src\routes\classes\+page.svelte -->
<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageSection from '$lib/pages/PageSection.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	import PageHeader from '$lib/page/layout/navigation/PageHeader.svelte';
	import { headerdata } from './page.header';

    import Metadata from '$lib/page/Metadata.svelte';
	import { metadata } from '../page.meta';

	const classPages = getNavigationChildren('/classes').map(({ title, href, description, tags }) => ({
		title,
		href,
		description: description ?? '',
		tags: tags ?? []
	}));
</script>

<Metadata {metadata}/>
<PageHeader {headerdata} />

<PageSection
	variant="featured"
	title="Choosing a class"
	description="Choose a class based on the character you want to play, the role you want to fulfil, and the options available in your campaign."
	collapsible
>
	<p>
		Your class determines most of your character’s abilities, combat style, progression, and
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

	<div class="class-quiz">
		<div>
			<h3>Not sure which class to choose?</h3>
			<p>
				Answer a few questions about your preferred playstyle, combat role, magic, and
				character concept to receive a class recommendation.
			</p>
		</div>

		<a class="class-quiz__link" href="/classes/quiz">
			Take the class quiz
		</a>
	</div>
</PageSection>

<section class="page-links" aria-labelledby="class-pages-heading">
	<h2 id="class-pages-heading">Class pages</h2>
	<ChildLinkGrid links={classPages} imagesInFolder="classes" />
</section>

<style lang="scss">
	.class-quiz {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
		padding: 20px;
		background: var(--surface);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-lg);

		h3,
		p {
			margin: 0;
		}

		p {
			margin-top: var(--space-xs);
			color: var(--text-secondary);
		}

		&__link {
			flex-shrink: 0;
			padding: 10px;
			font-weight: 700;
			text-decoration: none;
			background: var(--accent);
			color: var(--surface);
			border-radius: var(--radius-lg);
		}

		@media (max-width: 40rem) {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>