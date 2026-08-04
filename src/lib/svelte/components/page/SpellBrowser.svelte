<!--
	Location: src/lib/svelte/components/page/SpellBrowser.svelte
	Use: Filterable spell list and level-specific spell browser.
-->
<script lang="ts">
	import {
		spellClasses,
		spellLevels,
		spells,
		spellSchools,
		type SpellData,
		type SpellLevel
	} from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';

	type SpellViewMode = 'cards' | 'list' | 'table';

	const pageSize = 30;
	const viewModes = ['cards', 'list', 'table'] as const satisfies readonly SpellViewMode[];

	let {
		initialLevel = 'all',
		showLevelFilter = true
	}: {
		initialLevel?: SpellLevel | 'all';
		showLevelFilter?: boolean;
	} = $props();

	let searchTerm = $state('');
	let selectedLevel = $state('all');
	let selectedClass = $state('all');
	let selectedSchool = $state('all');
	let verbalOnly = $state(false);
	let somaticOnly = $state(false);
	let materialOnly = $state(false);
	let noMaterial = $state(false);
	let ritualOnly = $state(false);
	let concentrationOnly = $state(false);
	let viewMode = $state<SpellViewMode>('cards');
	let currentPage = $state(1);

	$effect(() => {
		if (!showLevelFilter) {
			selectedLevel = initialLevel === 'all' ? 'all' : String(initialLevel);
		}
	});

	function hasSelectedLevel(spell: SpellData) {
		return selectedLevel === 'all' || spell.level === Number(selectedLevel);
	}

	function hasSelectedClass(spell: SpellData) {
		return selectedClass === 'all' || spell.classes.includes(selectedClass);
	}

	function hasSelectedSchool(spell: SpellData) {
		return selectedSchool === 'all' || spell.school === selectedSchool;
	}

	function hasSelectedComponents(spell: SpellData) {
		return (
			(!verbalOnly || spell.components.verbal) &&
			(!somaticOnly || spell.components.somatic) &&
			(!materialOnly || spell.components.material) &&
			(!noMaterial || !spell.components.material)
		);
	}

	function matchesSearch(spell: SpellData) {
		const query = searchTerm.trim().toLowerCase();

		if (!query) {
			return true;
		}

		return [
			spell.name,
			spell.levelLabel,
			spell.school,
			spell.castingTime,
			spell.range,
			spell.duration,
			spell.components.raw,
			spell.components.materialText ?? '',
			spell.classes.join(' '),
			spell.description.join(' '),
			spell.higherLevel.join(' '),
			spell.tables.map((table) => [
				table.caption ?? '',
				table.headers.join(' '),
				table.rows.map((row) => row.join(' ')).join(' ')
			].join(' ')).join(' ')
		]
			.join(' ')
			.toLowerCase()
			.includes(query);
	}

	function getSpellHref(spell: SpellData) {
		return `/spells/${spell.slug}`;
	}

	function getSpellPreview(spell: SpellData) {
		return spell.description[0] ?? 'Open the spell page for the full spell text.';
	}

	function resetFilters() {
		searchTerm = '';
		selectedLevel = showLevelFilter
			? 'all'
			: initialLevel === 'all'
				? 'all'
				: String(initialLevel);
		selectedClass = 'all';
		selectedSchool = 'all';
		verbalOnly = false;
		somaticOnly = false;
		materialOnly = false;
		noMaterial = false;
		ritualOnly = false;
		concentrationOnly = false;
		currentPage = 1;
	}

	function setPage(page: number) {
		currentPage = Math.max(1, Math.min(page, pageCount));
	}

	let filterKey = $derived([
		searchTerm,
		selectedLevel,
		selectedClass,
		selectedSchool,
		verbalOnly,
		somaticOnly,
		materialOnly,
		noMaterial,
		ritualOnly,
		concentrationOnly
	].join('|'));

	$effect(() => {
		filterKey;
		currentPage = 1;
	});

	let visibleSpells = $derived(
		spells.filter((spell) => (
			hasSelectedLevel(spell) &&
			hasSelectedClass(spell) &&
			hasSelectedSchool(spell) &&
			hasSelectedComponents(spell) &&
			(!ritualOnly || spell.ritual) &&
			(!concentrationOnly || spell.concentration) &&
			matchesSearch(spell)
		))
	);
	let pageCount = $derived(Math.max(1, Math.ceil(visibleSpells.length / pageSize)));
	let firstResult = $derived(visibleSpells.length ? ((currentPage - 1) * pageSize) + 1 : 0);
	let lastResult = $derived(Math.min(currentPage * pageSize, visibleSpells.length));
	let pagedSpells = $derived(
		visibleSpells.slice((currentPage - 1) * pageSize, currentPage * pageSize)
	);
	let activeFilterCount = $derived([
		searchTerm.trim().length > 0,
		showLevelFilter && selectedLevel !== 'all',
		selectedClass !== 'all',
		selectedSchool !== 'all',
		verbalOnly,
		somaticOnly,
		materialOnly,
		noMaterial,
		ritualOnly,
		concentrationOnly
	].filter(Boolean).length);

	$effect(() => {
		if (currentPage > pageCount) {
			currentPage = pageCount;
		}
	});
