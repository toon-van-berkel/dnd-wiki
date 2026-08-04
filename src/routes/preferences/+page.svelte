<!--
	Location: src/routes/preferences/+page.svelte
	Use: Browser-local website preference controls.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import {
		getImageGenderPreference,
		getSpellViewPreference,
		imageGenderPreferences,
		setImageGenderPreference,
		setSpellViewPreference,
		spellViewPreferences,
		type ImageGenderPreference,
		type SpellViewPreference
	} from '$lib/typescript/pages/preferences';

	const imageGenderLabels = {
		random: {
			title: 'Random',
			description: 'Use a stable random male or female image during this browser session.'
		},
		female: {
			title: 'Female',
			description: 'Prefer female artwork when a page or card has that image available.'
		},
		male: {
			title: 'Male',
			description: 'Prefer male artwork when a page or card has that image available.'
		}
	} as const satisfies Record<
		ImageGenderPreference,
		{ title: string; description: string }
	>;

	const spellViewLabels = {
		cards: {
			title: 'Cards',
			description: 'Show spell results as visual cards with compact spell metadata.'
		},
		list: {
			title: 'List',
			description: 'Show spell results as a denser list for faster scanning.'
		},
		table: {
			title: 'Table',
			description: 'Show spell results in rows and columns for comparison.'
		}
	} as const satisfies Record<
		SpellViewPreference,
		{ title: string; description: string }
	>;

	let imageGenderPreference = $state<ImageGenderPreference>('random');
	let spellViewPreference = $state<SpellViewPreference>('cards');
	let hasMounted = $state(false);

	onMount(() => {
		imageGenderPreference = getImageGenderPreference();
		spellViewPreference = getSpellViewPreference();
		hasMounted = true;
	});

	$effect(() => {
		if (!hasMounted) {
			return;
		}

		setImageGenderPreference(imageGenderPreference);
		setSpellViewPreference(spellViewPreference);
	});
</script>

<article class="wiki-article preferences-page">
	<PageHeader />

	<form class="preferences-panel" aria-label="Website preferences">
		<section class="preferences-panel__section" aria-labelledby="image-preference-title">
			<div class="preferences-panel__section-header">
				<p>Artwork</p>
				<h2 id="image-preference-title">Class image preference</h2>
			</div>

			<fieldset class="preferences-options">
				<legend>Choose image preference</legend>

				{#each imageGenderPreferences as preference}
					<label class="preference-option" class:preference-option--active={imageGenderPreference === preference}>
						<input
							id={`image-gender-${preference}`}
							name="image-gender-preference"
							type="radio"
							bind:group={imageGenderPreference}
							value={preference}
						/>
						<span class="preference-option__title">
							{imageGenderLabels[preference].title}
						</span>
						<span class="preference-option__description">
							{imageGenderLabels[preference].description}
						</span>
					</label>
				{/each}
			</fieldset>
		</section>

		<section class="preferences-panel__section" aria-labelledby="spell-view-preference-title">
			<div class="preferences-panel__section-header">
				<p>Spells</p>
				<h2 id="spell-view-preference-title">Spell browser view</h2>
			</div>

			<fieldset class="preferences-options">
				<legend>Choose spell browser view</legend>

				{#each spellViewPreferences as preference}
					<label class="preference-option" class:preference-option--active={spellViewPreference === preference}>
						<input
							id={`spell-view-${preference}`}
							name="spell-view-preference"
							type="radio"
							bind:group={spellViewPreference}
							value={preference}
						/>
						<span class="preference-option__title">
							{spellViewLabels[preference].title}
						</span>
						<span class="preference-option__description">
							{spellViewLabels[preference].description}
						</span>
					</label>
				{/each}
			</fieldset>
		</section>
	</form>
</article>
