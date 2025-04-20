export default function RenovationPhase({
	phaseNumber,
	title,
	description,
	steps = [],
	imageSrc = 'https://baypointcontracting.ca/wp-content/uploads/bb-plugin/cache/BPC-Enns-Whole-Home20240111_008-scaled-square-ad1f2574e00ccdf48baa7d1a76aecdca-zdjoe46xugml.jpeg',
	backgroundColor = 'white', // Default background color
}) {
	return (
		<div
			className='w-full py-12 px-6 md:px-16'
			style={{ backgroundColor }} // Apply the background color
		>
			{/* Header */}
			<div className='text-center mb-6'>
				<p className='text-green-800 uppercase tracking-wider text-sm mb-2'>
					Phase {phaseNumber}
				</p>
				<h2 className='text-4xl font-serif text-gray-800 mb-6'>{title}</h2>
				<p className='text-gray-700 max-w-3xl mx-auto'>{description}</p>
			</div>

			<div className='flex flex-col md:flex-row-reverse items-center justify-center mt-12 gap-6 pl-6 '>
				<div className='w-2/5 '>
					<img
						src={imageSrc}
						alt={`${title} phase visual`}
						className='w-full max-w-2xl mx-auto shadow-lg'
					/>
				</div>

				{/* Steps Section: Displayed second on mobile and takes 1/3 on desktop */}
				<div className='w-full md:w-1/3 '>
					{steps.map((step, index) => (
						<div
							key={index}
							className='mb-8'>
							<h3 className='text-2xl font-serif text-gray-800 mb-4'>
								Step {index + 1}. {step.title}
								{step.duration && (
									<span className='text-lg ml-2 text-gray-600'>
										({step.duration})
									</span>
								)}
							</h3>
							<ul className='list-disc pl-5 space-y-2'>
								{step.details.map((detail, i) => (
									<li
										key={i}
										className='text-gray-700'>
										{detail}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
