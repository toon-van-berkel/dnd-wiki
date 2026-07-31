<!--
	Location: src/lib/svelte/components/page/StartingEquipment.svelte
	Use: Renders responsive starting-equipment cards.
-->
<script lang="ts">
	import type { EquipmentChoiceGroup } from '$lib/typescript/data/_index_';

	import EquipmentChoiceCard from './EquipmentChoiceCard.svelte';

	let { groups }: { groups: readonly EquipmentChoiceGroup[] } = $props();
</script>

<section class="starting-equipment" aria-labelledby="starting-equipment-title">
	<h2 id="starting-equipment-title">Starting Equipment</h2>

	<div class="starting-equipment__grid">
		{#each groups as group}
			<EquipmentChoiceCard {group} />
		{/each}
	</div>
</section>
