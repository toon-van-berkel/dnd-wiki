<script lang="ts">
	import Author from '$lib/pages/Author/Author.svelte';
	import ClassProgression from '$lib/pages/ClassProgression/ClassProgression.svelte';
	import ClassTraits from '$lib/pages/ClassTraits/ClassTraits.svelte';
	import WikiTable from '$lib/components/WikiTable/WikiTable.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { getPerson } from '$lib/config/people';
	import { isExternalUrl } from '$lib/utils/paths';

	import {
		vanguardCoreTraits,
		vanguardHomebrewSpellLevels,
		vanguardProgression,
		vanguardSpellLevels,
		type VanguardSpellEntry,
		type VanguardSpellLevel
	} from './page.data';

	const creator = getPerson('tijs');
	const creatorLabel = $derived(
		creator.aliases?.length
			? `${creator.name} (${creator.aliases.join(', ')})`
			: creator.name
	);
	const normalVanguardSpellLevels = $derived(
		vanguardSpellLevels
			.map((level): VanguardSpellLevel => ({
				...level,
				spells: level.spells.filter((spell: VanguardSpellEntry) => !spell.homebrew)
			}))
			.filter((level) => level.spells.length > 0)
	);

	function externalAttributes(href: string | undefined) {
		return href && isExternalUrl(href)
			? {
					target: '_blank',
					rel: 'noopener noreferrer external'
				}
			: {};
	}
</script>

<Author
	personId="tijs"
	role="Original class creator"
	subject="Vanguard"
/>

<PageSection>
	<p>{"(class details)"}</p>
</PageSection>

<PageSection
	id="core-traits"
	title="Core Vanguard Traits"
>
	<ClassTraits {...vanguardCoreTraits} />
</PageSection>

<PageSection
	id="becoming-a-vanguard"
	title={"Becoming a vanguard…"}
>
	<h3>{"As a level 1 character"}</h3>
	<ul>
		<li>{"Gain all the traits in the core vanguard traits table."}</li>
		<li>{"Gain the vanguards level 1 features, which are listed in the vanguard features table."}</li>
	</ul>

	<h3>{"As a multiclass character"}</h3>
	<ul>
		<li>{"Gain the following traits from the core vanguard trait table: hit point die, proficiency with simple weapons, training with light and medium weapons and shields."}</li>
		<li>{"Gain the cleric’s level 1 features, which are listed in the cleric features table. See the multiclassing rules to determine your available spell slots."}</li>
	</ul>
</PageSection>

<PageSection
	id="vanguard-progression"
	title="Vanguard Progression"
>
	<ClassProgression
		{...vanguardProgression}
		variant="wide"
	/>
</PageSection>

<PageSection
	id="vanguard-class-features"
	title={"Vanguard class features"}
>
	<p>{"As a vanguard, you gain the following class features when you reach the specified vanguard levels. These features are listed in the vanguard features table."}</p>
</PageSection>

<PageSection
	id="spellcasting"
	eyebrow={"Level 1"}
	title={"spellcasting"}
>
	<p>{"You have learned to cast spells through hard work and will power. The information below details how you user those rules with vanguard spells, which appear on the vanguard spell list."}</p>
	<p>{"Cantrips. You know three cantrips of your choice from the vanguard spell list."}</p>
	<p>{"Whenever you gain a vanguard level, you can change up your cantrips how ever you like. "}</p>
	<p>{"When you reach vanguard level 4, 7, 14, 19, you learn another cantrip of your choice from the vanguard spell list, as shown in the cantrip column of the vanguard features table "}</p>
	<p>{"Spell slots. The vanguard features table shows how many spell slots you have to cast at your level 1+ spells. You regain all expended slots when you finish a long rest."}</p>
	<p>{"Prepared spells of level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the vanguard spell list."}</p>
	<p>{"The number of spells on your list increases as you gain vanguard levels, as shown in the prepared spells column of the vanguard features table. Whenever that number increases, choose additional spells from the vanguard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for witch you have spell slots. For example, if you’re a level 3 vanguard, your list of prepared spells can include six spells of levels 1 and 2 in any combination."}</p>
	<p>{"If another vanguard feature or feat gives you spells that you always have prepared, those spells don’t count against the number of spells you can prepare with this feature, but those spells otherwise count as vanguard spells for you. "}</p>
	<p>{"Changing your prepared spells. Whenever you gain a vanguard level, you can replace any number of spells on your spell list with another vanguard spell for which you have spell slots."}</p>
	<p>{"Spellcasting ability. Charisma is your spellcasting ability for your vanguard spells."}</p>
	<p>{"Spellcasting focus. You can use an arcane focus as a spellcasting focus for your vanguard spells."}</p>
</PageSection>

<PageSection
	id="helpful-companion"
	eyebrow={"Level 1"}
	title={"helpful companion"}
