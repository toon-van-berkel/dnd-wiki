<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageSection from '$lib/components/PageSection.svelte';

	const projectName = 'D&D Portal Wiki';
	const projectOwner = 'Toon van Berkel';
	const contactEmail = 'toonvanberkel.public@gmail.com';
	const lastUpdated = '2026-07-15';

	const repositoryUrl =
		'https://github.com/toon-van-berkel/dnd-wiki/';

	const repositoryIssuesUrl =
		'https://github.com/toon-van-berkel/dnd-wiki/issues';

	const repositorySecurityUrl =
		'https://github.com/toon-van-berkel/dnd-wiki/security/advisories/new';

	const repositoryLicenceName =
		'[Add repository software licence]';

	const repositoryLicenceUrl = '';

	const githubTermsUrl =
		'https://docs.github.com/site-policy/github-terms/github-terms-of-service';

	const githubPrivacyUrl =
		'https://docs.github.com/site-policy/privacy-policies/github-privacy-statement';

	const wizardsFanContentPolicyUrl =
		'https://company.wizards.com/en/legal/fancontentpolicy';
</script>

<div class="contribution-summary">
	<div>
		<strong>You keep ownership</strong>
		<span>
			You retain copyright in original material that you create.
		</span>
	</div>

	<div>
		<strong>Permission is required</strong>
		<span>
			D&D Portal receives permission to publish and maintain accepted work.
		</span>
	</div>

	<div>
		<strong>Only submit lawful material</strong>
		<span>
			You must own the contribution or have permission to submit it.
		</span>
	</div>
</div>

<PageSection title="Important notice">
	<div class="contribution-notice">
		<div class="contribution-notice__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="9" />
				<path d="M12 8v5" />
				<path d="M12 16h.01" />
			</svg>
		</div>

		<div>
			<h3>These terms apply when you submit a contribution</h3>

			<p>
				Simply reading or using the public Wiki does not make you a
				contributor and does not require acceptance of these terms.
			</p>
		</div>
	</div>

	<p>
		These Contribution Terms apply when you voluntarily submit material for
		inclusion in the {projectName}.
	</p>

	<p>
		A contribution may be submitted through GitHub, email, another agreed
		communication method, or directly to the project owner.
	</p>

	<p>
		By deliberately submitting a contribution after being shown or directed
		to these terms, you confirm that you have read and accepted them.
	</p>

	<p>
		Last updated:
		<time datetime={lastUpdated}>15 July 2026</time>.
	</p>
</PageSection>

<PageSection title="Project operator">
	<dl class="contribution-details">
		<div>
			<dt>Project</dt>
			<dd>{projectName}</dd>
		</div>

		<div>
			<dt>Project owner</dt>
			<dd>{projectOwner}</dd>
		</div>

		<div>
			<dt>Country</dt>
			<dd>The Netherlands</dd>
		</div>

		<div>
			<dt>Contact</dt>
			<dd>
				<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
			</dd>
		</div>
	</dl>
</PageSection>

<PageSection title="What counts as a contribution">
	<p>
		A contribution includes any material deliberately submitted for possible
		use within the project, including:
	</p>

	<ul>
		<li>Source code.</li>
		<li>Components, styles, scripts, and configuration files.</li>
		<li>Bug fixes and technical improvements.</li>
		<li>Rules explanations and reference text.</li>
		<li>Homebrew classes, subclasses, species, feats, spells, and items.</li>
		<li>Campaign descriptions and setting material.</li>
		<li>Characters, locations, creatures, and lore.</li>
		<li>Tables, datasets, and structured metadata.</li>
		<li>Images, illustrations, icons, diagrams, and maps.</li>
		<li>Alternative text and accessibility improvements.</li>
		<li>Translations.</li>
		<li>Corrections, suggestions, and documentation.</li>
	</ul>

	<p>
		General feedback or an idea that has not been incorporated into the
		project may not qualify as a protected contribution by itself.
	</p>
</PageSection>

