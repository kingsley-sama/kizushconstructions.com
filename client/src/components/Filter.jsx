import { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProjectCard from './project_card';

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
		if (selectedCategories.length === 0) {
			setFilteredProjects(projects);
		} else {
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

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
			{filteredProjects.map((project) => (
				<ProjectCard key={project.id} item={project} />
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
