import React from 'react';
import { ArrowOutward, Place } from '@mui/icons-material';

const ProjectCard = ({ item }) => {
	return (
		<div className='relative overflow-hidden rounded-lg group h-[300px] min-w-[300px]'>
			<img
				src={item.src || item.imageUrl}
				alt={item.alt || item.title}
				className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-opacity duration-300' />
			<div className='absolute bottom-3 flex justify-between items-center w-full text-white font-semibold text-lg opacity-100 transition-opacity duration-300 drop-shadow-lg px-4'>
				<span>{item.caption || item.title}</span>
				<span><Place /> {item.alt || item.location}</span>
			</div>
			<button
				className='absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100'
				aria-label='More information'>
				<ArrowOutward />
			</button>
		</div>
	);
};

export default ProjectCard;
