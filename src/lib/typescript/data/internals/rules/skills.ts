import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import {
	createGroupContent,
	createSkillContent
} from './_content_';

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
			in relevant situations.`,
		content: createSkillContent(skill)
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
			character proficiencies.`,
		content: createGroupContent(current.name.normal, 'skill')
	}),

	acrobatics: createSkillPage(current.acrobatics),
	animalHandling: createSkillPage(current.animalHandling),
	arcana: createSkillPage(current.arcana),
	athletics: createSkillPage(current.athletics),
	deception: createSkillPage(current.deception),
	history: createSkillPage(current.history),
	insight: createSkillPage(current.insight),
	intimidation: createSkillPage(current.intimidation),
	investigation: createSkillPage(current.investigation),
	medicine: createSkillPage(current.medicine),
	nature: createSkillPage(current.nature),
	perception: createSkillPage(current.perception),
	performance: createSkillPage(current.performance),
	persuasion: createSkillPage(current.persuasion),
	religion: createSkillPage(current.religion),
	sleightOfHand: createSkillPage(current.sleightOfHand),
	stealth: createSkillPage(current.stealth),
	survival: createSkillPage(current.survival)
} as const;
