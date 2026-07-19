<!-- site\src\lib\pages\TagList\TagList.svelte -->
<script lang="ts">
	import type { TagListProps as Props } from './TagList-Types';

	let {
		items,
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['tag-list', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<ul class={classes}>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>

<style lang="scss">
	@use './TagList.scss';
</style>