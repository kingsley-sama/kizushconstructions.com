import DesignSections from '../components/DesignSections';
import AboutSection from '../components/about';
import KizushValues from '../components/values';
import TeamMemberBio from '../components/teamMemberBio';
import FAQPage from '../components/faq';

const sections = [
	{
		id: 1,
		title: 'Mission',
		description:
			'Our mission is to be a company of passionate people working and serving together to bring our client’s dreams to reality by creating spaces that inspire and enhance their lives by delivering a professional and rewarding renovation experience.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Enns-Whole-Home20240111_005-scaled.jpeg',
		imageAlt: 'Modern sitting area with kitchen and dining room',
	},
	{
		id: 2,
		title: 'Vision',
		description:
			'kizush Construction is an authority in design and renovation services, known for our commitment to quality and client satisfaction. Our vision is to be the trusted source for clients seeking personalized and exceptional renovation experiences, setting the standard for excellence within our community.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/002-Mi-Townhouse-High-Res-Large-1.jpg',
		imageAlt: 'Monochrome sitting area ',
	},
];

const TeamBio = [
	{
		id: 1,
		title: 'Kizzy: Father, Owner, Visionary',
		image:
			'/medias/kizush_difference.jpg',
		paragraphs: [
			"Meet Paul, the driving force behind Bay Point Contracting's commitment to excellence in design and renovations. With roots tracing back to his early days working alongside his father, he brings over three decades of experience to every project and an unwavering dedication to quality, professionalism, and values.",
			"Paul's commitment to quality and dedication to his principles infuse every aspect of his work. With Paul, your renovation project is a partnership, driven by integrity, expertise, and a genuine passion for creating extraordinary spaces.",
			"Beyond the blueprints and job sites, you'll find Paul spending time with his family, harnessing the wind on his sailboat, and finding fulfillment in serving his community through his church. As a man of faith, Paul sees himself as the steward of the business and constantly endeavours to honour God in his daily life and actions.",
		],
		quote:
			'Recognizing, as the owner of this business, that I am a steward of this company; I will lead with the endeavour of constantly striving to honour God in all I say and do.',
	},
	{
		id: 2,
		title: 'Rebecca Farnsworth: Interior Designer',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/rebecca-640x800.jpg',
		paragraphs: [
			'A graduate of Ryerson University’s CIDA accredited Interior Design program, Rebecca brings a rich background in custom residential and retail design to her craft. With a client-centred approach cultivated through her diverse experiences, she navigates the design process with creativity and expertise, turning client visions into tangible realities.',
			'From a young age, Rebecca recognized her calling in the creative realm, embarking on a fulfilling journey in interior design. She finds joy in guiding projects through various design phases, ensuring each aspect aligns with her clients’ aspirations.',
			'Rebecca believes that trust and open communication are the foundation for exceptional client-designer relationships. With 10+ years working with CAD software, she skillfully translates client ideas into compelling visual presentations and detailed working drawings.',
			'In her free time, Rebecca remains dedicated to her creative pursuits and can often be found painting, experimenting with new recipes, or engaging in DIY projects around her home.',
		],
		quote: '',
	},
];

function AboutPage() {
	return (
		<>
			<AboutSection
				title='Welcome to Kizush Constructions'
				subtitle='Our Company, Mission, and Vision'
				description={`With a passion for transforming spaces and a commitment to excellence, we take pride in being your trusted partner for all your renovation needs.

Established in 2010, our journey began with a vision to transform homes through custom renovations that enhance both form and function. Over the years, we’ve evolved into a reputable design and renovation company, earning the trust of our clients through our dedication to customer service and quality craftsmanship.`}
			/>
			<DesignSections sections={sections} />
			<KizushValues />
			<AboutSection
				title='Our Team'
				subtitle='About Us'
				description='Kizush Constructions is a passionate team of professionals looking to serve you through the entire design and renovation process.'
			/>
			{TeamBio.map((member) => (
				<TeamMemberBio
					key={member.id}
					{...member}
				/>
			))}
			<AboutSection
				title='The Kizush Difference'
				subtitle='Why Work With Us'
				description='Discover the difference of working with a local contractor who will stay on budget, complete the job on time and deliver exactly what you contracted them to do. Below are a few key points that make us stand out against the competition.'
			/>
			<FAQPage />
		</>
	);
}
export default AboutPage;
