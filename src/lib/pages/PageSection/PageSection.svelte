<!-- site\src\lib\pages\PageSection\PageSection.svelte -->
<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { untrack } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Props } from './PageSection-Types';

	let {
		children,
		title,
		description,
		eyebrow,
		id,
		variant = 'default',
		collapsible = false,
		defaultExpanded = true
	}: Props = $props();

	let expanded = $state(untrack(() => Boolean(defaultExpanded)));
	let contentId = $derived(id ? `${id}-content` : undefined);

	function toggleSection() {
		expanded = !expanded;
	}
</script>

<section
	class="page-section page-section--{variant}"
	class:page-section--collapsed={collapsible && !expanded}
	{id}
>
	{#if eyebrow || title || description || collapsible}
		<header class="page-section__header">
			<div class="page-section__heading">
				<div class="page-section__heading-content">
					{#if eyebrow}
						<span class="page-section__eyebrow">{eyebrow}</span>
					{/if}

					{#if title}
						<h2 class="page-section__title">{title}</h2>
					{/if}
				</div>

				{#if collapsible}
					<button
						class="page-section__toggle"
						type="button"
						aria-label={expanded ? 'Collapse section' : 'Expand section'}
						aria-expanded={expanded}
						aria-controls={contentId}
						data-tooltip={expanded ? 'Collapse' : 'Expand'}
						onclick={toggleSection}
					>
						<svg
							class="page-section__toggle-icon"
							class:expanded
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M6 9l6 6 6-6" />
						</svg>
					</button>
				{/if}
			</div>

			{#if description}
				<p class="page-section__description">{description}</p>
			{/if}
		</header>
	{/if}

	{#if !collapsible || expanded}
		<div
			id={contentId}
			class="page-section__content"
			transition:slide={{ duration: 250, easing: cubicOut }}
		>
			{@render children()}
		</div>
	{/if}
</section>

<style lang="scss">
	@use './PageSection';
</style>
