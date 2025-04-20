'use client';

import { useRef, useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const testimonials = [
	{
		name: 'Sarah Johnson',
		role: 'Product Designer',
		quote: 'Absolutely love the simplicity and power of this platform!',
		rating: 5.0,
	},
	{
		name: 'Michael Chen',
		role: 'Tech Lead',
		quote: 'Game-changing features that have transformed our workflow.',
		rating: 4.5,
	},
	{
		name: 'Emma Davis',
		role: 'Marketing Director',
		quote: `The analytics capabilities are simply outstanding.he analytics 
    capabilities are simply outstanding.he analytics capabilities are simply outstanding.
    he analytics capabilities are simply outstanding.he analytics capabilities 
    are simply outstanding.he analytics capabilities are simply outstanding.`,
		rating: 5.0,
	},
	{
		name: 'Alex Thompson',
		role: 'Startup Founder',
		quote: 'This solution has saved us countless hours of work.',
		rating: 4.5,
	},
	{
		name: 'Lisa Wong',
		role: 'UX Researcher',
		quote: 'Intuitive design that our entire team loves using.',
		rating: 5.0,
	},
];

// Custom Star component
const Star = ({ filled, half = false }) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			className='mx-0.5'>
			{half ? (
				// Half-filled star
				<>
					<defs>
						<linearGradient
							id='halfFill'
							x1='0%'
							y1='0%'
							x2='100%'
							y2='0%'>
							<stop
								offset='50%'
								stopColor='#ed6a11'
							/>
							<stop
								offset='50%'
								stopColor='transparent'
							/>
						</linearGradient>
					</defs>
					<polygon
						points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
						fill='url(#halfFill)'
						stroke='#ed6a11'
						strokeWidth='1.5'
					/>
				</>
			) : (
				<polygon
					points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
					fill={filled ? '#ed6a11' : 'none'}
					stroke='#ed6a11'
					strokeWidth='1.5'
				/>
			)}
		</svg>
	);
};

const StarRating = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className='flex items-center gap-0.5'>
			{[...Array(fullStars)].map((_, index) => (
				<Star
					key={`full-${index}`}
					filled={true}
				/>
			))}

			{hasHalfStar && <Star half={true} />}

			{[...Array(emptyStars)].map((_, index) => (
				<Star
					key={`empty-${index}`}
					filled={false}
				/>
			))}

			<span className='ml-2 text-xs font-medium text-[#08445e]'>
				{rating.toFixed(1)}
			</span>
		</div>
	);
};

const MaterialButton = ({ onClick, children, className = '' }) => (
	<button
		onClick={onClick}
		className={`
      relative
      rounded-full
      p-3
      text-[#08445e]
      border-2
      border-[#08445e]
      bg-transparent
      transition-all
      duration-300
      hover:bg-[#08445e]/5
      active:scale-95
      disabled:opacity-70
      disabled:hover:scale-100
      ${className}
    `}
		style={{
			WebkitTapHighlightColor: 'transparent',
		}}>
		{children}
	</button>
);

export default function ScrollingTestimonials() {
	const scrollContainerRef = useRef(null);
	const [focusedIndex, setFocusedIndex] = useState(0);

	const scroll = (direction) => {
		if (!scrollContainerRef.current) return;

		const container = scrollContainerRef.current;
		const cardWidth = 300;
		const gap = 16;
		const scrollAmount = cardWidth + gap;

		const currentScroll = container.scrollLeft;
		const newScroll =
			direction === 'left'
				? currentScroll - scrollAmount
				: currentScroll + scrollAmount;

		container.scrollTo({
			left: newScroll,
			behavior: 'smooth',
		});
			const newIndex =
			direction === 'left'
				? Math.max(0, focusedIndex - 1)
				: Math.min(testimonials.length - 1, focusedIndex + 1);
		setFocusedIndex(newIndex);
	};

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const handleScroll = () => {
			const scrollLeft = container.scrollLeft;
			const cardWidth = 300 + 16; // card width + gap
			const newIndex = Math.round(scrollLeft / cardWidth);
			setFocusedIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1));
		};

		container.addEventListener('scroll', handleScroll);
		return () => container.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='container mx-auto px-4 py-12 '>
			<div className='flex lg:flex-row flex-col gap-2 items-center py-12'>
				<h2 className='text-[#08445e] text-4xl max-h-fit md:w-1/2 md:text-5xl font-bold text-center'>
					What our Clients are saying
				</h2>
				<div className='max-w-l px-4 lg:pr-12'>
					<p className='text-[#08445e] text-lg mb-4'>
						At Kizush Constructions, we believe in transforming spaces with
						purpose this has been our guiding principle in our development
						project. Below are some reviews we got from our clients
					</p>
					<button className='border-2 border-[#ed6a11] text-[#ed6a11] hover:border-0 hover:bg-[#08445e] hover:text-white transition-colors px-4 py-2'>
						View More Testimonials
					</button>
				</div>
			</div>

			{/* Mobile Scroll Container with Navigation */}
			<div className='relative w-full'>
				{/* Left blur gradient */}
				<div className='absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#f5f5f5] to-transparent z-10'></div>

				{/* Right blur gradient */}
				<div className='absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#f5f5f5] to-transparent z-10'></div>

				<div
					ref={scrollContainerRef}
					className='flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none px-8 pb-8'
					style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
					{testimonials.map((testimonial, idx) => (
						<div
							key={idx}
							className={`
                flex-none 
                w-[300px]
                ${idx === focusedIndex ? 'scale-105' : 'scale-95 opacity-80'}
                h-96
                overflow-hidden rounded-lg bg-[#f8f8f8] p-6 
                shadow-[0_2px_10px_-3px_rgba(8,68,94,0.1)]
                transition-all duration-300 ease-in-out
                flex flex-col
              `}>
							{/* Quote mark - only closing */}
							<div className='absolute top-4 right-4 text-3xl font-serif text-[#08445e]'>
								&#8221;
							</div>

							<div className='flex flex-col items-center h-full'>
								{/* Avatar */}
								<div className='w-16 h-16 mb-4 rounded-full bg-[#08445e]/10 border-2 border-[#08445e] flex items-center justify-center text-[#08445e] font-semibold text-lg'>
									{testimonial.name[0]}
								</div>

								{/* Testimonial */}
								<div className='flex-grow overflow-hidden'>
									<p className='text-center text-[#08445e] mb-6 text-sm leading-relaxed line-clamp-6'>
										{testimonial.quote}
									</p>
								</div>

								{/* Footer content - pushed to bottom */}
								<div className='mt-auto w-full'>
									{/* Rating */}
									<div className='w-full pt-4'>
										<StarRating rating={testimonial.rating} />
									</div>

									{/* Reviewer name */}
									<p className='w-full text-right text-[#08445e] font-medium mt-2'>
										{testimonial.name}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Updated Navigation Buttons - centered */}
				<div className='flex justify-center items-center gap-3 mt-4'>
					<MaterialButton
						onClick={() => scroll('left')}
						aria-label='Previous testimonial'
						className={
							focusedIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
						}
						disabled={focusedIndex === 0}>
						<ChevronLeftIcon className='w-6 h-6' />
					</MaterialButton>
					<MaterialButton
						onClick={() => scroll('right')}
						aria-label='Next testimonial'
						className={
							focusedIndex === testimonials.length - 1
								? 'opacity-50 cursor-not-allowed'
								: ''
						}
						disabled={focusedIndex === testimonials.length - 1}>
						<ChevronRightIcon className='w-6 h-6' />
					</MaterialButton>
				</div>
			</div>
		</div>
	);
}
