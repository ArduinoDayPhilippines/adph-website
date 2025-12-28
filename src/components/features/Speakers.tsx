"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { speakers } from "@/data/index";
import Heading from "@/components/ui/heading";

const Speakers = () => {
	return (
		<div className="relative">
			<LampContainer>
				<Heading text="Featured Speakers" />
			</LampContainer>
			<InfiniteMovingCards
				items={speakers}
				direction="right"
				speed="normal"
				className="max-w-full -mt-80 mb-32"
			/>
		</div>
	);
};

export default Speakers;
