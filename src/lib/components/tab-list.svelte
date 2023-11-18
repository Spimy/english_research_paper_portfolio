<script lang="ts">
	import { page } from '$app/stores';
	import type { Tab } from '$lib/types/tab';

	export let title: string;
	export let tabs: Tab[];

	$: query = $page.url.searchParams.get('author') ?? tabs[0].query;
	$: tab = tabs.filter((response) => response.query === query)[0];
	$: authors = tab.authors
		.map((author) => `${author.firstName} ${author.lastName} (${author.studentId})`)
		.join(', ');
</script>

<div class="tablist">
	<h1>{title}</h1>
	<ul role="list" class="tablist__tabs">
		{#each tabs as tab, index (index)}
			<li>
				<a aria-current={tab.query === query ? 'page' : undefined} href="?author={tab.query}"
					>{tab.authors[0].firstName}</a
				>
			</li>
		{/each}
	</ul>
	<div class="tablist__content">
		<header class="tablist__content__header">
			<h2 class="tablist__content__header__title">{tab.title}</h2>
			<h3 class="tablist__content__header__authors">By {authors}</h3>
			<p>
				<a href={tab.download.url} download={tab.download.filename}>Download PDF</a>
				{#if tab.grade}
					<span class="pill">{tab.grade.received} / {tab.grade.maximum}</span>
				{/if}
			</p>
		</header>
		<article class="tablist__content__body">
			{#each tab.content as content}
				{#if content.title}
					<h4>{content.title}</h4>
				{/if}
				{#each content.body as body}
					<p>{body}</p>
				{/each}
			{/each}
		</article>
		<footer class="tablist__content__footer">
			<h2 class="tablist__content__footer__title">References</h2>
			{#each tab.references as reference}
				<p>
					{reference.author}
					{reference.title} <i>{reference.publisher}</i>{reference.issuePage}
					<a href={reference.url}>{reference.url}</a>
				</p>
			{/each}
		</footer>
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

				p {
					display: flex;
					justify-content: space-between;
					align-items: center;

					a {
						color: var(--clr-accent-100);
					}
				}
			}

			&__body {
				h4 {
					font-size: var(--fs-400);
				}

				p {
					line-height: 2em;
					text-align: justify;
					font-size: 1.25rem;

					&:not(:first-of-type) {
						margin-block-start: 1rem;
					}
				}
			}

			&__footer {
				line-height: 2em;

				&__title {
					text-transform: uppercase;
				}

				p {
					text-indent: -3em;
					padding-left: 3em;

					a {
						color: var(--clr-accent-100);
					}

					&:not(:first-of-type) {
						padding-block-start: 1em;
					}
				}
			}
		}
	}
</style>
