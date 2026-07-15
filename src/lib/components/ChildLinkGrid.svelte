<script lang="ts">
	import { onMount } from 'svelte';
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';

	type Gender = 'female' | 'male';

	type ChildPageLink = {
		title: string;
		href: string;
		description: string;
		tags?: string[];
		image?: string;
		imagePosition?: string;
	};

	type Props = {
		links: ChildPageLink[];
		imagesInFolder?: string | null;
	};

	let { links, imagesInFolder = null }: Props = $props();

	let imageGender = $state<Gender>('female');

	function cleanTitle(title: string) {
		return title.toLocaleLowerCase().replaceAll(' ', '-');
	}

	function getOppositeGender(gender: Gender): Gender {
		return gender === 'female' ? 'male' : 'female';
	}

	function getRandomGender(): Gender {
		return Math.random() < 0.5 ? 'female' : 'male';
	}

	onMount(() => {
		const storageKey = 'class-card-image-gender';
		const savedGender = localStorage.getItem(storageKey);

		let selectedGender: Gender;

		if (savedGender === 'female' || savedGender === 'male') {
			selectedGender = savedGender;
		} else {
			selectedGender = getRandomGender();
		}

		imageGender = selectedGender;

		localStorage.setItem(storageKey, getOppositeGender(selectedGender));
	});

	function buildLinkToImage(link: ChildPageLink) {
		if (link.image) {
			return link.image;
		}

		if (!imagesInFolder) {
			return null;
		}

		return `/${imagesInFolder}/${cleanTitle(link.title)}/card-${imageGender}-m.webp`;
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
