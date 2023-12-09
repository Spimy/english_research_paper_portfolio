<script lang="ts">
	import { enhance } from '$app/forms';
	import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import type { ActionData, PageServerData, SubmitFunction } from './$types';

	export let data: PageServerData;
	export let form: ActionData;

	let userFeedbackIds: string[] = [];
	$: {
		if (form?.newFeedback) {
			// If edited that means the list of feedback ids already has the new feedback id
			if (
				userFeedbackIds.length === 0 ||
				userFeedbackIds.some((feedbackId) => feedbackId !== form?.newFeedback?.id)
			) {
				userFeedbackIds = [...new Set([form.newFeedback.id, ...userFeedbackIds]).values()];
			}

			localStorage.setItem('userFeedbacks', JSON.stringify(userFeedbackIds));
			closeEdit(data.feedbacks.findIndex((feedback) => feedback.id === form?.newFeedback?.id));
		}
	}

	onMount(() => {
		userFeedbackIds = JSON.parse(localStorage.getItem('userFeedbacks') || '[]');
	});

	let editingIndices: number[] = [];
	function toggleEdit(index: number) {
		if (!editingIndices.includes(index)) {
			editingIndices = [...editingIndices, index];
			return;
		}

		closeEdit(index);
	}

	function closeEdit(index: number) {
		editingIndices = editingIndices.filter((i) => i !== index);
	}

	const deleteLocalFeedback: SubmitFunction = ({ formData }) => {
		const id = formData.get('id')!;
		userFeedbackIds = [...new Set(userFeedbackIds.filter((i) => i !== id)).values()];
		localStorage.setItem('userFeedbacks', JSON.stringify(userFeedbackIds));
	};

	const blockSubmit: SubmitFunction = ({ submitter }) => {
		if (submitter instanceof HTMLButtonElement) {
			submitter.disabled = true;
			setTimeout(() => {
				submitter.disabled = false;
			}, 2000);
		}
	};

	const title = 'ENG1044 Portfolio - Feedback';
	const description =
		'Have any feedbacks? No need to be shy, you can be fully anonymous in giving us feedbacks.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="http://eng1044.spimy.dev" />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<section class="feedbacks">
	<h1>Leave a Feedback</h1>

	<form action="?/addFeedback" method="POST" class="feedbacks__form" use:enhance={blockSubmit}>
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
				rows="10"
				required
			/>
			{#if form?.errors?.feedback}<small>{form.errors.feedback}</small>{/if}
		</div>
		<button type="submit" class="btn btn--invert">Post Feedback</button>
	</form>

	{#if data.feedbacks.length > 0}
		<article class="feedbacks__content">
			<h2>Feedbacks</h2>
			{#each data.feedbacks as feedback, index (index)}
				<dl>
					<div>
						<dt>{feedback.username}</dt>
						{#if userFeedbackIds.some((feedbackId) => feedbackId === feedback.id)}
							<div>
								<button on:click={() => toggleEdit(index)}>
									{#if editingIndices.includes(index)}
										Cancel
									{:else}
										Edit <Fa icon={faPenToSquare} />
									{/if}
								</button>
								<form action="?/deleteFeedback" method="POST" use:enhance={deleteLocalFeedback}>
									<input type="text" name="id" id="id" value={feedback.id} hidden />
									<button type="submit">
										Delete <Fa icon={faTrashCan} />
									</button>
								</form>
							</div>
						{/if}
					</div>
					{#if editingIndices.includes(index)}
						<form action="?/editFeedback" method="POST" use:enhance>
							<input type="text" name="id" id="id" value={feedback.id} hidden />
							<textarea name="feedback" id="feedback" rows="2" value={feedback.feedback} required />
							{#if form?.errors?.feedback}<small>{form.errors.feedback}</small>{/if}
							<button type="submit" class="feedbacks__content__edit-btn btn btn--invert">
								Edit
							</button>
						</form>
					{:else}
						<dd>{feedback.feedback}</dd>
					{/if}
				</dl>
			{/each}
		</article>
	{/if}
</section>

<style lang="scss">
	.feedbacks {
		padding: 5rem var(--content-padding) 1rem;
		min-height: 100vh;
		min-height: 100dvh;

		h1 {
			font-size: var(--fs-600);
		}

		button {
			cursor: pointer;
			justify-self: end;
		}

		textarea {
			border: none;
			border-radius: 0.25rem;
			padding: 1rem;
			background-color: hsla(125, 94%, 26%, 0.1);
			resize: none;
			color: var(--clr-neutral-100);
			margin-top: 0.5rem;
			width: 100%;
		}

		span,
		small {
			color: var(--clr-cta-100);
		}

		&__form {
			display: grid;
			gap: 1rem;

			div {
				display: grid;
			}

			input {
				border: none;
				border-radius: 0.25rem;
				padding: 1rem;
				background-color: hsla(125, 94%, 26%, 0.1);
				resize: none;
				color: var(--clr-neutral-100);
				margin-top: 0.5rem;
			}
		}

		&__content {
			display: grid;

			dl {
				margin-block: 1rem;
				padding: 1rem;
				border-radius: 0.25rem;
				background-color: var(--clr-background-100);

				div {
					display: flex;
					justify-content: space-between;

					div > * {
						margin-left: 1rem;
					}

					dt {
						color: var(--clr-accent-100);
					}

					button {
						background-color: transparent;
						border: none;
						padding: 0;
						color: var(--clr-neutral-100);

						&:hover {
							color: var(--clr-accent-100);
						}
					}
				}

				form {
					display: grid;

					textarea {
						margin-bottom: 1rem;
					}

					button {
						justify-self: end;
					}
				}
			}
		}
	}
</style>
