<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const event = createEventDispatcher<{ click: void }>();
	export let customText: string | undefined = undefined;
</script>

<button on:click={() => event('click')}>
	{#if customText}
		{customText}
	{:else}
		Gacha 10x
		<span>
			<img src="/roadmap/chip.png" alt="chip" class="chip" />
			x 0 <strike>1600</strike>
		</span>
	{/if}
</button>

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;
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
			font-weight: normal;
		}

		.chip {
			aspect-ratio: 1;
			width: 1rem;
			display: inline-block;
			margin: -0.2rem 0;
		}

		&:hover,
		&:focus {
			background-color: rgba(255, 0, 0, 0.5);
		}
	}
</style>
