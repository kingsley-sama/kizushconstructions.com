import CategoryFilter from '../components/Filter';
import KuzushDifference from '../components/kizush';

const projects = [
	{
		id: 1,
		title: 'Modern Mansard',
		location: 'Ontario',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/10/56A0391-Large-1200x800.jpeg',
		categories: ['Accessibility', 'Addition'],
	},
	{
		id: 2,
		title: 'Elevated Addition',
		location: 'Barrie',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Addition-20240421_24-Large-1200x800.jpeg',
		categories: ['Accessibility', 'Bathroom'],
	},
	{
		id: 3,
		title: 'White Wood Kitchen',
		location: 'Orange Ville',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/10/56A0391-Large-1200x800.jpeg',
		categories: ['Accessibility', 'Kitchen'],
	},
	{
		id: 4,
		title: 'Bold Monochrome',
		location: 'Innisfil',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2025/02/Bay-Point-Contracting-Monochrome-Bath_07-Large-533x800.jpeg',
		categories: ['Accessibility', 'Kitchen'],
	},
	{
		id: 5,
		title: 'Kitchen Makeover',
		location: 'Orangeville',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/12/Bay-Point-Contracting-Kitchen-2020_0005_HDR-Large-1200x800.jpeg',
		categories: ['Accessibility', 'Kitchen'],
	},
	{
		id: 6,
		title: 'Elegant Home Reno',
		location: 'New Market',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/12/Bay-Point-Contracting-Main-Floor-Reno-28aewarm-1-Large-1199x800.jpeg',
		categories: ['Accessibility', 'Addition', 'Second Floor'],
	},
	{
		id: 7,
		title: 'Ranch Revival',
		location: 'New Tecumseth',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Enns-Whole-Home20240111_004-1199x800.jpeg',
		categories: ['Accessibility', 'Addition', 'Second Floor', 'main floor'],
	},
	{
		id: 8,
		title: 'Primary Ensuite Oasis',
		location: 'Barrie',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/Bay-Point-Contracting_Anderson_2024_14-Large-1200x800.jpeg',
		categories: ['Accessibility', 'Bathroom'],
	},
	{
		id: 9,
		title: 'Whitehaven Kitchen',
		location: 'Barrie',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0678-Enhanced-NR-Custom-1120x800.jpeg',
		categories: ['Accessibility', 'Kitchen'],
	},
	{
		id: 10,
		title: 'Townhouse Renewal',
		location: 'Woodstock',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Atwell_13-copyae-Large-1200x800.jpeg',
		categories: ['Accessibility', 'Addition', 'Exterior'],
	},
	{
		id: 11,
		title: 'Accessibility Upgrade',
		location: 'Ontario',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Turgeon-2ae-Large-1-1067x800.jpeg',
		categories: ['Accessibility', 'Addition', 'Exterior'],
	},
	{
		id: 12,
		title: 'Basement Refresh',
		location: 'Orillia',
		imageUrl:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Sharma-Living-Space-Large-1199x800.jpg',
		categories: ['Accessibility', 'Addition', 'Basement'],
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
					// Handle the filtering logic here
					console.log('Selected categories:', selected);
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
