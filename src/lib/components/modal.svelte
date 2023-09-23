<script lang="ts">
	export let bgText: string;
	let closed = false;
</script>

{#if typeof bgText !== 'undefined' || !closed}
	<div class="modal-container">
		{#if closed}
			<div class="modal-container__closed-content">
				<h1>{bgText}</h1>
				<button on:click={() => (closed = false)}>Reopen</button>
			</div>
		{:else}
			<div class="modal-container__modal">
				<button class="modal-container__modal__close-btn" on:click={() => (closed = true)}>
					X
				</button>
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

		&__modal {
			background-color: yellow;
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
