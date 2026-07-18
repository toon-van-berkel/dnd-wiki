<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';

	const projectName = 'D&D Portal Wiki';
	const projectOwner = 'Toon van Berkel';
	const contactEmail = 'toonvanberkel.public@gmail.com';
	const lastUpdated = '2026-07-15';

	const repositoryUrl =
		'https://github.com/toon-van-berkel/dnd-wiki';

	const privacyNoticeUrl = '/privacy';
	const legalNoticeUrl = '/legal';
	const contributionTermsUrl = '/contribution-terms';

	const privacyAuthorityUrl =
		'https://www.autoriteitpersoonsgegevens.nl/en';

	const requestSubject =
		'D&D Portal content removal request';

	const requestBody = `Content removal request

Affected page URL:
Affected content or image:
Type of request:
Reason for the request:
Your relationship to the content:
Requested action:
Supporting information:

Please do not include passwords, authentication tokens, identity documents, or other unnecessary sensitive information.`;

	const removalRequestEmailUrl =
		`mailto:${contactEmail}` +
		`?subject=${encodeURIComponent(requestSubject)}` +
		`&body=${encodeURIComponent(requestBody)}`;
</script>

<div class="removal-summary">
	<div>
		<strong>Identify the content</strong>
		<span>Include the exact page, image, passage, or file.</span>
	</div>

	<div>
		<strong>Explain the reason</strong>
		<span>Describe the rights, privacy, safety, or accuracy concern.</span>
	</div>

	<div>
		<strong>Provide evidence</strong>
		<span>Include relevant ownership, source, or permission information.</span>
	</div>
</div>

<PageSection title="Purpose of this page">
	<p>
		This page explains how to report material published through the
		{projectName} that you believe should be corrected, restricted, or
		removed.
	</p>

	<p>
		A request may concern copyright, attribution, privacy, confidential
		information, security, unlawful material, or another legitimate concern.
	</p>

	<p>
		Every request is reviewed according to its specific circumstances.
		Submitting a request does not guarantee removal, and the absence of an
		immediate response does not mean that the concern has been ignored.
	</p>

	<p>
		Last updated:
		<time datetime={lastUpdated}>15 July 2026</time>.
	</p>
</PageSection>

<PageSection title="Website operator">
	<dl class="removal-details">
		<div>
			<dt>Website</dt>
			<dd>{projectName}</dd>
		</div>

		<div>
			<dt>Operator</dt>
			<dd>{projectOwner}</dd>
		</div>

		<div>
			<dt>Country</dt>
			<dd>The Netherlands</dd>
		</div>

		<div>
			<dt>Contact</dt>
			<dd>
				<a href={`mailto:${contactEmail}`}>
					{contactEmail}
				</a>
			</dd>
		</div>
	</dl>
</PageSection>

<PageSection title="When to submit a removal request">
	<p>
		A content-removal request may be appropriate when you reasonably believe
		that material on the Wiki:
	</p>

	<div class="removal-categories">
		<article>
			<span class="removal-categories__label">Copyright</span>
			<h3>Uses protected work without permission</h3>

			<p>
				For example, text, artwork, photography, maps, software, or other
				original material that you own or represent.
			</p>
		</article>

		<article>
			<span class="removal-categories__label">Attribution</span>
			<h3>Names the wrong author or source</h3>

			<p>
				This includes missing credit, inaccurate authorship, or an
				incorrect licence statement.
			</p>
		</article>

		<article>
			<span class="removal-categories__label">Privacy</span>
			<h3>Contains personal information</h3>

			<p>
				This may include unnecessary names, contact information,
				photographs, account information, or other personal data.
			</p>
		</article>

		<article>
			<span class="removal-categories__label">Confidentiality</span>
			<h3>Discloses private or restricted material</h3>

			<p>
				For example, private campaign information, confidential
				messages, credentials, or restricted documents.
			</p>
		</article>

		<article>
			<span class="removal-categories__label">Safety</span>
			<h3>Creates a credible security or safety risk</h3>

			<p>
				This includes exposed credentials, malicious files, dangerous
				redirects, or information that creates a serious personal risk.
			</p>
		</article>

		<article>
			<span class="removal-categories__label">Legality</span>
			<h3>Contains material that may be unlawful</h3>

			<p>
				Identify the relevant content and explain the legal basis for
				your concern as precisely as reasonably possible.
			</p>
		</article>
	</div>
