"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { routeData } from "../route-data";


export default function HeroBanner({pathname}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const route_data = routeData.find(r => r.path == pathname) || null
  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1000) // Match this to your transition duration
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  useEffect(() => {
    const bgElement = document.querySelector(".bg-zoom-effect")
    if (bgElement) {
      bgElement.style.animation = "none"
      bgElement.offsetHeight // Trigger reflow
      bgElement.style.animation = ""
    }
  }, []) // Removed unnecessary dependency: currentSlide

  return (
    <div className=" relative w-full overflow-hidden h-[40vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-linear bg-zoom-effect"
        style={{
          backgroundImage: `url(${route_data.bg_image})`,
          transform: isTransitioning ? "scale(1)" : "scale(1)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full">

        <div className="container relative flex h-full flex-col items-start justify-center px-4">
          <motion.h1
            key={currentSlide} // Add this to trigger animation on slide change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl text-white text-4xl relative bottom-6 tracking-tight  md:text-7xl lg:text-8x"
          >
            {route_data.heading}
          </motion.h1>
          <motion.div className="container absolute right-0 bottom-0 flex flex-col items-center max-h-fit md:h-1/3 md:bottom-14 border-t-2 md:absolute"

          >
            <motion.p
              key={`${currentSlide}-subtitle`} // Add this to trigger animation on slide change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-2 md:mt-4 max-w-xl text-md text-white/90 md:text-xl"
            >
              {route_data.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8"
            >
              <button size="lg" className="bg-white p-2 pt-1 pb-1 m-2 rounded-[15px] md:p-6 md:pt-3 md:pb-3  md:rounded-[30px]" variant="secondary">
                Read More
              </button>
            </motion.div>
                    {/* Navigation Dots */}
           <div className="absolute flex bottom-10 right-20 space-x-2">
              <button
                onClick={prevSlide}
                className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 border"
              >       
                <TrendingFlatIcon/>
              </button>
              <button
                onClick={nextSlide}
                className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 border"
              >
                <TrendingFlatIcon />
              </button>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};