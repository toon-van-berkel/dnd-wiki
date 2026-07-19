<!-- site\src\routes\classes\shinobi\+page.svelte -->
<script lang="ts">
	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import ClassTraits from '$lib/pages/ClassTraits/ClassTraits.svelte';
	import ClassProgression from '$lib/pages/ClassProgression/ClassProgression.svelte';

	import {
		shinobiCoreTraits,
		shinobiProgression
	} from './page.data';
</script>

<PageSection
	id="core-traits"
	title="Core Shinobi Traits"
>
	<ClassTraits {...shinobiCoreTraits} />
</PageSection>

<PageSection
	id="shinobi-progression"
	title="Shinobi Progression"
	description="See how the Shinobi develops from level 1 to 20 through Chakra, techniques, inherited manifestations, Fortune Dice, and specialized training."
>
	<ClassProgression {...shinobiProgression} />
</PageSection>

<PageSection
	id="class-features"
	title="Class Features"
	description="The Shinobi combines dependable martial mobility with a flexible collection of supernatural techniques."
>
	<p>
		The base class remains capable after its Chakra Points are spent. Chakra Techniques
		provide most of the class’s active damage, defense, control, movement, healing,
		infiltration, summoning, and utility.
	</p>
</PageSection>

<PageSection
	id="shinobi-training"
	eyebrow="Level 1"
	title="Shinobi Training"
>
	<p>
		Your training is built around
		<IconLabel icon="ability.dexterity"><strong>Dexterity</strong></IconLabel>
		and
		<IconLabel icon="ability.wisdom"><strong>Wisdom</strong></IconLabel>.
		Dexterity represents your attacks, physical precision, and movement, while
		Wisdom governs your chakra and techniques.
	</p>

	<p>
		<strong>Design status:</strong> this revision does not yet define the Shinobi’s
		rules listed below:
	</p>

	<ul>
		<li><IconLabel icon="dice.d12"><strong>Hit Die</strong></IconLabel></li>
		<li><IconLabel icon="entity.armor"><strong>Armor proficiencies</strong></IconLabel></li>
		<li><IconLabel icon="entity.weapon"><strong>Weapon proficiencies</strong></IconLabel></li>
		<li><IconLabel icon="entity.tool"><strong>Tool proficiencies</strong></IconLabel></li>
		<li><IconLabel icon="proficiency.proficient"><strong>Skill proficiencies</strong></IconLabel></li>
		<li><IconLabel icon="entity.pack"><strong>Starting equipment</strong></IconLabel></li>
		<li><IconLabel icon="game.character"><strong>Multiclassing requirements</strong></IconLabel></li>
	</ul>
</PageSection>

<PageSection
	id="chakra-pool"
	eyebrow="Level 1"
	title="Chakra Pool"
>
	<p>
		You have a pool of
		<IconLabel icon="game.spell"><strong>Chakra Points</strong></IconLabel>
		shown in the Chakra column of the Shinobi progression. You expend Chakra Points
		to activate techniques and class features.
	</p>

	<p>
		You regain all expended Chakra Points whenever you finish a
		<IconLabel icon="game.rest"><strong>Short or Long Rest</strong></IconLabel>.
	</p>

	<p>
		Because Chakra returns on a Short Rest, individual techniques can include their
		own restrictions. An
		<IconLabel icon="game.lock"><strong>extreme or ultimate technique</strong></IconLabel>
		can state that it cannot be used again until you finish a
		<IconLabel icon="game.rest"><strong>Long Rest</strong></IconLabel>, even when
		you have enough Chakra to pay its cost.
	</p>
</PageSection>

<PageSection
	id="chakra-techniques"
	eyebrow="Level 1"
	title="Chakra Techniques"
