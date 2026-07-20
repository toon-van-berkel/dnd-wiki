<script lang="ts">
	import Author from '$lib/components/Author/Author.svelte';
	import ActionButton from '$lib/components/forms/ActionButton.svelte';
	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { getPageEntry, type PageId, type PageRegistryEntry } from '$lib/page/registry';
	import { resolveAppPath } from '$lib/utils/paths';

	import {
		appearanceCharacteristics,
		chakrabornActionPageIds,
		chakrabornRecommendedClassIds,
		chakrabornSummaryRows,
		chakrabornTraitHeadings,
		instinctiveTrainingSkillChoices,
		shinobiDoesNotGrant
	} from './page.data';

	function requirePageEntry(pageId: PageId): PageRegistryEntry {
		const entry = getPageEntry(pageId);

		if (!entry) {
			throw new Error(`Chakraborn references unknown page ${pageId}`);
		}

		return entry;
	}

	function requireAuthorId(pageId: PageId) {
		const entry = requirePageEntry(pageId);

		if (!entry.authorId) {
			throw new Error(`${pageId} is missing author metadata`);
		}

		return entry.authorId;
	}

	function traitById(id: string) {
		const trait = chakrabornTraitHeadings.find((entry) => entry.id === id);

		if (!trait) {
			throw new Error(`Unknown Chakraborn trait ${id}`);
		}

		return trait;
	}

	const authorId = requireAuthorId('species--chakraborn');
	const recommendedClasses = chakrabornRecommendedClassIds.map(requirePageEntry);
	const actionPages = chakrabornActionPageIds.map(requirePageEntry);
	const shinobiPage = requirePageEntry('classes--shinobi');
	const shinobiTechniquesPage = requirePageEntry('spells-and-abilities--techniques');
</script>

{#snippet traitHeading(id: string)}
	{@const trait = traitById(id)}
	<h3 id={trait.id}>
		<IconLabel icon={trait.icon}>
			<strong>{trait.title}</strong>
		</IconLabel>
	</h3>
{/snippet}

<PageSection title="Chakraborn Overview">
	<Author personId={authorId} />

	<p>
		Chakraborn are humanoids born with an unusually active chakra network. Their
		bodies instinctively circulate spiritual and physical energy, allowing them to
		perform feats of movement, perception and improbable survival that ordinary
		people achieve only through extensive training.
	</p>

	<p>
		Most Chakraborn appear human, although their chakra often leaves subtle
		physical signs. Their eyes might briefly glow while concentrating, markings may
		appear across their skin when their emotions intensify, or their presence may
		cause nearby dust, water or leaves to move unnaturally.
	</p>

	<p>
		Chakraborn communities often regard personal discipline as essential. An
		uncontrolled chakra network can be dangerous, while a trained Chakraborn can
		become an exceptional warrior, healer, scout or spiritual practitioner.
	</p>
</PageSection>

<PageSection
	id="species-summary"
	title="Species Summary"
>
	<div class="chakraborn-summary">
		<dl class="chakraborn-summary__facts">
			{#each chakrabornSummaryRows as row}
				<div>
					<dt>
						<IconLabel icon={row.icon}>
							<strong>{row.label}</strong>
						</IconLabel>
					</dt>
					<dd>{row.value}</dd>
				</div>
			{/each}
		</dl>

		<div class="chakraborn-summary__classes">
			<h3>Recommended Classes</h3>
			<ul>
				{#each recommendedClasses as entry}
					<li><a href={resolveAppPath(entry.href)}>{entry.title}</a></li>
				{/each}
			</ul>
			<p>A Chakraborn can belong to any class.</p>
		</div>
	</div>
</PageSection>

<PageSection
	id="chakraborn-traits"
	title="Chakraborn Traits"
>
	<div class="species-traits">
		<article class="species-trait">
			{@render traitHeading('ability-score-increase')}
			<p>Your Dexterity score increases by 2, and your Wisdom score increases by 1.</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('creature-type')}
			<p>You are a Humanoid.</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('age')}
			<p>
				Chakraborn mature at approximately the same rate as humans. Their developed
				chakra networks slow some of the effects of aging, allowing many Chakraborn
				to live for approximately 100 years.
			</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('size')}
			<p>Chakraborn vary greatly in height and build. Your size is Medium.</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('speed')}
			<p>Your walking speed is 30 feet.</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('instinctive-training')}
			<p>You gain proficiency in one of the following skills of your choice:</p>
			<ul class="inline-choice-list">
				{#each instinctiveTrainingSkillChoices as skill}
					<li>
						<IconLabel icon={skill.icon}>
							<strong>{skill.label}</strong>
						</IconLabel>
					</li>
				{/each}
			</ul>
		</article>

		<article class="species-trait">
			{@render traitHeading('chakra-tuned-movement')}
			<p>Your body instinctively directs chakra toward your muscles whenever you jump.</p>
			<p>
				You can use your Dexterity score and Dexterity modifier instead of your
				Strength score and Strength modifier when determining the distance of your
				long jumps and high jumps.
			</p>
			<p>
				In addition, you can make a standing long jump or standing high jump as
				though you had moved at least 10 feet immediately before the jump.
			</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('chakra-sense')}
			<p>You can briefly open your chakra network to perceive supernatural energy.</p>
			<p>
				You can cast Detect Magic with this trait without requiring material
				components. Wisdom is your spellcasting ability for the spell.
			</p>
			<p>
				Once you cast Detect Magic with this trait, you cannot do so again until you
				finish a long rest.
			</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('thread-of-fate')}
			<p>An improbable instinct occasionally directs you away from disaster.</p>
			<p>
				When you fail an attack roll, ability check or saving throw, you can roll
				1d4 and add the result to the failed roll, potentially turning it into a
				success.
			</p>
			<p>
				You cannot use this trait on a roll that has already been modified by a
				Fortune Die.
			</p>
			<p>Once you use this trait, you cannot use it again until you finish a long rest.</p>
		</article>

		<article class="species-trait">
			{@render traitHeading('languages')}
			<p>You can speak, read and write Common and one additional language of your choice.</p>
		</article>
	</div>
