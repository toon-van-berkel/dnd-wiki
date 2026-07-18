export type { PageId, PageKind, PageRegistryEntry } from './Registry-Types';
export {
	getFooterPages,
	getNavigationPages,
	getPageAncestors,
	getPageChildren,
	getPageEntry,
	getPageEntryByHref,
	getPageParent,
	pageRegistry
} from './Registry-helper';
export { validatePageRegistry } from './Registry-validation';
