<script lang="ts">
	import PageSection from '$lib/components/PageSection.svelte';
	import WikiTable from '$lib/components/WikiTable.svelte';
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	const subclassPages = getNavigationChildren('/classes/artificer').map(
		({ title, href, description }) => ({
			title,
			href,
			description: description ?? ''
		})
	);

	const artificerLevels: string[][] = [
		[
			'1st',
			'+2',
			'Magical Tinkering, Spellcasting',
			'—',
			'—',
			'2',
			'2',
			'—',
			'—',
			'—',
			'—'
		],
		['2nd', '+2', 'Infuse Item', '4', '2', '2', '2', '—', '—', '—', '—'],
		[
			'3rd',
			'+2',
			'Artificer Specialist, The Right Tool for the Job',
			'4',
			'2',
			'2',
			'3',
			'—',
			'—',
			'—',
			'—'
		],
		[
			'4th',
			'+2',
			'Ability Score Improvement',
			'4',
			'2',
			'2',
			'3',
			'—',
			'—',
			'—',
			'—'
		],
		[
			'5th',
			'+3',
			'Artificer Specialist feature',
			'4',
			'2',
			'2',
			'4',
			'2',
			'—',
			'—',
			'—'
		],
		['6th', '+3', 'Tool Expertise', '6', '3', '2', '4', '2', '—', '—', '—'],
		['7th', '+3', 'Flash of Genius', '6', '3', '2', '4', '3', '—', '—', '—'],
		[
			'8th',
			'+3',
			'Ability Score Improvement',
			'6',
			'3',
			'2',
			'4',
			'3',
			'—',
			'—',
			'—'
		],
		[
			'9th',
			'+4',
			'Artificer Specialist feature',
			'6',
			'3',
			'2',
			'4',
			'3',
			'2',
			'—',
			'—'
		],
		['10th', '+4', 'Magic Item Adept', '8', '4', '3', '4', '3', '2', '—', '—'],
		['11th', '+4', 'Spell-Storing Item', '8', '4', '3', '4', '3', '3', '—', '—'],
		[
			'12th',
			'+4',
			'Ability Score Improvement',
			'8',
			'4',
			'3',
			'4',
			'3',
			'3',
			'—',
			'—'
		],
		['13th', '+5', '—', '8', '4', '3', '4', '3', '3', '1', '—'],
		['14th', '+5', 'Magic Item Savant', '10', '5', '4', '4', '3', '3', '1', '—'],
		[
			'15th',
			'+5',
			'Artificer Specialist feature',
			'10',
			'5',
			'4',
			'4',
			'3',
			'3',
			'2',
			'—'
		],
		[
			'16th',
			'+5',
			'Ability Score Improvement',
			'10',
			'5',
			'4',
			'4',
			'3',
			'3',
			'2',
			'—'
		],
		['17th', '+6', '—', '10', '5', '4', '4', '3', '3', '3', '1'],
		['18th', '+6', 'Magic Item Master', '12', '6', '4', '4', '3', '3', '3', '1'],
		[
			'19th',
			'+6',
			'Ability Score Improvement',
			'12',
			'6',
			'4',
			'4',
			'3',
			'3',
			'3',
			'2'
		],
		['20th', '+6', 'Soul of Artifice', '12', '6', '4', '4', '3', '3', '3', '2']
	];
</script>

<PageSection title="Multiclassing">
	<p>
		To multiclass into or out of Artificer, a character needs Intelligence 13 or
		higher.
	</p>
</PageSection>

<PageSection title="Hit Points">
	<ul>
		<li><strong>Hit Dice:</strong> 1d8 per Artificer level</li>
		<li><strong>Hit Points at 1st Level:</strong> 8 + Constitution modifier</li>
		<li>
			<strong>Hit Points at Higher Levels:</strong> 1d8 or 5 + Constitution modifier
			per Artificer level after 1st
		</li>
	</ul>
</PageSection>

<PageSection title="Proficiencies">
	<ul>
		<li><strong>Armor:</strong> Light armor, medium armor, and shields</li>
		<li><strong>Weapons:</strong> Simple weapons</li>
		<li>
			<strong>Tools:</strong> Thieves' tools, tinker's tools, and one type of artisan's
			tools of your choice
		</li>
		<li><strong>Saving Throws:</strong> Constitution and Intelligence</li>
		<li>
			<strong>Skills:</strong> Choose two from Arcana, History, Investigation,
			Medicine, Nature, Perception, and Sleight of Hand
		</li>
	</ul>

	<h3>Firearm Proficiency <span class="optional-label">Optional</span></h3>
	<p>
		If firearms exist in the campaign and your Artificer has been trained or exposed
		to their operation, the Dungeon Master may grant you proficiency with firearms.
	</p>
