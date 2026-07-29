/*  
    Location: src\lib\typescript\components\footer-type.ts
    use:
*/

export type FooterSectionType = {
    title: string;
    links: string[];
};

export type FooterDataType = {
    informationSection: {
        img: {
            href: string,
            alt: string
        },
        title: string;
        subTitle: string;
        description: string;
        subDescription: string;
        buttons: string[];
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
        reference: string;

        usage: {
            before: string;
            links: string[];
            after: string;
        };
    };
};