import CategoryFilter from '../components/Filter';
import KuzushDifference from '../components/kizush';

const projects = [
	{
		src: '/project_images/project_three.jpeg',
		location: 'Ontario',
		caption: '',
		id: "0",
		categories: ['Bathroom', 'Main Floor']
	},
	{
		src: '/project_images/project_one.jpeg',
		location: 'Ontario',
		caption: '',
		id: "1",
		categories: ['Kitchen', 'Main Floor']
	},
	{
		src: '/project_images/project_four.png',
		location: 'Simcoe County',
		caption: '',
		id: '4',
		categories: ['Exterior', 'Whole Home']
	},
	{
		src: '/project_images/construction.jpeg',
		location: 'Barrie',
		caption: '',
		id: "2",
		categories: ['Addition', 'Exterior']
	},
	{
		src: '/project_images/remodeling.jpeg',
		location: 'Toronto',
		caption: '',
		id: "3",
		categories: ['Whole Home', 'Kitchen', 'Bathroom']
	},
	{
		src: '/project_images/project_five.png',
		location: 'Vaughan',
		caption: '',
		id: '5',
		categories: ['Basement', 'Addition']
	},
];

const Projects = () => {
	return (
		<>
			<CategoryFilter
				title='Filter by Project Type'
				categories={[
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
				]}
				projects={projects}
				onFilterChange={(selected) => {
					// Optional callback if you need to handle filter changes
				}}
			/>
			<KuzushDifference
				title='Primary Ensuite Oasis'
				primaryText="Explore the transformation of a primary ensuite into a spa oasis, featuring a spacious, luxury walk-in shower designed for two and a chic 66-inch freestanding tub for the ultimate bathing experience. This full refresh integrates soothing neutrals and bespoke tile patterns, enhancing the serene atmosphere. Highlights include a travertine-patterned floor, an expansive double vanity with ample storage, and stylish vinyl grass-cloth wallpaper that complements the room's refined color palette."
				secondaryText=''
				buttonText='Learn More'
				buttonOnClick={() => {}}
				mainImage={{
					src: 'https://baypointcontracting.ca/wp-content/uploads/2024/05/5816d7b801c70e6869f85272e2df56e2-640x457.jpg',
					alt: 'White Bathroom with a bathtub and shower',
				}}
				bottomImages={[
					{
						src: 'https://baypointcontracting.ca/wp-content/uploads/bb-plugin/cache/e1cd54a8ce124e97a1802cd289001541-640x427-square-1f30c7a7edefa06fab74421e48a8d159-zdnc5wm0jl48.jpg',
						alt: 'White Bathtub and sink',
						span: 1,
					},
					{
						src: 'https://baypointcontracting.ca/wp-content/uploads/bb-plugin/cache/dd786b7f15616e4f1d45dafd5849c4b9-640x427-square-af2959a31cb9d44617ab9f89424dbeb4-qta2fj4r1e7d.jpg',
						alt: 'White Bathroom with a bathtub and shower',
						span: 1,
					},
					{
						src: 'https://baypointcontracting.ca/wp-content/uploads/bb-plugin/cache/afafe014e39b55907347ce883488085d-572x800-square-2edc761b2fa0d21a4a58be25460da271-208c954y7kmz.jpg',
						alt: 'White Dressing table and bathroom Mirror',
						span: 1,
					},
				]}
			/>
		</>
	);
};

export default Projects;