<!--  
    Location: src/lib/svelte/components/page/Navbar.svelte
    use:
-->
<script lang="ts">
	import { base } from '$app/paths';
	import * as core from '$lib/typescript/data/core/_index_';
	import { getData } from '$lib/typescript/data/_index_';
	import type { NavbarDataType } from '$lib/typescript/components/_index_';

	import Link from '$lib/svelte/components/Link.svelte';

	let { logoPath, searchPath, actions }: NavbarDataType = $props();

	let logo = $derived(getData(logoPath));
	let brandLogo = $derived(core.internals.website.logos.wide);
	let search = $derived(getData(searchPath));
	let searchAction = $derived(getSearchAction(search.href));

	function getValidUrl(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		return `${base}${href}`;
	}

	function getSearchAction(href: string): string {
		const url = getValidUrl(href);

		return url.endsWith('/') ? url : `${url}/`;
	}
</script>

<header class="navbar">
	<nav class="navbar__inner" aria-label="Primary">
		<a
			class="navbar__brand"
			href={getValidUrl(logo.href)}
			aria-label="D&D Portal Wiki homepage"
		>
			<img
				class="navbar__brand-img"
				src={brandLogo.href}
				alt={brandLogo.alt}
			>
		</a>

		<form
			class="navbar__search"
			action={searchAction}
			method="GET"
			role="search"
		>
			<label class="navbar__search-label" for="navbar-search">
				Search the Wiki
			</label>

			<span class="navbar__search-icon" aria-hidden="true"></span>

			<input
				id="navbar-search"
				class="navbar__search-input"
				type="search"
				name="q"
				placeholder="Search rules, classes, species, monsters..."
				autocomplete="off"
				aria-label="Search the Wiki"
			>

			<button class="navbar__search-submit" type="submit">
				Search
			</button>
		</form>

		<div class="navbar__actions" aria-label="Community and preferences">
			{#each actions as action (action.path)}
				<Link
					goto={action.path}
					placeholder={action.label}
					popup="description"
					showIcon
				/>
			{/each}
		</div>
	</nav>
</header>