>
	<p>
		You learn the number of Chakra Techniques shown in the Techniques Known column
		of the Shinobi progression. The highest rank of technique you can learn is shown
		in the Maximum Rank column.
	</p>

	<ul>
		<li><strong>Rank I techniques:</strong> available from 1st level</li>
		<li><strong>Rank II techniques:</strong> available from 5th level</li>
		<li><strong>Rank III techniques:</strong> available from 9th level</li>
		<li><strong>Rank IV techniques:</strong> available from 13th level</li>
		<li><strong>Rank V techniques:</strong> available from 17th level</li>
	</ul>

	<h3>Technique Ability</h3>

	<p>
		<IconLabel icon="ability.wisdom"><strong>Wisdom</strong></IconLabel>
		is your technique ability.
	</p>

	<ul>
		<li>
			<IconLabel icon="attribute.saving-throw"><strong>Technique save DC:</strong></IconLabel>
			8 + your Proficiency Bonus + your Wisdom modifier
		</li>
		<li>
			<IconLabel icon="d20test.attacking"><strong>Technique attack modifier:</strong></IconLabel>
			your Proficiency Bonus + your Wisdom modifier
		</li>
	</ul>

	<h3>Technique Categories</h3>

	<dl>
		<dt><IconLabel icon="game.spell"><strong>Standard</strong></IconLabel></dt>
		<dd>
			These techniques cost Chakra and are intended for frequently used attacks,
			movement, defense, control, and utility.
		</dd>

		<dt><IconLabel icon="combat.target"><strong>Powerful</strong></IconLabel></dt>
		<dd>
			These techniques have a high Chakra cost, a prerequisite, or both. They are
			intended to create encounter-defining effects with meaningful resource pressure.
		</dd>

		<dt><IconLabel icon="game.lock"><strong>Extreme or Ultimate</strong></IconLabel></dt>
		<dd>
			These techniques are normally limited to once per Long Rest and can also cost
			Chakra. This category includes transformations, forbidden techniques, massive
			summons, and other decisive effects.
		</dd>
	</dl>

	<h3>Recommended Technique Roles</h3>

	<ul>
		<li>
			<IconLabel icon="combat.melee"><strong>Offensive:</strong></IconLabel>
			single-target attacks, area damage, weapon enhancements, and damaging conditions
		</li>
		<li>
			<IconLabel icon="entity.armor"><strong>Defensive:</strong></IconLabel>
			reactions, barriers, substitutions, resistances, and damage reduction
		</li>
		<li>
			<IconLabel icon="movement.walking"><strong>Movement:</strong></IconLabel>
			Body Flicker, teleportation, enhanced jumping, flight, and pursuit
		</li>
		<li>
			<IconLabel icon="condition.restrained"><strong>Control:</strong></IconLabel>
			restraining, blinding, frightening, forced movement, illusions, and terrain effects
		</li>
		<li>
			<IconLabel icon="entity.tool"><strong>Utility:</strong></IconLabel>
			clones, disguises, scouting, infiltration, sensory abilities, and communication
		</li>
		<li>
			<IconLabel icon="game.party"><strong>Support:</strong></IconLabel>
			healing, cleansing conditions, empowering allies, sealing, and protection
		</li>
	</ul>
</PageSection>

<PageSection
	id="chakra-origin"
	eyebrow="Levels 1, 5, 9, 13, and 17"
	title="Chakra Origin"
>
	<p>
		Your
		<IconLabel icon="monster.elemental"><strong>Chakra Origin</strong></IconLabel>
		describes the type of chakra or inherited power you possess. You select or roll
		your Origin at 1st level. It develops through five manifestations.
	</p>

	<p>
		Your Chakra Origin is separate from your Shinobi Path. Your Origin describes what
		power you possess, while your Path describes how you were trained.
	</p>

	<ul>
		<li>
			<strong>1st level — Initial Manifestation:</strong>
			an identity-defining ability or minor passive benefit
		</li>
		<li>
			<strong>5th level — Developed Manifestation:</strong>
			a reliable combat or utility improvement
		</li>
		<li>
			<strong>9th level — Advanced Manifestation:</strong>
			a distinctive technique, defense, or movement option
		</li>
		<li>
			<strong>13th level — Greater Manifestation:</strong>
			a powerful expression of the Origin
		</li>
		<li>
			<strong>17th level — Perfected Manifestation:</strong>
			a high-level capstone for the Origin
		</li>
	</ul>
</PageSection>

<PageSection
	id="shinobi-step"
	eyebrow="Level 2"
	title="Shinobi Step"
>
	<p>
		As a Bonus Action, you can take the
		<IconLabel icon="movement.walking"><strong>Dash</strong></IconLabel>,
		<IconLabel icon="combat.bonus-action"><strong>Disengage</strong></IconLabel>,
		or
		<IconLabel icon="skill.stealth"><strong>Hide</strong></IconLabel>
		action.
	</p>

	<p>
		This feature does not cost Chakra.
		<IconLabel icon="movement.walking"><strong>Movement techniques</strong></IconLabel>
		such as Body Flicker can still provide stronger effects, including teleportation,
		increased Speed, ignoring Difficult Terrain, or protection from
		<IconLabel icon="combat.reaction"><strong>Opportunity Attacks</strong></IconLabel>.
	</p>
