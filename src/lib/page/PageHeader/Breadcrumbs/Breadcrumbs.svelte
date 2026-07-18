<script lang="ts">
	import { page } from '$app/state';
	import { getPageAncestors, type PageRegistryEntry } from '$lib/page/registry';
	import { resolveAppPath } from '$lib/utils/paths';

	let { pageEntry }: { pageEntry: PageRegistryEntry } = $props();

	const breadcrumbs = $derived([...getPageAncestors(pageEntry), pageEntry]);
	const canGoBack = $derived(breadcrumbs.length > 1);

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
					{breadcrumb.title}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use './Breadcrumbs.scss';
</style>
