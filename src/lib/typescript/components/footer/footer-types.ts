/*  
    Location: src/lib/typescript/components/footer/footer-type.ts
    use:
*/

import { getData } from '$lib/typescript/data/_index_';

type DataPath = Parameters<typeof getData>[0];

export type FooterSectionType = {
    title: string;
    links: DataPath[];
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
        buttons: DataPath[];
    };

    browseSection: FooterSectionType;
    projectSection: FooterSectionType;
    legalSection: FooterSectionType;
    communitySection: FooterSectionType;
    externalSection: FooterSectionType;

    bottomSection: {
        copyright: string;
        subCopyright: string;
        warning: string;
        reference: DataPath;

        usage: {
            before: string;
            links: DataPath[];
            after: string;
        };
    };
};