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

<PageSection
	id="multiclassing"
	title="Multiclassing"
	description="The requirements for multiclassing into or out of the Barbarian class."
>
	<p>
		You must have a Strength score of 13 or higher to multiclass into or out of the
		Barbarian class.
	</p>
</PageSection>

<PageSection
	id="core-traits"
	title="Core Barbarian Traits"
>
	<ClassTraits {...barbarianCoreTraits} />
</PageSection>

<PageSection
	id="barbarian-progression"
	title="Barbarian Progression"
	description="See how the Barbarian develops from level 1 to 20, gaining new features and becoming more powerful in combat."
>
	<ClassProgression {...barbarianProgression} />
</PageSection>

<PageSection
	id="class-features"
	title="Class Features"
	description="As a Barbarian, you gain the following class features at the levels shown in the Barbarian progression."
>
	<p>
		These features define how your Rage develops, improve your physical resilience,
		and increase your effectiveness in combat.
	</p>
</PageSection>

<PageSection
	id="rage"
	eyebrow="Level 1"
	title="Rage"
>
	<p>
		In battle, you fight with primal ferocity. On your turn, you can enter a Rage as
		a Bonus Action.
	</p>

	<p>
		While raging, you gain the following benefits when you are not wearing Heavy
		Armor:
	</p>

	<ul>
		<li>
			You have Advantage on Strength checks and Strength Saving Throws.
		</li>
		<li>
			When you make a melee weapon attack using Strength, you gain a bonus to the
			damage roll. This bonus is shown in the Rage Damage column of the Barbarian
			progression.
		</li>
		<li>
			You have Resistance to Bludgeoning, Piercing, and Slashing damage.
		</li>
	</ul>

	<p>
		While raging, you cannot cast spells or maintain Concentration on a spell.
	</p>

	<h3>Duration</h3>

	<p>
		Your Rage lasts for 1 minute. It ends early when you are knocked Unconscious.
		It also ends when your turn finishes and you have neither attacked a hostile
		creature since the end of your previous turn nor taken damage since then.
	</p>

	<p>
		You can end your Rage on your turn as a Bonus Action.
	</p>

	<h3>Uses</h3>

	<p>
		You can Rage the number of times shown for your Barbarian level in the Rages
		column of the Barbarian progression. You regain all expended uses when you
		finish a Long Rest.
	</p>
</PageSection>

<PageSection
	id="unarmored-defense"
	eyebrow="Level 1"
	title="Unarmored Defense"
>
	<p>
		While you are not wearing armor, your Armor Class equals:
	</p>

	<p>
		<strong>
			10 + your Dexterity modifier + your Constitution modifier
		</strong>
	</p>

	<p>
		You can use a Shield and still gain this benefit.
	</p>
</PageSection>

<PageSection
	id="reckless-attack"
	eyebrow="Level 2"
	title="Reckless Attack"
>
	<p>
		Starting at 2nd level, you can throw aside all concern for defense and attack
		with fierce desperation.
	</p>

	<p>
		When you make your first attack on your turn, you can decide to attack
		recklessly. Doing so gives you Advantage on melee weapon attack rolls using
		Strength during that turn.
	</p>

	<p>
		However, attack rolls against you have Advantage until the start of your next
		turn.
	</p>
</PageSection>

<PageSection
	id="danger-sense"
	eyebrow="Level 2"
	title="Danger Sense"
>
	<p>
		At 2nd level, you gain an uncanny sense of when things nearby are not as they
		should be, giving you an edge when avoiding danger.
	</p>

	<p>
		You have Advantage on Dexterity Saving Throws against effects you can see, such
		as traps and spells.
	</p>

	<p>
		You cannot gain this benefit while you are Blinded, Deafened, or Incapacitated.
	</p>
</PageSection>

<PageSection
	id="primal-path"
	eyebrow="Levels 3, 6, 10, and 14"
	title="Primal Path"
>
	<p>
		At 3rd level, you choose a Primal Path that shapes the nature and source of your
		Rage.
	</p>

	<p>
		Your chosen path grants you features at 3rd level and again at 6th, 10th, and
		14th level.
	</p>

	<h3>Primal Paths</h3>

	<ul>
		<li>
			<strong>Path of the Ancestral Guardian:</strong>
			<em>Xanathar's Guide to Everything</em>
		</li>
		<li>
			<strong>Path of the Battlerager:</strong>
			<em>Sword Coast Adventurer's Guide</em>
		</li>
		<li>
			<strong>Path of the Beast:</strong>
			<em>Tasha's Cauldron of Everything</em>
		</li>
		<li>
			<strong>Path of the Berserker:</strong>
			<em>Player's Handbook</em>
		</li>
		<li>
			<strong>Path of the Giant:</strong>
			<em>Bigby Presents: Glory of the Giants</em>
		</li>
		<li>
			<strong>Path of the Storm Herald:</strong>
			<em>Xanathar's Guide to Everything</em>
		</li>
		<li>
			<strong>Path of the Totem Warrior:</strong>
			<em>Player's Handbook</em>
		</li>
		<li>
			<strong>Path of Wild Magic:</strong>
			<em>Tasha's Cauldron of Everything</em>
		</li>
		<li>
			<strong>Path of the Zealot:</strong>
			<em>Xanathar's Guide to Everything</em>
		</li>
	</ul>

	<details>
		<summary>Archived Unearthed Arcana paths</summary>

		<ul>
			<li>
				<strong>Path of the Beast:</strong>
				<em>Unearthed Arcana 67 — Subclasses, Part 1</em>
			</li>
			<li>
				<strong>Path of the Giant:</strong>
				<em>Unearthed Arcana 83 — Giant Options</em>
			</li>
			<li>
				<strong>Path of the Wild Soul:</strong>
				<em>Unearthed Arcana 60 — Barbarian and Monk</em>
			</li>
		</ul>
	</details>
