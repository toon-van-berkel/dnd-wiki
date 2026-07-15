<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		type?: 'button' | 'submit';
		href?: string;
		variant?: 'primary' | 'secondary' | 'quiet';
		disabled?: boolean;
		onclick?: (event: MouseEvent) => void;
		children: Snippet;
	};

	let {
		type = 'button',
		href,
		variant = 'secondary',
		disabled = false,
		onclick,
		children
	}: Props = $props();
</script>

{#if href}
	<a
		class="action-button action-button--{variant}"
		class:action-button--disabled={disabled}
		aria-disabled={disabled}
		href={disabled ? undefined : href}
		onclick={disabled ? undefined : onclick}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="action-button action-button--{variant}"
		{type}
		{disabled}
		onclick={disabled ? undefined : onclick}
	>
		{@render children()}
	</button>
{/if}

<style lang="scss">
	@use '$lib/styles/buttons';

	.action-button {
		@include buttons.button-base;

		&--primary {
			border-color: color-mix(in srgb, var(--accent) 35%, var(--border));
			background: var(--accent-soft);
			color: var(--accent-muted);
		}

		&--secondary {
			background: var(--surface-raised);
			color: var(--text-secondary);
		}

		&--quiet {
			border-color: transparent;
			background: transparent;
			color: var(--accent-muted);
		}
	}
</style>
