<!--
	Location: src/lib/svelte/components/page/InlineContent.svelte
	Use: Renders structured inline page content without raw HTML.
-->
<script lang="ts">
	import type { InlineContentNode } from '$lib/typescript/data/_index_';
	import {
		getPageLabel,
		resolveLinkPath
	} from '$lib/typescript/pages/currentPage';

	import Link from '$lib/svelte/components/Link.svelte';

	let { content }: { content: readonly InlineContentNode[] } = $props();
</script>

{#snippet renderNode(node: InlineContentNode)}
	{#if node.type === 'text'}
		{node.text}
	{:else if node.type === 'link'}
		{@const path = resolveLinkPath(node.path)}

		{#if path}
			<Link
				goto={path}
				placeholder={node.label ?? getPageLabel(path)}
				popup="full"
			/>
		{:else}
			{node.label ?? node.path}
		{/if}
	{:else if node.type === 'emphasis'}
		<em>
			{#each node.children as child}
				{@render renderNode(child)}
			{/each}
		</em>
	{:else if node.type === 'strong'}
		<strong>
			{#each node.children as child}
				{@render renderNode(child)}
			{/each}
		</strong>
	{/if}
{/snippet}

{#each content as node}
	{@render renderNode(node)}
{/each}
