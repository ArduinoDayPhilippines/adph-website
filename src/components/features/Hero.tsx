"use client";

import React from "react";
import { HardwareCanvas3D } from "./HardwareCanvas3D";
import { IconArrowUpRight, IconCpu } from "@tabler/icons-react";

export const Hero: React.FC = () => {
	return (
		<section className="relative w-full border-b border-[#2d373d] bg-[#060e11] text-white overflow-hidden">
			{/* Ambient Soft Blur Glow Accent behind Hero */}
			<div
				aria-hidden
				className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[650px] max-w-full rounded-full bg-linear-to-r from-[#21935B]/15 via-[#008080]/15 to-[#EE7402]/10 blur-[140px]"
			/>

			{/* GitHub Universe Outer Blueprint Grid Frame */}
			<div className="relative mx-auto w-full max-w-7xl border-x border-[#2d373d] bg-[#071116] shadow-2xl">
				{/* Row 1: Massive Wall-to-Wall Display Headline matching exact 4-color mosaic palette */}
				<div className="border-b border-[#2d373d] px-4 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 overflow-hidden">
					<h1 className="whitespace-nowrap font-black tracking-tighter uppercase select-none leading-none text-[5.2vw] xl:text-[5rem]">
						<span className="text-[#21935B] drop-shadow-[0_0_35px_rgba(33,147,91,0.35)]">ARDUINO </span>
						<span className="text-[#EE7402] drop-shadow-[0_0_35px_rgba(238,116,2,0.35)]">DAY </span>
						<span className="text-[#F2BC51] drop-shadow-[0_0_35px_rgba(242,188,81,0.35)]">PHILIPPINES </span>
						<span className="text-[#008080] drop-shadow-[0_0_35px_rgba(0,128,128,0.35)]">&apos;27</span>
					</h1>
				</div>

				{/* Row 2: Two-Column Split Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{/* Left Column: Interactive 3D Hardware Centerpiece Viewport */}
					<div className="relative flex min-h-[380px] items-center justify-center border-b border-[#2d373d] p-6 sm:min-h-[440px] sm:p-8 lg:min-h-[520px] lg:border-b-0 lg:border-r bg-[#071116]">
						{/* Soft Radial Ambient Behind 3D Uno */}
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 flex items-center justify-center"
						>
							<div className="h-[280px] w-[280px] rounded-full bg-[#008080]/15 blur-[80px]" />
						</div>

						{/* The 3D Interactive Board */}
						<div className="relative z-10 w-full flex items-center justify-center">
							<HardwareCanvas3D />
						</div>
					</div>

					{/* Right Column: Clean Universe Layout matching GitHub Universe 2026 */}
					<div className="flex flex-col justify-between bg-white/[0.01]">
						{/* Top Telemetry Row */}
						<div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2d373d] px-4 py-3 sm:px-8 sm:py-4 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-white/70">
							<div className="flex items-center gap-2">
								<span className="text-secondary font-bold">{"/" + "/"}</span>
								<span>COMING 2027 / METRO MANILA, PH</span>
							</div>
							<div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px]">
								<span className="text-primary font-medium">IN-PERSON & VIRTUAL</span>
								<span className="h-2 w-2 rounded-sm bg-[#21935B] shadow-[0_0_8px_#21935B]" />
							</div>
						</div>

						{/* Main Content Area */}
						<div className="flex flex-1 flex-col justify-center px-5 py-6 sm:px-10 sm:py-10 lg:px-12">
							<div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-secondary uppercase">
								<IconCpu className="h-4 w-4 text-secondary" />
								<span>WHERE CODE MEETS COPPER</span>
							</div>

							<h2 className="mb-4 text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[34px]">
								The Philippines&apos; premier gathering of embedded engineers, makers, and roboticists.
							</h2>

							<p className="mb-8 text-sm leading-relaxed text-white/70 sm:text-base max-w-xl">
								Arduino Day is returning for its 2027 edition. Join us from the ground up as a
								volunteer or community partner to shape the country&apos;s largest celebration of
								open hardware and physical computing.
							</p>

							{/* Clean Full-Width Volunteer CTA matching GitHub Universe 'Get passes' button */}
							<div className="space-y-4 max-w-xl">
								<a
									href="https://volunteer.arduinodayphilippines.cc/"
									target="_blank"
									rel="noopener noreferrer"
									className="group flex w-full items-center justify-between rounded-none border border-white/20 bg-[#21935B] px-5 py-3.5 sm:px-6 sm:py-4 font-mono text-xs sm:text-sm font-bold tracking-wider text-white uppercase transition-all duration-200 hover:bg-[#1a7a4a] hover:shadow-[0_0_25px_rgba(33,147,91,0.5)]"
								>
									<span>APPLY TO VOLUNTEER</span>
									<IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
								</a>

								{/* Secondary Link: Corporate Sponsors & Partners */}
								<div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
									<div className="inline-flex items-center gap-2 text-white/70">
										<span className="font-semibold text-white/90">Corporate Sponsors & Partners:</span>
										<span className="rounded border border-secondary/40 bg-secondary/10 px-2 py-0.5 text-[10px] font-bold text-secondary uppercase">
											Coming Soon
										</span>
									</div>
									<span className="text-white/40">[PHASE: PRE-SEASON]</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
