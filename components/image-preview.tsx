import Image from 'next/image'
import { ImgVid as ImgType } from '@/contents/index'

export const ImagePreview = (props: ImgType) => {
	return (
		<div className="relative min-w-[240px] overflow-hidden">
		  <Image 
		     src={props.src} 
		     alt={props.alt} 
		     width={500}
		     height={500}
		     className="object-contain rounded-xl"
		  />
		</div>
	);
};
