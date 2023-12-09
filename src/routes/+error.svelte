<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="error">
	<h1>
		{#each String($page.status) as character, index (index)}
			<span>{character}</span>
		{/each}
	</h1>
	{#if $page.status == 404}
		<p>Page not found</p>
	{:else}
		<p>
			{$page.error?.message === `Error: ${$page.status}`
				? 'Something went wrong'
				: $page.error?.message}
		</p>
	{/if}
	<a href="/" class="btn">Go back home</a>
</section>

<style lang="scss">
	@use '../scss/abstracts/mixins' as *;

	.error {
		padding: 3rem;
		display: grid;
		place-items: center;
		place-content: center;
		height: 100vh;
		height: 100dvh;
		text-align: center;

		@include mq(small) {
			font-size: 2rem;
		}

		h1 {
			font-size: 5em;
			padding: 1rem;
			background-color: gray;
			position: relative;

			span {
				background-color: var(--clr-neutral-100);
				color: var(--clr-neutral-200);
				padding: 1rem;
				margin-inline: 1rem;
			}

			&::after {
				content: '';
				position: absolute;
				right: 0;
				top: 50%;
				transform: translate(100%, -50%);
				width: 2rem;
				height: 5rem;
				background-color: red;
			}

			&::before {
				content: '';
				position: absolute;
				right: 0;
				top: 50%;
				transform: translate(150%, -50%);
				width: 1rem;
				height: 1rem;
				background-color: orange;
				border-radius: 100%;
				box-shadow: 0 0 0.75rem rgb(0, 0, 0);
				z-index: 1;
			}
		}

		a {
			font-size: 0.7em;
			margin-block-start: 1em;
			padding-block: 0.7em;
		}
	}
</style>
