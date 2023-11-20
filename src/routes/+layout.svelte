<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import SlotMachine from '$lib/components/slot-machine.svelte';
	import '../scss/main.scss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<Modal
	bgText={data.passed === 'true'
		? undefined
		: 'You must win the slot machine in order to enter the portfolio.'}
	closed={data.passed === 'true'}
	enableSlide={true}
>
	<SlotMachine />
</Modal>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
</style>
