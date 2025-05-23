
import { ArrowForward } from '@mui/icons-material';
import React from 'react';

const resourcePosts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		date: 'Mar 16, 2020',
		category: 'Marketing',
		excerpt:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 2,
		title: 'How to use search engine optimization',
		date: 'Apr 20, 2020',
		category: 'SEO',
		excerpt:
			'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque. Voluptatem enim repellendus qui voluptas in...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Sarah Johnson',
			role: 'SEO Specialist',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 3,
		title: 'Improve your customer experience',
		date: 'May 4, 2020',
		category: 'Customer Success',
		excerpt:
			'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrum exercitationem...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Robert Chen',
			role: 'Customer Experience Lead',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 4,
		title: 'Maximize Your Productivity',
		date: 'Jun 10, 2020',
		category: 'Business',
		excerpt:
			'Discover strategies to enhance your workflow, boost efficiency, and maximize productivity in your day-to-day operations...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Emily Davis',
			role: 'Productivity Coach',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 5,
		title: 'The Future of Marketing',
		date: 'Jul 22, 2020',
		category: 'Marketing',
		excerpt:
			'Stay ahead of the curve with insights on digital trends, innovative strategies, and cutting-edge marketing tactics...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'James Wilson',
			role: 'Marketing Director',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 6,
		title: 'How to Build a Brand',
		date: 'Aug 15, 2020',
		category: 'Branding',
		excerpt:
			'Learn the secrets to crafting an impactful brand identity that resonates with your audience and stands the test of time...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Sophia Lee',
			role: 'Brand Strategist',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 7,
		title: 'Innovative Solutions in Tech',
		date: 'Sep 30, 2020',
		category: 'Technology',
		excerpt:
			'Explore the latest trends in technology and innovative solutions that are transforming industries worldwide...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'David Kim',
			role: 'CTO',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 8,
		title: 'SEO Best Practices for 2021',
		date: 'Oct 12, 2020',
		category: 'SEO',
		excerpt:
			'Unlock the power of search engine optimization with our comprehensive guide to the best practices for 2021...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Laura Martinez',
			role: 'SEO Specialist',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 9,
		title: 'Customer Engagement Strategies',
		date: 'Nov 5, 2020',
		category: 'Customer Success',
		excerpt:
			'Learn effective strategies for engaging your customers and building lasting relationships through innovative techniques...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Daniel Perez',
			role: 'Customer Success Manager',
			avatar: '/placeholder.svg?height=40&width=40',
		},
	},
	{
		id: 10,
		title: 'Digital Transformation in Business',
		date: 'Dec 1, 2020',
		category: 'Business',
		excerpt:
			'Embrace digital transformation with insights on modernizing your business operations and leveraging technology for growth...',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg',
		author: {
			name: 'Anna Brown',
			role: 'Business Consultant',
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

					<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded flex items-center self-start'>
						Read More
						<ArrowForward />
					</button>
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

