<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { resolveAppPath } from '$lib/utils/paths';
	import {
		getTechniqueCategoryLabel,
		getTechniqueHref,
		getTechniqueRankLabel,
		getTechniqueSourceLabel,
		techniques,
		type Technique,
		type TechniqueCategory,
		type TechniqueRank,
		type TechniqueSource
	} from '$lib/data/techniques';

	type RankFilter = TechniqueRank | 'all' | 'restricted';
	type CategoryFilter = TechniqueCategory | 'all';
	type SourceFilter = TechniqueSource | 'all';
	type HeritageFilter = string | 'all';

	const rankOrder: readonly TechniqueRank[] = ['I', 'II', 'III', 'IV', 'V'];
	const categoryOrder: readonly TechniqueCategory[] = ['universal', 'nature', 'heritage', 'path'];
	const sourceOrder: readonly TechniqueSource[] = ['shinobi'];

	const rankFilters = $derived([
		{ value: 'all' as const, label: 'All' },
		...rankOrder
			.filter((rank) => techniques.some((technique) => technique.rank === rank))
			.map((rank) => ({ value: rank, label: getTechniqueRankLabel(rank) })),
		...(techniques.some((technique) => technique.restricted)
			? [{ value: 'restricted' as const, label: 'Restricted' }]
			: [])
	]);

	const categoryFilters = $derived([
		{ value: 'all' as const, label: 'All Types' },
		...categoryOrder
			.filter((category) => techniques.some((technique) => technique.category === category))
			.map((category) => ({ value: category, label: getTechniqueCategoryLabel(category) }))
	]);

	const sourceFilters = $derived([
		{ value: 'all' as const, label: 'All Sources' },
		...sourceOrder
			.filter((source) => techniques.some((technique) => technique.source === source))
			.map((source) => ({ value: source, label: getTechniqueSourceLabel(source) }))
	]);

	const heritageFilters = $derived([
		{ value: 'all' as const, label: 'All Heritages' },
		...Array.from(
			new Set(
				techniques
					.map((technique) => technique.heritage)
					.filter((heritage): heritage is string => Boolean(heritage))
			)
		)
			.sort((first, second) => first.localeCompare(second))
			.map((heritage) => ({ value: heritage, label: heritage }))
	]);

	const hasHeritageFilters = $derived(heritageFilters.length > 1);

	let selectedRank = $state<RankFilter>('all');
	let selectedCategory = $state<CategoryFilter>('all');
	let selectedSource = $state<SourceFilter>('all');
	let selectedHeritage = $state<HeritageFilter>('all');

	const filteredTechniques = $derived(
		techniques.filter((technique) => {
			const matchesRank =
				selectedRank === 'all' ||
				(selectedRank === 'restricted' ? technique.restricted : technique.rank === selectedRank);
			const matchesCategory = selectedCategory === 'all' || technique.category === selectedCategory;
			const matchesSource = selectedSource === 'all' || technique.source === selectedSource;
			const matchesHeritage = selectedHeritage === 'all' || technique.heritage === selectedHeritage;

			return matchesRank && matchesCategory && matchesSource && matchesHeritage;
		})
	);

	function metadata(technique: Technique) {
		const rows: [string, string][] = [
			['Rank', getTechniqueRankLabel(technique.rank)],
			['Type', getTechniqueCategoryLabel(technique.category)],
			['Source', getTechniqueSourceLabel(technique.source)],
			['Chakra Cost', technique.chakraCost],
			['Activation', technique.activation],
			['Range', technique.range],
			['Duration', technique.duration]
		];

		if (technique.requirements) {
			rows.push(['Requirement', technique.requirements]);
		}

		if (technique.heritage) {
			rows.push(['Heritage', technique.heritage]);
		}

		return rows;
	}
</script>

<PageSection>
	<p>
		Techniques are specialized supernatural abilities learned through class training, inherited powers or focused disciplines.
	</p>
	<p>
		Each technique has a rank, type, resource cost, activation time, range and duration. Select a technique to open its complete rules page.
	</p>
</PageSection>

<PageSection title="Technique Reference">
	<div class="technique-filters" aria-label="Filter techniques">
		<div>
			<span>Rank</span>
			<div class="technique-filter-set">
				{#each rankFilters as filter}
					<button
						type="button"
						class:technique-filter--active={selectedRank === filter.value}
						aria-pressed={selectedRank === filter.value}
						onclick={() => (selectedRank = filter.value)}
					>
						{filter.label}
					</button>
				{/each}
			</div>
		</div>

		<div>
			<span>Type</span>
			<div class="technique-filter-set">
				{#each categoryFilters as filter}
					<button
						type="button"
						class:technique-filter--active={selectedCategory === filter.value}
						aria-pressed={selectedCategory === filter.value}
						onclick={() => (selectedCategory = filter.value)}
					>
						{filter.label}
					</button>
				{/each}
			</div>
		</div>

		<div>
			<span>Source</span>
			<div class="technique-filter-set">
				{#each sourceFilters as filter}
					<button
						type="button"
						class:technique-filter--active={selectedSource === filter.value}
						aria-pressed={selectedSource === filter.value}
						onclick={() => (selectedSource = filter.value)}
					>
						{filter.label}
					</button>
				{/each}
			</div>
		</div>

		{#if hasHeritageFilters}
			<div>
				<span>Heritage</span>
				<div class="technique-filter-set">
					{#each heritageFilters as filter}
						<button
							type="button"
							class:technique-filter--active={selectedHeritage === filter.value}
							aria-pressed={selectedHeritage === filter.value}
							onclick={() => (selectedHeritage = filter.value)}
						>
							{filter.label}
						</button>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<p class="technique-result-count" aria-live="polite">
		Showing <strong>{filteredTechniques.length}</strong>
		{filteredTechniques.length === 1 ? 'technique' : 'techniques'}.
	</p>

	<div class="technique-table">
		<table>
			<caption>Techniques</caption>
			<thead>
				<tr>
					<th scope="col">Technique Name</th>
					<th scope="col">Rank</th>
					<th scope="col">Type</th>
					<th scope="col">Source</th>
					<th scope="col">Chakra Cost</th>
					<th scope="col">Activation</th>
					<th scope="col">Range</th>
					<th scope="col">Duration</th>
				</tr>
			</thead>
			<tbody>
				{#each filteredTechniques as technique}
					<tr>
						<th scope="row">
							<a href={resolveAppPath(getTechniqueHref(technique))}>{technique.name}</a>
						</th>
						<td>{getTechniqueRankLabel(technique.rank)}</td>
						<td>{getTechniqueCategoryLabel(technique.category)}</td>
						<td>{getTechniqueSourceLabel(technique.source)}</td>
						<td>{technique.chakraCost}</td>
						<td>{technique.activation}</td>
						<td>{technique.range}</td>
						<td>{technique.duration}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="technique-cards">
		{#each filteredTechniques as technique}
			<article class="technique-card">
				<h3>
					<a href={resolveAppPath(getTechniqueHref(technique))}>{technique.name}</a>
				</h3>
				<dl>
					{#each metadata(technique) as [label, value]}
						<div>
							<dt>{label}</dt>
							<dd>{value}</dd>
						</div>
					{/each}
				</dl>
			</article>
		{/each}
	</div>
</PageSection>

<style lang="scss">
	@use './techniques.scss';
</style>
