"use client";

import React from "react";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";

export const BentoLaunchpad: React.FC = () => {
	return (
		<section id="about" className="relative w-full bg-[#060e11] text-white scroll-mt-14">
			{/* GitHub Universe Outer Blueprint Grid Frame */}
			<div id="launchpad" className="mx-auto w-full max-w-7xl border-x border-[#2d373d] bg-[#071116] scroll-mt-14 shadow-2xl">
				{/* Top Section Header Cell with Origin & Mission */}
				<div className="border-b border-[#2d373d] px-6 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-10">
					<h2 className="max-w-4xl leading-none mb-3 text-white sm:text-4xl md:text-5xl lg:text-6xl">
						Arduino Day is where builders become <span className="text-secondary">innovators</span>
					</h2>
					<p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
						Arduino Day is the global celebration of open-source hardware, bringing together
						tinkerers, roboticists, embedded engineers, and learners across the world. In the
						Philippines, our community-organized summit serves as the meeting ground where
						students build their first circuits, researchers showcase edge AI prototypes, and
						makers exchange ideas to shape what comes next.
					</p>
				</div>

				{/* Row 1: Volunteer Cadre (Text Left, Photo Right) */}
				<div id="volunteers" className="grid grid-cols-1 border-b border-[#2d373d] lg:grid-cols-2 scroll-mt-14">
					{/* Left Column: Text & Action */}
					<div className="flex flex-col justify-between border-b border-[#2d373d] lg:border-b-0 lg:border-r">
						{/* Top Sub-cell with Code Call */}
						<div className="grid h-28 grid-cols-2 border-b border-[#2d373d] sm:h-36">
							<div className="flex items-end border-r border-[#2d373d] p-4 font-mono text-xs text-primary font-bold">
								<span>crew.volunteer()</span>
							</div>
							<div className="p-4 flex items-end justify-end font-mono text-[10px] text-white/40">
								<span>TRACK // CORE OPS</span>
							</div>
						</div>

						{/* Bottom Sub-cell: Copy & Button */}
						<div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-white sm:text-2xl">
									Join the 2027 Core Crew
								</h3>
								<p className="text-sm leading-relaxed text-white/70 sm:text-base">
									See what&apos;s new and what&apos;s next at ADPH. We are preparing to open applications for
									our volunteer crew across stage production, hardware lab logistics, live stream AV,
									and attendee experience.
								</p>
							</div>

							<div className="mt-8 pt-4">
								<a
									href="https://volunteer.arduinodayphilippines.cc/"
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 rounded border border-white/20 bg-[#21935B] px-5 py-2.5 font-mono text-xs font-bold text-white transition-all duration-150 hover:bg-[#1a7a4a] hover:shadow-[0_0_20px_rgba(33,147,91,0.4)]"
								>
									<span>Apply for 2027 Core Crew</span>
									<IconArrowUpRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</a>
							</div>
						</div>
					</div>

					{/* Right Column: Photography */}
					<div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden bg-black/50">
						<Image
							src="/images/about-1.jpg"
							alt="Community members collaborating with Arduino boards at maker summit"
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover transition-transform duration-700 hover:scale-105"
						/>
						{/* Subtle gradient overlay */}
						<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
						<div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/70 uppercase tracking-wider">
							[COMMUNITY COLLABORATION // METRO MANILA]
						</div>
					</div>
				</div>

				{/* Row 2: 2027 Partnerships (Photo Left, Text Right) - Alternating */}
				<div className="grid grid-cols-1 border-b border-[#2d373d] lg:grid-cols-2">
					{/* Left Column: Photography */}
					<div className="order-2 lg:order-1 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden border-b border-[#2d373d] lg:border-b-0 lg:border-r bg-black/50">
						<Image
							src="/images/about-3.jpg"
							alt="Speaker presenting live hardware demonstration to attendees"
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover transition-transform duration-700 hover:scale-105"
						/>
						<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
						<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-white/80 uppercase tracking-wider">
							<span>DEMOS & TALKS // SHIP & BUILD</span>
							<span className="text-secondary font-bold">STAGES 2027</span>
						</div>
					</div>

					{/* Right Column: Text & Action */}
					<div className="order-1 lg:order-2 flex flex-col justify-between">
						{/* Top Sub-cell with Code Call */}
						<div className="grid h-28 grid-cols-2 border-b border-[#2d373d] sm:h-36">
							<div className="flex items-end border-r border-[#2d373d] p-4 font-mono text-xs text-secondary font-bold">
								<span>dev.partner()</span>
							</div>
							<div className="p-4 flex items-end justify-end font-mono text-[10px] text-white/40">
								<span>SPONSOR // 2027 TIERS</span>
							</div>
						</div>

						{/* Bottom Sub-cell: Copy & Button */}
						<div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-white sm:text-2xl">
									Partner With ADPH 2027
								</h3>
								<p className="text-sm leading-relaxed text-white/70 sm:text-base">
									Position your brand, development boards, and embedded toolkits in front of
									hundreds of passionate engineers, makers, and students. Keystone, Gold, and
									Community sponsorship tiers will open soon.
								</p>
							</div>

							<div className="mt-8 pt-4">
								<div className="inline-flex items-center gap-2.5 rounded border border-secondary/40 bg-secondary/10 px-5 py-2.5 font-mono text-xs font-semibold text-secondary">
									<span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
									<span className="uppercase tracking-wider">Corporate Sponsors & Partners: Coming Soon</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Row 3: Community Merch & Host Reveal (Text Left, Photo + Pixel Mosaic Right) */}
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{/* Left Column: Text & Action */}
					<div className="flex flex-col justify-between border-b border-[#2d373d] lg:border-b-0 lg:border-r">
						{/* Top Sub-cell with Code Call */}
						<div className="grid h-28 grid-cols-2 border-b border-[#2d373d] sm:h-36">
							<div className="flex items-end border-r border-[#2d373d] p-4 font-mono text-xs text-[#F2BC51] font-bold">
								<span>community.connect()</span>
							</div>
							<div className="p-4 flex items-end justify-end font-mono text-[10px] text-white/40">
								<span>CHAPTER // MERCH & LABS</span>
							</div>
						</div>

						{/* Bottom Sub-cell: Copy & Button */}
						<div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-white sm:text-2xl">
									Connect With The Community
								</h3>
								<p className="text-sm leading-relaxed text-white/70 sm:text-base">
									Meet collaborators, robotics developers, and open-source leaders you&apos;ll stay
									connected to long after the summit wraps. Commemorative hardware badges and official 2027 summit gear are in production.
								</p>
							</div>

							<div className="mt-8 pt-4">
								<div className="inline-flex items-center gap-2.5 rounded border border-[#F2BC51]/40 bg-[#F2BC51]/10 px-5 py-2.5 font-mono text-xs font-semibold text-[#F2BC51]">
									<span className="h-2 w-2 rounded-full bg-[#F2BC51] animate-pulse" />
									<span className="uppercase tracking-wider">Official Merch Store: Coming Soon</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Pixel Mosaic Header + Photography matching screenshot */}
					<div className="flex flex-col">
						{/* GitHub Universe 2026 Pixel Banner matching exact screenshot layout */}
						<div className="grid h-28 sm:h-36 grid-cols-8 grid-rows-3 border-b border-[#2d373d] bg-[#061116] p-3 gap-1.5 overflow-hidden">
							{/* Row 1 */}
							<div className="rounded-sm bg-[#21935B]" />
							<div className="rounded-sm bg-transparent" />
							<div className="rounded-sm bg-[#EE7402]" />
							<div className="rounded-sm bg-[#EE7402]" />
							<div className="rounded-sm bg-[#F2BC51]" />
							<div className="rounded-sm bg-[#F2BC51]" />
							<div className="rounded-sm bg-[#008080]" />
							<div className="rounded-sm bg-transparent" />

							{/* Row 2 */}
							<div className="rounded-sm bg-[#21935B]" />
							<div className="rounded-sm bg-[#21935B]" />
							<div className="rounded-sm bg-[#EE7402]" />
							<div className="rounded-sm bg-[#EE7402]" />
							<div className="rounded-sm bg-transparent" />
							<div className="rounded-sm bg-[#F2BC51]" />
							<div className="rounded-sm bg-[#008080]" />
							<div className="rounded-sm bg-[#008080]" />

							{/* Row 3 */}
							<div className="rounded-sm bg-transparent" />
							<div className="rounded-sm bg-[#21935B]" />
							<div className="rounded-sm bg-transparent" />
							<div className="rounded-sm bg-[#EE7402]" />
							<div className="rounded-sm bg-[#F2BC51]" />
							<div className="rounded-sm bg-transparent" />
							<div className="rounded-sm bg-[#008080]" />
							<div className="rounded-sm bg-[#008080]" />
						</div>

						{/* Photo Below Pixel Banner */}
						<div className="relative min-h-[260px] sm:min-h-[320px] flex-1 overflow-hidden bg-black/50">
							<Image
								src="/images/about-2.jpg"
								alt="Hands-on workshop table with Arduino microcontrollers and components"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover transition-transform duration-700 hover:scale-105"
							/>
							<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
							<div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/80 uppercase tracking-wider">
								[HANDS-ON TINKERING // BREADBOARDS & SENSORS]
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
