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
			'/medias/kizush_banner.png',
		imageAlt: 'Modern sitting area with kitchen and dining room',
	},
	{
		id: 2,
		title: 'Vision',
		description:
			'Kizush Construction is an authority in design and renovation services, known for our commitment to quality and client satisfaction. Our vision is to be the trusted source for clients seeking personalized and exceptional renovation experiences, setting the standard for excellence within our community.',
		image:
			'/medias/kizush_hat.png',
		imageAlt: 'Monochrome sitting area ',
	},
];

const TeamBio = [
	{
		id: 1,
		title: 'Kizzy: Owner, Visionary',
		image:
			'/medias/kizush_difference.jpg',
		paragraphs: [
			"Meet Kizzy, the visionary behind Kizush Constructions’ growing reputation for quality craftsmanship and thoughtful design. With a deep passion for building and over twenty years of hands-on experience across Canada, Kizzy brings energy, precision, and a personal commitment to excellence in every project.",

"At the heart of Kizzy’s work is a belief that every home should be a reflection of integrity, functionality, and beauty. Whether it's a custom build or a renovation, clients quickly learn that working with Kizzy is more than a transaction—it's a collaboration built on trust, clear communication, and shared goals.",

"He sees Kizush Constructions not just as a business, but as a calling—an opportunity to serve others while building lasting spaces that truly feel like home."
		],
	},
];

function AboutPage() {
	return (
		<>
			<AboutSection
				title='Welcome to Kizush Constructions'
				subtitle='Our Company, Mission, and Vision'
				description={`
At Kizush Construction, we bring your vision to life—whether it is a new build, a complete renovation, a custom remodelling, or a simple home improvement project. With a passion for transforming spaces and a commitment to excellence, we take pride in being your trusted partner for all your construction and design needs. With over a decade experience in the industry, we have built our reputation on quality craftsmanship, innovative solutions, and personalized service. From concept to completion, our team delivers tailored residential and commercial projects that enhance both form and function.

Over the years, we have evolved into a full-service construction and renovation company, earning the trust of our clients through integrity, reliability, and results that speak for themselves.

Let us build something great together.`}
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
