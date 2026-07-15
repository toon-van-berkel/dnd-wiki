<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	const websiteName = 'D&D Portal';
	const websiteOwner = 'Toon van Berkel';
	const contactEmail = 'toonvanberkel.public@gmail.com';

	const wizardsFanContentPolicy =
		'https://company.wizards.com/en/legal/fancontentpolicy';

	const wizardsTerms =
		'https://company.wizards.com/en/legal/terms';
</script>

<svelte:head>
	<title>Legal Notice | {websiteName}</title>

	<meta
		name="description"
		content="Legal notice, intellectual property information, usage conditions, disclaimers, and takedown procedures for D&D Portal."
	/>
</svelte:head>

<PageHeader
	title="Legal Notice"
	description="Important information about ownership, permitted use, third-party material, liability, and the unofficial nature of this website."
	eyebrow="Legal information"
/>

<PageSection title="Important notice">
	<p>
		This legal notice describes the conditions under which this website and its
		content are made available. By accessing or using this website, you acknowledge
		that you have read and understood this notice.
	</p>

	<p>
		This notice is intended to clarify the purpose and conditions of the website.
		It does not override applicable law, third-party licences, intellectual property
		rights, or mandatory consumer protections.
	</p>

	<p>
		Nothing on this page constitutes professional legal advice. Visitors, authors,
		contributors, and other users remain responsible for obtaining independent legal
		advice when necessary.
	</p>
</PageSection>

<PageSection title="Website operator">
	<p>
		{websiteName} is an independently created and maintained website operated by
		{websiteOwner}.
	</p>

	<p>
		Questions concerning this website, its content, attribution, intellectual
		property, or this legal notice can be sent to
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>
</PageSection>

<PageSection title="Purpose of the website">
	<p>
		The sole purpose of {websiteName} is to provide information, references,
		explanations, campaign documentation, and tools relating to tabletop role-playing
		games and the campaigns in which the website is used.
	</p>

	<p>
		The website is intended as an informational and organisational resource. It is
		not intended to replace official books, licensed services, subscriptions, paid
		products, professional advice, or material published by the relevant rights
		holders.
	</p>

	<p>
		Content may include rule explanations, summaries, interpretations, house rules,
		campaign-specific rules, original creations, homebrew material, source links, and
		other information intended to assist players and Dungeon Masters.
	</p>
</PageSection>

<PageSection title="Non-commercial operation and donations">
	<p>
		Access to the publicly available content on {websiteName} is provided free of
		charge. Visitors are not required to purchase a subscription, complete a survey,
		register an account, provide an email address, or make a payment to access the
		public content.
	</p>

	<p>
		The website does not sell access to Dungeons & Dragons rules, Wizards of the
		Coast material, third-party publications, or other protected works.
	</p>

	<p>
		The website may provide visitors with an optional method of making a voluntary
		donation. Donations do not purchase access, ownership, licences, additional
		content, preferential treatment, decision-making authority, or any other
		entitlement.
	</p>

	<p>
		No content will be placed behind a donation requirement merely because it
		references or incorporates material governed by the Wizards of the Coast Fan
		Content Policy.
	</p>

	<p>
		Donations are intended only to support costs associated with maintaining,
		hosting, developing, and improving the website.
	</p>
</PageSection>

<PageSection title="Unofficial fan content">
	<p>
		{websiteName} is an unofficial fan-created resource. It is not affiliated with,
		operated by, sponsored by, endorsed by, or specifically approved by Wizards of
		the Coast LLC or Hasbro.
	</p>

	<blockquote>
		<p>
			{websiteName} is unofficial Fan Content permitted under the Fan Content
			Policy. Not approved or endorsed by Wizards. Portions of the materials used
			are property of Wizards of the Coast. © Wizards of the Coast LLC.
		</p>
	</blockquote>

	<p>
		Use of Wizards of the Coast intellectual property is intended to comply with the
		<a
			href={wizardsFanContentPolicy}
			target="_blank"
			rel="noopener noreferrer"
		>
			Wizards of the Coast Fan Content Policy
		</a>
		and the applicable
		<a
			href={wizardsTerms}
			target="_blank"
			rel="noopener noreferrer"
		>
			Wizards of the Coast Terms of Use
		</a>.
	</p>

	<p>
		Wizards of the Coast may change its policies or require fan content to be
		changed or removed. Where required, affected content may be modified, disabled,
		or removed without prior notice.
	</p>
