# Lib Data

Files in this report: 4.

## `src/lib/data/ai-images.ts`

**Role:**  
TypeScript/JavaScript module exporting AiImageType, AiImageEntry, aiGeneratedImages, aiEditedImages, aiImages.

**Key contents:**  
Exports AiImageType, AiImageEntry, aiGeneratedImages, aiEditedImages, aiImages; AI-image disclosure data by page/image.

**Imports/dependencies:**  
../wiki/registry.js.

**Consumers:**  
src/routes/ai/+page.svelte.

**Data ownership:**  
AI-image disclosure data by page/image.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

**Confidence:**  
high; imports include unresolved targets.

## `src/lib/data/availability.ts`

**Role:**  
TypeScript/JavaScript module exporting PageAvailability, AvailabilityNode, AvailabilityBranch, AvailabilityConfig, AvailabilityStatus, AvailabilityInventoryEntry, availability, normalizeAvailabilityHref, getAvailabilityByHref, getAvailabilityInventory, ....

**Key contents:**  
Exports PageAvailability, AvailabilityNode, AvailabilityBranch, AvailabilityConfig, AvailabilityStatus, AvailabilityInventoryEntry, availability, normalizeAvailabilityHref, getAvailabilityByHref, getAvailabilityInventory, validateAvailabilityConfig; campaign availability rules by href/category.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/AvailabilityBadges.svelte.

**Data ownership:**  
campaign availability rules by href/category.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
all detected logic is commented out.

**Confidence:**  
high.

## `src/lib/data/changelog.ts`

**Role:**  
TypeScript/JavaScript module exporting ChangeType, ChangeLink, ChangeItem, ChangelogRelease, changeTypeLabels, changelog.

**Key contents:**  
Exports ChangeType, ChangeLink, ChangeItem, ChangelogRelease, changeTypeLabels, changelog; changelog releases, entries, categories, stats.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/changelog/+page.svelte.

**Data ownership:**  
changelog releases, entries, categories, stats.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/data/sources.ts`

**Role:**  
TypeScript/JavaScript module exporting SourceKind, SourceStatus, SourceAccess, SourceLink, SourceEntry, sourceKindLabels, sourceStatusLabels, sourceAccessLabels, sources.

**Key contents:**  
Exports SourceKind, SourceStatus, SourceAccess, SourceLink, SourceEntry, sourceKindLabels, sourceStatusLabels, sourceAccessLabels, sources; source register entries, source categories, source filters.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/routes/sources/+page.svelte.

**Data ownership:**  
source register entries, source categories, source filters.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.
