<!--
	Location: src/lib/svelte/components/page/CommunityPortalLinks.svelte
	Use: Renders curated Discord-highlighted portal links by category.
-->
<script lang="ts">
	import type {
		CommunityMetadata,
		CommunityPortalLink,
		LinkPath
	} from '$lib/typescript/data/_index_';
	import {
		getPageLabel,
		resolveLinkPath
	} from '$lib/typescript/pages/currentPage';

	import Link from '$lib/svelte/components/Link.svelte';
	import CommunityBadge from './CommunityBadge.svelte';

	let {
		links,
		categories
	}: {
		links: readonly CommunityPortalLink[];
		categories: Readonly<Record<string, CommunityMetadata>>;
	} = $props();

	let categoryEntries = $derived(Object.entries(categories));

	function getLinksForCategory(category: string): readonly CommunityPortalLink[] {
		return links
			.filter((link) => link.category === category)
			.sort((left, right) => {
				if (Boolean(left.featured) !== Boolean(right.featured)) {
					return left.featured ? -1 : 1;
				}

				return left.title.localeCompare(right.title);
			});
	}

	function getResolvedPath(href: string): LinkPath | null {
		return resolveLinkPath(href);
	}

	function isExternalHref(href: string): boolean {
		return /^https?:\/\//.test(href) || href.startsWith('mailto:');
	}
</script>

<div class="community-groups">
	{#each categoryEntries as [category, metadata]}
		<section class="community-group" aria-labelledby={`portal-links-${category}-title`}>
			<header class="community-group__header">
				<div>
					<h3 id={`portal-links-${category}-title`}>{metadata.label}</h3>
					{#if metadata.description}
						<p>{metadata.description}</p>
					{/if}
				</div>
			</header>

			{#if getLinksForCategory(category).length}
				<div class="community-grid">
					{#each getLinksForCategory(category) as portalLink}
						<article class="community-card community-card--compact">
							<header class="community-card__header">
								<div>
									{#if portalLink.featured}
										<CommunityBadge value="Featured" tone="strong" />
									{/if}
									<h4>{portalLink.title}</h4>
								</div>
							</header>

							<p>{portalLink.description}</p>

							{#if getResolvedPath(portalLink.href)}
								<Link
									goto={getResolvedPath(portalLink.href) as LinkPath}
									placeholder={getPageLabel(getResolvedPath(portalLink.href) as LinkPath)}
									popup="description"
								/>
							{:else if isExternalHref(portalLink.href)}
								<a class="community-link" href={portalLink.href} target="_blank" rel="noopener noreferrer">
									Open link &#8599;
								</a>
							{:else}
								<span class="community-link community-link--invalid" aria-label={`Unresolved link: ${portalLink.href}`}>
									Open link
								</span>
							{/if}
						</article>
					{/each}
				</div>
			{:else}
				<section class="community-empty" aria-label={`No ${metadata.label} links`}>
					<h4>No links yet</h4>
					<p>Curated {metadata.label.toLowerCase()} links will appear here when they are added to the central data file.</p>
				</section>
			{/if}
		</section>
	{/each}
</div>
