<script lang="ts">
	import type { Snippet } from 'svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
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
	<div class="wiki-shell__grid">
		<Sidebar open={menuOpen} onNavigate={closeMenu} />
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
</div>
