"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../public/assets/adph-logo.png";

export const Hero = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const tiltX = typeof window !== 'undefined'
		? ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 18
		: 0;
	const tiltY = typeof window !== 'undefined'
		? ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * -18
		: 0;

	const moveX = typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.03 : 0;
	const moveY = typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) * 0.03 : 0;

	return (
		<section className="relative overflow-hidden pt-12 md:pt-16">
			<div className="container relative flex flex-col gap-6 py-12 md:gap-10 md:py-24 lg:py-28">
				<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
					<div className="flex flex-col gap-3 md:gap-4">
						<div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur md:gap-3 md:px-4 md:py-2 md:text-xs">
							<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(0,178,178,0.18)] animate-pulse md:h-2 md:w-2 md:shadow-[0_0_0_6px_rgba(0,178,178,0.18)]" />
							<span className="whitespace-nowrap">Arduino Day Philippines 2026</span>
						</div>
						<h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
							Build, prototype, and share what comes next.
						</h1>
						<p className="text-sm text-white/70 md:text-base lg:text-lg">
							Date and venue are coming soon. We are shaping a focused program of talks, demos, and community-led sessions. Join the list to get the drop first.
						</p>
						<div className="flex flex-wrap items-center gap-3 pt-2">
							<Link href="https://arduinodayph.pwapilipinas.org/">
								<Button className="px-5 py-2.5 text-sm md:px-6 md:py-3 lg:px-8 lg:py-4 lg:text-base">Get updates</Button>
							</Link>
							<Link
								href="#faqs"
								className="rounded-full border border-white/15 px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary md:px-5 md:py-3 md:text-sm"
							>
								View FAQs
							</Link>
						</div>
					</div>

					<div className="relative flex items-center justify-center lg:justify-end">
						<div
							className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
							style={{
								transform: `perspective(520px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
								transition: "transform 0.08s ease-out",
								pointerEvents: "none",
							}}
						>
							<Image
								src={Logo}
								alt="Arduino Day Philippines logo"
								className="h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 object-contain"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
