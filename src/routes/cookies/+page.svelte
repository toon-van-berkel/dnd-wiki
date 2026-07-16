<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import { WIKI_PREFERENCES_STORAGE_KEY } from '$lib/utils/wiki-preferences';
	import PageSection from '$lib/components/PageSection.svelte';

	type StorageTechnology = {
		name: string;
		key: string;
		type: 'Cookie' | 'Local storage' | 'Session storage';
		provider: string;
		purpose: string;
		data: string;
		duration: string;
		shared: string;
		consent: string;
	};

	const contactEmail = 'toonvanberkel.public@gmail.com';
	const lastUpdated = '2026-07-15';

	// TODO(configuration): Set the production hosting provider before release.
	const hostingProviderName = '[Add hosting provider]';

	// The cookie inventory is intentionally empty until server-set cookies are introduced.
	const cookies: StorageTechnology[] = [];

	const classCardPreference: StorageTechnology = {
		name: 'Class-card image preference',
		key: 'class-card-image-gender',
		type: 'Local storage',
		provider: 'D&D Portal Wiki',
		purpose:
			'Remembers whether class cards should display their female or male image variation.',
		data: 'The selected image variation: female or male.',
		duration:
			'Stored until the preference is changed, removed by the website, or deleted through the browser.',
		shared: 'No. The value remains inside the visitor’s browser.',
		consent:
			'No separate consent is currently requested because this entry is used only as a local interface preference.'
	};

	const wikiPreference: StorageTechnology = {
		name: 'Wiki preference',
		key: WIKI_PREFERENCES_STORAGE_KEY,
		type: 'Local storage',
		provider: 'D&D Portal Wiki',
		purpose:
			'Remembers the preferred party and Dungeon Master used for availability context.',
		data: 'Stable party and Dungeon Master IDs, such as i1 or toon.',
		duration:
			'Stored until preferences are cleared, removed by the website, or deleted through the browser.',
		shared: 'No. The value remains inside the visitorâ€™s browser.',
		consent:
			'No separate consent is currently requested because this entry is used only as a local interface preference.'
	};

	const localStorageEntries: StorageTechnology[] = [
		classCardPreference,
		wikiPreference
	];

	let removedPreferenceKeys = $state<string[]>([]);

	function removeLocalStoragePreference(key: string) {
		if (typeof window === 'undefined') {
			return;
		}

		window.localStorage.removeItem(key);
		removedPreferenceKeys = [...new Set([...removedPreferenceKeys, key])];
	}

	function isPreferenceRemoved(key: string) {
		return removedPreferenceKeys.includes(key);
	}
</script>

<div class="cookie-summary">
	<div>
		<strong>{cookies.length}</strong>
		<span>HTTP cookies currently used</span>
	</div>

	<div>
		<strong>{localStorageEntries.length}</strong>
		<span>Local browser preferences</span>
	</div>

	<div>
		<strong>None</strong>
		<span>Analytics or advertising trackers</span>
	</div>
</div>

<PageSection title="Current cookie status">
	<div class="cookie-status">
		<div class="cookie-status__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<path d="M20.5 13.5A8.5 8.5 0 1 1 10.5 3a4 4 0 0 0 5 5 4 4 0 0 0 5 5.5Z" />
				<path d="M8.5 12h.01" />
				<path d="M12 16h.01" />
				<path d="M7 17h.01" />
			</svg>
		</div>

		<div>
			<h3>No HTTP cookies are currently set by the Wiki</h3>

			<p>
				The D&D Portal Wiki does not currently use cookies for
				advertising, visitor profiling, behavioural tracking, analytics,
				login sessions, or account authentication.
			</p>
		</div>
	</div>

	<p>
		A cookie banner is therefore not currently displayed for optional
		analytics or marketing cookies.
	</p>

	<p>
		The Wiki does use a small amount of local browser storage to remember
		interface preferences. Local storage is not technically an HTTP cookie,
		but it is documented on this page because it is a related browser-storage
		technology.
	</p>

	<p>
		This status applies only to the public D&D Portal Wiki. The separate
		D&D Player Portal may use different technologies and should provide its
		own cookie information.
	</p>
</PageSection>

