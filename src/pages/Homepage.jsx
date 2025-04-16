import DesignSections from '../components/DesignSections';
import AboutSection from '../components/about';
import Portfolio from '../components/portfolio';
import ScrollingTestimonials from '../components/testimonial';
import WhyChooseUs from '../components/why_choose_us';
import FAQPage from '../components/faq';
import ContactForm from '../components/contact';
import KiSushDifference from '../components/kizush';

const sections = [
	{
		id: 1,
		title: 'Design',
		description:
			'Elevate your home with our custom design services, where creativity meets functionality. Our expert designers work with you to bring your vision to life, ensuring every detail reflects your personal style and enhances your living experience.',
		image: '/images/im3rd-media-FJZtZldA-uE-unsplash.jpg',
		imageAlt: 'Modern kitchen interior with white cabinets and island',
	},
	{
		id: 2,
		title: 'Build',
		description:
			'Transform your space with our expert construction services. Our skilled craftsmen bring precision and care to every project, ensuring superior quality and attention to detail that exceeds your expectations.',
		image: '/images/webaliser-_TPTXZd9mOo-unsplash.jpg',
		imageAlt: 'Construction project in progress',
	},
	{
		id: 3,
		title: 'Renovate',
		description:
			'Breathe new life into your existing space with our renovation services. We specialize in updating and modernizing homes while preserving their unique character and maximizing their potential.',
		image: '/images/jolene-hardy-uuApNXxgcRM-unsplash.jpg',
		imageAlt: 'Home renovation project',
	},
	{
		id: 4,
		title: 'Maintain',
		description:
			'Keep your home in perfect condition with our comprehensive maintenance services. Our preventive care and prompt attention to details ensure your space remains beautiful and functional for years to come.',
		image: '/images/webaliser-_TPTXZd9mOo-unsplash.jpg',
		imageAlt: 'Home maintenance work',
	},
];

function HomeSection() {
	return (
		<>
			<AboutSection
				title='About Us'
				subtitle='Design Renovation & Construction Specialist In Canada'
				description='At Kizush Constructions, we specialize in bringing your vision to life
          through thoughtful design and renovation. Crafting a space that
          reflects your style and dreams, our in-house design team and
          renovation expertise come together for a customized and stylish
          transformation of your home.'
			/>
			<DesignSections sections={sections} />
			<Portfolio />
			<WhyChooseUs />
			<KiSushDifference />
			<ContactForm></ContactForm>
			<ScrollingTestimonials />
			<FAQPage />
		</>
	);
}
export default HomeSection;
