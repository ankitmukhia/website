'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export const About = () => {
	const [isLoading, setIsLoading] = useState(true)

	return (
	<>
	<div className="absolute top-[7%] sm:top-[240px] xl:top-[463px]">
	  <Image
		src="/monkey-1.png"
		alt="Hero Image"
		width={200}
		height={200}
	  	onLoad={() => setIsLoading(false)}
		className="-rotate-[10deg] w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px]"
	   />
	</div>
	 <section className="bg-[#B3D8A8] z-10 rounded-[45px] p-10 md:p-8 grid md:grid-cols-[1fr,auto] gap-6 xl:mb-64 xl:mt-8">
          <div className="space-y-4">
            <h2 className="font-oswald tracking-wider text-sm">HELLO!</h2>
            <div className="font-oswald text-xs tracking-wide space-y-4">
              <p>
                IM A DIGITAL PRODUCT DESIGNER FOCUSED ON THE WEB/MOBILE, INTERACTION, MODERN AESTHETICS, BRANDING, AND
                DESIGN SYSTEMS. I TAKE PLEASURE IN CREATING PRODUCTS THAT ARE SIMPLE, SMART, AND USER-FRIENDLY.
              </p>
              <p>
                OVER THE YEARS OF DESIGNING, I HAVE HONED MY SKILLS AS A WELL-ROUNDED DESIGNER, CONFIDENTLY NAVIGATING
                EVERY ASPECT OF THE DIGITAL PRODUCT CREATION PROCESS, FROM START TO FINISH.
              </p>
            </div>
          </div>
          <div className={clsx("relative w-32 h-32 md:w-40 md:h-full", isLoading ? "scale-50 blur-xl" : "scale-100 blur-0")}>
	    <Image
	      src="/aesthetic-pot.jpg" 
	      alt="Profile" 
	      fill
	      className="object-fit rounded-full" 
	      onLoad={() => setIsLoading(false)}
	    />
          </div>
         </section>
	</>
    )
}
