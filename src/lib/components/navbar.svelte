<script lang="ts">
	import { page } from '$app/stores';
	import { pages } from '$lib/page';

	$: path = $page.url.pathname;
</script>

<div class="navbar">
	<nav>
		<input class="navbar__burger" type="checkbox" name="burger" id="burger" />
		<label class="navbar__burger--label" for="burger">☰</label>

		<ul role="list" class="navbar__menu">
			<label class="navbar__menu--label" for="burger">X</label>

			{#each pages as page, index (index)}
				<li>
					{#if page.url}
						<a
							class="navbar__menu--link"
							href={page.url}
							aria-current={path === page.url ? 'page' : undefined}
						>
							{#if page.title === 'Home'}
								<img class="navbar__menu--link__img" src="/logo.png" alt="Sunway Logo" />
							{:else}
								{page.title}
							{/if}
						</a>
					{:else}
						<div class="navbar__menu--dropdown">
							<button class="navbar__menu--dropdown__btn">{page.title}</button>
							<ul role="list" class="navbar__menu--dropdown__menu">
								{#each page.dropdown || [] as dropdown, i (i)}
									<li>
										<a
											class="navbar__menu--dropdown__menu--link"
											href={dropdown.url}
											aria-current={path === dropdown.url ? 'page' : undefined}
										>
											{dropdown.title}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.navbar {
		position: absolute;
		width: 100%;
		padding: 0 var(--content-padding);

		&__burger,
		&__burger--label {
			font-size: 2rem;
			padding-top: 1rem;
			float: right;
			cursor: pointer;

			@include mq(medium) {
				display: none;
			}
		}

		&__burger {
			display: none;
		}

		&__burger:checked ~ &__menu {
			padding: 1rem 7rem;
			left: 0;
			right: 0;
			background-color: rgba(0, 0, 0, 0.5);
			backdrop-filter: blur(8px);

			@include mq(medium) {
				background-color: transparent;
				backdrop-filter: unset;
				padding: 1rem 0;
			}

			> .navbar__menu--label {
				right: 1rem;

				@include mq(medium) {
					right: 100%;
				}
			}
		}

		ul {
			padding: 0.5rem 0;
			margin: 0;
		}

		&__menu {
			display: grid;
			place-items: center;
			position: fixed;
			left: -100%;
			height: 100svh;
			transition: all 0.5s ease-in-out;
			z-index: 9999;

			@include mq(medium) {
				display: flex !important;
				justify-content: space-between;
				align-items: center;
				height: auto;
				padding: 0;
				position: initial;
			}

			&--label {
				font-size: var(--fs-400);
				position: absolute;
				right: 100%;
				top: 1rem;
				background-color: var(--clr-accent-100);
				padding: 0.25rem 0.75rem;
				border-radius: 0.25rem;
				transition: all 0.5s ease-in-out;
				cursor: pointer;

				&:hover {
					background-color: var(--clr-background-100);
				}
			}

			&--link {
				&__img {
					width: 8rem;
					height: 100%;

					@include mq(medium) {
						display: block;
					}

					&:focus {
						outline: 1rem solid black;
					}
				}

				&[aria-current='page'] {
					filter: drop-shadow(0 0 0.75rem var(--clr-accent-100));
					text-shadow: 0 0 0.75rem var(--clr-accent-100);
				}
			}

			&--dropdown {
				position: relative;

				$dropdown: &; // Reference the dropdown menu

				&__btn {
					cursor: pointer;
					background: none;
					border: none;
					position: relative;
					color: inherit;

					&::after {
						@include south-facing-triangle(var(--clr-neutral-100));
						position: absolute;
						right: 0;
						top: 50%;
						transform: translate(100%, -50%);
					}

					&:hover + #{$dropdown}__menu,
					&:focus + #{$dropdown}__menu {
						display: block;
					}
				}

				&__menu {
					position: absolute;
					color: var(--clr-neutral-200);
					background-color: var(--clr-neutral-100);
					width: max-content;
					display: none;
					border-radius: 0.2rem;
					left: -50%;

					&:hover,
					&:focus {
						display: block;
					}

					&--link {
						margin: 1rem;

						&[aria-current='page'] {
							color: var(--clr-accent-100);
						}
					}
				}
			}
		}
	}
</style>
