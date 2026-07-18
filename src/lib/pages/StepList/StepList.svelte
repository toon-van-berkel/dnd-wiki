<!-- site\src\lib\pages\StepList\StepList.svelte -->
<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { resolveAppPath } from '$lib/utils/paths';

	import type {
		StepListItem,
		StepListProps as Props
	} from './StepList-Types';

	let {
		items,
		startAt = 1,
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['step-list', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#snippet stepContent(item: StepListItem, index: number)}
	<div class="step-list__header">
		<span class="step-list__number" aria-hidden="true">
			{startAt + index}
		</span>

		{#if item.icon}
			<Icon
				class="step-list__icon"
				src={item.icon}
				type="normal"
				color="var(--accent-muted)"
				size="1.5rem"
			/>
		{/if}

		<h3>{item.title}</h3>

		{#if item.href}
			<span class="step-list__arrow" aria-hidden="true">
				→
			</span>
		{/if}
	</div>

	{#if item.description}
		<p class="step-list__description">
			{item.description}
		</p>
	{/if}
{/snippet}

<ol class={classes} start={startAt}>
	{#each items as item, index}
		<li class="step-list__item">
			{#if item.href}
				<a
					class="step-list__card step-list__card--link"
					href={resolveAppPath(item.href)}
					aria-label={`Open ${item.title}`}
				>
					{@render stepContent(item, index)}
				</a>
			{:else}
				<div class="step-list__card">
					{@render stepContent(item, index)}
				</div>
			{/if}
		</li>
	{/each}
</ol>

<style lang="scss">
	@use './StepList.scss';
</style>
