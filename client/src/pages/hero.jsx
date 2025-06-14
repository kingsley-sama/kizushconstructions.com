"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback, useRef } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Link, useNavigate } from "react-router-dom"
import { routeData } from "../route-data"

// Slider data specifically for the landing page
const landingPageSlides = [
  {
    heading: "About Us",
    tagline: "Welcome to our innovative platform",
    bg_image: "/medias/kizush_about.png",
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
    bg_image: "/medias/kizush_banner.png",
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
          <div className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-gray-600 rounded-lg animate-pulse" />
          <div className="space-y-3">
            <div className="h-6 sm:h-8 md:h-10 bg-gray-700 rounded animate-pulse max-w-4xl" />
            <div className="h-6 sm:h-8 md:h-10 bg-gray-700 rounded animate-pulse max-w-3xl" />
          </div>
          <div className="pt-6 md:pt-8">
            <div className="h-12 sm:h-14 md:h-16 w-48 sm:w-56 md:w-64 bg-gray-600 rounded-full animate-pulse mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  </div>
)

const useDataValidation = (pathname) => {
  const [isDataReady, setIsDataReady] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const navigate = useNavigate()
  const abortControllerRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleGoBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      navigate('/notfound')
    }
  }, [navigate])

  useEffect(() => {
    // Cancel any ongoing operations when pathname changes
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Create new abort controller for this effect
    abortControllerRef.current = new AbortController()
    const signal = abortControllerRef.current.signal

    const validateAndPreloadData = async () => {
      try {
        // Quick data validation first
        const route_data = routeData?.find((r) => r.path === pathname) || routeData?.find((r) => r.path === "notfound")
        
        if (!route_data) {
          if (!signal.aborted) {
            handleGoBack()
          }
          return
        }

        const isLandingPage = pathname === "/" && route_data.navigat
        const slides = isLandingPage ? landingPageSlides : [route_data]
        
        // Quick validation of slide data
        const isValidSlides = slides.every(slide => 
          slide && 
          slide.heading && 
          slide.bg_image && 
          (slide.tagline !== undefined) &&
          (slide.button_text !== undefined || route_data.button_text) &&
          (slide.button_link !== undefined || route_data.navigat)
        )

        if (!isValidSlides) {
          console.warn('Some slide data is missing:', slides)
          if (!signal.aborted) {
            setIsDataReady(true) // Still show component with available data
          }
          return
        }

        // Set data ready immediately for better UX
        if (!signal.aborted) {
          setIsDataReady(true)
        }

        // Preload images in background (non-blocking)
        const imagePromises = slides.map(slide => {
          return new Promise((resolve) => {
            if (signal.aborted) {
              resolve(slide.bg_image)
              return
            }

            const img = new Image()
            
            const cleanup = () => {
              img.onload = null
              img.onerror = null
            }

            img.onload = () => {
              cleanup()
              console.log(`Image loaded successfully: ${slide.bg_image}`)
              resolve(slide.bg_image)
            }
            
            img.onerror = (error) => {
              cleanup()
              console.error(`Failed to load image: ${slide.bg_image}`, error)
              // Resolve anyway to not block the UI
              resolve(slide.bg_image)
            }
            
            // Set a reasonable timeout for image loading
            const imageTimeout = setTimeout(() => {
              cleanup()
              console.warn(`Image load timeout: ${slide.bg_image}`)
              resolve(slide.bg_image)
            }, 3000) // Reduced to 3 seconds
            
            // Cleanup timeout if image loads
            const originalOnload = img.onload
            const originalOnerror = img.onerror
            
            img.onload = (e) => {
              clearTimeout(imageTimeout)
              if (originalOnload) originalOnload(e)
            }
            
            img.onerror = (e) => {
              clearTimeout(imageTimeout)
              if (originalOnerror) originalOnerror(e)
            }
            
            img.src = slide.bg_image
          })
        })

        // Wait for images but don't block UI rendering
        Promise.all(imagePromises).then(() => {
          if (!signal.aborted) {
            setImagesLoaded(true)
          }
        }).catch((error) => {
          console.error('Error preloading images:', error)
          if (!signal.aborted) {
            setImagesLoaded(true) // Set to true anyway to prevent infinite loading
          }
        })

      } catch (error) {
        console.error('Error validating data:', error)
        if (!signal.aborted) {
          // Always show the component even if there are errors
          setIsDataReady(true)
        }
      }
    }

    // Reset states when pathname changes
    setIsDataReady(false)
    setImagesLoaded(false)
    
    // Add a small delay to prevent flickering on fast navigation
    timeoutRef.current = setTimeout(() => {
      if (!abortControllerRef.current?.signal.aborted) {
        validateAndPreloadData()
      }
    }, 50)

    // Cleanup function
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname, handleGoBack])

  return { isDataReady, imagesLoaded }
}

