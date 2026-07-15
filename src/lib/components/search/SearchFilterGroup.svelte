<script lang="ts">
	import { untrack } from 'svelte';

	export type SearchFilterOption = {
		id: string;
		label: string;
		count: number;
		selected?: boolean;
	};

	type Props = {
		title: string;
		options: readonly SearchFilterOption[];
		selectedIds: readonly string[];
		collapsible?: boolean;
		defaultExpanded?: boolean;
		onToggle: (id: string, checked: boolean) => void;
	};

	let {
		title,
		options,
		selectedIds,
		collapsible = false,
		defaultExpanded = true,
		onToggle
	}: Props = $props();

	let expanded = $state(untrack(() => defaultExpanded));
	let selectedCount = $derived(options.filter((option) => selectedIds.includes(option.id)).length);
	let groupId = $derived(`search-filter-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
</script>

{#if options.length}
	<fieldset class="search-filter-group">
		<legend class="sr-only">{title}</legend>

		<div class="search-filter-group__header">
			<h3>{title}</h3>
			{#if selectedCount}
				<small>{selectedCount} active</small>
			{/if}
			{#if collapsible}
			<button
				type="button"
				aria-expanded={expanded}
				aria-controls={groupId}
				aria-label={`${expanded ? 'Collapse' : 'Expand'} ${title} filters`}
				onclick={() => (expanded = !expanded)}
			>
				<span aria-hidden="true">{expanded ? 'Collapse' : 'Expand'}</span>
			</button>
			{/if}
		</div>

		{#if expanded}
			<div id={groupId} class="search-filter-group__options">
				{#each options as option}
					<label class="search-filter-option">
						<input
							type="checkbox"
							checked={selectedIds.includes(option.id)}
							onchange={(event) =>
								onToggle(option.id, (event.currentTarget as HTMLInputElement).checked)}
						/>
						<span>{option.label}</span>
						<small>{option.count}</small>
					</label>
				{/each}
			</div>
		{/if}
	</fieldset>
{/if}

<style lang="scss">
	@use '$lib/styles/mixins';
	@use '$lib/styles/panels';

	.search-filter-group {
		@include panels.panel(1rem);

		min-width: 0;
		margin: 0;
	}

	.search-filter-group__header {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto auto;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.8rem;
	}

	h3 {
		margin: 0;
		color: var(--text-heading);
		font-size: 0.9rem;
		font-weight: 750;
		line-height: 1.3;
	}

	button {
		@include mixins.focus-ring;

		min-height: 2rem;
		padding: 0.2rem 0.45rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		background: var(--surface-raised);
		color: var(--text-secondary);
		font: inherit;
		font-size: 0.72rem;
		font-weight: 800;
		cursor: pointer;
	}

	small {
		color: var(--accent-muted);
		font-size: 0.68rem;
		font-weight: 800;
	}

	.search-filter-group__options {
		display: grid;
		gap: 0.5rem;
	}

	.search-filter-option {
		@include mixins.focus-ring;
		@include mixins.interactive-surface;

		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.75rem;
		min-height: 2.75rem;
		padding: 0.55rem 0.65rem;
		border-radius: var(--radius-sm);
		color: var(--text-primary);
		font-size: 0.82rem;
		cursor: pointer;

		&:hover,
		&:focus-within {
			background: var(--surface-hover);
		}

		span {
			min-width: 0;
			overflow-wrap: anywhere;
		}
	}

	input {
		flex: none;
		width: 1rem;
		height: 1rem;
		accent-color: var(--accent);
	}

	.search-filter-option small {
		justify-self: end;
		color: var(--text-muted);
	}

	@media (max-width: 22rem) {
		.search-filter-group__header {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
