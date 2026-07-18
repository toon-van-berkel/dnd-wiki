<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import WikiPreferences from '$lib/preferences/WikiPreferences.svelte';
	import { resolveAppPath } from '$lib/utils/paths';
</script>

<WikiPreferences />

<PageSection title="How preferences work">
	<p>
		Party and Dungeon Master preferences can help the Wiki highlight relevant
		availability information. They do not hide unrelated content, and they are
		separate from temporary search filters on the <a href={resolveAppPath('/search')}>Search page</a>.
	</p>
</PageSection>
