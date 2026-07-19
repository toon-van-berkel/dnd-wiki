const untouchedUrlPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/|[?#])/i;

export function normalizeInput(path?: string | null) {
	const value = path?.trim();

	if (!value) return '';

	return value;
}

export function isExternalUrl(path?: string | null) {
	const value = normalizeInput(path);

	return /^(?:https?:)?\/\//i.test(value);
}

export function shouldPreservePath(path?: string | null) {
	const value = normalizeInput(path);

	return !value || untouchedUrlPattern.test(value);
}

export function splitSuffix(path: string) {
	const match = /([?#].*)$/.exec(path);

	if (!match) {
		return { pathname: path, suffix: '' };
	}

	return {
		pathname: path.slice(0, match.index),
		suffix: match[0]
	};
}

export function normalizePublicBasePath(basePath?: string | null) {
	const value = normalizeInput(basePath);

	if (!value || value === '/' || value === './' || value === '.') {
		return '';
	}

	const normalized = value.replace(/\/+$/, '');

	if (!normalized || normalized === '/' || normalized === '.') {
		return '';
	}

	return normalized.startsWith('/') ? normalized : `/${normalized.replace(/^\/+/, '')}`;
}

export function isAlreadyBasePrefixed(pathname: string, basePath: string) {
	return Boolean(basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`)));
}

export function resolveAssetPathWithBase(path: string | null | undefined, basePath: string) {
	const value = normalizeInput(path);

	if (shouldPreservePath(value)) {
		return value;
	}

	const assetBasePath = normalizePublicBasePath(basePath);
	const { pathname, suffix } = splitSuffix(value);
	const withoutStaticPrefix = pathname.replace(/^\/?static\//, '');
	const normalizedPathname = `/${withoutStaticPrefix.replace(/^\/+/, '').replace(/\/{2,}/g, '/')}`;

	if (isAlreadyBasePrefixed(normalizedPathname, assetBasePath)) {
		return `${normalizedPathname}${suffix}`;
	}

	return `${assetBasePath}${normalizedPathname}${suffix}`;
}

export function resolveSrcsetWithBase(srcset: string | null | undefined, basePath: string) {
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
			const resolvedUrl = resolveAssetPathWithBase(url, basePath);

			return [resolvedUrl, ...descriptors].filter(Boolean).join(' ');
		})
		.join(', ');
}
