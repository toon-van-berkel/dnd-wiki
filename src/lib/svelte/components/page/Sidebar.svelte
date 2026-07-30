<!--  
    Location: src/lib/svelte/components/page/Sidebar.svelte
    use:
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import {
		getSidebarLabel,
		type SidebarDataType,
		type SidebarNode
	} from '$lib/typescript/components/_index_';
	import { getData } from '$lib/typescript/data/_index_';

	import Link from '$lib/svelte/components/Link.svelte';

	let { sections }: SidebarDataType = $props();
	let mobileOpen = $state(false);
	let expandedPaths = $state<ReadonlySet<string>>(new Set());

	function normalizePath(path: string): string {
		const pathname = path.split(/[?#]/, 1)[0] || '/';
		const withoutBase =
			base && pathname !== base && pathname.startsWith(`${base}/`)
				? pathname.slice(base.length)
				: pathname;

		if (withoutBase.length > 1 && withoutBase.endsWith('/')) {
			return withoutBase.slice(0, -1);
		}

		return withoutBase;
	}

	function isCurrent(node: SidebarNode): boolean {
		return normalizePath(page.url.pathname) === normalizePath(getData(node.path).href);
	}

	function hasCurrentDescendant(node: SidebarNode): boolean {
		return node.children.some((child) => isCurrent(child) || hasCurrentDescendant(child));
	}

	function isExpanded(node: SidebarNode): boolean {
		return (
			expandedPaths.has(node.path) ||
			(isCurrent(node) && node.children.length > 0) ||
			hasCurrentDescendant(node)
		);
	}

	function toggleNode(node: SidebarNode): void {
		const nextExpandedPaths = new Set(expandedPaths);

		if (nextExpandedPaths.has(node.path)) {
			nextExpandedPaths.delete(node.path);
		} else {
			nextExpandedPaths.add(node.path);
		}

		expandedPaths = nextExpandedPaths;
	}

	function closeMobileSidebar(): void {
		mobileOpen = false;
	}
</script>

{#snippet renderNode(node: SidebarNode, depth: number)}
	{@const childrenId = `sidebar-${node.path.replaceAll('.', '-')}`}
	{@const childrenExpanded = isExpanded(node)}
	{@const hasChildren = node.children.length > 0}
	{@const active = isCurrent(node)}

	<li class="sidebar__item">
		<div
			class="sidebar__row"
			class:sidebar__row--active={active}
			style={`--sidebar-depth: ${depth}`}
		>
			{#if hasChildren}
				<button
					class="sidebar__toggle"
					type="button"
					aria-label={`${childrenExpanded ? 'Collapse' : 'Expand'} ${getSidebarLabel(node.path)}`}
					aria-expanded={childrenExpanded}
					aria-controls={childrenId}
					onclick={() => toggleNode(node)}
				>
					<span
						class="sidebar__toggle-icon"
						class:sidebar__toggle-icon--expanded={childrenExpanded}
						aria-hidden="true"
					>
						&rsaquo;
					</span>
				</button>
			{:else}
				<span class="sidebar__toggle-spacer" aria-hidden="true"></span>
			{/if}

			<Link
				goto={node.path}
				placeholder={getSidebarLabel(node.path)}
				popup="description"
				current={active}
				showIcon
			/>
		</div>

		{#if hasChildren && childrenExpanded}
			<ul id={childrenId} class="sidebar__list sidebar__list--nested">
				{#each node.children as child (child.path)}
					{@render renderNode(child, depth + 1)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

<button
	class="sidebar__mobile-toggle"
	type="button"
	aria-expanded={mobileOpen}
	aria-controls="wiki-sidebar"
	onclick={() => (mobileOpen = !mobileOpen)}
>
	Navigation
</button>

<aside
	id="wiki-sidebar"
	class="sidebar"
	class:sidebar--open={mobileOpen}
	aria-label="Wiki navigation"
>
	<nav class="sidebar__nav">
		{#each sections as section}
			<section class="sidebar__section">
				<h2 class="sidebar__section-title">{section.title}</h2>

				<ul class="sidebar__list">
					{#each section.roots as root (root.path)}
						{@render renderNode(root, 0)}
					{/each}
				</ul>
			</section>
		{/each}
	</nav>

	<button
		class="sidebar__mobile-close"
		type="button"
		onclick={closeMobileSidebar}
	>
		Close
	</button>
</aside>