<PageSection title="What are cookies?">
	<p>
		Cookies are small pieces of information that a website can store in a
		visitor’s browser. A browser may send cookie information back to the
		website during later requests.
	</p>

	<p>Cookies can be used for purposes such as:</p>

	<ul>
		<li>Keeping a visitor signed in.</li>
		<li>Remembering interface preferences.</li>
		<li>Maintaining a shopping basket or form session.</li>
		<li>Measuring website usage.</li>
		<li>Personalising content.</li>
		<li>Advertising and behavioural tracking.</li>
	</ul>

	<p>
		Not all cookies have the same purpose or privacy impact. Whether consent
		is required depends on what the technology does and why it is used.
	</p>
</PageSection>

<PageSection title="Similar browser technologies">
	<p>
		Websites can also store information through technologies that are not
		traditional cookies.
	</p>

	<dl class="cookie-definitions">
		<div>
			<dt>Local storage</dt>
			<dd>
				Stores information in the visitor’s browser without automatically
				sending it with every webpage request.
			</dd>
		</div>

		<div>
			<dt>Session storage</dt>
			<dd>
				Stores information temporarily for the current browser tab or
				session.
			</dd>
		</div>

		<div>
			<dt>Tracking pixels</dt>
			<dd>
				Small remote resources that can record when a page, image, or
				email is opened.
			</dd>
		</div>

		<div>
			<dt>Device identifiers</dt>
			<dd>
				Identifiers or combined technical characteristics that may be
				used to recognise a browser or device.
			</dd>
		</div>
	</dl>

	<p>
		D&D Portal currently uses local storage for display preferences. It does
		not intentionally use tracking pixels, browser fingerprinting, or
		cross-site device identifiers.
	</p>
</PageSection>

