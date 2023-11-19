<script lang="ts">
	import { enhance } from '$app/forms';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const maxFails = 1;
	const winningEmoji = '7️⃣';
	const slots = [winningEmoji, '💩', '🥺', '🥖', '🤑', '🤭', '👽', '🤡', '💂', '👨‍🎓', '👨‍💻'];

	// Max length / size should be 3 (the items the slot rolled)
	let result: string[] = ['❓', '❓', '❓'];
	let numFails = 0;
	let hasWon = false;
	let rolling = false;
	let slotMachine: HTMLFormElement;

	function roll() {
		// Only randomise if the user has not reached max fails
		const min = 0;
		const max = slots.length;
		let i = 0;

		function randomise(interval?: number) {
			result = result.map(() => {
				// Generate a random number between min and max for the index of the slots array
				const itemIndex = Math.floor(Math.random() * (max - min) + min);
				return slots[itemIndex];
			});

			i += 1;
			if (!interval) return;

			if (i === 10) {
				clearInterval(interval);

				//  If has failed once then script a win
				if (numFails === maxFails) {
					result = result.map(() => winningEmoji);
					numFails = 0; // Set number of failed attempts back to 0
				}

				hasWon = result.every((res) => res === result[0]);
				rolling = false;

				if (hasWon) return slotMachine.requestSubmit();
				numFails += 1;
			}
		}

		if (rolling) return;
		rolling = true;
		randomise();
		const interval = setInterval(() => randomise(interval), 500);
	}
</script>

<form
	bind:this={slotMachine}
	method="post"
	action="?/slotMachineWin"
	class="slot-machine"
	use:enhance
>
	<h1>
		{#if hasWon}
			You have won
		{:else}
			You have not won
		{/if}
	</h1>

	<div class="slot-machine__slots">
		{#each result as emoji, index (index)}
			<div class="slot-machine__slots__slot">
				{#key result}
					<p
						in:fly={{
							y: 50,
							duration: 500 / 3,
							opacity: 1,
							easing: cubicInOut
						}}
						out:fly={{
							y: -50,
							duration: 500 / 6,
							opacity: 1,
							easing: cubicInOut
						}}
					>
						{emoji}
					</p>
				{/key}
			</div>
		{/each}
	</div>
	<button on:click|preventDefault class="slot-machine__btn" on:click={roll}>Roll</button>
</form>

<style lang="scss">
	.slot-machine {
		padding: 2rem;

		> * + * {
			margin-block-start: 1rem;
		}

		&__slots {
			display: flex;
			justify-content: space-between;
			gap: 1rem;

			// TODO: will come back to this later
			// For now, it KIND OF works
			&__slot {
				display: grid;
				place-items: center;
				font-size: 2rem;
				background-color: gray;
				height: 6rem;
				width: 4rem;
				overflow: hidden;
				text-align: center;
			}
		}

		&__btn {
			cursor: pointer;
		}
	}
</style>
