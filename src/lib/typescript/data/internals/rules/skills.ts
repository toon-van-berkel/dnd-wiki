import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.rules.skills;

type SkillReference = {
	readonly name: {
		readonly normal: string;
		readonly slug: string;
	};
	readonly logos: {
		readonly simple: {
			readonly href: string;
			readonly alt: string;
		};
	};
};

function createSkillPage(skill: SkillReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${skill.name.slug}`,
		img: skill.logos.simple,
		label: skill.name.normal,
		title: `${website.name.short} - ${skill.name.normal}`,
		subTitle: 'Skill reference',
		description: `${skill.name.normal} is a skill used for ability checks
			in relevant situations.`
	});
}

export const skills = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Skill references',
		description: `Browse skill references used for ability checks and
			character proficiencies.`
	}),

	animalHandling: createSkillPage(current.animalHandling),
	athletics: createSkillPage(current.athletics),
	intimidation: createSkillPage(current.intimidation),
	nature: createSkillPage(current.nature),
	perception: createSkillPage(current.perception),
	survival: createSkillPage(current.survival)
} as const;