>
	<p>{"At level 1 you can chose a tiny or small beast with a CR level of ¼ or lower. Whenever you gain a vanguard level your allowed to change your familiar to another creature this creature must always have a CR of 1 fourth your level or lower. For example, at level 4 you can get a CR 0 small beast like an eagle."}</p>
	<p>{"After you’ve chosen your familiar you gain the find familiar spell in your vanguard spell list."}</p>
</PageSection>

<PageSection
	id="tool-points"
	eyebrow={"Level 2"}
	title={"tool points"}
>
	<p>{"At level 2 you gain X amount of tool points equal to your proficiency bonus plus your wisdom modifier. These tool points will be restored with a long or short rest."}</p>
	<p>{"Tool slot. Every 2 tool points can be used on an action to restore a spell slot to your spell list, so 2 tool points for a first level spell and 4 tool points for a second level spell and so on.  "}</p>
	<p>{"Tool boost. Using one tool point your able to give any willing creature one of the following effects using an action,"}</p>
	<ul>
		<li>{"Give them an extra bonus action on their next turn."}</li>
		<li>{"Give them temporary hit points equal to half your HP for 3 rounds."}</li>
		<li>{"Remove any one of the following conditions from an ally, blinded, charmed, deafened, frightened, paralyzed, poisoned, stunned, unconscious."}</li>
	</ul>
	<p>{"Tool armour. Using 2 tool points and an action you can for one minute have the same AC as one of your allies has in that moment."}</p>
</PageSection>

<PageSection
	id="vanguard-subclass"
	eyebrow={"Level 3"}
	title={"vanguard subclass"}
>
	<p>{"You gain a vanguard subclass of your choice. A subclass is a specialization that grants you features at a certain vanguard levels. For the rest of your career, you gain each f your subclass’s features that are of your vanguard level or lower. "}</p>
</PageSection>

<PageSection
	id="ability-score-improvement"
	eyebrow={"Level 4"}
	title={"ability score improvement"}
>
	<p>{"You gain the ability score improvement feat or another feat of your choice for which you qualify."}</p>
</PageSection>

<PageSection
	id="instant-assistance"
	eyebrow={"Level 5"}
	title={"instant assistance"}
>
	<p>{"At level 5 your able to use the help action as a bonus action, and also cast spare the dying and true strike as a bonus action."}</p>
</PageSection>

<PageSection
	id="protective-aura"
	eyebrow={"Level 6"}
	title={"protective aura "}
>
	<p>{"At level 6 you emanate a defensive aura around you granting allies within 5 feet of you a +1 to their AC, in addition you also gain AC equal to the number of allies within 5 feet of you with a maximum AC of 20. This aura expands to 10 feet at level 11. "}</p>
</PageSection>

<PageSection
	id="twinned-spell"
	eyebrow={"Level 7"}
	title={"twinned spell"}
>
	<p>{"When you cast a spell that targets only one creature and can be cast using a higher-level spell slot to target additional creatures, you can spend 1 Tool Point to target one additional creature with that spell."}</p>
</PageSection>

<PageSection
	id="ability-score-improvement-8"
	eyebrow={"Level 8"}
	title={"ability score improvement"}
>
	<p>{"You gain the ability score improvement feat or another feat of your choice for which you qualify."}</p>
</PageSection>

<PageSection
	id="familiar-drain"
	eyebrow={"level 10"}
	title={"familiar drain"}
>
	<p>{"your familiar is able to on their turn cast the vampiric touch spell, if successful they heal up to their maximum amount of hit points, and then gain the rest of the hit points as temporary hit points for up to 4 rounds. "}</p>
	<p>{"Your familiar also gains the spell life transference to possibly sacrifice themselves to heal you or any other creature you chose."}</p>
</PageSection>

<PageSection
	id="large-protective-aura"
	eyebrow={"Level 11"}
	title={"large protective aura"}
>
	<p>{"Your protective aura expands to 10 feet."}</p>
</PageSection>

<PageSection
	id="vanguards-aura"
	eyebrow={"Level 12"}
	title={"vanguards aura"}
>
	<p>{"As an action you channel your magic to create an aura around you with a radius of 40 feet. Within the area every ally can see perfectly even if your in a dark area. The aura lasts for 1 minute or until you are incapacitated or die. "}</p>
	<p>{"Whenever a creature including you ends its turn in the effected area, you grant that creature 1d8 plus your vanguard level of temporary hit points."}</p>
	<p>{" If a creature were to die while this aura is in effect you can choose to grant them your hit points as a reaction to negate any amount of damage dealt to bring them bellow 0 HP, leaving the creature with a maximum of 1 HP. "}</p>
	<p>{"You can use this ability times equal to half your proficiency bonus rounded down."}</p>
</PageSection>

<PageSection
	id="ability-score-improvement-14"
	eyebrow={"Level 14"}
	title={"ability score improvement"}
