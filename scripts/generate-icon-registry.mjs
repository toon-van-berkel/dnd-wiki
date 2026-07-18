import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const iconRoot = path.join(repoRoot, 'static', 'icons');
const outputFile = path.join(repoRoot, 'src', 'lib', 'components', 'Icon', 'Icon-data.ts');
const validSegmentPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function listIconFiles(directory = iconRoot) {
	const entries = await fs.readdir(directory, { withFileTypes: true });
	const files = [];

	for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
		const fullPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			files.push(...(await listIconFiles(fullPath)));
			continue;
		}

		if (entry.isFile()) {
			files.push(fullPath);
		}
	}

	return files;
}

export async function buildIconRegistrySource() {
	const files = await listIconFiles();
	const registry = new Map();
	const errors = [];

	for (const file of files) {
		const relative = path.relative(iconRoot, file).replace(/\\/g, '/');
		const segments = relative.split('/');
		const filename = segments.at(-1);
		const categorySegments = segments.slice(0, -1);

		if (!filename?.endsWith('.svg')) {
			errors.push(`Unsupported icon file extension: ${relative}`);
			continue;
		}

		if (categorySegments.length !== 1) {
			errors.push(`Icon files must live directly inside one category folder: ${relative}`);
			continue;
		}

		const category = categorySegments[0];
		const name = filename.slice(0, -'.svg'.length);

		if (!validSegmentPattern.test(category)) {
			errors.push(`Unsupported icon category: ${category}`);
		}

		if (!validSegmentPattern.test(name)) {
			errors.push(`Unsupported icon filename: ${relative}`);
		}

		const key = `${category}/${name}`;
		if (registry.has(key)) {
			errors.push(`Duplicate icon entry: ${key}`);
			continue;
		}

		registry.set(key, { category, name, publicPath: `/icons/${category}/${filename}` });
	}

	if (errors.length > 0) {
		throw new Error(errors.join('\n'));
	}

	const grouped = new Map();
	for (const icon of [...registry.values()].sort((a, b) => {
		const categoryCompare = a.category.localeCompare(b.category);
		return categoryCompare || a.name.localeCompare(b.name);
	})) {
		if (!grouped.has(icon.category)) {
			grouped.set(icon.category, []);
		}
		grouped.get(icon.category).push(icon);
	}

	const lines = [
		'// Generated file. Do not edit manually.',
		"// Run `npm run generate:icons` after changing files in static/icons.",
		'',
		'export const iconsList = {'
	];

	for (const [category, icons] of grouped) {
		lines.push(`\t'${category}': {`);
		for (const icon of icons) {
			lines.push(`\t\t'${icon.name}': '${icon.publicPath}',`);
		}
		lines.push('\t},');
	}

	lines.push('} as const;');

	return `${lines.join('\n')}\n`;
}

async function writeIfChanged(file, content) {
	let current = null;
	try {
		current = await fs.readFile(file, 'utf8');
	} catch {
		// Generated output may not exist yet.
	}

	if (current === content) {
		return false;
	}

	await fs.writeFile(file, content);
	return true;
}

export async function runIconRegistryGenerator({ check = false } = {}) {
	const content = await buildIconRegistrySource();

	if (check) {
		const current = await fs.readFile(outputFile, 'utf8');
		if (current !== content) {
			throw new Error(
				`${path.relative(repoRoot, outputFile)} is stale. Run npm run generate:icons.`
			);
		}
		return { changed: false, outputFile };
	}

	const changed = await writeIfChanged(outputFile, content);
	return { changed, outputFile };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	const check = process.argv.includes('--check');
	runIconRegistryGenerator({ check })
		.then(({ changed }) => {
			if (!check) {
				console.log(changed ? 'Generated icon registry.' : 'Icon registry already current.');
			}
		})
		.catch((error) => {
			console.error(error.message);
			process.exitCode = 1;
		});
}
