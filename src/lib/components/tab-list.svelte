<script lang="ts">
	import { page } from '$app/stores';
	import type { Tab } from '$lib/types/tab';

	export let title: string;
	export let writtenResponses: Tab[];

	$: query = $page.url.searchParams.get('author') ?? writtenResponses[0].query;
	$: response = writtenResponses.filter((response) => response.query === query)[0];
	$: authors = response.authors
		.map((author) => `${author.firstName} ${author.lastName} (${author.studentId})`)
		.join(', ');
</script>

<div class="tablist">
	<h1>{title}</h1>
	<ul role="list" class="tablist__tabs">
		{#each writtenResponses as response, index (index)}
			<li>
				<a
					aria-current={response.query === query ? 'page' : undefined}
					href="?author={response.query}">{response.authors[0].firstName}</a
				>
			</li>
		{/each}
	</ul>
	<div class="tablist__content">
		<header class="tablist__content__header">
			<h2 class="tablist__content__header__title">{response.title}</h2>
			<h3 class="tablist__content__header__authors">By {authors}</h3>
			<a href={response.download.url} download={response.download.filename}>Download PDF</a>
		</header>
		<p class="tablist__content__body">{response.content}</p>
	</div>
</div>

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.tablist {
		h1 {
			font-size: var(--fs-600);
		}

		padding: 5rem var(--content-padding);

		&__tabs {
			gap: 1rem;
			display: flex;
			flex-wrap: wrap;
			padding: 0;

			li {
				padding: 1rem 0;

				a {
					background-color: var(--clr-cta-100);
					padding: 1rem 1.5rem;
					position: relative;

					&[aria-current='page']::after {
						@include south-facing-triangle(var(--clr-cta-100));
						position: absolute;
						top: 100%;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			}
		}

		&__content {
			max-width: 80ch;

			> * + * {
				margin-block-start: 1rem;
			}

			&__header {
				&__title {
					text-transform: uppercase;
					font-size: var(--fs-500);
				}

				&__authors {
					font-size: var(--fs-300);
					font-weight: normal;
					font-style: italic;
				}

				a {
					color: var(--clr-accent-100);
				}
			}

			&__body {
				line-height: 2em;
				text-align: justify;
				font-size: 1.25rem;
			}
		}
	}
</style>
