/* eslint-disable */
"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface HeadingProps {
	text: string;
	delay?: number;
	glowAll?: boolean;
	className?: string;
}

const Heading = ({
	text,
	delay = 400,
	glowAll = false,
	className,
}: HeadingProps) => {
	const [glowAllText, setGlowAllText] = useState(false);
	const [currentChar, setCurrentChar] = useState(0);

	const getNextValidIndex = (currentIndex: number) => {
		const nextIndex = currentIndex + 1;

		if (currentIndex >= text.length - 1) {
			if (glowAll) {
				setGlowAllText(true);
				return nextIndex;
			}

			return -1;
		}

		setGlowAllText(false);

		if (text[nextIndex] === " ") {
			return getNextValidIndex(nextIndex);
		}

		return nextIndex;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentChar((prevChar) => getNextValidIndex(prevChar));
		}, delay);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex h-fit">
			{text.split("").map((letter, index) =>
				letter === " " ? (
					<div key={index} className="w-4" />
				) : (
					<h2
						onAnimationEnd={() => setCurrentChar(-1)}
						key={index}
						className={cn(
							"uppercase font-bold transition-all duration-500 ease-in-out",
							index === currentChar && "glow-text",
							glowAllText && "double-glow-text",
							className
						)}
					>
						{letter}
					</h2>
				)
			)}
		</div>
	);
};

export default Heading;
