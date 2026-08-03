<script lang="ts">
	import {
		getData,
		type LinkPath
	} from '$lib/typescript/data/_index_';

	import { base } from '$app/paths';
	import { page } from '$app/state';

	export type LinkPopupMode = 'full' | 'description' | 'none';

	let {
		placeholder,
		showIcon = false,
		popup = 'full',
		current = false,
		goto
	}: {
		placeholder?: string;
		showIcon?: boolean;
		popup?: LinkPopupMode;
		current?: boolean;
		goto: LinkPath;
	} = $props();

	let link = $derived(getData(goto));
	let popupVisible = $state(false);
	let hoverTimer: ReturnType<typeof setTimeout> | undefined;
	let trigger = $state<HTMLElement>();
	let popupElement = $state<HTMLElement>();
	let popupId = $derived(`link-popup-${goto.replaceAll('.', '-')}`);

	function getValidUrl(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		return new URL(`${base}${href}`, page.url.origin).href;
	}

	function supportsHover(): boolean {
		return (
			typeof window !== 'undefined' &&
			window.matchMedia('(hover: hover) and (pointer: fine)').matches
		);
	}

	function clearHoverTimer(): void {
		if (hoverTimer) {
			clearTimeout(hoverTimer);
			hoverTimer = undefined;
		}
	}

	function positionPopup(): void {
		const currentTrigger = trigger;
		const currentPopupElement = popupElement;

		if (!currentTrigger || !currentPopupElement) {
			return;
		}

		requestAnimationFrame(() => {
			const triggerRect = currentTrigger.getBoundingClientRect();
			const popupRect = currentPopupElement.getBoundingClientRect();
			const margin = 12;

			let left =
				popup === 'description'
					? triggerRect.right + margin
					: triggerRect.left;

			if (
				popup === 'description' &&
				left + popupRect.width > window.innerWidth - margin
			) {
				left = triggerRect.left - popupRect.width - margin;
			}

			if (left + popupRect.width > window.innerWidth - margin) {
				left = window.innerWidth - popupRect.width - margin;
			}

			left = Math.max(margin, left);

			let top =
				popup === 'description'
					? triggerRect.top + triggerRect.height / 2 - popupRect.height / 2
					: triggerRect.bottom;

			if (top + popupRect.height > window.innerHeight - margin) {
				top = triggerRect.top - popupRect.height;
			}

			top = Math.max(margin, top);

			currentPopupElement.style.left = `${left}px`;
			currentPopupElement.style.top = `${top}px`;
		});
	}

	function openPopup(source: 'focus' | 'hover'): void {
		if (popup === 'none' || (source === 'hover' && !supportsHover())) {
			return;
		}

		clearHoverTimer();
		positionPopup();

		if (popup === 'description' && source === 'hover') {
			hoverTimer = setTimeout(() => {
				popupVisible = true;
				positionPopup();
			}, 275);

			return;
		}

		popupVisible = true;
	}

	function closePopup(): void {
		clearHoverTimer();
		popupVisible = false;
	}

	function handleContainerMouseEnter(): void {
		if (popup === 'full') {
			openPopup('hover');
		}
	}

	function handleContainerMouseLeave(): void {
		if (popup === 'full') {
			closePopup();
		}
	}

	function handleLinkMouseEnter(): void {
		if (popup === 'description') {
			openPopup('hover');
		}
	}

	function handleLinkMouseLeave(): void {
		if (popup === 'description') {
			closePopup();
		}
	}

	function handleFocusIn(): void {
		openPopup('focus');
	}

	function handleFocusOut(event: FocusEvent): void {
		const nextTarget = event.relatedTarget;
		const container = event.currentTarget;

		if (
			popup === 'full' &&
			container instanceof HTMLElement &&
			nextTarget instanceof Node &&
			container.contains(nextTarget)
		) {
			return;
		}

		closePopup();
	}
</script>

<span
	class={`link-container link-container--popup-${popup}`}
	role="presentation"
	onmouseenter={handleContainerMouseEnter}
	onmouseleave={handleContainerMouseLeave}
	onfocusin={handleFocusIn}
	onfocusout={handleFocusOut}
>
	<a
		bind:this={trigger}
		class="link"
		href={getValidUrl(link.href)}
		target={link.external ? '_blank' : undefined}
		rel={link.external ? 'noopener noreferrer' : undefined}
		aria-current={current ? 'page' : undefined}
		aria-describedby={popup === 'description' && popupVisible ? popupId : undefined}
		onmouseenter={handleLinkMouseEnter}
		onmouseleave={handleLinkMouseLeave}
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
			&#8599;
		{/if}
	</a>

	{#if popup === 'full'}
		<span
			bind:this={popupElement}
			class="popup popup--full"
			class:popup--visible={popupVisible}
		>
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
	{:else if popup === 'description'}
		<span
			id={popupId}
			bind:this={popupElement}
			class="popup popup--description"
			class:popup--visible={popupVisible}
			role="tooltip"
		>
			<span class="popup-description">
				{link.description}
			</span>
		</span>
	{/if}
</span>
