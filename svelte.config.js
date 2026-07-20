import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const rawBasePath = process.env.BASE_PATH ?? '';
const basePath = rawBasePath === '/' ? '' : rawBasePath.replace(/\/+$/, '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			strict: true
		}),
		paths: {
			base: basePath,
			relative: true
		},
		prerender: {
			handleUnseenRoutes: ({ routes }) => {
				const allowedUnseenRoutes = new Set(['/spells-and-abilities/spells/[slug]']);
				const unexpectedRoutes = routes.filter((route) => !allowedUnseenRoutes.has(route));

				if (unexpectedRoutes.length > 0) {
					throw new Error(
						`Unexpected prerenderable routes were not rendered: ${unexpectedRoutes.join(', ')}`
					);
				}
			}
		}
	}
};

export default config;
