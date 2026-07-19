<script lang="ts">
	import { onMount } from 'svelte';
	import {
		pageCardAssets,
		type PageCardAssetManifest,
		type PageCardAssetSet,
		type PageCardGender,
		type PageCardSize
	} from '$lib/data/generated/PageCardAssets';
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';

	type Gender = PageCardGender;

	type ChildPageLink = {
		title: string;
		href: string;
		description: string;
		tags?: readonly string[];
		image?: string;
		imagePosition?: string;
	};

	type Props = {
		links: readonly ChildPageLink[];
	};

	const storageKey = 'class-card-image-gender';
	const preferredSizes = ['medium', 'small', 'large'] as const satisfies readonly PageCardSize[];
	const manifest = pageCardAssets as PageCardAssetManifest;

	let { links }: Props = $props();

	let imageGender = $state<Gender>('female');

	function getOppositeGender(gender: Gender): Gender {
		return gender === 'female' ? 'male' : 'female';
	}

	function getRandomGender(): Gender {
		return Math.random() < 0.5 ? 'female' : 'male';
	}

	function isGender(value: string | null): value is Gender {
		return value === 'female' || value === 'male';
	}

	onMount(() => {
		const savedGender = localStorage.getItem(storageKey);

		let selectedGender: Gender;

		if (isGender(savedGender)) {
			selectedGender = savedGender;
		} else {
			selectedGender = getRandomGender();
		}

		imageGender = selectedGender;

		localStorage.setItem(storageKey, getOppositeGender(selectedGender));
	});

	function normalizeHref(href: string) {
		if (href === '/') {
			return href;
		}

		return href.replace(/\/+$/, '');
	}

	function findFirstAvailableAsset(
		assets: PageCardAssetSet | undefined,
		sizes: readonly PageCardSize[]
	) {
		if (!assets) {
			return null;
		}

		for (const size of sizes) {
			const asset = assets[size];

			if (asset) {
				return asset;
			}
		}

		return null;
	}

	function buildLinkToImage(link: ChildPageLink) {
		if (link.image) {
			return link.image;
		}

		const assets = manifest[normalizeHref(link.href)];

		if (!assets) {
			return null;
		}

		// Fallback order: requested gender medium, requested gender any size,
		// alternate gender medium, alternate gender any size, then no artwork.
		return (
			findFirstAvailableAsset(assets[imageGender], preferredSizes) ??
			findFirstAvailableAsset(assets[getOppositeGender(imageGender)], preferredSizes) ??
			null
		);
	}

	function buildBackgroundStyle(link: ChildPageLink) {
		const imagePath = buildLinkToImage(link);

		if (!imagePath) {
			return undefined;
		}

		const imageUrl = resolveAssetPath(imagePath);

		if (!imageUrl) {
			return undefined;
		}

		const styles = [`background-image: url('${imageUrl}')`];

		if (link.imagePosition) {
			styles.push(`background-position: ${link.imagePosition}`);
		}

		return styles.join('; ');
	}
</script>

<nav class="child-links" aria-label="Related pages">
	{#each links as link}
		<a
			href={resolveAppPath(link.href)}
			style={buildBackgroundStyle(link)}
		>
			<span>{link.title}</span>
			<p>{link.description}</p>

			{#if link.tags?.length}
				<ul>
					{#each link.tags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			{/if}

			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="m9 18 6-6-6-6" />
			</svg>
		</a>
	{/each}
</nav>

<style lang="scss">
	@use './ChildLinkGrid.scss';
</style>