>
	<p>{"You gain the ability score improvement feat or another feat of your choice for which you qualify."}</p>
</PageSection>

<PageSection
	id="prepared-resistance"
	eyebrow={"Level 16"}
	title={"prepared resistance"}
>
	<p>{"Using 2 tool points your able to grant yourself and your allies an immunity to any 1 type of damage for up to 2 minutes. "}</p>
</PageSection>

<PageSection
	id="neutralize-damage"
	eyebrow={"Level 18"}
	title={"neutralize damage"}
>
	<p>{"Using an action on your turn your able to for one round protect all your allies from any damage they could take that round. You can use this ability the same amount as your proficiency bonus."}</p>
</PageSection>

<PageSection
	id="epic-boon"
	eyebrow={"Level 19"}
	title={"epic boon"}
>
	<p>{"You gain an epic boon feat or another feat of your choice for which you qualify."}</p>
</PageSection>

<PageSection
	id="ultimate-power-up"
	eyebrow={"Level 20"}
	title={"ultimate power up"}
>
	<p>{"Using an action, you can grant all your allies including yourself the following benefits for up to 2 rounds; +3 to their AC, 3d12 temporary hit points, an additional bonus action on their turn, advantage on all their rolls, and  2d10 extra damage on all damage they deal. You can use this ability once per long rest. "}</p>
</PageSection>

<PageSection
	id="vanguard-spell-list"
	title={"Vanguard spell list"}
