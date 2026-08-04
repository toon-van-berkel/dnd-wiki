<!--
	Location: src/lib/svelte/components/page/CommunityLinks.svelte
	Use: Renders related internal data-path links and external URLs.
-->
<script lang="ts">
	import {
		type CommunityLink,
	} from '$lib/typescript/data/_index_';
	import { resolveLinkPath } from '$lib/typescript/pages/currentPage';

	import Link from '$lib/svelte/components/Link.svelte';

	let {
		links,
		label = 'Related links'
	}: {
		links: readonly CommunityLink[];
		label?: string;
	} = $props();

	function isExternalHref(href: string): boolean {
		return /^https?:\/\//.test(href) || href.startsWith('mailto:');
	}

</script>

{#if links.length}
	<nav class="community-links" aria-label={label}>
		{#each links as item}
			{@const path = resolveLinkPath(item.href)}
			{#if path}
				<Link goto={path} placeholder={item.label} popup="description" />
			{:else if item.href.startsWith('#') && links.length === 1}
				<a class="community-link" href={item.href}>{item.label}</a>
			{:else if item.href.startsWith('#')}
				<a class="community-link" href={item.href}>{item.label}</a>
			{:else if isExternalHref(item.href)}
				<a class="community-link" href={item.href} target="_blank" rel="noopener noreferrer">
					{item.label} &#8599;
				</a>
			{:else}
				<span class="community-link community-link--invalid" aria-label={`Unresolved link: ${item.href}`}>
					{item.label}
				</span>
			{/if}
		{/each}
	</nav>
{/if}
