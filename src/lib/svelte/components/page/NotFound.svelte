<!--
	Location: src/lib/svelte/components/page/NotFound.svelte
	Use: Shared not-found state for router errors and data-driven catch-all routes.
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { getCanonicalInternalHref } from '$lib/typescript/pages/currentPage';
	import { searchWiki } from '$lib/typescript/pages/search';

	function getSearchQuery(pathname: string): string {
		return pathname
			.split('/')
			.filter(Boolean)
			.at(-1)
			?.replace(/-/g, ' ')
			.trim() ?? '';
	}

	function getInternalHref(href: string): string {
		return getCanonicalInternalHref(href, base);
	}

	let query = $derived(getSearchQuery(page.url.pathname));
	let searchHref = $derived(getInternalHref(`/search/?q=${encodeURIComponent(query)}`));
	let suggestions = $derived(query ? searchWiki(query).slice(0, 5) : []);
</script>

<svelte:head>
	<title>Page Not Found - D&D Portal Wiki</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="not-found" aria-labelledby="not-found-title">
	<p class="not-found__eyebrow">Page Not Found</p>

	<h1 id="not-found-title" class="not-found__code" aria-label="404">
		<span>4</span>
		<span class="not-found__zero" aria-hidden="true">
			<img src="/branding/dnd-portal-icon.svg" alt="" />
		</span>
		<span>4</span>
	</h1>

	<p class="not-found__message">
		We are sorry, but this page doesn't exist.
	</p>

	{#if suggestions.length}
		<section class="not-found__suggestions" aria-labelledby="not-found-suggestions-title">
			<h2 id="not-found-suggestions-title">Did you mean</h2>

			<ul>
				{#each suggestions as suggestion}
					<li>
						<a href={getInternalHref(suggestion.href)}>
							<span>{suggestion.title}</span>
							<small>{suggestion.subtitle}</small>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<div class="not-found__actions">
		<a href={searchHref}>Continue searching</a>
		<a href={getInternalHref('/')}>Go to homepage</a>
	</div>
</section>
