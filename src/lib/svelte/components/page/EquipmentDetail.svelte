<!--
	Location: src/lib/svelte/components/page/EquipmentDetail.svelte
	Use: Detailed equipment item pages.
-->
<script lang="ts">
	import type {
		EquipmentItem,
		EquipmentStatistic
	} from '$lib/typescript/data/internals/equipment-items';
	import type { InlineContent } from '$lib/typescript/data/_index_';

	import InlineContentRenderer from './InlineContent.svelte';
	import TraitTable from './TraitTable.svelte';

	let { item }: { item: EquipmentItem } = $props();

	function text(value: string): InlineContent {
		return [{ type: 'text', text: value }];
	}

	function joinInlineContent(values: readonly InlineContent[]): InlineContent {
		return values.flatMap((value, index) => [
			...(index > 0 ? text(', ') : []),
			...value
		]);
	}

	let primaryStats = $derived([
		{ label: 'Type', value: item.type },
		item.cost ? { label: 'Cost', value: item.cost } : null,
		item.weight ? { label: 'Weight', value: item.weight } : null,
		{ label: 'Source', value: item.source }
	].filter((stat): stat is { readonly label: string; readonly value: string } => stat !== null));

	let tableStats = $derived<readonly EquipmentStatistic[]>(item.statistics ?? [
		{ label: 'Name', value: text(item.name) },
		{ label: 'Type', value: text(item.type) },
		...(item.cost ? [{ label: 'Cost', value: text(item.cost) }] : []),
		...(item.damage ? [{ label: 'Damage', value: item.damage }] : []),
		...(item.weight ? [{ label: 'Weight', value: text(item.weight) }] : []),
		...(item.properties?.length
			? [{ label: 'Properties', value: joinInlineContent(item.properties) }]
			: []),
		{ label: 'Rarity', value: text(item.rarity) },
		{
			label: 'Attunement',
			value: text(item.attunement ? 'Requires attunement' : 'No attunement')
		},
		{ label: 'Source', value: text(item.source) }
	]);
</script>

<article class="wiki-article equipment-detail">
	<header class="equipment-detail__header">
		<div class="equipment-detail__intro">
			<p class="equipment-detail__eyebrow">Equipment Reference</p>
			<h1>{item.name}</h1>

			<dl class="equipment-detail__meta" aria-label={`${item.name} summary`}>
				{#each primaryStats as stat}
					<div>
						<dt>{stat.label}</dt>
						<dd>{stat.value}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<figure class="equipment-detail__media" aria-label={`${item.name} artwork`}>
			<img src={item.img.href} alt={item.img.alt} />
		</figure>
	</header>

	<section class="equipment-detail__section" aria-labelledby="equipment-description-title">
		<h2 id="equipment-description-title">What It Is</h2>
		<p><InlineContentRenderer content={item.description} /></p>
	</section>

	{#if item.mastery}
		<section class="equipment-detail__section" aria-labelledby="equipment-mastery-title">
			<h2 id="equipment-mastery-title">Weapon Mastery</h2>
			<p>
				<strong>{item.mastery.name}.</strong>
				<InlineContentRenderer content={item.mastery.description} />
			</p>
		</section>
	{/if}

	<section class="equipment-detail__section" aria-labelledby="equipment-statistics-title">
		<h2 id="equipment-statistics-title">Equipment Statistics</h2>

		<div class="table-scroller">
			<TraitTable
				caption={`${item.name} statistics`}
				columns={{ label: 'Property', value: 'Value' }}
				rows={tableStats}
			/>
		</div>
	</section>

	{#if item.tags.length}
		<section class="equipment-detail__section" aria-labelledby="equipment-tags-title">
			<h2 id="equipment-tags-title">Tags</h2>

			<ul class="equipment-detail__tags">
				{#each item.tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>
