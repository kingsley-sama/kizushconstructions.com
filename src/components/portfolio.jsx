import React from 'react';
import ProjectCard from './project_card';

const Projects = () => {
	const galleryItems = [
		{
			src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
			alt: 'Mondrian',
			caption: 'Mondrian',
		},
		{
			src: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77',
			alt: 'Nirnia',
			caption: 'Nirnia',
		},
		{
			src: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77',
			alt: 'Nirnia',
			caption: 'Nirnia',
		},
		{
			src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
			alt: 'Artex',
			caption: 'Artex',
		},
		{
			src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
			alt: 'Brera',
			caption: 'Brera',
		},
		{
			src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
			alt: 'Alea Pro',
			caption: 'Alea Pro',
		},
	];

	return (
		<div className='container mx-auto px-4 py-12 bg-white '>
			<div className='flex lg:flex-row flex-col gap-2 items-center py-12'>
				<h1 className='text-4xl max-h-fit md:w-1/2 md:text-5xl font-bold text-center text-primary'>
					Our Projects
				</h1>
				<div className='max-w-l px-4 lg:pr-12'>
					<p className='text-muted-foreground text-lg mb-4 text-primary'>
						At Kizush Constructions, we believe in transforming spaces with purpose
					</p>
					<button
						variant='outline'
						className='border-2 rounded-md border-accent p-2 text-accent hover:bg-primary hover:border-0 hover:text-white transition-colors'>
						View More Projects
					</button>
				</div>
			</div>

			{/* Mobile Scroll */}
			<div className='relative md:hidden'>
				<div className='flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4'>
					{galleryItems.map((item, index) => (
						<ProjectCard key={index} item={item} />
					))}
				</div>
			</div>

			{/* Desktop Grid */}
			<div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
				{galleryItems.map((item, index) => (
					<ProjectCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default Projects;
