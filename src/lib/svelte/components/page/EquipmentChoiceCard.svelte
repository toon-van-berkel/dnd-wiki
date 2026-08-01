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
		{#if group.instruction}
			<p class="equipment-card__eyebrow">{group.instruction}</p>
		{/if}

		<h3>{group.label}</h3>
	</header>

	{#if group.choices?.length}
		<p class="equipment-card__sentence">
			{#each group.choices as choice, index}
				<span class="equipment-card__choice">
					<InlineContent content={choice} />
				</span>

				{#if index < group.choices.length - 1}
					<span class="equipment-card__separator">
						or
					</span>
				{:else}
					<span>.</span>
				{/if}
			{/each}
		</p>
	{/if}

	{#if group.items?.length}
		<p class="equipment-card__sentence">
			{#each group.items as item, index}
				<span class="equipment-card__choice">
					<InlineContent content={item} />
				</span>

				{#if index < group.items.length - 1}
					<span>, </span>
				{:else}
					<span>.</span>
				{/if}
			{/each}
		</p>
	{/if}
</article>
