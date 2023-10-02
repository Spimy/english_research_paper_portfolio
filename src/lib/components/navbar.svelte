<script lang="ts">
	import { pages } from '$lib/page';
</script>

<div class="navbar">
	<nav>
		<ul role="list" class="navbar__menu">
			{#each pages as page, index (index)}
				<li>
					{#if page.url}
						<a class="navbar__menu--link" href={page.url}>
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
										<a class="navbar__menu--dropdown__menu--link" href={dropdown.url}>
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
		ul {
			padding: 0.5rem 0;
			margin: 0;
		}
		&__menu {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: green;

			&--link {
				&__img {
					width: 8rem;
					height: 100%;

					&:focus {
						outline: 1rem solid black;
					}
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

					&::after {
						@include south-facing-triangle(black);
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
					background-color: red;
					width: max-content;
					display: none;
					border-radius: 0.2rem;

					&:hover,
					&:focus {
						display: block;
					}

					&--link {
						margin: 1rem;
					}
				}
			}
		}
	}
</style>
