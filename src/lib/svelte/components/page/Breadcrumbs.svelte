<!--
	Location: src/lib/svelte/components/page/Breadcrumbs.svelte
	Use: Renders breadcrumbs from the current-page context.
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import {
		getBreadcrumbBackPath,
		getBreadcrumbItems,
		homePagePath
	} from '$lib/typescript/pages/currentPage';
	import { getData } from '$lib/typescript/data/_index_';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';

	import Link from '$lib/svelte/components/Link.svelte';

	const currentPage = getCurrentPageContext();
	let items = $derived(getBreadcrumbItems(currentPage.path));
	let backPath = $derived(getBreadcrumbBackPath(items));
	let shouldRender = $derived(
		currentPage.path !== null &&
		currentPage.path !== homePagePath &&
		items.length > 0
	);

	function getInternalUrl(href: string): string {
		return href.startsWith('/') ? `${base}${href}` : href;
	}

	function goBack(): void {
		if (!backPath) {
			return;
		}

		goto(getInternalUrl(getData(backPath).href));
	}
</script>

{#if shouldRender}
	<div class="breadcrumbs">
		<button
			class="breadcrumbs__back"
			type="button"
			aria-label="Go back to the parent page"
			onclick={goBack}
		>
			Back
		</button>

		<nav class="breadcrumbs__nav" aria-label="Breadcrumb">
			<ol class="breadcrumbs__list">
				{#each items as item, index (item.path)}
					<li class="breadcrumbs__item">
						{#if index < items.length - 1}
							<Link
								goto={item.path}
								placeholder={item.label}
								popup="full"
							/>

							<span class="breadcrumbs__separator" aria-hidden="true">
								/
							</span>
						{:else}
							<span class="breadcrumbs__current" aria-current="page">
								{item.label}
							</span>
						{/if}
					</li>
				{/each}
			</ol>
		</nav>
	</div>
{/if}
