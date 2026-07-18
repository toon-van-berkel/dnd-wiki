<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';

	const contactEmail = 'toonvanberkel.public@gmail.com';
	const githubRepositoryUrl = 'https://github.com/USERNAME/REPOSITORY';
	const githubAccessibilityIssueUrl =
		'https://github.com/USERNAME/REPOSITORY/issues/new';
</script>

<div class="accessibility-summary">
	<div>
		<strong>Readable</strong>
		<span>Clear typography and structured content</span>
	</div>

	<div>
		<strong>Keyboard-friendly</strong>
		<span>Navigation without requiring a mouse</span>
	</div>

	<div>
		<strong>Responsive</strong>
		<span>Designed for desktop, tablet, and mobile</span>
	</div>
</div>

<PageSection title="Accessibility commitment">
	<p>
		D&D Portal aims to make its rules, campaign information, character options,
		and reference material accessible to as many visitors as reasonably possible.
	</p>

	<p>
		The website is designed with readability as a primary concern. Content should
		remain understandable and usable across different devices, screen sizes, input
		methods, and assistive technologies.
	</p>

	<p>
		Accessibility is treated as an ongoing process rather than a one-time task.
		Pages, components, navigation systems, and visual styles may be updated when
		problems are discovered or better solutions become available.
	</p>

	<p>
		Although the website aims to follow recognised accessibility practices, no claim
		is made that every page, feature, or third-party resource is completely free from
		accessibility barriers.
	</p>
</PageSection>

<PageSection title="Accessibility goals">
	<p>
		The main accessibility goals of D&D Portal are:
	</p>

	<ul>
		<li>Present information in a clear and predictable structure.</li>
		<li>Support navigation by keyboard.</li>
		<li>Use readable fonts and comfortable line spacing.</li>
		<li>Maintain sufficient contrast between text and backgrounds.</li>
		<li>Provide visible focus indicators for interactive elements.</li>
		<li>Use meaningful headings and semantic HTML.</li>
		<li>Provide text alternatives for meaningful images.</li>
		<li>Avoid unnecessary animation and visual movement.</li>
		<li>Support visitors who prefer reduced motion.</li>
		<li>Ensure layouts remain usable on smaller screens.</li>
		<li>Avoid relying on colour alone to communicate important information.</li>
		<li>Use clear labels for buttons, links, inputs, and navigation controls.</li>
	</ul>
</PageSection>

<PageSection title="Readable typography">
	<div class="accessibility-feature">
		<div class="accessibility-feature__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<path d="M4 6h16" />
				<path d="M4 10h12" />
				<path d="M4 14h16" />
				<path d="M4 18h10" />
			</svg>
		</div>

		<div>
			<h3>Reading is the main purpose of the Wiki</h3>

			<p>
				The interface prioritises clear text, predictable spacing, and readable
				content over decorative presentation.
			</p>
		</div>
	</div>

	<p>
		D&D Portal uses a font stack that prioritises legibility:
	</p>

	<pre class="accessibility-code"><code>Atkinson Hyperlegible
Source Sans 3
Inter
System interface fonts</code></pre>

	<p>
		The typography is intended to provide:
	</p>

	<ul>
		<li>Clearly distinguishable letters and numbers.</li>
		<li>Readable paragraph widths.</li>
		<li>Comfortable line height.</li>
		<li>Visible heading hierarchy.</li>
		<li>Consistent spacing between sections.</li>
		<li>Reduced visual clutter around long rules text.</li>
	</ul>

	<p>
		Visitors can also use their browser’s built-in zoom functionality to increase
		the size of text and interface elements.
	</p>
</PageSection>

<PageSection title="Keyboard navigation">
	<div class="accessibility-feature">
		<div class="accessibility-feature__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<rect x="3" y="5" width="18" height="14" rx="2" />
				<path d="M7 9h.01" />
				<path d="M11 9h.01" />
				<path d="M15 9h.01" />
				<path d="M7 13h10" />
			</svg>
		</div>

		<div>
			<h3>The website should be usable without a mouse</h3>

			<p>
				Interactive elements are intended to be reachable and operable using a
				keyboard.
			</p>
		</div>
	</div>

	<p>
		Keyboard users should normally be able to:
	</p>

	<ul>
		<li>Move between links and controls using the Tab key.</li>
		<li>Move backwards using Shift and Tab.</li>
		<li>Activate buttons and links using Enter or Space where appropriate.</li>
		<li>Open and close navigation controls.</li>
		<li>Use search fields and filters.</li>
		<li>Identify the currently focused element.</li>
	</ul>

	<p>
		Interactive elements use a visible focus outline based on the website’s accent
		colour.
	</p>

    <pre class="accessibility-code"><code>{`:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 3px;
}`}</code></pre>
</PageSection>

