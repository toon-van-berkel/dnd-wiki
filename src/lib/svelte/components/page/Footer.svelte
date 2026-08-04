<!--  
    Location: src\lib\svelte\components\page\Footer.svelte
    use: 
-->
<script lang='ts'>
	import type { FooterDataType } from '$lib/typescript/components/footer/footer-types';

	import Link from '$lib/svelte/components/Link.svelte';

	let data: FooterDataType = $props();

	let sections = $derived([
		data.browseSection,
		data.projectSection,
		data.legalSection,
		data.communitySection,
		data.socialSection,
        data.youtubeSection,
		data.externalSection
	]);
</script>

<footer class='layout__footer'>
    <div class="layout__footer__top-container">
        <section class='layout__footer__top'>
            <article class='layout__footer__top__information'>
                <div class="layout__footer__top__information__head">
                    <img 
                        class="layout__footer__top__information__head-img"
                        src={data.informationSection.img.href}
                        alt={data.informationSection.img.alt}
                    >
                    <div class="layout__footer__top__information__head__text">
                    <p class='layout__footer__top__information__head__text-title'>
                        {data.informationSection.title}</p>
                    <span class='layout__footer__top__information__head__text-subtitle'>
                        {data.informationSection.subTitle}</span>
                    </div>
                </div>
                
                <p class='layout__footer__top__information-description'>
                    {data.informationSection.description}</p>
                <span class='layout__footer__top__information-subdescription'>
                    {data.informationSection.subDescription}</span>

                <nav class="layout__footer__top__information__list">
                    {#each data.informationSection.buttons as button}
                        <Link goto={button} />
                    {/each}
                </nav>
            </article>
            {#each sections as section}
                <div class='layout__footer__top__section'>
                    <p class='layout__footer__top__section-title'>{section.title}</p>

                    <ul class='layout__footer__top__section__list'>                    
                        {#each section.links as link}
                            <li class='layout__footer__top__section__list-link'>
                                <Link goto={link} />
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </section>
    </div>
    <div class='layout__footer__bottom-container'>
        <section class='layout__footer__bottom'>
            <article class='layout__footer__bottom__copyright'>
                <p>{data.bottomSection.copyright}</p>
                <p>{data.bottomSection.subCopyright}</p>
            </article>
            <article class='layout__footer__bottom__disclaimer'>
                <p class='layout__footer__bottom__disclaimer-warning'>
                    {@html data.bottomSection.warning}</p>
                <Link goto={data.bottomSection.reference} />
                <p class='layout__footer__bottom__disclaimer-usage'>
                    {data.bottomSection.usage.before}
                    {#each data.bottomSection.usage.links as link, index}
                        {#if index > 0}, {/if}
                        <Link goto={link} />
                    {/each}
                    {data.bottomSection.usage.after}
                </p>
            </article>
        </section>
    </div>
</footer>
