<script lang="ts">
	import { page } from '$app/state';
	import { navigation } from '$lib/wiki/navigation';
	import { resolveAppPath } from '$lib/utils/paths';
	import NavTree from './NavTree.svelte';

	type Props = {
		open: boolean;
		onNavigate: () => void;
	};

	let { open, onNavigate }: Props = $props();
</script>

<aside class:sidebar--open={open} class="sidebar" id="wiki-navigation">
	<nav aria-label="Wiki navigation">
		<p class="sidebar__label">Browse wiki</p>
		<a class:active={page.route.id === '/'} class="sidebar__home" href={resolveAppPath('/')} onclick={onNavigate} aria-current={page.route.id === '/' ? 'page' : undefined}>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Zm16 0A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z" /></svg>
			Wiki home
		</a>
		<div class="sidebar__separator"></div>
		<NavTree items={navigation} pathname={page.route.id ?? '/'} {onNavigate} />
	</nav>

	<div class="sidebar__campaigns">
		<p class="sidebar__label">Campaign accents</p>
		<div><span class="party-1"></span>Party 1</div>
		<div><span class="party-2"></span>Party 2</div>
		<div><span class="party-3"></span>Party 3</div>
	</div>
</aside>

<style lang="scss">
	@use './Sidebar.scss';
</style>
