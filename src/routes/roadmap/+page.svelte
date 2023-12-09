<script lang="ts">
	import Chips from '$lib/components/chips.svelte';
	import GachaBtn from '$lib/components/gacha-btn.svelte';
	import GachaResult from '$lib/components/gacha-result.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Scene from '$lib/components/scenes/scene.svelte';
	import { gachaResult } from '$lib/gacha-result.js';
	import { Canvas } from '@threlte/core';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;

	let showGacha = false;
	let showResult = false;
	let showBanner = false;
	let closedModal = true;
	let audio: HTMLAudioElement;

	onMount(() => {
		audio.play();
		showBanner = true;

		// Preload roadmap cards
		gachaResult.forEach(async (card) => await fetch(card.url));
	});

	const title = 'ENG1044 Portfolio - Roadmap';
	const description =
		'View our journey of the reseach paper using a gacha-like interactive mechanic.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="http://eng1044.spimy.dev" />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

{#if !showResult}
	<section class="roadmap" class:point={showGacha} out:fade={{ duration: 300, delay: 600 }}>
		<audio src="/sfx/WishMenu.mp3" bind:this={audio} />
		{#if showGacha}
			<Canvas>
				<Scene on:animationEnd={() => ((showResult = true), (showGacha = false))} />
			</Canvas>
		{:else}
			{#key audio}
				<div
					class="roadmap__banner"
					class:show={showBanner}
					in:fly={{ x: -200, duration: 400, delay: 400 }}
					out:fly={{ x: 200, duration: 400 }}
					on:animationstart={() => (showBanner = true)}
				>
					<div class="roadmap__banner__chips">
						<Chips />
					</div>
					<img src="/roadmap/Banner.png" alt="roadmap banner" />
					<div class="roadmap__banner__buttons">
						<GachaBtn on:click={() => (closedModal = false)} customText="Details" />
						<GachaBtn on:click={() => (showGacha = true)} />
					</div>
				</div>

				<Modal closed={closedModal} on:closed={() => (closedModal = true)}>
					<div>
						<h1>Gacha Details</h1>
						<p>
							Standard Gacha "Roadmap" is a standard gacha with no time limit. Non-event exclusive
							cards are available.
							<br />
							In this gacha, guaranteed to win 2-star or above at least once per 10 attempts.
							<br />
							<br />
							* In most cases, the base probability of all cards is evenly distributed. If there is a
							boost or guarantee in effect, please refer to the corresponding rules.
							<br />
							* Royalty Free 3D Chest model by
							<a
								href="https://www.turbosquid.com/3d-models/stylized-chest-animations-3d-model-1597758"
								target="_blank"
								>solvkart on TurboSquid.
							</a>
							<br />
							* Click on "Gacha x10" to view the roadmap.
						</p>
					</div>
					<br />
					<div>
						<h2>= Rules =</h2>
						<p>
							Base probability of winning 3-star item = 100%; guaranteed to win 5-star item at least
							once per 10 attempts.
							<br />
							Base probability of winning 2-star item = 100%; guaranteed to win 4-star item at least
							once per 10 attempts.
						</p>
					</div>
				</Modal>
			{/key}
		{/if}
	</section>
{:else}
	<section class="gacha-result" in:fade={{ duration: 300, delay: 750 }}>
		<GachaResult
			on:reroll={() => ((showResult = false), (showGacha = true))}
			on:return={() => ((showResult = false), (showBanner = true))}
			gachaResult={data.gachaResult}
		/>
	</section>
{/if}

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.roadmap {
		padding: 5rem var(--content-padding) 1rem;
		display: grid;
		min-height: 100vh;
		min-height: 100dvh;
		gap: 5rem;

		&.point {
			cursor: pointer;
		}

		a {
			color: var(--clr-accent-100);
		}

		&__banner {
			display: grid;
			opacity: 0;
			transition: opacity 0.5s ease-in-out;

			> * + * {
				margin-block-start: 1rem;
			}

			&.show {
				opacity: 1;
			}

			&__chips {
				place-self: end;
			}

			img {
				place-self: center;
				height: auto;
				width: 85%;
			}

			&__buttons {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
				height: fit-content;

				@include mq(small) {
					justify-content: space-between;
					align-items: end;
				}
			}
		}
	}

	.gacha-result {
		background: linear-gradient(var(--clr-background-100), var(--clr-background-200));
		display: grid;
		place-items: center;
	}
</style>
