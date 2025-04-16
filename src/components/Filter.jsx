import { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function CategoryFilter({
	title = 'Filter by Category type',
	categories = [
		'Accessibility',
		'Addition',
		'Basement',
		'Bathroom',
		'Elevators',
		'Exterior',
		'Kitchen',
		'Main Floor',
		'Second Floor',
		'Whole Home',
	],
	projects = [],
	className = '',
}) {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState(projects);

	useEffect(() => {
		// Filter projects based on selected categories
		if (selectedCategories.length === 0) {
			// If no categories selected, show all projects
			setFilteredProjects(projects);
		} else {
			// Filter projects that match any of the selected categories
			const filtered = projects.filter((project) =>
				project.categories.some((category) =>
					selectedCategories.includes(category)
				)
			);
			setFilteredProjects(filtered);
		}
	}, [selectedCategories, projects]);

	const toggleCategory = (category) => {
		setSelectedCategories((prev) => {
			if (prev.includes(category)) {
				return prev.filter((cat) => cat !== category);
			} else {
				return [...prev, category];
			}
		});
	};

	return (
		<div
			className={`project-gallery w-full max-w-6xl mx-auto px-4 pb-4 ${className}`}>
			<h2 className='text-3xl sm:text-4xl font-medium text-center text-gray-800 my-8'>
				{title}
			</h2>

			{/* Category Filter Buttons */}
			<div className='flex flex-wrap justify-center gap-2 mb-12'>
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => toggleCategory(category)}
						className={`px-4 py-2 rounded border transition-colors ${
							selectedCategories.includes(category)
								? 'bg-orange-500 text-white border-orange-500'
								: 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
						}`}>
						{category}
					</button>
				))}
			</div>

			{/* Projects Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{filteredProjects.map((project) => (
					<div
						key={project.id}
						className='relative overflow-hidden group shadow-md'>
						{/* Project Image */}
						<div className='overflow-hidden'>
							<img
								src={project.imageUrl}
								alt={project.title}
								className='w-full h-60 sm:h-72 md:h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105'
							/>
						</div>

						{/* Project Title Overlay */}
						<div className='absolute bottom-0 left-0 right-0 p-4  bg-black bg-opacity-40'>
							<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between text-white'>
								<h3 className='text-xl font-medium'>{project.title}</h3>
								{project.location && (
									<div className='flex items-center mt-1 sm:mt-0'>
										<span className='inline-block mr-1'>
											<LocationOnIcon />
										</span>
										<span>{project.location}</span>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Empty State */}
			{filteredProjects.length === 0 && (
				<div className='text-center py-12'>
					<p className='text-gray-600'>
						No projects match the selected filters.
					</p>
				</div>
			)}
		</div>
	);
}