</PageSection>

<PageSection title="Starting Equipment">
	<p>Choose from each option where a choice is listed:</p>

	<ul>
		<li>Any two simple weapons</li>
		<li>A light crossbow with 20 bolts</li>
		<li>Studded leather armor or scale mail</li>
		<li>Thieves' tools and a dungeoneer's pack</li>
	</ul>

	<p>Alternatively, you may begin with 5d4 × 10 gp to purchase equipment.</p>
</PageSection>

<PageSection title="Artificer Progression">
	<p>
		Artificers gain spellcasting, magical infusions, improved magic-item attunement,
		and specialist features as they advance. Specialist features are gained at 3rd,
		5th, 9th, and 15th level.
	</p>

	<WikiTable
		caption="The Artificer"
		columns={[
			'Level',
			'Proficiency Bonus',
			'Features',
			'Infusions Known',
			'Infused Items',
			'Cantrips Known',
			'1st',
			'2nd',
			'3rd',
			'4th',
			'5th'
		]}
		rows={artificerLevels}
	/>
</PageSection>

<PageSection title="Class Features">
	<h3>Magical Tinkering</h3>
	<p>
		At 1st level, you can use thieves' tools or artisan's tools to place a minor
		magical effect into a Tiny nonmagical object. As an action, you can make the
		object produce one of the following effects:
	</p>

	<ul>
		<li>Bright light in a 5-foot radius and dim light for another 5 feet</li>
		<li>A recorded message lasting no longer than 6 seconds</li>
		<li>A continuous nonverbal sound or odor</li>
		<li>A static image, symbol, pattern, or written message of up to 25 words</li>
	</ul>

	<p>
		The effect lasts until you end it. You can maintain a number of affected objects
		equal to your Intelligence modifier, with a minimum of one. Creating another
		effect beyond this limit causes the oldest one to end.
	</p>

	<h3>Spellcasting</h3>
	<p>
		At 1st level, you learn to produce magical effects through inventions,
		ingredients, runes, and specialized tools. Intelligence is your spellcasting
		ability for Artificer spells.
	</p>

	<h4>Tools Required</h4>
	<p>
		You must hold thieves' tools or artisan's tools with which you are proficient
		when casting an Artificer spell. Your tools function as a spellcasting focus,
		and each Artificer spell is treated as having a material component when you cast
		it through this feature.
	</p>

	<p>
		After gaining Infuse Item, one of your infused items can also serve as your
		spellcasting focus.
	</p>

	<h4>Cantrips</h4>
	<p>
		You know two Artificer cantrips at 1st level. You learn additional cantrips as
		shown in the Artificer table. Whenever you gain an Artificer level, you may
		replace one Artificer cantrip you know with another Artificer cantrip.
	</p>

	<h4>Preparing Spells</h4>
	<p>
		After a long rest, prepare a number of Artificer spells equal to your
		Intelligence modifier + half your Artificer level, rounded down. You always
		prepare at least one spell, and each prepared spell must be of a level for which
		you have spell slots.
	</p>

	<p>
		Casting a prepared spell does not remove it from your prepared-spell list. You
		regain all expended spell slots when you finish a long rest.
	</p>

	<h4>Spellcasting Ability</h4>
	<ul>
		<li>
			<strong>Spell save DC:</strong> 8 + proficiency bonus + Intelligence modifier
		</li>
		<li>
			<strong>Spell attack modifier:</strong> proficiency bonus + Intelligence
			modifier
		</li>
	</ul>

	<h4>Ritual Casting</h4>
	<p>
		You can cast a prepared Artificer spell as a ritual when that spell has the
		ritual tag.
	</p>

	<h3>Infuse Item</h3>
	<p>
		At 2nd level, you learn Artificer infusions that transform ordinary equipment
		into temporary magic items. You initially know four infusions and learn more as
		shown in the Artificer table.
	</p>

	<p>
		Whenever you gain an Artificer level, you may replace one infusion you know with
		another infusion for which you qualify.
	</p>

	<h4>Infusing an Item</h4>
	<p>
		At the end of a long rest, touch a nonmagical object and apply one infusion that
		is compatible with that type of object. The item remains infused until the
		infusion ends, you replace it, or a number of days equal to your Intelligence
		modifier pass after your death.
	</p>

	<p>
		You can maintain the number of infused items shown in the Artificer table. Each
		known infusion can normally be active in only one object, and an object can
		contain only one of your infusions.
	</p>

	<p>
		If an infusion requires attunement, you may attune to the object immediately
		when you create it.
	</p>

	<h3>Artificer Specialist</h3>
	<p>
		At 3rd level, choose a specialist that represents the main purpose and style of
		your inventions. Your specialist grants features at 3rd, 5th, 9th, and 15th
		level.
	</p>

	<h3>The Right Tool for the Job</h3>
	<p>
		At 3rd level, you can magically create one set of artisan's tools. You must have
		thieves' tools or another set of artisan's tools in hand and spend 1 hour working
		in an unoccupied space within 5 feet of you.
	</p>

	<p>
		This work may be completed during a short or long rest. The created tools are
		nonmagical and disappear when you use this feature again.
	</p>

	<h3>Ability Score Improvement</h3>
	<p>
		At 4th, 8th, 12th, 16th, and 19th level, improve your ability scores within the
		normal limits. You may choose a feat instead when the campaign allows feats.
	</p>

	<h3>Tool Expertise</h3>
	<p>
		At 6th level, double your proficiency bonus for any ability check that uses a
		tool proficiency you possess.
	</p>

	<h3>Flash of Genius</h3>
	<p>
		From 7th level, when you or another creature you can see within 30 feet makes an
		ability check or saving throw, you may use your reaction to add your Intelligence
		modifier to the roll.
	</p>

	<p>
		You may use this feature a number of times equal to your Intelligence modifier,
		with a minimum of once. You regain all uses after a long rest.
	</p>

	<h3>Magic Item Adept</h3>
	<p>At 10th level, your understanding of magic items improves:</p>

	<ul>
		<li>You can be attuned to as many as four magic items simultaneously.</li>
		<li>
			Crafting a common or uncommon magic item requires one-quarter of the normal
			time and half of the normal gold cost.
		</li>
	</ul>

	<h3>Spell-Storing Item</h3>
	<p>
		At 11th level, when you finish a long rest, you may store one Artificer spell in
		a simple or martial weapon or an object you can use as a spellcasting focus.
	</p>

	<p>
		Choose a 1st- or 2nd-level Artificer spell with a casting time of 1 action. You
		do not need to have the spell prepared. A creature holding the item can use an
		action to produce the spell's effect using your spellcasting ability.
	</p>

	<p>
		The item can produce the spell a number of times equal to twice your Intelligence
		modifier, with a minimum of twice. The stored spell disappears when all uses are
		spent or when you use this feature again.
	</p>

	<h3>Magic Item Savant</h3>
	<p>At 14th level, your command of magic items deepens:</p>

	<ul>
		<li>You can be attuned to as many as five magic items simultaneously.</li>
		<li>
			You ignore class, species, spell, and level requirements when attuning to or
			using a magic item.
		</li>
	</ul>

	<h3>Magic Item Master</h3>
	<p>
		At 18th level, you can be attuned to as many as six magic items simultaneously.
	</p>

	<h3>Soul of Artifice</h3>
	<p>
		At 20th level, your connection to your creations grants the following benefits:
	</p>

	<ul>
		<li>
			You gain a +1 bonus to every saving throw for each magic item to which you
			are currently attuned.
		</li>
		<li>
			When you are reduced to 0 hit points without being killed outright, you can
			use your reaction to end one of your active infusions and fall to 1 hit point
			instead.
		</li>
	</ul>
</PageSection>

<section>
	<h2 id="specialists-heading">Artificer specialists</h2>
	<ChildLinkGrid links={subclassPages} imagesInFolder="classes/artificer" />
</section>

<style lang="scss">
	.optional-label {
		display: inline-flex;
		margin-left: 0.35rem;
		padding: 0.1rem 0.4rem;
		border: 1px solid var(--border-strong);
		border-radius: 999px;
		background: var(--surface-raised);
		color: var(--text-secondary);
		font-size: 0.67rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		vertical-align: middle;
	}
</style>
