<script lang="ts">
	import WikiImage from '$lib/components/WikiImage.svelte';
	import { resolveAppPath } from '$lib/utils/paths';

	const currentYear = new Date().getFullYear();

	const browseLinks = [
		{ label: 'Classes', href: '/classes' },
		{ label: 'Species', href: '/species' },
		{ label: 'Rules', href: '/rules' },
		{ label: 'Locations', href: '/locations' },
		{ label: 'Monsters', href: '/monsters' }
	];

	const projectLinks = [
		{ label: 'About D&D Portal', href: '/about' },
		{ label: 'Credits', href: '/credits' },
		{ label: 'Sources', href: '/sources' },
		{ label: 'AI Transparency', href: '/ai' },
		{ label: 'Accessibility', href: '/accessibility' },
		{ label: 'Changelog', href: '/changelog' }
	];

	const legalLinks = [
		{ label: 'Legal Notice', href: '/legal' },
		{ label: 'Privacy Notice', href: '/privacy' },
		{ label: 'Cookie Notice', href: '/cookies' },
		{ label: 'Contribution Terms', href: '/contribution-terms' },
		{ label: 'Content Removal', href: '/content-removal' }
	];

	const communityLinks = [
		{
			label: 'GitHub Repository',
			href: 'https://github.com/toon-van-berkel/dnd-wiki',
			external: true
		},
		{
			label: 'Report a Problem',
			href: 'https://github.com/toon-van-berkel/dnd-wiki/issues/new',
			external: true
		},
		{
			label: 'Suggest Content',
			href: 'https://github.com/toon-van-berkel/dnd-wiki/issues/new',
			external: true
		},
		{
			label: 'Contact by Email',
			href: 'mailto:toonvanberkel.public@gmail.com'
		}
	];

	const externalLinks = [
		{
			label: 'D&D Beyond',
			href: 'https://www.dndbeyond.com/',
			external: true
		},
		{
			label: 'Wizards of the Coast',
			href: 'https://company.wizards.com/',
			external: true
		},
		{
			label: 'Fan Content Policy',
			href: 'https://company.wizards.com/en/legal/fancontentpolicy',
			external: true
		},
		{
			label: 'SVG Repo',
			href: 'https://www.svgrepo.com/',
			external: true
		},
		{
			label: 'tw-dnd Icons',
			href: 'https://github.com/intrinsical/tw-dnd',
			external: true
		}
	];
</script>

<footer class="site-footer">
	<div class="site-footer__inner">
		<section
			class="site-footer__introduction"
			aria-labelledby="site-footer-title"
		>
			<a class="site-footer__brand" href={resolveAppPath('/')}>
				<span class="site-footer__brand-mark" aria-hidden="true">
					<WikiImage src="/dndportal_wiki-74x32.svg" alt="dungeons and dragons portal, with in the letter o an portal." />
				</span>

				<span class="site-footer__brand-text">
					<strong id="site-footer-title">D&D Portal</strong>
					<span>Campaign rules and reference wiki</span>
				</span>
			</a>

			<p>
				An unofficial fan-created reference website for campaign rules,
				character options, homebrew content, and tabletop resources.
			</p>

			<p>
				Designed, developed, and maintained by
				<a
					href="https://www.linkedin.com/in/toon-van-berkel-a9112628b"
					target="_blank"
					rel="noopener noreferrer"
				>
					Toon van Berkel
				</a>.
			</p>

			<div class="site-footer__creator-links">
				<a
					href="https://www.toonvb.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Portfolio
				</a>

				<a
					href="https://github.com/toon-van-berkel"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>

				<a
					href="https://www.linkedin.com/in/toon-van-berkel-a9112628b"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>

				<a href="mailto:toonvanberkel.public@gmail.com">
					Email
				</a>
			</div>
		</section>

		<div class="site-footer__navigation">
			<nav
				class="site-footer__column"
				aria-labelledby="site-footer-browse"
			>
				<h2 id="site-footer-browse">Browse</h2>

				<ul>
					{#each browseLinks as link}
						<li>
							<a href={resolveAppPath(link.href)}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav
				class="site-footer__column"
				aria-labelledby="site-footer-project"
			>
				<h2 id="site-footer-project">Project</h2>

				<ul>
					{#each projectLinks as link}
						<li>
							<a href={resolveAppPath(link.href)}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav
				class="site-footer__column"
				aria-labelledby="site-footer-legal"
			>
				<h2 id="site-footer-legal">Legal</h2>

				<ul>
					{#each legalLinks as link}
						<li>
							<a href={resolveAppPath(link.href)}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav
				class="site-footer__column"
				aria-labelledby="site-footer-community"
			>
				<h2 id="site-footer-community">Community</h2>

				<ul>
					{#each communityLinks as link}
						<li>
							<a
								href={resolveAppPath(link.href)}
								target={link.external ? '_blank' : undefined}
								rel={link.external
									? 'noopener noreferrer'
									: undefined}
							>
								{link.label}

								{#if link.external}
									<span
										class="site-footer__external-icon"
										aria-hidden="true"
									>
										↗
									</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav
				class="site-footer__column"
				aria-labelledby="site-footer-resources"
			>
				<h2 id="site-footer-resources">External resources</h2>

				<ul>
					{#each externalLinks as link}
						<li>
							<a
								href={resolveAppPath(link.href)}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}

								<span
									class="site-footer__external-icon"
									aria-hidden="true"
								>
									↗
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>

	<div class="site-footer__legal">
		<div class="site-footer__legal-inner">
			<p>
				© {currentYear}
				<a
					href="https://www.linkedin.com/in/toon-van-berkel-a9112628b"
					target="_blank"
					rel="noopener noreferrer"
				>
					Toon van Berkel
				</a>.
				Original website content is protected unless otherwise stated.
			</p>

			<p>
				D&D Portal is unofficial fan content and is not affiliated with,
				sponsored by, endorsed by, or specifically approved by Wizards of
				the Coast.
			</p>

			<p>
				Dungeons & Dragons, D&D, Wizards of the Coast, the dragon
				ampersand, and related properties belong to Wizards of the Coast
				LLC.
			</p>

			<p>
				See the <a href={resolveAppPath('/credits')}>credits</a>,
				<a href={resolveAppPath('/sources')}>sources</a>, and
				<a href={resolveAppPath('/legal')}>legal notice</a> for attribution and usage
				information.
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	@use './Footer.scss';
</style>
