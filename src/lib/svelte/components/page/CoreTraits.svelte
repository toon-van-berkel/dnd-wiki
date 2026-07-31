<!--
	Location: src/lib/svelte/components/page/CoreTraits.svelte
	Use: Renders core page traits and starting equipment.
-->
<script lang="ts">
	import type { CoreTraitsData } from '$lib/typescript/data/_index_';

	import StartingEquipment from './StartingEquipment.svelte';
	import TraitTable from './TraitTable.svelte';

	let { traits }: { traits: CoreTraitsData } = $props();
</script>

<section class="core-traits" aria-labelledby="core-traits-title">
	<h2 id="core-traits-title">Core Barbarian Traits</h2>

	<TraitTable
		caption="Core Barbarian Traits"
		rows={traits.traits}
	/>

	<StartingEquipment groups={traits.startingEquipment} />
</section>