</PageSection>

<PageSection
	id="fortune-dice"
	eyebrow="Levels 2, 6, 11, and 17"
	title="Fortune Dice"
>
	<p>
		You have a number of
		<IconLabel icon="dice.d20"><strong>Fortune Dice</strong></IconLabel>
		equal to your Proficiency Bonus.
	</p>

	<p>
		When you or a creature you can see within 30 feet makes an
		<IconLabel icon="d20test.attacking"><strong>attack roll</strong></IconLabel>,
		<IconLabel icon="attribute.skillcheck"><strong>Ability Check</strong></IconLabel>,
		or
		<IconLabel icon="attribute.saving-throw"><strong>Saving Throw</strong></IconLabel>,
		you can use your
		<IconLabel icon="combat.reaction"><strong>Reaction</strong></IconLabel>
		to roll one Fortune Die.
	</p>

	<ul>
		<li>Add the result to the roll of yourself or an ally.</li>
		<li>Subtract the result from the roll of an enemy.</li>
	</ul>

	<p>
		You decide whether to use the die after the d20 is rolled but before the outcome
		is announced.
	</p>

	<h3>Fortune Progression</h3>

	<ul>
		<li>
			<strong>Levels 2–5:</strong> your Fortune Dice are d6s. You regain all expended
			dice when you finish a
			<IconLabel icon="game.rest"><strong>Long Rest</strong></IconLabel>.
		</li>
		<li>
			<strong>Levels 6–10:</strong> your Fortune Dice become d8s. You regain one
			expended die after a
			<IconLabel icon="game.rest"><strong>Short Rest</strong></IconLabel>
			and all expended dice after a
			<IconLabel icon="game.rest"><strong>Long Rest</strong></IconLabel>.
		</li>
		<li>
			<strong>Levels 11–16:</strong> your Fortune Dice become d10s. You regain two
			expended dice after a
			<IconLabel icon="game.rest"><strong>Short Rest</strong></IconLabel>
			and all expended dice after a
			<IconLabel icon="game.rest"><strong>Long Rest</strong></IconLabel>.
		</li>
		<li>
			<strong>Levels 17–20:</strong> your Fortune Dice become d12s. You regain all
			expended dice after a
			<IconLabel icon="game.rest"><strong>Short or Long Rest</strong></IconLabel>.
		</li>
	</ul>
</PageSection>

<PageSection
	id="shinobi-path"
	eyebrow="Levels 3, 6, 10, and 14"
	title="Shinobi Path"
>
	<p>
		At 3rd level, you choose a Shinobi Path that represents how you were trained.
		Your Path functions as your subclass and grants features at 3rd, 6th, 10th, and
		14th level.
	</p>

	<h3>Available Paths</h3>

	<ul>
		<li><IconLabel icon="weapon.strike"><strong>Path of Taijutsu</strong></IconLabel></li>
		<li><IconLabel icon="monster.elemental"><strong>Path of Elemental Ninjutsu</strong></IconLabel></li>
		<li><IconLabel icon="spell.illusion"><strong>Path of Genjutsu</strong></IconLabel></li>
		<li><IconLabel icon="skill.medicine"><strong>Path of the Medical Shinobi</strong></IconLabel></li>
		<li><IconLabel icon="game.lock"><strong>Path of Sealing</strong></IconLabel></li>
		<li><IconLabel icon="entity.summon"><strong>Path of Summoning</strong></IconLabel></li>
		<li><IconLabel icon="skill.stealth"><strong>Path of Assassination</strong></IconLabel></li>
		<li><IconLabel icon="dice.d20"><strong>Path of Fortune</strong></IconLabel></li>
	</ul>

	<p>
		Your Chakra Origin does not determine your Path. A Bone Bloodline Shinobi can
		follow Taijutsu or Medical training, a Fire Release Shinobi can specialize in
		Genjutsu, and a Water Release Shinobi can specialize in Sealing.
	</p>
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
			Increase one
			<IconLabel icon="attribute.bonus"><strong>Ability Score</strong></IconLabel>
			of your choice by 2.
		</li>
		<li>
			Increase two
			<IconLabel icon="attribute.bonus"><strong>Ability Scores</strong></IconLabel>
			of your choice by 1 each.
		</li>
	</ul>

	<p>
		You cannot increase an
		<IconLabel icon="attribute.penalty"><strong>Ability Score above 20</strong></IconLabel>
		using this feature.
	</p>
