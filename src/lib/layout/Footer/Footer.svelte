<script lang="ts">
	import { siteConfig, siteOwner } from '$lib/config/site';
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';

	import { getFooterModel } from './Footer-helper';

	const footer = getFooterModel();
	const currentYear = new Date().getFullYear();

	function externalAttributes(isExternal?: boolean) {
		return isExternal
			? {
					target: '_blank',
					rel: 'noopener noreferrer external'
				}
			: {};
	}
</script>

<footer class="site-footer">
	<div class="site-footer__main">
		<div class="site-footer__main-inner">
			<section class="site-footer__brand" aria-labelledby="footer-brand-heading">
				<div class="site-footer__brand-heading">
					<!-- TODO: Replace this D&D text wordmark with fully original site branding before enlarging it. -->
					<img
						class="site-footer__logo"
						src={resolveAssetPath('/dndportal_wiki-74x32.svg')}
						alt={`${siteConfig.projectName} logo`}
						width="74"
						height="32"
					/>
					<div>
						<h2 id="footer-brand-heading">{siteConfig.longProjectName}</h2>
						<p>Campaign rules and reference wiki</p>
					</div>
				</div>

				<p class="site-footer__description">
					An unofficial, fan-created reference website for campaign rules, character
					options, homebrew content, and tabletop resources.
				</p>

				<p class="site-footer__maintainer">
					Designed, developed, and maintained by {siteOwner.name}.
				</p>

				<ul class="site-footer__actions" aria-label={`${siteConfig.projectName} owner links`}>
					{#each footer.actionLinks as link}
						<li>
							<a
								class="site-footer__action"
								href={link.href}
								{...externalAttributes(link.external)}
							>
								{link.label}
								{#if link.external}
									<span class="site-footer__external-indicator" aria-hidden="true">↗</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</section>

			{#each footer.internalGroups as group}
				<nav
					class={`site-footer__group site-footer__group--${group.id}`}
					aria-labelledby={`footer-${group.id}-heading`}
				>
					<h2 id={`footer-${group.id}-heading`}>{group.title}</h2>
					<ul>
						{#each group.links as link}
							<li><a href={resolveAppPath(link.href)}>{link.title}</a></li>
						{/each}
					</ul>
				</nav>
			{/each}

			<nav class="site-footer__group site-footer__group--community" aria-labelledby="footer-community-heading">
				<h2 id="footer-community-heading">Community</h2>
				<ul>
					{#each footer.communityLinks as link}
						<li>
							<a href={link.href} {...externalAttributes(link.external)}>
								{link.label}
								{#if link.external}
									<span class="site-footer__external-indicator" aria-hidden="true">↗</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav
				class="site-footer__group site-footer__group--resources"
				aria-labelledby="footer-resources-heading"
			>
				<h2 id="footer-resources-heading">External Resources</h2>
				<ul>
					{#each footer.externalResourceLinks as link}
						<li>
							<a href={link.href} {...externalAttributes(link.external)}>
								{link.label}
								<span class="site-footer__external-indicator" aria-hidden="true">↗</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>

	<div class="site-footer__legal">
		<div class="site-footer__legal-inner">
			<div class="site-footer__legal-copy">
				<p>
					© {currentYear} {siteOwner.name}. Original website content is protected
					unless otherwise stated.
				</p>
				<p>
					Dungeons & Dragons, D&D, Wizards of the Coast, the dragon ampersand,
					and related properties belong to Wizards of the Coast LLC.
				</p>
			</div>

			<div class="site-footer__legal-notice">
				<p>
					<strong>{siteConfig.projectName} is unofficial fan content.</strong>
					It is not approved, sponsored, or endorsed by Wizards of the Coast.
					Portions of referenced material may be Wizards property, and this site
					remains responsible for complying with applicable policies.
				</p>
				<p>
					<a
						href={siteConfig.fanContentPolicyUrl}
						target="_blank"
						rel="noopener noreferrer external"
					>
						Wizards Fan Content Policy
						<span class="site-footer__external-indicator" aria-hidden="true">↗</span>
					</a>
				</p>
				<p>
					See
					{#each footer.attributionLinks as link, index}
						<a href={resolveAppPath(link.href)}>{link.title}</a>{index < footer.attributionLinks.length - 1 ? ', ' : ''}
					{/each}
					for attribution and usage information.
				</p>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@use './Footer.scss';
</style>
