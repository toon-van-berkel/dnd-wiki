<script lang="ts">
	import { page } from '$app/state';
	import { selectClass } from '$lib/data/classes';
	import RuleTag from './RuleTag.svelte';

	type Props = {
		title?: string;
		description?: string;
		eyebrow?: string;
		tags?: readonly string[];
	};

	let { title, description, eyebrow, tags }: Props = $props();

	const cleanPath = $derived(
		page.url.pathname
			.split('?')[0]
			.split('#')[0]
			.replace(/^\/+|\/+$/g, '')
	);

	const pageData = $derived(selectClass(cleanPath));

	const resolvedTitle = $derived(title ?? pageData?.title);
	const resolvedDescription = $derived(description ?? pageData?.description);
	const resolvedEyebrow = $derived(eyebrow ?? pageData?.eyebrow ?? 'Wiki reference');
	const resolvedTags = $derived(tags ?? pageData?.tags ?? []);
</script>

<header class="page-header">
	<p class="page-header__eyebrow">{resolvedEyebrow}</p>

	{#if resolvedTitle}
		<h1>{resolvedTitle}</h1>
	{/if}

	{#if resolvedDescription}
		<p class="page-header__description">{resolvedDescription}</p>
	{/if}

	{#if resolvedTags.length}
		<div class="page-header__tags" aria-label="Page tags">
			{#each resolvedTags as tag}
				<RuleTag label={tag} />
			{/each}
		</div>
	{/if}
</header>

<style lang="scss">
	@use './PageHeader.scss';
</style>