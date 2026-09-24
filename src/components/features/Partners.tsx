"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { sponsors } from "@/data/index";
import { IconArrowUpRight, IconSearch } from "@tabler/icons-react";

interface SponsorItem {
	name: string;
	path_to_image?: string;
	website?: string;
	tier?: string;
	radius?: number;
}

const TABS = [
	{ id: "all", label: "all-partners/" },
	{ id: "keystone", label: "keystone-sponsors/" },
	{ id: "venue", label: "venue-partner/" },
	{ id: "gold", label: "gold-sponsors/" },
	{ id: "media", label: "media-partners/" },
	{ id: "community", label: "community-partners/" },
];

const SECTIONS = [
	{
		id: "keystone-venue",
		title: "keystone-&-venue-partners/",
		badge: "PREMIER",
		tiers: ["keystone", "venue"],
		cardClass: "grid-cols-1 sm:grid-cols-2",
		aspectRatio: "aspect-[16/9] sm:aspect-[2/1]",
		logoPadding: "p-6 sm:p-10",
	},
	{
		id: "gold",
		title: "gold-sponsors/",
		badge: "GOLD",
		tiers: ["gold"],
		cardClass: "grid-cols-1 sm:grid-cols-2",
		aspectRatio: "aspect-[16/9] sm:aspect-[2/1]",
		logoPadding: "p-6 sm:p-8",
	},
	{
		id: "media",
		title: "media-partners/",
		badge: "MEDIA",
		tiers: ["media"],
		cardClass: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
		aspectRatio: "aspect-[4/3]",
		logoPadding: "p-4 sm:p-6",
	},
	{
		id: "community",
		title: "community-partners/",
		badge: "COMMUNITY",
		tiers: ["community"],
		cardClass: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
		aspectRatio: "aspect-[4/3]",
		logoPadding: "p-3 sm:p-4",
	},
];

