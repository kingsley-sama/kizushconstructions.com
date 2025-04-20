'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { routeData } from '../route-data';

export default function HeroBanner({ pathname }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const route_data = routeData.find((r) => r.path == pathname) || null;

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      }}
    >
      {children}
    </button>
  );

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const bgElement = document.querySelector('.bg-zoom-effect');
    if (bgElement) {
      bgElement.style.animation = 'none';
      bgElement.offsetHeight;
      bgElement.style.animation = '';
    }
  }, []);

  return (
    <div
      className='w-full overflow-hidden h-[35vh] md:h-[40vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-linear bg-zoom-effect relative'
      style={{
        backgroundImage: `url(${route_data.bg_image})`,
        transform: isTransitioning ? 'scale(1)' : 'scale(1)',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='relative h-full'>
        <div className='container relative flex h-full flex-col items-start justify-center px-4'>
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='max-w-3xl text-white text-4xl relative bottom-6 tracking-tight md:text-7xl lg:text-8x'
          >
            {route_data.heading}
          </motion.h1>
          {route_data.navigat && (
            <motion.div className='container absolute right-0 bottom-0 flex flex-col max-h-fit md:h-1/3 md:bottom-14 border-t-2 md:absolute'>
              <motion.p
                key={`${currentSlide}-subtitle`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className='mt-2 md:mt-4 max-w-xl text-md text-white/90 md:text-xl'
              >
                {route_data.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className='mt-8'
              >
                <button
                  size='lg'
                  className='bg-white p-2 pt-1 pb-1 m-2 rounded-[15px] md:p-6 md:pt-3 md:pb-3 md:rounded-[30px]'
                  variant='secondary'
                >
                  Read More
                </button>
              </motion.div>

              <div className='flex justify-end items-center gap-3 mt-4 px-4'>
                <div className='flex gap-3 p-1'>
                  <MaterialButton
                    onClick={() => scroll('left')}
                    aria-label='Previous testimonial'
                    className='border-white h-[40px] w-[40px] flex items-center justify-center'
                  >
                    <ChevronLeftIcon className='w-6 h-6 text-white' />
                  </MaterialButton>
                  <MaterialButton
                    onClick={() => scroll('right')}
                    aria-label='Next testimonial'
                    className='border-white h-[40px] w-[40px] flex items-center justify-center'
                  >
                    <ChevronRightIcon className='w-6 h-6 text-white' />
                  </MaterialButton>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
