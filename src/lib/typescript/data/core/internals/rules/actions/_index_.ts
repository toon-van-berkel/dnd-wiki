import { attackAction } from './attack-action';
import { bonusAction } from './bonus-action';

const action = {
	name: {
		normal: 'Action',
		slug: 'action'
	},

	logos: {
		simple: {
			href: '/icons/white/combat/action.svg',
			alt: 'A stylized action icon.'
		}
	}
} as const;

const reaction = {
	name: {
		normal: 'Reaction',
		slug: 'reaction'
	},

	logos: {
		simple: {
			href: '/icons/white/combat/reaction.svg',
			alt: 'A stylized reaction icon.'
		}
	}
} as const;

const dash = {
	name: {
		normal: 'Dash',
		slug: 'dash'
	},

	logos: {
		simple: {
			href: '/icons/white/movement/walking.svg',
			alt: 'A stylized walking icon representing the Dash action.'
		}
	}
} as const;

const disengage = {
	name: {
		normal: 'Disengage',
		slug: 'disengage'
	},

	logos: {
		simple: {
			href: '/icons/white/combat/action.svg',
			alt: 'A stylized action icon representing Disengage.'
		}
	}
} as const;

const dodge = {
	name: {
		normal: 'Dodge',
		slug: 'dodge'
	},

	logos: {
		simple: {
			href: '/icons/white/dice/disadvantage.svg',
			alt: 'A stylized disadvantage icon representing Dodge.'
		}
	}
} as const;

const help = {
	name: {
		normal: 'Help',
		slug: 'help'
	},

	logos: {
		simple: {
			href: '/icons/white/game/party.svg',
			alt: 'A stylized party icon representing Help.'
		}
	}
} as const;

const hide = {
	name: {
		normal: 'Hide',
		slug: 'hide'
	},

	logos: {
		simple: {
			href: '/icons/white/skill/stealth.svg',
			alt: 'A stylized stealth icon representing Hide.'
		}
	}
} as const;

const ready = {
	name: {
		normal: 'Ready',
		slug: 'ready'
	},

	logos: {
		simple: {
			href: '/icons/white/combat/reaction.svg',
			alt: 'A stylized reaction icon representing Ready.'
		}
	}
} as const;

const search = {
	name: {
		normal: 'Search',
		slug: 'search'
	},

	logos: {
		simple: {
			href: '/icons/white/util/search.svg',
			alt: 'A stylized search icon.'
		}
	}
} as const;

const useObject = {
	name: {
		normal: 'Use an Object',
		slug: 'use-an-object'
	},

	logos: {
		simple: {
			href: '/icons/white/entity/object.svg',
			alt: 'A stylized object icon representing Use an Object.'
		}
	}
} as const;

export const actions = {
	name: {
		normal: 'Actions',
		singular: 'Action',
		slug: 'actions'
	},

	logos: {
		simple: {
			href: '/icons/white/combat/action.svg',
			alt: 'A stylized combat action icon.'
		}
	},

	baseUrl: '/rules/actions',

	action,
	attackAction,
	bonusAction,
	reaction,
	dash,
	disengage,
	dodge,
	help,
	hide,
	ready,
	search,
	useObject
} as const;
