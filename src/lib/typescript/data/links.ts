import type { LinkData } from './links-type';

export const links: Record<string, Record<string, LinkData>> = {
	github: {
		profile: {
			href: 'https://github.com/toon-van-berkel',
			external: true,

			img: {
				href: '/icons/color/externals/github/icon-color-github.png',
				alt: `A stylized Octocat silhouette representing GitHub, the
					platform used to host and collaborate on software projects.`
			},

			title: 'GitHub - Profile',
			subTitle: 'Toon van Berkel',
			description: `View Toon van Berkel's public repositories, projects,
				contributions, and development activity on GitHub.`
		},

		dndPortalWiki: {
			href: 'https://github.com/toon-van-berkel/dnd-wiki',
			external: true,

			img: {
				href: '/icons/color/externals/github/icon-color-github.png',
				alt: `A stylized Octocat silhouette representing GitHub, the
					platform where the D&D Portal Wiki repository is hosted.`
			},

			title: 'GitHub - D&D Portal Wiki',
			subTitle: 'Project repository',
			description: `View the source code, development history, issues,
				and contributions for the D&D Portal Wiki project on GitHub.`
		},

		reportproblem: {
			href: 'https://github.com/toon-van-berkel/dnd-wiki/issues/new',
			external: true,

			img: {
				href: '/icons/color/externals/github/icon-color-github.png',
				alt: `A stylized Octocat silhouette representing GitHub, where
					problems with the D&D Portal Wiki can be reported.`
			},

			title: 'GitHub - Report a Problem',
			subTitle: 'Create a new issue',
			description: `Report a technical problem, incorrect page, broken
				feature, or other issue with the D&D Portal Wiki.`
		},

		suggestcontent: {
			href: 'https://github.com/toon-van-berkel/dnd-wiki/issues/new?labels=content',
			external: true,

			img: {
				href: '/icons/color/externals/github/icon-color-github.png',
				alt: `A stylized Octocat silhouette representing GitHub, where
					content suggestions for the D&D Portal Wiki can be submitted.`
			},

			title: 'GitHub - Suggest Content',
			subTitle: 'Submit a content suggestion',
			description: `Suggest new pages, corrections, additions, or other
				content improvements for the D&D Portal Wiki.`
		}
	},

	contact: {
		email: {
			href: 'mailto:toonvanberkel.public@gmail.com',
			external: false,

			img: {
                href: '/icons/white/contact/icon-white-email.png',
                alt: `An envelope icon representing email communication and
                    direct contact with Toon van Berkel.`
			},

			title: 'Email - Contact',
			subTitle: 'Toon van Berkel',
			description: `Send an email to Toon van Berkel regarding the D&D
				Portal Wiki, its content, or other related enquiries.`
		}
	},

	faq: {
		page: {
			href: '/faq',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - FAQ',
			subTitle: 'Frequently asked questions',
			description: `Find answers to frequently asked questions about the
				D&D Portal Wiki, its content, features, and development.`
		}
	},

	browse: {
		search: {
			href: '/search',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Search',
			subTitle: 'Search the wiki',
			description: `Search the D&D Portal Wiki for rules, character
				options, creatures, locations, and other available content.`
		},

		classes: {
			href: '/classes',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Classes',
			subTitle: 'Character classes',
			description: `Browse available classes, their core features,
				progression, abilities, and related character options.`
		},

		species: {
			href: '/species',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Species',
			subTitle: 'Playable species',
			description: `Browse playable species, their physical traits,
				cultural information, features, and character options.`
		},

		rules: {
			href: '/rules',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Rules',
			subTitle: 'Gameplay rules',
			description: `Browse general rules, combat mechanics, character
				rules, campaign rulings, and other gameplay information.`
		},

		locations: {
			href: '/locations',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Locations',
			subTitle: 'World locations',
			description: `Explore regions, settlements, landmarks, planes,
				and other important locations within campaign settings.`
		},

		monsters: {
			href: '/monsters',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Monsters',
			subTitle: 'Creatures and enemies',
			description: `Browse monsters, creatures, enemies, statistics,
				abilities, lore, and encounter information.`
		}
	},

	project: {
		about: {
			href: '/about',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - About',
			subTitle: 'About the project',
			description: `Learn about the purpose, scope, development, and
				organisation of the D&D Portal Wiki project.`
		},

		credits: {
			href: '/credits',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Credits',
			subTitle: 'Creators and contributors',
			description: `View acknowledgements for the people, projects,
				artists, tools, and resources used by the D&D Portal Wiki.`
		},

		sources: {
			href: '/sources',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Sources',
			subTitle: 'Referenced material',
			description: `View the books, websites, documents, and other
				resources referenced throughout the D&D Portal Wiki.`
		},

		aitransparency: {
			href: '/ai',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - AI Transparency',
			subTitle: 'Artificial intelligence usage',
			description: `Read how artificial intelligence tools are used,
				reviewed, and disclosed during development of the wiki.`
		},

		accessibility: {
			href: '/accessibility',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Accessibility',
			subTitle: 'Accessible design',
			description: `Read about accessibility features, design decisions,
				current limitations, and planned improvements.`
		},

		changelog: {
			href: '/changelog',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Changelog',
			subTitle: 'Project updates',
			description: `View recent additions, changes, fixes, removals,
				and other updates made to the D&D Portal Wiki.`
		}
	},

	legal: {
		notice: {
			href: '/legal',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Legal Notice',
			subTitle: 'Legal information',
			description: `Read the legal notice, ownership information,
				disclaimers, and terms applying to the D&D Portal Wiki.`
		},

		privacy: {
			href: '/privacy',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Privacy Notice',
			subTitle: 'Privacy information',
			description: `Read how visitor information and personal data are
				handled, stored, protected, and used by the website.`
		},

		cookies: {
			href: '/cookies',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Cookie Notice',
			subTitle: 'Cookie information',
			description: `Read which cookies and similar technologies may be
				used by the D&D Portal Wiki and why they are required.`
		},

		contributionterms: {
			href: '/contribution-terms',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Contribution Terms',
			subTitle: 'Contributor conditions',
			description: `Read the conditions applying to submitted content,
				code, artwork, corrections, and other contributions.`
		},

		contentremoval: {
			href: '/content-removal',
			external: false,

			img: {
                href: '/icons/color/internal/icon-color-dndportalwiki.png',
                alt: `The D&D Portal Wiki logo representing an internal page
                    within the website.`
			},

			title: 'D&D Portal - Content Removal',
			subTitle: 'Removal requests',
			description: `Learn how to request the review, correction, or
				removal of content published on the D&D Portal Wiki.`
		}
	},

	external: {
		dndbeyond: {
			href: 'https://www.dndbeyond.com/',
			external: true,

			img: {
				href: '/icons/color/externals/dnd-beyond/icon-color-dndbeyond.png',
				alt: `The D&D Beyond logo representing the official digital
					toolset and marketplace for Dungeons & Dragons.`
			},

			title: 'D&D Beyond',
			subTitle: 'Official digital toolset',
			description: `Visit D&D Beyond for official digital rules,
				character tools, sourcebooks, adventures, and resources.`
		},

		wizardsofthecoast: {
			href: 'https://company.wizards.com/en',
			external: true,

			img: {
				href: '/icons/color/externals/wizards/icon-color-wizards.png',
				alt: `The Wizards of the Coast logo representing the company
					that publishes Dungeons & Dragons.`
			},

			title: 'Wizards of the Coast',
			subTitle: 'Dungeons & Dragons publisher',
			description: `Visit the official Wizards of the Coast website for
				company information, brands, policies, and publications.`
		},

		fancontentpolicy: {
			href: 'https://company.wizards.com/en/legal/fancontentpolicy',
			external: true,

			img: {
				href: '/icons/color/externals/wizards/icon-color-wizards.png',
				alt: `The Wizards of the Coast logo representing its official
					policy governing unofficial fan-created content.`
			},

			title: 'Wizards - Fan Content Policy',
			subTitle: 'Official fan-content rules',
			description: `Read the Wizards of the Coast policy describing how
				its intellectual property may be used in fan-created content.`
		},

		srd: {
			href: 'https://www.dndbeyond.com/srd',
			external: true,

			img: {
				href: '/icons/color/externals/dnd-beyond/icon-color-dndbeyond.png',
				alt: `The D&D Beyond logo representing the official digital
					toolset and marketplace for Dungeons & Dragons.`
			},

			title: 'D&D - System Reference Document',
			subTitle: 'Official reference rules',
			description: `Read the System Reference Document containing rules
				and material available under its associated licence.`
		},

		svgrepo: {
			href: 'https://www.svgrepo.com/',
			external: true,

			img: {
				href: '/icons/color/externals/svg-repo/icon-color-svg-repo.png',
				alt: `The SVG Repo logo representing a collection of reusable
					vector icons and illustrations.`
			},

			title: 'SVG Repo',
			subTitle: 'Vector icon library',
			description: `Browse reusable SVG icons and illustrations available
				under their individual licensing conditions.`
		},

		twdndicons: {
			href: 'https://github.com/intrinsical/tw-dnd',
			external: true,

			img: {
				href: '/icons/color/externals/github/icon-color-github.png',
				alt: `A stylized Octocat silhouette representing the GitHub
					repository containing the tw-dnd fantasy icon collection.`
			},

			title: 'GitHub - tw-dnd Icons',
			subTitle: 'Fantasy icon collection',
			description: `View the tw-dnd repository containing reusable
				Dungeons & Dragons-inspired icons and related resources.`
		}
	}
};

export function getLink(goto: string): LinkData {
	const [section, linkName] = goto.split('.');
	const link = links[section]?.[linkName];

	if (!link) {
		throw new Error(`Link "${goto}" does not exist.`);
	}

	return link;
}