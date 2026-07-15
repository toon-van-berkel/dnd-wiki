<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	const websiteUrl = 'https://www.toonvb.com';
	const githubRepositoryUrl = 'https://github.com/toon-van-berkel/dnd-wiki';
	const contactEmail = 'toonvanberkel.public@gmail.com';
	const linkedInUrl = 'https://www.linkedin.com/in/toon-van-berkel-a9112628b';
</script>

<svelte:head>
	<title>Credits | D&D Portal</title>

	<meta
		name="description"
		content="Credits, acknowledgements, source information, contribution guidelines, AI transparency, and legal information for D&D Portal."
	/>
</svelte:head>

<PageHeader
	title="Credits"
	description="Information about the people, tools, sources, artwork, and technologies that helped make D&D Portal possible."
	eyebrow="About this website"
/>

<PageSection title="Website creation and maintenance">
	<p>
		D&D Portal was designed, developed, published, and is maintained by
		<a href={websiteUrl} target="_blank" rel="noopener noreferrer">
			Toon van Berkel
		</a>.
	</p>

	<p>
		The website was created as an accessible reference for players participating in
		Dungeons & Dragons campaigns managed by Toon van Berkel. Its primary purpose is
		to make campaign rules, character options, house rules, homebrew content, and
		commonly used game information easier to find and understand.
	</p>

	<p>
		The website is an independently created fan resource. It is not an official
		Dungeons & Dragons product and is not operated, sponsored, endorsed, or
		specifically approved by Wizards of the Coast.
	</p>

	<p>
		Although care is taken when writing and reviewing the website, mistakes,
		outdated information, broken links, unclear descriptions, and technical problems
		may still occur. Visitors are encouraged to report anything that appears to be
		incorrect or incomplete.
	</p>
</PageSection>

