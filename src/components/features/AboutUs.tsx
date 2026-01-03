/* eslint-disable */
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const AboutUs = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
	const [model, setModel] = useState<THREE.Group | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const getInitialSize = () => {
			let width = Math.min(window.innerWidth * 0.9, 800);
			if (window.innerWidth < 640) width = window.innerWidth * 0.95;
			const height = window.innerWidth < 768 ? Math.round(width * 0.65) : width;
			return { width, height };
		};

		const scene = new THREE.Scene();
		const { width, height } = getInitialSize();
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.set(0, 0.25, 3);
		cameraRef.current = camera;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		containerRef.current.appendChild(renderer.domElement);
		rendererRef.current = renderer;

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.enableZoom = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.8;

		const light = new THREE.AmbientLight(0xffffff, 1);
		scene.add(light);

		const loader = new GLTFLoader();
		loader.load(
			"/models/arduino.glb",
			(gltf) => {
				const loadedModel = gltf.scene;
				const scaleFactor = 0.05;
				loadedModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

				// Center model so it doesn't sit low in the view.
				const box = new THREE.Box3().setFromObject(loadedModel);
				const center = box.getCenter(new THREE.Vector3());
				loadedModel.position.sub(center);
				loadedModel.position.y += 0.15;

				// Fit camera to model.
				const size = box.getSize(new THREE.Vector3());
				const maxDim = Math.max(size.x, size.y, size.z);
				const fov = (camera.fov * Math.PI) / 180;
				let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
				cameraZ *= 1.6;
				camera.position.set(0, 0.2, cameraZ);
				camera.near = cameraZ / 100;
				camera.far = cameraZ * 100;
				camera.updateProjectionMatrix();
				controls.target.set(0, 0, 0);
				controls.update();

				scene.add(loadedModel);
				setModel(loadedModel);
			},
			undefined,
			(error) => console.error("Error loading GLTF:", error)
		);

		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();

		return () => {
			controls.dispose();
			renderer.dispose();
			scene.clear();
			if (containerRef.current && renderer.domElement) {
				containerRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			let width = Math.min(window.innerWidth * 0.9, 800);
			if (window.innerWidth < 640) width = window.innerWidth * 0.95;
			const height = window.innerWidth < 768 ? Math.round(width * 0.65) : width;

			if (rendererRef.current) {
				rendererRef.current.setSize(width, height);
			}
			if (cameraRef.current) {
				cameraRef.current.aspect = width / height;
				cameraRef.current.updateProjectionMatrix();
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="container relative flex flex-col items-center justify-center gap-4 py-12 md:gap-6 md:py-16">
			<div className="flex flex-col items-center gap-4 text-center max-w-3xl">
				<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur">
					<span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
					<span>About the day</span>
				</div>
				<h2 className="text-3xl font-semibold leading-tight md:text-4xl">
					What is <span className="text-secondary">Arduino Day Philippines?</span>
				</h2>
				<div className="flex flex-col gap-3 text-base text-white/80 md:text-lg">
					<p>
						Arduino Day is a worldwide celebration of Arduino's birthday, bringing people together to share their builds, ideas, and open-source learnings.
					</p>
					<p>
						Alongside the official stream, local communities host talks, demos, and showcases so anyone can discover, tinker, and contribute.
					</p>
				</div>
			</div>
			<div className="relative flex w-full justify-center">
				<div className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-3xl px-4 py-4 md:py-6">
					<div ref={containerRef} className="relative" />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
