<!-- site\src\lib\layout\snippets\Sidebar.svelte -->
<script lang="ts">
	import { page } from '$app/state';

	import Icon from '$lib/helpers/Icon.svelte';

	import { sidebarContent } from './Sidebar-data';
	import type { SidebarBrowseItem } from './Sidebar-Types';

	function isExactActive(url: string): boolean {
		return page.url.pathname === url;
	}

	function isWithinRoute(url: string): boolean {
		if (url === '/') {
			return isExactActive(url);
		}

		return (
			page.url.pathname === url ||
			page.url.pathname.startsWith(`${url}/`)
		);
	}

	function isBranchOpen(item: SidebarBrowseItem): boolean {
		return isWithinRoute(item.url);
	}
</script>

{#snippet browseTree(items: SidebarBrowseItem[], depth = 0)}
	<ul
		class="sidebar__list sidebar__list--tree"
		style:--sidebar-depth={depth}
	>
		{#each items as item}
			{@const hasChildren = Boolean(item.children?.length)}
			{@const branchOpen = hasChildren && isBranchOpen(item)}

			<li class="sidebar__tree-item">
				<a
					class="sidebar__tree-link"
					class:sidebar__tree-link--active={isExactActive(item.url)}
					href={item.url}
					aria-current={isExactActive(item.url) ? 'page' : undefined}
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
						<span
							class="sidebar__chevron sidebar__chevron--empty"
							aria-hidden="true"
						></span>
					{/if}

					{#if item.icon}
						<Icon
							src={item.icon}
							type="normal"
							color="currentColor"
							size="1rem"
						/>
					{:else}
						<span class="sidebar__dot" aria-hidden="true"></span>
					{/if}

					<span>{item.name}</span>
				</a>

				{#if branchOpen && item.children}
					{@render browseTree(item.children, depth + 1)}
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<nav class="sidebar" aria-label="Wiki navigation">
	<section class="sidebar__section">
		<h2 class="sidebar__heading">Browse wiki</h2>

		<ul class="sidebar__list sidebar__list--main">
			{#each sidebarContent.main as item}
				<li class="sidebar__item">
					<a
						class="sidebar__link"
						class:sidebar__link--active={isExactActive(item.url)}
						href={item.url}
						aria-current={isExactActive(item.url) ? 'page' : undefined}
					>
						<Icon
							src={item.icon}
							type="normal"
							color="currentColor"
						/>

						<span>{item.name}</span>
					</a>
				</li>
			{/each}
		</ul>

		<div class="sidebar__divider"></div>

		{@render browseTree(sidebarContent.browse)}
	</section>

	<section class="sidebar__section sidebar__section--resources">
		<h2 class="sidebar__heading">Resources</h2>

		<ul class="sidebar__list sidebar__list--resources">
			{#each sidebarContent.resources as item}
				<li class="sidebar__item">
					<a
						class="sidebar__link"
						class:sidebar__link--active={isExactActive(item.url)}
						href={item.url}
						aria-current={isExactActive(item.url) ? 'page' : undefined}
					>
						<Icon
							src={item.icon}
							type="normal"
							color="currentColor"
						/>

						<span>{item.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</nav>

<style lang="scss">
	@use './Sidebar.scss';
</style>