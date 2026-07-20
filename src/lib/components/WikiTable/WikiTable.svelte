<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		caption?: string;
		columns: readonly string[];
		rows?: readonly (readonly string[])[];
		body?: Snippet;
	};

	let { caption, columns, rows = [], body }: Props = $props();
</script>

<div class="wiki-table">
	<table aria-label={caption ? undefined : 'Wiki data'}>
		{#if caption}
			<caption>{caption}</caption>
		{/if}
		<thead>
			<tr>
				{#each columns as column}
					<th scope="col">{column}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#if body}
				{@render body()}
			{:else}
				{#each rows as row}
					<tr>
						{#each row as cell}
							<td>{cell}</td>
						{/each}
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>

<style lang="scss">
	@use './WikiTable.scss';
</style>