</PageSection>

<PageSection title="Dungeons & Dragons intellectual property">
	<p>
		Dungeons & Dragons, D&D, Wizards of the Coast, the dragon ampersand, Dungeon
		Master, Player’s Handbook, Monster Manual, Dungeon Master’s Guide, and related
		names, characters, settings, artwork, logos, product names, and distinctive
		likenesses are trademarks, copyrighted works, or other property of Wizards of
		the Coast LLC and their respective rights holders.
	</p>

	<p>
		References to these properties are made for identification, commentary,
		explanation, campaign organisation, and fan-related informational purposes.
	</p>

	<p>
		No ownership of official Dungeons & Dragons material is claimed by
		{websiteOwner} or {websiteName}.
	</p>

	<p>
		Unless expressly permitted under an applicable licence, policy, or law, visitors
		may not use this website as a substitute source for commercial rulebooks,
		adventures, supplements, artwork, or other official products.
	</p>
</PageSection>

<PageSection title="No distribution of protected publications">
	<p>
		{websiteName} does not intentionally provide complete copies of commercial
		rulebooks, adventures, supplements, subscription-only pages, protected
		databases, or other publications that are not authorised for redistribution.
	</p>

	<p>
		The website may explain, summarise, organise, reference, or link to information,
		but should not reproduce substantial protected portions of a publication unless
		that reproduction is expressly permitted by the rights holder, an applicable
		licence, or the law.
	</p>

	<p>
		Visitors must not use the website to request, distribute, upload, publish, or
		obtain unauthorised copies of copyrighted publications.
	</p>
</PageSection>

<PageSection title="Content labelled “Source: Public Internet”">
	<p>
		Some information may be labelled:
	</p>

	<p>
		<strong>Source: Public Internet</strong>
	</p>

	<p>
		This label means that the underlying information was found on a page that was
		publicly accessible at the time it was consulted and was not knowingly placed
		behind a payment requirement, subscription, login, encryption system, or other
		technical access restriction.
	</p>

	<p>
		This label does <strong>not</strong> mean that:
	</p>

	<ul>
		<li>The material is in the public domain.</li>
		<li>The material has no author or rights holder.</li>
		<li>The material is free from copyright or database rights.</li>
		<li>The material may be copied or redistributed without permission.</li>
		<li>The original website approved its inclusion on {websiteName}.</li>
		<li>The information is guaranteed to be correct, complete, or current.</li>
	</ul>

	<p>
		Public accessibility and legal permission to reproduce material are separate
		issues. Copyright, database rights, trademarks, contractual restrictions, and
		other rights may continue to apply.
	</p>

	<p>
		Where reasonably possible, {websiteName} will link to or identify the original
		public source instead of reproducing the complete original material.
	</p>

	<p>
		If the original author, licence, or rights holder can later be identified, the
		source information may be corrected or expanded.
	</p>
</PageSection>

