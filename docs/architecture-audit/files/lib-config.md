# Lib Config

Files in this report: 5.

## `src/lib/config/_index.ts`

**Role:**  
TypeScript/JavaScript module exporting config, dms, parties.

**Key contents:**  
Exports config, dms, parties; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/config/config.ts`

**Role:**  
TypeScript/JavaScript module exporting config.

**Key contents:**  
Exports config; site identity, owner identity, repository URLs, contact URLs.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/layout/snippets/Footer.svelte.

**Data ownership:**  
site identity, owner identity, repository URLs, contact URLs.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/config/dms.ts`

**Role:**  
TypeScript/JavaScript module exporting dms.

**Key contents:**  
Exports dms; Dungeon Master ids, ordering, code names, friendly names.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
Dungeon Master ids, ordering, code names, friendly names.

**Related files:**  
none detected.

**Current status:**  
unused.

**Concerns:**  
none detected.

**Confidence:**  
high.

## `src/lib/config/pages.ts`

**Role:**  
TypeScript/JavaScript module with local logic and no detected named exports.

**Key contents:**  
Exports none detected; no obvious owned data.

**Imports/dependencies:**  
none detected.

**Consumers:**  
no importer found.

**Data ownership:**  
none detected.

**Related files:**  
none detected.

**Current status:**  
unresolved.

**Concerns:**  
empty untracked config module.

**Confidence:**  
high.

## `src/lib/config/parties.ts`

**Role:**  
TypeScript/JavaScript module exporting parties.

**Key contents:**  
Exports parties; party ids, party order, party display names, member strings, party-to-DM ids, party color token names.

**Imports/dependencies:**  
none detected.

**Consumers:**  
src/lib/components/layout/snippets/Sidebar.svelte, src/lib/helpers/parties-helper.ts, src/routes/page.data.ts.

**Data ownership:**  
party ids, party order, party display names, member strings, party-to-DM ids, party color token names.

**Related files:**  
none detected.

**Current status:**  
active.

**Concerns:**  
none detected.

**Confidence:**  
high.
