# Editing Guide

Use these locations for routine architecture edits:

| Change | Edit |
| --- | --- |
| Rename a person | `src/lib/config/people.ts` |
| Rename a party | `src/lib/config/parties.ts` |
| Change party membership | `src/lib/config/parties.ts` |
| Change a party Dungeon Master | `src/lib/config/parties.ts` |
| Add guest players | `src/lib/config/parties.ts` |
| Add or rename a page | `src/lib/page/registry/data/*.ts` |
| Change page tags | The relevant `src/lib/page/registry/data/*.ts` entry |
| Change availability | `src/lib/data/availability.ts` |
| Change navigation order | `src/lib/config/navigation.ts` |
| Change footer links | `src/lib/config/navigation.ts` |
| Change site identity | `src/lib/config/site.ts` |
| Add reusable route-body UI | `src/lib/pages/<ComponentName>/` |
| Add small generic UI | `src/lib/components/<ComponentName>/` |
| Change shell/header/sidebar/footer behavior | `src/lib/layout/` |
| Change search behavior | `src/lib/search/search.ts` or `src/routes/search/+page.svelte` |
| Change preference storage/UI | `src/lib/preferences/` |

Route `+page.svelte` files should render page body content only. The root layout resolves the current registry entry and renders metadata and `PageHeader`.
