<script lang="ts">
	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';

	import TechniqueReference from '../TechniqueReference.svelte';
	import { shinobiTechniques } from '../techniques.data';
</script>

<PageSection title="Technique Overview">
	<p>
		Shinobi techniques convert Chakra Points into supernatural attacks, defenses,
		movement and utility effects.
	</p>
	<p>
		Each technique has a rank, Chakra Point cost, activation time, range, duration
		and category. A Shinobi cannot learn a technique whose rank exceeds the Maximum
		Technique Rank shown for their Shinobi level.
	</p>

	<ul>
		<li>
			<IconLabel icon="attribute.saving-throw"><strong>Technique Save DC:</strong></IconLabel>
			8 + proficiency bonus + Wisdom modifier
		</li>
		<li>
			<IconLabel icon="d20test.attacking"><strong>Technique Attack Modifier:</strong></IconLabel>
			proficiency bonus + Wisdom modifier
		</li>
	</ul>
</PageSection>

<PageSection title="Technique Categories">
	<dl>
		<dt><strong>Universal</strong></dt>
		<dd>Available to every Shinobi.</dd>

		<dt><strong>Nature</strong></dt>
		<dd>Requires the listed Chakra Nature.</dd>

		<dt><strong>Heritage</strong></dt>
		<dd>Requires the listed Rare Chakra Heritage.</dd>

		<dt><strong>Path</strong></dt>
		<dd>Requires the listed Shinobi Path.</dd>

		<dt><strong>Restricted</strong></dt>
		<dd>A powerful technique with an additional usage limit or consequence.</dd>
	</dl>
</PageSection>

<TechniqueReference techniques={shinobiTechniques} />
