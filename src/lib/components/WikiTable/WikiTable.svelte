<script lang="ts">
	type Props = {
		caption?: string;
		columns: readonly string[];
		rows: readonly (readonly string[])[];
	};

	let { caption, columns, rows }: Props = $props();
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
			{#each rows as row}
				<tr>
					{#each row as cell}
						<td>{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	@use './WikiTable.scss';
</style>
