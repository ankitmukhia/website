export const Hobbies = () => {
	return (
		<section className="bg-[#F4EAE0] rounded-[45px] p-6 md:p-8 xl:-mt-56">
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
	)
}
