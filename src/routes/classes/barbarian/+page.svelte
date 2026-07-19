<!-- site\src\routes\classes\barbarian\+page.svelte -->
<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import ClassTraits from '$lib/pages/ClassTraits/ClassTraits.svelte';
	import ClassProgression from '$lib/pages/ClassProgression/ClassProgression.svelte';

	import {
		barbarianCoreTraits,
		barbarianProgression
	} from './page.data';
</script>

<PageSection title="Core Barbarian Traits">
	<ClassTraits {...barbarianCoreTraits} />
</PageSection>

<PageSection
	title="Barbarian Progression"
	description="See how the Barbarian develops from level 1 to 20, gaining new features and becoming more powerful in combat."
>
	<ClassProgression {...barbarianProgression} />
</PageSection>