<!--
	Location: src/routes/+page.svelte
	Use: D&D Portal Wiki homepage.
-->
<script lang="ts">
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
</script>

<article class="wiki-article">
	<PageHeader />

	<section class="wiki-article__section" aria-labelledby="browse-wiki-title">
		<h2 id="browse-wiki-title">Browse Wiki</h2>

		<div class="wiki-article__image-cards wiki-article__image-cards--full">
			<PageCard page="internals.utility.search" density="compact" />
			<PageCard page="internals.classes.page" density="compact" />
			<PageCard page="internals.spells.page" density="compact" />
			<PageCard page="internals.equipment.page" density="compact" />
			<PageCard page="internals.npcs.page" density="compact" />
			<PageCard page="internals.rules.page" density="compact" />
			<PageCard page="internals.species.page" density="compact" />
			<PageCard page="internals.monsters.page" density="compact" />
			<PageCard page="internals.locations.page" density="compact" />
			<PageCard page="internals.community.discord.page" density="compact" />
		</div>
	</section>

	<section class="wiki-article__section" aria-labelledby="project-title">
		<h2 id="project-title">Project</h2>

		<div class="wiki-article__cards wiki-article__cards--full">
			<PageCard page="internals.project.about" density="compact" />
			<PageCard page="internals.project.sources" density="compact" />
			<PageCard page="internals.project.credits" density="compact" />
			<PageCard page="internals.project.aiTransparency" density="compact" />
			<PageCard page="internals.project.accessibility" density="compact" />
			<PageCard page="internals.project.changelog" density="compact" />
			<PageCard page="internals.community.issues" density="compact" />
			<PageCard page="internals.community.roadmap" density="compact" />
		</div>
	</section>
</article>
