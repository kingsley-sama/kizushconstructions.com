"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Link } from "react-router-dom"
import { routeData } from "../route-data"

// Slider data specifically for the landing page
const landingPageSlides = [
  {
    heading: "About Us",
    tagline: "Welcome to our innovative platform",
    bg_image: "/images/webaliser-_TPTXZd9mOo-unsplash.jpg",
    button_text: "Read More",
    button_link: "/about",
  },
  {
    heading: "Our Services",
    tagline: "Experience cutting-edge technology solutions",
    bg_image: "https://baypointcontracting.ca/wp-content/uploads/2024/05/DSC_0669-Enhanced-NR-Custom.jpeg",
    button_text: "Our Services",
    button_link: "/services",
  },
  {
    heading: "Reach Us",
    tagline: "Join thousands of satisfied customers",
    bg_image: "https://baypointcontracting.ca/wp-content/uploads/2024/05/contact-zoomed-1240x645.jpg",
    button_text: "Get Started",
    button_link: "/contact",
  },
]

// Loading component
const HeroBannerSkeleton = () => (
  <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh] bg-gray-900">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
    <div className="container mx-auto h-full px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex h-full flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex-1 max-w-5xl space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
          {/* Skeleton heading */}
          <div className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-gray-600 rounded-lg animate-pulse" />
          {/* Skeleton tagline */}
          <div className="space-y-3">
            <div className="h-6 sm:h-8 md:h-10 bg-gray-700 rounded animate-pulse max-w-4xl" />
            <div className="h-6 sm:h-8 md:h-10 bg-gray-700 rounded animate-pulse max-w-3xl" />
          </div>
          {/* Skeleton button */}
          <div className="pt-6 md:pt-8">
            <div className="h-12 sm:h-14 md:h-16 w-48 sm:w-56 md:w-64 bg-gray-600 rounded-full animate-pulse mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </div>
    {/* Loading indicator */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  </div>
)

// Hook to preload images and validate data
const useDataValidation = (pathname) => {
  const [isDataReady, setIsDataReady] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  useEffect(() => {
    const validateAndPreloadData = async () => {
      try {
        // Find route data or fallback to notfound
        const route_data = routeData.find((r) => r.path === pathname) || routeData.find((r) => r.path === "notfound")
        
        if (!route_data) {
          console.warn(`No route data found for pathname: ${pathname}`)
          return
        }

        // Use slider data for landing page, otherwise use single route data
        const isLandingPage = pathname === "/" && route_data.navigat
        const slides = isLandingPage ? landingPageSlides : [route_data]

        // Validate that all slides have required data
        const isValidSlides = slides.every(slide => 
          slide.heading && 
          slide.bg_image && 
          (slide.tagline !== undefined) &&
          (slide.button_text !== undefined || route_data.button_text) &&
          (slide.button_link !== undefined || route_data.navigat)
        )

        if (!isValidSlides) {
          console.warn('Some slide data is missing:', slides)
          return
        }

        // Preload all images
        const imagePromises = slides.map(slide => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            
            img.onload = () => {
              console.log(`Image loaded successfully: ${slide.bg_image}`)
              resolve(slide.bg_image)
            }
            
            img.onerror = (error) => {
              console.error(`Failed to load image: ${slide.bg_image}`, error)
              reject(new Error(`Failed to load image: ${slide.bg_image}`))
            }
            
            // Set a timeout for image loading
            setTimeout(() => {
              if (!img.complete) {
                reject(new Error(`Image load timeout: ${slide.bg_image}`))
              }
            }, 10000) // 10 second timeout
            
            img.src = slide.bg_image
          })
        })

        // Wait for all images to load
        await Promise.all(imagePromises)
        setImagesLoaded(true)
        
        // Small delay to ensure everything is ready
        setTimeout(() => {
          setIsDataReady(true)
        }, 100)

      } catch (error) {
        console.error('Error validating data or preloading images:', error)
        // Even if some images fail, we should still show the component
        // but you might want to handle this differently based on your needs
        setTimeout(() => {
          setIsDataReady(true)
        }, 2000) // Fallback timeout
      }
    }

    // Reset states when pathname changes
    setIsDataReady(false)
    setImagesLoaded(false)
    
    validateAndPreloadData()
  }, [pathname])

  return { isDataReady, imagesLoaded }
}