</PageSection>

<PageSection title="Correction instead of removal">
	<p>
		Complete removal is not always the most appropriate solution.
	</p>

	<p>
		Depending on the problem, a request may be resolved by:
	</p>

	<ul>
		<li>Correcting the author or source.</li>
		<li>Adding a missing licence notice.</li>
		<li>Removing a specific sentence, image, or attachment.</li>
		<li>Replacing protected wording with an original summary.</li>
		<li>Removing unnecessary personal information.</li>
		<li>Changing a full name into a pseudonym or general description.</li>
		<li>Restricting access while the matter is investigated.</li>
		<li>Adding context or correcting inaccurate information.</li>
		<li>Replacing an image with a properly licensed alternative.</li>
	</ul>

	<p>
		You may state your preferred solution in the request. The final action
		may differ when another solution addresses the concern more
		appropriately.
	</p>
</PageSection>

<PageSection title="Information required">
	<div class="removal-notice">
		<div class="removal-notice__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="9" />
				<path d="M12 8v5" />
				<path d="M12 16h.01" />
			</svg>
		</div>

		<div>
			<h3>Be specific enough to locate and assess the material</h3>

			<p>
				A general statement that the website contains unwanted content
				may not provide enough information to investigate the request.
			</p>
		</div>
	</div>

	<p>A useful request should include:</p>

	<ol>
		<li>
			<strong>Your name and contact information.</strong>
			Use a name through which the request can be discussed and an email
			address at which you can receive a response.
		</li>

		<li>
			<strong>The affected page URL.</strong>
			Include a direct link to every relevant Wiki page.
		</li>

		<li>
			<strong>The exact affected material.</strong>
			Identify the image, paragraph, heading, file, source entry, or other
			item involved.
		</li>

		<li>
			<strong>The reason for the request.</strong>
			Explain whether the concern relates to copyright, privacy,
			attribution, confidentiality, safety, or another issue.
		</li>

		<li>
			<strong>Your relationship to the material.</strong>
			State whether you are the author, rights holder, depicted person,
			authorised representative, contributor, or another affected party.
		</li>

		<li>
			<strong>The requested action.</strong>
			State whether you are requesting correction, attribution,
			restriction, replacement, anonymisation, or removal.
		</li>

		<li>
			<strong>Supporting information.</strong>
			Provide relevant source links, publication details, licence
			information, or evidence of authority where reasonably necessary.
		</li>

		<li>
			<strong>A good-faith confirmation.</strong>
			Confirm that the information in the request is accurate to the best
			of your knowledge.
		</li>
	</ol>
</PageSection>

<PageSection title="Submit a request">
	<p>
		Send removal requests directly by email. Legal, privacy, or security
		requests should not be submitted through a public GitHub issue.
	</p>

	<a class="removal-action" href={removalRequestEmailUrl}>
		<span>
			<strong>Start a content-removal request</strong>
			<small>
				Open a pre-filled email containing the required information
			</small>
		</span>

		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M4 5h16v14H4z" />
			<path d="m4 7 8 6 8-6" />
		</svg>
	</a>

	<p>
		Requests can also be sent manually to
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
		with the subject <strong>{requestSubject}</strong>.
	</p>
</PageSection>

<PageSection title="Do not include unnecessary sensitive information">
	<p>
		Provide only the information reasonably necessary to assess the request.
	</p>

	<p>Do not send:</p>

	<ul>
		<li>Passwords.</li>
		<li>Authentication tokens.</li>
		<li>Private keys.</li>
		<li>Complete identity documents.</li>
		<li>Payment information.</li>
		<li>Medical information unrelated to the request.</li>
		<li>Personal data belonging to unrelated people.</li>
		<li>Confidential documents when a limited excerpt is sufficient.</li>
	</ul>

	<p>
		Additional verification may be requested only where reasonably necessary
		to establish identity, authority, ownership, or another relevant fact.
	</p>
