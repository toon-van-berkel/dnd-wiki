<script lang="ts">
	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import WikiTable from '$lib/components/WikiTable/WikiTable.svelte';
	import ChildLinkGrid from '$lib/components/ChildLinkGrid/ChildLinkGrid.svelte';
	import { getPageChildren } from '$lib/page/registry';
	import ClassProgression from '$lib/pages/ClassProgression/ClassProgression.svelte';
	import ClassTraits from '$lib/pages/ClassTraits/ClassTraits.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { resolveAppPath } from '$lib/utils/paths';

	import { shinobiPageData } from './page.data';
	import { shinobiPaths } from './paths.data';

	const childPages = getPageChildren('classes--shinobi').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));
</script>

<PageSection title="Shinobi Overview">
	<p>
		Shinobi are trained operatives who combine physical discipline with the
		supernatural manipulation of chakra. They move through the battlefield at
		extreme speed, deceive their enemies with transformations and illusions, and
		unleash techniques shaped by elemental affinities or inherited bloodlines.
	</p>

	<p>
		A Shinobi is defined by two major choices. A
		<IconLabel icon="monster.elemental"><strong>Chakra Origin</strong></IconLabel>
		determines the nature or heritage of the character's chakra, while a
		<IconLabel icon="game.character"><strong>Shinobi Path</strong></IconLabel>
		determines how that power is trained and applied. Two Shinobi can share the
		same Chakra Origin while fighting in completely different ways.
	</p>
</PageSection>

<PageSection
	id="core-traits"
	title="Class Summary"
>
	<ClassTraits {...shinobiPageData.coreTraits} />

	<WikiTable
		caption="Shinobi Class Summary"
		columns={['Trait', 'Rules']}
		rows={shinobiPageData.summaryRows}
	/>
</PageSection>

<PageSection
	id="hit-points"
	title="Hit Points"
>
	<WikiTable
		caption="Shinobi Hit Points"
		columns={['Entry', 'Rules']}
		rows={shinobiPageData.hitPointRows}
	/>
</PageSection>

<PageSection
	id="proficiencies"
	title="Proficiencies"
>
	<WikiTable
		caption="Shinobi Proficiencies"
		columns={['Entry', 'Rules']}
		rows={shinobiPageData.proficiencyRows}
	/>
</PageSection>

<PageSection
	id="shinobi-weapons"
	title="Shinobi Weapon Presentation"
>
	<p>
		These names represent alternative appearances for existing weapons. They do not
		change the weapon's normal statistics unless a Shinobi feature or technique
		explicitly states otherwise.
	</p>

	<WikiTable
		caption="Shinobi Weapon Names"
		columns={['Shinobi Weapon', 'Existing Weapon Statistics']}
		rows={shinobiPageData.weaponRows}
	/>
</PageSection>

<PageSection
	id="starting-equipment"
	title="Starting Equipment"
