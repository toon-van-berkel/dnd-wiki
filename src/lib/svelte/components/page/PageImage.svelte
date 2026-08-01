<!--
	Location: src/lib/svelte/components/page/PageImage.svelte
	Use: Renders responsive current-page artwork with local gender controls.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import {
		resolveSessionImageGender
	} from '$lib/typescript/pages/imageGender';
	import type {
		ImageGender,
		ResponsiveImageData
	} from '$lib/typescript/data/_index_';

	const currentPage = getCurrentPageContext();
	let selectedGender = $state<ImageGender | null>(null);
	let imageDialog = $state<HTMLDialogElement>();
	let expandButton = $state<HTMLButtonElement>();

	let imageSet = $derived(
		currentPage.data?.images?.header ?? currentPage.data?.images?.card
	);
	let displayGender = $derived(selectedGender ?? 'female');
	let image = $derived<ResponsiveImageData | undefined>(
		imageSet?.[displayGender] ?? imageSet?.female ?? imageSet?.male
	);

	onMount(() => {
		if (currentPage.path) {
			selectedGender = resolveSessionImageGender(currentPage.path);
		}
	});

	function selectGender(gender: ImageGender): void {
		selectedGender = gender;
	}

	function openDialog(): void {
		imageDialog?.showModal();
	}

	function closeDialog(): void {
		imageDialog?.close();
	}

	function restoreFocus(): void {
		expandButton?.focus();
	}
</script>

{#if image && imageSet}
	<figure
		class="page-image"
		class:page-image--pending={selectedGender === null}
	>
		<div class="page-image__media">
			<img
				src={image.sources.m}
				srcset={`${image.sources.s} 314w, ${image.sources.m} 941w, ${image.sources.l} 1254w`}
				sizes="(max-width: 800px) calc(100vw - 40px), min(38vw, 620px)"
				alt={image.alt}
				style={`object-position: ${image.position ?? 'center'}`}
			/>

			<div class="page-image__controls page-image__controls--gender">
				<button
					class="page-image__control"
					class:page-image__control--active={displayGender === 'male'}
					type="button"
					aria-label="Show male artwork"
					aria-pressed={displayGender === 'male'}
					onclick={() => selectGender('male')}
				>
					M
				</button>

				<button
					class="page-image__control"
					class:page-image__control--active={displayGender === 'female'}
					type="button"
					aria-label="Show female artwork"
					aria-pressed={displayGender === 'female'}
					onclick={() => selectGender('female')}
				>
					F
				</button>
			</div>

			<button
				bind:this={expandButton}
				class="page-image__control page-image__control--expand"
				type="button"
				aria-label="Expand page image"
				onclick={openDialog}
			>
				View
			</button>
		</div>

		{#if image.caption}
			<figcaption>{image.caption}</figcaption>
		{/if}
	</figure>

	<dialog
		bind:this={imageDialog}
		class="image-dialog"
		aria-label="Expanded page image"
		onclose={restoreFocus}
	>
		<div class="image-dialog__content">
			<button
				class="image-dialog__close"
				type="button"
				aria-label="Close expanded image"
				onclick={closeDialog}
			>
				Close
			</button>

			<img
				src={image.sources.l}
				alt={image.alt}
				style={`object-position: ${image.position ?? 'center'}`}
			/>

			{#if image.caption}
				<p>{image.caption}</p>
			{/if}
		</div>
	</dialog>
{/if}