<PageSection title="Content with a named author">
	<p>
		When a person or organisation is identified as the author of content, ownership
		of that author’s original contribution remains with that author unless a written
		agreement or applicable licence expressly states otherwise.
	</p>

	<p>
		Attribution does not transfer ownership to {websiteName}, {websiteOwner}, or the
		visitor.
	</p>

	<p>
		Unless a different licence is displayed next to the content, original content
		with a named author is made available only for personal, private,
		non-commercial tabletop use.
	</p>

	<p>For such original content, visitors may normally:</p>

	<ul>
		<li>Read and reference the content.</li>
		<li>Use it during a private tabletop campaign.</li>
		<li>Adapt it privately for their own campaign.</li>
		<li>Discuss it with members of their own gaming group.</li>
	</ul>

	<p>Visitors may not, without permission from the relevant author:</p>

	<ul>
		<li>Claim that they created or authored the content.</li>
		<li>Remove or conceal the author’s name or attribution.</li>
		<li>Publish the content under their own name.</li>
		<li>Sell, license, rent, or commercially exploit the content.</li>
		<li>Upload or redistribute substantial copies on another website or platform.</li>
		<li>Include it in a paid publication, product, service, or subscription.</li>
		<li>Use it to train, market, or promote a commercial product without permission.</li>
		<li>Suggest that the original author endorses their project.</li>
	</ul>

	<p>
		These restrictions apply only to rights that the named author or
		{websiteName} is legally able to grant or reserve. They do not override the
		Wizards of the Coast Fan Content Policy, an open licence, the public domain, or
		other applicable rights and exceptions.
	</p>
</PageSection>

<PageSection title="Applicable licences and policies take priority">
	<p>
		Individual pages, files, images, icons, code components, or other materials may
		be subject to their own licences or policies.
	</p>

	<p>
		Where a specific licence or policy is identified, that licence or policy takes
		priority over the general wording of this legal notice for the relevant
		material.
	</p>

	<p>Examples may include:</p>

	<ul>
		<li>The Wizards of the Coast Fan Content Policy.</li>
		<li>A Creative Commons licence.</li>
		<li>An open-source software licence.</li>
		<li>A licence included with an icon library.</li>
		<li>A written agreement with an author or artist.</li>
		<li>Public-domain status.</li>
	</ul>

	<p>
		Visitors are responsible for reviewing the licence that applies to specific
		material before copying, adapting, distributing, or otherwise reusing it.
	</p>
</PageSection>

<PageSection title="Original website material">
	<p>
		Unless otherwise stated, the original source code, website structure, custom
		components, original written explanations, original campaign documentation,
		original homebrew concepts, and original visual elements created by
		{websiteOwner} remain the intellectual property of their respective creator.
	</p>

	<p>
		The publication of source code in a public repository does not automatically
		place that source code or all repository assets in the public domain.
	</p>

	<p>
		The licence file included in the relevant repository, where present, determines
		which permissions are granted for the source code.
	</p>

	<p>
		Third-party assets contained in or referenced by the repository may remain
		subject to separate licences and are not automatically covered by the repository
		licence.
	</p>
</PageSection>

<PageSection title="Third-party material">
	<p>
		{websiteName} may contain names, text, images, icons, links, code, or other
		material created or owned by third parties.
	</p>

	<p>
		All third-party rights remain with their respective authors, artists,
		developers, publishers, licensors, and other rights holders.
	</p>

	<p>
		Inclusion of third-party material does not imply a transfer of ownership,
		partnership, sponsorship, endorsement, or approval.
	</p>

	<p>
		Where attribution or a licence notice is required, reasonable efforts will be
		made to display that information.
	</p>
</PageSection>

<PageSection title="Contributions and submitted material">
	<p>
		Anyone who submits text, code, images, ideas, corrections, homebrew content, or
		other material represents that they have the authority to submit that material.
	</p>

	<p>
		Contributors must not submit material that unlawfully copies another person’s
		work, violates confidentiality, infringes intellectual property rights, contains
		unlawfully shared personal data, or breaches an applicable licence.
	</p>

	<p>
		By submitting an accepted contribution, the contributor grants
		{websiteName} a non-exclusive, worldwide, royalty-free licence to host,
		reproduce, format, technically adapt, display, and maintain that contribution as
		part of the website.
	</p>

	<p>
		This licence does not transfer authorship or ownership unless a separate written
		agreement expressly states otherwise.
	</p>

	<p>
		Contributors remain responsible for the material they submit and for ensuring
		that their submission can lawfully be used.
	</p>
