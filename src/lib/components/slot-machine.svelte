<script lang="ts">
	const maxFails = 1;
	const winningEmoji = '7️⃣';
	// Temporary for now
	const slots = [winningEmoji, '💩', '🥺', '🥖'];

	// Max length / size should be 3 (the items the slot rolled)
	let result: string[] = [];
	let numFails = 0;
	let hasWon = false;

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
		result = [];

		// If user has reached max fails then script a win
		if (numFails === maxFails) {
			for (let i = 0; i < 3; i++) {
				result.push(winningEmoji);
			}
			numFails = 0; // Set number of failed attempts back to 0
		} else {
			// Only randomise if the user has not reached max fails
			const min = 0;
			const max = slots.length;

			// Generate random emojis for the results array 3 times (because 3 slots)
			for (let i = 0; i < 3; i++) {
				// Generate a random number between min and max for the index of the slots array
				const itemIndex = Math.floor(Math.random() * (max - min) + min);
				result.push(slots[itemIndex]);
			}
		}

		hasWon = checkWin();
		if (!hasWon) numFails += 1;
	}
</script>

{#if hasWon}
	<h1>You have won</h1>
{:else}
	<h1>You have not won</h1>
{/if}

<button on:click={roll}>Roll</button>
{#each result as emoji}
	<div>{emoji}</div>
{/each}

<style>
</style>
