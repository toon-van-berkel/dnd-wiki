<script lang="ts">
	import AvailabilityBadges from '$lib/components/AvailabilityBadges.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import WikiTable from '$lib/components/WikiTable.svelte';
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import { getNavigationChildren } from '$lib/wiki/navigation';

	const subclassPages = getNavigationChildren('/classes/rogue').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));

	const rogueLevels: string[][] = [
		['1st', '+2', '1d6', "Expertise, Sneak Attack, Thieves' Cant"],
		['2nd', '+2', '1d6', 'Cunning Action'],
		['3rd', '+2', '2d6', 'Roguish Archetype, Steady Aim (Optional)'],
		['4th', '+2', '2d6', 'Ability Score Improvement'],
		['5th', '+3', '3d6', 'Uncanny Dodge'],
		['6th', '+3', '3d6', 'Expertise'],
		['7th', '+3', '4d6', 'Evasion'],
		['8th', '+3', '4d6', 'Ability Score Improvement'],
		['9th', '+4', '5d6', 'Roguish Archetype feature'],
		['10th', '+4', '5d6', 'Ability Score Improvement'],
		['11th', '+4', '6d6', 'Reliable Talent'],
		['12th', '+4', '6d6', 'Ability Score Improvement'],
		['13th', '+5', '7d6', 'Roguish Archetype feature'],
		['14th', '+5', '7d6', 'Blindsense'],
		['15th', '+5', '8d6', 'Slippery Mind'],
		['16th', '+5', '8d6', 'Ability Score Improvement'],
		['17th', '+6', '9d6', 'Roguish Archetype feature'],
		['18th', '+6', '9d6', 'Elusive'],
		['19th', '+6', '10d6', 'Ability Score Improvement'],
		['20th', '+6', '10d6', 'Stroke of Luck']
	];

	// const archetypes: string[][] = [
	// 	['Arcane Trickster', "Player's Handbook"],
	// 	['Assassin', "Player's Handbook"],
	// 	['Inquisitive', "Xanathar's Guide to Everything"],
	// 	['Mastermind', "Xanathar's Guide to Everything"],
	// 	['Phantom', "Tasha's Cauldron of Everything"],
	// 	['Scout', "Xanathar's Guide to Everything"],
	// 	['Soulknife', "Tasha's Cauldron of Everything"],
	// 	['Swashbuckler', "Xanathar's Guide to Everything"],
	// 	['Thief', "Player's Handbook"]
	// ];


</script>

<svelte:head>
	<title>Rogue — D&D Portal</title>
	<meta
		name="description"
		content="Rogue class rules, progression, features, equipment, and archetype options for our campaigns."
	/>
</svelte:head>

<PageHeader
	title="Rogue"
	description="Rogues are skill-focused characters who rely on Dexterity, stealth, precision, and clever positioning. They excel at scouting, infiltration, traps, social tricks, and burst damage through Sneak Attack."
	eyebrow="Class"
	tags={['Class', 'Dexterity', 'Skills']}
/>

<AvailabilityBadges allowed={['Party 1', 'Party 2', 'Party 3', 'Party 4', 'Party 5', 'Party 6']} />

<PageSection title="Multiclassing">
	<p>To multiclass into or out of Rogue, a character needs Dexterity 13 or higher.</p>
</PageSection>

<PageSection title="Hit Points">
	<ul>
		<li><strong>Hit Dice:</strong> 1d8 per Rogue level</li>
		<li><strong>Hit Points at 1st Level:</strong> 8 + Constitution modifier</li>
		<li><strong>Hit Points at Higher Levels:</strong> 1d8 or 5 + Constitution modifier per Rogue level after 1st</li>
	</ul>
</PageSection>

