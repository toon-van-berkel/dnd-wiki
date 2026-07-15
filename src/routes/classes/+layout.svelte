<script lang="ts">
	import type { Snippet } from 'svelte';
    import AvailabilityBadges from "$lib/components/AvailabilityBadges.svelte";
    import PageHeader from '$lib/components/PageHeader.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<PageHeader/>

<AvailabilityBadges/>

{@render children()}
