<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Fa from 'svelte-fa';

	interface Social {
		icon: IconDefinition;
		url: string;
	}

	interface UserInfo {
		firstName: string;
		lastName: string;
		course: string;
		title: string;
		profileImage: string;
		social: Social[];
	}

	export let info: UserInfo;
</script>

<div class="card">
	<header class="card__header">
		<img src={info.profileImage} alt="Photo of {info.firstName}" />
	</header>
	<div class="card__content">
		<h2 class="card__content__name">
			{info.firstName}
			<span>{info.lastName}</span>
		</h2>
		<p class="card__content__info">
			{info.course}
			<br />
			<span>{info.title}</span>
		</p>
	</div>
	<footer class="card__footer">
		<ul role="list" class="card__footer__socials">
			{#each info.social as social, index (index)}
				<li><a href={social.url}><Fa icon={social.icon} /></a></li>
			{/each}
		</ul>
	</footer>
</div>

<style lang="scss">
	.card {
		display: grid;
		place-items: center;
		text-align: center;

		&__header {
			img {
				border-radius: 50%;
				aspect-ratio: 1;
				width: 10rem;
			}
		}

		&__content {
			margin-top: 1rem;

			&__name {
				font-size: 1.2rem;

				span {
					display: block;
					text-transform: uppercase;
					margin-top: -0.5rem;
				}
			}

			&__info {
				margin-top: 1rem;

				span {
					font-style: italic;
				}
			}
		}

		&__footer {
			margin-top: -1rem;

			&__socials {
				display: flex;
				gap: 1em;
				padding: 0;
				font-size: var(--fs-500);

				a:hover,
				a:focus {
					color: var(--clr-accent-100);
				}
			}
		}
	}
</style>
