import Image from 'next/image'
import { ImgVid as ImgType } from '@/contents/index'

export const ImagePreview = (props: ImgType) => {
	return (
	  <Image 
	     src={props.src} 
	     alt={props.alt} 
	     width={200}
	     height={200}
	     className="object-contain rounded-3xl"
	  />
	);
};
