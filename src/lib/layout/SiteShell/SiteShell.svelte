<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	import Footer from '$lib/layout/Footer/Footer.svelte';
	import Header from '$lib/layout/Header/Header.svelte';
	import Sidebar from '$lib/layout/Sidebar/Sidebar.svelte';

	let { children }: { children: Snippet } = $props();

	const sidebarStorageKey = 'dnd-wiki-sidebar-collapsed';

	let menuOpen = $state(false);
	let sidebarCollapsed = $state(false);
	let browserReady = $state(false);

	onMount(() => {
		browserReady = true;
		sidebarCollapsed = localStorage.getItem(sidebarStorageKey) === 'true';

		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				menuOpen = false;
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function toggleSidebar() {
		sidebarCollapsed = !sidebarCollapsed;
		if (browserReady) {
			localStorage.setItem(sidebarStorageKey, String(sidebarCollapsed));
		}
	}
</script>

<div
	class="site-shell"
	class:site-shell--menu-open={menuOpen}
	class:site-shell--sidebar-collapsed={sidebarCollapsed}
>
	<Header
		{menuOpen}
		{sidebarCollapsed}
		onMenuToggle={toggleMenu}
		onSidebarToggle={toggleSidebar}
	/>

	<div class="site-shell__body">
		<aside class="site-shell__sidebar" aria-hidden={sidebarCollapsed ? 'true' : undefined}>
			<Sidebar />
		</aside>

		{#if menuOpen}
			<button
				class="site-shell__backdrop"
				type="button"
				aria-label="Close navigation menu"
				onclick={closeMenu}
			></button>
		{/if}

		<main class="site-shell__main">
			{@render children()}
		</main>
	</div>

	<Footer />
</div>

<style lang="scss">
	@use './SiteShell.scss';
</style>
