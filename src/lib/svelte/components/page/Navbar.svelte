<!--  
    Location: src/lib/svelte/components/page/Navbar.svelte
    use:
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import * as core from '$lib/typescript/data/core/_index_';
	import { getData } from '$lib/typescript/data/_index_';
	import type { NavbarDataType } from '$lib/typescript/components/_index_';

	import Link from '$lib/svelte/components/Link.svelte';

	let { logoPath, searchPath, actions }: NavbarDataType = $props();

	let logo = $derived(getData(logoPath));
	let brandLogo = $derived(core.internals.website.logos.wide);
	let search = $derived(getData(searchPath));
	let searchAction = $derived(getSearchAction(search.href));
	let isNavbarHidden = $state(false);

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

	onMount(() => {
		let lastScrollY = window.scrollY;

		function handleScroll(): void {
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - lastScrollY;
			const pastNavbar = currentScrollY > 90;

			if (scrollDelta > 6 && pastNavbar) {
				isNavbarHidden = true;
			} else if (scrollDelta < -4 || currentScrollY <= 0) {
				isNavbarHidden = false;
			}

			lastScrollY = currentScrollY;
		}

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class="navbar" class:navbar--hidden={isNavbarHidden}>
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
