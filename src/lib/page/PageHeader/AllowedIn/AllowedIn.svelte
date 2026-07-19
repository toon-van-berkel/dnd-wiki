<script lang="ts">
	import { getPartyDisplayName, type PartyId } from '$lib/config/parties';
	import type { PageAvailability } from '$lib/data/availability';

	let { availability }: { availability: PageAvailability } = $props();

	type StatusItem = {
		id: keyof PageAvailability;
		label: string;
		partyIds: readonly PartyId[];
	};

	const statuses = $derived<StatusItem[]>(
		([
			{ id: 'allowed', label: 'Allowed', partyIds: availability.allowed ?? [] },
			{ id: 'limited', label: 'Limited', partyIds: availability.limited ?? [] },
			{ id: 'banned', label: 'Banned', partyIds: availability.banned ?? [] },
			{ id: 'approval', label: 'Approval required', partyIds: availability.approval ?? [] }
		] satisfies StatusItem[]).filter((status) => status.partyIds.length > 0)
	);
</script>

<div class="allowedin">
	{#each statuses as status}
		<div class="allowedin__status allowedin__status--{status.id}">
			<h3 class="allowedin__status-title">{status.label}:</h3>

			<ul class="allowedin__status-list">
				{#each status.partyIds as partyId, index}
					<li class="allowedin__status-list-item">
						{getPartyDisplayName(partyId)}{#if index < status.partyIds.length - 1},{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style lang="scss">
	@use './AllowedIn.scss';
</style>
