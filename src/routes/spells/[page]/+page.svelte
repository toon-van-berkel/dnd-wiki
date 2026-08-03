<!--
	Location: src/routes/spells/[page]/+page.svelte
	Use: Spell level, spellcasting overview, and spell detail pages.
-->
<script lang="ts">
	import { page as appPage } from '$app/state';
	import {
		getSpellBySlug,
		spellLevels,
		type SpellLevel
	} from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';

	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import SpellBrowser from '$lib/svelte/components/page/SpellBrowser.svelte';

	const slug = $derived(appPage.params.page ?? '');
	const level = $derived(spellLevels.find((item) => item.slug === slug));
	const spell = $derived(getSpellBySlug(slug));
	const isSpellcastingOverview = $derived(slug === 'spellcasting');
</script>

{#if level}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />
			<SpellBrowser initialLevel={level.level as SpellLevel} showLevelFilter={false} />
		</article>
	</div>
{:else if isSpellcastingOverview}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			<section class="wiki-article__section" aria-labelledby="spellcasting-rules-title">
				<h2 id="spellcasting-rules-title">Spellcasting Rules</h2>

				<div class="wiki-article__cards">
					<PageCard page="internals.rules.spellcasting.page" density="compact" />
					<PageCard page="internals.rules.spellcasting.concentration" density="compact" />
					<PageCard page="internals.rules.spellcasting.cantrips" density="compact" />
				</div>
			</section>
		</article>
	</div>
{:else if spell}
	<article class="wiki-article spell-detail">
		<header class="spell-detail__header">
			<p>{spell.levelLabel} - {spell.school}</p>
			<h1>{spell.name}</h1>
		</header>

		<dl class="spell-detail__meta">
			<div>
				<dt>Casting Time</dt>
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
			<div>
				<dt>Classes</dt>
				<dd>{spell.classes.join(', ')}</dd>
			</div>
			<div>
				<dt>Flags</dt>
				<dd>{[spell.ritual ? 'Ritual' : '', spell.concentration ? 'Concentration' : ''].filter(Boolean).join(', ') || 'None'}</dd>
			</div>
		</dl>

		<section class="spell-detail__section" aria-labelledby="spell-text-title">
			<h2 id="spell-text-title">Spell Text</h2>

			{#each spell.description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</section>

		{#if spell.higherLevel.length}
			<section class="spell-detail__section" aria-labelledby="higher-levels-title">
				<h2 id="higher-levels-title">At Higher Levels</h2>

				{#each spell.higherLevel as paragraph}
					<p>{paragraph}</p>
				{/each}
			</section>
		{/if}

		{#if spell.tables.length}
			<section class="spell-detail__section" aria-labelledby="spell-tables-title">
				<h2 id="spell-tables-title">Tables</h2>

				<div class="spell-detail__tables">
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
			</section>
		{/if}
	</article>
{:else}
	<article class="wiki-article">
		<section class="wiki-article__section">
			<h1>Spell Not Found</h1>
			<p class="wiki-article__copy">No spell or spell list exists for this page.</p>
		</section>
	</article>
{/if}