</PageSection>

<PageSection
	id="primal-knowledge"
	eyebrow="Levels 3 and 10 · Optional feature"
	title="Primal Knowledge"
>
	<p>
		When you reach 3rd level, and again at 10th level, you gain Proficiency in one
		skill of your choice from the skills available to Barbarians at 1st level:
	</p>

	<ul>
		<li>Animal Handling</li>
		<li>Athletics</li>
		<li>Intimidation</li>
		<li>Nature</li>
		<li>Perception</li>
		<li>Survival</li>
	</ul>
</PageSection>

<PageSection
	id="ability-score-improvement"
	eyebrow="Levels 4, 8, 12, 16, and 19"
	title="Ability Score Improvement"
>
	<p>
		When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, choose
		one of the following options:
	</p>

	<ul>
		<li>
			Increase one Ability Score of your choice by 2.
		</li>
		<li>
			Increase two Ability Scores of your choice by 1 each.
		</li>
	</ul>

	<p>
		You cannot increase an Ability Score above 20 using this feature.
	</p>
</PageSection>

<PageSection
	id="extra-attack"
	eyebrow="Level 5"
	title="Extra Attack"
>
	<p>
		Beginning at 5th level, you can attack twice, instead of once, whenever you take
		the Attack action on your turn.
	</p>
</PageSection>

<PageSection
	id="fast-movement"
	eyebrow="Level 5"
	title="Fast Movement"
>
	<p>
		Starting at 5th level, your Speed increases by 10 feet while you are not wearing
		Heavy Armor.
	</p>
</PageSection>

<PageSection
	id="feral-instinct"
	eyebrow="Level 7"
	title="Feral Instinct"
>
	<p>
		By 7th level, your instincts are so honed that you have Advantage on Initiative
		rolls.
	</p>

	<p>
		Additionally, when you are Surprised at the beginning of combat and are not
		Incapacitated, you can act normally during your first turn. You must enter your
		Rage before doing anything else during that turn.
	</p>
</PageSection>

<PageSection
	id="instinctive-pounce"
	eyebrow="Level 7 · Optional feature"
	title="Instinctive Pounce"
>
	<p>
		At 7th level, as part of the Bonus Action you take to enter your Rage, you can
		move up to half your Speed.
	</p>
</PageSection>

<PageSection
	id="brutal-critical"
	eyebrow="Levels 9, 13, and 17"
	title="Brutal Critical"
>
	<p>
		Beginning at 9th level, you can roll additional weapon damage dice when
		determining the extra damage for a Critical Hit with a melee attack.
	</p>

	<ul>
		<li>
			<strong>9th level:</strong> one additional weapon damage die
		</li>
		<li>
			<strong>13th level:</strong> two additional weapon damage dice
		</li>
		<li>
			<strong>17th level:</strong> three additional weapon damage dice
		</li>
	</ul>
</PageSection>

<PageSection
	id="relentless-rage"
	eyebrow="Level 11"
	title="Relentless Rage"
>
	<p>
		Starting at 11th level, your Rage can keep you fighting despite grievous wounds.
	</p>

	<p>
		When you drop to 0 Hit Points while raging and do not die outright, you can make
		a DC 10 Constitution Saving Throw. On a success, you drop to 1 Hit Point instead.
	</p>

	<p>
		Each time you use this feature after the first, the Difficulty Class increases
		by 5. When you finish a Short or Long Rest, the Difficulty Class resets to 10.
	</p>
</PageSection>

<PageSection
	id="persistent-rage"
	eyebrow="Level 15"
	title="Persistent Rage"
>
	<p>
		Beginning at 15th level, your Rage ends early only when you fall Unconscious or
		when you choose to end it.
	</p>
</PageSection>

<PageSection
	id="indomitable-might"
	eyebrow="Level 18"
	title="Indomitable Might"
>
	<p>
		Beginning at 18th level, when your total for a Strength check is lower than your
		Strength score, you can use your Strength score in place of the check's total.
	</p>
</PageSection>

<PageSection
	id="primal-champion"
	eyebrow="Level 20"
	title="Primal Champion"
>
	<p>
		At 20th level, you embody the power of the wilds.
	</p>

	<ul>
		<li>Your Strength score increases by 4.</li>
		<li>Your Constitution score increases by 4.</li>
		<li>Your maximum Strength score becomes 24.</li>
		<li>Your maximum Constitution score becomes 24.</li>
	</ul>
</PageSection>