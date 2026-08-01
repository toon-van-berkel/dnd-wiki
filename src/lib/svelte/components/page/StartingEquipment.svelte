<!--
	Location: src/lib/svelte/components/page/StartingEquipment.svelte
	Use: Renders responsive starting-equipment cards.
-->
<script lang="ts">
	import type {
		EquipmentChoiceGroup,
		PageSection
	} from '$lib/typescript/data/_index_';

	import EquipmentChoiceCard from './EquipmentChoiceCard.svelte';

	let {
		groups,
		section = {
			id: 'starting-equipment',
			title: 'Starting Equipment'
		}
	}: {
		groups: readonly EquipmentChoiceGroup[];
		section?: PageSection;
	} = $props();
</script>

<section class="starting-equipment" id={section.id} aria-labelledby={`${section.id}-title`}>
	<h2 id={`${section.id}-title`}>{section.title}</h2>

	<div class="starting-equipment__grid">
		{#each groups as group}
			<EquipmentChoiceCard {group} />
		{/each}
	</div>
</section>
