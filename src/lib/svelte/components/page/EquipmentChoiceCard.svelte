<!--
	Location: src/lib/svelte/components/page/EquipmentChoiceCard.svelte
	Use: Displays one informational starting-equipment group.
-->
<script lang="ts">
	import type { EquipmentChoiceGroup } from '$lib/typescript/data/_index_';

	import InlineContent from './InlineContent.svelte';

	let { group }: { group: EquipmentChoiceGroup } = $props();
</script>

<article class="equipment-card">
	<header>
		<h3>{group.label}</h3>

		{#if group.instruction}
			<p>{group.instruction}</p>
		{/if}
	</header>

	{#if group.choices?.length}
		<p class="equipment-card__sentence">
			{#each group.choices as choice, index}
				<InlineContent content={choice} />

				{#if index < group.choices.length - 1}
					<span class="equipment-card__separator">
						or
					</span>
				{/if}
			{/each}
			.
		</p>
	{/if}

	{#if group.items?.length}
		<ul class="equipment-card__list">
			{#each group.items as item}
				<li>
					<InlineContent content={item} />
				</li>
			{/each}
		</ul>
	{/if}
</article>
