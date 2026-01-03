"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ href: "#about", label: "About Event" },
		{ href: "#speakers", label: "Speakers" },
		{ href: "#merch", label: "Merch" },
		{ href: "#faqs", label: "FAQs" },
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
					className="rounded-full border border-white/10 bg-black/70 backdrop-blur"
					aria-label="Primary navigation"
				>
					<div className="flex items-center justify-between gap-3 px-3 py-2 md:px-4">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-2 rounded-full px-2 py-1">
							<Image
								src="/assets/logo.png"
								alt="Logo"
								width={40}
								height={40}
								className="h-9 w-auto object-cover"
							/>
						</Link>

						{/* Desktop navigation */}
						<ul className="hidden items-center gap-1 md:flex">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
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
								href="https://arduinodayph.pwapilipinas.org/"
								className="hidden md:block"
							>
								<Button className="h-10 rounded-full px-6">JOIN US</Button>
							</Link>

							{/* Mobile Menu Toggle */}
							<button
								onClick={toggleMenu}
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 md:hidden"
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
					<div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur">
						<ul className="flex flex-col gap-1 p-2">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="block w-full rounded-xl px-4 py-3 text-center text-sm text-white/85 transition-colors hover:bg-white/5"
										onClick={(e) => {
											e.preventDefault();
											handleNavItemClick(item.href);
										}}
									>
										{item.label}
									</Link>
								</li>
							))}
							<li className="px-2 pt-3">
								<p className="mb-3 text-center text-sm text-white/70">
									Be Part of the Movement! Join and Celebrate Innovation with Us!
								</p>
								<Link href="https://arduinodayph.pwapilipinas.org/" className="block">
									<Button className="h-11 w-full rounded-full">JOIN US</Button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
