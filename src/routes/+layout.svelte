<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/global.scss';
	import '$lib/styles/wiki-layout.scss';
	import WikiLayout from '$lib/components/WikiLayout.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#0b0d0c" />
</svelte:head>

<WikiLayout>
	{@render children()}
</WikiLayout>
