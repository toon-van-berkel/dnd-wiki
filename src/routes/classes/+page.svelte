<!--
	Location: src/routes/classes/+page.svelte
	Use: Class index page backed by the central class content pack.
-->
<script lang="ts">
	import { contentPackClassList } from '$lib/typescript/data/internals/classes/content-pack';

	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
</script>

<article class="wiki-article">
	<PageHeader />

	<section
		class="wiki-article__section"
		id="classes"
		aria-labelledby="classes-title"
	>
		<h2 id="classes-title">Classes</h2>

		<div class="wiki-article__image-cards">
			{#each contentPackClassList as classItem}
				<PageCard page={classItem.path} variant="image" />
			{/each}
		</div>
	</section>
</article>
