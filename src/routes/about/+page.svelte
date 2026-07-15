<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	const playerPortalUrl = 'https://dnd.toonvb.com';
	const contactEmail = 'toonvanberkel.public@gmail.com';
	const githubRepositoryUrl = 'https://github.com/toon-van-berkel/dnd-wiki';
</script>

<svelte:head>
	<title>About D&D Portal | D&D Portal</title>

	<meta
		name="description"
		content="Learn more about the D&D Portal Wiki and the separate player portal used for campaign dates, parties, and player information."
	/>
</svelte:head>

<PageHeader
	title="About D&D Portal"
	description="D&D Portal consists of a public rules wiki and a separate player portal for campaigns, parties, and session planning."
	eyebrow="About the project"
/>

<PageSection title="What is D&D Portal?">
	<p>
		D&D Portal is a collection of tools and reference pages created to support the
		Dungeons & Dragons campaigns organised and managed by Toon van Berkel.
	</p>

	<p>
		The project is divided into two main parts:
	</p>

	<ol>
		<li>
			<strong>The D&D Portal Wiki</strong>, which contains rules, character
			options, campaign restrictions, homebrew material, and reference
			information.
		</li>

		<li>
			<strong>The D&D Player Portal</strong>, where players can view information
			about their parties, campaigns, and planned playing dates.
		</li>
	</ol>

	<p>
		These two parts serve different purposes, but together they form the complete
		D&D Portal project.
	</p>
</PageSection>

<PageSection title="The D&D Portal Wiki">
	<div class="about-feature">
		<div class="about-feature__marker" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
				<path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
			</svg>
		</div>

		<div>
			<h3>You are currently viewing the Wiki</h3>

			<p>
				This website is the wiki section of D&D Portal. It is intended as a
				central reference point where players can find information that is useful
				before and during a game session.
			</p>
		</div>
	</div>

	<p>
		The wiki may include:
	</p>

	<ul>
		<li>Playable classes and subclasses.</li>
		<li>Species and character options.</li>
		<li>Backgrounds, feats, spells, and equipment.</li>
		<li>Combat, movement, exploration, and general game rules.</li>
		<li>Campaign-specific rule changes.</li>
		<li>Allowed, limited, approval-required, and banned options.</li>
		<li>Homebrew classes, creatures, items, and mechanics.</li>
		<li>Locations, non-player characters, and campaign information.</li>
		<li>Clarifications about rules used at the table.</li>
	</ul>

	<p>
		The main purpose of the wiki is to make campaign information easier to find.
		Players should not have to search through old messages, scattered documents, or
		multiple rulebooks to understand which rules apply to their campaign.
	</p>
</PageSection>

<PageSection title="The D&D Player Portal">
	<div class="about-feature">
		<div class="about-feature__marker" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<path d="M8 2v4" />
				<path d="M16 2v4" />
				<path d="M3 9h18" />
				<rect x="3" y="4" width="18" height="17" rx="2" />
				<path d="M8 13h.01" />
				<path d="M12 13h.01" />
				<path d="M16 13h.01" />
				<path d="M8 17h.01" />
				<path d="M12 17h.01" />
			</svg>
		</div>

		<div>
			<h3>A separate area for players and campaigns</h3>

			<p>
				In addition to this wiki, D&D Portal also has a separate player portal.
				The player portal focuses on campaign organisation rather than rules and
				reference material.
			</p>
		</div>
	</div>

	<p>
		Players can use the player portal to view information connected to the campaigns
		and parties in which they participate.
	</p>

	<p>
		The player portal can contain information such as:
	</p>

	<ul>
		<li>Upcoming D&D session dates.</li>
		<li>Previous and planned playing dates.</li>
		<li>The parties a player belongs to.</li>
		<li>Campaign and party names.</li>
		<li>Members connected to a party.</li>
		<li>Campaign-specific announcements or information.</li>
	</ul>

	<p>
		Unlike the public wiki, parts of the player portal may be intended only for
		players who participate in the relevant campaigns.
	</p>

	<a
		class="about-action"
		href={playerPortalUrl}
		target="_blank"
		rel="noopener noreferrer"
	>
		<span>
			<strong>Open the Player Portal</strong>
			<small>View your parties and planned D&D dates</small>
		</span>

		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M7 17 17 7" />
			<path d="M7 7h10v10" />
		</svg>
	</a>
</PageSection>