<PageSection title="Who may contribute">
	<p>
		You may submit a contribution only when you are legally able to accept
		these terms.
	</p>

	<p>
		If you are contributing on behalf of another person, organisation, team,
		or employer, you confirm that you are authorised to do so.
	</p>

	<p>
		If you are not legally able to accept these terms independently, you
		must obtain permission from a parent, guardian, employer, or other
		authorised representative where applicable.
	</p>

	<p>
		Do not submit confidential employer, school, client, campaign, or
		third-party information without permission.
	</p>
</PageSection>

<PageSection title="Ownership of original contributions">
	<div class="contribution-feature">
		<div class="contribution-feature__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7z" />
				<path d="m9 12 2 2 4-4" />
			</svg>
		</div>

		<div>
			<h3>Ownership is not automatically transferred</h3>

			<p>
				You retain copyright in the original parts of your contribution
				that you legally own.
			</p>
		</div>
	</div>

	<p>
		Submitting content does not automatically transfer ownership of your
		original work to {projectOwner} or {projectName}.
	</p>

	<p>
		Your ownership applies only to material that you personally created or
		otherwise legally own. It does not give you ownership of:
	</p>

	<ul>
		<li>Dungeons & Dragons intellectual property.</li>
		<li>Wizards of the Coast material.</li>
		<li>Existing D&D Portal material.</li>
		<li>Third-party artwork, writing, code, or trademarks.</li>
		<li>Public-domain material.</li>
		<li>Material already licensed under another licence.</li>
	</ul>
</PageSection>

<PageSection title="Licence granted to D&D Portal">
	<p>
		By submitting a contribution, you grant {projectOwner} a:
	</p>

	<ul>
		<li>Non-exclusive licence.</li>
		<li>Worldwide licence.</li>
		<li>Royalty-free licence.</li>
		<li>Perpetual licence.</li>
	</ul>

	<p>
		This licence permits the project owner to use the contribution as part
		of {projectName}, including the right to:
	</p>

	<ul>
		<li>Store and archive it.</li>
		<li>Reproduce it.</li>
		<li>Publish and publicly display it.</li>
		<li>Distribute it as part of the project.</li>
		<li>Edit, correct, shorten, expand, or reorganise it.</li>
		<li>Translate it.</li>
		<li>Reformat it for different devices or components.</li>
		<li>Combine it with other project material.</li>
		<li>Create adapted or derivative versions.</li>
		<li>Use it in project documentation and promotional previews.</li>
		<li>Keep it available in project history and archives.</li>
	</ul>

	<p>
		The licence may be sublicensed only where reasonably necessary to host,
		deploy, archive, maintain, or transfer the operation of the project. This
		can include hosting providers, repository platforms, technical service
		providers, and future project maintainers.
	</p>

	<p>
		Because the licence is non-exclusive, you remain free to use, publish,
		or licence your own original contribution elsewhere.
	</p>
</PageSection>

<PageSection title="Why the licence is necessary">
	<p>
		A public collaborative website must be able to retain and update accepted
		contributions after publication.
	</p>

	<p>
		Without this permission, ordinary activities such as fixing spelling,
		updating rules, changing page layouts, creating mobile versions, moving
		files, or retaining Git history could require separate approval every
		time.
	</p>

	<p>
		The licence is intended to allow the contribution to remain part of the
		project without taking ownership away from its original author.
	</p>
</PageSection>

