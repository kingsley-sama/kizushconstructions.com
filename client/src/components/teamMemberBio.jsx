import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberBio = ({
	title,
	image,
	paragraphs = [],
	quote,
	layout = {
		direction: 'row', // 'row' or 'column'
		imageWidth: '60%', // width of image container for row layout
		contentWidth: '60%', // width of content container for row layout
		containerWidth: '80%', // max container width (inline style)
	},
	imgProps = {
		alt: '',
	},
	children,
}) => {
	// For row layout, we set inline styles on medium screens; for column layout, full width
	const imageStyle =
		layout.direction === 'row'
			? { width: layout.imageWidth }
			: { width: '100%' };
	const contentStyle =
		layout.direction === 'row'
			? { width: layout.contentWidth }
			: { width: '100%' };

	return (
		<div className='bg-[#f5f5f5]'>
			<div
				className='container mx-auto p-4'
				style={{ maxWidth: layout.containerWidth }}>
				{/* 
        The default flex direction is column (mobile) and on md screens, if a row layout is desired, we switch to flex-row.
      */}
				<div
					className={`flex flex-col md:${
						layout.direction === 'row' ? 'flex-row' : 'flex-col'
					} gap-8 items-center`}>
					{/* Image Section */}
					<div
						className='w-full'
						style={imageStyle}>
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
					<div
						className='w-full'
						style={contentStyle}>
						{title && (
							<h2 className='text-2xl sm:text-3xl font-semibold mb-5 text-gray-800'>
								{title}
							</h2>
						)}
						{paragraphs.map((para, index) => (
							<p
								key={index}
								className='mb-4 text-gray-600 leading-relaxed'>
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
	layout: PropTypes.object,
	imgProps: PropTypes.object,
	children: PropTypes.node,
};

export default TeamMemberBio;
