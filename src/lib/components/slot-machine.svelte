<script lang="ts">
	const winningEmoji = '7️⃣';
	// Temporary for now
	const slots = [winningEmoji, '💩', '🥺', '🥖'];

	// Max length / size should be 3 (the items the slot rolled)
	let result: string[] = [];
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

	function roll() {
		// Reset result before rolling again
		result = [];

		const min = 0;
		const max = 2;
		for (let i = 0; i < max + 1; i++) {
			const itemIndex = Math.floor(Math.random() * (max - min) + min);
			result.push(slots[itemIndex]);
		}
		hasWon = checkWin();
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
