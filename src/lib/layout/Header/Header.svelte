<script lang="ts">
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';
	import { siteConfig } from '$lib/config/site';

	let {
		menuOpen = false,
		sidebarCollapsed = false,
		onMenuToggle,
		onSidebarToggle
	}: {
		menuOpen?: boolean;
		sidebarCollapsed?: boolean;
		onMenuToggle: () => void;
		onSidebarToggle: () => void;
	} = $props();

	let query = $state('');

	function submitSearch(event: SubmitEvent) {
		event.preventDefault();
		const trimmedQuery = query.trim();
		const suffix = trimmedQuery ? `?q=${encodeURIComponent(trimmedQuery)}` : '';
		location.href = resolveAppPath(`/search${suffix}`);
	}
</script>

<header class="site-header">
	<div class="site-header__brand">
		<a class="site-header__logo" href={resolveAppPath('/')} aria-label={`${siteConfig.projectName} home`}>
			<img src={resolveAssetPath('/dndportal_wiki-74x32.svg')} alt="" />
			<span>{siteConfig.projectName}</span>
		</a>
	</div>

	<form class="site-header__search" role="search" onsubmit={submitSearch}>
		<label class="site-header__search-label" for="site-search">Search</label>
		<input
			id="site-search"
			bind:value={query}
			type="search"
			placeholder="Search pages..."
			autocomplete="off"
		/>
	</form>

	<div class="site-header__actions">
		<button
			class="site-header__button site-header__button--desktop"
			type="button"
			aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
			aria-pressed={sidebarCollapsed}
			onclick={onSidebarToggle}
		>
			<span aria-hidden="true">{sidebarCollapsed ? '›' : '‹'}</span>
		</button>
		<button
			class="site-header__button site-header__button--mobile"
			type="button"
			aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={menuOpen}
			onclick={onMenuToggle}
		>
			<span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
		</button>
	</div>
</header>

<style lang="scss">
	@use './Header.scss';
</style>
