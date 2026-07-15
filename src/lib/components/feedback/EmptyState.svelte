<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		description?: string;
		actions?: Snippet;
	};

	let { title, description, actions }: Props = $props();
</script>

<div class="empty-state">
	<h3>{title}</h3>
	{#if description}
		<p>{description}</p>
	{/if}
	{#if actions}
		<div class="empty-state__actions">
			{@render actions()}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '$lib/styles/panels';

	.empty-state {
		@include panels.panel;

		h3 {
			margin: 0;
			color: var(--text-heading);
			font-size: 0.95rem;
		}

		p {
			margin: 0.45rem 0 0;
			color: var(--text-secondary);
			font-size: 0.86rem;
			line-height: 1.55;
		}
	}

	.empty-state__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}
</style>
