<script lang="ts">
	import type { RuleBlock } from './types';

	type Props = {
		blocks: readonly RuleBlock[];
	};

	let { blocks }: Props = $props();
</script>

{#each blocks as block}
	{#if block.kind === 'paragraph'}
		<p>{block.text}</p>
	{:else}
		<ul>
			{#each block.items as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/if}
{/each}
