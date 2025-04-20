function Section({ data, imageOnLeft = false }) {
	const clipPath = imageOnLeft
		? 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)'
		: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)';

	return (
		<div className='grid lg:grid-cols-2 gap-4 items-center'>
			{/* Image Section */}
			<div
				className={`relative h-[250px] md:h-[400px] w-full md:w-5/6 overflow-hidden ${
					imageOnLeft ? 'lg:order-1' : 'lg:order-2'
				}`}>
				<div
					className='absolute inset-0 bg-cover bg-center lg:clip-path'
					style={{
						backgroundImage: `url(${data.image || '/placeholder.svg'})`,
						clipPath: clipPath,
					}}
				/>
			</div>

			{/* Content Section */}
			<div
				className={`max-w-xl px-4 py-16 ${
					imageOnLeft ? 'lg:order-2' : 'lg:order-1'
				}`}>
				<h2 className='text-4xl text-primary md:text-5xl font-bold tracking-tight mb-6'>
					{data.title}
				</h2>

				<p className='text-primary text-lg mb-8'>{data.description}</p>

				<button
					variant='outline'
					className='border border-2 p-4 border-accent text-accent hover:border-black hover:bg-white hover:text-black transition-colors'>
					Learn More
				</button>
			</div>
		</div>
	);
}

export default function DesignSections({ sections }) {
	return (
		<div className='container mx-auto bg-white'>
			{sections.map((section, index) => (
				<div
					key={section.id}
					className='py-2 md:py-4'>
					<Section
						data={section}
						imageOnLeft={index % 2 === 0}
					/>
					{index < sections.length - 1 && (
						<div className='max-w-4xl mx-auto'>
							<hr className='my-6 md:my-14 border-gray-700' />
						</div>
					)}
				</div>
			))}
		</div>
	);
}
