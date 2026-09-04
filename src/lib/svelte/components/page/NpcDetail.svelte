<!--
	Location: src/lib/svelte/components/page/NpcDetail.svelte
	Use: Detailed NPC reference pages.
-->
<script lang="ts">
	import type { PugilistNpc } from '$lib/typescript/data/internals/classes/pugilist';
	import type {
		InlineContent,
		InlineContentNode,
		TraitTableRow
	} from '$lib/typescript/data/_index_';

	import InlineContentRenderer from './InlineContent.svelte';
	import TraitTable from './TraitTable.svelte';

	let {
		npc,
		source = 'Pugilist Clean Edition'
	}: {
		npc: PugilistNpc;
		source?: string;
	} = $props();

	function text(value: string): InlineContentNode {
		return { type: 'text', text: value };
	}

	function trimContent(content: readonly InlineContentNode[]): InlineContent {
		const trimmed = content
			.map((node, index) => {
				if (node.type !== 'text') {
					return node;
				}

				const isFirst = index === 0;
				const isLast = index === content.length - 1;
				const value = `${isFirst ? node.text.trimStart() : node.text}`;
				const trimmedValue = isLast ? value.trimEnd() : value;

				return trimmedValue ? { ...node, text: trimmedValue } : null;
			})
			.filter((node): node is InlineContentNode => node !== null);

		return trimmed;
	}

	function getPlainText(content: InlineContent): string {
		return content
			.map((node) => {
				if (node.type === 'text') {
					return node.text;
				}

				if (node.type === 'link') {
					return node.label ?? node.path;
				}

				return getPlainText(node.children);
			})
			.join('');
	}

	function splitContent(content: InlineContent, separator: string): InlineContent[] {
		const sections: InlineContentNode[][] = [[]];

		for (const node of content) {
			if (node.type !== 'text') {
				sections[sections.length - 1].push(node);
				continue;
			}

			const parts = node.text.split(separator);
			parts.forEach((part, index) => {
				if (index > 0) {
					sections.push([]);
				}

				if (part) {
					sections[sections.length - 1].push(text(part));
				}
			});
		}

		return sections.map(trimContent).filter((section) => section.length > 0);
	}

	function joinContent(parts: readonly InlineContent[], separator: string): InlineContent {
		return parts.flatMap((part, index) => [
			...(index > 0 ? [text(separator)] : []),
			...part
		]);
	}

	function splitAtMarker(
		content: InlineContent,
		marker: string
	): { before: InlineContent; after: InlineContent } | null {
		const before: InlineContentNode[] = [];
		const after: InlineContentNode[] = [];
		let matched = false;

		for (const node of content) {
			if (matched) {
				after.push(node);
				continue;
			}

			if (node.type !== 'text') {
				before.push(node);
				continue;
			}

			const index = node.text.indexOf(marker);
			if (index < 0) {
				before.push(node);
				continue;
			}

			if (index > 0) {
				before.push(text(node.text.slice(0, index)));
			}

			const rest = node.text.slice(index + marker.length);
			if (rest) {
				after.push(text(rest));
			}

			matched = true;
		}

		return matched
			? {
					before: trimContent(before),
					after: trimContent(after)
				}
			: null;
	}

	function removeLeadingText(content: InlineContent, pattern: RegExp): InlineContent {
		let removed = false;

		return trimContent(
			content
				.map((node) => {
					if (removed || node.type !== 'text') {
						return node;
					}

					const next = node.text.replace(pattern, '');
					removed = next !== node.text;

					return next ? { ...node, text: next } : null;
				})
				.filter((node): node is InlineContentNode => node !== null)
		);
	}

	function createStatRow(content: InlineContent): TraitTableRow {
		const plain = getPlainText(content);
		const prefix = [
			{ label: 'Armor Class', pattern: /^Armor Class\s+/i },
			{ label: 'Hit Points', pattern: /^Hit Points\s+/i },
			{ label: 'Speed', pattern: /^Speed\s+/i },
			{ label: 'Passive Perception', pattern: /^passive Perception\s+/i },
			{ label: 'Challenge', pattern: /^Challenge\s+/i }
		].find((item) => item.pattern.test(plain));

		if (prefix) {
			return {
				label: prefix.label,
				value: removeLeadingText(content, prefix.pattern)
			};
		}

		if (/saving throws?/i.test(plain)) {
			return { label: 'Saving Throws', value: content };
		}

		if (/^(Athletics|Insight|Intimidation)/i.test(plain)) {
			return { label: 'Skills', value: content };
		}

		if (/^[A-Za-z, ]+$/.test(plain)) {
			return { label: 'Languages', value: content };
		}

		return { label: 'Other', value: content };
	}

	function getEntryTitle(content: InlineContent): string {
		const plain = getPlainText(content);
		const knownTitle = [
			'Multiattack',
			'Fisticuffs',
			'Brace Up',
			'Wrestling',
			'Cross Counter',
			'Quick Pin',
			'Iron Chin'
		].find((title) => plain.startsWith(title));

		return knownTitle ?? plain.split(/[.:;]/)[0] ?? 'Entry';
	}

	function removeEntryTitle(content: InlineContent, title: string): InlineContent {
		return removeLeadingText(content, new RegExp(`^${title}\\.?\\s*`, 'i'));
	}

	const sentences = $derived(splitContent(npc.description, '. '));
	const summary = $derived(sentences[0] ?? []);
	const statRows = $derived(
		(sentences[1] ? splitContent(sentences[1], '; ') : []).map(createStatRow)
	);
	const ruleText = $derived(joinContent(sentences.slice(2), '. '));
	const actionSplit = $derived(splitAtMarker(ruleText, 'Actions:'));
	const traitText = $derived(actionSplit?.before ?? []);
	const reactionSplit = $derived(
		actionSplit ? splitAtMarker(actionSplit.after, 'Reaction:') : null
	);
	const actions = $derived(
		splitContent(reactionSplit?.before ?? actionSplit?.after ?? [], '; ')
	);
	const reactions = $derived(splitContent(reactionSplit?.after ?? [], '; '));
