<!--
	Location: src/lib/svelte/components/page/StartingEquipment.svelte
	Use: Renders responsive starting-equipment cards.
-->
<script lang="ts">
	import type {
		EquipmentChoiceGroup,
		InlineContent,
		PageSection
	} from '$lib/typescript/data/_index_';

	import EquipmentChoiceCard from './EquipmentChoiceCard.svelte';
	import InlineContentRenderer from './InlineContent.svelte';

	let {
		groups,
		intro,
		section = {
			id: 'starting-equipment',
			title: 'Starting Equipment'
		},
		headingLevel = 'section'
	}: {
		groups: readonly EquipmentChoiceGroup[];
		intro?: InlineContent;
		section?: PageSection;
		headingLevel?: 'section' | 'subsection';
	} = $props();
</script>

<section
	class="starting-equipment"
	class:starting-equipment--subsection={headingLevel === 'subsection'}
	id={section.id}
	aria-labelledby={`${section.id}-title`}
>
	{#if headingLevel === 'subsection'}
		<h3 id={`${section.id}-title`}>{section.title}</h3>
	{:else}
		<h2 id={`${section.id}-title`}>{section.title}</h2>
	{/if}

	{#if intro}
		<p class="starting-equipment__intro">
			<InlineContentRenderer content={intro} />
		</p>
	{/if}

	<div class="starting-equipment__grid">
		{#each groups as group}
			<EquipmentChoiceCard {group} />
		{/each}
	</div>
</section>