</PageSection>

<PageSection
	id="extra-attack"
	eyebrow="Level 5"
	title="Extra Attack"
>
	<p>
		You can
		<IconLabel icon="d20test.attacking"><strong>attack twice</strong></IconLabel>,
		instead of once, whenever you take the
		<IconLabel icon="combat.action"><strong>Attack action</strong></IconLabel>
		on your turn.
	</p>

	<p>
		Using a
		<IconLabel icon="game.spell"><strong>technique</strong></IconLabel>
		is not normally the Attack action unless the technique states otherwise.
	</p>
</PageSection>

<PageSection
	id="chakra-infused-strike"
	eyebrow="Levels 5, 11, and 17"
	title="Chakra-Infused Strike"
>
	<p>
		Once on each of your turns when you hit a creature with a
		<IconLabel icon="entity.weapon"><strong>weapon attack</strong></IconLabel>
		or
		<IconLabel icon="weapon.strike"><strong>Unarmed Strike</strong></IconLabel>,
		you deal additional damage determined by your Shinobi level. This damage does
		not cost Chakra.
	</p>

	<ul>
		<li><strong>Levels 5–10:</strong> 1d6 additional damage</li>
		<li><strong>Levels 11–16:</strong> 2d6 additional damage</li>
		<li><strong>Levels 17–20:</strong> 3d6 additional damage</li>
	</ul>

	<p>
		The damage type is determined by your
		<IconLabel icon="game.spell"><strong>Chakra Origin</strong></IconLabel>.
	</p>

	<ul>
		<li><IconLabel icon="damage.fire"><strong>Fire:</strong></IconLabel> Fire damage</li>
		<li><IconLabel icon="damage.lightning"><strong>Lightning:</strong></IconLabel> Lightning damage</li>
		<li><IconLabel icon="damage.slashing"><strong>Wind:</strong></IconLabel> Slashing damage</li>
		<li><IconLabel icon="damage.bludgeoning"><strong>Earth:</strong></IconLabel> Bludgeoning damage</li>
		<li><IconLabel icon="damage.cold"><strong>Water:</strong></IconLabel> Cold or Bludgeoning damage</li>
		<li><IconLabel icon="damage.piercing"><strong>Bone Bloodline:</strong></IconLabel> Piercing damage</li>
	</ul>
</PageSection>

<PageSection
	id="evasion"
	eyebrow="Level 7"
	title="Evasion"
>
	<p>
		When an effect allows you to make a
		<IconLabel icon="ability.dexterity"><strong>Dexterity Saving Throw</strong></IconLabel>
		to take only half damage, you instead take no damage on a
		<IconLabel icon="util.tick"><strong>successful save</strong></IconLabel>
		and half damage on a
		<IconLabel icon="util.cross"><strong>failed save</strong></IconLabel>.
	</p>
</PageSection>

<PageSection
	id="chakra-movement"
	eyebrow="Level 9"
	title="Chakra Movement"
>
	<p>
		While you are not Incapacitated, you can
		<IconLabel icon="movement.walking"><strong>move</strong></IconLabel>
		across
		<IconLabel icon="movement.swimming"><strong>liquids</strong></IconLabel>
		and
		<IconLabel icon="movement.climbing"><strong>vertical surfaces</strong></IconLabel>
		as though they were solid ground.
	</p>

	<p>
		If you end your turn on such a surface, you must expend 1 Chakra Point or
		immediately begin
		<IconLabel icon="condition.prone"><strong>falling</strong></IconLabel>
		or
		<IconLabel icon="movement.swimming"><strong>sinking</strong></IconLabel>.
	</p>
</PageSection>

<PageSection
	id="unbroken-focus"
	eyebrow="Level 13"
	title="Unbroken Focus"
>
	<p>
		You have Advantage on
		<IconLabel icon="ability.constitution"><strong>Constitution Saving Throws</strong></IconLabel>
		made to maintain
		<IconLabel icon="game.concentration"><strong>Concentration</strong></IconLabel>
		on a technique.
	</p>

	<p>
		When you fail such a Saving Throw, you can expend
		<IconLabel icon="game.spell"><strong>2 Chakra Points</strong></IconLabel>
		to
		<IconLabel icon="dice.roll"><strong>reroll</strong></IconLabel>
		it. You must use the new result.
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
		<IconLabel icon="game.hazard"><strong>Hostile effects</strong></IconLabel>
		cannot remove your Chakra Points unless you are
		<IconLabel icon="condition.unconscious"><strong>Unconscious</strong></IconLabel>.
	</p>
