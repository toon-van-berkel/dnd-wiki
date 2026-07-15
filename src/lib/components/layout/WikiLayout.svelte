<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import Header from './snippets/Header.svelte';
	import Sidebar from './snippets/Sidebar.svelte';
	import Footer from './snippets/Footer.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
	let menuOpen = $state(false);
	let sidebarCollapsed = $state(false);

	onMount(() => {
		const savedState = localStorage.getItem('dnd-wiki-sidebar-collapsed');
		sidebarCollapsed = savedState === 'true';
	});

	function closeMenu() {
		menuOpen = false;
	}

	function toggleSidebar() {
		sidebarCollapsed = !sidebarCollapsed;

		localStorage.setItem(
			'dnd-wiki-sidebar-collapsed',
			String(sidebarCollapsed)
		);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeMenu();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="wiki-shell">
	<Header
		{menuOpen}
		onMenuToggle={() => (menuOpen = !menuOpen)}
		onSearchNavigate={closeMenu}
	/>
	<div
		class="wiki-shell__grid"
		class:wiki-shell__grid--sidebar-collapsed={sidebarCollapsed}
	>
		<div class="wiki-shell__sidebar-slot">
			<Sidebar open={menuOpen} collapsed={sidebarCollapsed} onNavigate={closeMenu} />
		</div>
		<button
			type="button"
			class="sidebar-toggle"
			class:sidebar-toggle--collapsed={sidebarCollapsed}
			onclick={toggleSidebar}
			aria-expanded={!sidebarCollapsed}
			aria-label={sidebarCollapsed ? 'Expand navigation' : 'Collapse navigation'}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
		</button>
		{#if menuOpen}
			<button class="wiki-shell__backdrop" type="button" aria-label="Close navigation" onclick={closeMenu}></button>
		{/if}
		<main class="wiki-shell__main">
			{@render children()}
			<footer class="wiki-shell__footer">
				These pages document our table rulings and campaign setting. When in doubt, ask the DM.
			</footer>
		</main>
	</div>
	<Footer/>
</div>