<PageSection title="Wiki and portal responsibilities">
	<div class="about-comparison">
		<article class="about-comparison__card">
			<p class="about-comparison__eyebrow">D&D Portal Wiki</p>
			<h3>Rules and information</h3>

			<ul>
				<li>Rules explanations</li>
				<li>Classes and species</li>
				<li>Character options</li>
				<li>Campaign restrictions</li>
				<li>Homebrew content</li>
				<li>Reference material</li>
			</ul>

			<a href={resolveAppPath('/')}>Browse the Wiki</a>
		</article>

		<article class="about-comparison__card">
			<p class="about-comparison__eyebrow">D&D Player Portal</p>
			<h3>Players and planning</h3>

			<ul>
				<li>Playing dates</li>
				<li>Party membership</li>
				<li>Campaign overviews</li>
				<li>Player information</li>
				<li>Session planning</li>
				<li>Party-specific information</li>
			</ul>

			<a
				href={playerPortalUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				Open the Player Portal
				<span aria-hidden="true">↗</span>
			</a>
		</article>
	</div>
</PageSection>

<PageSection title="How both parts work together">
	<p>
		The wiki and player portal are deliberately separated because they solve
		different problems.
	</p>

	<p>
		The player portal tells a player <strong>when</strong> a campaign is played and
		<strong>which party</strong> they belong to. The wiki explains
		<strong>which rules and character options</strong> apply when that campaign is
		played.
	</p>

	<p>
		For example, a player may use the player portal to see the next scheduled session
		for their party. They can then use this wiki to check which species, classes,
		feats, spells, or house rules are available for that particular campaign.
	</p>

	<p>
		Campaign-specific labels and availability indicators may be used throughout the
		wiki to show whether content is:
	</p>

	<ul>
		<li>Allowed without restrictions.</li>
		<li>Available with limitations.</li>
		<li>Available only after Dungeon Master approval.</li>
		<li>Unavailable or banned for a particular party.</li>
	</ul>
</PageSection>

<PageSection title="Why the project was created">
	<p>
		Dungeons & Dragons campaigns can contain a large amount of information. Official
		rules, house rules, player choices, homebrew additions, scheduling information,
		and campaign restrictions can quickly become spread across different books,
		messages, documents, and websites.
	</p>

	<p>
		D&D Portal was created to bring this information together in a clearer and more
		consistent system.
	</p>

	<p>
		The goals of the project are to:
	</p>

	<ul>
		<li>Make frequently used information easier to find.</li>
		<li>Reduce uncertainty about which rules apply.</li>
		<li>Clearly separate official rules from homebrew rules.</li>
		<li>Show differences between campaigns and parties.</li>
		<li>Make planning future sessions easier.</li>
		<li>Provide players with one recognisable place for campaign information.</li>
		<li>Improve accessibility and readability compared with scattered documents.</li>
	</ul>
</PageSection>

<PageSection title="Who is the website intended for?">
	<p>
		The project is primarily intended for players and Dungeon Masters participating
		in campaigns managed through D&D Portal.
	</p>

	<p>
		The public wiki may also be useful to other visitors looking for rule
		explanations, campaign organisation ideas, or homebrew inspiration. However,
		content may reflect interpretations and decisions made specifically for the
		campaigns connected to this project.
	</p>

	<p>
		Visitors should always check whether a page contains:
	</p>

	<ul>
		<li>An official rule.</li>
		<li>A simplified rules explanation.</li>
		<li>A Dungeon Master interpretation.</li>
		<li>A house rule.</li>
		<li>A campaign-specific exception.</li>
		<li>Original homebrew content.</li>
	</ul>
</PageSection>

<PageSection title="Unofficial fan project">
	<p>
		D&D Portal is an independent and unofficial fan-created project.
	</p>

	<p>
		It is not affiliated with, operated by, sponsored by, endorsed by, or
		specifically approved by Wizards of the Coast LLC or Hasbro.
	</p>

	<p>
		Dungeons & Dragons, D&D, Wizards of the Coast, the dragon ampersand, and related
		names and properties belong to Wizards of the Coast LLC and their respective
		rights holders.
	</p>

	<p>
		More information about attribution, intellectual property, sources, and permitted
		use can be found on the following pages:
	</p>

	<ul>
		<li><a href={resolveAppPath('/credits')}>Credits</a></li>
		<li><a href={resolveAppPath('/sources')}>Sources</a></li>
		<li><a href={resolveAppPath('/ai')}>AI Transparency</a></li>
		<li><a href={resolveAppPath('/legal')}>Legal Notice</a></li>
		<li><a href={resolveAppPath('/privacy')}>Privacy Notice</a></li>
	</ul>
</PageSection>

<PageSection title="Development and maintenance">
	<p>
		D&D Portal is designed, developed, and maintained by
		<a
			href="https://www.linkedin.com/in/toon-van-berkel-a9112628b"
			target="_blank"
			rel="noopener noreferrer"
		>
			Toon van Berkel
		</a>.
	</p>

	<p>
		The project is actively developed. Pages, rules, campaign options, party
		information, and technical features may be added or changed over time.
	</p>

	<p>
		Technical problems, incorrect information, accessibility issues, and suggested
		improvements can be submitted through the public GitHub repository.
	</p>

	<div class="about-links">
		<a
			href={githubRepositoryUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			GitHub repository
			<span aria-hidden="true">↗</span>
		</a>

		<a href={`mailto:${contactEmail}`}>
			Contact by email
		</a>
	</div>
</PageSection>

<style lang="scss">
	@use './About.scss';
</style>
