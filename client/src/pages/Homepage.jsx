import DesignSections from '../components/DesignSections';
import AboutSection from '../components/about';
import ScrollingTestimonials from '../components/testimonial';
import WhyChooseUs from '../components/why_choose_us';
import FAQPage from '../components/faq';
import ContactForm from '../components/contact';
import KiSushDifference from '../components/kizush';
import ResourceList from '../components/resource_card';
import Projects from '../components/portfolio';


const sections = [

	{
		id: 1,
		title: 'Remodeling',
		description:
			'Transform your space with our expert construction services. Our skilled craftsmen bring precision and care to every project, ensuring superior quality and attention to detail that exceeds your expectations.',
		image: '/project_images/project_four.png',
		imageAlt: 'Construction project in progress',
	},
	{
		id: 2,
		title: 'Design',
		description:
			'Elevate your home with our custom design services, where creativity meets functionality. Our expert designers work with you to bring your vision to life, ensuring every detail reflects your personal style and enhances your living experience.',
		image: '/medias/design.png',
		imageAlt: 'Modern kitchen interior with white cabinets and island',
	},
	{
		id: 3,
		title: 'Construction & Renovation',
		description:
			'Breathe new life into your existing space with our renovation services. We specialize in updating and modernizing homes while preserving their unique character and maximizing their potential.',
		image: '/project_images/remodeling.jpeg',
		imageAlt: 'Home renovation project',
	},
	{
		id: 4,
		title: 'Maintainance',
		description:
			'Keep your home in perfect condition with our comprehensive maintenance services. Our preventive care and prompt attention to details ensure your space remains beautiful and functional for years to come.',
		image: '/medias/kizush_difference.jpg',
		imageAlt: 'Home maintenance work',
	},
];

function HomeSection() {
	return (
		<>
			<AboutSection
				title='About Us'
				subtitle='Design Renovation & Construction Specialist In Canada'
				description='Whether it is a custom build, new construction, or renovation, clients quickly discover that working with Kizzy is not just a transaction—it is a true partnership grounded in trust, open communication, and aligned goals.'
			/>
			<DesignSections sections={sections} />
			<Projects />
			<WhyChooseUs />
			<KiSushDifference />
			<ContactForm></ContactForm>
			<ScrollingTestimonials />
			<FAQPage />
		</>
	);
}
export default HomeSection;

export function Resources(){
	return(
		<>
		<ResourceList />
		</>
	)
}
