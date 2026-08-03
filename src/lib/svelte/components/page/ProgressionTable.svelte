<!--
	Location: src/lib/svelte/components/page/ProgressionTable.svelte
	Use: Renders class progression as a responsive table and phone cards.
-->
<script lang="ts">
	import type {
		LinkPath,
		ProgressionColumn,
		ProgressionData,
		ProgressionFeature,
		ProgressionRow,
		ProgressionValue,
		PageSection
	} from '$lib/typescript/data/_index_';
	import { resolveLinkPath } from '$lib/typescript/pages/currentPage';

	import Link from '$lib/svelte/components/Link.svelte';

	let {
		data,
		section = {
			id: 'progression',
			title: data.heading ?? 'Class Progression'
		}
	}: {
		data: ProgressionData<LinkPath>;
		section?: PageSection;
	} = $props();
	let selectedLevel = $state<number | null>(null);
	let proficiencyBonusColumn = $derived(
		data.columns.find((column) => column.key === 'proficiencyBonus') ?? null
	);

	function formatOrdinal(value: number): string {
		const remainder = value % 100;

		if (remainder >= 11 && remainder <= 13) {
			return `${value}th`;
		}

		switch (value % 10) {
			case 1:
				return `${value}st`;
			case 2:
				return `${value}nd`;
			case 3:
				return `${value}rd`;
			default:
				return `${value}th`;
		}
	}

	function formatSigned(value: ProgressionValue): string {
		return typeof value === 'number' ? `+${value}` : value;
	}

	function formatValue(
		value: ProgressionValue,
		column: ProgressionColumn<LinkPath>
	): string {
		if (column.format === 'ordinal' && typeof value === 'number') {
			return formatOrdinal(value);
		}

		if (column.format === 'signed') {
			return formatSigned(value);
		}

		return String(value);
	}

	function getColumnValue(
		row: ProgressionRow<LinkPath>,
		column: ProgressionColumn<LinkPath>
	): ProgressionValue | null {
		if (column.key === 'level') {
			return row.level;
		}

		if (column.key === 'proficiencyBonus') {
			return row.proficiencyBonus;
		}

		return row.values[column.key] ?? null;
	}

	function getFeatureCountLabel(row: ProgressionRow<LinkPath>): string {
		const featureCount = row.features.length;

		if (featureCount === 0) {
			return 'No features gained';
		}

		return `${featureCount} feature${featureCount === 1 ? '' : 's'} gained`;
	}

	function getFeaturePreview(row: ProgressionRow<LinkPath>): string {
		if (row.features.length === 0) {
			return 'No new features';
		}

		return row.features.map((feature) => feature.label).join(' | ');
	}

	function getDetailColumns(): readonly ProgressionColumn<LinkPath>[] {
		return data.columns.filter((column) => column.key !== 'level');
	}

	function toggleSelectedLevel(level: number): void {
		selectedLevel = selectedLevel === level ? null : level;
	}

	function selectLevel(level: number): void {
		selectedLevel = level;
	}
</script>

{#snippet renderColumnLabel(column: ProgressionColumn<LinkPath>, label = column.label)}
	{@const columnPath = column.path ? resolveLinkPath(column.path) : null}

	{#if columnPath}
		<Link
			goto={columnPath}
			placeholder={label}
			popup="full"
		/>
	{:else}
		{label}
	{/if}
{/snippet}

{#snippet renderFeature(feature: ProgressionFeature<LinkPath>)}
	{@const featurePath = feature.path ? resolveLinkPath(feature.path) : null}

	<span class="progression-feature">
		{#if featurePath}
			<Link
				goto={featurePath}
				placeholder={feature.label}
				popup="full"
			/>
		{:else if feature.sectionId}
			<a class="progression-feature__anchor" href={`#${feature.sectionId}`}>
				{feature.label}
			</a>
		{:else}
			<span class="progression-feature__text">{feature.label}</span>
		{/if}

		{#if feature.optional}
			<span class="progression-feature__badge">Optional</span>
		{/if}
	</span>
{/snippet}

{#snippet renderFeatureList(row: ProgressionRow<LinkPath>)}
	{#if row.features.length}
		<ul class="progression-feature-list">
			{#each row.features as feature, index}
				<li>
					{@render renderFeature(feature)}

					{#if index < row.features.length - 1}
						<span class="progression-feature-list__separator" aria-hidden="true">
							,
						</span>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<span class="progression__empty">No new features</span>
	{/if}
{/snippet}

<section class="progression" id={section.id} aria-labelledby={`${section.id}-title`}>
	<header class="progression__header">
		<h2 id={`${section.id}-title`}>{section.title}</h2>

		{#if data.description}
			<p>{data.description}</p>
		{/if}
	</header>

	<div class="progression__table-presentation">
		<div class="progression__table-container">
			<table class="progression__table">
				<caption>{data.title}</caption>

				<thead>
					<tr>
						{#each data.columns as column}
							<th scope="col">
								{@render renderColumnLabel(column)}
							</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each data.rows as row (row.level)}
						<tr class:progression__row--selected={selectedLevel === row.level}>
							{#each data.columns as column}
								{#if column.key === 'level'}
									<th scope="row">
										<button
											class="progression__level-button"
											class:progression__level-button--selected={selectedLevel === row.level}
											type="button"
											aria-pressed={selectedLevel === row.level}
											aria-label={`Select ${formatOrdinal(row.level)} level`}
											onclick={() => toggleSelectedLevel(row.level)}
										>
											{formatOrdinal(row.level)}
										</button>
									</th>
								{:else if column.key === 'features'}
									<td>
										{@render renderFeatureList(row)}
									</td>
								{:else}
									{@const value = getColumnValue(row, column)}
									<td>
										{value === null ? 'N/A' : formatValue(value, column)}
									</td>
								{/if}
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<div class="progression__cards" aria-label={data.title}>
		{#each data.rows as row (row.level)}
			<details
				class="progression-card"
				class:progression-card--selected={selectedLevel === row.level}
			>
				<summary
					class="progression-card__summary"
					onclick={() => selectLevel(row.level)}
				>
					<span class="progression-card__level">
						<span>Level</span>
						<strong>{row.level}</strong>
					</span>

					<span class="progression-card__preview">
						<strong>{getFeatureCountLabel(row)}</strong>
						<span>{getFeaturePreview(row)}</span>
					</span>

					<span class="progression-card__bonus">
						{formatSigned(row.proficiencyBonus)}
						<span>
							{#if proficiencyBonusColumn}
								{@render renderColumnLabel(proficiencyBonusColumn, proficiencyBonusColumn.shortLabel ?? proficiencyBonusColumn.label)}
							{:else}
								PB
							{/if}
						</span>
					</span>

					<span class="progression-card__chevron" aria-hidden="true"></span>
				</summary>

				<dl class="progression-card__details">
					{#each getDetailColumns() as column}
						<div>
							<dt>
								{@render renderColumnLabel(column, column.shortLabel ?? column.label)}
							</dt>

							<dd>
								{#if column.key === 'features'}
									{@render renderFeatureList(row)}
								{:else}
									{@const value = getColumnValue(row, column)}
									{value === null ? 'N/A' : formatValue(value, column)}
								{/if}
							</dd>
						</div>
					{/each}
				</dl>
			</details>
		{/each}
	</div>
</section>
