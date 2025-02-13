'use client'

import Image from 'next/image'

export const Hobbies = () => {
	return (
	       <>
	       <div className="absolute top-[610px] right-0 xl:top-[855px] xl:left-[750px]">
	       	  <Image
	       	     src="/monkey-2.png"
	             alt="Hero Image"
	             width={150}
	             height={150}
	             className="rotate-[50deg] -scale-x-100 w-[80px] h-[80px] sm:w-[170px] sm:h-[170px] xl:w-[150px] xl:h-[150px]"
	        />
	       </div>
		 <section className="z-10 bg-[#F4EAE0] rounded-[45px] p-6 md:p-8 xl:-mt-56">
			<h2 className="text-4xl md:text-5xl mb-8 font-sansita">
				Hobbies	
			</h2>
			<div className="flex flex-wrap gap-2 mb-8">
				Something
			</div>
			<div className="relative">
				<div className="grid grid-cols-4 gap-4 mb-8">
					<div className="w-12 h-12 rounded-full bg-green-200" />
					<div className="w-12 h-12 bg-yellow-200 rounded-lg rotate-45" />
					<div className="w-12 h-12 bg-blue-200 rounded-xl" />
					<div className="w-12 h-12 bg-purple-200">
						<svg viewBox="0 0 48 48" className="w-full h-full">
							<path d="M24 0 L48 24 L24 48 L0 24 Z" fill="currentColor" />
						</svg>
					</div>
				</div>
				<p className="font-mono text-sm">
					I ALSO COLLABORATE WITH OTHER TALENTED DESIGNERS TO PROVIDE 3D DESIGN, ILLUSTRATIONS, AND ICON DESIGN
					SERVICES UPON REQUEST.
				</p>
			</div>
		 </section>
		</>
	)
}
