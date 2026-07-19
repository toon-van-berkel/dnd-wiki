import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

declare const process: {
	env?: Record<string, string | undefined>;
};

const basePath = process.env?.BASE_PATH ?? '';

export default defineConfig({
	define: {
		__STATIC_ASSET_BASE_PATH__: JSON.stringify(basePath)
	},
	plugins: [sveltekit()]
});
