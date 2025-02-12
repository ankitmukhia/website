'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export const Location = () => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<section className="bg-[#DBB5B5] flex justify-between rounded-[45px] p-6 md:p-8 xl:mb-32 xl:mt-8">
			<div>
				<h2 className="text-4xl md:text-5xl mb-4 font-sansita flex items-center gap-2">
					Where?
				</h2>
				<span className="font-weather">SIKKIM, INDIA</span>
			</div>
			<div className={clsx("flex items-center gap-4",  isLoading ? "scale-50 blur-xl" : "scale-100 blur-0" )}>
				<div className="relative w-44 h-40 rounded-xl overflow-hidden">
					<Image
						src="/sikkim.jpg"
						alt="Sikkim"
						fill
						className="object-cover"
						onLoadingComplete={() => setIsLoading(false)}
					/>
				</div>
			</div>
		</section>
	)
}