<PageSection title="Sidebar navigation">
	<p>
		The Wiki uses a collapsible sidebar for its main navigation.
	</p>

	<p>
		On larger screens, the sidebar can be collapsed to provide more horizontal
		space for the page content. The collapse button should:
	</p>

	<ul>
		<li>Be reachable by keyboard.</li>
		<li>Have a clear accessible name.</li>
		<li>Indicate whether the sidebar is expanded or collapsed.</li>
		<li>Provide a visible focus state.</li>
		<li>Not trap keyboard focus.</li>
	</ul>

	<p>
		On smaller screens, the navigation may open as an overlay. When the mobile
		navigation is open, it should be possible to close it without using a pointer
		device.
	</p>

	<p>
		The background overlay should not be the only method available for closing the
		navigation.
	</p>
</PageSection>

<PageSection title="Headings and page structure">
	<p>
		Pages are intended to use semantic HTML and a logical heading order.
	</p>

	<p>
		A typical page structure should contain:
	</p>

	<ol>
		<li>One main page heading.</li>
		<li>Second-level headings for major sections.</li>
		<li>Third-level headings for subsections or cards.</li>
		<li>Lists for related items or ordered instructions.</li>
		<li>Tables only when information is genuinely tabular.</li>
	</ol>

	<p>
		Headings should not be selected only because of their visual size. Their level
		should describe the structure and relationship of the content.
	</p>

	<p>
		Page sections should also use descriptive titles so that visitors can quickly
		scan long rules pages or navigate through them using assistive technology.
	</p>
</PageSection>

<PageSection title="Links and buttons">
	<p>
		Links and buttons serve different purposes and should be used accordingly.
	</p>

	<div class="accessibility-comparison">
		<article>
			<p class="accessibility-comparison__label">Links</p>
			<h3>Navigate somewhere</h3>

			<p>
				Links are used to open another page, section, file, or external website.
			</p>
		</article>

		<article>
			<p class="accessibility-comparison__label">Buttons</p>
			<h3>Perform an action</h3>

			<p>
				Buttons are used to open menus, change filters, submit forms, or control
				the interface.
			</p>
		</article>
	</div>

	<p>
		Link text should describe its destination. Generic wording such as “click here”
		should be avoided when a more meaningful label can be provided.
	</p>

	<p>
		External links may include a visual indicator, but their text should remain
		understandable without relying on the indicator alone.
	</p>
</PageSection>

<PageSection title="Colour and contrast">
	<p>
		D&D Portal uses a dark visual theme with light text and a bright green accent.
		The colour system is designed to maintain a clear separation between:
	</p>

	<ul>
		<li>Page backgrounds.</li>
		<li>Raised surfaces.</li>
		<li>Borders.</li>
		<li>Primary text.</li>
		<li>Secondary and muted text.</li>
		<li>Interactive and highlighted elements.</li>
	</ul>

	<p>
		Campaign availability uses different colours for statuses such as allowed,
		limited, approval required, and banned.
	</p>

	<p>
		Colour should not be the only way those statuses are communicated. Each status
		should also have a written label or another meaningful indicator.
	</p>

	<div class="accessibility-statuses" aria-label="Example availability statuses">
		<span class="accessibility-status accessibility-status--allowed">
			Allowed
		</span>

		<span class="accessibility-status accessibility-status--limited">
			Limited
		</span>

		<span class="accessibility-status accessibility-status--approval">
			Approval required
		</span>

		<span class="accessibility-status accessibility-status--banned">
			Banned
		</span>
	</div>
</PageSection>

<PageSection title="Images and alternative text">
	<p>
		Meaningful images should include alternative text that describes their purpose
		or subject.
	</p>

	<p>
		Alternative text should normally:
	</p>

	<ul>
		<li>Describe the important information communicated by the image.</li>
		<li>Remain reasonably concise.</li>
		<li>Avoid repeating nearby visible text unnecessarily.</li>
		<li>Identify the character, class, creature, or location where relevant.</li>
		<li>Avoid phrases such as “image of” unless that wording adds meaning.</li>
	</ul>

	<p>
		Purely decorative images should use an empty alternative text value so that
		screen readers can ignore them.
	</p>

	<pre class="accessibility-code"><code>&lt;img
	src="/classes/illrigger/card-female-l.webp"
	alt="Female Illrigger wearing dark infernal armour"
/&gt;

&lt;img
	src="/decorative-divider.svg"
	alt=""
