import { ArrowRight } from '@mui/icons-material';
import PropTypes from 'prop-types';

export default function ReusableDifference({
	title = 'The KiSush Difference',
	primaryText = 'At KiSush Constructions, we believe in transforming spaces with purpose and passion. Our dedicated team brings expertise, creativity, and attention to detail to every project, ensuring results that exceed expectations.',
	secondaryText = 'What sets us apart is our commitment to understanding your vision and bringing it to life. We don’t just build structures; we create environments where people thrive, connect, and feel inspired every day.',
	buttonText = 'Join our team',
	buttonOnClick = () => {},
	mainImage = {
		src: '/placeholder.svg?height=500&width=600',
		alt: 'KiSush team members collaborating',
	},
	className = '',
}) {
	return (
		<div className={`container mx-auto px-4 py-16 max-w-7xl ${className}`}>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
				<div className='pr-0 lg:pr-12 flex flex-col justify-center'>
					<h1 className='text-4xl md:text-5xl font-bold text-[#08445e] mb-6'>
						{title}
					</h1>
					<p className='text-[#08445e]/80 mb-4'>{primaryText}</p>
					<p className='text-[#08445e]/80 mb-8'>{secondaryText}</p>
					<div>
						<button
							onClick={buttonOnClick}
							className='inline-flex items-center gap-2 bg-[#ed6a11] text-white px-6 py-3 rounded-md hover:bg-[#ed6a11]/90 transition-colors'>
							<span>{buttonText}</span>
							<ArrowRight size={18} />
						</button>
					</div>
				</div>
				<div className='rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]'>
					<img
						src={mainImage.src}
						alt={mainImage.alt}
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
		</div>
	);
}

ReusableDifference.propTypes = {
	title: PropTypes.string,
	primaryText: PropTypes.string,
	secondaryText: PropTypes.string,
	buttonText: PropTypes.string,
	buttonOnClick: PropTypes.func,
	mainImage: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string,
	}),
	bottomImages: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string,
			span: PropTypes.number,
		})
	),
	className: PropTypes.string,
};
