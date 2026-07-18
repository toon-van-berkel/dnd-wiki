<script lang="ts">
	let { tags }: { tags: readonly string[] } = $props();
</script>

<div class="tags">
	<h2 class="tags-title">Tags:</h2>

	<ul class="tags__list" aria-label="Page tags">
		{#each tags as tag}
			<li class="tags__list-item">{tag}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use './Tags.scss';
</style>
