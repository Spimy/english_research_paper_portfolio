<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import SlotMachine from '$lib/components/slot-machine.svelte';
	import '../scss/main.scss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	console.log(data);
</script>

{#if data.passed === 'true'}
	<slot />
{:else}
	<Modal bgText={`You must win the slot machine in order to enter the portfolio. ${data.passed}`}>
		<SlotMachine />
	</Modal>
{/if}

<style>
</style>
