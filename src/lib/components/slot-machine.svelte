<script lang="ts">
	import { enhance } from '$app/forms';

	const maxFails = 1;
	const winningEmoji = '7️⃣';
	const slots = [winningEmoji, '💩', '🥺', '🥖', '🤑', '🤭', '👽', '🤡', '💂', '👨‍🎓', '👨‍💻'];

	// Max length / size should be 3 (the items the slot rolled)
	let result: string[] = ['', '', ''];
	let numFails = 0;
	let hasWon = false;
	let slotMachine: HTMLFormElement;

	function checkWin() {
		const resultSet = new Set(result);
		/**
		 * A set removes all duplicated elements
		 * That means that if the set contains only 1 element, that means all 3 values were the same
		 * If all 3 values were the same, then just need to check if it matches the winning emoji
		 */
		return resultSet.size === 1 && resultSet.has(winningEmoji);
	}

	// Roll the slot machine
	// Temporary code as this will change to work with animations later
	function roll() {
		// Reset result before rolling again
		result = result.map(() => '');

		// If user has reached max fails then script a win
		if (numFails === maxFails) {
			result = result.map(() => winningEmoji);
			numFails = 0; // Set number of failed attempts back to 0
		} else {
			// Only randomise if the user has not reached max fails
			const min = 0;
			const max = slots.length;

			// Generate random emojis for the results array 3 times (because 3 slots)
			result = result.map(() => {
				// Generate a random number between min and max for the index of the slots array
				const itemIndex = Math.floor(Math.random() * (max - min) + min);
				return slots[itemIndex];
			});
		}

		hasWon = checkWin();
		if (hasWon) return slotMachine.requestSubmit();
		numFails += 1;
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
		{#each result as emoji}
			<div class="slot-machine__slots__slot">{emoji}</div>
		{/each}
	</div>

	<button on:click|preventDefault class="slot-machine__btn" on:click={roll}>Roll</button>
</form>

<style lang="scss">
	.slot-machine {
		> * + * {
			margin-block-start: 1rem;
		}

		&__slots {
			display: flex;
			justify-content: space-evenly;
			gap: 1rem;

			// TODO: will come back to this later
			// For now, it KIND OF works
			&__slot {
				display: grid;
				place-items: center;
				font-size: 1.5rem;
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
