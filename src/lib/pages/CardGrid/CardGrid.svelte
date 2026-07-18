<!-- site\src\lib\pages\CardGrid\CardGrid.svelte -->
<script lang="ts">
	import type { CardGridProps as Props } from './CardGrid-Types';

	let {
		children,
		minCardWidth = '15rem',
		gap = 'var(--content-gap)',
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['card-grid', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div
	class={classes}
	style:--card-grid-min-width={minCardWidth}
	style:--card-grid-gap={gap}
>
	{@render children()}
</div>

<style lang="scss">
	@use './CardGrid.scss';
</style>