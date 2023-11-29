<script lang="ts">
	import AuthorCard from '$lib/components/author-card.svelte';
	import PokerCard from '$lib/components/poker-card.svelte';
	import { pages } from '$lib/page';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="hero">
	<div class="content">
		<h1>International Governments Should Sanction Online Gambling amongst the Youth.</h1>
		<p>
			ENG 1044 - English for Computer Technology Studies
			<br />
			<br />
			— by {data.authors.map((author) => `${author.firstName} ${author.lastName}`).join(', ')}
			<br />
			<br />
			August - December 2023
		</p>
		<a href="#about" class="btn">About</a>
	</div>
</section>

<section id="about" class="about">
	<h1>About</h1>
	<div class="about__content">
		<p class="about__content__description">
			This portfolio outlines the need for further research into online gambling and its effects on
			youth. We as a group have delved into multifaceted niche topics and found a need to voice our
			opinions on online gambling specifically as it ties to the topic that was given, IT. Despite
			online gambling being on the rise, not many have voiced their concerns about this augmented
			malady, outlining the need for further research and the importance of the coursework we have
			written. This interactive portfolio in the form of a gambling-like website ironically plays on
			viewers' cognitive biases to show various techniques employed by online gambling companies and
			the like. Thus, showing how easy it is to lure young, naïve, gaming and gambling enthusiasts
			into addiction and socioeconomic vulnerability.
		</p>
		<img src="/about.avif" alt="the group 'gambling' because irony is funny" />
	</div>
</section>

<!-- toc == table of contents -->
<section class="toc">
	<h1>Table of Contents</h1>
	<div class="toc__content">
		{#each pages as page}
			{#if page.title !== 'Home'}
				{#if page.url}
					<PokerCard link={page.url} cardSetting={page.cardSetting || { display: 'K', suit: '♠' }}>
						{page.title}
					</PokerCard>
				{:else}
					{#each page.dropdown || [] as dropdown}
						<PokerCard
							link={dropdown.url ?? ''}
							cardSetting={dropdown.cardSetting || { display: 'K', suit: '♠' }}
						>
							{dropdown.title}
						</PokerCard>
					{/each}
				{/if}
			{/if}
		{/each}
	</div>
</section>

<section class="authors">
	<h1>About Us</h1>

	<div class="authors__card">
		{#each data.authors as author}
			<AuthorCard info={author} />
		{/each}
	</div>
</section>

<style lang="scss">
	@use '../scss/abstracts/mixins' as *;

	h1 {
		font-size: var(--fs-600);
	}

	.hero {
		background-image: url('/hero.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-color: hsla(0, 0%, 0%, 0.2);
		background-blend-mode: multiply;
		background-position: center;
		height: 100svh;
		display: grid;
		align-items: center;
		padding: 0 var(--content-padding);

		.content {
			p {
				max-width: 75ch;
			}

			> * + * {
				margin-block-start: 1rem;
			}
		}
	}

	.about {
		padding: 1rem var(--content-padding);

		> * + * {
			margin-block: 1rem;
		}

		h1 {
			text-transform: uppercase;
		}

		&__content {
			@include mq(large) {
				display: flex;
				justify-content: space-between;
				gap: 1rem;
			}

			&__description {
				line-height: 1.75rem;
				text-align: justify;
				max-width: 75ch;
				margin-bottom: 1rem;

				@include mq(large) {
					margin: 0;
				}
			}

			img {
				background-color: red;
				width: 30rem;
				height: auto;
				object-fit: cover;
			}
		}
	}

	.toc {
		background-color: var(--clr-background-100);
		padding: 1rem var(--content-padding);

		&__content {
			display: grid;
			place-items: center;
			gap: 1rem;
			grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
		}
	}

	.authors {
		padding: 1rem var(--content-padding);

		&__card {
			margin-top: 2em;

			@include mq(medium) {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
