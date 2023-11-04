<script lang="ts">
	import Chips from '$lib/components/chips.svelte';
	import GachaBtn from '$lib/components/gacha-btn.svelte';
	import GachaResult from '$lib/components/gacha-result.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Scene from '$lib/components/scenes/scene.svelte';
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
	});
</script>

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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas, a temporibus quod
					quaerat sequi? Quis consequatur, mollitia non magni quaerat impedit veritatis facilis
					explicabo doloremque, minus ipsa eius adipisci.
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
		height: 100svh;
		gap: 5rem;

		&.point {
			cursor: pointer;
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
