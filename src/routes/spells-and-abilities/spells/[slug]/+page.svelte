<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { getSpellLevelLabel } from '$lib/data/spells';

	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();

	const spell = $derived(data.spell);
</script>

<PageSection title={`${getSpellLevelLabel(spell.level)} ${spell.school}`}>
	<dl>
		<div>
			<dt>Casting Time</dt>
			<dd>{spell.castingTime}</dd>
		</div>
		<div>
			<dt>Range</dt>
			<dd>{spell.range}</dd>
		</div>
		<div>
			<dt>Components</dt>
			<dd>{spell.components}</dd>
		</div>
		<div>
			<dt>Duration</dt>
			<dd>{spell.duration}</dd>
		</div>
		<div>
			<dt>Concentration</dt>
			<dd>{spell.concentration ? 'Yes' : 'No'}</dd>
		</div>
		<div>
			<dt>Ritual</dt>
			<dd>{spell.ritual ? 'Yes' : 'No'}</dd>
		</div>
		<div>
			<dt>Classes</dt>
			<dd>{spell.classes.join(', ')}</dd>
		</div>
		<div>
			<dt>Source</dt>
			<dd>{spell.source}</dd>
		</div>
	</dl>

	{#each spell.description as paragraph}
		<p>{paragraph}</p>
	{/each}
</PageSection>

{#if spell.higherLevels}
	<PageSection title="At Higher Levels">
		{#each spell.higherLevels as paragraph}
			<p>{paragraph}</p>
		{/each}
	</PageSection>
{/if}
