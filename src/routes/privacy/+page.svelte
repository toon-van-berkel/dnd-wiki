<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import { WIKI_PREFERENCES_STORAGE_KEY } from '$lib/preferences/preferences';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';

	const siteName = 'D&D Portal Wiki';
	const controllerName = 'Toon van Berkel';
	const contactEmail = 'toonvanberkel.public@gmail.com';
	const lastUpdated = '2026-07-15';

	// TODO(configuration): Set the production hosting provider before release.
	const hostingProviderName = 'https://github.com/';

	// TODO(configuration): Add the hosting provider privacy-policy URL.
	const hostingProviderPrivacyUrl = '';

	// TODO(configuration): Add the separate Player Portal privacy notice when available.
	const playerPortalPrivacyUrl = '';
</script>

<div class="privacy-summary">
	<div>
		<strong>No accounts</strong>
		<span>The public Wiki does not require a user account.</span>
	</div>

	<div>
		<strong>No tracking</strong>
		<span>No advertising or behavioural analytics are currently used.</span>
	</div>

	<div>
		<strong>Local preferences</strong>
		<span>Some display choices may be stored only in your browser.</span>
	</div>
</div>

<PageSection title="About this notice">
	<p>
		This Privacy Notice explains how personal data may be processed when you
		visit or contact the {siteName}.
	</p>

	<p>
		It applies only to the public Wiki. D&D Portal also operates a separate
		Player Portal where participating players may view parties, campaigns,
		and planned session dates.
	</p>

	{#if playerPortalPrivacyUrl}
		<p>
			The Player Portal has its own
			<a href={playerPortalPrivacyUrl}>privacy notice</a>.
		</p>
	{:else}
		<p>
			The Player Portal is a separate service and should provide its own
			privacy information where personal or campaign-related information
			is processed.
		</p>
	{/if}

	<p>
		Last updated:
		<time datetime={lastUpdated}>15 July 2026</time>.
	</p>
</PageSection>

<PageSection title="Data controller">
	<p>
		The person responsible for the processing of personal data connected to
		the Wiki is:
	</p>

	<dl class="privacy-details">
		<div>
			<dt>Controller</dt>
			<dd>{controllerName}</dd>
		</div>

		<div>
			<dt>Website</dt>
			<dd>{siteName}</dd>
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

<PageSection title="Information the Wiki does not intentionally collect">
	<p>
		The public Wiki is designed to provide rules and campaign-reference
		information without requiring visitors to identify themselves.
	</p>

	<p>The Wiki currently does not provide or use:</p>

	<ul>
		<li>User accounts or public profiles.</li>
		<li>Login or registration forms.</li>
		<li>Comment sections.</li>
		<li>Direct file-upload functionality.</li>
		<li>Advertising networks.</li>
		<li>Behavioural advertising.</li>
		<li>Visitor profiling.</li>
		<li>Automated decision-making about visitors.</li>
		<li>Analytics intended to follow visitors between websites.</li>
		<li>Sale of personal data.</li>
	</ul>

	<p>
		Simply reading a public Wiki page does not intentionally require you to
		provide your name, email address, party membership, character details,
		or other directly identifying information.
	</p>
</PageSection>

<PageSection title="Local browser preferences">
	<div class="privacy-notice">
		<div class="privacy-notice__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<rect x="3" y="4" width="18" height="16" rx="2" />
				<path d="M3 8h18" />
				<path d="M7 6h.01" />
				<path d="M10 6h.01" />
				<path d="M8 12h8" />
				<path d="M8 16h5" />
			</svg>
		</div>

		<div>
			<h3>Preferences remain on your device</h3>

			<p>
				The Wiki may use browser storage to remember display choices.
				This information is not intended to identify you or follow you
				across other websites.
			</p>
		</div>
	</div>

	<p>
		The following browser-storage entries are currently used:
	</p>

	<div class="privacy-storage">
		<code>class-card-image-gender</code>

		<div>
			<strong>Purpose</strong>
			<p>
				Remembers whether class cards should display the female or male
				image variation.
			</p>
		</div>

		<div>
			<strong>Storage location</strong>
			<p>Your own browser using <code>localStorage</code>.</p>
		</div>

		<div>
			<strong>Sent to the website owner</strong>
			<p>No. The preference is read locally by the website interface.</p>
		</div>

		<div>
			<strong>Expiration</strong>
			<p>
				The preference remains until it is changed, removed by the
				website, or deleted through your browser settings.
			</p>
		</div>
	</div>

	<div class="privacy-storage">
		<code>{WIKI_PREFERENCES_STORAGE_KEY}</code>

		<div>
			<strong>Purpose</strong>
			<p>
				Remembers the preferred party and Dungeon Master used for availability context.
			</p>
		</div>

		<div>
			<strong>Storage location</strong>
			<p>Your own browser using <code>localStorage</code>.</p>
		</div>

		<div>
			<strong>Sent to the website owner</strong>
			<p>No. The preference is read locally by the website interface.</p>
		</div>

		<div>
			<strong>Expiration</strong>
			<p>
				The preference remains until preferences are cleared, removed by the
				website, or deleted through your browser settings.
			</p>
		</div>
	</div>

	<p>
		Additional functional preferences may be added in the future, such as a
		theme or language preference. This notice will be updated when the use
		of browser storage changes materially.
	</p>

	<p>
		Temporary search state is stored in the search page URL rather than in
		local storage. Search URLs can include query text, content-type filters,
		tag filters, and a page number. Those URL parameters can be visible in
		browser history, copied links, and hosting request logs.
	</p>
</PageSection>

<PageSection title="Cookies and tracking technologies">
	<p>
		The Wiki does not currently use advertising cookies, tracking cookies,
		or cookies for behavioural profiling.
	</p>

	<p>
		No cookie-consent banner is displayed solely for the local display
		preference described above.
	</p>

	<p>
		If analytics, advertising, embedded tracking services, or other
		non-essential technologies are introduced later, visitors will receive
		additional information and a consent interface where legally required.
	</p>
</PageSection>

<PageSection title="Contact by email">
	<p>
		When you contact the website owner by email, you voluntarily provide
		personal data. This may include:
	</p>

	<ul>
		<li>Your name or display name.</li>
		<li>Your email address.</li>
		<li>The contents of your message.</li>
		<li>Information included in attachments.</li>
		<li>Technical email metadata.</li>
	</ul>

	<p>
		This information is used to:
	</p>

	<ul>
		<li>Read and respond to your message.</li>
		<li>Investigate reported errors or accessibility problems.</li>
		<li>Handle source, attribution, or removal requests.</li>
		<li>Discuss proposed contributions.</li>
		<li>Protect the Wiki and its legal interests where necessary.</li>
	</ul>

	<p>
		The normal legal basis for this processing is the legitimate interest in
		responding to correspondence, maintaining the Wiki, correcting problems,
		and handling legitimate requests.
	</p>

	<p>
		Do not send sensitive personal data unless it is genuinely necessary for
		the subject of your request.
	</p>
</PageSection>

<PageSection title="Hosting and technical logs">
	<p>
		The Wiki is made available through a hosting provider:
	</p>

	<div class="privacy-provider">
		<strong>{hostingProviderName}</strong>

		{#if hostingProviderPrivacyUrl}
			<a
				href={hostingProviderPrivacyUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				View the provider’s privacy information
				<span aria-hidden="true">↗</span>
			</a>
		{/if}
	</div>

	<p>
		The hosting provider may automatically process limited technical
		information when a webpage is requested. Depending on the provider, this
		can include:
	</p>

	<ul>
		<li>IP address.</li>
		<li>Date and time of the request.</li>
		<li>Requested page or file.</li>
		<li>Browser and device information.</li>
		<li>Referring page.</li>
		<li>Error, security, and diagnostic information.</li>
	</ul>

	<p>
		Such information may be required to deliver the website, prevent abuse,
		maintain security, diagnose faults, and keep the hosting infrastructure
		operational.
	</p>

	<p>
		The exact retention period and processing locations depend on the
		selected hosting provider and its applicable terms and privacy policy.
	</p>
</PageSection>

<PageSection title="Purposes and legal bases">
	<div class="privacy-purpose-list">
		<article>
			<h3>Providing the Wiki</h3>

			<p>
				Technical data may be processed to load pages, images, styles,
				scripts, and other website resources.
			</p>

			<dl>
				<div>
					<dt>Legal basis</dt>
					<dd>Legitimate interests</dd>
				</div>

				<div>
					<dt>Interest</dt>
					<dd>
						Operating a stable, secure, and publicly accessible
						reference website.
					</dd>
				</div>
			</dl>
		</article>

		<article>
			<h3>Responding to messages</h3>

			<p>
				Contact information is processed when visitors voluntarily send
				an email or submit a request through an external platform.
			</p>

			<dl>
				<div>
					<dt>Legal basis</dt>
					<dd>Legitimate interests</dd>
				</div>

				<div>
					<dt>Interest</dt>
					<dd>
						Responding to questions, corrections, reports, and legal
						requests.
					</dd>
				</div>
			</dl>
		</article>

		<article>
			<h3>Legal obligations and claims</h3>

			<p>
				Information may be retained or disclosed where this is legally
				required or necessary in connection with a legal claim.
			</p>

			<dl>
				<div>
					<dt>Legal basis</dt>
					<dd>
						Legal obligation or legitimate interests, depending on
						the circumstances.
					</dd>
				</div>
			</dl>
		</article>
	</div>
</PageSection>

<PageSection title="Sharing personal data">
	<p>
		Personal data is not sold or rented.
	</p>

	<p>
		Information may be processed by or shared with:
	</p>

	<ul>
		<li>The provider that hosts the Wiki.</li>
		<li>The email provider used to receive and answer messages.</li>
		<li>GitHub when a visitor independently opens an issue or contribution.</li>
		<li>Technical service providers where necessary to maintain the website.</li>
		<li>Legal advisers or authorities where disclosure is legally required.</li>
	</ul>

	<p>
		Only information reasonably necessary for the relevant purpose should be
		shared.
	</p>
</PageSection>

<PageSection title="International data transfers">
	<p>
		Some service providers may process personal data outside the European
		Economic Area.
	</p>

	<p>
		Where this occurs, the relevant provider is responsible for applying an
		appropriate transfer mechanism and safeguards where required by data
		protection law.
	</p>

	<p>
		More information about processing locations and safeguards can normally
		be found in the privacy documentation of the relevant hosting, email, or
		external-service provider.
	</p>
</PageSection>

<PageSection title="External websites">
	<p>
		The Wiki contains links to external services such as D&D Beyond, Wizards
		of the Coast, GitHub, LinkedIn, and other reference websites.
	</p>

	<p>
		When you follow an external link, the destination website may receive
		technical information such as your IP address, browser information, and
		the page from which you arrived.
	</p>

	<p>
		External websites operate under their own privacy notices, cookie
		policies, security practices, and terms. D&D Portal does not control how
		those independent services process personal data.
	</p>
</PageSection>

<PageSection title="Retention periods">
	<p>
		Personal data is kept only for as long as reasonably necessary for the
		purpose for which it was processed.
	</p>

	<dl class="privacy-retention">
		<div>
			<dt>Local preferences</dt>
			<dd>
				Remain in your browser until changed or deleted from the
				browser.
			</dd>
		</div>

		<div>
			<dt>General email correspondence</dt>
			<dd>
				Kept while the question or request is being handled and deleted
				when it is no longer reasonably necessary.
			</dd>
		</div>

		<div>
			<dt>Legal, ownership, or removal requests</dt>
			<dd>
				May be retained longer where necessary to document the request,
				the response, and any resulting action.
			</dd>
		</div>

		<div>
			<dt>Technical hosting logs</dt>
			<dd>
				Retained in accordance with the security and retention settings
				of the hosting provider.
			</dd>
		</div>
	</dl>
</PageSection>

<PageSection title="Your privacy rights">
	<p>
		Depending on the circumstances, you may have the right to:
	</p>

	<ul>
		<li>Ask whether personal data about you is being processed.</li>
		<li>Request access to your personal data.</li>
		<li>Request correction of inaccurate or incomplete information.</li>
		<li>Request deletion of personal data.</li>
		<li>Request restriction of processing.</li>
		<li>Object to processing based on legitimate interests.</li>
		<li>Receive certain information in a portable format.</li>
		<li>Withdraw consent where processing is based on consent.</li>
		<li>Complain to a data-protection supervisory authority.</li>
	</ul>

	<p>
		Not every right applies to every type of processing. A request may also
		be refused or limited where the law permits or requires this.
	</p>

	<p>
		To exercise a privacy right, contact
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>

	<p>
		Additional information may be requested when reasonably necessary to
		confirm that the request concerns your own personal data.
	</p>
</PageSection>

<PageSection title="Complaints">
	<p>
		You are encouraged to contact the website owner first so that a concern
		can be investigated and, where possible, resolved.
	</p>

	<p>
		You also have the right to submit a complaint to the Dutch supervisory
		authority:
	</p>

	<a
		class="privacy-action"
		href="https://www.autoriteitpersoonsgegevens.nl/en/submitting-a-tip-off-or-a-complaint-to-the-ap"
		target="_blank"
		rel="noopener noreferrer"
	>
		<span>
			<strong>Autoriteit Persoonsgegevens</strong>
			<small>Submit a privacy complaint or tip-off</small>
		</span>

		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M7 17 17 7" />
			<path d="M7 7h10v10" />
		</svg>
	</a>
</PageSection>

<PageSection title="Children">
	<p>
		The public Wiki is not designed to collect personal data from children.
		Visitors should not publish or send personal details about themselves or
		another person unless this is necessary and appropriate.
	</p>

	<p>
		Parents or guardians who believe that a child has provided unnecessary
		personal information may contact the website owner to request its
		removal.
	</p>
</PageSection>

<PageSection title="Security">
	<p>
		Reasonable technical and organisational measures are used to reduce the
		risk of unauthorised access, loss, alteration, or disclosure.
	</p>

	<p>
		The amount of personal information intentionally processed by the public
		Wiki is kept limited. Public pages are separated from private campaign
		and player functionality.
	</p>

	<p>
		No internet service, email system, hosting platform, or storage method
		can guarantee absolute security.
	</p>

	<p>
		Security problems can be reported to
		<a href={`mailto:${contactEmail}?subject=D%26D%20Portal%20security%20report`}>
			{contactEmail}
		</a>.
	</p>
</PageSection>

<PageSection title="Changes to this notice">
	<p>
		This Privacy Notice may be updated when the Wiki, its hosting, browser
		storage, external services, or data-processing activities change.
	</p>

	<p>
		The publication date at the top of the page will be updated when a
		material change is made.
	</p>

	<p>
		Previous changes may also be documented in the
		<a href={resolveAppPath('/changelog')}>Wiki changelog</a>.
	</p>
</PageSection>

<PageSection title="Contact">
	<p>
		Questions about privacy or personal data can be sent to:
	</p>

	<div class="privacy-contact">
		<div>
			<span>Controller</span>
			<strong>{controllerName}</strong>
		</div>

		<div>
			<span>Email</span>
			<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
		</div>
	</div>
</PageSection>

<PageSection title="Related information">
	<ul>
		<li><a href={resolveAppPath('/about')}>About D&D Portal</a></li>
		<li><a href={resolveAppPath('/accessibility')}>Accessibility</a></li>
		<li><a href={resolveAppPath('/credits')}>Credits</a></li>
		<li><a href={resolveAppPath('/sources')}>Sources</a></li>
		<li><a href={resolveAppPath('/legal')}>Legal Notice</a></li>
	</ul>
</PageSection>

<style lang="scss">
	@use './PrivacyNotice.scss';
</style>