</PageSection>

<PageSection title="User responsibility">
	<p>
		All visitors use the information on {websiteName} at their own discretion and
		risk.
	</p>

	<p>
		Visitors are responsible for determining whether particular content may be used
		in their campaign, publication, website, software, commercial activity, or other
		project.
	</p>

	<p>
		Visitors are also responsible for:
	</p>

	<ul>
		<li>Following applicable copyright and trademark law.</li>
		<li>Complying with the licence or policy attached to material.</li>
		<li>Obtaining any permissions required for redistribution.</li>
		<li>Verifying rules before relying on them in organised or official play.</li>
		<li>Checking whether campaign-specific content applies to their campaign.</li>
		<li>Respecting author attribution and ownership.</li>
		<li>Ensuring that their use does not harm or misrepresent another person.</li>
	</ul>

	<p>
		{websiteName} does not grant rights in material owned by Wizards of the Coast
		or another third party.
	</p>
</PageSection>

<PageSection title="No warranties">
	<p>
		The website and its content are provided on an “as is” and “as available” basis.
	</p>

	<p>
		To the maximum extent permitted by applicable law, no guarantee or warranty is
		given concerning:
	</p>

	<ul>
		<li>The accuracy or completeness of the content.</li>
		<li>The legal status of every referenced item.</li>
		<li>The suitability of content for a particular campaign.</li>
		<li>Compatibility with a specific Dungeons & Dragons edition.</li>
		<li>The continued availability of any page or feature.</li>
		<li>The absence of technical defects, errors, or interruptions.</li>
		<li>The security or availability of external websites.</li>
		<li>The accuracy of third-party or publicly sourced information.</li>
	</ul>

	<p>
		Content may be corrected, changed, reorganised, restricted, or removed at any
		time without prior notice.
	</p>
</PageSection>

<PageSection title="Limitation of liability">
	<p>
		To the maximum extent permitted by applicable law, {websiteOwner},
		{websiteName}, its maintainers, and its contributors will not be liable for
		indirect, incidental, consequential, special, or similar damage arising from the
		use of, inability to use, or reliance upon this website.
	</p>

	<p>
		This includes, without limitation, damage caused by:
	</p>

	<ul>
		<li>Incorrect, incomplete, or outdated information.</li>
		<li>Decisions made using information from the website.</li>
		<li>Loss of campaign data or personal notes.</li>
		<li>Technical failures or temporary unavailability.</li>
		<li>External websites, downloads, software, or services.</li>
		<li>Unauthorised reuse of content by a visitor.</li>
		<li>A visitor’s failure to obtain required permission.</li>
	</ul>

	<p>
		Nothing in this notice excludes or limits liability where such exclusion or
		limitation is prohibited by applicable law.
	</p>
</PageSection>

<PageSection title="External links">
	<p>
		The website may link to official publications, reference websites, repositories,
		tools, social platforms, or other external services.
	</p>

	<p>
		External links are provided for convenience and reference. {websiteName} does
		not control and is not responsible for the content, security, availability,
		licensing, privacy practices, or accuracy of external websites.
	</p>

	<p>
		A link does not necessarily indicate endorsement of the external website or all
		material published there.
	</p>
</PageSection>

<PageSection title="No professional advice">
	<p>
		The content of {websiteName} is provided for tabletop gaming, informational,
		creative, and entertainment purposes.
	</p>

	<p>
		It must not be treated as legal, financial, medical, tax, security,
		psychological, or other professional advice.
	</p>

	<p>
		Professional advice should be obtained from a suitably qualified professional
		when necessary.
	</p>
</PageSection>

