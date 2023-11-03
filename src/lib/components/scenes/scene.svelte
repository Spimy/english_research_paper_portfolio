<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	// import { onMount } from 'svelte';
	import { Color } from 'three';
	import Chest from './chest.svelte';

	const { scene } = useThrelte();
	scene.background = new Color('hsl(154, 89%, 4%)');

	let current = -1;
	let camera = {
		position: [-2.789, current, -0.5] as [x: number, y: number, z: number],
		rotation: [-103.6, 0, -103.62] as [x: number, y: number, z: number]
	};
	let orbitTarget = [50, 0, 0.486] as [x: number, y: number, z: number];

	// onMount(() => {
	// 	console.log('test');
	// 	const interval = setInterval(() => {
	// 		// console.log('here');
	// 		if (camera.position[1] < 0.5) {
	// 			current += 0.1;
	// 			camera = {
	// 				position: [-2.789, current, -0.5] as [x: number, y: number, z: number],
	// 				rotation: [-103.6, 0, -103.62] as [x: number, y: number, z: number]
	// 			};
	// 			console.log(camera.position);
	// 		} else {
	// 			clearTimeout(interval);
	// 			// console.log(camera.position);
	// 		}
	// 	}, 1000);
	// });
</script>

<T.PerspectiveCamera makeDefault near={0.01} far={1000} {...camera}>
	<OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={orbitTarget} />
</T.PerspectiveCamera>

<T.AmbientLight />
<T.DirectionalLight position={[5, 10, 5]} />

<Chest />
