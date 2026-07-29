<script lang="ts">
	import {
		getData,
		type LinkPath
	} from '$lib/typescript/data/_index_';

	import { base } from '$app/paths';
	import { page } from '$app/state';

	let {
		placeholder,
		showIcon = false,
		goto
	}: {
		placeholder?: string;
		showIcon?: boolean;
		goto: LinkPath;
	} = $props();

	let link = $derived(getData(goto));
	let popup!: HTMLElement;

	function getValidUrl(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		return new URL(`${base}${href}`, page.url.origin).href;
	}

	function positionPopup(event: MouseEvent): void {
		const trigger = event.currentTarget as HTMLElement;

		requestAnimationFrame(() => {
			const triggerRect = trigger.getBoundingClientRect();
			const popupRect = popup.getBoundingClientRect();
			const margin = 12;

			let left = triggerRect.left;

			if (left + popupRect.width > window.innerWidth - margin) {
				left = window.innerWidth - popupRect.width - margin;
			}

			left = Math.max(margin, left);

			let top = triggerRect.bottom;

			if (top + popupRect.height > window.innerHeight - margin) {
				top = triggerRect.top - popupRect.height;
			}

			top = Math.max(margin, top);

			popup.style.left = `${left}px`;
			popup.style.top = `${top}px`;
		});
	}
</script>

<span class="link-container">
	<a
		class="link"
		href={getValidUrl(link.href)}
		target={link.external ? '_blank' : undefined}
		rel={link.external ? 'noopener noreferrer' : undefined}
		onmouseenter={positionPopup}
	>
		{#if showIcon}
			<span
				class="link-img"
				style={`--link-icon: url("${link.img.href}")`}
				aria-hidden="true"
			></span>
		{/if}
		{placeholder ?? link.title}
		{#if link.external} 
			↗
		{/if}
	</a>

	<span bind:this={popup} class="popup">
		<span class="popup__top">
			<img
				class="popup__top-img"
				class:popup__top-img--white={link.img.href.includes('/icons/white/')}
				src={link.img.href}
				alt={link.img.alt}
			>

			<span class="popup__top__header">
				<span class="popup__top__header-title">
					{link.title}
				</span>

				<span class="popup__top__header-subtitle">
					{link.subTitle}
				</span>
			</span>
		</span>

		<span class="popup-description">
			{link.description}
		</span>

		<span class="popup__link-container">
			Full link:

			<a
				class="popup__link"
				href={getValidUrl(link.href)}
				target={link.external ? '_blank' : undefined}
				rel={link.external ? 'noopener noreferrer' : undefined}
			>
				{getValidUrl(link.href)}
			</a>
		</span>
	</span>
</span>