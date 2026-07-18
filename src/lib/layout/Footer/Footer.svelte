<script lang="ts">
	import { getFooterPages } from '$lib/page/registry';
	import { siteConfig, siteOwner } from '$lib/config/site';
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';
</script>

<footer class="site-footer">
	<div class="site-footer__brand">
		<img src={resolveAssetPath('/dndportal_wiki-74x32.svg')} alt="" />
		<div>
			<strong>{siteConfig.longProjectName}</strong>
			<span>Maintained by {siteOwner.name}</span>
		</div>
	</div>

	<div class="site-footer__groups">
		{#each Object.entries(getFooterPages()) as [groupId, pages]}
			<nav aria-label={`${groupId} footer links`}>
				<h2>{groupId}</h2>
				<ul>
					{#each pages as footerPage}
						<li><a href={resolveAppPath(footerPage.href)}>{footerPage.title}</a></li>
					{/each}
				</ul>
			</nav>
		{/each}
	</div>
</footer>

<style lang="scss">
	@use './Footer.scss';
</style>
