<script lang="ts">
	import Scene from '$lib/components/scenes/scene.svelte';
	import { Canvas } from '@threlte/core';
</script>

<div>
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style>
	div {
		height: 100vh;
		cursor: pointer;
	}
</style>
