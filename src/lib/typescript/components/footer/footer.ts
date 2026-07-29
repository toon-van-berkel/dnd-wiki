/*  
    Location: src\lib\typescript\components\footer\footer.ts
    use:
*/

import type { FooterDataType } from './footer-types';
import { date } from '$lib/typescript/helpers/_index_';

export const footerData: FooterDataType = {
    informationSection: {
        img: {
            href: '/icons/color/internal/icon-color-dndportalwiki-wide.png',
            alt: `The D&D Portal Wiki logo representing an internal page within the 
                website.`
        },
        title: 'D&D Portal Wiki',
        subTitle: 'Campaign rules and reference wiki',
        description: `An unofficial, fan-created reference website for campaign rules, 
            character options, homebrew content, and tabletop resources.`,
        subDescription: 'Designed, developed, and maintained by Toon van Berkel.',

        buttons: [
            'github.dndPortalWiki',
            'contact.email',
            'faq.page'
        ]
    },

    browseSection: {
        title: 'Browse',

        links: [
            'browse.search',
            'browse.classes',
            'browse.species',
            'browse.rules',
            'browse.locations',
            'browse.monsters'
        ]
    },

    projectSection: {
        title: 'Project',

        links: [
            'project.about',
            'project.credits',
            'project.sources',
            'project.aitransparency',
            'project.accessibility',
            'project.changelog'
        ]
    },

    legalSection: {
        title: 'Legal',

        links: [
            'legal.notice',
            'legal.privacy',
            'legal.cookies',
            'legal.contributionterms',
            'legal.contentremoval'
        ]
    },

    communitySection: {
        title: 'Community',

        links: [
            'github.dndPortalWiki',
            'github.reportproblem',
            'github.suggestcontent',
            'contact.email'
        ]
    },

    externalSection: {
        title: 'External Resources',

        links: [
            'external.dndbeyond',
            'external.wizardsofthecoast',
            'external.fancontentpolicy',
            'external.srd',
            'external.svgrepo',
            'external.twdndicons'
        ]
    },

    bottomSection: {
        copyright: `©${date.year}-Toon van Berkel. Original website content is 
            protected unless otherwise stated.`,
        subCopyright: `Dungeons & Dragons, D&D, Wizards of the Coast, the dragon 
            ampersand, and related properties belong to Wizards of the Coast LLC.`,
        warning: `<b>D&D Portal is unofficial fan content.</b> It is not approved, 
            sponsored, or endorsed by Wizards of the Coast. Portions of referenced 
            material may be Wizards property, and this site remains responsible for 
            complying with applicable policies.`,

        reference: 'external.fancontentpolicy',

        usage: {
            before: 'See',

            links: [
                'project.credits',
                'project.sources',
                'legal.notice'
            ],

            after: 'for attribution and usage information.'
        }
    }
};