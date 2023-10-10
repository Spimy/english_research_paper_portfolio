import type { PokerCard } from '$lib/components/poker-card.svelte';

export interface Page {
	title: string;
	url?: string;
	dropdown?: Page[];
	cardSetting?: PokerCard;
}
