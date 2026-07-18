import { getPerson, type PersonId } from './people';

const repositoryUrl = 'https://github.com/toon-van-berkel/dnd-wiki';
const dndBeyondUrl = 'https://www.dndbeyond.com/';
const wizardsUrl = 'https://company.wizards.com/en';
const fanContentPolicyUrl = 'https://company.wizards.com/en/legal/fancontentpolicy';
const srdUrl = 'https://www.dndbeyond.com/srd';
const svgRepoUrl = 'https://www.svgrepo.com/';
const twDndIconsUrl = 'https://github.com/intrinsical/tw-dnd';

export type SiteExternalResource = {
	id: string;
	label: string;
	url: string;
};

export type SiteConfig = {
	projectName: string;
	longProjectName: string;
	codeName: string;
	hostName: string;
	ownerPersonId: PersonId;
	portfolioUrl?: string;
	repositoryUrl: string;
	readmeUrl: string;
	issueUrl: string;
	suggestionUrl: string;
	newIssueUrl: string;
	pullRequestUrl: string;
	newPullRequestUrl: string;
	branchUrl: string;
	linkedInUrl?: string;
	contactEmail: string;
	fanContentPolicyUrl: string;
	externalResources: SiteExternalResource[];
	locale: string;
	defaultMetadata: {
		description: string;
		type: string;
	};
	defaultSocialImage: string;
};

export const siteConfig: SiteConfig = {
	projectName: 'D&D Portal',
	longProjectName: 'D&D Portal Wiki',
	codeName: 'dnd-portal',
	hostName: 'GitHub',
	ownerPersonId: 'toon',
	repositoryUrl,
	readmeUrl: `${repositoryUrl}/blob/main/README.md`,
	issueUrl: `${repositoryUrl}/issues`,
	suggestionUrl: `${repositoryUrl}/issues/new?labels=content`,
	newIssueUrl: `${repositoryUrl}/issues/new`,
	pullRequestUrl: `${repositoryUrl}/pulls`,
	newPullRequestUrl: `${repositoryUrl}/compare`,
	branchUrl: `${repositoryUrl}/branches`,
	contactEmail: 'toonvanberkel.public@gmail.com',
	fanContentPolicyUrl,
	externalResources: [
		{ id: 'dnd-beyond', label: 'D&D Beyond', url: dndBeyondUrl },
		{ id: 'wizards', label: 'Wizards of the Coast', url: wizardsUrl },
		{
			id: 'wizards-fan-content-policy',
			label: 'Wizards Fan Content Policy',
			url: fanContentPolicyUrl
		},
		{ id: 'srd', label: 'System Reference Document', url: srdUrl },
		{ id: 'svg-repo', label: 'SVG Repo', url: svgRepoUrl },
		{ id: 'tw-dnd-icons', label: 'tw-dnd Icons', url: twDndIconsUrl }
	],
	locale: 'en_US',
	defaultMetadata: {
		description:
			'A practical campaign wiki for table rulings, character options, and campaign-specific exceptions.',
		type: 'website'
	},
	defaultSocialImage: '/dndportal_wiki-74x32.svg'
};

export const siteOwner = getPerson(siteConfig.ownerPersonId);
