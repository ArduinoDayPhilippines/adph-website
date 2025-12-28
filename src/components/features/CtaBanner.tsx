import { IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import Heading from "../ui/heading";
import Link from "next/link";

const CtaBanner = () => {
	return (
		<div className="relative flex flex-col items-center justify-center gap-8 py-10 h-fit">
			<div className="z-0">
				<div className="orange-blur h-[120px] w-[180px] absolute rounded-full top-[65%] -left-8 md:h-[300px] md:w-[300px] md:left-[-5%]"></div>
				<div className="yellow-blur h-[120px] w-[180px] absolute rounded-full top-[78%] md:top-[70%] left-2 md:h-[250px] md:w-[300px] md:left-12"></div>
				<div className="blue-blur h-[150px] w-[180px] absolute rounded-full top-[86%] md:top-[90%] left-4 md:left-48 md:h-[260px] md:w-[230px]"></div>
			</div>
			<div className="z-0">
				<div className="orange-blur h-[120px] w-[180px] absolute rounded-full top-[10%] -right-4 md:right-32 md:h-[300px] md:w-[300px]"></div>
				<div className="yellow-blur h-[120px] w-[180px] absolute rounded-full top-[30%] -right-8 md:right-12 md:h-[250px] md:w-[300px]"></div>
				<div className="blue-blur h-[150px] w-[180px] absolute rounded-full top-[50%]  -right-16 md:-right-4 md:h-[260px] md:w-[230px]"></div>
			</div>
			<div className="flex flex-col items-center justify-center gap-0">
				<div className="flex gap-4 items-center justify-center max-w-[80%]">
					<IconMapPin className="w-8 h-10 text-secondary" />
					<h4 className="uppercase text-[clamp(18px,2.5vw,51.99px)] text-center">
						STI College Cubao
					</h4>
				</div>
				<Heading
					text="March 22, 2025"
					className="text-[clamp(100px,21.28vw,400px)] tracking-normal uppercase"
					glowAll
				/>
				<h2 className="text-[clamp(30px,3.85vw,74px)] px-2 italic text-center bg-clip-text text-transparent bg-gradient-cta max-w-[80%] lg:max-w-full">
					Be Part of the Movement! Join and Celebrate Innovation with Us!
				</h2>
			</div>
			<Link href="https://arduinodayph.pwapilipinas.org/">
				<Button className="py-3 px-6 lg:py-6 lg:px-12 bg-none">
					<p className="text-xs font-medium lg:font-bold lg:text-xl uppercase">
						Register Now
					</p>
				</Button>
			</Link>
		</div>
	);
};

export default CtaBanner;
