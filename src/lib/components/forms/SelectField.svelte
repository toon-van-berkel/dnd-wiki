<script lang="ts">
	type SelectOption = {
		value: string;
		label: string;
	};

	type Props = {
		id: string;
		label: string;
		value: string;
		options: readonly SelectOption[];
		description?: string;
		onChange: (value: string) => void;
	};

	let { id, label, value, options, description, onChange }: Props = $props();
	let descriptionId = $derived(`${id}-description`);
</script>

<div class="select-field">
	<label for={id}>{label}</label>
	{#if description}
		<p id={descriptionId}>{description}</p>
	{/if}
	<select
		{id}
		class="form-control"
		value={value}
		aria-describedby={description ? descriptionId : undefined}
		onchange={(event) => onChange((event.currentTarget as HTMLSelectElement).value)}
	>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	@use '$lib/styles/forms';

	.select-field {
		display: grid;
		gap: 0.45rem;

		label {
			color: var(--text-heading);
			font-size: 0.78rem;
			font-weight: 800;
		}

		p {
			margin: 0;
			color: var(--text-muted);
			font-size: 0.8rem;
			line-height: 1.45;
		}

		.form-control {
			@include forms.select-control;
		}
	}
</style>