<PageSection title="Reporting infringement or incorrect attribution">
	<p>
		Reasonable efforts are made to avoid unauthorised use and to identify the
		relevant author, source, rights holder, and licence.
	</p>

	<p>
		If you believe that material has been used without permission, attributed
		incorrectly, or displayed under an incorrect licence, contact
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>

	<p>Please include:</p>

	<ul>
		<li>Your full name or the name of the represented rights holder.</li>
		<li>Your contact information.</li>
		<li>The URL of the affected page.</li>
		<li>A clear identification of the relevant material.</li>
		<li>An explanation of your rights or relationship to the material.</li>
		<li>The correction, attribution, restriction, or removal requested.</li>
		<li>Supporting information where reasonably available.</li>
	</ul>

	<p>
		Good-faith reports will be reviewed. Content may be temporarily disabled while a
		report is investigated.
	</p>
</PageSection>

<PageSection title="Removal and modification of content">
	<p>
		{websiteName} reserves the right to correct, restrict, disable, replace, or
		remove content where there is a reasonable concern involving:
	</p>

	<ul>
		<li>Copyright or trademark infringement.</li>
		<li>Violation of a licence or fan-content policy.</li>
		<li>Incorrect or missing attribution.</li>
		<li>Privacy or personal-data concerns.</li>
		<li>Security concerns.</li>
		<li>Illegal or harmful material.</li>
		<li>Incorrect campaign or rules information.</li>
		<li>A request from a relevant rights holder.</li>
	</ul>

	<p>
		Removal does not constitute an admission of liability or wrongdoing.
	</p>
</PageSection>

<PageSection title="Prohibited use">
	<p>
		Visitors may not use {websiteName} or its content to:
	</p>

	<ul>
		<li>Falsely claim authorship of another person’s work.</li>
		<li>Remove or falsify attribution or copyright notices.</li>
		<li>Distribute unauthorised copies of protected publications.</li>
		<li>Misrepresent unofficial content as official Wizards material.</li>
		<li>Sell material when the relevant licence or policy prohibits it.</li>
		<li>Introduce malware or attempt to compromise the website.</li>
		<li>Collect personal information unlawfully.</li>
		<li>Impersonate an author, publisher, contributor, or rights holder.</li>
		<li>Use the website in violation of applicable law.</li>
	</ul>
</PageSection>

<PageSection title="Privacy and personal information">
	<p>
		This legal notice does not replace the website’s privacy notice.
	</p>

	<p>
		Where {websiteName} processes personal information, the applicable processing,
		purpose, retention period, service providers, and user rights should be explained
		on a separate privacy page.
	</p>

	<p>
		Visitors should not submit private, confidential, sensitive, or unnecessary
		personal information through public GitHub issues or other public contribution
		channels.
	</p>
</PageSection>

<PageSection title="Changes to this notice">
	<p>
		This legal notice may be updated when the website, applicable policies, licences,
		features, or legal requirements change.
	</p>

	<p>
		The version displayed on this page is the version currently applicable to use of
		the website.
	</p>

	<p>
		Continued use after a change means that the visitor is responsible for reviewing
		the updated notice. This does not create acceptance of provisions that cannot
		lawfully be imposed without separate consent.
	</p>
</PageSection>

<PageSection title="Governing law">
	<p>
		To the extent legally permitted, this website and this legal notice are governed
		by the laws of the Netherlands.
	</p>

	<p>
		Disputes will be submitted to a competent court in the Netherlands unless
		mandatory applicable law requires a different court, jurisdiction, or dispute
		procedure.
	</p>
</PageSection>

<PageSection title="Severability">
	<p>
		If any part of this legal notice is found to be invalid, unlawful, or
		unenforceable, that part will be interpreted or limited only to the extent
		necessary.
	</p>

	<p>
		The remaining provisions will continue to apply to the extent permitted by law.
	</p>
</PageSection>

<PageSection title="Contact">
	<p>
		Questions, correction requests, attribution requests, and intellectual-property
		concerns can be sent to:
	</p>

	<address>
		<strong>{websiteOwner}</strong><br />
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
	</address>

	<p>
		Please provide sufficient information to allow the request to be investigated.
		Submitting a request does not guarantee that content will be removed where its
		use is lawful or expressly licensed.
	</p>
</PageSection>