<PageSection title="Reporting problems and recommending improvements">
	<p>
		There are several ways to report a problem, recommend an improvement, or suggest
		new content.
	</p>

	<ol>
		<li>
			<p>
				<strong>Open an issue on GitHub</strong>
			</p>

			<p>
				Technical problems, content corrections, feature requests, accessibility
				problems, and suggestions for new pages should preferably be submitted through
				the public GitHub repository.
			</p>

			<p>
				<a
					href={githubRepositoryUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Open the D&D Portal GitHub repository
				</a>
			</p>

			<p>
				When opening an issue, please include as much relevant information as
				possible. A useful report should normally contain:
			</p>

			<ul>
				<li>A clear and descriptive title.</li>
				<li>A link to the page where the problem occurs.</li>
				<li>A description of the current behaviour or content.</li>
				<li>A description of what you expected to see instead.</li>
				<li>Steps that can be used to reproduce a technical problem.</li>
				<li>Screenshots, error messages, or code examples where relevant.</li>
				<li>
					An explanation of why a proposed change would improve the website.
				</li>
				<li>
					A source reference when suggesting a correction to an official rule.
				</li>
			</ul>

			<p>
				New content suggestions should also be submitted through an issue first.
				This allows the proposed addition to be discussed before development begins.
			</p>
		</li>

		<li>
			<p>
				<strong>Send an email</strong>
			</p>

			<p>
				Visitors who do not have a GitHub account, or who need to discuss something
				that should not be posted publicly, can send an email to
				<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
			</p>

			<p>
				Please use a descriptive subject line and include the relevant page URL when
				reporting a website or content problem.
			</p>
		</li>
	</ol>
</PageSection>

<PageSection title="Contributing to the website">
	<p>
		Community contributions are welcome when they help improve the accuracy,
		readability, accessibility, organisation, or technical quality of the website.
	</p>

	<p>
		Before working on a significant addition, contributors should first open a
		GitHub issue describing the proposed change. This helps prevent duplicate work
		and makes it possible to discuss whether the addition fits the structure and
		purpose of the website.
	</p>

	<p>Possible contributions include:</p>

	<ul>
		<li>Correcting spelling, grammar, or unclear wording.</li>
		<li>Reporting incorrect or outdated rule information.</li>
		<li>Improving keyboard navigation or screen-reader support.</li>
		<li>Fixing broken links or layout problems.</li>
		<li>Improving mobile and tablet usability.</li>
		<li>Adding missing source references.</li>
		<li>Improving page organisation and navigation.</li>
		<li>Suggesting new campaign tools or reference pages.</li>
		<li>Submitting technical improvements through a pull request.</li>
	</ul>

	<p>
		Submitting a suggestion does not guarantee that it will be accepted or
		implemented. Proposed changes may be adjusted to match the website’s structure,
		writing style, campaign rules, accessibility requirements, and technical
		standards.
	</p>
</PageSection>

<PageSection title="Professional and general contact">
	<p>
		For professional questions relating to web development, software development,
		design, collaboration, or other business matters, contact Toon van Berkel through
		<a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
			LinkedIn
		</a>.
	</p>

	<p>
		Questions specifically relating to D&D Portal can be sent to
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>

	<p>
		Please do not use the contact information on this page to request copies of
		commercial Dungeons & Dragons books or other copyrighted material.
	</p>
</PageSection>

<PageSection title="Rules and source material">
	<p>
		Dungeons & Dragons rules, terminology, game mechanics, creature names, spell
		names, class names, species names, and other official game elements referenced
		on this website originate from publications and services created by
		<a
			href="https://company.wizards.com/en"
			target="_blank"
			rel="noopener noreferrer"
		>
			Wizards of the Coast
		</a>.
	</p>

	<p>
		D&D Portal may contain summaries, explanations, campaign interpretations,
		reorganised reference information, and links to official or third-party sources.
		The website is not intended to replace official rulebooks, licensed digital
		content, or other products published by Wizards of the Coast.
	</p>

	<p>
		Where possible, rule pages should identify the source from which the information
		was derived. Source references may include:
	</p>

	<ul>
		<li>The name of the relevant rulebook or supplement.</li>
		<li>The edition or version of the rules.</li>
		<li>A chapter or page reference where appropriate.</li>
		<li>A link to an official online source.</li>
		<li>A note explaining whether the content has been modified for a campaign.</li>
	</ul>

	<p>
		If information on this website conflicts with an official publication, the
		official publication should be treated as the authoritative source unless the
		page clearly identifies the difference as a house rule, campaign rule, homebrew
		rule, or deliberate rules interpretation.
	</p>
</PageSection>

<PageSection title="Official rules, house rules, and homebrew">
	<p>
		D&D Portal contains several different types of content. These should not be
		treated as interchangeable.
	</p>

	<dl>
		<dt><strong>Official rules</strong></dt>
		<dd>
			<p>
				Rules originating from an official Dungeons & Dragons publication or
				licensed source.
			</p>
		</dd>

		<dt><strong>Rules explanations</strong></dt>
		<dd>
			<p>
				Simplified descriptions intended to make an official rule easier to read
				or understand.
			</p>
		</dd>

		<dt><strong>Rules interpretations</strong></dt>
		<dd>
			<p>
				Explanations of how a rule is interpreted when its wording is unclear or
				when different readings are possible.
			</p>
		</dd>

		<dt><strong>House rules</strong></dt>
		<dd>
			<p>
				Changes to the normal rules that apply to one or more campaigns.
			</p>
		</dd>

		<dt><strong>Campaign-specific rules</strong></dt>
		<dd>
			<p>
				Rules, restrictions, exceptions, or character options that apply only to a
				specific campaign or player group.
			</p>
		</dd>

		<dt><strong>Homebrew content</strong></dt>
		<dd>
			<p>
				Original classes, subclasses, species, monsters, items, spells, mechanics,
				or other content that is not part of the official Dungeons & Dragons rules.
			</p>
		</dd>
	</dl>

	<p>
		Pages should clearly label house rules, campaign-specific rules, and homebrew
		content to prevent them from being mistaken for official material.
	</p>
</PageSection>

<PageSection title="Artwork and visual material">
	<p>
		Artwork and other visual material displayed on D&D Portal may come from several
		different sources.
	</p>

	<ul>
		<li>Original visual material created specifically for the website.</li>
		<li>Commissioned work used with the creator’s permission.</li>
		<li>Third-party material used under an applicable licence.</li>
		<li>Icons and interface assets provided by external libraries.</li>
		<li>AI-generated illustrative images.</li>
		<li>Official imagery shown only where its use is permitted.</li>
	</ul>

	<p>
		Where attribution is required or reasonably possible, the creator, source, and
		applicable licence should be identified either on the page where the material is
		used or on this credits page.
	</p>

	<p>
		Ownership of third-party artwork remains with its original creator or rights
		holder. Inclusion on this website does not transfer ownership to D&D Portal or
		Toon van Berkel.
	</p>
</PageSection>

<PageSection title="AI-generated images">
	<p>
		Some images used on D&D Portal may have been generated or modified with the
		assistance of artificial intelligence.
	</p>

	<p>
		These images are used as supporting visual references for classes, species,
		monsters, locations, non-player characters, campaign concepts, and other related
		content. They are not presented as original, manually created artwork by Toon van
		Berkel.
	</p>

	<p>
		AI-generated images are primarily used to provide a quick visual impression of
		the subject being described. They should not be interpreted as official Dungeons
		& Dragons artwork or as an exact representation of official lore.
	</p>

	<p>
		Pages that use AI-generated imagery should be identified on the dedicated
		<a href={resolveAppPath('/ai')}>AI transparency page</a>. That page may include information such as:
	</p>

	<ul>
		<li>Which images were generated or modified using AI.</li>
		<li>The purpose for which each image is used.</li>
		<li>The generation or editing tool used, where known.</li>
		<li>Whether an image was based on another visual reference.</li>
		<li>Whether significant manual editing was performed afterwards.</li>
	</ul>

	<p>
		AI-generated imagery should not be used to falsely claim authorship, impersonate
		a real artist, or deliberately misrepresent official Dungeons & Dragons material.
	</p>
</PageSection>

<PageSection title="Icons and interface assets">
	<p>
		Icons and other interface assets used throughout D&D Portal may originate from
		external repositories and icon libraries.
	</p>

	<p>
		Some icons have been obtained from
		<a
			href="https://www.svgrepo.com/"
			target="_blank"
			rel="noopener noreferrer"
		>
			SVG Repo
		</a>.
		Individual icons on SVG Repo may be made available under different licences.
		The applicable licence should therefore be checked before an icon is added to
		the website.
	</p>

	<p>
		Additional Dungeons & Dragons-related icons have been obtained from the
		<a
			href="https://github.com/intrinsical/tw-dnd"
			target="_blank"
			rel="noopener noreferrer"
		>
			tw-dnd repository
		</a>,
		created by
		<a
			href="https://github.com/intrinsical"
			target="_blank"
			rel="noopener noreferrer"
		>
			David Kor Kian Wei, also known as Intrinsical
		</a>.
	</p>

	<p>
		Third-party icons remain subject to the terms and conditions of their respective
		licences. Attribution on this page does not replace any attribution or licence
		requirements included with the original asset.
	</p>
</PageSection>

<PageSection title="Tools and technology">
	<p>
		D&D Portal is built using modern web technologies selected for maintainability,
		performance, accessibility, and readability.
	</p>

	<ul>
		<li>
			<strong>SvelteKit</strong> — the application framework used to build the
			website and its pages.
		</li>
		<li>
			<strong>Svelte</strong> — the component framework used to create reusable
			interface elements.
		</li>
		<li>
			<strong>TypeScript</strong> — used to provide static typing and improve code
			reliability.
		</li>
		<li>
			<strong>HTML</strong> — used to provide the semantic structure of the website.
		</li>
		<li>
			<strong>CSS and SCSS</strong> — used for layout, responsive behaviour, colours,
			typography, and visual styling.
		</li>
		<li>
			<strong>Git</strong> — used for version control and tracking changes.
		</li>
		<li>
			<strong>GitHub</strong> — used for repository hosting, issue tracking,
			collaboration, and project history.
		</li>
	</ul>

	<p>
		Additional packages, libraries, fonts, icons, or development tools may be used
		throughout the project. Their respective authors and licence terms remain
		applicable.
	</p>

	<p>
		The repository history and dependency files provide the most current technical
		record of the tools and packages used by the website.
	</p>
</PageSection>

<PageSection title="Accessibility">
	<p>
		D&D Portal aims to provide information in a format that is readable and usable
		across different devices and input methods.
	</p>

	<p>Accessibility considerations include:</p>

	<ul>
		<li>Semantic page structure and heading order.</li>
		<li>Keyboard-accessible navigation and controls.</li>
		<li>Readable typography and sufficient spacing.</li>
		<li>Alternative text for meaningful images.</li>
		<li>Clear focus indicators for interactive elements.</li>
		<li>Responsive layouts for desktop, tablet, and mobile devices.</li>
		<li>Colour choices that aim to maintain sufficient contrast.</li>
		<li>Reduced-motion support where animated elements are used.</li>
	</ul>

	<p>
		Accessibility problems can be reported through the GitHub repository or by
		emailing
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>
</PageSection>

<PageSection title="External links">
	<p>
		D&D Portal may contain links to external websites, repositories, social media
		profiles, products, tools, or reference material.
	</p>

	<p>
		External websites are operated by their respective owners. D&D Portal does not
		control their availability, security, accessibility, privacy practices, or
		content.
	</p>

	<p>
		A link to an external website does not automatically mean that D&D Portal or Toon
		van Berkel endorses every statement, product, service, or opinion presented on
		that website.
	</p>
</PageSection>

<PageSection title="Copyright and ownership">
	<p>
		Unless otherwise stated, the original website code, page structure, original
		writing, original campaign material, and original homebrew content created
		specifically for D&D Portal are owned by their respective creator.
	</p>

	<p>
		Third-party content remains the property of its original author, publisher,
		artist, developer, or rights holder.
	</p>

	<p>
		Nothing on this credits page should be interpreted as granting permission to
		reproduce, redistribute, sell, or commercially exploit third-party material.
		Visitors should consult the original source and its applicable licence before
		reusing any material.
	</p>

	<p>
		The availability of the website’s source code through a public repository does
		not automatically mean that every image, icon, rule description, name, logo, or
		other asset in the repository is covered by the same licence.
	</p>
</PageSection>

<PageSection title="Dungeons & Dragons trademark notice">
	<p>
		Dungeons & Dragons, D&D, Wizards of the Coast, the dragon ampersand, and related
		names, characters, logos, product names, and distinctive likenesses are
		trademarks or property of Wizards of the Coast LLC in the United States and other
		countries.
	</p>

	<p>
		D&D Portal is an unofficial, independently created fan resource. It is not
		affiliated with, endorsed by, sponsored by, or specifically approved by Wizards
		of the Coast.
	</p>

	<p>
		References to official Dungeons & Dragons material are included for
		identification, discussion, campaign organisation, and educational reference.
		All rights relating to official Dungeons & Dragons material remain with Wizards
		of the Coast and the relevant rights holders.
	</p>
</PageSection>

<PageSection title="Corrections, attribution requests, and takedown requests">
	<p>
		Reasonable efforts are made to identify sources and provide appropriate
		attribution. However, information about an asset’s creator, owner, origin, or
		licence may occasionally be incomplete or incorrect.
	</p>

	<p>
		If you are a creator or rights holder and believe that material on D&D Portal:
	</p>

	<ul>
		<li>Has been attributed incorrectly.</li>
		<li>Is missing required attribution.</li>
		<li>Uses an incorrect or outdated licence.</li>
		<li>Has been used without appropriate permission.</li>
		<li>Should be removed or replaced.</li>
	</ul>

	<p>
		Please send an email to
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>

	<p>Please include:</p>

	<ul>
		<li>Your name and preferred contact information.</li>
		<li>The URL of the page containing the material.</li>
		<li>A clear description of the material concerned.</li>
		<li>An explanation of your relationship to the material.</li>
		<li>The correction, attribution, or action you are requesting.</li>
		<li>Any supporting ownership or licence information that may be relevant.</li>
	</ul>

	<p>
		Good-faith correction and removal requests will be reviewed, and appropriate
		action will be taken where necessary.
	</p>
</PageSection>

<PageSection title="Accuracy and availability">
	<p>
		D&D Portal is maintained as an ongoing project. Content, availability rules,
		campaign information, navigation structures, visual assets, and technical
		features may change over time.
	</p>

	<p>
		No guarantee is made that every page will always be complete, error-free, or
		available. Rules may also be revised when a campaign changes, a new source is
		adopted, an error is discovered, or an official publication is updated.
	</p>

	<p>
		The GitHub repository and its commit history can be used to review changes made
		to the website.
	</p>
</PageSection>

<PageSection title="Special thanks">
	<p>
		Special thanks go to the players and Dungeon Masters who have helped test rules,
		review homebrew content, report mistakes, suggest improvements, and provide
		feedback about the website.
	</p>

	<p>
		Thanks also go to the developers, designers, artists, writers, maintainers, and
		open-source contributors whose tools and resources made the development of this
		website possible.
	</p>

	<p>
		Finally, thanks to everyone who has taken the time to read the website, report a
		problem, suggest an improvement, or contribute to the project.
	</p>
</PageSection>