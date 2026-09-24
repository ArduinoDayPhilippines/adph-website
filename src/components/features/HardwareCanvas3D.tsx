"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const HardwareCanvas3D: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// 1. Scene & Camera setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			45,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 5);

		// 2. Renderer setup
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: "high-performance",
		});
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.3;
		container.appendChild(renderer.domElement);

		// 3. Lighting setup
		const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
		scene.add(ambientLight);

		const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
		mainLight.position.set(5, 8, 6);
		scene.add(mainLight);

		const fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
		fillLight.position.set(-5, -4, -4);
		scene.add(fillLight);

		// Brand accent point lights
		const tealLight = new THREE.PointLight(0x008080, 5, 12);
		tealLight.position.set(-2, 3, 3);
		scene.add(tealLight);

		const orangeLight = new THREE.PointLight(0xee7402, 4, 12);
		orangeLight.position.set(3, -2, 3);
		scene.add(orangeLight);

		// 4. Model Root Group
		const modelGroup = new THREE.Group();
		scene.add(modelGroup);

		// 5. Load the real Arduino 3D model
		const loader = new GLTFLoader();
		let isMounted = true;

		loader.load(
			"/models/arduino.glb",
			(gltf) => {
				if (!isMounted) return;
				const model = gltf.scene;

				// Center and auto-scale model to fit viewport nicely
				const box = new THREE.Box3().setFromObject(model);
				const center = box.getCenter(new THREE.Vector3());
				const size = box.getSize(new THREE.Vector3());

				model.position.x = -center.x;
				model.position.y = -center.y;
				model.position.z = -center.z;

				const maxDim = Math.max(size.x, size.y, size.z);
				const targetSize = 2.6; // Scale nicely within viewport
				const scaleFactor = targetSize / maxDim;
				modelGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);

				// Base angled orientation (facing user slightly from an angle)
				modelGroup.rotation.x = 0.35;
				modelGroup.rotation.y = -0.45;

				modelGroup.add(model);
				setLoading(false);
			},
			undefined,
			(error) => {
				console.error("Failed to load /models/arduino.glb:", error);
				// Fallback to scene.gltf if arduino.glb has an issue
				loader.load("/models/scene.gltf", (fallbackGltf) => {
					if (!isMounted) return;
					const fallbackModel = fallbackGltf.scene;
					const box = new THREE.Box3().setFromObject(fallbackModel);
					const center = box.getCenter(new THREE.Vector3());
					const size = box.getSize(new THREE.Vector3());
					fallbackModel.position.sub(center);
					const scale = 2.6 / Math.max(size.x, size.y, size.z);
					modelGroup.scale.set(scale, scale, scale);
					modelGroup.rotation.x = 0.35;
					modelGroup.rotation.y = -0.45;
					modelGroup.add(fallbackModel);
					setLoading(false);
				});
			}
		);

		// 6. Interaction & Mouse tilt
		let targetRotationX = 0.35;
		let targetRotationY = -0.45;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;

			targetRotationY = x * 0.9 - 0.45;
			targetRotationX = -y * 0.7 + 0.35;
		};

		window.addEventListener("mousemove", handleMouseMove);

		// 7. Render Loop
		let animId: number;
		const clock = new THREE.Clock();

		const animate = () => {
			animId = requestAnimationFrame(animate);
			const elapsedTime = clock.getElapsedTime();

			// Subtle idle floating motion
			const idleX = Math.sin(elapsedTime * 0.8) * 0.05;
			const idleY = Math.cos(elapsedTime * 0.6) * 0.08;
			const idleZ = Math.sin(elapsedTime * 0.5) * 0.05;

			modelGroup.rotation.x += (targetRotationX + idleX - modelGroup.rotation.x) * 0.05;
			modelGroup.rotation.y += (targetRotationY + idleY - modelGroup.rotation.y) * 0.05;
			modelGroup.position.y = idleZ * 0.2;

			// Ambient pulse
			const pulse = (Math.sin(elapsedTime * 3) + 1) / 2;
			tealLight.intensity = 4 + pulse * 2;
			orangeLight.intensity = 3 + (1 - pulse) * 2;

			renderer.render(scene, camera);
		};
		animate();

		// 8. Handle Resize
		const handleResize = () => {
			if (!container) return;
			const width = container.clientWidth;
			const height = container.clientHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			isMounted = false;
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animId);
			renderer.dispose();
			if (container.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div className="relative flex h-[360px] w-full max-w-[500px] items-center justify-center sm:h-[420px] md:h-[480px]">

			{/* Loading placeholder spinner while GLB is loading */}
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent shadow-[0_0_12px_#008080]" />
				</div>
			)}

			{/* 3D Canvas Container */}
			<div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing" />
		</div>
	);
};

