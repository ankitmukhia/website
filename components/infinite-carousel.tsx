'use client'

import { allImgVids } from  '@/contents/index'
import { ImagePreview } from '@/components/image-preview'

export const InfiniteCarousel = () => {
	return (
	  <div className="flex gap-2">
	  {[...allImgVids, ...allImgVids].map((imgVid, _idx) => (
	     <div key={_idx}>	  
		<ImagePreview {...imgVid} />
	     </div>	  
	  ))}
	  </div>
	)
};
