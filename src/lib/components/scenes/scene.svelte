<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { GLTF, OrbitControls, interactivity, useGltfAnimations } from '@threlte/extras';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { Color, LoopPingPong } from 'three';

	const { gltf, actions } = useGltfAnimations();

	interactivity();
	const scale = spring(1);
	const position = spring([0, 5, 0] as [x: number, y: number, z: number], { damping: 1 });
	const rotation = spring([0, 0, 0] as [x: number, y: number, z: number], { damping: 1 });

	const { scene } = useThrelte();
	scene.background = new Color('hsl(154, 89%, 4%)');

	const cameraPosition = [-3.5, 0.5, -0.5] as [x: number, y: number, z: number];
	const orbitTarget = [50, 0, 0.486] as [x: number, y: number, z: number];

	onMount(async () => {
		setTimeout(() => {
			position.set([0, 5, 0]);
		}, 200);
		setTimeout(() => {
			position.set([0, -1, 0]);
		}, 400);
		setTimeout(() => {
			position.set([0, 1, 0]);
		}, 600);
		setTimeout(() => {
			position.set([0, -0.2, 0]);
		}, 800);
		setTimeout(() => {
			position.set([0, 0.2, 0]);
		}, 1000);
		setTimeout(() => {
			position.set([0, 0, 0]);
		}, 1200);
	});
</script>

<T.PerspectiveCamera makeDefault near={0.01} far={1000} position={cameraPosition}>
	<OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={orbitTarget} />
</T.PerspectiveCamera>

<T.AmbientLight />
<T.DirectionalLight position={[5, 10, 5]} />

<GLTF
	url="/models/chest.glb"
	scale={$scale}
	bind:gltf={$gltf}
	position={$position}
	rotation={$rotation}
	animations={[]}
	on:click={() => $actions['Chest|Chest|ArmatureAction']?.setLoop(LoopPingPong, 2).play()}
/>