export default function HeroBanner({ pathname }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(true)

  // Use the data validation hook
  const { isDataReady, imagesLoaded } = useDataValidation(pathname)

  // Find route data or fallback to notfound - with null check
  const route_data = routeData?.find((r) => r.path === pathname) || routeData?.find((r) => r.path === "notfound")

  // Early return if no route data found
  if (!route_data) {
    return <HeroBannerSkeleton />
  }

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

  // Auto-slide effect
  useEffect(() => {
    if (!isLandingPage || isPaused || slides.length <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) 

    return () => clearInterval(interval)
  }, [isLandingPage, isPaused, nextSlide, slides.length])

  // Transition timing effect
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1000) 
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  // Preload next image effect
  useEffect(() => {
    if (isLandingPage && slides.length > 1) {
      const nextIndex = (currentSlide + 1) % slides.length
      const img = new Image()
      img.src = slides[nextIndex].bg_image
    }
  }, [currentSlide, isLandingPage, slides])

  // Reset current slide when changing pages
  useEffect(() => {
    setCurrentSlide(0)
    setIsTransitioning(false)
    setIsPaused(false)
  }, [pathname])

  // Show skeleton only briefly during initial load
  if (!isDataReady) {
    return <HeroBannerSkeleton />
  }

  const currentSlideData = slides[currentSlide]

  // Additional null check for currentSlideData
  if (!currentSlideData) {
    return <HeroBannerSkeleton />
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}-${pathname}`}
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
              backgroundImage: `url(${currentSlideData.bg_image || ''})`,
              backgroundPosition: 'center 40%',
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)} // Set to true even on error
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh]">
        <div className="container mx-auto h-full px-2 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex h-full flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            
            {/* Main Content Section */}
            <div className="md:flex-1 max-w-5xl space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`heading-${currentSlide}-${pathname}`}
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
                  {currentSlideData.heading || ''}
                </motion.h1>
              </AnimatePresence>

              {/* Tagline */}
              {currentSlideData.tagline && (
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`tagline-${currentSlide}-${pathname}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.3, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="text-gray-100 max-w-4xl leading-relaxed font-medium hidden
                      text-lg sm:text-xl md:flex md:text-2xl lg:text-3xl xl:text-4xl lg:flex xl:flex
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

              {/* CTA Button */}
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
                      px-4 py-2 sm:px-12 sm:py-5 md:px-16 md:py-6
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
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Slider Controls */}
            {isLandingPage && slides.length > 1 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-center 
                  space-x-6 sm:space-x-8 lg:space-x-0 lg:space-y-8 mt-8 sm:mt-12 lg:mt-0
                  lg:mr-4"
              >
                {/* Slide Indicators */}
                <div className="flex lg:flex-col space-x-4 sm:space-x-3 lg:space-x-0 lg:space-y-3 order-2 lg:order-1">
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

                {/* Navigation Buttons */}
                <div className="hidden sm:flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-0 lg:space-y-4 lg:flex-col order-1 lg:order-2">
                  <MaterialButton
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    aria-label="Previous slide"
                    size="small"
                  >
                    <ChevronLeftIcon className="w-1 h-1 sm:w-6 sm:h-6" />
                  </MaterialButton>

                  <MaterialButton 
                    onClick={nextSlide} 
                    disabled={isTransitioning} 
                    aria-label="Next slide" 
                    size="small"
                  >
                    <ChevronRightIcon className="w-1 h-1 sm:w-6 sm:h-6" />
                  </MaterialButton>
                </div>

                {/* Slide Counter */}
                <div className="text-white/90 hidden text-sm sm:flex sm:text-base font-semibold order-3 lg:order-3 lg:text-center
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

      {/* Auto-slide Progress Bar */}
      {isLandingPage && slides.length > 1 && !isPaused && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            key={`progress-${currentSlide}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-gradient-to-r from-white via-blue-200 to-white shadow-lg"
          />
        </div>
      )}

      {/* Pause Indicator */}
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
    </div>
  )
}