import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

function read(path) {
	return readFileSync(path, 'utf8');
}

function countMatches(source, pattern) {
	return [...source.matchAll(pattern)].length;
}

const registry = read('src/lib/page/registry/data/classes.ts');
const spellsRegistry = read('src/lib/page/registry/data/spells-and-abilities.ts');
const navigation = read('src/lib/config/navigation.ts');
const availability = read('src/lib/data/availability.ts');
const sidebar = read('src/lib/layout/Sidebar/Sidebar.svelte');
const classPage = read('src/routes/classes/shinobi/+page.svelte');
const classData = read('src/routes/classes/shinobi/page.data.ts');
const pathsData = read('src/routes/classes/shinobi/paths.data.ts');
const techniquesData = read('src/lib/data/techniques/shinobi.ts');
const techniquesIndex = read('src/routes/spells-and-abilities/techniques/+page.svelte');
const techniqueDetailLoad = read('src/routes/spells-and-abilities/techniques/[slug]/+page.ts');
const techniqueDetailPage = read('src/routes/spells-and-abilities/techniques/[slug]/+page.svelte');
const spellsIndex = read('src/routes/spells-and-abilities/spells/+page.svelte');
const spellsData = read('src/lib/data/spells/spells.ts');
const iconStyles = read('src/lib/components/Icon/Icon.scss');

const oldTechniqueRoute = `/${['classes', 'shinobi', 'techniques'].join('/')}`;
const oldTechniqueRoutePath = `src/routes${oldTechniqueRoute}`;
const oldRedirect = read(`${oldTechniqueRoutePath}/+page.ts`);
const newTechniqueRoute = '/spells-and-abilities/techniques';
const oldTechniqueId = ['classes', 'shinobi', 'techniques'].join('--');
const livingShadowSlugs = [
	'shadow-needle-technique',
	'grasping-shade-technique',
	'shadow-passage-technique',
	'shadow-bind-technique',
	'umbral-decoy-technique',
	'shadow-scout-technique',
	'shadow-possession-technique',
	'eclipse-field-technique',
	'living-shadow-form',
	'dominion-of-living-night'
];
const livingShadowRankDistribution = new Map([
	['I', 3],
	['II', 3],
	['III', 2],
	['IV', 1],
	['V', 1]
]);
const livingShadowConcentrationSlugs = new Set([
	'shadow-bind-technique',
	'shadow-scout-technique',
	'shadow-possession-technique',
	'eclipse-field-technique',
	'living-shadow-form',
	'dominion-of-living-night'
]);
const pathIds = [
	'classes--shinobi--path-of-taijutsu',
	'classes--shinobi--path-of-elemental-ninjutsu',
	'classes--shinobi--path-of-genjutsu',
	'classes--shinobi--path-of-the-bloodline',
	'classes--shinobi--path-of-the-medical-shinobi',
	'classes--shinobi--path-of-sealing',
	'classes--shinobi--path-of-fortune'
];

function techniqueEntry(slug) {
	const slugIndex = techniquesData.indexOf(`slug: '${slug}'`);
	assert.notEqual(slugIndex, -1, `${slug} exists`);
	const start = techniquesData.lastIndexOf('\n\t{', slugIndex);
	const commaEnd = techniquesData.indexOf('\n\t},', slugIndex);
	const finalEnd = techniquesData.indexOf('\n\t}\n];', slugIndex);
	const end =
		commaEnd === -1 ? finalEnd : finalEnd === -1 ? commaEnd : Math.min(commaEnd, finalEnd);

	assert.notEqual(start, -1, `${slug} has an object start`);
	assert.notEqual(end, -1, `${slug} has an object end`);

	return techniquesData.slice(start, end);
}

test('Shinobi routes exist and are registered with metadata', () => {
	assert.ok(registry.includes("id: 'classes--shinobi'"));
	assert.ok(registry.includes("href: '/classes/shinobi'"));
	assert.ok(registry.includes("id: 'classes--shinobi--paths'"));
	assert.ok(registry.includes("href: '/classes/shinobi/paths'"));
	assert.ok(existsSync('src/routes/classes/shinobi/+page.svelte'));
	assert.ok(existsSync('src/routes/classes/shinobi/paths/+page.svelte'));

	for (const id of pathIds) {
		assert.ok(registry.includes(`id: '${id}'`), `${id} is registered`);
	}
});

