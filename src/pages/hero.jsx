"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import "../index.css"
const slides = [
  {
    title: "About Us",
    subtitle: "Helping developers succeed with modular construction <br/> in theis current economy",
    image:
      "/images/webaliser-_TPTXZd9mOo-unsplash.jpg",
  },
  {
    title: "Our Services",
    subtitle: "Helping developers succeed with modular construction",
    image:
      "/images/steptodown.com930081.jpg",
  },
  {
    title: "Our Services",
    subtitle: "Helping developers succeed with modular construction",
    image:
      "/images/webaliser-_TPTXZd9mOo-unsplash.jpg",
  },
  // Add more slides as needed
]

const menuItems = [
  { title: "Our Projects", href: "#" },
  { title: "Our Story", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Contact", href: "#" },
]
const textVariants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export default function HeroBanner() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 10 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -10 },
  }
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
    <div className=" relative w-full overflow-hidden h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-screen ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-linear bg-zoom-effect"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transform: isTransitioning ? "scale(1)" : "scale(1)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <nav className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between p-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-bold"
          >
            KIZUSH
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="hover:text-primary"
              >
                {item.title}
              </motion.a>
            ))}
          </div>
          
            <MenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            topLineVariants={topLineVariants}
            middleLineVariants={middleLineVariants}
            bottomLineVariants={bottomLineVariants}
          />

        </nav>

        <div className="container relative flex h-full flex-col items-start justify-center px-4">
          <motion.h1
            key={currentSlide} // Add this to trigger animation on slide change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl text-white text-4xl relative bottom-6 tracking-tight  md:text-7xl lg:text-8x"
          >
            {slides[currentSlide].title}
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
              {slides[currentSlide].subtitle}
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

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed h-auto max-h-fit inset-0 z-20 flex flex-col bg-black"
          >
            <motion.div className="flex flex-col items-center mt-20 mb-10 justify-center flex-1 space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.5,
                  }}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                >
                  {item.title}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}




const MenuButton = ({ isMenuOpen, setIsMenuOpen, topLineVariants, middleLineVariants, bottomLineVariants }) => {
  return (
    <motion.button
    className="md:hidden fixed right-3 z-50 top-2 w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 top-4"
        variants={topLineVariants}
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 top-6"
        variants={middleLineVariants}
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 bottom-4"
        variants={bottomLineVariants}
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-blue-500 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isMenuOpen ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};


