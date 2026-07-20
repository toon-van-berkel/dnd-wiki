<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { getPerson } from '$lib/config/people';

	import type { Props } from './Author-Types';

	let {
		personId,
		role = 'Author',
		subject,
		description,
		showAliases = true,
		class: className = ''
	}: Props = $props();

	const person = $derived(getPerson(personId));
	const aliases = $derived(showAliases ? person.aliases ?? [] : []);
	const displayName = $derived(
		aliases.length ? `${person.name} (${aliases.join(', ')})` : person.name
	);
	const authorClass = $derived(['author-credit', className].filter(Boolean).join(' '));
</script>

<aside class={authorClass} aria-label={subject ? `Author credit for ${subject}` : 'Author credit'}>
	<Icon
		src="entity.person"
		size="1.15rem"
	/>

	<div class="author-credit__content">
		<span class="author-credit__role">{role}</span>
		<strong class="author-credit__name">{displayName}</strong>

		{#if description}
			<p>{description}</p>
		{/if}
	</div>
</aside>

<style lang="scss">
	@use './Author.scss';
</style>