>
	<WikiTable
		caption="Vanguard spell list"
		columns={['Spell level', 'Spells']}
	>
		{#snippet body()}
			{#each normalVanguardSpellLevels as level}
				<tr>
					<th scope="row">{level.label}</th>
					<td>
						<ul class="wiki-table__list" aria-label={`${level.label} Vanguard spells`}>
							{#each level.spells as spell}
								<li class="wiki-table__list-item">
									<a href={spell.href} {...externalAttributes(spell.href)}>
										{spell.name}
										{#if spell.href && isExternalUrl(spell.href)}
											<span class="wiki-table__external-indicator" aria-hidden="true">↗</span>
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</td>
				</tr>
			{/each}
		{/snippet}
	</WikiTable>
</PageSection>

<PageSection
	id="vanguard-homebrew-spell-list"
	title={"Vanguard homebrew spell list"}
>
	<WikiTable
		caption="Vanguard homebrew spell list"
		columns={['Spell level', 'Spells']}
	>
		{#snippet body()}
			{#each vanguardHomebrewSpellLevels as level}
				<tr>
					<th scope="row">{level.label}</th>
					<td>
						<ul class="wiki-table__list" aria-label={`${level.label} Vanguard homebrew spells`}>
							{#each level.spells as spell}
								<li class="wiki-table__list-item">
									<span>{spell.name}</span>
									{#if spell.homebrew && spell.status === 'details-pending'}
										<span class="wiki-table__status">Details pending</span>
									{/if}
								</li>
							{/each}
						</ul>
					</td>
				</tr>
			{/each}
		{/snippet}
	</WikiTable>
</PageSection>

<PageSection
	id="vanguard-subclasses"
	title="Vanguard Subclasses"
>
	<ul>
		<li>{"Subclass: thaumaturgist "}</li>
		<li>{"Subclass: saboteur"}</li>
		<li>{"Subclass: living shield"}</li>
	</ul>
</PageSection>

<PageSection
	id="thaumaturgist"
	title={"Subclass: thaumaturgist "}
>
	<p>{"The thaumaturgist is what happens when a vanguard chooses to study the arts of healing and restoring wounds, finding out the secrets in the arcane that make healing what it is today. "}</p>
	<p>{"Healing bonus. once you pick the thaumaturgist subclass you immediately gain a bonus to every healing spell you cast, when casting a healing spell on a willing target you can add your charisma modifier to the HP healed. "}</p>
	<p>{"Healing tool. Starting at level 3 do your tool points also become a healing pool. Using one tool point you can choose to use an action to heal yourself or any one ally you can see for 3d4 hit points. In addition when healing an ally this way you can also choose one of the following benefits;"}</p>
	<ul>
		<li>{"when healing an ally you also heal yourself for half as much HP."}</li>
		<li>{"Remove any one condition from the target your healing."}</li>
		<li>{"The target gains advantage on their next d20 roll"}</li>
	</ul>
	<p>{"Healing boost. Starting at level 5 you can choose to boost the allies you heal in one of the following ways;  "}</p>
	<ul>
		<li>{"The target gets a +10 to their movement until the end of your next turn."}</li>
		<li>{"The target gets a +1 to their AC until the end of your next turn."}</li>
		<li>{"The target gets to add 1d6 to their next d20 roll."}</li>
	</ul>
	<p>{"(this effect activates any time you heal a creature using your spells or tool points)"}</p>
	<p>{"Save a life. Starting at level 8 if any creature you can see within 30 feet drops to 0 hit points, you can use your reaction to cast a vanguard healing spell without expanding its normal casting time. This ability can be used once per long rest or be restored using 2 tool points. "}</p>
	<p>{"Over healing. At level 13 When you heal any creature to above their max hp they gain temporary hit points instead of that the access points disappear. This also works if a creature already is at max HP you can grant them temporary hit points using your spells or abilities up to double their max HP. "}</p>
</PageSection>

<PageSection
	id="saboteur"
	title={"Subclass: saboteur"}
>
	<p>{"This vanguard subclass focuses on making the enemy weaker instead of making their allies stronger making it a beast of combat control. "}</p>
	<p>{"Saboteurs eye. When choosing the saboteur subclass you gain the ability to find out one weakness of any creature you can see within 30 feet. This ability can be used 3 times per long rest. "}</p>
	<p>{"Vanguards mark. At level 3 you can choose to use 1 tool point to mark any one creature of your choice for 1 hour, this creature now has disadvantage on all saving throws against you or one of your allies, and you deal an extra 1d8 damage when hitting the target. This damage increases to 2d8 at level 6."}</p>
	<p>{"Saboteurs hex. At level 5 you can choose to hex any one creature for 1 hour. This ability can be used as many times as your proficiency modifier, and grants one of the following effects to the target;"}</p>
	<ul>
		<li>{"You always know the location of the targeted creature."}</li>
		<li>{"You can give the target disadvantage on ability checks with an ability of your choice."}</li>
		<li>{"You and all your allies deal an extra 1d6 when hitting the targeted creature. "}</li>
	</ul>
	<p>{"Redirect. Starting at level 8 you can redirect incoming attacks that miss you. If an enemy misses their melee attack on you, you can choose to make that attack hit another creature within range of the attack. If a spell attack misses you, you can choose to redirect the spell back to the caster as a reaction. When you redirect an attack this way you have to roll too hit. "}</p>
	<p>{"Saboteurs bonus. at level 12 whenever you hit a hostile creature with an attack spell you cast, you can choose to add one of the following effects;"}</p>
	<ul>
		<li>{"Disadvantage on their next attack roll."}</li>
		<li>{"A -2 to their AC for 2 rounds."}</li>
		<li>{"Having their movement cut in half until the end of your next turn."}</li>
	</ul>
	<p>{"Vanguards dominance. Starting at level 17 you can cast dominate person using two tool point."}</p>
</PageSection>

<PageSection
	id="living-shield"
	title={"Subclass: living shield"}
>
	<p>{"The living shield vanguard is someone who truly believes that others should not have to suffer and would rather sacrifice themselves if it means others harm is avoided."}</p>
	<p>{"Shared burden. If you choose the living shield subclass you gain the ability to Whenever a creature you can see within 30 feet takes damage you can use your reaction to take some of that damage yourself. Using this ability you take damage equal to 5 times your vanguard level."}</p>
	<p>{"Heroes resilience. Starting at level 3 whenever you drop below 0 hp as a direct cause of taking an allies damage, you gain advantage to death saves, and 10 temporary hit points if  you stand back up after dying. "}</p>
	<p>{"Heroes benefits. At level 5 when ever you take the damage of an ally you can choose to gain one of the following benefits after expending one tool point;"}</p>
	<ul>
		<li>{"You gain resistance to that damage type for 1 minute."}</li>
		<li>{"You gain advantage on your next d20 roll."}</li>
		<li>{"You deal an extra 2d10 necrotic damage on your next attack."}</li>
	</ul>
	<p>{"Blood bond. Starting from level 8 you gain the ability to use an action and create a blood bond with one creature of your choice per long rest for 1 hour. When the blood bond is active you always take half the damage that creature takes making sure that creature takes half as well. "}</p>
	<p>{"Aura of safety. Starting at level 11 when ever your bellow 15 hp you aminate an aura with a diameter of 30 feet and you in the middle. This aura grants every non hostile creature in it advantage on death saving throws, an additional +1 to their AC and they can’t provoke opportunity attacks. "}</p>
	<p>{"Self-sacrifice. At level 17 you gain the ability to when an ally dies take their place and die instead. If killed this way you can either make death saves or wait to be stabilised by an ally using the help action."}</p>
</PageSection>

<PageSection
	id="source-notes"
	title="Source Notes"
	collapsible
	defaultExpanded={false}
>
	<p>Vanguard is original homebrew content.</p>
	<p>The original creator is {creatorLabel}.</p>
	<p>The attached Vanguard document is the source.</p>
	<p>The visible rules wording was preserved.</p>
	<p>Mechanics were not intentionally changed.</p>
	<p>Custom spell descriptions contained in images will be added later.</p>
</PageSection>
