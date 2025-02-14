'use client'

import { useState, useEffect } from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import { grass } from '@/contents/index'
import { Snowfall } from 'react-snowfall'
import { AudioPlayer } from '@/components/audio-player'
import clsx from 'clsx'

const title = "Happy Valentine's Day"

export default function Page() {
	const [images, setImages] = useState<HTMLImageElement[]>([])

	useEffect(() => {
		const snowFlex1 = document.createElement('img')
		snowFlex1.src = '/red-rose.png'
		const snowFlex2 = document.createElement('img')
		snowFlex2.src = '/snow.png'
		setImages([snowFlex1, snowFlex2])

		return () => {
			setImages([])
		}
	}, [])

	return (
		<div className="relative flex items-center justify-center h-screen bg-gradient-to-t from-lightpurple via-lighterpurple to-lightpink">
			<Snowfall
				images={images}
				radius={[0.5, 26.0]}
				snowflakeCount={100}
			/>
			<AudioPlayer />
			{grass.map((item, _idx) => (
				<div
					key={_idx}
					className={clsx("absolute z-10", {
						'bottom-0 right-0': _idx === 0,
						'bottom-0 left-0': _idx === 1,
						'top-0 right-0': _idx === 2,
						'top-0 left-0 rotate-180': _idx === 3,
						'top-[25%] right-[40%] -rotate-[40deg] scale-x-[-1]': _idx === 4,
						'bottom-[25%] right-[50%]': _idx === 5,
						'bottom-[25%] left-[55%] rotate-[50deg]': _idx === 6,
					})}
				>
					<Image src={item} alt="Grass" width={100} height={100} />
				</div>
			))}
			<div className="relative">
				<div className="absolute top-0 left-[20%] z-10">
					<Image
						src="/kelsee-framed-1.png"
						alt="Kelsee"
						width={100}
						height={100}
						className="-rotate-[20deg] w-14 h-20 sm:w-[6rem] sm:h-[10rem] xl:w-[6rem] xl:h-[10rem]"
					/>
				</div>
				<div className="absolute top-[50%] right-4 z-10">
					<Image
						src="/kelsee-framed-2.png"
						alt="Kelsee"
						width={100}
						height={100}
						className="rotate-[30deg] w-14 h-20 sm:w-[6rem] sm:h-[10rem] xl:w-[6rem] xl:h-[10rem]"
					/>
				</div>
				<div className="absolute bottom-0 left-[6%] z-10">
					<Image
						src="/kelsee-framed-3.png"
						alt="Kelsee"
						width={150}
						height={150}
						className="-rotate-[50deg] w-14 h-16 sm:w-[8rem] sm:h-[10rem] xl:w-[8rem] xl:h-[10rem]"
					/>
				</div>
				<div className="relative">
					<Image
						src="/background.png"
						alt="Background"
						width={800}
						height={800}
						className="object-contain"
					/>
				</div>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="text-center px-4">
						<Balancer>
							<h1 className="text-6xl mt-4 font-greatVibes text-white">
								{title}
							</h1>
							<h2 className="text-4xl font-greatVibes text-white/80 mt-4">
								Wishing you good health, success, and all the focus you need to achieve your study goals. Keep shining!
							</h2>
						</Balancer>
					</div>
				</div>
			</div>
		</div>

	);
};
