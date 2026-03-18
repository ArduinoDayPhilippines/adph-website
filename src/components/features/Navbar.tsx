"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#agenda", label: "Events" },
		{ href: "#merch", label: "Merch" },
		{ href: "#partners", label: "Partners" },
		{ href: "#speakers", label: "Speakers" },
		{ href: "#faqs", label: "FAQ" },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Smooth Scrolling Effect
	useEffect(() => {
		const scrollToHash = (hash: string) => {
			if (!hash) return;
			const targetElement = document.querySelector(hash);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		};

		const handleHashChange = () => {
			scrollToHash(window.location.hash);
		};

		window.addEventListener("hashchange", handleHashChange, false);

		if (window.location.hash) setTimeout(handleHashChange, 100);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	const handleNavItemClick = (href: string) => {
		closeMenu();
		window.history.pushState(null, "", href);
		const targetElement = document.querySelector(href);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header className="fixed inset-x-0 top-0 z-50 w-full">
			<div className="mx-auto w-full max-w-6xl px-4 py-3">
				<nav
					className="rounded-full bg-white/[0.04] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl"
					aria-label="Primary navigation"
				>
					<div className="flex items-center justify-between gap-3 px-4 py-2 md:px-5">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 rounded-full px-2 py-1">
						<Image
							src="/assets/logo.png"
							alt="Arduino Days 2026 Philippines Logo"
							width={200}
							height={80}
							className="h-9 w-auto object-contain"
							priority
						/>
					</Link>

						{/* Desktop navigation */}
						<ul className="hidden items-center gap-1 md:flex">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
										onClick={(e) => {
											e.preventDefault();
											handleNavItemClick(item.href);
										}}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>

						{/* Right side actions */}
						<div className="flex items-center gap-2">
					<Link
						href="https://www.facebook.com/arduinodayph"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden h-10 items-center rounded-full bg-[#21935B] px-6 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#1a7a4a] hover:shadow-[0_0_16px_rgba(33,147,91,0.3)] md:inline-flex"
					>
						JOIN US
					</Link>

							{/* Mobile Menu Toggle */}
							<button
								onClick={toggleMenu}
								className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-white transition-all duration-200 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/20 md:hidden"
								aria-controls="navbar-menu"
								aria-expanded={isMenuOpen}
								aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							>
								{isMenuOpen ? (
									<svg
										className="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										className="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 17 14"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M1 1h15M1 7h15M1 13h15"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</nav>

				{/* Mobile dropdown */}
				<div
					id="navbar-menu"
					className={`${isMenuOpen ? "block" : "hidden"} mt-2 md:hidden`}
				>
					<div className="rounded-2xl bg-black/70 backdrop-blur-xl">
						<ul className="flex flex-col p-3">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
										onClick={(e) => {
											e.preventDefault();
											handleNavItemClick(item.href);
										}}
									>
										{item.label}
									</Link>
								</li>
							))}
							<li>
						<Link
							href="https://www.facebook.com/arduinodayph"
							target="_blank"
							rel="noopener noreferrer"
							className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
							onClick={closeMenu}
						>
							Join Us
						</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