</script>

<article class="wiki-article npc-detail">
	<header class="npc-detail__header">
		<p class="npc-detail__eyebrow">NPC - CR {npc.challenge}</p>
		<h1>{npc.name}</h1>

		<dl class="npc-detail__meta" aria-label={`${npc.name} summary`}>
			<div>
				<dt>Category</dt>
				<dd>NPC</dd>
			</div>
			<div>
				<dt>Challenge</dt>
				<dd>CR {npc.challenge}</dd>
			</div>
			<div>
				<dt>Source</dt>
				<dd>{source}</dd>
			</div>
		</dl>
	</header>

	<section class="npc-detail__section" aria-labelledby="npc-summary-title">
		<h2 id="npc-summary-title">Creature Summary</h2>
		<p><InlineContentRenderer content={summary} />.</p>
	</section>

	{#if statRows.length}
		<section class="npc-detail__section" aria-labelledby="npc-statistics-title">
			<h2 id="npc-statistics-title">Statistics</h2>
			<TraitTable
				caption={`${npc.name} statistics`}
				columns={{ label: 'Property', value: 'Value' }}
				rows={statRows}
			/>
		</section>
	{/if}

	{#if traitText.length}
		<section class="npc-detail__section" aria-labelledby="npc-traits-title">
			<h2 id="npc-traits-title">Traits</h2>
			<p><InlineContentRenderer content={traitText} />.</p>
		</section>
	{/if}

	{#if actions.length}
		<section class="npc-detail__section" aria-labelledby="npc-actions-title">
			<h2 id="npc-actions-title">Actions</h2>

			<div class="npc-detail__entries">
				{#each actions as action}
					{@const title = getEntryTitle(action)}
					<article class="npc-detail__entry">
						<h3>{title}</h3>
						<p><InlineContentRenderer content={removeEntryTitle(action, title)} />.</p>
					</article>
				{/each}
			</div>
		</section>
	{/if}

	{#if reactions.length}
		<section class="npc-detail__section" aria-labelledby="npc-reactions-title">
			<h2 id="npc-reactions-title">Reactions</h2>

			<div class="npc-detail__entries">
				{#each reactions as reaction}
					{@const title = getEntryTitle(reaction)}
					<article class="npc-detail__entry">
						<h3>{title}</h3>
						<p><InlineContentRenderer content={removeEntryTitle(reaction, title)} />.</p>
					</article>
				{/each}
			</div>
		</section>
	{/if}
</article>
