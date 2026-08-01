<!--
	Location: src/routes/classes/rogue/+page.svelte
	Use: Data-driven Rogue page proof for reusable class components.
-->
<script lang="ts">
	import { getData } from '$lib/typescript/data/_index_';

	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	const rogue = getData('internals.classes.rogue');
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />

		<section
			class="wiki-article__section"
			id={rogue.content.sections.subclasses.id}
			aria-labelledby={`${rogue.content.sections.subclasses.id}-title`}
		>
			<h2 id={`${rogue.content.sections.subclasses.id}-title`}>
				{rogue.content.sections.subclasses.title}
			</h2>

			<div class="wiki-article__image-cards">
				<PageCard page="internals.classes.rogue.subclasses.arcaneTrickster" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.assassin" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.inquisitive" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.mastermind" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.phantom" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.scout" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.soulknife" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.swashbuckler" variant="image" />
				<PageCard page="internals.classes.rogue.subclasses.thief" variant="image" />
			</div>
		</section>
	</article>

	<aside class="page-layout__toc">
		<TableOfContents sections={rogue.content.tableOfContents} />
	</aside>
</div>
