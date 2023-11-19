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
		out:fly={{ x: 2000, duration: enableSlide ? 1000 : 0, easing: quintOut }}
	>
		{#if closed}
			<div class="modal-container__closed-content">
				<h1>{bgText}</h1>
				<button on:click={() => (closed = false)}>Reopen</button>
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
		background-color: red;
		display: grid;
		place-items: center;
		padding: 1rem var(--content-padding);

		&__modal {
			background-color: blue;
			padding: 1rem;
			border-radius: 0.5rem;
			display: grid;

			&__close-btn {
				cursor: pointer;
				background-color: transparent;
				border: none;
				justify-self: end;
			}
		}
	}
</style>
