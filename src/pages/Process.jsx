import RenovationPhase from '../components/ProcessPhaseLayout';
import ContactForm from '../components/contact';

const phaseSteps = {
	design: [
		{
			title: 'Concept Design',
			duration: '',
			details: [
				'Explore your design preferences, personal style, and renovation goals',
				'Share inspiration photos you have gathered for the project',
				'View the space and collect detailed site measurements',
			],
		},
		{
			title: 'Design Development',
			duration: '(1-3 weeks)',
			details: [
				'Develop a floor plan of existing and proposed project areas',
				'Create 3D model with 1-2 concepts for each space',
				'Conceptual look and feel images',
			],
		},
	],
};

const Process = () => {
	const phases = [
		{
			phaseNumber: 1,
			title: 'Planning',
			description:
				'Our goal is to understand your vision, assess our mutual fit and create a personalized plan for your dream renovation.',
			steps: [
				{
					title: 'Discovery Call',
					duration: '30 minutes',
					details: [
						'Introduce your project and goals',
						'Assess mutual fit and potential for collaboration',
						'Schedule a site visit if our objectives align',
					],
				},
				{
					title: 'Site Visit and Ideas',
					duration: '1 hour',
					details: [
						'Conduct an exploratory walkthrough of your space',
						'Discuss your vision and expectations',
					],
				},
			],
		},
		{
			phaseNumber: 2,
			backgroundColor: '#f5f5f5',
			imageSrc:
				'https://baypointcontracting.ca/wp-content/uploads/bb-plugin/cache/Bay-Point-Contracting-Kitchen-Dining-2024_001-Large-square-ee1e8a9c5428f84c04899928e11afa20-f0glt7ns9uyv.jpeg',
			title: 'Design',
			description:
				'Our goal is to collaboratively explore design preferences, develop accurate plans and visuals, and refine the design based on your input.',
			steps: [
				...phaseSteps.design,
				{
					title: 'Concept Design Presentation (1-3 hours)',
					duration: '',
					details: [
						'Review initial concepts including model walk-through, conceptual materials and fixtures',
						'Selection of preferred direction',
						'Refine design based on feedback',
					],
				},
			],
		},
		{
			phaseNumber: 3,
			title: 'Design',
			description:
				'Our goal is to collaboratively explore design preferences, develop accurate plans and visuals, and refine the design based on your input.',
			steps: phaseSteps.design,
		},
		{
			phaseNumber: 4,
			backgroundColor: '#f5f5f5',
			title: 'Design',
			description:
				'Our goal is to collaboratively explore design preferences, develop accurate plans and visuals, and refine the design based on your input.',
			steps: phaseSteps.design,
		},
		{
			phaseNumber: 5,
			title: 'Design',
			description:
				'Our goal is to collaboratively explore design preferences, develop accurate plans and visuals, and refine the design based on your input.',
			steps: phaseSteps.design,
		},
	];

	return (
		<>
			<div>
				{phases.map((phase) => (
					<RenovationPhase
						key={phase.phaseNumber}
						backgroundColor={phase.backgroundColor}
						phaseNumber={phase.phaseNumber}
						title={phase.title}
						description={phase.description}
						steps={phase.steps}
						imageSrc={phase.imageSrc}
					/>
				))}
			</div>
			<ContactForm />
		</>
	);
};

export default Process;
