<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import '../scss/main.scss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<!-- TODO: Slow down the switch from modal to content on pass -->
<!-- {#if data.passed !== 'true'}
	<Modal bgText={`You must win the slot machine in order to enter the portfolio. ${data.passed}`}>
		<SlotMachine />
	</Modal>
{/if} -->

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
</style>
