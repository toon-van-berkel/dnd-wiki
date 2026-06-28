<script lang="ts">
	import type { NavigationItem } from '$lib/wiki/navigation';
	import { resolveAppPath } from '$lib/utils/paths';
	import NavTree from './NavTree.svelte';

	type Props = {
		items: NavigationItem[];
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

	function isActive(href: string) {
		return pathname === href;
	}

	function isActiveBranch(item: NavigationItem) {
		return Boolean(
			item.children?.length &&
				(pathname === item.href || pathname.startsWith(`${item.href}/`))
		);
	}

	function isExpanded(item: NavigationItem) {
		return expandedOverrides[item.href] ?? isActiveBranch(item);
	}

	function toggleExpanded(item: NavigationItem) {
		expandedOverrides[item.href] = !isExpanded(item);
	}

	function resetExpansionForPath(_currentPathname: string) {
		expandedOverrides = {};
	}

	function childListId(item: NavigationItem) {
		return `nav-children-${item.href.replaceAll('/', '-').replace(/^-/, '')}`;
	}
</script>

<ul class:nav-tree--nested={depth > 0} class="nav-tree">
	{#each items as item}
		<li>
			<div class:nav-tree__row--branch-active={isActiveBranch(item)} class="nav-tree__row">
				{#if item.children?.length}
					<button
						class:expanded={isExpanded(item)}
						class="nav-tree__toggle"
						type="button"
						onclick={() => toggleExpanded(item)}
						aria-expanded={isExpanded(item)}
						aria-controls={childListId(item)}
						aria-label={`${isExpanded(item) ? 'Collapse' : 'Expand'} ${item.title}`}
					>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
					</button>
				{:else}
					<span class="nav-tree__toggle-spacer" aria-hidden="true"></span>
				{/if}

				<a
					class:active={isActive(item.href)}
					href={resolveAppPath(item.href)}
					onclick={onNavigate}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					<span class="nav-tree__marker" aria-hidden="true"></span>
					<span>{item.title}</span>
				</a>
			</div>
			{#if item.children?.length && isExpanded(item)}
				<div id={childListId(item)}>
					<NavTree items={item.children} {pathname} depth={depth + 1} {onNavigate} />
				</div>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use './NavTree.scss';
</style>
