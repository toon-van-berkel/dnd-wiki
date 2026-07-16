<script lang="ts">
	import { getAvailabilityByHref } from '$lib/data/availability';

	import { getAvailabilityLabel } from '$lib/utils/availability-metadata';

	type Props = {
		href: string;
	};

	let { href }: Props = $props();

	let pageAvailability = $derived(getAvailabilityByHref(href));

	let groups = $derived(
		[
			{
				label: 'Allowed',
				values: pageAvailability.allowed ?? [],
				tone: 'allowed'
			},
			{
				label: 'Limited',
				values: pageAvailability.limited ?? [],
				tone: 'limited'
			},
			{
				label: 'Banned',
				values: pageAvailability.banned ?? [],
				tone: 'banned'
			},
			{
				label: 'Needs approval',
				values: pageAvailability.approval ?? [],
				tone: 'approval'
			}
		]
			.filter((group) => group.values.length > 0)
			.map((group) => ({
				...group,
				partyLabel: getAvailabilityLabel(group.values)
			}))
	);
</script>

{#if groups.length > 0}
	<div class="availability" aria-label="Campaign availability">
		{#each groups as group}
			<div
				class="availability__group availability__group--{group.tone}"
			>
				<strong>{group.label} in</strong>
				<span>{group.partyLabel}</span>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	@use './AvailabilityBadges.scss';
</style>
