<script lang="ts">
	import type { NavigationItem } from '$lib/wiki/navigation';
	import { getWikiIcon } from '$lib/wiki/icons';
	import { resolveAppPath } from '$lib/utils/paths';
	import NavTree from './NavTree.svelte';

	type Props = {
		items: readonly NavigationItem[];
		pathname: string;
		depth?: number;
		onNavigate: () => void;
	};

	let {
		items,
		pathname,
		depth = 0,
		onNavigate
	}: Props = $props();

	let expandedOverrides = $state<Record<string, boolean>>({});

	$effect(() => {
		resetExpansionForPath(pathname);
	});

	function isActive(href: string): boolean {
		return pathname === href;
	}

	function isActiveBranch(item: NavigationItem): boolean {
		return Boolean(
			item.children?.length &&
				(pathname === item.href || pathname.startsWith(`${item.href}/`))
		);
	}

	function isExpanded(item: NavigationItem): boolean {
		return expandedOverrides[item.href] ?? isActiveBranch(item);
	}

	function toggleExpanded(item: NavigationItem): void {
		expandedOverrides[item.href] = !isExpanded(item);
	}

	function resetExpansionForPath(_currentPathname: string): void {
		expandedOverrides = {};
	}

	function childListId(item: NavigationItem): string {
		const slug = item.href
			.replaceAll('/', '-')
			.replace(/^-/, '');

		return `nav-children-${slug || 'home'}`;
	}
</script>

<ul
	class="nav-tree"
	class:nav-tree--nested={depth > 0}
>
	{#each items as item (item.href)}
		{@const active = isActive(item.href)}
		{@const activeBranch = isActiveBranch(item)}
		{@const expanded = isExpanded(item)}
		{@const iconUrl = getWikiIcon(item.icon)}

		<li class="nav-tree__item">
			<div
				class="nav-tree__row"
				class:nav-tree__row--active={active}
				class:nav-tree__row--branch-active={!active && activeBranch}
			>
				{#if item.children?.length}
					<button
						class="nav-tree__toggle"
						class:expanded
						type="button"
						onclick={() => toggleExpanded(item)}
						aria-expanded={expanded}
						aria-controls={childListId(item)}
						aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.title}`}
					>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</button>
				{:else}
					<span
						class="nav-tree__toggle-spacer"
						aria-hidden="true"
					></span>
				{/if}

				<a
					class="nav-tree__link"
					class:active
					href={resolveAppPath(item.href)}
					onclick={onNavigate}
					aria-current={active ? 'page' : undefined}
				>
					{#if iconUrl}
						<span
							class="navigation-item__icon"
							style={`--navigation-icon: url("${iconUrl}")`}
							aria-hidden="true"
						></span>
					{:else}
						<span
							class="nav-tree__marker"
							aria-hidden="true"
						></span>
					{/if}

					<span class="nav-tree__label">
						{item.title}
					</span>
				</a>
			</div>

			{#if item.children?.length && expanded}
				<div
					id={childListId(item)}
					class="nav-tree__children"
				>
					<NavTree
						items={item.children}
						{pathname}
						depth={depth + 1}
						{onNavigate}
					/>
				</div>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use './NavTree.scss';
</style>
