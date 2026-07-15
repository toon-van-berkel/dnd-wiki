import { asset, base, resolve } from '$app/paths';

const resolvePath = resolve as (path: string) => string;

const untouchedUrlPattern =
	/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

function splitSuffix(path: string) {
	const match = /([?#].*)$/.exec(path);

	if (!match) {
		return { pathname: path, suffix: '' };
	}

	return {
		pathname: path.slice(0, match.index),
		suffix: match[0]
	};
}

function normalizeInput(path?: string | null) {
	const value = path?.trim();

	if (!value) return '';

	return value;
}

function isAlreadyBasePrefixed(pathname: string) {
	return Boolean(base && (pathname === base || pathname.startsWith(`${base}/`)));
}

export function resolveAppPath(path?: string | null) {
	const value = normalizeInput(path);

	if (!value || untouchedUrlPattern.test(value)) {
		return value;
	}

	const { pathname, suffix } = splitSuffix(value);
	const normalizedPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;

	if (isAlreadyBasePrefixed(normalizedPathname)) {
		return `${normalizedPathname}${suffix}`;
	}

	return `${resolvePath(normalizedPathname)}${suffix}`;
}

export function resolveAssetPath(path?: string | null) {
	const value = normalizeInput(path);

	if (!value || untouchedUrlPattern.test(value)) {
		return value;
	}

	const { pathname, suffix } = splitSuffix(value);
	const withoutStaticPrefix = pathname.replace(/^\/?static\//, '');
	const normalizedPathname = withoutStaticPrefix.startsWith('/')
		? withoutStaticPrefix
		: `/${withoutStaticPrefix}`;

	if (isAlreadyBasePrefixed(normalizedPathname)) {
		return `${normalizedPathname}${suffix}`;
	}

	return `${asset(normalizedPathname)}${suffix}`;
}

export function resolveSrcset(srcset?: string | null) {
	const value = normalizeInput(srcset);

	if (!value) {
		return value;
	}

	return value
		.split(',')
		.map((candidate) => {
			const trimmed = candidate.trim();

			if (!trimmed) {
				return trimmed;
			}

			const [url, ...descriptors] = trimmed.split(/\s+/);
			const resolvedUrl = resolveAssetPath(url);

			return [resolvedUrl, ...descriptors].filter(Boolean).join(' ');
		})
		.join(', ');
}
