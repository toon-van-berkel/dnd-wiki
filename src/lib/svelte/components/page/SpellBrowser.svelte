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
</script>

<section class="spell-browser" aria-labelledby="spell-browser-title">
	<header class="spell-browser__header">
		<h2 id="spell-browser-title">Spells</h2>
		<p>{visibleSpells.length} spells</p>
	</header>

	<div class="spell-browser__toolbar" aria-label="Spell filters">
		<div class="spell-browser__primary-filters">
			<label class="spell-browser__filter spell-browser__filter--search">
				<span>Search</span>
				<input
					type="search"
					bind:value={searchTerm}
					placeholder="Name, range, component..."
				/>
			</label>

			{#if showLevelFilter}
				<label class="spell-browser__filter">
					<span>Level</span>
					<select bind:value={selectedLevel}>
						<option value="all">All levels</option>
						{#each spellLevels as level}
							<option value={String(level.level)}>{level.label}</option>
						{/each}
					</select>
				</label>
			{/if}

			<label class="spell-browser__filter">
				<span>Class</span>
				<select bind:value={selectedClass}>
					<option value="all">All casters</option>
					{#each spellClasses as spellClass}
						<option value={spellClass}>{spellClass}</option>
					{/each}
				</select>
			</label>

			<label class="spell-browser__filter">
				<span>School</span>
				<select bind:value={selectedSchool}>
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
					<input type="checkbox" bind:checked={verbalOnly} />
					<span>V</span>
				</label>

				<label class:spell-browser__toggle--active={somaticOnly}>
					<input type="checkbox" bind:checked={somaticOnly} />
					<span>S</span>
				</label>

				<label class:spell-browser__toggle--active={materialOnly}>
					<input type="checkbox" bind:checked={materialOnly} />
					<span>M</span>
				</label>

				<label class:spell-browser__toggle--active={noMaterial}>
					<input type="checkbox" bind:checked={noMaterial} />
					<span>No M</span>
				</label>
			</fieldset>

			<fieldset class="spell-browser__toggle-group">
				<legend>Flags</legend>

				<label class:spell-browser__toggle--active={ritualOnly}>
					<input type="checkbox" bind:checked={ritualOnly} />
					<span>Ritual</span>
				</label>

				<label class:spell-browser__toggle--active={concentrationOnly}>
					<input type="checkbox" bind:checked={concentrationOnly} />
					<span>Concentration</span>
				</label>
			</fieldset>
		</div>
	</div>

	<div class="spell-browser__grid">
		{#each visibleSpells as spell}
			<article class="spell-card" id={spell.slug}>
				<header class="spell-card__header">
					<p>{spell.levelLabel} - {spell.school}</p>
					<h3>{spell.name}</h3>
				</header>

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

				{#if spell.components.materialText}
					<p class="spell-card__material">{spell.components.materialText}</p>
				{/if}

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

				{#if spell.description.length}
					<div class="spell-card__description">
						<p>{spell.description[0]}</p>

						{#if spell.description.length > 1 || spell.higherLevel.length || spell.tables.length}
							<details>
								<summary>Full spell text</summary>

								{#each spell.description.slice(1) as paragraph}
									<p>{paragraph}</p>
								{/each}

								{#if spell.higherLevel.length}
									<h4>At Higher Levels</h4>
									{#each spell.higherLevel as paragraph}
										<p>{paragraph}</p>
									{/each}
								{/if}

								{#if spell.tables.length}
									<div class="spell-card__tables">
										{#each spell.tables as table}
											<table>
												{#if table.caption}
													<caption>{table.caption}</caption>
												{/if}

												{#if table.headers.length}
													<thead>
														<tr>
															{#each table.headers as header}
																<th>{header}</th>
															{/each}
														</tr>
													</thead>
												{/if}

												<tbody>
													{#each table.rows as row}
														<tr>
															{#each row as cell}
																<td>{cell}</td>
															{/each}
														</tr>
													{/each}
												</tbody>
											</table>
										{/each}
									</div>
								{/if}
							</details>
						{/if}
					</div>
				{/if}
			</article>
		{/each}
	</div>
</section>
