<script lang="ts" context="module">
	export interface PokerCard {
		suit: '♠' | '♥' | '♣' | '♦';
		display: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	}
</script>

<script lang="ts">
	export let cardSetting: PokerCard;
	export let link: string;
</script>

<a href={link}>
	<div class="card">
		<div class="card__content">
			<div
				class="card__content--front"
				class:red={cardSetting.suit === '♥' || cardSetting.suit === '♦'}
			>
				<div class="card__content--front__suit--top">
					{cardSetting.display}<span>{cardSetting.suit}&#xFE0E;</span>
				</div>
				<div class="card__content--front__suit--bottom">
					{cardSetting.display}<span>{cardSetting.suit}&#xFE0E;</span>
				</div>
				<slot />
			</div>
			<div class="card__content--back" />
		</div>
	</div>
</a>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

	a:hover,
	a:focus {
		.card {
			transform: scale(100%);
		}

		.card__content,
		.card__content {
			transform: rotateY(360deg);
			transition: transform 750ms ease-in-out;
		}
	}

	.card {
		font-family: 'Alfa Slab One', cursive;
		position: relative;
		width: 20rem;
		height: 30rem;
		perspective: 500px;
		cursor: pointer;

		&__content {
			position: absolute;
			width: 100%;
			height: 100%;
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
			transition: transform 1s;
			transform-style: preserve-3d;

			&--front,
			&--back {
				position: absolute;
				display: grid;
				place-items: center;
				height: 100%;
				width: 100%;
				background: var(--clr-neutral-100);
				color: var(--clr-background-200);
				text-align: center;
				font-size: 60px;
				border-radius: 5px;
				backface-visibility: hidden;
			}

			&--front {
				font-size: 3rem;
				background: white;
				background-image: repeating-linear-gradient(
						to right,
						transparent 0,
						transparent 9px,
						rgba(255, 255, 255, 0.2) 9px,
						rgba(208, 208, 208, 0.2) 10px
					),
					linear-gradient(to bottom left, rgba(233, 233, 233, 0.483), rgba(255, 255, 255, 0.05));
				background-size: 0.65em 0.65em;

				&.red {
					color: var(--clr-cta-100);
				}

				&__suit {
					&--top,
					&--bottom {
						position: absolute;

						span {
							display: block;
							font-size: 5rem;
							line-height: 2rem;
							font-size: serif !important;
							font-family: 'Courier New', Courier, monospace;
						}
					}

					&--top {
						top: 0;
						left: 1rem;
					}

					&--bottom {
						bottom: 0;
						right: 1rem;
						-webkit-transform: rotate(180deg) perspective(0);
						-moz-transform: rotate(180deg) perspective(0);
						transform: rotate(180deg) perspective(0);
					}
				}
			}

			&--back {
				background-image: url('/card-back.png');
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				color: var(--clr-neutral-100);
				transform: rotateY(180deg);
			}
		}

		transform: scale(90%);
		transition: transform 750ms ease-in-out;
	}
</style>
