<!-- site\src\lib\pages\StatusLegend\StatusLegend.svelte -->
<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';

	import type { StatusLegendProps as Props } from './StatusLegend-Types';

	let {
		items,
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['status-legend', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes}>
	{#each items as item}
		<article
			class="status-legend__item"
			style:--status-color={item.color}
			style:--status-background={item.background ?? 'var(--surface)'}
		>
			<div class="status-legend__header">
				<Icon
					class="status-legend__icon"
					src={item.icon}
					type="normal"
					color="var(--status-color)"
					size="1.5rem"
				/>

				<h3>{item.title}</h3>
			</div>

			{#if item.description}
				<p class="status-legend__description">
					{item.description}
				</p>
			{/if}
		</article>
	{/each}
</div>

<style lang="scss">
	@use './StatusLegend.scss';
</style>