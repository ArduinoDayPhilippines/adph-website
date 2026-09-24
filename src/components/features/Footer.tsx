"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
	IconBrandLinkedin,
	IconBrandInstagram,
	IconBrandYoutube,
	IconBrandX,
	IconBrandTiktok,
	IconBrandTwitch,
	IconBrandGithub,
	IconBrandFacebook,
	IconArrowUpRight,
	IconCheck,
} from "@tabler/icons-react";

export default function Footer() {
	const [ignored, setIgnored] = useState(false);

	const handleGitIgnoreClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setIgnored(true);
		if (navigator.clipboard) {
			navigator.clipboard.writeText('echo "featured-partners/" >> .gitignore');
		}
		setTimeout(() => setIgnored(false), 3000);
	};

	const legalAndNavLinks = [
		{ label: "About", href: "#about" },
		{ label: "Launchpad", href: "#launchpad" },
		{ label: "Volunteers", href: "https://volunteer.arduinodayphilippines.cc/", external: true },
		{ label: "Partner with Us", href: "#partner-with-us", comingSoon: true },
		{ label: "Archive", href: "#archive" },
		{ label: "Merch", href: "#merch", comingSoon: true },
		{ label: "Inquiries", href: "mailto:arduinodayph@gmail.com" },
	];

	const socialLinks = [
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/arduinodayph",
			icon: IconBrandLinkedin,
		},
		{
			name: "Instagram",
			href: "https://instagram.com/arduinodayph",
			icon: IconBrandInstagram,
		},
		{
			name: "YouTube",
			href: "https://youtube.com/@arduinodayph",
			icon: IconBrandYoutube,
		},
		{
			name: "X (Twitter)",
			href: "https://x.com/arduinodayph",
			icon: IconBrandX,
		},
		{
			name: "TikTok",
			href: "https://www.tiktok.com/@arduinodayph",
			icon: IconBrandTiktok,
		},
		{
			name: "Twitch",
			href: "https://twitch.tv/arduinodayph",
			icon: IconBrandTwitch,
		},
		{
			name: "GitHub",
			href: "https://github.com/ArduinoDayPhilippines",
			icon: IconBrandGithub,
		},
		{
			name: "Facebook",
			href: "https://www.facebook.com/arduinodayph",
			icon: IconBrandFacebook,
		},
	];

	return (
		<footer className="relative w-full bg-[#061116] text-white font-mono text-xs">
			<div className="mx-auto w-full max-w-7xl border-x border-[#2d373d] bg-[#071116]">
				{/* Navigation & Legal Links Shelf */}
				{/* Mobile: Centered Vertical Stack matching GitHub Universe Screenshot */}
				{/* Desktop (md+): Grid Bar with vertical dividing cell borders */}
				<div className="border-b border-[#2d373d]">
					{/* Mobile Vertical View */}
					<div className="flex flex-col items-center justify-center py-6 px-4 space-y-3.5 text-center md:hidden">
						<div className="text-white/50 text-xs tracking-tight">
							<span>&copy; 2027 Arduino Day Philippines</span>
						</div>
						{legalAndNavLinks.map((link) =>
							link.comingSoon ? (
								<div key={link.label} className="inline-flex items-center gap-2 text-white/40 cursor-default select-none">
									<span>{link.label}</span>
									<span className="rounded border border-secondary/40 bg-secondary/10 px-1.5 py-0.5 text-[9px] font-bold text-secondary uppercase leading-none">
										Soon
									</span>
								</div>
							) : link.external ? (
								<Link
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/80 hover:text-white transition-colors"
								>
									{link.label}
								</Link>
							) : (
								<a
									key={link.label}
									href={link.href}
									className="text-white/80 hover:text-white transition-colors"
								>
									{link.label}
								</a>
							)
						)}
					</div>

					{/* Desktop Horizontal Blueprint Cells */}
					<div className="hidden md:flex flex-wrap items-stretch divide-x divide-white/10">
						<div className="flex items-center px-5 py-3.5 text-white/50 text-[11px] sm:text-xs tracking-tight">
							<span>&copy; 2027 Arduino Day Philippines</span>
						</div>
						{legalAndNavLinks.map((link) => (
							<div key={link.label} className="flex items-center">
								{link.comingSoon ? (
									<span className="flex items-center gap-2 px-5 py-3.5 text-white/30 cursor-default select-none">
										{link.label}
										<span className="rounded border border-secondary/40 bg-secondary/10 px-1.5 py-0.5 text-[9px] font-bold text-secondary uppercase leading-none">
											Soon
										</span>
									</span>
								) : link.external ? (
									<Link
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="px-5 py-3.5 text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
									>
										{link.label}
									</Link>
								) : (
									<a
										href={link.href}
										className="px-5 py-3.5 text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
									>
										{link.label}
									</a>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Bottom Row: Social Icons Bar & Terminal Cell */}
				{/* Mobile: Centered Row of Icons -> Full-width Terminal Cell */}
				{/* Desktop: Icons Left -> Terminal Cell Right */}
				<div className="flex flex-col md:flex-row items-stretch justify-between">
					{/* Social Media Icons */}
					<div className="flex items-center justify-center md:justify-start flex-wrap gap-2 px-6 py-4 sm:px-8 border-b md:border-b-0 border-[#2d373d]">
						{socialLinks.map((item) => {
							const Icon = item.icon;
							return (
								<a
									key={item.name}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={item.name}
									className="p-2 text-white/70 hover:text-white hover:bg-white/[0.06] rounded transition-all duration-150"
								>
									<Icon className="h-4 w-4" />
								</a>
							);
						})}
					</div>

					{/* GitHub Universe Easter Egg Terminal Cell */}
					<div className="relative flex items-stretch justify-center md:justify-end md:border-l border-[#2d373d] bg-white/[0.01]">
						{/* Interactive button that copies command and links / triggers easter egg */}
						<button
							onClick={handleGitIgnoreClick}
							className="group flex flex-1 md:flex-initial items-center justify-center gap-2.5 px-6 py-4 text-xs text-white/80 hover:text-white hover:bg-white/[0.04] transition-all"
							title="Click to copy command"
						>
							{ignored ? (
								<>
									<IconCheck className="h-3.5 w-3.5 text-[#21935B]" />
									<span className="text-[#21935B] font-semibold">Added to .gitignore!</span>
								</>
							) : (
								<>
									<span className="font-mono text-white/90">
										echo &quot;featured-partners/&quot; &gt;&gt; .gitignore
									</span>
									<IconArrowUpRight className="h-3.5 w-3.5 text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</>
							)}
						</button>

						{/* Green Accent Right Border */}
						<div className="w-1 bg-[#21935B] shadow-[0_0_8px_rgba(33,147,91,0.6)]" />
					</div>
				</div>
			</div>
		</footer>
	);
}
