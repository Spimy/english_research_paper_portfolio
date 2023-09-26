<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import SlotMachine from '$lib/components/slot-machine.svelte';
	import '../scss/main.scss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<!-- TODO: Slow down the switch from modal to content on pass -->
{#if data.passed !== 'true'}
	<Modal bgText={`You must win the slot machine in order to enter the portfolio. ${data.passed}`}>
		<SlotMachine />
	</Modal>
{/if}

<Navbar />
<slot />

<style>
</style>
