export const internals = {
	website: {
		name: {
			normal: 'D&D Portal Wiki',
			short: 'D&D Portal',
			slug: 'dnd-portal-wiki'
		},

		logos: {
			simple: {
				href: '/icons/color/internal/icon-color-dndportalwiki.png',
				alt: `The D&D Portal Wiki logo representing an internal page
					within the website.`
			}
		}
	},

	utility: {
		faq: {
			name: {
				normal: 'FAQ',
				slug: 'faq'
			},
			href: '/faq'
		},

		search: {
			name: {
				normal: 'Search',
				slug: 'search'
			},
			href: '/search'
		}
	},

	project: {
		about: {
			name: {
				normal: 'About',
				slug: 'about'
			},
			href: '/about'
		},

		credits: {
			name: {
				normal: 'Credits',
				slug: 'credits'
			},
			href: '/credits'
		},

		sources: {
			name: {
				normal: 'Sources',
				slug: 'sources'
			},
			href: '/sources'
		},

		aiTransparency: {
			name: {
				normal: 'AI Transparency',
				slug: 'ai-transparency'
			},
			href: '/ai'
		},

		accessibility: {
			name: {
				normal: 'Accessibility',
				slug: 'accessibility'
			},
			href: '/accessibility'
		},

		changelog: {
			name: {
				normal: 'Changelog',
				slug: 'changelog'
			},
			href: '/changelog'
		}
	},

	legal: {
		notice: {
			name: {
				normal: 'Legal Notice',
				slug: 'legal'
			},
			href: '/legal'
		},

		privacy: {
			name: {
				normal: 'Privacy Notice',
				slug: 'privacy'
			},
			href: '/privacy'
		},

		cookies: {
			name: {
				normal: 'Cookie Notice',
				slug: 'cookies'
			},
			href: '/cookies'
		},

		contributionTerms: {
			name: {
				normal: 'Contribution Terms',
				slug: 'contribution-terms'
			},
			href: '/contribution-terms'
		},

		contentRemoval: {
			name: {
				normal: 'Content Removal',
				slug: 'content-removal'
			},
			href: '/content-removal'
		}
	},

	classes: {
		name: {
			normal: 'Classes',
			singular: 'Class',
			slug: 'classes'
		},
		baseUrl: '/classes',

		barbarian: {
			name: {
				normal: 'Barbarian',
				slug: 'barbarian'
			},

			subclasses: {
				berserker: {
					name: {
						normal: 'Path of the Berserker',
						short: 'Berserker',
						slug: 'berserker'
					}
				},

				zealot: {
					name: {
						normal: 'Path of the Zealot',
						short: 'Zealot',
						slug: 'zealot'
					}
				}
			}
		},

		artificer: {
			name: {
				normal: 'Artificer',
				slug: 'artificer'
			},

			subclasses: {
				alchemist: {
					name: {
						normal: 'Alchemist',
						short: 'Alchemist',
						slug: 'alchemist'
					}
				},

				artillerist: {
					name: {
						normal: 'Artillerist',
						short: 'Artillerist',
						slug: 'artillerist'
					}
				}
			}
		}
	},

	rules: {
		name: {
			normal: 'Rules',
			singular: 'Rule',
			slug: 'rules'
		},
		baseUrl: '/rules',

		movement: {
			name: {
				normal: 'Movement',
				slug: 'movement'
			}
		}
	},

	species: {
		name: {
			normal: 'Species',
			singular: 'Species',
			slug: 'species'
		},
		baseUrl: '/species'
	},

	monsters: {
		name: {
			normal: 'Monsters',
			singular: 'Monster',
			slug: 'monsters'
		},
		baseUrl: '/monsters'
	},

	locations: {
		name: {
			normal: 'Locations',
			singular: 'Location',
			slug: 'locations'
		},
		baseUrl: '/locations'
	}
} as const;