<script lang="ts">
	import TabList from '$lib/components/tab-list.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const title = 'ENG1044 Portfolio - Written Responses';
	const description =
		'Brief written responses from the group, summarising what we have learned from the articles we read.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="http://eng1044.spimy.dev" />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<section class="responses">
	<TabList title="Written Response" tabs={data.writtenResponses} />
</section>

<style lang="scss">
</style>
