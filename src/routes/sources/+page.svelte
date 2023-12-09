<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const title = 'ENG1044 Portfolio - Sources';
	const description =
		'List of references used as research materials for the writing of the research paper.';
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
		padding: 5rem var(--content-padding) 1rem;
		line-height: 2em;

		> * + * {
			margin-block-start: 1rem;
		}

		h1 {
			font-size: var(--fs-600);
		}

		a {
			display: inline-block;
			color: var(--clr-accent-100);
		}

		p {
			text-indent: -3em;
			padding-left: 3em;
			max-width: 80ch;
			word-wrap: break-word;

			a {
				display: inline;
			}

			&:not(:first-of-type) {
				padding-block-start: 1em;
			}
		}
	}
</style>
