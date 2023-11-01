<script lang="ts">
	import { authors } from '$lib/authors';
	import AuthorCard from '$lib/components/author-card.svelte';
	import PokerCard from '$lib/components/poker-card.svelte';
	import { pages } from '$lib/page';
</script>

<section class="hero">
	<div class="content">
		<h1>International Governments Should Sanction Online Gambling amongst the Youth.</h1>
		<p>
			ENG 1044 - English for Computer Technology Studies
			<br />
			<br />
			— by {authors.map((author) => `${author.firstName} ${author.lastName}`).join(', ')}
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
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ducimus ex autem deleniti,
			laboriosam nulla rerum laborum harum eum doloribus, architecto similique animi suscipit dicta,
			obcaecati culpa nam eligendi. Voluptas? Expedita minus, eum deleniti consectetur cumque
			facilis eaque, est porro quisquam voluptas suscipit perspiciatis nisi maxime quod. Rem id
			veritatis harum dolorem architecto hic aspernatur sapiente, veniam repudiandae cum minima.
			Saepe facilis reiciendis omnis vel quia! Reiciendis debitis accusantium sit nesciunt dolores
			rerum doloremque impedit eveniet cupiditate explicabo enim, facilis esse adipisci, voluptas
			aliquam fugiat ratione accusamus officiis officia ducimus. Sed libero aspernatur soluta error
			aut dicta fugit, expedita tenetur doloremque non cupiditate minus sapiente atque! Saepe, modi
			veritatis. Assumenda nesciunt, porro autem beatae odio ratione commodi unde aperiam accusamus.
			Corrupti aperiam tempore non eligendi, facilis, et perspiciatis animi veritatis laboriosam
			consequatur aspernatur? Ea doloribus veritatis fugit. Iure quidem, voluptatem aspernatur fugit
			iste eius sint et dicta earum velit voluptates!
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
		{#each authors as author}
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
			display: flex;
			justify-content: space-between;
			margin-top: 2em;
		}
	}
</style>
