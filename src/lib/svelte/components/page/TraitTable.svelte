<!--
	Location: src/lib/svelte/components/page/TraitTable.svelte
	Use: Generic semantic table for page trait rows.
-->
<script lang="ts">
	import type {
		TraitTableColumnLabels,
		TraitTableRow
	} from '$lib/typescript/data/_index_';

	import InlineContent from './InlineContent.svelte';

	let {
		caption,
		columns,
		rows,
		showCaption = false
	}: {
		caption: string;
		columns?: TraitTableColumnLabels;
		rows: readonly TraitTableRow[];
		showCaption?: boolean;
	} = $props();
</script>

<table class="trait-table">
	<caption class={showCaption ? 'trait-table__caption--visible' : undefined}>
		{caption}
	</caption>

	{#if columns}
		<thead>
			<tr>
				<th scope="col">{columns.label}</th>
				<th scope="col">{columns.value}</th>
			</tr>
		</thead>
	{/if}

	<tbody>
		{#each rows as row}
			<tr>
				<th scope="row">
					{#if row.labelContent}
						<InlineContent content={row.labelContent} />
					{:else}
						{row.label}
					{/if}
				</th>
				<td>
					<InlineContent content={row.value} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>
