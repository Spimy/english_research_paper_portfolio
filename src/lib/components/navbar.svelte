<script lang="ts">
	import { page } from '$app/stores';
	import { pages } from '$lib/page';

	$: path = $page.url.pathname;
</script>

<div class="navbar">
	<nav>
		<ul role="list" class="navbar__menu">
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

		@include mq(small) {
			padding: 0 var(--content-padding);
		}

		ul {
			padding: 0.5rem 0;
			margin: 0;
		}

		&__menu {
			display: flex;
			justify-content: space-between;
			justify-content: space-evenly;
			align-items: center;

			@include mq(small) {
				justify-content: space-between;
			}

			&--link {
				&__img {
					width: 8rem;
					height: 100%;

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
