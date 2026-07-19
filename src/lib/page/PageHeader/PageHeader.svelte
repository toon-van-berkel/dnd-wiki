<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { getAvailabilityForPage } from '$lib/data/availability';
	import type { PageRegistryEntry } from '$lib/page/registry';
	import {
		loadWikiPreferences,
		saveWikiPreferences,
		sanitizeWikiPreferences,
		type PageInformationPanelPreference,
		type TagVisibilityPreference,
		type WikiPreferences
	} from '$lib/preferences/preferences';

	import AllowedIn from './AllowedIn/AllowedIn.svelte';
	import Breadcrumbs from './Breadcrumbs/Breadcrumbs.svelte';
	import Tags from './Tags/Tags.svelte';

	let { pageEntry }: { pageEntry: PageRegistryEntry } = $props();

	const mobileInformationMediaQuery = '(max-width: 48rem)';

	let preferences = $state<WikiPreferences>({});
	let isMobileViewport = $state(false);

	const availability = $derived(getAvailabilityForPage(pageEntry.id));
	const hasAvailability = $derived(
		Boolean(
			availability.allowed?.length ||
				availability.limited?.length ||
				availability.banned?.length ||
				availability.approval?.length
		)
	);
	const tags = $derived(pageEntry.tags ?? []);
	const hasTags = $derived(tags.length > 0);
	const areTagsVisible = $derived(preferences.pageTags !== 'hidden');
	const hasVisibleTags = $derived(hasTags && areTagsVisible);
	const hasPageInformation = $derived(hasAvailability || hasTags);
	const hasVisiblePageInformation = $derived(hasAvailability || hasVisibleTags);
	const panelPreference = $derived(preferences.pageInformationPanel);
	const isInformationCollapsed = $derived(
		panelPreference ? panelPreference === 'collapsed' : isMobileViewport
	);
	const informationPanelClass = $derived(
		[
			'page__header__information',
			panelPreference ? `page__header__information--${panelPreference}` : 'page__header__information--responsive-default',
			isInformationCollapsed ? 'page__header__information--is-collapsed' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const collapseIcon = $derived(isInformationCollapsed ? 'util.chevron-down' : 'util.chevron-up');
	const tagIcon = $derived(areTagsVisible ? 'util.eye-off' : 'util.eye');
	const tagButtonLabel = $derived(areTagsVisible ? 'Hide page tags' : 'Show page tags');
	const collapseButtonLabel = $derived(
		isInformationCollapsed ? 'Expand page information' : 'Collapse page information'
	);

	onMount(() => {
		preferences = loadWikiPreferences();

		const mediaQuery = window.matchMedia(mobileInformationMediaQuery);
		const updateViewportState = () => {
			isMobileViewport = mediaQuery.matches;
		};

		updateViewportState();
		mediaQuery.addEventListener('change', updateViewportState);

		return () => {
			mediaQuery.removeEventListener('change', updateViewportState);
		};
	});

	function updatePreference(nextPreference: WikiPreferences) {
		preferences = sanitizeWikiPreferences(nextPreference);
		saveWikiPreferences(preferences);
	}

	function setPanelPreference(pageInformationPanel: PageInformationPanelPreference) {
		updatePreference({
			...preferences,
			pageInformationPanel
		});
	}

	function setTagPreference(pageTags: TagVisibilityPreference) {
		updatePreference({
			...preferences,
			pageTags
		});
	}

	function toggleInformationPanel() {
		setPanelPreference(isInformationCollapsed ? 'expanded' : 'collapsed');
	}

	function toggleTags() {
		setTagPreference(areTagsVisible ? 'hidden' : 'visible');
	}
</script>

<header class="page__header">
	{#if hasPageInformation}
		<section class={informationPanelClass} aria-labelledby="page-information-heading">
			<div class="page__header__information-header">
				<h2 id="page-information-heading">Page information</h2>

				<div class="page__header__information-actions">
					{#if hasTags}
						<button
							class="page__header__information-button"
							type="button"
							aria-label={tagButtonLabel}
							aria-pressed={!areTagsVisible}
							onclick={toggleTags}
						>
							<Icon src={tagIcon} size="1.05rem" />
						</button>
					{/if}

					<button
						class="page__header__information-button"
						type="button"
						aria-label={collapseButtonLabel}
						aria-expanded={!isInformationCollapsed}
						aria-controls="page-information-content"
						onclick={toggleInformationPanel}
					>
						<Icon src={collapseIcon} size="1.05rem" />
					</button>
				</div>
			</div>

			<div
				id="page-information-content"
				class="page__header__information-content"
				aria-hidden={isInformationCollapsed ? 'true' : undefined}
			>
				<div class="page__header__information-content-inner">
					{#if hasAvailability}
						<AllowedIn {availability} />
					{/if}

					{#if hasVisibleTags}
						<Tags {tags} />
					{/if}

					{#if !hasVisiblePageInformation}
						<p class="page__header__information-empty">No visible page information.</p>
					{/if}
				</div>
			</div>
		</section>
	{/if}

	<Breadcrumbs {pageEntry} />

	<hr class="page__header-sep" />

	{#if pageEntry.eyebrow}
		<span class="page__header-eyebrow">{pageEntry.eyebrow}</span>
	{/if}
	<h1 class="page__header-title">{pageEntry.title}</h1>
	{#if pageEntry.description}
		<p class="page__header-description">{pageEntry.description}</p>
	{/if}
</header>

<style lang="scss">
	@use './PageHeader.scss';
</style>
