<script lang="ts">
	import { onMount } from 'svelte';
	import ActionButton from '$lib/components/forms/ActionButton.svelte';
	import SelectField from '$lib/components/forms/SelectField.svelte';
	import Panel from '$lib/components/layout/Panel.svelte';
	import {
		dungeonMasters,
		isDungeonMasterId,
		isPartyId,
		parties
	} from '$lib/config/campaigns';
	import {
		clearWikiPreferences,
		createEmptyWikiPreferences,
		loadWikiPreferences,
		saveWikiPreferences,
		sanitizeWikiPreferences,
		type WikiPreferences
	} from '$lib/utils/wiki-preferences';

	let preferences = $state<WikiPreferences>(createEmptyWikiPreferences());
	let saved = $state(false);

	let hasPreferences = $derived(Boolean(preferences.partyId || preferences.dmId));
	const partyOptions = [
		{ value: '', label: 'No preferred party' },
		...parties.map((party) => ({ value: party.id, label: party.name }))
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

<Panel
	title="Wiki preferences"
	description="Choose a party and Dungeon Master to personalise availability information throughout the Wiki."
>
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
				Preferences do not hide unrelated Wiki content. Search filters are managed separately on the Search page.
			{/if}
		</p>

		<ActionButton onclick={clearPreferences} disabled={!hasPreferences}>Clear preferences</ActionButton>
	</div>
</Panel>

<style lang="scss">
	@use './WikiPreferences.scss';
</style>