</PageSection>

<PageSection
	id="chakraborn-appearance"
	title="Chakraborn Appearance"
>
	<p>
		Chakraborn are physically diverse and can resemble humans from any region or
		culture. Their chakra usually reveals itself through subtle supernatural
		details rather than dramatic physical mutations.
	</p>

	<p>A Chakraborn might display one or more of the following characteristics:</p>

	<ul>
		{#each appearanceCharacteristics as characteristic}
			<li>{characteristic}</li>
		{/each}
	</ul>

	<p>
		These signs do not determine a Chakraborn's Chakra Nature, Rare Chakra Heritage
		or class.
	</p>
</PageSection>

<PageSection
	id="chakraborn-culture"
	title="Chakraborn Culture"
>
	<p>
		Chakraborn can arise within almost any humanoid community. Some are born into
		families that have carried strong chakra networks for generations, while others
		are the first in their lineage to display such abilities.
	</p>

	<p>
		Communities familiar with chakra often teach Chakraborn breathing exercises,
		meditation and physical discipline from an early age. In other places, their
		abilities may be mistaken for sorcery, divine intervention or uncontrolled
		magic.
	</p>

	<p>
		Because their abilities develop differently from person to person, no single
		profession defines the Chakraborn. They can become scouts, healers, soldiers,
		artisans, spiritual guides or adventurers.
	</p>

	<p>
		Many Chakraborn value self-control, but this does not require them to be calm,
		lawful or disciplined in personality. A character's relationship with their
		chakra is an individual choice.
	</p>
</PageSection>

<PageSection
	id="chakraborn-names"
	title="Chakraborn Names"
>
	<p>
		Chakraborn do not possess a universal naming tradition. They normally use the
		names of the culture, family or community in which they were raised.
	</p>

	<p>
		Some Chakraborn later adopt a title, callsign or personal name associated with
		their training, reputation or chakra.
	</p>
</PageSection>

<PageSection
	id="chakraborn-adventurers"
	title="Chakraborn Adventurers"
>
	<p>
		Chakraborn become adventurers for many of the same reasons as other people, but
		their unusual chakra often shapes the opportunities and dangers they encounter.
	</p>

	<p>
		Some leave home to find a teacher capable of explaining their abilities. Others
		seek lost techniques, protect their communities or attempt to understand why
		their chakra differs from that of those around them.
	</p>

	<p>
		A Chakraborn does not need to become a
		<a href={resolveAppPath(shinobiPage.href)}>{shinobiPage.title}</a>. Their
		natural traits also support warriors, scouts, monks, healers and spellcasters.
		The species represents an unusual chakra network, while a class represents the
		training used to develop it.
	</p>
</PageSection>

<PageSection
	id="chakraborn-and-shinobi"
	title="Chakraborn and Shinobi"
>
	<p>
		Chakraborn have a natural affinity for the
		<a href={resolveAppPath(shinobiPage.href)}>{shinobiPage.title}</a> class, but
		the species and class remain separate character choices.
	</p>

	<p>
		The Chakraborn species represents a body born with an unusually responsive
		chakra network.
	</p>

	<p>
		The Shinobi class represents martial training,
		<a href={resolveAppPath(shinobiTechniquesPage.href)}>Chakra Techniques</a>, a
		Chakra Origin and a specialized Shinobi Path.
	</p>

	<p>Choosing Chakraborn does not grant:</p>

	<ul>
		{#each shinobiDoesNotGrant as feature}
			<li>{feature}</li>
		{/each}
	</ul>

	<p>Those abilities are granted by the Shinobi class.</p>

	<p>
		A Chakraborn Shinobi combines their natural traits with formal chakra training,
		while a Chakraborn of another class expresses the same natural energy through a
		different discipline.
	</p>

	<div class="action-links">
		{#each actionPages as entry}
			<ActionButton href={resolveAppPath(entry.href)}>
				{entry.id === 'classes--shinobi' ? 'View the Shinobi Class' : 'View Shinobi Techniques'}
			</ActionButton>
		{/each}
	</div>
</PageSection>

<PageSection
	id="playing-a-chakraborn"
	title="Playing a Chakraborn"
>
	<p>
		Chakraborn traits emphasize mobility, awareness and survival rather than raw
		damage.
	</p>

	<p>
		Instinctive Training gives the character a flexible skill associated with
		awareness or physical training.
	</p>

	<p>
		Chakra-Tuned Movement supports agile characters by allowing Dexterity to
		determine jump distance.
	</p>

	<p>
		Chakra Sense provides limited supernatural awareness without replacing
		dedicated spellcasting.
	</p>

	<p>
		Thread of Fate provides one decisive chance to overcome failure, but cannot be
		combined with a Shinobi Fortune Die on the same roll.
	</p>

	<p>
		These traits allow Chakraborn to work well with many classes without making the
		Shinobi class mandatory.
	</p>
</PageSection>

<style lang="scss">
	@use './Chakraborn.scss';
</style>
