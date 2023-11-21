<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
</script>

<section class="feedbacks">
	<h1>Leave a Feedback</h1>

	<form action="" method="POST" class="feedbacks__form" use:enhance>
		<div class="feedbacks__form__username">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="Anonymous" />
			{#if form?.errors?.username}<small>{form.errors.username}</small>{/if}
		</div>
		<div class="feedbacks__form__feedback">
			<label for="feedback">Feedback <span>*</span></label>
			<textarea
				name="feedback"
				id="feedback"
				placeholder="Gambling for good reviews"
				cols="30"
				rows="10"
				required
			/>
			{#if form?.errors?.feedback}<small>{form.errors.feedback}</small>{/if}
		</div>
		<button class="btn btn--invert">Post Feedback</button>
	</form>

	{#if data.feedbacks.length > 0}
		<article class="feedbacks__content">
			<h2>Feedbacks</h2>
			{#each data.feedbacks as feedback, index (index)}
				{#key index}
					<dl in:fly|global={{ x: -100, duration: 300, delay: 300 }}>
						<dt>{feedback.username}</dt>
						<dd>{feedback.feedback}</dd>
					</dl>
				{/key}
			{/each}
		</article>
	{/if}
</section>

<style lang="scss">
	.feedbacks {
		padding: 5rem var(--content-padding) 1rem;
		min-height: 100dvh;

		h1 {
			font-size: var(--fs-600);
		}

		&__form {
			display: grid;
			gap: 1rem;

			span,
			small {
				color: var(--clr-cta-100);
			}

			div {
				display: grid;
			}

			input,
			textarea {
				border: none;
				border-radius: 0.25rem;
				padding: 1rem;
				background-color: hsla(125, 94%, 26%, 0.1);
				resize: none;
				color: var(--clr-neutral-100);
				margin-top: 0.5rem;
			}

			button {
				cursor: pointer;
				justify-self: end;
			}
		}

		&__content {
			width: 100%;

			dl {
				margin-block: 1rem;
				padding: 1rem;
				border-radius: 0.25rem;
				background-color: var(--clr-background-100);

				dt {
					color: var(--clr-accent-100);
				}
			}
		}
	}
</style>
