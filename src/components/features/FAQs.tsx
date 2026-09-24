"use client";

import React, { useState } from "react";
import { faqs } from "@/data/index";
import { IconPlus, IconMinus } from "@tabler/icons-react";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faqs" className="relative w-full border-t border-[#2d373d] bg-[#060e11]/90 backdrop-blur-md text-white scroll-mt-14 overflow-hidden">
			{/* Ambient Soft Blur Glow Accent behind FAQs */}
			<div
				aria-hidden
				className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[350px] w-[650px] max-w-full rounded-full bg-linear-to-r from-[#21935B]/15 via-[#008080]/15 to-[#EE7402]/10 blur-[130px]"
			/>

			<div className="relative mx-auto w-full max-w-7xl border-x border-[#2d373d] bg-[#071116]/80 backdrop-blur-xl">
				{/* Clean Header Bar */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#2d373d] px-6 py-5 sm:px-10 sm:py-6 lg:px-12 bg-white/[0.01]">
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight lowercase text-white">
							frequently-asked-questions<span className="text-secondary">/</span>
						</h2>
					</div>
					<div className="mt-4 sm:mt-0">
						<a
							href="mailto:arduinodayph@gmail.com"
							className="inline-flex items-center gap-1.5 font-mono text-xs text-white/60 hover:text-primary transition-colors"
						>
							<span>Have more questions? Email us ↗</span>
						</a>
					</div>
				</div>

				{/* Clean 2-Column Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;
						const isLeftCol = index % 2 === 0;

						return (
							<div
								key={index}
								className={`group relative flex flex-col justify-start border-b border-[#2d373d] transition-colors duration-200 ${
									isLeftCol ? "md:border-r border-[#2d373d]" : ""
								} ${isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"}`}
							>
								{/* Question Toggle Button */}
								<button
									type="button"
									onClick={() => toggleAccordion(index)}
									className="flex w-full items-start justify-between gap-4 p-6 sm:p-8 text-left transition-colors focus:outline-none"
									aria-expanded={isOpen}
								>
									<span className="text-base font-semibold leading-snug text-white sm:text-lg group-hover:text-primary transition-colors">
										{faq.question}
									</span>
									<span
										className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border transition-all duration-200 ${
											isOpen
												? "border-primary bg-primary/20 text-primary"
												: "border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white"
										}`}
									>
										{isOpen ? <IconMinus className="h-3.5 w-3.5" /> : <IconPlus className="h-3.5 w-3.5" />}
									</span>
								</button>

								{/* Answer Expandable Area */}
								{isOpen && (
									<div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 animate-fadeIn">
										<p className="text-sm leading-relaxed text-white/70">
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
