import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

function read(path) {
	return readFileSync(path, 'utf8');
}

const registry = read('src/lib/page/registry/data/classes.ts');
const availability = read('src/lib/data/availability.ts');
const sidebar = read('src/lib/layout/Sidebar/Sidebar.svelte');
const iconStyles = read('src/lib/components/Icon/Icon.scss');
const classPage = read('src/routes/classes/shinobi/+page.svelte');
const classData = read('src/routes/classes/shinobi/page.data.ts');
const pathsData = read('src/routes/classes/shinobi/paths.data.ts');
const techniquesData = read('src/routes/classes/shinobi/techniques.data.ts');
const techniquesComponent = read('src/routes/classes/shinobi/TechniqueReference.svelte');

const shinobiPages = [
	['classes--shinobi', '/classes/shinobi', 'Shinobi'],
	['classes--shinobi--techniques', '/classes/shinobi/techniques', 'Shinobi Techniques'],
	['classes--shinobi--path-of-taijutsu', '/classes/shinobi/path-of-taijutsu', 'Path of Taijutsu'],
	[
		'classes--shinobi--path-of-elemental-ninjutsu',
		'/classes/shinobi/path-of-elemental-ninjutsu',
		'Path of Elemental Ninjutsu'
	],
	['classes--shinobi--path-of-genjutsu', '/classes/shinobi/path-of-genjutsu', 'Path of Genjutsu'],
	[
		'classes--shinobi--path-of-the-bloodline',
		'/classes/shinobi/path-of-the-bloodline',
		'Path of the Bloodline'
	],
	[
		'classes--shinobi--path-of-the-medical-shinobi',
		'/classes/shinobi/path-of-the-medical-shinobi',
		'Path of the Medical Shinobi'
	],
	['classes--shinobi--path-of-sealing', '/classes/shinobi/path-of-sealing', 'Path of Sealing'],
	['classes--shinobi--path-of-fortune', '/classes/shinobi/path-of-fortune', 'Path of Fortune']
];

function countMatches(source, pattern) {
	return [...source.matchAll(pattern)].length;
}

test('Shinobi routes exist and are registered with metadata', () => {
	for (const [id, href, title] of shinobiPages) {
		assert.ok(registry.includes(`id: '${id}'`), `${id} is registered`);
		assert.ok(registry.includes(`href: '${href}'`), `${href} is registered`);
		assert.ok(registry.includes(`title: '${title}'`), `${title} title is registered`);
		assert.ok(registry.includes('description:'), `${id} has registry descriptions`);

		const routePath =
			href === '/classes/shinobi'
				? 'src/routes/classes/shinobi/+page.svelte'
				: `src/routes${href}/+page.svelte`;
		assert.ok(existsSync(routePath), `${href} has a route component`);
	}
});

test('Shinobi navigation is nested under the class page', () => {
	for (const [id] of shinobiPages.slice(1)) {
		const entryStart = registry.indexOf(`id: '${id}'`);
		const entryEnd = registry.indexOf('\n\t},', entryStart);
		const entry = registry.slice(entryStart, entryEnd);
		assert.ok(entry.includes("parentId: 'classes--shinobi'") || entry.includes('...shinobiParent'));
	}

	assert.match(sidebar, /class="sidebar__branch-toggle"/);
	assert.match(sidebar, /aria-expanded=\{branchOpen\}/);
	assert.match(sidebar, /class:sidebar__tree-link--active=\{branchActive\}/);
	assert.match(sidebar, /aria-current=\{isExactActive\(item\.href\) \? 'page' : undefined\}/);
});

test('Shinobi search tags and availability are registered', () => {
	for (const [id] of shinobiPages) {
		assert.ok(availability.includes(`'${id}'`), `${id} has availability`);
	}

	for (const tag of ['Class', 'Shinobi', 'Homebrew', 'Chakra', 'Techniques']) {
		assert.ok(registry.includes(`'${tag}'`), `main Shinobi tag ${tag} is registered`);
	}

	for (const keyword of ['chakra', 'ninja', 'shinobi', 'techniques', 'taijutsu', 'ninjutsu', 'genjutsu', 'bloodline', 'medical', 'healing', 'sealing', 'fortune']) {
		assert.ok(registry.includes(`'${keyword}'`), `keyword ${keyword} is searchable`);
	}
});

test('Shinobi breadcrumbs resolve from parent ids', () => {
	assert.ok(registry.includes("parentId: 'classes--shinobi'"));
	assert.ok(registry.includes("parentId: 'classes'"));
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

test('techniques group by rank and category with stable anchors', () => {
	const ids = [...techniquesData.matchAll(/id: '([^']+)'/g)].map((match) => match[1]);

	assert.ok(ids.length > 0, 'technique data is populated');
	assert.equal(ids.length, new Set(ids).size, 'technique ids are unique');
	assert.ok(techniquesData.includes("rank: 'I'"));
	assert.ok(techniquesData.includes("category: 'Universal'"));
	assert.match(techniquesComponent, /const ranks: readonly TechniqueRank\[\] = \['I', 'II', 'III', 'IV', 'V'\]/);
	assert.match(techniquesComponent, /const categories: readonly TechniqueCategory\[\] = \['Universal', 'Nature', 'Heritage', 'Path'\]/);
});

test('technique sections and mobile rendering follow the interaction contract', () => {
	assert.match(techniquesComponent, /new Set<string>\(\['rank-i'\]\)/);
	assert.match(techniquesComponent, /openFragmentTechnique/);
	assert.match(techniquesComponent, /scrollIntoView/);
	assert.match(techniquesComponent, /tabindex="-1"/);
	assert.match(techniquesComponent, /class="technique-grid technique-grid--desktop"/);
	assert.match(techniquesComponent, /class="technique-grid--mobile"/);
});

test('technique sections render only populated data and default closed after Rank I', () => {
	assert.match(techniquesComponent, /const rankSections = \$derived\(/);
	assert.match(techniquesComponent, /\.filter\(\(section\) => section\.techniques\.length > 0\)/);
	assert.match(techniquesComponent, /title: `Rank \$\{rank\} Techniques`/);
	assert.match(techniquesComponent, /restricted\.length > 0/);
	assert.doesNotMatch(techniquesComponent, /\{#each ranks as rank\}/);
	assert.match(techniquesComponent, /\{#each rankSections as section \(section\.id\)\}/);
	assert.match(techniquesComponent, /\{#if restrictedSection\}/);
	assert.match(techniquesComponent, /aria-expanded=\{isOpen\(section\.id\)\}/);
	assert.match(techniquesComponent, /aria-controls=\{`\$\{section\.id\}-content`\}/);
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