export default function HeroBanner({ pathname }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(true)

  // Use the data validation hook
  const { isDataReady, imagesLoaded } = useDataValidation(pathname)

  // Find route data or fallback to notfound
  const route_data = routeData.find((r) => r.path === pathname) || routeData.find((r) => r.path === "notfound")

  // Use slider data for landing page, otherwise use single route data
  const isLandingPage = pathname === "/" && route_data.navigat
  const slides = isLandingPage ? landingPageSlides : [route_data]

  const nextSlide = useCallback(() => {
    if (!isLandingPage || isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [isLandingPage, isTransitioning, slides.length])

  const prevSlide = useCallback(() => {
    if (!isLandingPage || isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [isLandingPage, isTransitioning, slides.length])

  const goToSlide = useCallback(
    (index) => {
      if (!isLandingPage || isTransitioning || index === currentSlide) return
      setIsTransitioning(true)
      setCurrentSlide(index)
    },
    [isLandingPage, isTransitioning, currentSlide],
  )

  const MaterialButton = ({ onClick, children, className = "", disabled = false, size = "default", ...props }) => {
    const sizeClasses = {
      small: "p-3 w-11 h-11 sm:w-12 sm:h-12",
      default: "p-3.5 w-12 h-12 sm:w-14 sm:h-14",
      large: "p-4 w-14 h-14 sm:w-16 sm:h-16",
    }

    return ( 
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
        group relative overflow-hidden
        rounded-full
        text-white
        border border-white/30
        bg-black/20
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-white/60
        hover:bg-black/30
        hover:scale-110
        hover:shadow-2xl
        hover:shadow-white/20
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        flex items-center justify-center
        ${sizeClasses[size]}
        ${className}
      `}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">{children}</span>
      </button>
    )
  }

  // Auto-slide functionality for landing page only
  useEffect(() => {
    if (!isLandingPage || isPaused || slides.length <= 1 || !isDataReady) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000) // Increased to 6 seconds for better reading time

    return () => clearInterval(interval)
  }, [isLandingPage, isPaused, nextSlide, slides.length, isDataReady])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1000) // Slightly longer transition
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  // Preload next image
  useEffect(() => {
    if (isLandingPage && slides.length > 1 && isDataReady) {
      const nextIndex = (currentSlide + 1) % slides.length
      const img = new Image()
      img.src = slides[nextIndex].bg_image
    }
  }, [currentSlide, isLandingPage, slides, isDataReady])

  // Show loading skeleton if data is not ready
  if (!isDataReady) {
    return <HeroBannerSkeleton />
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: isPaused ? 1.05 : 1, 
            opacity: 1,
            filter: "brightness(0.7) contrast(1.1)"
          }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.8 },
            scale: { duration: isPaused ? 0.5 : 1.4 }
          }}
          className="absolute inset-0 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh]"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${currentSlideData.bg_image})`,
              backgroundPosition: 'center 40%', // Better positioning for hero images
            }}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Image overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container with improved positioning */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh]">
        <div className="container mx-auto h-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex h-full flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            
            {/* Main Content Section with improved typography */}
            <div className="flex-1 max-w-5xl space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`heading-${currentSlide}`}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 1.1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1
                  }}
                  className="text-white font-black leading-[0.9] tracking-tight
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                    drop-shadow-2xl
                    bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text"
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    letterSpacing: '-0.02em',
                    lineHeight: '0.85',
                  }}
                >
                  {currentSlideData.heading}
                </motion.h1>
              </AnimatePresence>

              {/* Enhanced tagline with better typography */}
              {currentSlideData.tagline && (
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`tagline-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.3, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="text-gray-100 max-w-4xl leading-relaxed font-medium
                      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                      drop-shadow-lg"
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: '400',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4',
                    }}
                  >
                    {currentSlideData.tagline}
                  </motion.p>
                </AnimatePresence>
              )}

              {/* Enhanced CTA Button */}
              {(route_data.navigat || currentSlideData.button_link) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="pt-6 md:pt-8"
                >
                  <Link to={currentSlideData.button_link || "/about"}>
                    <button
                      className="group relative overflow-hidden 
                      bg-white text-gray-900 font-bold
                      px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6
                      text-base sm:text-lg md:text-xl lg:text-2xl
                      rounded-full 
                      transition-all duration-500 ease-out
                      hover:bg-gray-50 hover:scale-105 
                      hover:shadow-2xl hover:shadow-white/30
                      active:scale-95 
                      focus:outline-none focus:ring-4 focus:ring-white/40
                      transform-gpu
                      border-2 border-transparent hover:border-white/20"
                      style={{
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        letterSpacing: '-0.01em',
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {currentSlideData.button_text || route_data.button_text || "Read More"}
                        <motion.span
                          className="inline-block"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                      
                      {/* Button hover effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Enhanced Slider Controls */}
            {isLandingPage && slides.length > 1 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-center 
                  space-x-6 sm:space-x-8 lg:space-x-0 lg:space-y-8 mt-8 sm:mt-12 lg:mt-0
                  lg:mr-4"
              >
                {/* Enhanced Slide Indicators */}
                <div className="flex lg:flex-col space-x-2 sm:space-x-3 lg:space-x-0 lg:space-y-3 order-2 lg:order-1">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-500 rounded-full backdrop-blur-sm border
                        ${
                          index === currentSlide
                            ? "w-4 h-4 sm:w-5 sm:h-5 bg-white border-white/50 scale-125 shadow-lg shadow-white/30"
                            : "w-3 h-3 sm:w-4 sm:h-4 bg-white/40 border-white/30 hover:bg-white/60 hover:border-white/50 hover:scale-110"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Enhanced Navigation Buttons */}
                <div className="flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-0 lg:space-y-4 lg:flex-col order-1 lg:order-2">
                  <MaterialButton
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    aria-label="Previous slide"
                    size="small"
                  >
                    <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </MaterialButton>

                  <MaterialButton 
                    onClick={nextSlide} 
                    disabled={isTransitioning} 
                    aria-label="Next slide" 
                    size="small"
                  >
                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </MaterialButton>
                </div>

                {/* Enhanced Slide Counter */}
                <div className="text-white/90 text-sm sm:text-base font-semibold order-3 lg:order-3 lg:text-center
                  bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
                  <span className="mx-2 text-white/60">—</span>
                  <span className="text-white/80">{String(slides.length).padStart(2, '0')}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Auto-slide Progress Bar */}
      {isLandingPage && slides.length > 1 && !isPaused && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            key={`progress-${currentSlide}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full bg-gradient-to-r from-white via-blue-200 to-white shadow-lg"
          />
        </div>
      )}

      {/* Enhanced Pause Indicator */}
      {isLandingPage && slides.length > 1 && isPaused && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md border border-white/20 font-medium"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Paused
          </span>
        </motion.div>
      )}

      {/* Loading indicator for images */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}