/&gt;</code></pre>

	<p>
		AI-generated images are also subject to these requirements. Their origin is
		documented separately on the
		<a href={resolveAppPath('/ai')}>AI Transparency page</a>.
	</p>
</PageSection>

<PageSection title="Tables">
	<p>
		Tables are used for structured information such as class progression, level
		features, spell information, equipment values, and rule comparisons.
	</p>

	<p>
		Tables should include:
	</p>

	<ul>
		<li>A clear heading or description.</li>
		<li>Proper table headers.</li>
		<li>Logical row and column relationships.</li>
		<li>Readable spacing.</li>
		<li>Horizontal scrolling on small screens where necessary.</li>
	</ul>

	<p>
		Tables should not be used only to control visual layout.
	</p>

	<p>
		When a table becomes difficult to use on smaller screens, the website may provide
		a scrollable container or a more suitable stacked presentation.
	</p>
</PageSection>

<PageSection title="Forms, search, and filters">
	<p>
		Search fields, filters, and other form controls should have visible or
		programmatically available labels.
	</p>

	<p>
		Placeholder text should not be the only label for an input field because it can
		disappear once the visitor starts typing.
	</p>

	<p>
		Form validation should:
	</p>

	<ul>
		<li>Explain what went wrong.</li>
		<li>Identify the affected field.</li>
		<li>Not rely only on colour.</li>
		<li>Preserve entered information where reasonably possible.</li>
		<li>Allow the visitor to correct the problem.</li>
	</ul>

	<p>
		Search result counts and filter changes should be understandable to visitors
		using assistive technology.
	</p>
</PageSection>

<PageSection title="Animation and reduced motion">
	<p>
		D&D Portal aims to keep animation limited and functional.
	</p>

	<p>
		The website respects the browser or operating system preference for reduced
		motion:
	</p>

	<pre class="accessibility-code"><code>@media (prefers-reduced-motion: reduce) {`
	html {
		scroll-behavior: auto;
	}

	.animated-element {
		transition: none;
		animation: none;
}`}</code></pre>

	<p>
		When reduced motion is enabled:
	</p>

	<ul>
		<li>Smooth scrolling should be disabled.</li>
		<li>Non-essential transitions should be removed.</li>
		<li>Hover movement should be reduced or removed.</li>
		<li>Important information should remain available without animation.</li>
	</ul>
</PageSection>

<PageSection title="Responsive design">
	<p>
		The website is intended to remain usable on desktop computers, laptops, tablets,
		and mobile phones.
	</p>

	<p>
		Responsive behaviour may include:
	</p>

	<ul>
		<li>Changing multi-column layouts into a single column.</li>
		<li>Replacing the permanent sidebar with mobile navigation.</li>
		<li>Allowing tables to scroll horizontally.</li>
		<li>Increasing the available width for long text.</li>
		<li>Preventing buttons and links from becoming too small to operate.</li>
		<li>Keeping important controls within the visible page area.</li>
	</ul>

	<p>
		Visitors should not be required to use a specific device orientation to access
		the main content.
	</p>
</PageSection>

<PageSection title="Screen-reader support">
	<p>
		D&D Portal aims to provide useful information to screen-reader users through:
	</p>

	<ul>
		<li>Semantic HTML elements.</li>
		<li>Descriptive headings.</li>
		<li>Accessible names for controls.</li>
		<li>Alternative text for images.</li>
		<li>Meaningful link labels.</li>
		<li>Correct list and table structures.</li>
		<li>Hidden text for context where visual icons are insufficient.</li>
		<li>Appropriate ARIA attributes where native HTML is not enough.</li>
	</ul>

	<p>
		ARIA should not be used as a replacement for a suitable native HTML element.
		Where possible, native links, buttons, headings, lists, forms, and tables should
		be preferred.
	</p>

	<p>
		Dynamic components should announce meaningful changes where the information
		would otherwise be unavailable to screen-reader users.
	</p>
</PageSection>

<PageSection title="Hidden accessibility text">
	<p>
		The website includes an <code>.sr-only</code> utility for text that should be
		available to assistive technology without being displayed visually.
	</p>

	<pre class="accessibility-code"><code>.sr-only {`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`}</code></pre>

	<p>
		This may be used for:
	</p>

	<ul>
		<li>Additional labels for icon-only buttons.</li>
		<li>Context for external-link indicators.</li>
		<li>Descriptions of collapsed or expanded navigation.</li>
		<li>Status information not fully expressed by an icon.</li>
	</ul>
</PageSection>

