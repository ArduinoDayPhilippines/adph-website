import FAQs from "@/components/features/FAQs";
import Footer from "@/components/features/Footer";
import CtaBanner from "@/components/features/CtaBanner";
import ComingSoon from "@/components/features/ComingSoon";
import AgendaSchedule from "@/components/features/AgendaSchedule";
import Location from "@/components/features/Location";
import Navbar from "@/components/features/Navbar";
import { Hero } from "@/components/features/Hero";
import AboutUs from "@/components/features/AboutUs";
import Partners from "@/components/features/Partners";
import Merch from "@/components/features/Merch";
import Reveal from "@/components/ui/reveal";

export default function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden">
			<div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<div className="orange-blur absolute -left-8 top-[10vh] h-[140px] w-[200px] rounded-full md:left-[-5%] md:top-[12vh] md:h-[320px] md:w-[320px]" />
				<div className="yellow-blur absolute left-4 top-[28vh] h-[120px] w-[190px] rounded-full md:left-16 md:top-[32vh] md:h-[260px] md:w-[320px]" />
				<div className="blue-blur absolute left-10 top-[52vh] h-[150px] w-[190px] rounded-full md:left-56 md:top-[58vh] md:h-[280px] md:w-[240px]" />

				<div className="orange-blur absolute -right-6 top-[16vh] h-[140px] w-[200px] rounded-full md:right-32 md:top-[18vh] md:h-[320px] md:w-[320px]" />
				<div className="yellow-blur absolute -right-10 top-[44vh] h-[120px] w-[190px] rounded-full md:right-10 md:top-[48vh] md:h-[260px] md:w-[320px]" />
				<div className="blue-blur absolute -right-16 top-[72vh] h-[150px] w-[190px] rounded-full md:-right-6 md:top-[80vh] md:h-[280px] md:w-[240px]" />

				<div className="orange-blur absolute left-[10vw] top-[120vh] h-[140px] w-[200px] rounded-full md:left-[18vw] md:top-[135vh] md:h-[320px] md:w-[320px]" />
				<div className="yellow-blur absolute right-[8vw] top-[165vh] h-[120px] w-[190px] rounded-full md:right-[14vw] md:top-[185vh] md:h-[260px] md:w-[320px]" />
				<div className="blue-blur absolute left-1/2 top-[210vh] h-[150px] w-[190px] -translate-x-1/2 rounded-full md:top-[235vh] md:h-[280px] md:w-[240px]" />
			</div>

			<main className="relative z-10 pt-20">
				<Navbar />
				<Hero />
				<Reveal>
					<section id="about" className="scroll-mt-24 pt-4 sm:pt-6 md:pt-10">
						<AboutUs />
					</section>
				</Reveal>
				<Reveal>
					<Location />
				</Reveal>
				<Reveal>
					<section id="merch" className="scroll-mt-24 py-10 sm:py-16 md:py-24">
						<Merch />
					</section>
				</Reveal>
				<Reveal>
					<section id="partners" className="scroll-mt-24 py-10 sm:py-16 md:py-24">
						<Partners />
					</section>
				</Reveal>
				<Reveal>
					<section id="speakers" className="scroll-mt-24 py-10 sm:py-16 md:py-24">
						<ComingSoon
							label="Speakers"
							description="We are locking in a lineup of voices who build, ship, and share openly. Expect a mix of community favorites and fresh perspectives."
						/>
					</section>
				</Reveal>
				<Reveal>
					<section id="agenda" className="scroll-mt-24 py-10 sm:py-16 md:py-24">
						<AgendaSchedule />
					</section>
				</Reveal>
	
				<Reveal>
					<section id="faqs" className="scroll-mt-24">
						<FAQs />
					</section>
				</Reveal>
				<Reveal>
					<section aria-label="Stay updated" className="py-10 sm:py-16 md:py-24">
						<CtaBanner />
					</section>
				</Reveal>
				<Reveal>
					<Footer />
				</Reveal>
			</main>
		</div>
	);
}
