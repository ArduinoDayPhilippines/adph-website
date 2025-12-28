"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Smooth Scrolling Effect
	useEffect(() => {
		const handleHashChange = () => {
			const { hash } = window.location;
			if (hash) {
				const targetElement = document.querySelector(hash);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}
		};

		window.addEventListener("hashchange", handleHashChange, false);

		if (window.location.hash) {
			setTimeout(handleHashChange, 100);
		}

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<header className="sticky top-0 z-50">
			<nav className="w-screen border-b border-gray-600 bg-[#131118] bg-opacity-90">
				<div className="flex flex-wrap items-center justify-between container p-4 mx-auto lg:px-8">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/assets/logo.png"
							alt="Logo"
							width={50}
							height={50}
							className="w-auto h-10 object-cover"
						/>
					</Link>

					{/* Navigation Links */}
					<div
						className={`w-full md:flex md:w-auto ${isMenuOpen ? "block" : "hidden"}`}
						id="navbar-menu"
					>
						<ul className="flex flex-col items-center md:flex-row justify-center md:space-y-0 md:space-x-6 text-nowrap mt-4 lg:mt-0">
							{[
								{ href: "#about", label: "About Event" },
								{ href: "#speakers", label: "Speakers" },
								{ href: "#merch", label: "Merch" },
								{ href: "#faqs", label: "FAQs" },
							].map((item, index) => (
								<li key={index} className="w-full">
									<Link
										href={item.href}
										className="block w-full text-center py-4 border-t border-b border-[#F8F7FC] border-opacity-5 md:border-none hover:text-primary duration-300"
										onClick={(e) => {
											e.preventDefault();
											closeMenu();
											window.history.pushState(null, "", item.href);
											const targetElement = document.querySelector(item.href);
											if (targetElement) {
												targetElement.scrollIntoView({
													behavior: "smooth",
													block: "start",
												});
											}
										}}
									>
										{item.label}
									</Link>
								</li>
							))}

							{/* Join Us Button in Mobile */}
							<li className="flex flex-col items-center md:hidden w-full border-gray-700 mt-4 justify-center md:border-none">
								<p className="self-center text-wrap text-center mb-4 mt-8">
									Be Part of the Movement! Join and Celebrate Innovation with
									Us!
								</p>
								<Link href="https://arduinodayph.pwapilipinas.org/">
									<Button className="w-full py-4">JOIN US</Button>
								</Link>
							</li>
						</ul>
					</div>

					{/* Button and Menu Toggle */}
					<div className="flex space-x-3">
						<Link href="https://arduinodayph.pwapilipinas.org/" className="hidden md:block">
							<Button className="px-8 py-4">JOIN US</Button>
						</Link>

						{/* Mobile Menu Toggle */}
						<button
							onClick={toggleMenu}
							className="md:hidden w-10 h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 absolute top-4 right-5 items-center"
							aria-controls="navbar-menu"
							aria-expanded={isMenuOpen}
						>
							<span className="sr-only">
								{isMenuOpen ? "Close menu" : "Open main menu"}
							</span>
							{isMenuOpen ? (
								<svg
									className="w-6 h-6"
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
									className="w-5 h-5"
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
		</header>
	);
}
