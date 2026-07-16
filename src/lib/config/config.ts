// C:\Users\toonv\Development\dnd-wiki\site\src\lib\config\config.ts
const githubUrlBase = 'https://github.com/toon-van-berkel/dnd-wiki';

export const config = {
    website: {
        domainNname: {
            code: 'dnd-portal',
            host: 'GitHub',
            friendly: {
                short: 'D&D Portal',
                long: 'D&D Portal Wiki'
            }
        },
        owner: { 
            name: {
                code: 'toon-van-berkel',
                friendly: 'Toon van Berkel'
            },
            portfolio: 'https://toonvb.com',
            github: 'https://github.com/toon-van-berkel',
            linkedin: 'https://www.linkedin.com/in/toon-van-berkel-a9112628b',
            email: 'toonvanberkel.public@gmail.com'
        },
        github: {
            main: githubUrlBase,
            readme: `${githubUrlBase}/blob/main/README.md`,
            issues: {
                main: `${githubUrlBase}/issues`,
                new: `${githubUrlBase}/issues/new`
            },
            pulls: {
                main: `${githubUrlBase}/pulls`,
                new: `${githubUrlBase}/compare`
            },
            branches: {
                main: `${githubUrlBase}/branches`
            }
        }
    }
}