import Image from 'next/image'

export const Education = () => {
	return (
	     <>
	       <div className="absolute top-[50%] right-[10%] sm:top-[1080px] sm:right-[580px] xl:top-[1130px] xl:right-[400px]">
	       	  <Image
	       	     src="/monkey-3.png"
	             alt="Hero Image"
	             width={150}
	             height={150}
	             className="-rotate-[200deg] -scale-x-100 xl:-rotate-[200deg] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] xl:w-[150px] xl:h-[150px]"
	          />
	        </div>
		<section className="z-10 bg-[#F3CCF3] rounded-[45px] p-6 md:p-8">
			<h2 className="text-4xl md:text-5xl mb-8 font-weather flex items-center gap-2">
				Education 
			</h2>
			<div className="space-y-8 font-oswald">
				<div className="space-y-2">
					<div>2022 - 2023</div>
					<div>SENIOR PRODUCT DESIGNER @ POLYGON TECH</div>
				</div>
				<div className="space-y-2">
					<div>2019 - 2022</div>
					<div>FOUNDER @ HEEKO -</div>
					<div className="text-sm max-w-2xl">
						IN LATE 2019, I FOUNDED HEEKO, A CREATIVE DESIGN AND TECHNOLOGY COMPANY. OUR TEAM HAS BEEN FORTUNATE TO
						WORK WITH GLOBAL BRANDS SUCH AS ITALIC.COM, NOTPOT, AND TREND.IO.
					</div>
				</div>
				<div className="space-y-2">
					<div>2015 - 2019</div>
					<div>
						PRIOR TO HEEKO, I WORKED AS A DESIGNER AT ORGANIZATIONS SUCH AS QUOVANTIS, WINGIFY, AND SYNAPTIC. THIS
						EXPERIENCE AND KNOWLEDGE STRENGTHENED MY VISUAL STYLE, TECHNICAL SKILLS, AND BUSINESS ACUMEN.
					</div>
				</div>
			</div>
		</section>
	      </>
	)
}
