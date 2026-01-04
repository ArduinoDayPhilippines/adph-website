"use client";

import Heading from "@/components/ui/heading";
import { cn } from "@/lib/utils";

interface ComingSoonProps {
	label: string;
	description?: string;
	className?: string;
}

const fallbackDescription =
	"We are putting the finishing touches on this experience. Keep an eye out for the reveal - details, dates, and ways to take part are on the way.";

const ComingSoon = ({
	label,
	description = fallbackDescription,
	className,
}: ComingSoonProps) => {
	return (
		<div className="relative px-4">
			<div
				className={cn(
					"relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-3xl px-6 py-14 shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:px-12 lg:py-16",
					className
				)}
			>
				<div className="relative flex flex-col items-center gap-6 text-center">
					<div className="flex items-center gap-3 rounded-full px-4 py-2 uppercase tracking-[0.28em] text-white/70">
						<span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,178,178,0.18)] animate-pulse" />
						<span className="text-xs">{label}</span>
					</div>

					<Heading text="Coming Soon" glowAll className="text-4xl leading-tight md:text-6xl" />

					<p className="max-w-3xl text-sm text-white/70 md:text-lg">{description}</p>

					<div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
						{[
							{
								title: "Lineup",
								copy:
									"Curating the right voices, mentors, and collaborators to make this worth the wait.",
							},
							{
								title: "Schedule",
								copy: "Dialing in the flow so every segment lands with intent and breathing room.",
							},
							{
								title: "Drops",
								copy: "Polishing experiences, swag, and surprises you will actually want.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="rounded-2xl px-4 py-5 text-left shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
							>
								<p className="text-xs uppercase tracking-[0.18em] text-white/60">{item.title}</p>
								<p className="mt-2 text-sm text-white/85 md:text-base">{item.copy}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
