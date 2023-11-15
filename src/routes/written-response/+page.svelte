<script lang="ts">
	import TabList from '$lib/components/tab-list.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="responses">
	<TabList title="Written Response" tabs={data.writtenResponses} />
</section>

<style lang="scss">
</style>
