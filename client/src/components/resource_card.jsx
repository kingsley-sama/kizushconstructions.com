
import { ArrowForward } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
const resourcePosts = [
	{
		id: 1,
		title: 'Winter Building Codes and Cold Weather Construction in Canada',
		date: 'Mar 16, 2024',
		category: 'Building Codes',
		excerpt:
			'Understanding CSA standards and provincial building codes for winter construction. Learn essential practices for concrete pouring, foundation work, and material handling in sub-zero temperatures across Canadian provinces...',
		imageUrl:
			'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'Robert MacLeod',
			role: 'Senior Project Manager',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 2,
		title: 'Energy Efficiency Standards for New Homes in Ontario and BC',
		date: 'Apr 20, 2024',
		category: 'Energy Efficiency',
		excerpt:
			'Navigate the latest EnerGuide requirements, R-2000 standards, and Net Zero Energy housing initiatives. Complete guide to insulation, HVAC systems, and sustainable building practices...',
		imageUrl:
			'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'Jennifer Thompson',
			role: 'Green Building Specialist',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 3,
		title: 'Foundation Solutions for Canadian Clay and Frost Line Requirements',
		date: 'May 4, 2024',
		category: 'Foundations',
		excerpt:
			'Master foundation design for challenging Canadian soil conditions. From expansive clay in Alberta to bedrock in the Canadian Shield, learn proper excavation, waterproofing, and frost protection techniques...',
		imageUrl:
			'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'Michael Chen',
			role: 'Structural Engineer',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 4,
		title: 'Maximizing Construction Productivity During Short Summer Seasons',
		date: 'Jun 10, 2024',
		category: 'Project Management',
		excerpt:
			'Strategic planning for Canada\'s compressed construction season. Optimize scheduling, material delivery, and crew management to maximize output during the critical May-October building window...',
		imageUrl:
			'https://images.unsplash.com/photo-1625149051515-aea2bff51dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'Sarah Davidson',
			role: 'Construction Scheduler',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 5,
		title: 'The Future of Modular and Prefab Construction in Canada',
		date: 'Jul 22, 2024',
		category: 'Innovation',
		excerpt:
			'Explore how modular construction is revolutionizing Canadian building. From factory-built homes to commercial structures, discover cost savings, quality control, and year-round construction possibilities...',
		imageUrl:
			'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'David Wilson',
			role: 'Innovation Director',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 6,
		title: 'How to Navigate Canadian Permit Processes and Municipal Requirements',
		date: 'Aug 15, 2024',
		category: 'Permits & Regulations',
		excerpt:
			'Master the permit application process across Canadian municipalities. From development permits to occupancy certificates, streamline approvals and avoid costly delays in your construction projects...',
		imageUrl:
			'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'Lisa Zhang',
			role: 'Regulatory Affairs Specialist',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 7,
		title: 'Advanced Roofing Solutions for Heavy Snow Loads',
		date: 'Sep 30, 2024',
		category: 'Roofing',
		excerpt:
			'Design and install roofing systems that withstand Canadian winters. From snow load calculations to ice dam prevention, ensure structural integrity and longevity in harsh weather conditions...',
		imageUrl:
			'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'James Morrison',
			role: 'Roofing Specialist',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 8,
		title: 'Sustainable Building Materials and Local Canadian Suppliers',
		date: 'Oct 12, 2024',
		category: 'Sustainability',
		excerpt:
			'Source eco-friendly building materials from Canadian suppliers. Discover FSC-certified lumber, recycled steel, and innovative materials that reduce environmental impact while supporting local economy...',
		imageUrl:
			'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
		author: {
			name: 'Amanda Rodriguez',
			role: 'Sustainability Coordinator',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	

];

const ResourceCard = ({ post }) => {

	const colors = {
		primary: '#3b82f6',
		primaryLight: '#dbeafe',
		accent: '#ed6a11',
		textPrimary: '#111827',
		textSecondary: '#4b5563',
	};

	return (
		<div className='max-w-md overflow-hidden rounded-lg shadow-lg bg-white'>
			<img
				src={post.imageUrl || '/placeholder.svg'}
				alt={post.title}
				className='w-full h-48 object-cover'
			/>

			<div className='p-6'>
				<div className='flex items-center text-sm text-gray-500 mb-2'>
					<span>{post.date}</span>
					<span className='mx-2'>·</span>
					<span className='text-[var(--primary)]'>{post.category}</span>
				</div>

				<div className='pt-4 flex flex-col'>
					<div className='mb-2'>
						<span className='bg-blue-100 text-[var(--primary)] font-semibold px-3 py-1 rounded text-xs uppercase tracking-wider'>
							{post.category}
						</span>
					</div>

					<h2 className='font-bold mb-2 leading-snug text-xl text-gray-900'>
						{post.title}
					</h2>

					<p className='mb-3 leading-relaxed text-gray-600 text-sm flex-grow'>
						{post.excerpt}
					</p>
					<Link to={`/notfound`} className='text-[var(--primary)] hover:underline'>
					<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded flex items-center self-start'>
						Read More
						<ArrowForward />
					</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const ResourceList = () => {
	return (
		<div className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl font-bold text-gray-900 mb-8'>
					Latest Blog Posts
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{resourcePosts.map((post) => (
						<ResourceCard
							key={post.id}
							post={post}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResourceList;

