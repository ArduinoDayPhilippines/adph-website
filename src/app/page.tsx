import Navbar from "@/components/features/Navbar";
import { Hero } from "@/components/features/Hero";
import { BentoLaunchpad } from "@/components/features/BentoLaunchpad";
import Partners from "@/components/features/Partners";
import FAQs from "@/components/features/FAQs";
import Footer from "@/components/features/Footer";
import Reveal from "@/components/ui/reveal";

export default function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden text-white">
			{/* Subtle Minimal Ambient Glows (Main dark green, emerald, and warm orange) */}
			<div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
				{/* Top-right soft green/emerald ambiance */}
				<div className="absolute -top-32 right-10 h-[500px] w-[500px] rounded-full bg-[#21935B]/10 blur-[140px]" />
				{/* Center-left soft teal/dark-green ambiance */}
				<div className="absolute top-[40vh] -left-32 h-[500px] w-[500px] rounded-full bg-[#008080]/10 blur-[160px]" />
				{/* Mid-lower soft warm orange accent */}
				<div className="absolute top-[120vh] right-[15vw] h-[450px] w-[450px] rounded-full bg-[#EE7402]/[0.06] blur-[150px]" />
				{/* Bottom soft dark green glow */}
				<div className="absolute top-[200vh] left-[20vw] h-[500px] w-[500px] rounded-full bg-[#1A6641]/10 blur-[160px]" />
			</div>

			{/* Sticky Universe Grid Navbar */}
			<Navbar />

			{/* Main Content Area */}
			<main className="relative z-10">
				{/* 2027 Teaser Hero */}
				<Hero />

				{/* 2027 Launchpad Bento Grid with Origin, Mission, Pillars & Actions */}
				<Reveal>
					<BentoLaunchpad />
				</Reveal>

				{/* 2026 Community Supporters & Partners Hall of Fame */}
				<Reveal>
					<Partners />
				</Reveal>

				{/* Frequently Asked Questions */}
				<Reveal>
					<FAQs />
				</Reveal>

				{/* Telemetry Footer */}
				<Footer />
			</main>
		</div>
	);
}
