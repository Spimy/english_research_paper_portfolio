<script lang="ts">
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
						<img src="/roadmap/chip.png" alt="chip" class="chip" />
						0
					</div>
					<img src="/roadmap/Banner.png" alt="roadmap banner" />
					<div class="roadmap__banner__buttons">
						<button on:click={() => (closedModal = false)}>Details</button>
						<button on:click={() => (showGacha = true)}>
							Gacha 10x
							<span>
								<img src="/roadmap/chip.png" alt="chip" class="chip" />
								x 0 <strike>1600</strike>
							</span>
						</button>
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
		<GachaResult gachaResult={data.gachaResult} />
	</section>
{/if}

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.roadmap {
		padding: 1rem var(--content-padding);
		height: 100svh;
		display: grid;
		place-items: center;
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

			.chip {
				aspect-ratio: 1;
				width: 1rem;
				display: inline-block;
			}

			&__chips {
				background-color: var(--clr-accent-100);
				padding: 0.2rem 0.5rem;
				border-radius: 1rem;
				width: 5rem;
				justify-self: end;
			}

			&__buttons {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;

				@include mq(small) {
					justify-content: space-between;
					align-items: end;
				}

				button {
					border: 0;
					border-radius: 0.5rem;
					padding: 0.5rem 4rem;
					color: var(--clr-text-100);
					background-color: var(--clr-cta-100);
					font-family: 'Poppins', sans-serif;
					font-weight: bold;
					flex-grow: 1;
					cursor: pointer;

					@include mq(small) {
						flex-grow: 0;
					}

					span {
						display: block;
						color: var(--clr-accent-100);
						font-weight: normal;
					}

					&:hover,
					&:focus {
						background-color: rgba(255, 0, 0, 0.5);
					}
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
