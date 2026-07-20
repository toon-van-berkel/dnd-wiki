<script lang="ts">
	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import {
		getPersonShortDisplayName,
		type PersonId
	} from '$lib/config/people';

	type Props = {
		personId: PersonId;
		label?: string;
	};

	let { personId, label = 'Author' }: Props = $props();

	const displayName = $derived(getPersonShortDisplayName(personId));
</script>

<aside class="author" aria-label={`${label}: ${displayName}`}>
	<span class="author__label">{label}</span>
	<span class="author__name">
		<IconLabel icon="entity.person">
			<strong>{displayName}</strong>
		</IconLabel>
	</span>
</aside>

<style lang="scss">
	@use './Author.scss';
</style>
