'use client'

import { useState, useEffect, useRef } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline'

export const AudioPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		audioRef.current = new Audio('/papon.mp3');

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		}
	}, [])

	const handleToggle = () => {
		if(!audioRef.current) return

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		// setIsPlaying(!isPlaying); // unsafe state update
		setIsPlaying((prev) => !prev); // safer state update
	};

	return (
		<div className="absolute top-[50%] left-0">
			<div className="relative">
				<div className="absolute -inset-5">
					<div
						className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
					</div>
				</div>
				<div onClick={handleToggle} className="relative z-10 inline-flex items-center justify-center w-full py-4 px-4 bg-[#CA95E8] sm:w-auto rounded-r-xl hover:bg-[#DDB5FE] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" role="button">
					{isPlaying ? <PauseIcon className="w-6 h-6 text-white" strokeWidth={2} /> : <PlayIcon className="w-6 h-6 text-white" strokeWidth={2} />}
				</div>
			</div>
		</div>
	)
}