<PageSection title="Code contributions">
	<p>
		Code contributions may also be governed by the software licence included
		in the repository at the time of submission.
	</p>

	<div class="contribution-licence">
		<div>
			<span>Repository licence</span>
			<strong>{repositoryLicenceName}</strong>
		</div>

		{#if repositoryLicenceUrl}
			<a
				href={repositoryLicenceUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				Read the licence
				<span aria-hidden="true">↗</span>
			</a>
		{/if}
	</div>

	<p>
		Where a repository contains a software licence, submitting code indicates
		that the contribution may be distributed under that licence in addition
		to the permissions described on this page.
	</p>

	<p>
		If no repository licence has been declared, contributors still grant the
		project licence described in these Contribution Terms. Public visibility
		alone does not automatically place source code in the public domain.
	</p>

	<p>
		The applicable repository licence should be reviewed before submitting
		code.
	</p>
</PageSection>

<PageSection title="Written and creative contributions">
	<p>
		Written and creative contributions may be attributed to the contributor
		using a name, pseudonym, organisation, or other agreed author label.
	</p>

	<p>
		Unless a separate licence is clearly stated, visitors do not
		automatically receive unrestricted permission to republish an original
		contributor’s material merely because it appears on the Wiki.
	</p>

	<p>
		However, this restriction applies only to rights actually owned by the
		contributor. It cannot override:
	</p>

	<ul>
		<li>An existing open licence.</li>
		<li>The public domain.</li>
		<li>Applicable copyright exceptions.</li>
		<li>The Wizards Fan Content Policy.</li>
		<li>Any other policy or licence governing included material.</li>
	</ul>
</PageSection>

<PageSection title="Author and attribution information">
	<p>
		Contributors should provide accurate attribution information when
		submitting original material.
	</p>

	<p>A contribution can include:</p>

	<dl class="contribution-fields">
		<div>
			<dt>Author</dt>
			<dd>
				The person or organisation that created the original material.
			</dd>
		</div>

		<div>
			<dt>Source</dt>
			<dd>
				The original publication, repository, website, document, or
				other origin of the material.
			</dd>
		</div>

		<div>
			<dt>Licence</dt>
			<dd>
				The licence, permission, or policy under which the material may
				be used.
			</dd>
		</div>

		<div>
			<dt>Changes</dt>
			<dd>
				Whether the submitted material was translated, edited, adapted,
				or based on another work.
			</dd>
		</div>
	</dl>

	<p>
		Do not use labels such as <code>Author: Internet</code>. The internet is
		a publication medium, not an author or licence.
	</p>
</PageSection>

<PageSection title="Third-party material">
	<p>
		You may submit third-party material only when:
	</p>

	<ul>
		<li>You have permission from the rights holder.</li>
		<li>The material is covered by a licence that permits the intended use.</li>
		<li>The material is genuinely in the public domain.</li>
		<li>Another lawful exception clearly permits its inclusion.</li>
	</ul>

	<p>
		You must identify the original creator and applicable licence or
		permission where known.
	</p>

	<p>
		The fact that content is available through a public website, image
		search, social-media post, repository, PDF, or online forum does not by
		itself mean it may be copied into D&D Portal.
	</p>

	<p>
		Do not submit material from commercial books, paid services, private
		servers, subscription platforms, leaked files, or restricted documents
		unless you have explicit legal permission.
	</p>
</PageSection>

<PageSection title="Dungeons & Dragons and Wizards material">
	<p>
		D&D Portal is an unofficial fan-created project. Contributions containing
		Wizards of the Coast intellectual property must comply with the
		applicable policies and licences.
	</p>

	<p>You must not submit:</p>

	<ul>
		<li>Complete or substantial copies of commercial rulebooks.</li>
		<li>Scanned pages from official publications.</li>
		<li>Content copied from paid or restricted D&D Beyond pages.</li>
		<li>Official artwork without permission.</li>
		<li>Material that falsely appears to be officially endorsed.</li>
		<li>Logos or trademarks used in a misleading way.</li>
		<li>Leaked, unreleased, or unlawfully obtained material.</li>
	</ul>

	<p>
		Rules may be explained, summarised, discussed, or referenced only where
		the intended use is lawful and complies with the applicable licence or
		policy.
	</p>

	<a
		class="contribution-action"
		href={wizardsFanContentPolicyUrl}
		target="_blank"
		rel="noopener noreferrer"
	>
		<span>
			<strong>Wizards Fan Content Policy</strong>
			<small>Review the official requirements before contributing</small>
		</span>

		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M7 17 17 7" />
			<path d="M7 7h10v10" />
		</svg>
	</a>
</PageSection>

<PageSection title="Homebrew content">
	<p>
		Original homebrew contributions are welcome when they are clearly
		identified as unofficial material.
	</p>

	<p>
		A homebrew submission should normally include:
	</p>

	<ul>
		<li>The name of the author.</li>
		<li>A description of the concept.</li>
		<li>The intended game edition.</li>
		<li>Any source material used for inspiration.</li>
		<li>Known playtest information.</li>
		<li>Campaign availability or approval requirements.</li>
		<li>A clear distinction from official rules.</li>
	</ul>

	<p>
		Using a general gameplay concept does not permit copying another
		creator’s exact wording, artwork, unique lore, or protected expression.
	</p>
</PageSection>

<PageSection title="AI-generated and AI-assisted material">
	<p>
		AI-generated or AI-assisted contributions must be clearly disclosed.
	</p>

	<p>The submission should identify:</p>

	<ul>
		<li>The tool or service used.</li>
		<li>Whether the result was generated or edited.</li>
		<li>Whether a reference image or source text was used.</li>
		<li>Whether identifiable third-party material was included.</li>
		<li>Any substantial manual changes made afterwards.</li>
	</ul>

	<p>
		Do not submit generated material that intentionally imitates a living
		artist, reproduces protected characters or artwork too closely, or was
		created using reference material you were not permitted to use.
	</p>

	<p>
		Accepted AI-generated images may be registered on the
		<a href={resolveAppPath('/ai')}>AI Transparency page</a>.
	</p>
</PageSection>

<PageSection title="Personal data and private campaign information">
	<p>
		Do not submit unnecessary personal information about yourself or another
		person.
	</p>

	<p>
		A contribution must not expose private information such as:
	</p>

	<ul>
		<li>Home addresses.</li>
		<li>Private telephone numbers.</li>
		<li>Private email addresses.</li>
		<li>Passwords or authentication tokens.</li>
		<li>Private campaign invitations.</li>
		<li>Confidential player information.</li>
		<li>Medical, financial, or identity information.</li>
		<li>Private conversations without permission.</li>
	</ul>

	<p>
		Obtain permission before publishing a real person’s full name,
		photograph, character information, or contribution.
	</p>
</PageSection>

<PageSection title="Public GitHub contributions">
	<p>
		Issues, pull requests, commits, discussions, usernames, profile
		information, and contribution history submitted through a public GitHub
		repository may be publicly visible.
	</p>

	<p>
		GitHub processes this information under its own terms and privacy
		documentation.
	</p>

	<div class="contribution-links">
		<a
			href={githubTermsUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			GitHub Terms
			<span aria-hidden="true">↗</span>
		</a>

		<a
			href={githubPrivacyUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			GitHub Privacy Statement
			<span aria-hidden="true">↗</span>
		</a>
	</div>

	<p>
		Do not include sensitive information in a public issue, pull request,
		commit message, branch name, screenshot, or attachment.
	</p>
</PageSection>

<PageSection title="Contributor promises">
	<p>By submitting a contribution, you confirm that:</p>

	<ul>
		<li>You created it or have permission to submit it.</li>
		<li>You are authorised to grant the licences described here.</li>
		<li>The contribution does not knowingly infringe third-party rights.</li>
		<li>Required authors, sources, and licences have been identified.</li>
		<li>The contribution does not contain unlawfully obtained material.</li>
		<li>The contribution does not contain malicious code.</li>
		<li>The contribution does not intentionally expose private information.</li>
		<li>The contribution is not deliberately misleading.</li>
		<li>You have disclosed material AI assistance where relevant.</li>
		<li>You understand that acceptance and publication are not guaranteed.</li>
	</ul>

	<p>
		You remain responsible for the accuracy of these confirmations.
	</p>
</PageSection>

<PageSection title="Malicious or harmful contributions">
	<p>Contributions must not contain:</p>

	<ul>
		<li>Malware or ransomware.</li>
		<li>Credential-stealing code.</li>
		<li>Hidden tracking or surveillance functionality.</li>
		<li>Unauthorised cryptocurrency-mining code.</li>
		<li>Deliberately vulnerable code.</li>
		<li>Spam or deceptive redirects.</li>
		<li>Destructive scripts.</li>
		<li>Obfuscated functionality intended to hide harmful behaviour.</li>
	</ul>

	<p>
		Suspicious contributions may be rejected, removed, reported, or preserved
		as evidence where necessary.
	</p>
</PageSection>

<PageSection title="Security reports">
	<p>
		Do not disclose a serious security vulnerability through a public issue
		when doing so would create an unnecessary risk.
	</p>

	<p>
		Use a private security advisory or contact the project owner directly.
	</p>

	<div class="contribution-links">
		<a
			href={repositorySecurityUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			Open private security advisory
			<span aria-hidden="true">↗</span>
		</a>

		<a
			href={`mailto:${contactEmail}?subject=D%26D%20Portal%20security%20report`}
		>
			Report by email
		</a>
	</div>
</PageSection>

<PageSection title="Review and moderation">
	<p>
		Every contribution may be reviewed before publication.
	</p>

	<p>
		The project owner may:
	</p>

	<ul>
		<li>Accept or reject a contribution.</li>
		<li>Request additional information or changes.</li>
		<li>Correct spelling, grammar, structure, or formatting.</li>
		<li>Modify code to match the project architecture.</li>
		<li>Change content for clarity, accessibility, balance, or consistency.</li>
		<li>Move the contribution to another page or category.</li>
		<li>Combine it with another contribution.</li>
		<li>Remove unsupported claims or unlawful material.</li>
		<li>Delay publication.</li>
		<li>Remove previously accepted material.</li>
	</ul>

	<p>
		Submitting a contribution does not create a right to publication,
		continued publication, a response, or a particular review deadline.
	</p>
</PageSection>

<PageSection title="Editorial changes">
	<p>
		The project owner may edit accepted contributions without requesting
		separate approval for every change.
	</p>

	<p>
		Where reasonably possible, changes should preserve the contributor’s
		original intent. Significant mechanical, narrative, or authorship changes
		may be discussed with the contributor, but this is not guaranteed.
	</p>

	<p>
		If an edited version no longer reasonably represents the original
		contributor’s work, attribution may be adjusted or removed after
		consultation where appropriate.
	</p>
</PageSection>

<PageSection title="Attribution">
	<p>
		Reasonable efforts will be made to preserve accurate attribution for
		accepted original contributions.
	</p>

	<p>
		Attribution may appear:
	</p>

	<ul>
		<li>On the relevant Wiki page.</li>
		<li>In page metadata.</li>
		<li>On the Credits page.</li>
		<li>In Git commit history.</li>
		<li>In the Sources register.</li>
		<li>In accompanying documentation.</li>
	</ul>

	<p>
		Attribution may use the contributor’s real name, username, pseudonym, or
		organisation as agreed.
	</p>

	<p>
		Attribution can be omitted where the contributor requests anonymity,
		where no copyrightable contribution was made, or where attribution would
		be inaccurate or misleading.
	</p>
</PageSection>

<PageSection title="Withdrawal and removal requests">
	<p>
		You may request that a contribution no longer be used in future versions
		of the public Wiki.
	</p>

	<p>
		Removal requests will be considered in good faith, but removal is not
		guaranteed where:
	</p>

	<ul>
		<li>The contribution has been substantially integrated with other work.</li>
		<li>The material must be retained for legal or security reasons.</li>
		<li>The contribution remains in Git history or lawful archives.</li>
		<li>Copies or forks are controlled by independent third parties.</li>
		<li>The applicable licence does not permit unilateral withdrawal.</li>
		<li>Continued retention is otherwise legally permitted.</li>
	</ul>

	<p>
		Removing material from the current website does not automatically remove
		it from backups, caches, repository history, forks, or previous releases.
	</p>

	<p>
		The licence granted before a removal request remains valid for copies,
		adaptations, and uses already made, to the extent permitted by law.
	</p>
</PageSection>

<PageSection title="No payment or employment">
	<p>
		Unless a separate written agreement explicitly states otherwise,
		contributions are voluntary and unpaid.
	</p>

	<p>
		Submitting or accepting a contribution does not create:
	</p>

	<ul>
		<li>An employment relationship.</li>
		<li>A freelance contract.</li>
		<li>A partnership.</li>
		<li>A joint venture.</li>
		<li>An agency relationship.</li>
		<li>A right to royalties.</li>
		<li>A right to donations or project revenue.</li>
	</ul>

	<p>
		Voluntary donations made to support D&D Portal do not automatically
		create payment obligations toward contributors.
	</p>
</PageSection>

<PageSection title="Contributor responsibility">
	<p>
		Contributors are responsible for the material they submit and the
		permissions they claim to possess.
	</p>

	<p>
		When a third party makes a credible complaint, the contributor may be
		asked to provide evidence of authorship, permission, licence, or source.
	</p>

	<p>
		The contribution may be disabled or removed while a complaint is
		investigated.
	</p>

	<p>
		To the extent permitted by applicable law, a contributor may be held
		responsible for losses or reasonable costs caused by knowingly submitting
		unlawful material or materially false ownership information.
	</p>
</PageSection>

<PageSection title="No warranties from D&D Portal">
	<p>
		The project owner does not guarantee that:
	</p>

	<ul>
		<li>A submitted contribution will be reviewed.</li>
		<li>A contribution will be accepted.</li>
		<li>An accepted contribution will remain published.</li>
		<li>Attribution will appear in one specific location.</li>
		<li>The website will always remain available.</li>
		<li>The project will continue indefinitely.</li>
		<li>A contribution will remain compatible with future versions.</li>
	</ul>

	<p>
		The project is independently maintained and is provided on a reasonable
		efforts basis.
	</p>
</PageSection>

<PageSection title="Community conduct">
	<p>
		Contributors must communicate respectfully and in good faith.
	</p>

	<p>Unacceptable conduct includes:</p>

	<ul>
		<li>Harassment or threats.</li>
		<li>Discrimination or targeted abuse.</li>
		<li>Impersonation.</li>
		<li>Spam.</li>
		<li>Deliberate disruption.</li>
		<li>Publishing another person’s private information.</li>
		<li>Repeatedly ignoring moderation instructions.</li>
		<li>Submitting deliberately false reports.</li>
	</ul>

	<p>
		Contributions or accounts associated with serious misconduct may be
		rejected, blocked, reported, or removed.
	</p>
</PageSection>

<PageSection title="Changes to these terms">
	<p>
		These Contribution Terms may be updated when the project’s contribution
		process, repository licence, hosting arrangements, or legal obligations
		change.
	</p>

	<p>
		The version of the terms presented when a contribution is submitted
		normally applies to that submission.
	</p>

	<p>
		Material changes may be documented in the
		<a href={resolveAppPath('/changelog')}>Wiki changelog</a>.
	</p>
</PageSection>

<PageSection title="Governing law">
	<p>
		These Contribution Terms are governed by the laws of the Netherlands,
		without excluding mandatory legal protections that apply under another
		jurisdiction.
	</p>

	<p>
		The parties should first attempt to resolve disputes through reasonable
		direct communication.
	</p>
</PageSection>

<PageSection title="Severability">
	<p>
		If part of these terms is found invalid or unenforceable, the remaining
		parts continue to apply to the extent legally possible.
	</p>

	<p>
		The invalid provision should be interpreted or replaced as closely as
		legally possible to reflect its original purpose.
	</p>
</PageSection>

<PageSection title="How to contribute">
	<p>
		Contributions can be submitted through the project repository.
	</p>

	<div class="contribution-links">
		<a
			href={repositoryUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			View repository
			<span aria-hidden="true">↗</span>
		</a>

		<a
			href={repositoryIssuesUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			View issues
			<span aria-hidden="true">↗</span>
		</a>

		<a href={`mailto:${contactEmail}?subject=D%26D%20Portal%20contribution`}>
			Contact by email
		</a>
	</div>
</PageSection>

<PageSection title="Related information">
	<ul>
		<li><a href={resolveAppPath('/about')}>About D&D Portal</a></li>
		<li><a href={resolveAppPath('/credits')}>Credits</a></li>
		<li><a href={resolveAppPath('/sources')}>Sources</a></li>
		<li><a href={resolveAppPath('/ai')}>AI Transparency</a></li>
		<li><a href={resolveAppPath('/privacy')}>Privacy Notice</a></li>
		<li><a href={resolveAppPath('/legal')}>Legal Notice</a></li>
	</ul>
</PageSection>

<style lang="scss">
	@use './ContributionTerms.scss';
</style>
