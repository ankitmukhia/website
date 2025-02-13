'use client'

import React, { useEffect, useState } from "react";
import { allImgVids } from '@/contents/index'
import { ImagePreview } from '@/components/image-preview'
import clsx from 'clsx'

interface Props {
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}

export const InfiniteCarousel = ({ className, speed = "fast", direction = "left", pauseOnHover = true }: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);

	useEffect(() => {
		addAnimation();
	}, []);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={clsx("flex", className)}>
			<ul
			   ref={scrollerRef}
			   className={clsx("flex min-w-full shrink-0 gap-4 flex-nowrap",
			     start && "animate-scroll",
			      pauseOnHover && "hover:[animation-play-state:paused]"
			)}>
			   {allImgVids.map((imgVid, _idx) => (
			    <li 
			      key={_idx}             
			      className={``}
			    >
			       <ImagePreview {...imgVid} /> 
			    </li>
			   ))}
			</ul>
		</div>
	)
};
