<script lang="ts">
	import { page } from '$app/state';
	import { parties } from '$lib/config/campaigns';
	import { navigation } from '$lib/wiki/navigation';
	import { resolveAppPath } from '$lib/utils/paths';
	import NavTree from './helpers/NavTree.svelte';

	type Props = {
		open: boolean;
		collapsed?: boolean;
		onNavigate: () => void;
	};

	let { open, collapsed = false, onNavigate }: Props = $props();
</script>

<aside
	class="sidebar"
	class:sidebar--open={open}
	class:sidebar--collapsed={collapsed}
	id="wiki-navigation"
>
	<nav aria-label="Wiki navigation">
		<p class="sidebar__label">Browse wiki</p>

		<a
			class="sidebar__home"
			class:active={page.route.id === '/'}
			href={resolveAppPath('/')}
			onclick={onNavigate}
			aria-current={page.route.id === '/' ? 'page' : undefined}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Zm16 0A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"
				/>
			</svg>

			<span>Wiki home</span>
		</a>

		<a
			class="sidebar__home"
			class:active={page.route.id === '/search'}
			href={resolveAppPath('/search')}
			onclick={onNavigate}
			aria-current={page.route.id === '/search' ? 'page' : undefined}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
			</svg>

			<span>Search</span>
		</a>

		<a
			class="sidebar__home"
			class:active={page.route.id === '/preferences'}
			href={resolveAppPath('/preferences')}
			onclick={onNavigate}
			aria-current={page.route.id === '/preferences' ? 'page' : undefined}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<circle cx="12" cy="12" r="3" />

				<path
					d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 8.97 19.36a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3v-4h.08A1.7 1.7 0 0 0 4.64 8.94a1.7 1.7 0 0 0-.34-1.88L4.24 7l2.83-2.83.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 10.04 3H14a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06L19.8 7l-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z"
				/>
			</svg>

			<span>Preferences</span>
		</a>

		<div class="sidebar__separator"></div>

		<NavTree
			items={navigation}
			pathname={page.route.id ?? '/'}
			{onNavigate}
		/>
	</nav>

	<div class="sidebar__campaigns">
		<p class="sidebar__label">Campaign accents</p>

		{#each parties as party}
			<div>
				<span
					style={`--party-color: var(${party.colorToken})`}
				></span>

				{party.name}
			</div>
		{/each}
	</div>
</aside>

<style lang="scss">
	@use './Sidebar.scss';
</style>
