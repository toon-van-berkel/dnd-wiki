<!--
	Location: src/lib/svelte/components/page/CommunityBadge.svelte
	Use: Shared metadata badge for community pages.
-->
<script lang="ts">
	import type { CommunityMetadata } from '$lib/typescript/data/_index_';

	let {
		value,
		metadata,
		tone = 'default'
	}: {
		value: string;
		metadata?: CommunityMetadata;
		tone?: 'default' | 'muted' | 'strong' | 'warning' | 'done';
	} = $props();
</script>

<span
	class="community-badge community-badge--{tone}"
	title={metadata?.description}
>
	{metadata?.label ?? value}
</span>
