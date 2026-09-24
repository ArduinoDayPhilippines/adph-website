"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTextScramble } from "@/lib/useTextScramble";
import { IconArrowUpRight, IconMenu2, IconX, IconMail } from "@tabler/icons-react";

interface NavItemProps {
	href: string;
	label: string;
	onClick: (href: string) => void;
	comingSoon?: boolean;
}

function GridNavLink({ href, label, onClick }: NavItemProps) {
	const { displayText, trigger } = useTextScramble(label, { speed: 25, scrambleDuration: 300 });

	return (
		<Link
			href={href}
			onMouseEnter={trigger}
			onClick={(e) => {
				e.preventDefault();
				onClick(href);
			}}
			className="flex h-full items-center border-r border-[#2d373d] px-5 py-4 font-mono text-xs font-medium tracking-wider text-white/70 uppercase transition-all duration-200 hover:bg-white/[0.06] hover:text-primary"
		>
			<span>{displayText}</span>
		</Link>
	);
}

function GridNavLinkSoon({ label }: Pick<NavItemProps, "label">) {
	return (
		<span className="flex h-full items-center gap-2 border-r border-[#2d373d] px-5 py-4 font-mono text-xs font-medium tracking-wider text-white/30 uppercase cursor-default select-none">
			{label}
			<span className="rounded border border-secondary/40 bg-secondary/10 px-1.5 py-0.5 text-[9px] font-bold text-secondary uppercase leading-none">
				Soon
			</span>
		</span>
	);
}

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#launchpad", label: "Launchpad" },
		{ href: "#volunteers", label: "Volunteers" },
		{ href: "#partner-with-us", label: "Partner with Us", comingSoon: true },
		{ href: "#archive", label: "2026 Archive" },
		{ href: "#faqs", label: "FAQ" },
		{ href: "#merch", label: "Merch", comingSoon: true },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	const handleNavItemClick = (href: string) => {
		closeMenu();
		window.history.pushState(null, "", href);
		const targetElement = document.querySelector(href);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header
			className={`sticky top-0 z-50 w-full border-b border-[#2d373d] transition-all duration-200 ${
				scrolled
					? "bg-[#061116]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
					: "bg-[#061116]/70 backdrop-blur-md"
			}`}
		>
			{/* GitHub Universe Grid Bar with Brand Highlights */}
			<div className="mx-auto flex h-14 w-full max-w-7xl items-stretch justify-between border-x border-[#2d373d]">
				{/* Left Cell: Logo Mark */}
				<div className="flex items-center border-r border-[#2d373d] px-4 sm:px-6">
					<Link href="/" className="flex items-center">
						<Image
							src="/assets/logo.png"
							alt="Arduino Day Philippines Logo"
							width={140}
							height={40}
							className="h-7 w-auto object-contain"
							priority
						/>
					</Link>
				</div>

				{/* Middle Navigation Cells (Universe Blueprint Grid) */}
				<nav className="hidden items-stretch lg:flex flex-1" aria-label="Primary navigation">
					{navItems.map((item) =>
						item.comingSoon ? (
							<GridNavLinkSoon key={item.href} label={item.label} />
						) : (
							<GridNavLink
								key={item.href}
								href={item.href}
								label={item.label}
								onClick={handleNavItemClick}
							/>
						)
					)}
				</nav>

				{/* Right Side Cells */}
				<div className="flex items-stretch">
					{/* Secondary Action: Inquiries */}
					<a
						href="mailto:arduinodayph@gmail.com"
						className="hidden items-center gap-2 border-l border-[#2d373d] px-5 font-mono text-xs font-medium text-white/70 uppercase transition-all duration-200 hover:bg-white/[0.06] hover:text-secondary md:flex"
					>
						<IconMail className="h-4 w-4 text-secondary/80" />
						<span>Contact</span>
					</a>

					{/* Primary Full-Height CTA Button (Emerald Green like original ADPH Join Us) */}
					<a
						href="https://volunteer.arduinodayphilippines.cc/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 border-l border-[#2d373d] bg-[#21935B] px-5 sm:px-7 font-mono text-xs font-bold tracking-wider text-white uppercase transition-all duration-200 hover:bg-[#1a7a4a] hover:shadow-[0_0_20px_rgba(33,147,91,0.4)]"
					>
						<span>Volunteer &apos;27</span>
						<IconArrowUpRight className="h-4 w-4" />
					</a>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="flex items-center justify-center border-l border-[#2d373d] px-4 text-white transition-colors hover:bg-white/[0.08] lg:hidden"
						aria-controls="mobile-nav"
						aria-expanded={isMenuOpen}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? <IconX className="h-5 w-5 text-secondary" /> : <IconMenu2 className="h-5 w-5" />}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Panel */}
			{isMenuOpen && (
				<div
					id="mobile-nav"
					className="border-b border-[#2d373d] bg-[#0c181d]/95 px-4 py-4 backdrop-2xl lg:hidden animate-in fade-in duration-150"
				>
					<div className="mx-auto max-w-7xl flex flex-col divide-y divide-white/[0.08]">
						{navItems.map((item) =>
							item.comingSoon ? (
								<span
									key={item.href}
									className="flex items-center justify-between py-3 font-mono text-xs uppercase tracking-wider text-white/30 cursor-default select-none"
								>
									<span>{item.label}</span>
									<span className="rounded border border-secondary/40 bg-secondary/10 px-1.5 py-0.5 text-[9px] font-bold text-secondary uppercase leading-none">
										Soon
									</span>
								</span>
							) : (
								<Link
									key={item.href}
									href={item.href}
									className="flex items-center justify-between py-3 font-mono text-xs uppercase tracking-wider text-white/80 transition-colors hover:text-primary"
									onClick={(e) => {
										e.preventDefault();
										handleNavItemClick(item.href);
									}}
								>
									<span>{item.label}</span>
									<span className="text-[10px] text-primary">&#8599;</span>
								</Link>
							)
						)}
						<div className="pt-3 flex gap-2">
							<a
								href="https://volunteer.arduinodayphilippines.cc/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#21935B] py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white"
								onClick={closeMenu}
							>
								<span>Apply to Volunteer</span>
								<IconArrowUpRight className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