<PageSection title="Content clarity">
	<p>
		Accessibility also includes the clarity of the written content.
	</p>

	<p>
		Rule descriptions should aim to:
	</p>

	<ul>
		<li>Use clear and direct language.</li>
		<li>Explain uncommon terms.</li>
		<li>Separate rules from examples.</li>
		<li>Clearly label house rules and homebrew material.</li>
		<li>Identify campaign-specific restrictions.</li>
		<li>Break long information into meaningful sections.</li>
		<li>Use lists where they improve understanding.</li>
		<li>Avoid unnecessarily complicated sentence structures.</li>
	</ul>

	<p>
		Simplifying wording should not change the intended meaning of an official rule.
		Where precision is important, the page should provide a source reference or link
		to the official wording.
	</p>
</PageSection>

<PageSection title="Known limitations">
	<p>
		D&D Portal is an actively developed project. Some parts of the website may still
		have known or undiscovered accessibility limitations.
	</p>

	<p>Possible limitations may include:</p>

	<ul>
		<li>Older pages that do not yet follow the newest component structure.</li>
		<li>Images with incomplete or overly general alternative text.</li>
		<li>Tables that require horizontal scrolling on smaller screens.</li>
		<li>Third-party content that cannot be fully controlled.</li>
		<li>External websites with different accessibility standards.</li>
		<li>Experimental components that have not yet been fully tested.</li>
		<li>Colour combinations that may need further contrast review.</li>
		<li>Dynamic behaviour that may not yet announce every state change.</li>
	</ul>

	<p>
		Known problems will be corrected where reasonably possible and prioritised based
		on their impact.
	</p>
</PageSection>

<PageSection title="Third-party content">
	<p>
		D&D Portal may link to or display content provided by third parties, including
		official Dungeons & Dragons websites, GitHub repositories, icon libraries, and
		other reference services.
	</p>

	<p>
		The accessibility of those external services is controlled by their respective
		owners. D&D Portal cannot guarantee that an external website, document, embedded
		resource, or third-party tool meets the same accessibility goals as this website.
	</p>

	<p>
		When a third-party resource creates a significant accessibility barrier, an
		alternative source or explanation may be added where reasonably possible.
	</p>
</PageSection>

<PageSection title="Reporting an accessibility problem">
	<div class="accessibility-report">
		<div class="accessibility-report__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="9" />
				<path d="M12 8v5" />
				<path d="M12 16h.01" />
			</svg>
		</div>

		<div>
			<h3>Accessibility feedback is welcome</h3>

			<p>
				If part of the website is difficult or impossible to use, please report
				the problem so it can be investigated.
			</p>
		</div>
	</div>

	<p>
		Accessibility problems can be reported by email or through the public GitHub
		repository.
	</p>

	<p>A useful report should include:</p>

	<ul>
		<li>The URL of the affected page.</li>
		<li>A description of the problem.</li>
		<li>What you were trying to do.</li>
		<li>The result you expected.</li>
		<li>The browser and device being used.</li>
		<li>The assistive technology being used, where relevant.</li>
		<li>Screenshots or recordings where they help explain the issue.</li>
		<li>A suggested improvement, where available.</li>
	</ul>

	<div class="accessibility-actions">
		<a href={`mailto:${contactEmail}?subject=D%26D%20Portal%20accessibility%20issue`}>
			Report by email
		</a>

		<a
			href={githubAccessibilityIssueUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			Open a GitHub issue
			<span aria-hidden="true">↗</span>
		</a>

		<a
			href={githubRepositoryUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			View the repository
			<span aria-hidden="true">↗</span>
		</a>
	</div>
</PageSection>

<PageSection title="Alternative access">
	<p>
		If information on the website cannot be accessed because of an accessibility
		problem, contact
		<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
	</p>

	<p>
		Please identify the page or information needed and describe the barrier. Where
		reasonably possible, the information can be provided in another accessible
		format or the page can be corrected.
	</p>

	<p>
		Response times may vary because D&D Portal is independently maintained and is not
		operated by a dedicated support organisation.
	</p>
</PageSection>

<PageSection title="Ongoing improvement">
	<p>
		Accessibility improvements may be introduced through:
	</p>

	<ul>
		<li>Manual keyboard testing.</li>
		<li>Screen-reader testing.</li>
		<li>Automated accessibility checks.</li>
		<li>Colour contrast reviews.</li>
		<li>Responsive-layout testing.</li>
		<li>User feedback.</li>
		<li>Code review.</li>
		<li>Updates to shared components.</li>
	</ul>

	<p>
		Reusable components are preferred so that an accessibility improvement can be
		applied consistently across multiple pages.
	</p>

	<p>
		Changes may be documented through the project repository and website changelog.
	</p>
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
	@use './Accessibility.scss';
</style>