<PageSection title="Cookies currently used">
	{#if cookies.length > 0}
		<div class="cookie-list">
			{#each cookies as cookie}
				<article class="cookie-card">
					<header>
						<div>
							<p>{cookie.type}</p>
							<h3>{cookie.name}</h3>
						</div>

						<code>{cookie.key}</code>
					</header>

					<dl>
						<div>
							<dt>Provider</dt>
							<dd>{cookie.provider}</dd>
						</div>

						<div>
							<dt>Purpose</dt>
							<dd>{cookie.purpose}</dd>
						</div>

						<div>
							<dt>Stored data</dt>
							<dd>{cookie.data}</dd>
						</div>

						<div>
							<dt>Duration</dt>
							<dd>{cookie.duration}</dd>
						</div>

						<div>
							<dt>Shared</dt>
							<dd>{cookie.shared}</dd>
						</div>

						<div>
							<dt>Consent</dt>
							<dd>{cookie.consent}</dd>
						</div>
					</dl>
				</article>
			{/each}
		</div>
	{:else}
		<div class="cookie-empty">
			<div class="cookie-empty__icon" aria-hidden="true">
				<svg viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="9" />
					<path d="m8.5 8.5 7 7" />
					<path d="m15.5 8.5-7 7" />
				</svg>
			</div>

			<div>
				<h3>No cookies are currently registered</h3>

				<p>
					The D&D Portal Wiki does not currently intentionally place
					HTTP cookies in the visitor’s browser.
				</p>

				<p>
					This section will be updated when the website begins using
					cookies.
				</p>
			</div>
		</div>
	{/if}
</PageSection>

<PageSection title="Local browser storage currently used">
	<div class="cookie-list">
		{#each localStorageEntries as entry}
			<article class="cookie-card">
				<header>
					<div>
						<p>{entry.type}</p>
						<h3>{entry.name}</h3>
					</div>

					<code>{entry.key}</code>
				</header>

				<dl>
					<div>
						<dt>Provider</dt>
						<dd>{entry.provider}</dd>
					</div>

					<div>
						<dt>Purpose</dt>
						<dd>{entry.purpose}</dd>
					</div>

					<div>
						<dt>Stored data</dt>
						<dd>{entry.data}</dd>
					</div>

					<div>
						<dt>Duration</dt>
						<dd>{entry.duration}</dd>
					</div>

					<div>
						<dt>Shared</dt>
						<dd>{entry.shared}</dd>
					</div>

					<div>
						<dt>Consent status</dt>
						<dd>{entry.consent}</dd>
					</div>
				</dl>
			</article>
		{/each}
	</div>
</PageSection>

<PageSection title="Search URLs">
	<p>
		Temporary Wiki search state is stored in the page URL. Search URLs may
		include the search term, selected content-type filters, selected tag
		filters, and the current result page.
	</p>

	<p>
		This makes search results shareable, but URL parameters can appear in
		browser history, copied links, and hosting request logs. Search URL state
		is separate from saved local browser preferences.
	</p>
</PageSection>

<PageSection title="Removing saved preferences">
	<p>
		You can remove saved Wiki preferences directly from this page.
	</p>

	{#each localStorageEntries as entry}
		<div class="cookie-storage-action">
			<div>
				<strong>{entry.name}</strong>
				<code>{entry.key}</code>

				<p>
					Removing this entry resets the saved preference for this browser.
				</p>
			</div>

			<button
				type="button"
				onclick={() => removeLocalStoragePreference(entry.key)}
				disabled={isPreferenceRemoved(entry.key)}
			>
				{isPreferenceRemoved(entry.key)
					? 'Preference removed'
					: 'Remove saved preference'}
			</button>
		</div>
	{/each}

	<p class="cookie-action-result" aria-live="polite">
		{#if removedPreferenceKeys.length}
			The selected preference has been removed from this browser.
		{/if}
	</p>

	<p>
		Browser storage can also be viewed and removed through the privacy or
		website-data settings of your browser.
	</p>
</PageSection>

<PageSection title="Cookie categories">
	<div class="cookie-categories">
		<article>
			<div class="cookie-category-heading">
				<h3>Necessary</h3>
				<span class="cookie-category-status cookie-category-status--unused">
					Not currently used
				</span>
			</div>

			<p>
				Technologies required to provide a requested feature, secure the
				website, maintain a session, or deliver essential functionality.
			</p>
		</article>

		<article>
			<div class="cookie-category-heading">
				<h3>Preferences</h3>
				<span class="cookie-category-status cookie-category-status--local">
					Local storage only
				</span>
			</div>

			<p>
				Technologies that remember interface choices such as language,
				theme, or visual preferences.
			</p>
		</article>

		<article>
			<div class="cookie-category-heading">
				<h3>Analytics</h3>
				<span class="cookie-category-status cookie-category-status--unused">
					Not used
				</span>
			</div>

			<p>
				Technologies that measure visits, page usage, navigation patterns,
				or website performance.
			</p>
		</article>

		<article>
			<div class="cookie-category-heading">
				<h3>Marketing</h3>
				<span class="cookie-category-status cookie-category-status--unused">
					Not used
				</span>
			</div>

			<p>
				Technologies used for advertising, cross-site tracking,
				retargeting, or building visitor profiles.
			</p>
		</article>
	</div>
</PageSection>

<PageSection title="Analytics">
	<p>
		D&D Portal Wiki does not currently use Google Analytics, advertising
		analytics, heatmaps, session recordings, visitor profiling, or comparable
		website-measurement services.
	</p>

	<p>
		The website owner does not currently receive a visitor profile based on
		the pages an individual visitor views.
	</p>

	<p>
		Basic technical information may still be processed by the hosting
		provider when it delivers website files. This is described further in the
		<a href={resolveAppPath('/privacy')}>Privacy Notice</a>.
	</p>
</PageSection>

<PageSection title="Advertising and tracking">
	<p>
		The Wiki does not currently display behavioural advertising and does not
		intentionally use:
	</p>

	<ul>
		<li>Advertising cookies.</li>
		<li>Retargeting pixels.</li>
		<li>Cross-site tracking cookies.</li>
		<li>Affiliate tracking cookies.</li>
		<li>Social-media tracking plug-ins.</li>
		<li>Browser fingerprinting.</li>
		<li>Personalised advertising profiles.</li>
	</ul>

	<p>
		Voluntary donations, where available, do not grant access to additional
		tracking data and are not used to create advertising profiles.
	</p>
</PageSection>

<PageSection title="Third-party websites">
	<p>
		The Wiki contains ordinary links to external websites such as D&D Beyond,
		Wizards of the Coast, GitHub, LinkedIn, and other reference resources.
	</p>

	<p>
		An ordinary external link does not itself give D&D Portal control over
		the destination website. After following a link, the external website may
		use its own cookies and similar technologies.
	</p>

	<p>
		Those websites operate under their own cookie notices, privacy policies,
		and consent systems.
	</p>
</PageSection>

<PageSection title="Embedded third-party content">
	<p>
		The Wiki does not currently intentionally embed third-party advertising,
		social-media feeds, video players, comment widgets, or other content that
		automatically activates optional third-party tracking.
	</p>

	<p>
		When third-party content is introduced in the future, it should not be
		activated before the visitor has made a choice where prior consent is
		required.
	</p>
</PageSection>

<PageSection title="Hosting infrastructure">
	<p>
		The Wiki is hosted through:
	</p>

	<div class="cookie-provider">
		<span>Hosting provider</span>
		<strong>{hostingProviderName}</strong>
	</div>

	<p>
		A hosting provider or content-delivery network may process technical
		request information in order to deliver the website, prevent abuse,
		maintain security, or diagnose errors.
	</p>

	<p>
		Before publishing this notice, the website owner should verify whether
		the selected hosting provider places any cookies or other browser-storage
		entries.
	</p>
</PageSection>

<PageSection title="Future use of optional cookies">
	<p>
		The website may add new functionality in the future. Examples include
		anonymous analytics, account functionality, embedded media, or additional
		interface preferences.
	</p>

	<p>
		When optional cookies or comparable technologies are introduced:
	</p>

	<ul>
		<li>This Cookie Notice will be updated.</li>
		<li>The relevant technology and purpose will be documented.</li>
		<li>The provider and storage duration will be identified.</li>
		<li>Optional technologies will not be activated before consent where required.</li>
		<li>Accepting and refusing will both be clearly available.</li>
		<li>Optional choices will not be preselected.</li>
		<li>Visitors will be able to change or withdraw their choice.</li>
	</ul>
</PageSection>

<PageSection title="Managing cookies through your browser">
	<p>
		Most browsers allow visitors to:
	</p>

	<ul>
		<li>View stored cookies and website data.</li>
		<li>Delete data for one website.</li>
		<li>Delete all stored browser data.</li>
		<li>Block third-party cookies.</li>
		<li>Block all cookies.</li>
		<li>Clear local and session storage.</li>
		<li>Automatically remove website data when the browser closes.</li>
	</ul>

	<p>
		Blocking all browser storage may prevent some website preferences or
		functionality from working as intended.
	</p>
</PageSection>

<PageSection title="Changes to this notice">
	<p>
		This Cookie Notice may be updated when the Wiki begins or stops using a
		cookie, storage entry, embedded service, analytics provider, or other
		related technology.
	</p>

	<p>
		The date at the top of the notice will be updated when material changes
		are made.
	</p>

	<p>
		Last updated:
		<time datetime={lastUpdated}>15 July 2026</time>.
	</p>

	<p>
		Relevant changes may also be recorded in the
		<a href={resolveAppPath('/changelog')}>Wiki changelog</a>.
	</p>
</PageSection>

<PageSection title="Contact">
	<p>
		Questions about cookies, browser storage, or tracking technologies can be
		sent to:
	</p>

	<div class="cookie-contact">
		<span>Email</span>

		<a href={`mailto:${contactEmail}?subject=D%26D%20Portal%20cookie%20question`}>
			{contactEmail}
		</a>
	</div>
</PageSection>

<PageSection title="Related information">
	<ul>
		<li><a href={resolveAppPath('/privacy')}>Privacy Notice</a></li>
		<li><a href={resolveAppPath('/legal')}>Legal Notice</a></li>
		<li><a href={resolveAppPath('/accessibility')}>Accessibility</a></li>
		<li><a href={resolveAppPath('/about')}>About D&D Portal</a></li>
		<li><a href={resolveAppPath('/credits')}>Credits</a></li>
	</ul>
</PageSection>

<style lang="scss">
	@use './CookieNotice.scss';
</style>
