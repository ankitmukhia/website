import Image from 'next/image'
import { Education } from '@/components/education'
import { Hobbies } from '@/components/hobbies'
import { Location } from '@/components/location'
import { About } from '@/components/about'
import { InfiniteCarousel } from '@/components/infinite-carousel' 
import { HeartIcon } from '@heroicons/react/24/solid'

// crypto monkey as well 

export default function Home() {
  return (
    <div> 
      <div className="relative w-full max-w-screen-lg mx-auto">
	 <Image 
	   src="/hero.png" 
	   alt="Hero Image" 
	   width={1200} 
	   height={1200} 
	 />
         <div className="absolute left-0 top-0 xl:left-0 xl:top-2">
	   <Image 
	     src="/statistatocope-1.png" 
	     alt="Hero Image" 
	     width={200} 
	     height={200} 
	     className="rotate-[30deg] w-[80px] h-[80px] sm:w-[170px] sm:h-[170px] xl:w-[200px] xl:h-[200px]"
	   />
         </div>
         <div className="absolute right-[20%] top-[20%]">
	   <Image 
	     src="/statistatocope-3.png" 
	     alt="Hero Image" 
	     width={80} 
	     height={80} 
	     className="rotate-[50deg] w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] xl:w-[80px] xl:h-[80px]"
	   />
         </div>
	<div className="absolute right-[35%] top-[10%]">
	 <Image 
	   src="/bottle.png"
	   alt="Hero Image"
	   width={50}
	   height={50}
	   className="-rotate-[40deg]"
	 />
	</div>
        <div className="absolute left-[10%] bottom-[20%]">
	   <Image 
	     src="/seashell.png"
	     alt="Hero Image" 
	     width={70} 
	     height={70} 
	     className="-rotate-[30deg] w-[40px] h-[40px] md:w-[80px] md:h-[80px] xl:w-[80px] xl:h-[80px]"
	   />
         </div>
         <div className="absolute left-[35%] bottom-[20%]">
	   <Image 
	     src="/statistatocope-2.png" 
	     alt="Hero Image" 
	     width={80} 
	     height={80} 
	     className="-rotate-[30deg] w-[40px] h-[40px] md:w-[80px] md:h-[80px] xl:w-[80px] xl:h-[80px]"
	   />
         </div>
       </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* About Section */}
	<About /> 

	{/* Education Section */}
	<Education />

        {/* Hobbies Section */}
	<Hobbies />

        {/* Location Section */}
	<Location />
      </div>

      <>
      <div className="absolute bottom-[505px] right-10 sm:right-[200px] sm:bottom-[536px] xl:bottom-[490px] xl:right-[500px]">
      	<Image
      	  src="/monkey-4.png"
      	  alt="Hero Image"
          width={150}
          height={150}
          className="-scale-x-100 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] xl:w-[150px] xl:h-[150px]"
      />
      </div>
      <div className="absolute bottom-[20%] right-[40%] sm:bottom-[22%] xl:bottom-[24%] xl:right-[40%]">
        <HeartIcon 
	  className="h-5 w-5 text-rose-500/90"
        />
      </div>

      <div className="absolute bottom-[465px] right-[100px] sm:bottom-[550px] sm:right-[300px] xl:bottom-[500px] xl:right-[36%]">
        <HeartIcon 
	  className="h-5 w-5 text-rose-500/80"
        />
      </div>

      <div className="absolute bottom-[21%] right-28 sm:bottom-[22%] sm:right-[30%] xl:bottom-[26%] xl:right-[35%]">
        <HeartIcon 
	  className="h-5 w-5 text-rose-500/90"
        />
      </div>
       <section className="xl:relative bg-[#F0F0D7] mt-12 rounded-[45px] p-6 md:p-8">
	  <div className="space-y-4 overflow-hidden">
	   <h2 className="text-4xl md:text-5xl mb-8 font-sansita flex items-center gap-2">
	     Here are some of my Pictures 
	   </h2>

	   <InfiniteCarousel direction="left" speed="normal" pauseOnHover={true} /> 
	  </div>
       </section>
      </>
    </div>
  );
}
