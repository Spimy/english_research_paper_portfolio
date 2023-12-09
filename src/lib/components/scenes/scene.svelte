<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { GLTF, OrbitControls, interactivity, useGltfAnimations } from '@threlte/extras';
	import { createEventDispatcher, onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { Color, LoopOnce } from 'three';

	const { scene } = useThrelte();
	scene.background = new Color('hsl(154, 89%, 4%)');
	scene.receiveShadow = true;
	scene.backgroundIntensity = 1000;

	const { gltf, actions } = useGltfAnimations();
	interactivity();

	const scale = spring(1, { damping: 1 });
	const position = spring([0, 5, 0] as [x: number, y: number, z: number], { damping: 1 });
	const rotation = spring([0, 0, 0] as [x: number, y: number, z: number], { damping: 1 });
	const cameraPosition = spring([-3.5, 0.5, -0.5] as [x: number, y: number, z: number], {
		damping: 1
	});
	const orbitTarget = [50, 0, 0.486] as [x: number, y: number, z: number];

	let audio: HTMLAudioElement;

	onMount(async () => {
		// Bounce animation by moving the chest's y-position every 200ms
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

	const event = createEventDispatcher<{ animationEnd: void }>();

	function playAnimation() {
		audio.play();

		// Shake the chest
		let current = 1;
		const interval = setInterval(() => {
			current = -current;
			rotation.set([current, 0, 0]);
		}, 100);

		// Start opening the chest after 1s and stop the shaking
		setTimeout(() => {
			clearInterval(interval);
			rotation.set([0, 0, 0]);
			$actions['Chest|Chest|ArmatureAction']?.setLoop(LoopOnce, 1).play().halt(1.5);
			// Let parent know the animation has ended / is ending soon
			event('animationEnd');
		}, 1000);

		// Zoom into the chest after opening it
		setTimeout(() => {
			cameraPosition.set([-3.5, 0, -0.5]);
			scale.set(1.5);
			position.set([0, 0, 0.25]);
			rotation.set([0, 0, 1]);
		}, 1500);
	}
</script>

<audio src="/sfx/Opening.mp3" bind:this={audio} />

<T.PerspectiveCamera makeDefault near={0.01} far={1000} position={$cameraPosition}>
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
	on:click={playAnimation}
/>
