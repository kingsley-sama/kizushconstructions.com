import react from 'react';
import AboutSection from '../components/about';

const sections = [
	{
		id: 1,
		title: 'Design',
		description:
			'Elevate your home with our custom design services, where creativity meets functionality. Our expert designers work with you to bring your vision to life, ensuring every detail reflects your personal style and enhances your living experience.',
		image: '/images/im3rd-media-FJZtZldA-uE-unsplash.jpg',
		imageAlt: 'Modern kitchen interior with white cabinets and island',
	},
	{
		id: 2,
		title: 'Build',
		description:
			'Transform your space with our expert construction services. Our skilled craftsmen bring precision and care to every project, ensuring superior quality and attention to detail that exceeds your expectations.',
		image: '/images/webaliser-_TPTXZd9mOo-unsplash.jpg',
		imageAlt: 'Construction project in progress',
	},
	{
		id: 3,
		title: 'Renovate',
		description:
			'Breathe new life into your existing space with our renovation services. We specialize in updating and modernizing homes while preserving their unique character and maximizing their potential.',
		image: '/images/jolene-hardy-uuApNXxgcRM-unsplash.jpg',
		imageAlt: 'Home renovation project',
	},
	{
		id: 4,
		title: 'Maintain',
		description:
			'Keep your home in perfect condition with our comprehensive maintenance services. Our preventive care and prompt attention to details ensure your space remains beautiful and functional for years to come.',
		image: '/images/webaliser-_TPTXZd9mOo-unsplash.jpg',
		imageAlt: 'Home maintenance work',
	},
];

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

export default function DesignSections() {
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
							hello world
						</div>
					)}
				</div>
			))}
		</div>
	);
}
