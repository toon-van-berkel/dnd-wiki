<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title?: string;
		description?: string;
		variant?: 'surface' | 'raised';
		padding?: 'normal' | 'compact';
		children?: Snippet;
		actions?: Snippet;
	};

	let {
		title,
		description,
		variant = 'surface',
		padding = 'normal',
		children,
		actions
	}: Props = $props();
</script>

<section class="panel panel--{variant} panel--{padding}">
	{#if title || description || actions}
		<header class="panel__header">
			{#if title || description}
				<div>
					{#if title}
						<h2>{title}</h2>
					{/if}
					{#if description}
						<p>{description}</p>
					{/if}
				</div>
			{/if}

			{#if actions}
				<div class="panel__actions">
					{@render actions()}
				</div>
			{/if}
		</header>
	{/if}

	{#if children}
		<div class="panel__body">
			{@render children()}
		</div>
	{/if}
</section>

<style lang="scss">
	@use '$lib/styles/panels';

	.panel {
		@include panels.panel;

		display: grid;
		gap: 1rem;

		&--compact {
			padding: 0.85rem;
		}

		&--raised {
			background: var(--surface-raised);
		}
	}

	.panel__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;

		h2 {
			margin: 0;
			color: var(--text-heading);
			font-size: 1.05rem;
		}

		p {
			margin: 0.35rem 0 0;
			color: var(--text-secondary);
			font-size: 0.9rem;
			line-height: 1.55;
		}
	}

	.panel__actions {
		flex: none;
	}

	.panel__body {
		min-width: 0;
	}

	@media (max-width: 42rem) {
		.panel__header {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