</PageSection>

<PageSection title="Copyright requests">
	<p>
		A copyright request should identify the original protected work and the
		material on D&D Portal that is claimed to infringe it.
	</p>

	<p>Include where available:</p>

	<ul>
		<li>The title or description of the original work.</li>
		<li>The original author or rights holder.</li>
		<li>The date and location of original publication.</li>
		<li>A link or reference demonstrating the original work.</li>
		<li>The exact D&D Portal page or image involved.</li>
		<li>An explanation of the allegedly unauthorised use.</li>
		<li>Your authority to act for the rights holder, where applicable.</li>
	</ul>

	<p>
		Public availability does not by itself establish that material is in the
		public domain or may be freely republished.
	</p>

	<p>
		A request should also take account of any applicable permission, licence,
		fan-content policy, public-domain status, or lawful exception.
	</p>
</PageSection>

<PageSection title="Privacy and personal-data requests">
	<p>
		You may request the correction or deletion of personal data concerning
		you where applicable.
	</p>

	<p>A privacy request should identify:</p>

	<ul>
		<li>The personal data involved.</li>
		<li>The page or file where it appears.</li>
		<li>Your relationship to the personal data.</li>
		<li>Why correction or deletion is requested.</li>
		<li>Any relevant reason that makes the request urgent.</li>
	</ul>

	<p>
		Privacy rights are subject to legal conditions and exceptions. Information
		may sometimes need to be retained for legal claims, security,
		documentation, freedom of expression, or another lawful reason.
	</p>

	<div class="removal-links">
		<a href={resolveAppPath(privacyNoticeUrl)}>
			Read the Privacy Notice
		</a>

		<a
			href={privacyAuthorityUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			Autoriteit Persoonsgegevens
			<span aria-hidden="true">↗</span>
		</a>
	</div>
</PageSection>

<PageSection title="Urgent security or safety reports">
	<p>
		Mark a request as urgent when the published material exposes:
	</p>

	<ul>
		<li>A working password or authentication token.</li>
		<li>A private encryption or signing key.</li>
		<li>A serious exploitable security vulnerability.</li>
		<li>A private home address connected to a credible threat.</li>
		<li>Information creating an immediate personal safety risk.</li>
		<li>Malware or a dangerous download.</li>
	</ul>

	<p>
		Use the email subject:
		<strong>URGENT — D&D Portal security or safety report</strong>.
	</p>

	<p>
		Do not publish sensitive details in a public issue, pull request, commit,
		or discussion.
	</p>
</PageSection>

<PageSection title="Review process">
	<div class="removal-process">
		<article>
			<span>1</span>
			<div>
				<h3>Receipt</h3>
				<p>
					The request is received and checked for enough information to
					begin an assessment.
				</p>
			</div>
		</article>

		<article>
			<span>2</span>
			<div>
				<h3>Initial assessment</h3>
				<p>
					The location, nature, urgency, and apparent basis of the
					request are reviewed.
				</p>
			</div>
		</article>

		<article>
			<span>3</span>
			<div>
				<h3>Temporary action where appropriate</h3>
				<p>
					Content may be temporarily hidden, restricted, or replaced
					while a serious concern is investigated.
				</p>
			</div>
		</article>

		<article>
			<span>4</span>
			<div>
				<h3>Further information</h3>
				<p>
					The requester, contributor, author, or another relevant party
					may be asked for clarification.
				</p>
			</div>
		</article>

		<article>
			<span>5</span>
			<div>
				<h3>Decision</h3>
				<p>
					The content may be retained, corrected, attributed,
					restricted, replaced, or removed.
				</p>
			</div>
		</article>

		<article>
			<span>6</span>
			<div>
				<h3>Notification</h3>
				<p>
					Where appropriate and possible, the requester is informed of
					the outcome.
				</p>
			</div>
		</article>
	</div>
</PageSection>

<PageSection title="Temporary restriction">
	<p>
		Material may be temporarily hidden or disabled before a final decision
		when:
	</p>

	<ul>
		<li>The request concerns exposed credentials.</li>
		<li>Continued publication creates a credible immediate risk.</li>
		<li>The available information indicates a likely serious infringement.</li>
		<li>Additional time is needed to verify ownership or permission.</li>
		<li>A service provider requires temporary restriction.</li>
	</ul>

	<p>
		Temporary restriction does not by itself confirm that the content was
		unlawful or that the requester’s claim was correct.
	</p>
</PageSection>

<PageSection title="Possible outcomes">
	<div class="removal-outcomes">
		<article>
			<h3>Retained</h3>
			<p>
				The content remains available because the request does not
				establish a sufficient reason for action.
			</p>
		</article>

		<article>
			<h3>Corrected</h3>
			<p>
				Inaccurate wording, attribution, source information, or personal
				data is corrected.
			</p>
		</article>

		<article>
			<h3>Restricted</h3>
			<p>
				Access is limited temporarily or permanently while preserving
				necessary records.
			</p>
		</article>

		<article>
			<h3>Replaced</h3>
			<p>
				The affected material is replaced with an original, licensed, or
				otherwise suitable alternative.
			</p>
		</article>

		<article>
			<h3>Anonymised</h3>
			<p>
				Identifying information is removed or changed while the remaining
				content is retained.
			</p>
		</article>

		<article>
			<h3>Removed</h3>
			<p>
				The material is removed from the current public version of the
				Wiki.
			</p>
		</article>
	</div>
</PageSection>

<PageSection title="Requests affecting contributor material">
	<p>
		When a request concerns material submitted by a contributor, the
		contributor may be informed and given a reasonable opportunity to
		explain:
	</p>

	<ul>
		<li>How the material was created.</li>
		<li>Which licence or permission applies.</li>
		<li>Why the attribution is accurate.</li>
		<li>Whether the material can be replaced or corrected.</li>
		<li>Why publication should continue.</li>
	</ul>

	<p>
		Information that would unnecessarily expose the requester’s personal
		data should not be shared.
	</p>

	<p>
		Contributor rights and responsibilities are described further in the
		<a href={resolveAppPath(contributionTermsUrl)}>Contribution Terms</a>.
	</p>
</PageSection>

<PageSection title="Requesting reconsideration">
	<p>
		A requester or affected contributor may ask for reconsideration when they
		believe that:
	</p>

	<ul>
		<li>Relevant evidence was misunderstood.</li>
		<li>Important information was unavailable during the first review.</li>
		<li>The wrong content or page was assessed.</li>
		<li>A licence or permission was incorrectly interpreted.</li>
		<li>The selected action is unnecessarily broad.</li>
	</ul>

	<p>
		A reconsideration request should identify the previous request and
		clearly explain what new or corrected information should be reviewed.
	</p>

	<p>
		Repeated requests containing no meaningful new information may not
		receive a further detailed assessment.
	</p>
</PageSection>

<PageSection title="Repository history, caches, and copies">
	<p>
		Removing content from the current website does not guarantee immediate
		removal from every technical location.
	</p>

	<p>Copies may temporarily remain in:</p>

	<ul>
		<li>Browser caches.</li>
		<li>Search-engine caches.</li>
		<li>Content-delivery networks.</li>
		<li>Backups.</li>
		<li>Git commit history.</li>
		<li>Repository forks.</li>
		<li>Independent archives.</li>
		<li>Copies previously downloaded by third parties.</li>
	</ul>

	<p>
		Reasonable steps may be taken to remove or restrict copies controlled by
		D&D Portal. Independent third-party copies remain under the control of
		their respective operators or users.
	</p>
</PageSection>

<PageSection title="External websites">
	<p>
		D&D Portal may link to third-party websites but does not control their
		content.
	</p>

	<p>
		A request concerning material hosted entirely on another website should
		normally be directed to that website’s operator or hosting provider.
	</p>

	<p>
		Where appropriate, D&D Portal may remove or update its link to external
		material without being able to remove the external material itself.
	</p>
</PageSection>

<PageSection title="False, abusive, or misleading requests">
	<p>
		Removal requests must be made honestly and in good faith.
	</p>

	<p>Do not submit requests intended to:</p>

	<ul>
		<li>Misrepresent ownership.</li>
		<li>Impersonate a rights holder.</li>
		<li>Silence lawful criticism or disagreement.</li>
		<li>Harass a contributor or website operator.</li>
		<li>Obtain private information about another person.</li>
		<li>Disrupt the website through repeated unsupported reports.</li>
		<li>Remove content merely because it is disliked.</li>
	</ul>

	<p>
		Knowingly false or abusive reports may be rejected, documented, or
		referred to an appropriate service provider or authority where
		necessary.
	</p>
</PageSection>

<PageSection title="Response times">
	<p>
		D&D Portal is independently maintained and does not operate a dedicated
		legal or moderation department.
	</p>

	<p>
		Requests will be assessed within a reasonable period based on their
		complexity, urgency, available information, and the need to consult
		relevant parties.
	</p>

	<p>
		Urgent security and personal-safety reports receive priority where their
		urgency can reasonably be established.
	</p>

	<p>
		No specific response or resolution time is guaranteed unless applicable
		law requires otherwise.
	</p>
</PageSection>

<PageSection title="Preservation of records">
	<p>
		Information connected to a request may be retained where reasonably
		necessary to:
	</p>

	<ul>
		<li>Investigate and respond to the request.</li>
		<li>Document the action taken.</li>
		<li>Prevent repeated publication of disputed material.</li>
		<li>Respond to legal claims.</li>
		<li>Protect the rights of the requester, contributor, or project.</li>
		<li>Comply with legal obligations.</li>
		<li>Investigate fraud, abuse, or security incidents.</li>
	</ul>

	<p>
		Request information is handled according to the
		<a href={resolveAppPath(privacyNoticeUrl)}>Privacy Notice</a>.
	</p>
</PageSection>

<PageSection title="No admission">
	<p>
		Correcting, restricting, or removing material does not automatically mean
		that:
	</p>

	<ul>
		<li>The original publication was unlawful.</li>
		<li>Liability is accepted.</li>
		<li>The requester owns every right claimed.</li>
		<li>The contributor acted intentionally.</li>
		<li>Every allegation in the request was accepted.</li>
	</ul>

	<p>
		Content may be changed voluntarily to resolve uncertainty, reduce risk,
		respect a reasonable request, or improve the Wiki.
	</p>
</PageSection>

<PageSection title="Changes to this procedure">
	<p>
		This content-removal procedure may be updated when the website,
		contribution process, hosting arrangements, or applicable requirements
		change.
	</p>

	<p>
		Material changes may be recorded on the
		<a href={resolveAppPath('/changelog')}>Changelog</a>.
	</p>
</PageSection>

<PageSection title="Contact">
	<div class="removal-contact">
		<div>
			<span>Content-removal requests</span>
			<a href={removalRequestEmailUrl}>
				{contactEmail}
			</a>
		</div>

		<div>
			<span>Website operator</span>
			<strong>{projectOwner}</strong>
		</div>
	</div>

	<p>
		For general public development suggestions that do not involve private,
		legal, or security information, you may use the project repository.
	</p>

	<div class="removal-links">
		<a
			href={repositoryUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			View repository
			<span aria-hidden="true">↗</span>
		</a>

		<a href={resolveAppPath(legalNoticeUrl)}>
			Read the Legal Notice
		</a>
	</div>
</PageSection>

<PageSection title="Related information">
	<ul>
		<li><a href={resolveAppPath('/legal')}>Legal Notice</a></li>
		<li><a href={resolveAppPath('/privacy')}>Privacy Notice</a></li>
		<li><a href={resolveAppPath('/cookies')}>Cookie Notice</a></li>
		<li><a href={resolveAppPath('/contribution-terms')}>Contribution Terms</a></li>
		<li><a href={resolveAppPath('/credits')}>Credits</a></li>
		<li><a href={resolveAppPath('/sources')}>Sources</a></li>
		<li><a href={resolveAppPath('/ai')}>AI Transparency</a></li>
	</ul>
</PageSection>

<style lang="scss">
	@use './ContentRemoval.scss';
</style>
