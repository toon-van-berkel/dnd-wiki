<script lang="ts">
	import { page } from '$app/state';
	import { getPageAncestors, getPageEntry, type PageRegistryEntry } from '$lib/page/registry';
	import { resolveAppPath } from '$lib/utils/paths';

	let { pageEntry }: { pageEntry: PageRegistryEntry } = $props();

	const homeEntry = getPageEntry('home');
	const breadcrumbs = $derived(
		pageEntry.id === 'home'
			? [pageEntry]
			: [homeEntry, ...getPageAncestors(pageEntry), pageEntry].filter(
					(entry): entry is PageRegistryEntry => Boolean(entry)
				)
	);
	const canGoBack = $derived(breadcrumbs.length > 1);

	function breadcrumbLabel(breadcrumb: PageRegistryEntry) {
		return breadcrumb.id === 'home' ? 'Home' : breadcrumb.title;
	}

	function handleBack() {
		if (canGoBack && typeof history !== 'undefined' && history.length > 1) {
			history.back();
		}
	}
</script>

<div class="breadcrumbs">
	<button class="breadcrumbs-button" onclick={handleBack} disabled={!canGoBack}>
		Back
	</button>
	<span aria-hidden="true">|</span>

	<ul class="breadcrumbs__list">
		{#each breadcrumbs as breadcrumb}
			<li class="breadcrumbs__list-item_container">
				<a
					class="breadcrumbs__list-item"
					href={resolveAppPath(breadcrumb.href)}
					aria-current={breadcrumb.href === page.url.pathname ? 'page' : undefined}
				>
					{breadcrumbLabel(breadcrumb)}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use './Breadcrumbs.scss';
</style>
