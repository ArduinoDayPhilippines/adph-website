"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const DEFAULT_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_#<>!/[]{}*+=";

interface UseTextScrambleOptions {
	characters?: string;
	speed?: number;
	scrambleDuration?: number;
}

export function useTextScramble(
	originalText: string,
	options: UseTextScrambleOptions = {}
) {
	const {
		characters = DEFAULT_CHARS,
		speed = 30,
		scrambleDuration = 400,
	} = options;

	const [displayText, setDisplayText] = useState(originalText);
	const [prevOriginal, setPrevOriginal] = useState(originalText);
	const [isScrambling, setIsScrambling] = useState(false);
	const frameRef = useRef<NodeJS.Timeout | null>(null);

	if (prevOriginal !== originalText) {
		setPrevOriginal(originalText);
		setDisplayText(originalText);
		setIsScrambling(false);
	}

	const trigger = useCallback(() => {
		if (frameRef.current) {
			clearInterval(frameRef.current);
		}

		setIsScrambling(true);
		const startTime = Date.now();
		const totalLength = originalText.length;

		frameRef.current = setInterval(() => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / scrambleDuration, 1);
			const resolvedCharsCount = Math.floor(progress * totalLength);

			let result = "";
			for (let i = 0; i < totalLength; i++) {
				if (originalText[i] === " ") {
					result += " ";
				} else if (i < resolvedCharsCount) {
					result += originalText[i];
				} else {
					result += characters[Math.floor(Math.random() * characters.length)];
				}
			}

			setDisplayText(result);

			if (progress >= 1) {
				if (frameRef.current) clearInterval(frameRef.current);
				setDisplayText(originalText);
				setIsScrambling(false);
			}
		}, speed);
	}, [originalText, characters, speed, scrambleDuration]);

	useEffect(() => {
		if (frameRef.current) clearInterval(frameRef.current);
	}, [originalText]);

	useEffect(() => {
		return () => {
			if (frameRef.current) clearInterval(frameRef.current);
		};
	}, []);

	return { displayText, trigger, isScrambling };
}