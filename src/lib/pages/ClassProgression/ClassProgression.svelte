<!-- site\src\lib\pages\ClassProgression\ClassProgression.svelte -->
<script lang="ts">
	import type {
		ClassProgressionRow,
		Props
	} from './ClassProgression-Types';

	let {
		caption,
		description,
		metrics,
		rows,
		defaultOpenLevels = [1]
	}: Props = $props();

	function formatLevel(level: number): string {
		const remainder100 = level % 100;

		if (remainder100 >= 11 && remainder100 <= 13) {
			return `${level}th`;
		}

		switch (level % 10) {
			case 1:
				return `${level}st`;
			case 2:
				return `${level}nd`;
			case 3:
				return `${level}rd`;
			default:
				return `${level}th`;
		}
	}

	function getMetricValue(
		row: ClassProgressionRow,
		key: string
	): string | number {
		return row.values[key] ?? '—';
	}
</script>

<div class="class-progression">
	{#if description}
		<p class="class-progression__description">
			{description}
		</p>
	{/if}

	<div class="class-progression__desktop">
		<div class="class-progression__table">
			<table>
				<caption>
					{caption}
				</caption>

				<thead>
					<tr>
						<th scope="col">Level</th>
						<th scope="col">Proficiency bonus</th>
						<th scope="col">Features</th>

						{#each metrics as metric}
							<th scope="col">
								{metric.label}
							</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each rows as row}
						<tr>
							<th scope="row">
								{formatLevel(row.level)}
							</th>

							<td class="class-progression__centered-cell">
								+{row.proficiencyBonus}
							</td>

							<td>
								<ul class="class-progression__feature-list">
									{#each row.features as feature}
										<li>
											{#if feature.href}
												<a href={feature.href}>
													{feature.label}
												</a>
											{:else}
												<span>{feature.label}</span>
											{/if}

											{#if feature.optional}
												<span class="class-progression__optional">
													Optional
												</span>
											{/if}
										</li>
									{/each}
								</ul>
							</td>

							{#each metrics as metric}
								<td class="class-progression__centered-cell">
									{getMetricValue(row, metric.key)}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<div
		class="class-progression__mobile"
		aria-label={caption}
	>
		{#each rows as row}
			<details
				class="class-progression__level"
				open={defaultOpenLevels.includes(row.level)}
			>
				<summary class="class-progression__summary">
					<span class="class-progression__level-number">
						<span>Level</span>
						<strong>{row.level}</strong>
					</span>

					<span class="class-progression__summary-content">
						<strong>
							{row.features[0]?.label ?? 'No new feature'}
						</strong>

						{#if row.features.length > 1}
							<span>
								+{row.features.length - 1}
								{row.features.length === 2 ? ' more feature' : ' more features'}
							</span>
						{/if}
					</span>

					<span
						class="class-progression__summary-proficiency"
						aria-label={`Proficiency bonus +${row.proficiencyBonus}`}
					>
						+{row.proficiencyBonus} PB
					</span>

					<span
						class="class-progression__chevron"
						aria-hidden="true"
					></span>
				</summary>

				<div class="class-progression__level-content">
					<dl class="class-progression__facts">
						<div class="class-progression__fact">
							<dt>Proficiency bonus</dt>
							<dd>+{row.proficiencyBonus}</dd>
						</div>

						{#each metrics as metric}
							<div class="class-progression__fact">
								<dt>{metric.shortLabel ?? metric.label}</dt>
								<dd>{getMetricValue(row, metric.key)}</dd>
							</div>
						{/each}
					</dl>

					<div class="class-progression__mobile-features">
						<h3>
							Features gained at level {row.level}
						</h3>

						<ul>
							{#each row.features as feature}
								<li>
									<span
										class="class-progression__feature-marker"
										aria-hidden="true"
									></span>

									<div class="class-progression__feature-content">
										{#if feature.href}
											<a href={feature.href}>
												{feature.label}
											</a>
										{:else}
											<span class="class-progression__feature-name">
												{feature.label}
											</span>
										{/if}
									</div>

									{#if feature.optional}
										<span class="class-progression__optional">
											Optional
										</span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</details>
		{/each}
	</div>
</div>

<style lang="scss">
	@use './ClassProgression.scss';
</style>