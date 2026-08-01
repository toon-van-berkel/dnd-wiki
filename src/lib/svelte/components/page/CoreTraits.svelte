<!--
	Location: src/lib/svelte/components/page/CoreTraits.svelte
	Use: Renders core page traits and starting equipment.
-->
<script lang="ts">
	import type {
		CoreTraitsData,
		PageSection
	} from '$lib/typescript/data/_index_';

	import StartingEquipment from './StartingEquipment.svelte';
	import TraitTable from './TraitTable.svelte';

	let {
		traits,
		section = {
			id: 'core-traits',
			title: 'Core Traits'
		},
		startingEquipmentSection
	}: {
		traits: CoreTraitsData;
		section?: PageSection;
		startingEquipmentSection?: PageSection;
	} = $props();
</script>

<section class="core-traits" id={section.id} aria-labelledby={`${section.id}-title`}>
	<h2 id={`${section.id}-title`}>{section.title}</h2>

	<TraitTable
		caption={section.title}
		rows={traits.traits}
	/>

	<StartingEquipment
		groups={traits.startingEquipment}
		section={startingEquipmentSection}
	/>
</section>
