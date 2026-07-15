<script lang="ts">
	import { page } from '$app/state';
	import {
		availability,
		type PageAvailability
	} from '$lib/data/availability';
	import { getAvailabilityLabel } from '$lib/utils/availability-metadata';

	type AvailabilityValues = string[];

	type Props = {
		allowed?: AvailabilityValues;
		limited?: AvailabilityValues;
		banned?: AvailabilityValues;
		approval?: AvailabilityValues;
	};

	let {
		allowed,
		limited,
		banned,
		approval
	}: Props = $props();

	function getAvailabilityFromPath(pathname: string): PageAvailability {
		const cleanPath = pathname
			.split('?')[0]
			.split('#')[0]
			.replace(/^\/+|\/+$/g, '');

		const [category, pageName] = cleanPath.split('/');

		if (!category || !pageName) {
			return {};
		}

		return availability[category]?.[pageName] ?? {};
	}

	let pageAvailability = $derived({
		...getAvailabilityFromPath(page.url.pathname),
		allowed,
		limited,
		banned,
		approval
	});

	let groups = $derived(
		[
			{
				label: 'Allowed',
				values: pageAvailability.allowed ?? [],
				partyLabel: getAvailabilityLabel(pageAvailability.allowed ?? []),
				tone: 'allowed'
			},
			{
				label: 'Limited',
				values: pageAvailability.limited ?? [],
				partyLabel: getAvailabilityLabel(pageAvailability.limited ?? []),
				tone: 'limited'
			},
			{
				label: 'Banned',
				values: pageAvailability.banned ?? [],
				partyLabel: getAvailabilityLabel(pageAvailability.banned ?? []),
				tone: 'banned'
			},
			{
				label: 'Needs approval',
				values: pageAvailability.approval ?? [],
				partyLabel: getAvailabilityLabel(pageAvailability.approval ?? []),
				tone: 'approval'
			}
		].filter((group) => group.values.length)
	);
</script>

{#if groups.length}
	<div class="availability" aria-label="Campaign availability">
		{#each groups as group}
			<div class="availability__group availability__group--{group.tone}">
				<strong>{group.label} in</strong>
				<span>{group.partyLabel}</span>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	@use './AvailabilityBadges.scss';
</style>
