<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		children: Snippet;
	};

	let { title, children }: Props = $props();
</script>

<section class="page-section">
	<h2>{title}</h2>
	<div class="page-section__content">{@render children()}</div>
</section>

<style lang="scss">
	@use './PageSection.scss';
</style>
