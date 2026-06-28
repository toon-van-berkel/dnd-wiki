<script lang="ts">
	type Props = {
		allowed?: string[];
		limited?: string[];
		banned?: string[];
		approval?: string[];
	};

	let {
		allowed = [],
		limited = [],
		banned = [],
		approval = []
	}: Props = $props();

	let groups = $derived([
		{ label: 'Allowed', values: allowed, tone: 'allowed' },
		{ label: 'Limited', values: limited, tone: 'limited' },
		{ label: 'Banned', values: banned, tone: 'banned' },
		{ label: 'Needs approval', values: approval, tone: 'approval' }
	].filter((group) => group.values.length));
</script>

{#if groups.length}
	<div class="availability" aria-label="Campaign availability">
		{#each groups as group}
			<div class="availability__group availability__group--{group.tone}">
				<strong>{group.label} in</strong>
				<span>{group.values.join(', ')}</span>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	@use './AvailabilityBadges.scss';
</style>
