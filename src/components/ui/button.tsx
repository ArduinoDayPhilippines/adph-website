"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button: React.FC<
	React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, onClick, ...props }) => {
	return (
		<button
			className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:shadow-[0px_0px_15px_#008080] "
			{...props}
			onClick={onClick}
		>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-border-default hover:bg-gradient-border-active" />
			<span
				className={cn(
					"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl font-montserrat uppercase transition-all duration-300 ease-in-out hover:bg-gradient-hover hover:opacity-80",
					className
				)}
			>
				{children}
			</span>
		</button>
	);
};