<PageSection title="Proficiencies">
	<ul>
		<li><strong>Armor:</strong> Light armor</li>
		<li><strong>Weapons:</strong> Simple weapons, hand crossbows, longswords, rapiers, and shortswords</li>
		<li><strong>Tools:</strong> Thieves' tools</li>
		<li><strong>Saving Throws:</strong> Dexterity and Intelligence</li>
		<li><strong>Skills:</strong> Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth</li>
	</ul>
</PageSection>

<PageSection title="Starting Equipment">
	<p>Choose from each option where a choice is listed:</p>
	<ul>
		<li>A rapier or a shortsword</li>
		<li>A shortbow with 20 arrows or a shortsword</li>
		<li>A burglar's pack, dungeoneer's pack, or explorer's pack</li>
		<li>Leather armor, two daggers, and thieves' tools</li>
	</ul>
</PageSection>

<PageSection title="Rogue Progression">
	<p>Sneak Attack damage grows with Rogue level. Archetype features arrive at 3rd, 9th, 13th, and 17th level.</p>
	<WikiTable
		caption="The Rogue"
		columns={['Level', 'Proficiency Bonus', 'Sneak Attack', 'Features']}
		rows={rogueLevels}
	/>
</PageSection>

<PageSection title="Class Features">
	<h3>Expertise</h3>
	<p>At 1st level, choose two skill proficiencies, or one skill and thieves' tools. Double your proficiency bonus for checks using them. Choose two more skill proficiencies at 6th level.</p>

	<h3>Sneak Attack</h3>
	<p>Once per turn, add Sneak Attack damage to a finesse or ranged weapon attack made with advantage. You can also use it when an active enemy of the target is within 5 feet of it, provided you do not have disadvantage.</p>

	<h3>Thieves' Cant</h3>
	<p>You know a coded mixture of jargon, implication, and signs used to pass hidden messages. You also recognize the common symbols rogues use to mark warnings, opportunities, and safe contacts.</p>

	<h3>Cunning Action</h3>
	<p>From 2nd level, you can use a bonus action on each turn to Dash, Disengage, or Hide.</p>

	<h3>Roguish Archetype</h3>
	<p>At 3rd level, choose an archetype that defines your specialty. It grants additional features at 3rd, 9th, 13th, and 17th level.</p>

	<h3>Steady Aim <span class="optional-label">Optional</span></h3>
	<p>From 3rd level, spend your bonus action to gain advantage on your next attack that turn. You can use this only if you have not moved, and your speed becomes 0 for the rest of the turn.</p>

	<h3>Ability Score Improvement</h3>
	<p>At 4th, 8th, 10th, 12th, 16th, and 19th level, improve your ability scores within the normal limits. You may choose a feat instead when the campaign allows feats.</p>

	<h3>Uncanny Dodge</h3>
	<p>From 5th level, use your reaction to halve the damage from an attack that hits you when you can see the attacker.</p>

	<h3>Evasion</h3>
	<p>From 7th level, successful Dexterity saves against effects that normally deal half damage deal no damage to you. A failed save deals only half damage.</p>

	<h3>Reliable Talent</h3>
	<p>From 11th level, when an ability check uses one of your proficiencies, treat a d20 roll of 9 or lower as a 10.</p>

	<h3>Blindsense</h3>
	<p>At 14th level, if you can hear, you know the location of hidden or invisible creatures within 10 feet of you.</p>

	<h3>Slippery Mind</h3>
	<p>At 15th level, you gain proficiency in Wisdom saving throws.</p>

	<h3>Elusive</h3>
	<p>From 18th level, attacks cannot gain advantage against you while you are not incapacitated.</p>

	<h3>Stroke of Luck</h3>
	<p>At 20th level, you can turn one missed attack into a hit. Alternatively, treat a failed ability check as if its d20 roll were 20. You regain this feature after a short or long rest.</p>
</PageSection>

<section>
	<h2 id="domains-heading">Rogue archetypes</h2>
	<ChildLinkGrid links={subclassPages} imagesInFolder="classes/rogue" />
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