>
	<p>
		You start with the following equipment, in addition to the equipment granted by
		your background:
	</p>

	<ul>
		{#each shinobiPageData.startingEquipment as item}
			<li>{item}</li>
		{/each}
	</ul>

	<p>
		Alternatively, you can forgo this starting equipment and begin with 4d4 x 10 gp
		to purchase your own equipment.
	</p>
</PageSection>

<PageSection
	id="shinobi-progression"
	title="Shinobi Progression"
	description="See how the Shinobi develops from level 1 to 20 through Chakra, techniques, inherited manifestations, Fortune Dice and specialized training."
>
	<ClassProgression {...shinobiPageData.progression} />
</PageSection>

<PageSection
	id="shinobi-training"
	eyebrow="Level 1"
	title="Shinobi Training"
>
	<p>
		Your training has prepared you for infiltration, pursuit and sudden combat. You
		gain the proficiencies listed in the Shinobi class description and can use the
		names of traditional Shinobi weapons for existing weapon statistics.
	</p>
</PageSection>

<PageSection
	id="chakra-pool"
	eyebrow="Level 1"
	title="Chakra Pool"
>
	<p>
		You possess a pool of
		<IconLabel icon="game.spell"><strong>Chakra Points</strong></IconLabel>
		shown in the Chakra Points column of the Shinobi table. You expend Chakra
		Points to activate techniques and class features.
	</p>

	<p>
		You regain all expended Chakra Points when you finish a
		<IconLabel icon="game.rest"><strong>short or long rest</strong></IconLabel>.
		To regain Chakra Points during a rest, you must spend at least 30 minutes
		meditating, controlling your breathing, maintaining your equipment or performing
		chakra exercises.
	</p>

	<p>
		You cannot regain Chakra Points from more than two short rests between long
		rests.
	</p>
</PageSection>

<PageSection
	id="chakra-techniques"
	eyebrow="Level 1"
	title="Chakra Techniques"
>
	<h3>Technique Ability</h3>

	<p>
		<IconLabel icon="ability.wisdom"><strong>Wisdom</strong></IconLabel>
		is your technique ability for your Shinobi techniques. Your control over chakra
		depends on awareness, focus and mental discipline.
	</p>

	<ul>
		<li>
			<IconLabel icon="attribute.saving-throw"><strong>Technique Save DC:</strong></IconLabel>
			8 + your proficiency bonus + your Wisdom modifier
		</li>
		<li>
			<IconLabel icon="d20test.attacking"><strong>Technique Attack Modifier:</strong></IconLabel>
			your proficiency bonus + your Wisdom modifier
		</li>
	</ul>

	<h3>Technique Components</h3>

	<p>
		Shinobi techniques are performed through chakra control, physical movement and
		hand signs.
	</p>
	<p>
		Unless a technique states otherwise, you must be able to move at least one hand
		freely to activate it.
	</p>
	<p>
		You cannot activate a technique while Incapacitated, Unconscious, Petrified or
		unable to move either hand.
	</p>
	<p>Being silenced does not normally prevent you from activating a technique.</p>
	<p>
		A creature that can see you perform a technique can recognize that you are using
		a supernatural ability, even when it does not understand the specific technique.
	</p>

	<h3>Techniques and Armor</h3>

	<p>You can activate Shinobi techniques while wearing light armor.</p>
	<p>
		You cannot activate a Shinobi technique while wearing medium armor, heavy armor
		or wielding a shield unless that technique or another Shinobi feature explicitly
		allows it.
	</p>
	<p>
		A technique that is already active is suppressed while you wear prohibited armor
		or wield a shield. Its duration continues to pass while suppressed.
	</p>

	<h3>Learning Techniques</h3>

	<p>
		You learn three Rank I Shinobi techniques of your choice. The number of
		techniques you know increases as shown in the Techniques Known column of the
		Shinobi table.
	</p>
	<p>
		Whenever you gain a Shinobi level, you can replace one technique you know with
		another Shinobi technique for which you meet the requirements.
	</p>
	<p>
		You cannot learn a technique with a rank higher than the Maximum Technique Rank
		shown for your Shinobi level.
	</p>
	<p>Techniques are divided into four categories:</p>
	<ul>
		<li><strong>Universal Techniques:</strong> can be learned by any Shinobi.</li>
		<li><strong>Nature Techniques:</strong> require access to the listed Chakra Nature.</li>
		<li><strong>Heritage Techniques:</strong> require the listed Rare Chakra Heritage.</li>
		<li><strong>Path Techniques:</strong> require the listed Shinobi Path.</li>
	</ul>
	<p>
		A technique that requires concentration follows the normal concentration rules.
	</p>

	<p>
		<a href={resolveAppPath('/spells-and-abilities/techniques')}>
			View the Shinobi Technique List
		</a>
	</p>
</PageSection>

<PageSection
	id="chakra-origin"
	eyebrow="Level 1"
	title="Chakra Origin"
>
	<p>
		At 1st level, determine how your chakra developed. Choose Trained Affinity or
		Bloodline of Fate.
	</p>

	<h3>Trained Affinity</h3>
	<p>
		You developed a stable elemental affinity through training. Choose one of the
		following Chakra Natures:
	</p>
	<ul>
		<li>Fire Release</li>
		<li>Wind Release</li>
		<li>Lightning Release</li>
		<li>Earth Release</li>
		<li>Water Release</li>
	</ul>
	<p>You can learn Nature Techniques that require the chosen Chakra Nature.</p>
	<p>
		You also learn one additional Rank I Nature Technique associated with the chosen
		Chakra Nature. This technique does not count against your number of techniques
		known.
	</p>
	<p>
		Trained Affinity cannot grant a combined Chakra Nature, Rare Chakra Heritage or
		Dojutsu.
	</p>

	<h3>Bloodline of Fate</h3>
	<p>
		Rather than selecting a standard Chakra Nature, roll 1d100 on the Rare Chakra
		Heritage table. You must accept the result.
	</p>
	<p>This roll is not a d20 roll and cannot be modified by Fortune Dice.</p>
	<p>
		A Rare Chakra Heritage grants its listed initial manifestation and allows you to
		learn Heritage Techniques that require that heritage.
	</p>

	<WikiTable
		caption="Rare Chakra Heritage"
		columns={['d100', 'Rare Chakra Heritage']}
		rows={shinobiPageData.rareHeritageRows}
	/>

	<WikiTable
		caption="Initial Manifestations"
		columns={['Rare Chakra Heritage', 'Initial Manifestation']}
		rows={shinobiPageData.initialManifestations}
	/>
</PageSection>

<PageSection
	id="shinobi-step"
	eyebrow="Level 2"
	title="Shinobi Step"
>
	<p>
		As a bonus action, you can take the
		<IconLabel icon="movement.walking"><strong>Dash</strong></IconLabel>,
		<IconLabel icon="combat.bonus-action"><strong>Disengage</strong></IconLabel>
		or
		<IconLabel icon="skill.stealth"><strong>Hide</strong></IconLabel>
		action.
	</p>
</PageSection>

<PageSection
	id="fortune-dice"
	eyebrow="Level 2"
	title="Fortune Dice"
>
	<p>
		You possess a number of
		<IconLabel icon="dice.d20"><strong>Fortune Dice</strong></IconLabel>
		equal to your proficiency bonus. Your Fortune Die begins as a d6 and changes as
		shown in the Fortune Die column of the Shinobi table.
	</p>
	<p>
		When you or another creature you can see within 30 feet makes an attack roll,
		ability check or saving throw, you can use your reaction and expend one Fortune
		Die.
	</p>
	<p>Roll the die and either:</p>
	<ul>
		<li>Add the result to the roll made by you or an ally.</li>
		<li>Subtract the result from the roll made by an enemy.</li>
	</ul>
	<p>You decide after the d20 is rolled but before the outcome is announced.</p>
	<p>Only one Fortune Die can be applied to a roll.</p>
	<p>You regain all expended Fortune Dice when you finish a long rest.</p>
</PageSection>

<PageSection
	id="shinobi-path"
	eyebrow="Level 3"
	title="Shinobi Path"
>
	<p>
		At 3rd level, choose the specialized discipline through which you apply your
		Shinobi training:
	</p>
	<p>
		<a href={resolveAppPath('/classes/shinobi/paths')}>View the Shinobi Paths overview</a>
	</p>
	<ul>
		{#each shinobiPaths as path}
			<li><a href={resolveAppPath(path.href)}>{path.title}</a></li>
		{/each}
	</ul>
	<p>Your chosen path grants features at 3rd, 6th, 10th and 14th level.</p>
</PageSection>

<PageSection
	id="ability-score-improvement"
	eyebrow="Levels 4, 8, 12, 16 and 19"
	title="Ability Score Improvement"
>
	<p>
		When you reach this level, you can increase one ability score of your choice by
		2, increase two ability scores of your choice by 1, or select a feat for which
		you qualify. You cannot increase an ability score above 20 using this feature.
	</p>
</PageSection>

<PageSection
	id="extra-attack"
	eyebrow="Level 5"
	title="Extra Attack"
>
	<p>
		You can attack twice, instead of once, whenever you take the Attack action on
		your turn.
	</p>
	<p>
		Activating a technique is not the Attack action unless the technique explicitly
		states otherwise.
	</p>
</PageSection>

<PageSection
	id="chakra-infused-strike"
	eyebrow="Level 5"
	title="Chakra-Infused Strike"
>
	<p>
		Once on each of your turns when you hit a creature with a weapon attack or
		unarmed strike, you deal an additional 1d6 damage.
	</p>
	<p>
		The damage type is determined by the technique, Chakra Nature or Rare Chakra
		Heritage used to empower the strike. If no feature determines the damage type,
		the additional damage is force damage.
	</p>
	<p>The additional damage increases to 2d6 at 11th level and 3d6 at 17th level.</p>
</PageSection>

<PageSection
	id="developed-manifestation"
	eyebrow="Level 5"
	title="Developed Manifestation"
>
	<p>Your Chakra Origin develops further.</p>
	<p>
		If you selected Trained Affinity, learn one additional Nature Technique
		associated with your chosen Chakra Nature.
	</p>
	<p>
		If you selected Bloodline of Fate, learn one additional Heritage Technique
		associated with your Rare Chakra Heritage.
	</p>
	<p>
		The technique must be of a rank you can use and does not count against your
		number of techniques known.
	</p>
</PageSection>

<PageSection
	id="improved-fortune-6"
	eyebrow="Level 6"
	title="Improved Fortune"
>
	<p>Your Fortune Die becomes a d8.</p>
	<p>When you finish a short rest, you regain one expended Fortune Die.</p>
</PageSection>

<PageSection
	id="evasion"
	eyebrow="Level 7"
	title="Evasion"
>
	<p>
		When an effect allows you to make a Dexterity saving throw to take only half
		damage, you instead take no damage on a successful saving throw and half damage
		on a failed saving throw.
	</p>
	<p>You cannot use this feature while Incapacitated.</p>
</PageSection>

<PageSection
	id="chakra-movement"
	eyebrow="Level 9"
	title="Chakra Movement"
>
	<p>
		While you are not Incapacitated, you can move across liquids and vertical
		surfaces as though they were solid ground.
	</p>
	<p>You do not need to expend Chakra Points to maintain this movement.</p>
	<p>
		If you are knocked Prone or become Incapacitated while standing on a liquid or
		vertical surface, you immediately begin falling or sinking.
	</p>
</PageSection>

<PageSection
	id="advanced-manifestation"
	eyebrow="Level 9"
	title="Advanced Manifestation"
>
	<p>
		Once on each of your turns when you activate a technique associated with your
		Chakra Origin, add your Wisdom modifier to one damage roll or healing roll of
		that technique.
	</p>
	<p>
		If the technique produces neither damage nor healing, you instead gain temporary
		hit points equal to your Wisdom modifier after activating it.
	</p>
</PageSection>

<PageSection
	id="chakra-infused-strike-improvement-11"
	eyebrow="Level 11"
	title="Chakra-Infused Strike Improvement"
>
	<p>The additional damage from Chakra-Infused Strike becomes 2d6.</p>
</PageSection>

<PageSection
	id="improved-fortune-11"
	eyebrow="Level 11"
	title="Improved Fortune"
>
	<p>Your Fortune Die becomes a d10.</p>
	<p>When you finish a short rest, you regain up to two expended Fortune Dice.</p>
</PageSection>

<PageSection
	id="unbroken-focus"
	eyebrow="Level 13"
	title="Unbroken Focus"
>
	<p>
		You have advantage on Constitution saving throws made to maintain concentration
		on a Shinobi technique.
	</p>
	<p>
		When you fail a Constitution saving throw made to maintain concentration on a
		Shinobi technique, you can expend 2 Chakra Points to reroll the saving throw.
		You must use the new result.
	</p>
</PageSection>

<PageSection
	id="greater-manifestation"
	eyebrow="Level 13"
	title="Greater Manifestation"
>
	<p>
		Once on each of your turns when you activate a technique associated with your
		Chakra Origin, reduce its Chakra Point cost by 1, to a minimum cost of 1.
	</p>
</PageSection>

<PageSection
	id="perfect-chakra-control"
	eyebrow="Level 15"
	title="Perfect Chakra Control"
>
	<p>
		Once on each of your turns, reduce the
		<IconLabel icon="spell.cost"><strong>Chakra Point cost</strong></IconLabel>
		of one Rank I technique by 1, to a minimum cost of 0.
	</p>
	<p>
		Hostile effects cannot remove your Chakra Points unless you are
		<IconLabel icon="condition.unconscious"><strong>Unconscious</strong></IconLabel>.
	</p>
</PageSection>

<PageSection
	id="chakra-infused-strike-improvement-17"
	eyebrow="Level 17"
	title="Chakra-Infused Strike Improvement"
>
	<p>The additional damage from Chakra-Infused Strike becomes 3d6.</p>
</PageSection>

<PageSection
	id="perfected-manifestation"
	eyebrow="Level 17"
	title="Perfected Manifestation"
>
	<p>Choose one Rank IV or lower technique associated with your Chakra Origin.</p>
	<p>
		You can activate that technique once without expending Chakra Points. You regain
		this use when you finish a short or long rest.
	</p>
	<p>You can change the selected technique whenever you gain another Shinobi level.</p>
</PageSection>

<PageSection
	id="improved-fortune-17"
	eyebrow="Level 17"
	title="Improved Fortune"
>
	<p>Your Fortune Die becomes a d12.</p>
	<p>You regain all expended Fortune Dice when you finish a short or long rest.</p>
</PageSection>

<PageSection
	id="hidden-technique-mastery"
	eyebrow="Level 18"
	title="Hidden Technique Mastery"
>
	<p>Choose one Rank III or lower technique you know as your Signature Technique.</p>
	<p>The Chakra Point cost of the technique is reduced by 1, to a minimum cost of 0.</p>
	<p>
		You can activate the technique once without expending Chakra Points and regain
		this use when you finish a long rest.
	</p>
	<p>The technique cannot be removed, replaced or forgotten against your will.</p>
	<p>
		Whenever you gain a Shinobi level, you can choose a different qualifying
		technique as your Signature Technique.
	</p>
</PageSection>

<PageSection
	id="kage-state"
	eyebrow="Level 20"
	title="Kage State"
>
	<p>
		As a bonus action, you enter a Kage State for 1 minute. Once you use this
		feature, you cannot use it again until you finish a long rest.
	</p>
	<p>When the state begins:</p>
	<ul>
		<li>You immediately regain 10 Chakra Points.</li>
		<li>You have advantage on Dexterity and Wisdom saving throws.</li>
		<li>The Chakra Point cost of your techniques is reduced by 2, to a minimum cost of 1.</li>
		<li>Once on each of your turns, you can use a Fortune Die without expending it.</li>
		<li>Your walking speed increases by 20 feet.</li>
	</ul>
	<p>The Kage State ends early if you become Unconscious.</p>
</PageSection>

<PageSection
	id="multiclassing"
	title="Multiclassing"
>
	<p>
		To multiclass into or out of the Shinobi class, you must have a Dexterity score
		of at least 13 and a Wisdom score of at least 13.
	</p>

	<h3>Proficiencies Gained</h3>
	<p>When a character gains their first Shinobi level after 1st level, they gain:</p>
	<ul>
		<li>Light armor</li>
		<li>Simple weapons</li>
		<li>Shortswords</li>
		<li>Disguise kits</li>
		<li>One skill of their choice from the Shinobi skill list</li>
	</ul>

	<p>They do not gain:</p>
	<ul>
		<li>Shinobi saving throw proficiencies</li>
		<li>The additional tool choice</li>
		<li>Starting equipment</li>
		<li>The complete Shinobi weapon proficiency list</li>
	</ul>

	<h3>Chakra and Multiclassing</h3>
	<p>
		Your Chakra Points, techniques known and maximum technique rank are determined
		only by your Shinobi level.
	</p>
	<p>
		Chakra Points are separate from Ki Points, Sorcery Points, spell slots,
		Superiority Dice, Psionic Energy Dice and similar class resources.
	</p>
	<p>
		One resource cannot be spent in place of another unless a feature explicitly
		states otherwise.
	</p>
</PageSection>

<PageSection title="Shinobi References">
	<ChildLinkGrid links={childPages} />
</PageSection>