test('sidebar hierarchy follows the Spells & Abilities navigation contract', () => {
	const browseStart = navigation.indexOf('browseNavigationPageIds');
	const browseEnd = navigation.indexOf('] satisfies PageId[]', browseStart);
	const browse = navigation.slice(browseStart, browseEnd);
	const ids = [...browse.matchAll(/'([^']+)'/g)].map((match) => match[1]);

	assert.deepEqual(ids, ['species', 'classes', 'spells-and-abilities', 'rules', 'monsters', 'locations']);
	assert.ok(spellsRegistry.includes("id: 'spells-and-abilities'"));
	assert.ok(spellsRegistry.includes("id: 'spells-and-abilities--techniques'"));
	assert.ok(spellsRegistry.includes("id: 'spells-and-abilities--spells'"));
	assert.ok(spellsRegistry.includes("parentId: 'spells-and-abilities'"));
	assert.doesNotMatch(registry, new RegExp(`id: '${oldTechniqueId}'`));
	assert.match(sidebar, /child\.navigation !== false/);
	assert.match(sidebar, /getPageAncestors/);
	assert.match(sidebar, /aria-expanded=\{branchOpen\}/);
	assert.match(sidebar, /aria-current=\{isExactActive\(item\.href\) \? 'page' : undefined\}/);
});

test('Shinobi Paths is the navigation parent for all seven path pages', () => {
	assert.ok(registry.includes("id: 'classes--shinobi--paths'"));
	assert.ok(registry.includes("parentId: 'classes--shinobi'"));

	for (const id of pathIds) {
		const start = registry.indexOf(`id: '${id}'`);
		const end = registry.indexOf('\n\t},', start);
		const entry = registry.slice(start, end);
		assert.ok(entry.includes('...shinobiPathParent'), `${id} uses Shinobi Paths parent metadata`);
	}
});

