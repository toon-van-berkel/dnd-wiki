<!--
	Location: src/lib/svelte/components/page/TraitTable.svelte
	Use: Generic semantic table for page trait rows.
-->
<script lang="ts">
	import type { TraitTableRow } from '$lib/typescript/data/_index_';

	import InlineContent from './InlineContent.svelte';

	let {
		caption,
		rows
	}: {
		caption: string;
		rows: readonly TraitTableRow[];
	} = $props();
</script>

<table class="trait-table">
	<caption>{caption}</caption>

	<tbody>
		{#each rows as row}
			<tr>
				<th scope="row">{row.label}</th>
				<td>
					<InlineContent content={row.value} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>
