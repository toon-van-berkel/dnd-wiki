<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import RuleBlocks from '$lib/pages/RuleBlocks/RuleBlocks.svelte';
	import { resolveAppPath } from '$lib/utils/paths';
	import {
		getTechniqueCategoryLabel,
		getTechniqueRankLabel,
		getTechniqueSourceLabel
	} from '$lib/data/techniques';

	import type { Technique } from '$lib/data/techniques';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();

	const technique = $derived(data.technique);
	const metadata = $derived(getMetadata(technique));

	function getMetadata(technique: Technique): [string, string][] {
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

		if (technique.damageType) {
			rows.push(['Damage Type', technique.damageType]);
		}

		rows.push(['Concentration', technique.concentration ? 'Yes' : 'No']);

		if (technique.restricted) {
			rows.push(['Restricted', 'Yes']);
		}

		if (technique.restriction) {
			rows.push(['Restriction', technique.restriction]);
		}

		return rows;
	}
</script>

<PageSection title="Technique Rules">
	<dl class="technique-detail-meta">
		{#each metadata as [label, value]}
			<div>
				<dt>{label}</dt>
				<dd>{value}</dd>
			</div>
		{/each}
	</dl>

	<RuleBlocks blocks={technique.description} />
</PageSection>

{#if technique.augment}
	<PageSection title="Augment">
		<RuleBlocks blocks={technique.augment} />
	</PageSection>
{/if}

{#if technique.scaling}
	<PageSection title="Scaling">
		<RuleBlocks blocks={technique.scaling} />
	</PageSection>
{/if}

<PageSection title="Related Links">
	<ul>
		<li><a href={resolveAppPath('/classes/shinobi')}>Shinobi class</a></li>
		<li><a href={resolveAppPath('/spells-and-abilities/techniques')}>Techniques overview</a></li>
		{#if technique.path}
			<li>{technique.path}</li>
		{/if}
		{#if technique.nature}
			<li>{technique.nature}</li>
		{/if}
		{#if technique.heritage === 'Living Shadow'}
			<li><a href={resolveAppPath('/classes/shinobi/path-of-the-bloodline')}>Path of the Bloodline</a></li>
			<li><a href={resolveAppPath('/species/chakraborn')}>Chakraborn species</a></li>
		{:else if technique.heritage}
			<li>{technique.heritage}</li>
		{/if}
	</ul>
</PageSection>

<style lang="scss">
	@use './technique-detail.scss';
</style>
