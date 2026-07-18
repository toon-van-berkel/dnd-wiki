import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync('src/lib/utils/paths-core.ts', 'utf8');
const { outputText } = ts.transpileModule(source, {
	compilerOptions: {
		module: ts.ModuleKind.ES2022,
		target: ts.ScriptTarget.ES2022
	}
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
const { resolveAssetPathWithBase, resolveSrcsetWithBase, isExternalUrl } = await import(moduleUrl);

test('static asset paths are base-path safe', () => {
	assert.equal(
		resolveAssetPathWithBase('/icons/game/monster.svg', ''),
		'/icons/game/monster.svg'
	);
	assert.equal(
		resolveAssetPathWithBase('/icons/game/monster.svg', '/dnd-wiki'),
		'/dnd-wiki/icons/game/monster.svg'
	);
	assert.equal(
		resolveAssetPathWithBase('icons/game/monster.svg', '/dnd-wiki'),
		'/dnd-wiki/icons/game/monster.svg'
	);
	assert.equal(
		resolveAssetPathWithBase('/dnd-wiki/icons/game/monster.svg', '/dnd-wiki'),
		'/dnd-wiki/icons/game/monster.svg'
	);
	assert.equal(
		resolveAssetPathWithBase('/icons/game/monster.svg?v=1#mask', '/dnd-wiki'),
		'/dnd-wiki/icons/game/monster.svg?v=1#mask'
	);
	assert.equal(
		resolveAssetPathWithBase('static/icons/game/monster.svg', '/dnd-wiki'),
		'/dnd-wiki/icons/game/monster.svg'
	);
});

test('non-application URLs are preserved by the asset resolver', () => {
	const preserved = [
		'https://example.com/icon.svg',
		'http://example.com/icon.svg',
		'//example.com/icon.svg',
		'data:image/svg+xml,%3Csvg%3E%3C/svg%3E',
		'blob:https://example.com/id',
		'mailto:test@example.com',
		'tel:+123456789',
		'#section'
	];

	for (const url of preserved) {
		assert.equal(resolveAssetPathWithBase(url, '/dnd-wiki'), url);
	}

	assert.equal(isExternalUrl('https://example.com'), true);
	assert.equal(isExternalUrl('//example.com'), true);
	assert.equal(isExternalUrl('/icons/game/monster.svg'), false);
});

test('srcset asset paths are base-path safe', () => {
	assert.equal(
		resolveSrcsetWithBase('/icons/game/monster.svg 1x, icons/game/source-book.svg 2x', '/dnd-wiki'),
		'/dnd-wiki/icons/game/monster.svg 1x, /dnd-wiki/icons/game/source-book.svg 2x'
	);
});
