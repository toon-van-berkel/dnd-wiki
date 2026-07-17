// site\src\lib\utils\index.ts
export function cleanPath(path: string): string {
	return path
		.split(/[?#]/)[0]
		.replace(/\/+/g, '/')
		.replace(/^\/+|\/+$/g, '');
}

export function getPathParts(path: string): string[] {
	const cleanedPath = cleanPath(path);

	return cleanedPath ? cleanedPath.split('/') : [];
}