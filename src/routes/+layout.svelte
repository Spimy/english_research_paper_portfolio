<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import SlotMachine from '$lib/components/slot-machine.svelte';
	import { onMount } from 'svelte';
	import '../scss/main.scss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	onMount(() => {
		// Preload roadmap sound effects
		fetch('/sfx/WishMenu.mp3');
		fetch('/sfx/Opening.mp3');
		fetch('/sfx/R.mp3');
		fetch('/sfx/SR.mp3');
		fetch('/sfx/SSR.mp3');
		fetch('/sfx/Summary.mp3');
	});
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
