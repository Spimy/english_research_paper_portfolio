<script lang="ts">
	import { enhance } from '$app/forms';
	import { Confetti } from 'svelte-confetti';
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

	let btnText = 'Spin';

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
				btnText = 'Spin Again';
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
	action="/?/slotMachineWin"
	class="slot-machine"
	use:enhance
>
	<h1>
		{#if hasWon}
			You have hit a jackpot!
			<div
				style="
					position: fixed;
					top: -50px;
					left: 0;
					height: 100vh;
					width: 100vw;
					display: flex;
					justify-content: center;
					overflow: hidden;
					pointer-events: none;"
			>
				<Confetti
					x={[-5, 5]}
					y={[0, 0.1]}
					infinite
					duration={5000}
					amount={200}
					fallDistance="100vh"
				/>
			</div>
		{:else}
			Hit the jackpot to enter
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
	<button on:click|preventDefault class="slot-machine__btn btn btn--invert" on:click={roll}>
		{btnText}
	</button>
</form>

<style lang="scss">
	.slot-machine {
		padding: 1rem 3rem;

		> * + * {
			margin-block-start: 1rem;
		}

		&__slots {
			display: flex;
			justify-content: space-between;
			gap: 1rem;

			&__slot {
				display: grid;
				place-items: center;
				font-size: 3rem;
				background-color: rgba(111, 111, 111, 0.5);
				height: 7rem;
				overflow: hidden;
				text-align: center;
				flex: 1;
			}
		}

		button {
			cursor: pointer;
			width: 100%;
		}
	}
</style>
