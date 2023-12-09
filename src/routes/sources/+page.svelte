<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="sources">
	<h1>Sources</h1>

	<a href="/References.pdf" download="References.pdf">Download PDF</a>

	{#each data.references as reference}
		<p>
			{reference.author}
			{reference.title} <i>{reference.publisher}</i>{reference.issuePage}
			<a href={reference.url} target="_blank">{reference.url}</a>
		</p>
	{/each}
</section>

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.sources {
		// display: grid;
		// gap: 2rem;
		padding: 5rem var(--content-padding) 1rem;
		line-height: 2em;

		> * + * {
			margin-block-start: 2rem;
		}

		h1 {
			font-size: var(--fs-600);
		}

		a {
			color: var(--clr-accent-100);
		}

		p {
			text-indent: -3em;
			padding-left: 3em;
			max-width: 80ch;
			word-wrap: break-word;

			&:not(:first-of-type) {
				padding-block-start: 1em;
			}
		}
	}
</style>
