<script lang="ts">
	import { onMount } from 'svelte';
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';

	type Gender = 'female' | 'male';

	type ChildPageLink = {
		title: string;
		href: string;
		description: string;
		tags?: string[];
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

	function buildLinkToImage(title: string) {
		if (!imagesInFolder) return null;

		return `/${imagesInFolder}/${cleanTitle(title)}/card-${imageGender}.webp`;
	}
</script>

<nav class="child-links" aria-label="Related pages">
	{#each links as link}
		{@const imagePath = buildLinkToImage(link.title)}
		{@const imageUrl = resolveAssetPath(imagePath)}

		<a
			href={resolveAppPath(link.href)}
			style={imageUrl ? `background-image: url('${imageUrl}')` : undefined}
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
