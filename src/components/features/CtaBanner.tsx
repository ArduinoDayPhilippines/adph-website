import { IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import Heading from "../ui/heading";
import Link from "next/link";

const CtaBanner = () => {
	return (
		<div className="relative flex flex-col items-center justify-center gap-8 py-10 h-fit">
			<div className="flex flex-col items-center justify-center gap-0">
				<div className="flex gap-4 items-center justify-center max-w-[80%]">
					<IconMapPin className="w-8 h-10 text-secondary" />
					<h4 className="uppercase text-[clamp(18px,2.5vw,51.99px)] text-center">
						Asia Pacific College
					</h4>
				</div>
				<Heading
					text="March 21, 2026"
					className="text-[clamp(72px,18vw,320px)] tracking-normal uppercase"
					glowAll
				/>
				<h2 className="text-[clamp(26px,3.2vw,64px)] px-2 italic text-center bg-clip-text text-transparent bg-gradient-cta max-w-[80%] lg:max-w-full">
					We are finalizing the schedule. Check back shortly or tap below to get notified when registration opens.
				</h2>
			</div>
			<Link href="https://arduinodayph.pwapilipinas.org/">
				<Button className="py-3 px-6 lg:py-6 lg:px-12 bg-none">
					<p className="text-xs font-medium lg:font-bold lg:text-xl uppercase">
						Get Notified
					</p>
				</Button>
			</Link>
		</div>
	);
};

export default CtaBanner;
