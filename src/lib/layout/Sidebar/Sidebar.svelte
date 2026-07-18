<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { getNavigationPages, getPageChildren, type PageRegistryEntry } from '$lib/page/registry';
	import { resolveAppPath } from '$lib/utils/paths';

	function isExactActive(url: string): boolean {
		return page.url.pathname === url;
	}

	function isWithinRoute(url: string): boolean {
		if (url === '/') return isExactActive(url);
		return page.url.pathname === url || page.url.pathname.startsWith(`${url}/`);
	}

	function isBranchOpen(item: PageRegistryEntry): boolean {
		return isWithinRoute(item.href);
	}

	function childrenFor(item: PageRegistryEntry): PageRegistryEntry[] {
		return getPageChildren(item.id);
	}
</script>

{#snippet browseTree(items: PageRegistryEntry[], depth = 0)}
	<ul class="sidebar__list sidebar__list--tree" style:--sidebar-depth={depth}>
		{#each items as item}
			{@const children = childrenFor(item)}
			{@const hasChildren = children.length > 0}
			{@const branchOpen = hasChildren && isBranchOpen(item)}

			<li class="sidebar__tree-item">
				<a
					class="sidebar__tree-link"
					class:sidebar__tree-link--active={isExactActive(item.href)}
					href={resolveAppPath(item.href)}
					aria-current={isExactActive(item.href) ? 'page' : undefined}
				>
					{#if hasChildren}
						<span
							class="sidebar__chevron"
							class:sidebar__chevron--open={branchOpen}
							aria-hidden="true"
						>
							›
						</span>
					{:else}
						<span class="sidebar__chevron sidebar__chevron--empty" aria-hidden="true"></span>
					{/if}

					{#if item.icon}
						<Icon src={item.icon} type="normal" color="currentColor" size="1rem" />
					{:else}
						<span class="sidebar__dot" aria-hidden="true"></span>
					{/if}

					<span>{item.title}</span>
				</a>

				{#if branchOpen}
					{@render browseTree(children, depth + 1)}
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<nav class="sidebar" aria-label="Wiki navigation">
	<section class="sidebar__section">
		<h2 class="sidebar__heading">Browse wiki</h2>

		<ul class="sidebar__list sidebar__list--main">
			{#each getNavigationPages('main') as item}
				<li class="sidebar__item">
					<a
						class="sidebar__link"
						class:sidebar__link--active={isExactActive(item.href)}
						href={resolveAppPath(item.href)}
						aria-current={isExactActive(item.href) ? 'page' : undefined}
					>
						{#if item.icon}
							<Icon src={item.icon} type="normal" color="currentColor" />
						{/if}
						<span>{item.id === 'home' ? 'Wiki home' : item.title}</span>
					</a>
				</li>
			{/each}
		</ul>

		<div class="sidebar__divider"></div>

		{@render browseTree(getNavigationPages('browse'))}
	</section>

	<section class="sidebar__section sidebar__section--resources">
		<h2 class="sidebar__heading">Resources</h2>

		<ul class="sidebar__list sidebar__list--resources">
			{#each getNavigationPages('resources') as item}
				<li class="sidebar__item">
					<a
						class="sidebar__link"
						class:sidebar__link--active={isExactActive(item.href)}
						href={resolveAppPath(item.href)}
						aria-current={isExactActive(item.href) ? 'page' : undefined}
					>
						{#if item.icon}
							<Icon src={item.icon} type="normal" color="currentColor" />
						{/if}
						<span>{item.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</nav>

<style lang="scss">
	@use './Sidebar.scss';
</style>
