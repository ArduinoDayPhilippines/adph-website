"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/adph-logo.png";
import { IconMapPin, IconCalendarEvent } from "@tabler/icons-react";

export const Hero = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isClient, setIsClient] = useState(false);

	const handleMouseMove = useCallback((event: MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	}, []);

	useEffect(() => {
		setIsClient(true);
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	const tiltX = isClient
		? ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 12
		: 0;
	const tiltY = isClient
		? ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * -12
		: 0;
	const moveX = isClient
		? (mousePosition.x - window.innerWidth / 2) * 0.02
		: 0;
	const moveY = isClient
		? (mousePosition.y - window.innerHeight / 2) * 0.02
		: 0;

	return (
		<section className="relative w-full overflow-hidden">
			<div className="relative mx-auto box-border w-full max-w-6xl px-6 pt-8 pb-6 sm:pt-10 sm:pb-8 md:px-8 md:pt-14 md:pb-12 lg:px-12 lg:pt-16 lg:pb-14">
				<div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
					{/* Content - left on desktop, stacks below logo on mobile */}
					<div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
						{/* Date & venue */}
						<div className="mb-4 flex flex-col items-center gap-1.5 sm:mb-6 sm:flex-row sm:gap-4 md:mb-8 lg:justify-start">
							<div className="flex items-center gap-1.5 sm:gap-2">
								<IconCalendarEvent className="h-4 w-4 shrink-0 text-secondary/80" />
								<span className="text-sm font-semibold tracking-wide text-white md:text-base">
									March 21, 2026
								</span>
							</div>
							<div className="flex items-center gap-1.5 sm:gap-2">
								<IconMapPin className="h-4 w-4 shrink-0 text-secondary/80" />
								<span className="text-sm font-medium text-white/60 md:text-base">
									Asia Pacific College, Makati
								</span>
							</div>
						</div>

						{/* Headline */}
						<h1 className="mb-4 text-[2.75rem] font-bold leading-[1.1] sm:mb-5 sm:text-[3rem] md:mb-6 md:text-[3.25rem] lg:text-7xl" suppressHydrationWarning>
							<span className="text-primary">Arduino</span>{" "}<span className="text-secondary">Day</span>
							<br />
							<span className="text-[#21935B]">Philippines</span> 2026
						</h1>

						{/* Subtitle */}
						<p className="mb-6 text-sm leading-relaxed text-white/50 sm:mb-8 sm:max-w-lg md:mb-10 md:text-base lg:text-lg">
							A day of talks, demos, and community-led sessions for builders,
							creators, and tinkerers. Join us and help shape what comes next.
						</p>

					{/* CTA buttons */}
					<div className="flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:justify-start">
						<Link
							href="https://bit.ly/adph2026-partnerships"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full bg-primary/90 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary sm:px-8 sm:py-3 sm:text-sm lg:px-10 lg:py-4"
						>
							Partner With Us
						</Link>
						<Link
							href="https://merch.arduinodayphilippines.cc/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full border border-white/[0.08] px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white/80 transition-all hover:border-white/20 hover:text-white sm:px-8 sm:py-3 sm:text-sm lg:px-10 lg:py-4"
						>
							Support Us with Merch
						</Link>
					</div>
					</div>

					{/* Logo with parallax - right on desktop, top on mobile */}
					<div className="order-1 hidden items-center justify-center lg:order-2 lg:flex lg:-ml-8">
						<div
							className="relative"
							style={{
								transform: `perspective(600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateX(${moveX}px) translateY(${moveY}px)`,
								transition: "transform 0.1s ease-out",
								pointerEvents: "none",
							}}
						>
							<div
								className="absolute inset-0 m-auto h-36 w-36 rounded-full blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
								style={{ background: "radial-gradient(circle, rgba(0,128,128,0.08) 0%, rgba(238,116,2,0.03) 70%, transparent 85%)" }}
								aria-hidden
							/>
							<Image
								src={Logo}
								alt="Arduino Day Philippines logo"
								className="relative h-32 w-32 object-contain sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
