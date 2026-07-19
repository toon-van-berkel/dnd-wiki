<script lang="ts">
	import { onMount } from 'svelte';
	import ActionButton from '$lib/components/forms/ActionButton.svelte';
	import SelectField from '$lib/components/forms/SelectField.svelte';
	import {
		dungeonMasters,
		getPartyDisplayName,
		isDungeonMasterId,
		isPartyId,
		getSortedParties
	} from '$lib/config/parties';
	import {
		clearWikiPreferences,
		createEmptyWikiPreferences,
		loadWikiPreferences,
		saveWikiPreferences,
		sanitizeWikiPreferences,
		type WikiPreferences
	} from './preferences';

	let preferences = $state<WikiPreferences>(createEmptyWikiPreferences());
	let saved = $state(false);

	let hasPreferences = $derived(
		Boolean(
			preferences.partyId ||
				preferences.dmId ||
				preferences.pageInformationPanel ||
				preferences.pageTags
		)
	);
	const partyOptions = [
		{ value: '', label: 'No preferred party' },
		...getSortedParties().map((party) => ({ value: party.id, label: getPartyDisplayName(party) }))
	];
	const dungeonMasterOptions = [
		{ value: '', label: 'No preferred Dungeon Master' },
		...dungeonMasters.map((dungeonMaster) => ({
			value: dungeonMaster.id,
			label: dungeonMaster.name
		}))
	];

	onMount(() => {
		preferences = loadWikiPreferences();
	});

	function updatePreference(nextPreference: WikiPreferences) {
		preferences = sanitizeWikiPreferences(nextPreference);
		saveWikiPreferences(preferences);
		saved = true;
	}

	function updatePartyPreference(partyId: string) {
		updatePreference({
			...preferences,
			partyId: isPartyId(partyId) ? partyId : undefined
		});
	}

	function updateDungeonMasterPreference(dmId: string) {
		updatePreference({
			...preferences,
			dmId: isDungeonMasterId(dmId) ? dmId : undefined
		});
	}

	function clearPreferences() {
		preferences = createEmptyWikiPreferences();
		clearWikiPreferences();
		saved = true;
	}
</script>

<section class="wiki-preferences" aria-labelledby="wiki-preferences-heading">
	<header class="wiki-preferences__header">
		<h2 id="wiki-preferences-heading">Wiki preferences</h2>
		<p>Choose a party and Dungeon Master to personalise availability information throughout the Wiki.</p>
	</header>

	<div class="wiki-preferences__fields">
		<SelectField
			id="preferred-party"
			label="Preferred party"
			value={preferences.partyId ?? ''}
			options={partyOptions}
			onChange={updatePartyPreference}
		/>

		<SelectField
			id="preferred-dungeon-master"
			label="Preferred Dungeon Master"
			value={preferences.dmId ?? ''}
			options={dungeonMasterOptions}
			onChange={updateDungeonMasterPreference}
		/>
	</div>

	<div class="wiki-preferences__footer">
		<p aria-live="polite">
			{#if saved}
				Preferences saved in this browser.
			{:else}
				Page display preferences are managed from page information panels. Search filters are managed separately on the Search page.
			{/if}
		</p>

		<ActionButton onclick={clearPreferences} disabled={!hasPreferences}>Clear preferences</ActionButton>
	</div>
</section>

<style lang="scss">
	@use './WikiPreferences.scss';
</style>
