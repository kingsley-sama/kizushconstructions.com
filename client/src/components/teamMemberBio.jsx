import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberBio = ({
	title,
	image,
	paragraphs = [],
	quote,
	layout = {
		direction: 'row', // 'row' or 'column'
		imageWidth: 'lg:w-1/2', // Tailwind width class for image
		contentWidth: 'lg:w-1/2', // Tailwind width class for content
		containerWidth: 'max-w-5xl', // Tailwind max-width class
	},
	imgProps = { alt: '' },
	children,
}) => {
	const isRow = layout.direction === 'row';

	return (
		<div className='bg-[#f5f5f5] py-8'>
			<div className={`mx-auto px-4 ${layout.containerWidth}`}>
				<div
					className={`flex flex-col gap-6 items-center ${
						isRow ? 'lg:flex-row' : ''
					}`}>
					{/* Image Section */}
					<div className={`w-full ${isRow ? layout.imageWidth : ''}`}>
						{typeof image === 'string' ? (
							<img
								src={image}
								alt={imgProps.alt}
								className='w-full h-auto rounded shadow-md'
							/>
						) : (
							image
						)}
					</div>

					{/* Content Section */}
					<div className={`w-full ${isRow ? layout.contentWidth : ''}`}>
						{title && (
							<h2 className='text-2xl sm:text-3xl font-semibold mb-5 text-primary'>
								{title}
							</h2>
						)}
						{paragraphs.map((para, index) => (
							<p
								key={index}
								className='mb-4 text-primary leading-relaxed'>
								{para}
							</p>
						))}
						{quote && <p className='italic my-5 text-gray-600'>"{quote}"</p>}
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

TeamMemberBio.propTypes = {
	title: PropTypes.string,
	image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	paragraphs: PropTypes.arrayOf(PropTypes.string),
	quote: PropTypes.string,
	layout: PropTypes.shape({
		direction: PropTypes.oneOf(['row', 'column']),
		imageWidth: PropTypes.string,
		contentWidth: PropTypes.string,
		containerWidth: PropTypes.string,
	}),
	imgProps: PropTypes.object,
	children: PropTypes.node,
};

export default TeamMemberBio;

