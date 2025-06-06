import react from 'react';
import AboutSection from '../components/about';
import DesignSections from '../components/DesignSections';
import FAQPage from '../components/faq';
import ScrollingTestimonials from '../components/testimonial';
import ContactForm from '../components/contact';

const sections = [
	{
		id: 1,
		title: 'Design',
		description:
			'Design your dream home with an expert team that will make it a reality. At Kizush Contracting, we are passionate about crafting spaces that blend functionality and beauty. From the initial idea to the final touches, we collaborate closely with you, getting to know your unique style and goals.',
		image:
			'/medias/design.png',
		imageAlt: 'Modern sitting area interior with white sofas and large windows',
	},
	{
		id: 2,
		title: 'Renovations',
		description:
			"Whether it's a single room makeover or a complete home transformation, our renovation services breathe new life into your living spaces. From outdated kitchens to cramped bathrooms, we specialize in revitalizing every corner of your home to better suit your lifestyle and aesthetic preferences.",
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Bay-Point-Contracting-Main-Floor-Reno-2023_002-scaled.jpeg',
		imageAlt: 'Kitchen with white cabinets and high stools',
	},
	{
		id: 3,
		title: 'Additions',
		description:
			'Dreaming of more space? Turn your dream into a reality with a custom home addition by Bay Point Contracting. We specialize in building spaces that integrate seamlessly with your existing home. As your partner, we help you create the room you need to live, work, and play without compromise.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Atwell_02-copyae-Large.jpeg',
		imageAlt: 'Home renovation project',
	},
	{
		id: 4,
		title: 'Kitchens',
		description:
			'Transform your kitchen into the heart of your home with Bay Point Contracting. Our comprehensive kitchen renovation services are designed to enhance both the beauty and functionality of your cooking and dining spaces. From modern layouts to classic designs, we tailor every detail to suit your lifestyle and personal taste.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Enns-Whole-Home20240111_004-scaled.jpeg',
		imageAlt: 'Home maintenance work',
	},
	{
		id: 5,
		title: 'Bathrooms',
		description:
			'Build your perfect sanctuary with the bathroom of your dreams. Bay Point Contracting is your partner in creating a serene place for you to unwind. From sleek and modern designs to sophisticated and timeless styles, our bathroom renovation services ensure your new space is as functional as it is stunning.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Addition-20240421_007-Large.jpeg',
		imageAlt: 'Bathroom work',
	},
	{
		id: 6,
		title: 'Basements',
		description:
			'Discover the full potential of your basement with Bay Point Contracting. Our basement renovation services convert underutilized spaces into usable areas made for all your living needs. With our expert craftsmanship and creative solutions, you can enjoy a basement that adds value and joy to your home.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Bay-Point-Contracting-Basement-2024-Large.jpeg',
		imageAlt: 'Sitting Area',
	},
	{
		id: 8,
		title: 'Exterior Upgrades',
		description:
			'Give your home an outdoor makeover you’ll enjoy through the seasons. Our exterior upgrade services are designed to enhance your home’s aesthetic and revitalize your outdoor living experience. We transform your backyard into a functional and inviting oasis that complements your lifestyle and enhances curb appeal.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/05/Barriero-1-no-flag-Large.jpeg',
		imageAlt: 'Cottage house and forest view',
	},
	{
		id: 8,
		title: 'Accessibility Improvements',
		description:
			'Ensure your home is accessible for all with thoughtfully designed solutions for mobility needs. At Bay Point Contracting, we understand the importance of creating a home environment that is accommodating and safe for people of every ability. We collaborate with you to improve and enhance access throughout your home.',
		image:
			'https://baypointcontracting.ca/wp-content/uploads/2024/06/Turgeon-3-copyae-Large-1.jpeg',
		imageAlt: 'Staircase with handrail',
	},
];

const Services = () => {
	return (
		<>
			<AboutSection
				title='Our Services'
				subtitle='What We Do'
				description='Kizush transforms homes to match your evolving lifestyle. From concept to completion, we handle every aspect of renovation—whether it’s a single room, full remodel, stylish additions, or exterior upgrades. Led by our in-house designer, we craft spaces that reflect your taste, needs, and budget. Let Kizush unlock your home’s full potential.'
			/>
			<DesignSections sections={sections} />
			<FAQPage />
			<ScrollingTestimonials />
			<ContactForm />
		</>
	);
};

export default Services;
