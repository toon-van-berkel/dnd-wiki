<script lang="ts">
	import RuleTag from './RuleTag.svelte';

	type Props = {
		title: string;
		description: string;
		eyebrow?: string;
		tags?: string[];
	};

	let {
		title,
		description,
		eyebrow = 'Wiki reference',
		tags = []
	}: Props = $props();
</script>

<header class="page-header">
	<p class="page-header__eyebrow">{eyebrow}</p>
	<h1>{title}</h1>
	<p class="page-header__description">{description}</p>
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
</style>
