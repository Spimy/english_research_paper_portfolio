<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import SlotMachine from '$lib/components/slot-machine.svelte';
	import '../scss/main.scss';
</script>

<Modal bgText={'You must win the slot machine in order to enter the portfolio.'}>
	<SlotMachine />
</Modal>

<style>
</style>
