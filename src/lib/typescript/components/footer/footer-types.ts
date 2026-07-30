/*  
    Location: src/lib/typescript/components/footer/footer-types.ts
    use:
*/

import type { LinkPath } from '$lib/typescript/data/_index_';

export type FooterSectionType = {
    title: string;
    links: LinkPath[];
};

export type FooterDataType = {
    informationSection: {
        img: {
            href: string;
            alt: string;
        };

        title: string;
        subTitle: string;
        description: string;
        subDescription: string;
        buttons: LinkPath[];
    };

    browseSection: FooterSectionType;
    projectSection: FooterSectionType;
    legalSection: FooterSectionType;
    communitySection: FooterSectionType;
    socialSection: FooterSectionType;
    youtubeSection: FooterSectionType;
    externalSection: FooterSectionType;

    bottomSection: {
        copyright: string;
        subCopyright: string;
        warning: string;
        reference: LinkPath;

        usage: {
            before: string;
            links: LinkPath[];
            after: string;
        };
    };
};
