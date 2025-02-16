'use client'

import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { SlSocialYoutube } from 'react-icons/sl'
// import { HeartIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'

interface SocialLink {
	name: string
	href: string
	icon: React.ReactNode 
}

export const socialLinks: SocialLink[] = [
	{ name: 'Youtube', href: 'https://www.youtube.com/@kelseedolma', icon: <SlSocialYoutube size={30} color="white" /> },
	{ name: 'Instagram', href: 'https://www.instagram.com/kel.dolma/', icon: <FaInstagram size={30} color="white" /> },
	{/** { name: 'Valentine Day', href: '/v', icon: <HeartIcon className="w-8 h-8 text-rose-400/50" /> } **/}
]

export const Hobbies = () => {
	return (
	       <>
	       <div className="absolute top-[640px] right-0 sm:top-[580px] sm:right-[200px] xl:top-[870px] xl:left-[750px]">
	       	  <Image
	       	     src="/monkey-2.png"
	             alt="Hero Image"
	             width={150}
	             height={150}
	             className="rotate-[30deg] -scale-x-100 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] xl:w-[150px] xl:h-[150px]"
	        />
	       </div>
		 <section className="z-10 bg-[#F4EAE0] rounded-[45px] p-6 md:p-8 xl:-mt-56">
			<h2 className="text-4xl md:text-5xl mb-8 font-sansita">
				Hobbies	
			</h2>
			<div className="flex flex-wrap gap-2 mb-8">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</div>
			<div className="relative">
				<div className="grid grid-cols-4 gap-4 mb-8">
					<div className="w-12 h-12 rounded-full bg-green-200" />
					<div className="w-12 h-12 bg-yellow-200 rounded-lg rotate-45" />
					<div className="w-12 h-12 bg-blue-200 rounded-xl" />
					<div className="w-12 h-12 bg-red-200" />
				</div>
			  <>
			    {socialLinks.map((link) => (
				<Link key={link.name} href={link.href} target={link.href === '/v' ? '_self' : '_blank'} className="flex shadow-xl cursor-pointer items-center gap-4 bg-[#B3D8A8] mb-4 rounded-3xl p-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500/50">
				   {link.icon}
				   <div className="font-weather text-white text-xl">{link.name}</div>
			      </Link>
			    ))}
			  </>
			</div>
		 </section>
	     </>
	)
}