export default function Partners() {
	const [activeTab, setActiveTab] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredSponsors = useMemo(() => {
		return sponsors.filter((item: SponsorItem) => {
			const matchesTab = activeTab === "all" || item.tier === activeTab;
			const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesTab && matchesQuery;
		});
	}, [activeTab, searchQuery]);

	const renderCard = (sponsor: SponsorItem, index: number, aspectRatio = "aspect-[4/3]", logoPadding = "p-4") => {
		const CardWrapper = sponsor.website ? "a" : "div";
		const cardProps = sponsor.website
			? {
					href: sponsor.website,
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": `Visit ${sponsor.name}`,
			  }
			: {};

		return (
			<CardWrapper
				key={`${sponsor.name}-${index}`}
				{...cardProps}
				className="group relative flex flex-col justify-between border-r border-b border-[#2d373d] bg-[#08151a]/60 backdrop-blur-md transition-all duration-200 hover:bg-[#0c1f24]"
			>
				{/* Image Area with full color in base state, brightness/scale on hover */}
				<div className={`relative ${aspectRatio} w-full overflow-hidden ${logoPadding} flex items-center justify-center bg-black/20`}>
					{sponsor.path_to_image ? (
						<Image
							src={sponsor.path_to_image}
							alt={sponsor.name}
							fill
							sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
							className={`object-contain p-2 opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 ${
								sponsor.radius ? "rounded-full" : ""
							}`}
						/>
					) : (
						<span className="font-mono text-xs font-bold tracking-wider text-primary text-center px-2">
							{sponsor.name}
						</span>
					)}

					{/* Subtle inner grid lines on hover */}
					<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/[0.04]" />
				</div>

				{/* Bottom Caption Strip */}
				<div className="flex items-center justify-between border-t border-[#2d373d] bg-black/40 px-3 py-2 font-mono text-[11px] text-white/70">
					<div className="truncate pr-2">
						<span className="font-semibold text-white/90 group-hover:text-primary transition-colors">
							{sponsor.name.toLowerCase()}
						</span>
						<span className="text-white/40">, {sponsor.tier || "partner"}</span>
					</div>
					{sponsor.website && (
						<IconArrowUpRight className="h-3 w-3 shrink-0 text-white/40 group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					)}
				</div>
			</CardWrapper>
		);
	};

	return (
		<section id="archive" className="relative w-full bg-[#060e11] text-white">
			{/* GitHub Universe Grid Container */}
			<div className="mx-auto w-full max-w-7xl border-x border-[#2d373d] bg-[#071116] shadow-2xl">
				{/* Top Section Header: refined compact size */}
				<div className="border-b border-[#2d373d] px-6 py-5 sm:px-10 sm:py-6 lg:px-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						{/* Path-style heading matching screenshot: smaller compact typography */}
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight lowercase text-white">
							featured-partners<span className="text-secondary">/</span>
						</h2>
					</div>

					{/* 2027 Inquiries Pill */}
					<div className="flex items-center gap-3">
						<div className="inline-flex items-center gap-2 rounded border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold text-primary">
							<span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
							<span>PARTNERSHIPS: COMING SOON</span>
						</div>
					</div>
				</div>

				{/* Filter Tabs Bar (Universe path-style tabs + Search) */}
				<div className="flex flex-wrap items-center justify-between border-b border-[#2d373d] bg-white/[0.01]">
					{/* Path-style Category Tabs */}
					<div className="flex flex-wrap items-stretch">
						{TABS.map((tab) => {
							const count =
								tab.id === "all"
									? sponsors.length
									: sponsors.filter((s: SponsorItem) => s.tier === tab.id).length;
							if (count === 0 && tab.id !== "all") return null;

							const isActive = activeTab === tab.id;
							return (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`flex items-center gap-2 border-r border-b sm:border-b-0 border-[#2d373d] px-4 py-3 font-mono text-xs transition-colors ${
										isActive
											? "bg-primary/20 text-primary font-bold shadow-[inset_0_-2px_0_#008080]"
											: "text-white/60 hover:bg-white/[0.04] hover:text-white"
									}`}
								>
									<span>{tab.label}</span>
									<span className="text-[10px] text-white/40">[{count}]</span>
								</button>
							);
						})}
					</div>

					{/* Inline Quick Search */}
					<div className="relative flex items-center border-t sm:border-t-0 sm:border-l border-[#2d373d] px-4 py-2 w-full sm:w-auto">
						<IconSearch className="h-3.5 w-3.5 text-white/40 mr-2 shrink-0" />
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="filter name..."
							className="bg-transparent font-mono text-xs text-white placeholder-white/40 focus:outline-none w-36"
						/>
						{searchQuery && (
							<button
								onClick={() => setSearchQuery("")}
								className="ml-1 text-[10px] font-mono text-secondary hover:underline"
							>
								clear
							</button>
						)}
					</div>
				</div>

				{/* Content Shelf: Tiered Sections or Filtered Grid */}
				{activeTab === "all" && !searchQuery ? (
					// Tiered sections priority: Keystone & Venue -> Gold -> Media -> Community
					<div className="divide-y divide-[#2d373d]">
						{SECTIONS.map((sec) => {
							const secSponsors = sponsors.filter((s: SponsorItem) =>
								sec.tiers.includes(s.tier || "")
							);
							if (secSponsors.length === 0) return null;

							return (
								<div key={sec.id} className="flex flex-col">
									{/* Section Divider Bar */}
									<div className="flex items-center justify-between border-b border-[#2d373d] bg-white/[0.02] px-6 py-2.5 font-mono text-xs">
										<div className="flex items-center gap-2">
											<span className="font-bold text-white/90">{sec.title}</span>
											<span className="text-[10px] text-white/40">[{secSponsors.length}]</span>
										</div>
										<span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary tracking-wider uppercase">
											{sec.badge}
										</span>
									</div>

									{/* Section Grid Shelf */}
									<div className={`grid ${sec.cardClass}`}>
										{secSponsors.map((sponsor, idx) =>
											renderCard(sponsor, idx, sec.aspectRatio, sec.logoPadding)
										)}
									</div>
								</div>
							);
						})}
					</div>
				) : (
					// Tab filtered or search filtered grid
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
						{filteredSponsors.map((sponsor: SponsorItem, index: number) =>
							renderCard(sponsor, index)
						)}
					</div>
				)}

				{filteredSponsors.length === 0 && (
					<div className="p-12 text-center font-mono text-sm text-white/50">
						no partners matching &quot;{searchQuery}&quot; in this view.
					</div>
				)}
			</div>
		</section>
	);
}
