<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let bgText: string | undefined = undefined;
	export let closed = false;
	export let enableSlide = false;

	const event = createEventDispatcher<{ closed: void }>();

	function closeModal() {
		event('closed');
		closed = true;
	}
</script>

{#if typeof bgText !== 'undefined' || !closed}
	<div
		class="modal-container"
		out:fly={{ x: 5000, duration: enableSlide ? 5000 : 0, easing: quintOut, opacity: 1 }}
	>
		{#if closed}
			<div class="modal-container__closed-content">
				<h1>{bgText}</h1>
				<button
					class="modal-container__closed-content__reopen-btn btn btn--invert"
					on:click={() => (closed = false)}
				>
					Reopen
				</button>
			</div>
		{:else}
			<div class="modal-container__modal">
				<button class="modal-container__modal__close-btn" on:click={closeModal}> X </button>
				<div class="modal-container__modal__content"><slot /></div>
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.modal-container {
		position: fixed;
		z-index: 9999;
		inset: 0;
		background-color: var(--clr-cta-100);
		background-image: url('/curtain.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		display: grid;
		place-items: center;
		padding: 1rem var(--content-padding);

		&__modal,
		&__closed-content {
			background-color: rgba(0, 0, 0, 0.75);
			border: 0.2rem solid var(--clr-cta-100);
			padding: 1rem;
			border-radius: 0.5rem;
			display: grid;

			button {
				cursor: pointer;
			}
		}

		&__modal__close-btn {
			color: var(--clr-neutral-100);
			background-color: transparent;
			font-weight: 600;
			border: none;
			justify-self: end;
		}

		&__closed-content__reopen-btn {
			margin-block-start: 1rem;
		}
	}
</style>