test('old Shinobi Techniques route redirects to the new canonical Techniques page', () => {
	assert.ok(existsSync(`${oldTechniqueRoutePath}/+page.ts`));
	assert.match(oldRedirect, /redirect\(308/);
	assert.ok(oldRedirect.includes(newTechniqueRoute));
	assert.ok(!existsSync(`${oldTechniqueRoutePath}/+page.svelte`));
	assert.ok(!existsSync('src/routes/classes/shinobi/techniques.data.ts'));
	assert.ok(!classPage.includes(oldTechniqueRoute));
});

test('Shinobi search tags and availability are registered through current page ids', () => {
	for (const id of ['classes--shinobi', 'classes--shinobi--paths', ...pathIds]) {
		assert.ok(availability.includes(`'${id}'`), `${id} has availability`);
	}

	assert.ok(availability.includes("'spells-and-abilities--techniques'"));
	assert.match(availability, /getTechniquePageId/);
	assert.doesNotMatch(availability, new RegExp(`'${oldTechniqueId}'`));

	for (const tag of ['Class', 'Shinobi', 'Homebrew', 'Chakra', 'Techniques']) {
		assert.ok(registry.includes(`'${tag}'`), `main Shinobi tag ${tag} is registered`);
	}
});

test('Shinobi breadcrumbs resolve from parent ids', () => {
	assert.ok(registry.includes("parentId: 'classes'"));
	assert.ok(registry.includes("parentId: 'classes--shinobi'"));
	assert.ok(registry.includes("parentId: 'classes--shinobi--paths'"));
	assert.ok(spellsRegistry.includes("parentId: 'spells-and-abilities--techniques'"));
});

test('Shinobi progression contains levels 1 through 20', () => {
	for (let level = 1; level <= 20; level += 1) {
		assert.ok(classData.includes(`level: ${level},`), `progression includes level ${level}`);
	}

	assert.equal(countMatches(classData, /level: \d+,/g), 20);
});

test('every Shinobi Path contains features for levels 3, 6, 10 and 14', () => {
	for (const pathId of [
		'path-of-taijutsu',
		'path-of-elemental-ninjutsu',
		'path-of-genjutsu',
		'path-of-the-bloodline',
		'path-of-the-medical-shinobi',
		'path-of-sealing',
		'path-of-fortune'
	]) {
		const start = pathsData.indexOf(`id: '${pathId}'`);
		const next = pathsData.indexOf("\n\t},\n\t{", start + 1);
		const entry = pathsData.slice(start, next === -1 ? undefined : next);

		for (const level of [3, 6, 10, 14]) {
			assert.ok(entry.includes(`level: ${level},`), `${pathId} has a level ${level} feature`);
		}
	}
});

test('technique data is shared, unique and populated by rank', () => {
	const slugs = [...techniquesData.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
	const ids = [...techniquesData.matchAll(/id: '([^']+)'/g)].map((match) => match[1]);

	assert.equal(ids.length, new Set(ids).size, 'technique ids are unique');
	assert.equal(slugs.length, new Set(slugs).size, 'technique slugs are unique');
	assert.equal(countMatches(techniquesData, /rank: 'I'/g), 17, 'Rank I technique count includes Living Shadow');
	assert.equal(countMatches(techniquesData, /rank: 'II'/g), 13, 'Rank II technique count includes Living Shadow');
	assert.equal(countMatches(techniquesData, /rank: 'III'/g), 2, 'Rank III technique count includes Living Shadow');
	assert.equal(countMatches(techniquesData, /rank: 'IV'/g), 1, 'Rank IV technique count includes Living Shadow');
	assert.equal(countMatches(techniquesData, /rank: 'V'/g), 1, 'Rank V technique count includes Living Shadow');
	assert.equal(countMatches(techniquesData, /category: 'universal'/g), 24);
	assert.ok(techniquesData.includes("name: 'Chakra Barrier'"));
	assert.ok(techniquesData.includes("name: 'Shadow Clone Technique'"));
	assert.ok(techniquesData.includes('You drive disruptive chakra into the target’s body.'));
});

test('Living Shadow heritage techniques are complete and unique', () => {
	const entries = livingShadowSlugs.map((slug) => techniqueEntry(slug));

	assert.equal(entries.length, 10);
	assert.equal(new Set(livingShadowSlugs).size, livingShadowSlugs.length);

	for (const entry of entries) {
		assert.ok(entry.includes("category: 'heritage'"));
		assert.ok(entry.includes("source: 'shinobi'"));
		assert.ok(entry.includes("heritage: 'Living Shadow'"));
		assert.ok(entry.includes("requirements: 'Living Shadow Heritage'"));
	}

	for (const [rank, expected] of livingShadowRankDistribution) {
		assert.equal(
			entries.filter((entry) => entry.includes(`rank: '${rank}'`)).length,
			expected,
			`Living Shadow Rank ${rank} count`
		);
	}
});

test('Living Shadow restrictions, concentration, scaling and augment are preserved', () => {
	for (const slug of livingShadowSlugs) {
		const entry = techniqueEntry(slug);
		assert.equal(
			entry.includes('concentration: true'),
			livingShadowConcentrationSlugs.has(slug),
			`${slug} concentration flag`
		);
	}

	const dominion = techniqueEntry('dominion-of-living-night');
	assert.ok(dominion.includes('restricted: true'));
	assert.ok(dominion.includes("restriction: 'Once per long rest'"));

	const shadowNeedle = techniqueEntry('shadow-needle-technique');
	for (const scaling of [
		'Shinobi level 1: 2d6',
		'Shinobi level 5: 3d6',
		'Shinobi level 11: 4d6',
		'Shinobi level 17: 5d6'
	]) {
		assert.ok(shadowNeedle.includes(scaling), `${scaling} is preserved`);
	}

	const shadowPassage = techniqueEntry('shadow-passage-technique');
	assert.ok(
		shadowPassage.includes(
			'For every additional Chakra Point you expend, the teleportation distance increases by 10 feet, to a maximum increase of 30 feet.'
		)
	);
});

test('techniques index links rows to data-driven detail pages and has mobile cards', () => {
	assert.match(techniquesIndex, /Technique Name/);
	assert.match(techniquesIndex, /getTechniqueHref\(technique\)/);
	assert.match(techniquesIndex, /class="technique-table"/);
	assert.match(techniquesIndex, /class="technique-cards"/);
	for (const label of ['Technique Name', 'Rank', 'Type', 'Source', 'Chakra Cost', 'Activation', 'Range', 'Duration']) {
		assert.ok(techniquesIndex.includes(label), `${label} field is rendered`);
	}
	assert.match(techniquesIndex, /technique\.requirements/);
	assert.match(techniquesIndex, /technique\.heritage/);
});

test('technique filters are data-driven and omit empty ranks', () => {
	assert.match(techniquesIndex, /rankOrder/);
	assert.match(techniquesIndex, /techniques\.some\(\(technique\) => technique\.rank === rank/);
	assert.match(techniquesIndex, /selectedRank === 'all'/);
	assert.match(techniquesIndex, /selectedCategory === 'all'/);
	assert.match(techniquesIndex, /selectedSource === 'all'/);
	assert.match(techniquesIndex, /selectedHeritage === 'all'/);
	assert.match(techniquesIndex, /technique\.heritage === selectedHeritage/);
	assert.doesNotMatch(techniquesIndex, /Rank III.*Rank IV.*Rank V/s);
});

test('technique detail route is statically generated and unknown slugs 404', () => {
	assert.match(techniqueDetailLoad, /entries = \(\) => techniques\.map/);
	assert.match(techniqueDetailLoad, /getTechniqueBySlug\(params\.slug\)/);
	assert.match(techniqueDetailLoad, /error\(404, 'Technique not found'\)/);
	assert.match(techniqueDetailPage, /Technique Rules/);
	assert.match(techniqueDetailPage, /Concentration/);
	assert.match(techniqueDetailPage, /Heritage/);
	assert.match(techniqueDetailPage, /Restricted/);
	assert.match(techniqueDetailPage, /Restriction/);
	assert.match(techniqueDetailPage, /Techniques overview/);
	assert.match(techniqueDetailPage, /Shinobi class/);
	assert.match(techniqueDetailPage, /Path of the Bloodline/);
	assert.match(techniqueDetailPage, /Chakraborn species/);
});

test('Living Shadow techniques are registered for search metadata and generated route pages', () => {
	assert.match(spellsRegistry, /techniques\.map/);
	assert.match(spellsRegistry, /technique\.heritage/);
	assert.match(spellsRegistry, /technique\.restriction/);

	for (const slug of livingShadowSlugs) {
		assert.ok(techniquesData.includes(`slug: '${slug}'`), `${slug} is in shared technique data`);
	}

	assert.match(techniqueDetailLoad, /entries = \(\) => techniques\.map\(\(technique\) => \(\{ slug: technique\.slug \}\)\)/);
	assert.match(availability, /techniques[\s\S]*getTechniquePageId/);
});

test('Path of the Bloodline links to Living Shadow techniques without changing mechanics', () => {
	const bloodline = pathsData.slice(
		pathsData.indexOf("id: 'path-of-the-bloodline'"),
		pathsData.indexOf("id: 'path-of-the-medical-shinobi'")
	);

	assert.ok(bloodline.includes('Bloodline of Fate Chakra Origin'));
	assert.ok(bloodline.includes('Learn two additional Heritage Techniques associated with your Rare Chakra Heritage.'));
	assert.match(read('src/routes/classes/shinobi/PathPage.svelte'), /View Living Shadow Heritage Techniques/);
});

test('spells overview and dynamic route exist without fabricated spell records', () => {
	assert.ok(existsSync('src/routes/spells-and-abilities/spells/+page.svelte'));
	assert.ok(existsSync('src/routes/spells-and-abilities/spells/[slug]/+page.ts'));
	assert.match(spellsIndex, /Spells are magical effects created through specific forms of spellcasting/);
	assert.match(spellsData, /export const spells: SpellRecord\[] = \[\]/);
	assert.doesNotMatch(spellsIndex, /<table/);
});

test('inline icon prose variant is central and navigation icon layout remains separate', () => {
	assert.match(iconStyles, /\.icon--in-text\s*\{[\s\S]*display: inline-flex;/);
	assert.match(iconStyles, /\.icon--in-text\s*\{[\s\S]*vertical-align: -0\.125em;/);
	assert.match(iconStyles, /\.icon--normal\s*\{/);
});

test('visible Shinobi content has no development-status wording', () => {
	const forbidden = /Placeholder|Coming soon|Work in progress|Design direction|Feature concept|To be determined|Subject to revision|For a future revision|This revision|Test version|Playtest version|Draft|Incomplete|Not yet implemented|Mechanics still need to be designed|More options will be added later|Design status|Revision/i;

	for (const [name, source] of [
		['class page', classPage],
		['class data', classData],
		['path data', pathsData],
		['technique data', techniquesData]
	]) {
		assert.doesNotMatch(source, forbidden, `${name} contains forbidden development-status wording`);
	}
});
