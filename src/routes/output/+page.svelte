<script lang="ts">
	import TabList from '$lib/components/tab-list.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="output">
	<TabList title="Output" tabs={data.output} />
</section>

<style lang="scss">
</style>