</PageSection>

<PageSection
	id="hidden-technique-mastery"
	eyebrow="Level 18"
	title="Hidden Technique Mastery"
>
	<p>
		Choose one Rank III or lower technique you know as your
		<IconLabel icon="game.spell"><strong>Signature Technique</strong></IconLabel>.
	</p>

	<ul>
		<li>
			Its
			<IconLabel icon="spell.cost"><strong>Chakra Point cost</strong></IconLabel>
			is reduced by 1.
		</li>
		<li>
			You can use it once per
			<IconLabel icon="game.rest"><strong>Long Rest</strong></IconLabel>
			without expending Chakra Points.
		</li>
		<li>
			It
			<IconLabel icon="game.lock"><strong>cannot be removed or forgotten</strong></IconLabel>
			against your will.
		</li>
	</ul>
</PageSection>

<PageSection
	id="kage-state"
	eyebrow="Level 20"
	title="Kage State"
>
	<p>
		As a Bonus Action, you enter a Kage State for 1 minute. Once you use this
		feature, you cannot use it again until you finish a Long Rest.
	</p>

	<p>While your Kage State is active, you gain the following benefits:</p>

	<ul>
		<li>
			You immediately
			<IconLabel icon="game.spell"><strong>regain 10 Chakra Points</strong></IconLabel>.
		</li>
		<li>
			You have Advantage on
			<IconLabel icon="ability.dexterity"><strong>Dexterity Saving Throws</strong></IconLabel>
			and
			<IconLabel icon="ability.wisdom"><strong>Wisdom Saving Throws</strong></IconLabel>.
		</li>
		<li>
			The
			<IconLabel icon="spell.cost"><strong>Chakra Point cost</strong></IconLabel>
			of your techniques is reduced by 2, to a minimum cost of 1.
		</li>
		<li>
			Once on each of your turns, you can use a
			<IconLabel icon="dice.d20"><strong>Fortune Die</strong></IconLabel>
			without expending it.
		</li>
		<li>
			Your
			<IconLabel icon="movement.walking"><strong>walking Speed</strong></IconLabel>
			increases by 20 feet.
		</li>
	</ul>

	<p>
		The state ends early when you become
		<IconLabel icon="condition.unconscious"><strong>Unconscious</strong></IconLabel>.
	</p>
</PageSection>

<!-- <PageSection
	id="design-notes"
	title="Revision 0.2 Design and Playtest Notes"
	collapsible
	defaultExpanded={false}
>
	<h3>Revision Goal</h3>

	<p>
		The base class should remain a capable, mobile Shinobi after its Chakra Points
		are spent. Techniques remain the primary source of supernatural damage, control,
		defense, and utility.
	</p>

	<h3>Character-Building Safeguard</h3>

	<p>
		Consider requiring every Shinobi to learn at least one offensive technique at
		1st level. This prevents inexperienced players from accidentally selecting only
		situational utility options.
	</p>

	<h3>Level 8 Balance Target</h3>

	<p>
		At 8th level, the revised Shinobi has Extra Attack, free Bonus Action Dash,
		Disengage, or Hide, 11 Chakra Points per Short Rest, seven techniques up to Rank
		II, 1d6 Chakra-Infused Strike damage once per turn, three d8 Fortune Dice with
		partial Short Rest recovery, Evasion, two Origin manifestations, two subclass
		features, and two Ability Score Improvements.
	</p>

	<h3>Playtest Checkpoints</h3>

	<ul>
		<li>
			Compare sustained weapon damage after Chakra is exhausted with Rogue, Monk,
			Ranger, and Fighter baselines.
		</li>
		<li>
			Test an adventuring day with two Short Rests to ensure repeated Rank II
			techniques are not excessive.
		</li>
		<li>
			Check whether Fortune Dice are being saved all day or used regularly before
			adjusting their recovery.
		</li>
		<li>
			Ensure Origin manifestations remain smaller than full subclass features,
			because the Shinobi receives both progressions.
		</li>
		<li>
			Mark extreme techniques clearly with a Long Rest restriction so Short Rest
			Chakra recovery cannot bypass their intended limit.
		</li>
		<li>
			Review multiclass interactions involving Shinobi Step, Extra Attack, and
			Chakra-Infused Strike.
		</li>
	</ul>
</PageSection> -->
