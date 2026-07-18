import { getPerson, type PersonId } from './people';

const repositoryUrl = 'https://github.com/toon-van-berkel/dnd-wiki';

export type SiteConfig = {
	projectName: string;
	longProjectName: string;
	codeName: string;
	hostName: string;
	ownerPersonId: PersonId;
	repositoryUrl: string;
	readmeUrl: string;
	issueUrl: string;
	newIssueUrl: string;
	pullRequestUrl: string;
	newPullRequestUrl: string;
	branchUrl: string;
	contactEmail: string;
	locale: string;
	defaultMetadata: {
		description: string;
		type: string;
	};
	defaultSocialImage: string;
};

export const siteConfig = {
	projectName: 'D&D Portal',
	longProjectName: 'D&D Portal Wiki',
	codeName: 'dnd-portal',
	hostName: 'GitHub',
	ownerPersonId: 'toon',
	repositoryUrl,
	readmeUrl: `${repositoryUrl}/blob/main/README.md`,
	issueUrl: `${repositoryUrl}/issues`,
	newIssueUrl: `${repositoryUrl}/issues/new`,
	pullRequestUrl: `${repositoryUrl}/pulls`,
	newPullRequestUrl: `${repositoryUrl}/compare`,
	branchUrl: `${repositoryUrl}/branches`,
	contactEmail: 'toonvanberkel.public@gmail.com',
	locale: 'en_US',
	defaultMetadata: {
		description:
			'A practical campaign wiki for table rulings, character options, and campaign-specific exceptions.',
		type: 'website'
	},
	defaultSocialImage: '/dndportal_wiki-74x32.svg'
} satisfies SiteConfig;

export const siteOwner = getPerson(siteConfig.ownerPersonId);
