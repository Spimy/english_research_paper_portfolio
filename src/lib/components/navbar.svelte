<script lang="ts">
	import { pages } from '$lib/page';
</script>

<div class="navbar">
	<nav>
		<ul role="list" class="navbar__menu">
			{#each pages as page, index (index)}
				<li>
					{#if page.url}
						<a class="navbar__menu__item--link" href={page.url}>
							{#if page.title === 'Home'}
								<img src="/logo.png" alt="Sunway Logo" />
							{:else}
								{page.title}
							{/if}
						</a>
					{:else}
						<button class="navbar__menu__item--dropdown">{page.title}</button>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="scss">
	@use '../../scss/abstracts/mixins' as *;

	.navbar {
		&__menu {
			padding: 0;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: green;

			&__item {
				&--dropdown {
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
				}
			}
		}
	}
</style>
