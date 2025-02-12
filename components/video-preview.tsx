import { ImgVid as VidType }  from '@/contents/index'

export const VideoPreview = (props: VidType) => {
	console.log(props)
	return (
		<div>
			<iframe
				width="100%"
				height="200"
				src="https://www.youtube.com/embed/tgbNymZ7vqY"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
		       />	
		</div>
	)
}
