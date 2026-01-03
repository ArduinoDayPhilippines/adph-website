"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
}

export default function Reveal({
	children,
	className,
	threshold = 0.15,
	rootMargin = "0px 0px -10% 0px",
	once = true,
}: RevealProps) {
	const elementRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (once) observer.disconnect();
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [threshold, rootMargin, once]);

	return (
		<div
			ref={elementRef}
			className={cn(
				"w-full max-w-full overflow-x-clip duration-700 ease-out will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none",
				"transition-[opacity,transform]",
				isVisible
					? "opacity-100 translate-y-0 scale-100"
					: "opacity-0 translate-y-6 scale-[0.98]",
				className
			)}
		>
			{children}
		</div>
	);
}
