import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const nodeProcess = (
	globalThis as typeof globalThis & {
		process?: { env?: Record<string, string | undefined> };
	}
).process;
const basePath = nodeProcess?.env?.BASE_PATH ?? '';

export default defineConfig({
	define: {
		__STATIC_ASSET_BASE_PATH__: JSON.stringify(basePath)
	},
	plugins: [sveltekit()]
});
