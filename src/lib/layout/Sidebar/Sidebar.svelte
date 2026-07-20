<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import {
		getNavigationPages,
		getPageAncestors,
		getPageChildren,
		getPageEntryByHref,
		type PageRegistryEntry
	} from '$lib/page/registry';
	import { resolveAppPath } from '$lib/utils/paths';

	const appBasePath = base.replace(/\/+$/, '');

	function normalizeActivePath(pathname: string): string {
		let normalized = pathname;

		if (appBasePath && (pathname === appBasePath || pathname.startsWith(`${appBasePath}/`))) {
			normalized = pathname.slice(appBasePath.length) || '/';
		}

		if (normalized !== '/') {
			return normalized.replace(/\/+$/, '');
		}

		return normalized;
	}

	function isExactActive(url: string): boolean {
		return normalizeActivePath(page.url.pathname) === normalizeActivePath(url);
	}

	function isWithinRoute(url: string): boolean {
		if (url === '/') return isExactActive(url);

		const pathname = normalizeActivePath(page.url.pathname);
		const route = normalizeActivePath(url);

		return pathname === route || pathname.startsWith(`${route}/`);
	}

	const activeEntry = $derived(getPageEntryByHref(normalizeActivePath(page.url.pathname)));
	const activeAncestorIds = $derived(
		new Set(activeEntry ? getPageAncestors(activeEntry).map((entry) => entry.id) : [])
	);

	function isBranchActive(item: PageRegistryEntry): boolean {
		return isWithinRoute(item.href) || activeAncestorIds.has(item.id);
	}

	function isBranchOpen(item: PageRegistryEntry): boolean {
		return (
			userOpenedBranchIds.has(item.id) ||
			(isBranchActive(item) && !userClosedBranchIds.has(item.id))
		);
	}

	function childrenFor(item: PageRegistryEntry): PageRegistryEntry[] {
		return getPageChildren(item.id).filter((child) => child.navigation !== false);
	}

	let userOpenedBranchIds = $state(new Set<string>());
	let userClosedBranchIds = $state(new Set<string>());

	function toggleBranch(item: PageRegistryEntry): void {
		const branchOpen = isBranchOpen(item);
		const opened = new Set(userOpenedBranchIds);
		const closed = new Set(userClosedBranchIds);

		if (branchOpen) {
			opened.delete(item.id);
			closed.add(item.id);
		} else {
			opened.add(item.id);
			closed.delete(item.id);
		}

		userOpenedBranchIds = opened;
		userClosedBranchIds = closed;
	}
</script>

{#snippet browseTree(items: PageRegistryEntry[], depth = 0)}
	<ul class="sidebar__list sidebar__list--tree" style:--sidebar-depth={depth}>
		{#each items as item}
			{@const children = childrenFor(item)}
			{@const hasChildren = children.length > 0}
			{@const branchOpen = hasChildren && isBranchOpen(item)}
			{@const branchActive = isBranchActive(item)}

			<li class="sidebar__tree-item">
				<div
					class="sidebar__tree-row"
					class:sidebar__tree-row--active={branchActive}
				>
					{#if hasChildren}
						<button
							class="sidebar__branch-toggle"
							type="button"
							aria-label={`${branchOpen ? 'Collapse' : 'Expand'} ${item.title}`}
							aria-expanded={branchOpen}
							onclick={() => toggleBranch(item)}
						>
							<span
								class="sidebar__chevron"
								class:sidebar__chevron--open={branchOpen}
								aria-hidden="true"
							>
								›
							</span>
						</button>
					{:else}
						<span class="sidebar__chevron sidebar__chevron--empty" aria-hidden="true"></span>
					{/if}

					<a
						class="sidebar__tree-link"
						class:sidebar__tree-link--active={branchActive}
						href={resolveAppPath(item.href)}
						aria-current={isExactActive(item.href) ? 'page' : undefined}
					>
						{#if item.icon}
							<Icon src={item.icon} type="normal" color="currentColor" size="1rem" />
						{:else}
							<span class="sidebar__dot" aria-hidden="true"></span>
						{/if}

						<span>{item.title}</span>
					</a>
				</div>

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
