<script lang="ts">
	import type { GachaResult } from '$lib/types/gacha-result';
	import { createEventDispatcher } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly, scale } from 'svelte/transition';
	import Chips from './chips.svelte';
	import GachaBtn from './gacha-btn.svelte';

	export let gachaResult: GachaResult[];
	let index = 0;
	let summary = false;

	function next() {
		if (index < gachaResult.length - 1) index += 1;
		else summary = true;
	}

	const event = createEventDispatcher<{ reroll: void; return: void }>();
</script>

{#if gachaResult.length > 0}
	<div class="result">
		{#if !summary}
			<div class="result__res" on:click={next} on:keyup={next} role="button" tabindex="0">
				{#key index}
					<img
						src={gachaResult[index].url}
						alt="gacha result {index + 1}"
						class:r={gachaResult[index].rarity === 'R'}
						class:sr={gachaResult[index].rarity === 'SR'}
						class:ssr={gachaResult[index].rarity === 'SSR'}
						in:scale={{ duration: 500, opacity: 0.5, start: 1.5, easing: quintOut }}
					/>
				{/key}
			</div>
		{:else}
			<div class="result__summary">
				<div class="result__summary__chips"><Chips /></div>
				<div
					class="result__summary__container"
					in:fly={{ duration: 500, x: -300, easing: quintOut }}
				>
					{#each gachaResult as result, i (i)}
						{#key i}
							<img
								src={result.url}
								alt="gacha result {i + 1}"
								class:r={result.rarity === 'R'}
								class:sr={result.rarity === 'SR'}
								class:ssr={result.rarity === 'SSR'}
								in:scale|global={{
									duration: 500,
									opacity: 0,
									start: 1.5,
									delay: i * 100,
									easing: quintOut
								}}
							/>
						{/key}
					{/each}
				</div>
				<div class="result__summary__buttons">
					<GachaBtn on:click={() => event('return')} customText="Return" />
					<GachaBtn on:click={() => event('reroll')} />
				</div>
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.result {
		padding: 5rem var(--content-padding) 2.7rem;
		min-height: 100svh;
		display: grid;
		place-items: center;

		--_glow: red;

		img {
			cursor: pointer;
			box-shadow: 0 0 10px 10px var(--_glow);
			animation: glow 0.5s infinite alternate ease-in-out;

			&.r {
				--_glow: hsl(205, 98%, 41%);
			}

			&.sr {
				--_glow: hsl(262, 87%, 49%);
			}

			&.ssr {
				--_glow: hsl(52, 85%, 49%);
			}
		}

		&__res {
			margin: 4rem 0;
		}

		&__summary {
			display: grid;
			gap: 1.5rem;

			&__chips {
				justify-self: end;
			}

			&__container {
				display: grid;
				place-items: center;
				grid-template-columns: 1fr;
				gap: 2rem;

				@include mq(small) {
					grid-template-columns: repeat(2, 1fr);
				}

				@include mq(medium) {
					grid-template-columns: repeat(5, 1fr);
				}

				img {
					cursor: initial;
				}
			}

			&__buttons {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;

				@include mq(small) {
					justify-content: space-between;
					align-items: end;
				}
			}
		}

		@keyframes glow {
			from {
				box-shadow: 0 0 10px 10px var(--_glow);
			}
			to {
				box-shadow: 0 0 10px 1px var(--_glow);
			}
		}
	}
</style>
