import Image from 'next/image'
import { Work } from '@/components/work'
import { Capabilities } from '@/components/capabilities'

export default function Home() {
  return (
    <div> 
     <div> 
       <div className="relative">
	 <Image src="/hero.png" alt="Hero Image" width={1200} height={1200} />
       </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
	<section className="bg-[#B3D8A8] rounded-[45px] p-10 md:p-8 grid md:grid-cols-[1fr,auto] gap-6 xl:mb-64 xl:mt-8">
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
          <div className="relative w-32 h-32 md:w-40 md:h-full">
            <Image
              src="/aesthetic-pot-2.jpg"
              alt="Profile"
              fill
              className="object-fit rounded-full"
            />
          </div>
        </section>

	{/* Work Section */}
	<Work />

        {/* Capabilities Section */}
	<Capabilities />

        {/* Location Section */}
        <section className="bg-[#DBB5B5] flex justify-between rounded-[45px] p-6 md:p-8 xl:mb-32 xl:mt-8">
	 <div>
          <h2 className="text-4xl md:text-5xl mb-4 font-sansita flex items-center gap-2">
            Where? 
          </h2>
          <span className="font-weather">SIKKIM, INDIA</span>
	  </div>
          <div className="flex items-center gap-4">
            <div className="relative w-44 h-40 rounded-xl overflow-hidden">
              <Image src="/sikkim-2.jpg" alt="Map" fill className="object-cover" />
            </div>
          </div>
        </section>
      </div>

       <section className="bg-[#B3D8A8] mt-12 rounded-[45px] p-6 md:p-8">
	 <div>
	  <h2 className="text-4xl md:text-5xl mb-8 font-sansita flex items-center gap-2">
	    Here are some of my Vlogs and Pictures 
	  </h2>
	 </div>
	</section>
     </div>
    </div>
  );
}
