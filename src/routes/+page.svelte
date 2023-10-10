<script lang="ts">
	import PokerCard, { CardSuit } from '$lib/components/poker-card.svelte';
	import { pages } from '$lib/page';
</script>

<section class="hero">
	<div class="content">
		<h1>International Governments Should Sanction Online Gambling amongst the Youth.</h1>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt itaque, molestias voluptatem
			obcaecati temporibus dignissimos praesentium repellendus corporis sit aliquid laborum magnam
			incidunt laudantium est nulla eaque molestiae doloribus? Quibusdam!
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
					<a href={page.url}>
						<PokerCard cardSetting={{ display: 'K', suit: CardSuit.SPADES }}>
							{page.title}
						</PokerCard>
					</a>
				{:else}
					{#each page.dropdown || [] as dropdown}
						<a href={dropdown.url}>
							<PokerCard cardSetting={{ display: 'K', suit: CardSuit.SPADES }}>
								{dropdown.title}
							</PokerCard>
						</a>
					{/each}
				{/if}
			{/if}
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
		background-color: var(--clr-background-200);
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
			gap: 1rem;
			grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
		}
	}
</style>