</script>

{#snippet renderPagination()}
	{#if visibleSpells.length > pageSize}
		<nav class="spell-browser__pagination" aria-label="Spell pages">
			<p>Showing {firstResult}-{lastResult} of {visibleSpells.length}</p>

			<div>
				<button type="button" onclick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
					Previous
				</button>
				<span>Page {currentPage} of {pageCount}</span>
				<button type="button" onclick={() => setPage(currentPage + 1)} disabled={currentPage === pageCount}>
					Next
				</button>
			</div>
		</nav>
	{/if}
{/snippet}

{#snippet renderSpellMeta(spell: SpellData)}
	<dl class="spell-card__meta">
		<div>
			<dt>Casting</dt>
			<dd>{spell.castingTime}</dd>
		</div>

		<div>
			<dt>Range</dt>
			<dd>{spell.range}</dd>
		</div>

		<div>
			<dt>Duration</dt>
			<dd>{spell.duration}</dd>
		</div>

		<div>
			<dt>Components</dt>
			<dd>{spell.components.raw || 'None'}</dd>
		</div>
	</dl>
{/snippet}

<section class="spell-browser" aria-labelledby="spell-browser-title">
	<header class="spell-browser__header">
		<h2 id="spell-browser-title">Spells</h2>
		<p>{visibleSpells.length} spells</p>
	</header>

	<div class="spell-browser__toolbar" aria-label="Spell filters">
		<div class="spell-browser__primary-filters">
			<label
				class="spell-browser__filter spell-browser__filter--search"
				class:spell-browser__filter--active={searchTerm.trim().length > 0}
			>
				<span>Search</span>
				<input
					id="spell-search"
					name="spell-search"
					type="search"
					bind:value={searchTerm}
					placeholder="Name, range, component..."
				/>
			</label>

			{#if showLevelFilter}
				<label
					class="spell-browser__filter"
					class:spell-browser__filter--active={selectedLevel !== 'all'}
				>
					<span>Level</span>
					<select id="spell-level-filter" name="spell-level" bind:value={selectedLevel}>
						<option value="all">All levels</option>
						{#each spellLevels as level}
							<option value={String(level.level)}>{level.label}</option>
						{/each}
					</select>
				</label>
			{/if}

			<label
				class="spell-browser__filter"
				class:spell-browser__filter--active={selectedClass !== 'all'}
			>
				<span>Class</span>
				<select id="spell-class-filter" name="spell-class" bind:value={selectedClass}>
					<option value="all">All casters</option>
					{#each spellClasses as spellClass}
						<option value={spellClass}>{spellClass}</option>
					{/each}
				</select>
			</label>

			<label
				class="spell-browser__filter"
				class:spell-browser__filter--active={selectedSchool !== 'all'}
			>
				<span>School</span>
				<select id="spell-school-filter" name="spell-school" bind:value={selectedSchool}>
					<option value="all">All schools</option>
					{#each spellSchools as school}
						<option value={school}>{school}</option>
					{/each}
				</select>
			</label>
		</div>

		<div class="spell-browser__secondary-filters">
			<fieldset class="spell-browser__toggle-group">
				<legend>Components</legend>

				<label class:spell-browser__toggle--active={verbalOnly}>
					<input name="spell-component-verbal" type="checkbox" bind:checked={verbalOnly} />
					<span>V</span>
				</label>

				<label class:spell-browser__toggle--active={somaticOnly}>
					<input name="spell-component-somatic" type="checkbox" bind:checked={somaticOnly} />
					<span>S</span>
				</label>

				<label class:spell-browser__toggle--active={materialOnly}>
					<input name="spell-component-material" type="checkbox" bind:checked={materialOnly} />
					<span>M</span>
				</label>

				<label class:spell-browser__toggle--active={noMaterial}>
					<input name="spell-component-no-material" type="checkbox" bind:checked={noMaterial} />
					<span>No M</span>
				</label>
			</fieldset>

			<fieldset class="spell-browser__toggle-group">
				<legend>Flags</legend>

				<label class:spell-browser__toggle--active={ritualOnly}>
					<input name="spell-flag-ritual" type="checkbox" bind:checked={ritualOnly} />
					<span>Ritual</span>
				</label>

				<label class:spell-browser__toggle--active={concentrationOnly}>
					<input name="spell-flag-concentration" type="checkbox" bind:checked={concentrationOnly} />
					<span>Concentration</span>
				</label>
			</fieldset>

			<fieldset class="spell-browser__toggle-group spell-browser__view-toggle">
				<legend>View</legend>

				{#each viewModes as mode}
					<label class:spell-browser__toggle--active={viewMode === mode}>
						<input name="spell-view-mode" type="radio" bind:group={viewMode} value={mode} />
						<span>{mode}</span>
					</label>
				{/each}
			</fieldset>

			{#if activeFilterCount > 0}
				<div class="spell-browser__filter-summary" role="status">
					<span>{activeFilterCount} filter{activeFilterCount === 1 ? '' : 's'} active</span>
					<button type="button" onclick={resetFilters}>Reset</button>
				</div>
			{/if}
		</div>
	</div>

	{@render renderPagination()}

	{#if viewMode === 'cards'}
		<div class="spell-browser__grid">
			{#each pagedSpells as spell}
				<a class="spell-card" id={spell.slug} href={getSpellHref(spell)}>
					<header class="spell-card__header">
						<p>{spell.levelLabel} - {spell.school}</p>
						<h3>{spell.name}</h3>
					</header>

					{@render renderSpellMeta(spell)}

					<ul class="spell-card__tags">
						{#if spell.ritual}
							<li>Ritual</li>
						{/if}
						{#if spell.concentration}
							<li>Concentration</li>
						{/if}
						{#each spell.classes as spellClass}
							<li>{spellClass}</li>
						{/each}
					</ul>

					<div class="spell-card__description">
						<p>{getSpellPreview(spell)}</p>
					</div>
				</a>
			{/each}
		</div>
	{:else if viewMode === 'list'}
		<ul class="spell-browser__list">
			{#each pagedSpells as spell}
				<li>
					<a class="spell-list-item" href={getSpellHref(spell)}>
						<header>
							<p>{spell.levelLabel} - {spell.school}</p>
							<h3>{spell.name}</h3>
						</header>

						<p>{getSpellPreview(spell)}</p>

						<span>{spell.castingTime} | {spell.range} | {spell.components.raw || 'None'}</span>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="spell-browser__table-wrap">
			<table class="spell-browser__table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Level</th>
						<th>School</th>
						<th>Casting</th>
						<th>Range</th>
						<th>Components</th>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					{#each pagedSpells as spell}
						<tr>
							<th><a href={getSpellHref(spell)}>{spell.name}</a></th>
							<td>{spell.levelLabel}</td>
							<td>{spell.school}</td>
							<td>{spell.castingTime}</td>
							<td>{spell.range}</td>
							<td>{spell.components.raw || 'None'}</td>
							<td>{spell.classes.join(', ')}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}

	{@render renderPagination()}
</section>
