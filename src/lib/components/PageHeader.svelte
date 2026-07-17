<!-- <script lang="ts">
	import RuleTag from './RuleTag.svelte';

	type Props = {
		title?: string;
		description?: string;
		eyebrow?: string;
		tags?: readonly string[];
	};

	let { title, description, eyebrow, tags = [] }: Props = $props();
</script>

<header class="page-header">
	{#if eyebrow}
		<p class="page-header__eyebrow">{eyebrow}</p>
	{/if}

	{#if title}
		<h1>{title}</h1>
	{/if}

	{#if description}
		<p class="page-header__description">{description}</p>
	{/if}

	{#if tags.length}
		<div class="page-header__tags" aria-label="Page tags">
			{#each tags as tag}
				<RuleTag label={tag} />
			{/each}
		</div>
	{/if}
</header>

<style lang="scss">
	@use './PageHeader.scss';
</style> -->
