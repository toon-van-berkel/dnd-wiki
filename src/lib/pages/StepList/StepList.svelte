<!-- site\src\lib\pages\StepList\StepList.svelte -->
<script lang="ts">
	import Icon from '$lib/helpers/Icon.svelte';

	import type { StepListProps as Props } from './StepList-Types';

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

<ol class={classes} start={startAt}>
	{#each items as item, index}
		<li class="step-list__item">
			<span class="step-list__number" aria-hidden="true">
				{startAt + index}
			</span>

			<span
				class="step-list__icon"
				class:step-list__icon--empty={!item.icon}
			>
				{#if item.icon}
					<Icon
						src={item.icon}
						type="normal"
						color="var(--accent-muted)"
						size="1.5rem"
					/>
				{/if}
			</span>

			<h3>{item.title}</h3>

			{#if item.description}
				<p>{item.description}</p>
			{/if}
		</li>
	{/each}
</ol>

<style lang="scss">
	@use './StepList.scss';
</style>