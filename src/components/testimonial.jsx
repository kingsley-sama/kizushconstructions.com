"use client"

import { useRef } from "react"
import StarIcon from "@mui/icons-material/Star"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import StarOutlineIcon from "@mui/icons-material/StarOutline"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    quote: "Absolutely love the simplicity and power of this platform!",
    rating: 5.0,
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    quote: "Game-changing features that have transformed our workflow.",
    rating: 4.5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    quote: `The analytics capabilities are simply outstanding.he analytics 
    capabilities are simply outstanding.he analytics capabilities are simply outstanding.
    he analytics capabilities are simply outstanding.he analytics capabilities 
    are simply outstanding.he analytics capabilities are simply outstanding.`,
    rating: 5.0,
  },
  {
    name: "Alex Thompson",
    role: "Startup Founder",
    quote: "This solution has saved us countless hours of work.",
    rating: 4.5,
  },
  {
    name: "Lisa Wong",
    role: "UX Researcher",
    quote: "Intuitive design that our entire team loves using.",
    rating: 5.0,
  },
]

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={`full-${index}`} className="w-4 h-4 text-yellow-400" />
      ))}

      {hasHalfStar && <StarHalfIcon className="w-4 h-4 text-yellow-400" />}

      {[...Array(emptyStars)].map((_, index) => (
        <StarOutlineIcon key={`empty-${index}`} className="w-4 h-4 text-gray-200" />
      ))}

      <span className="ml-2 text-xs font-medium text-slate-500">{rating.toFixed(1)}</span>
    </div>
  )
}

const MaterialButton = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`
      relative
      rounded-full
      p-3
      text-black
      border-2
      border-black
      bg-transparent
      transition-all
      duration-300
      hover:bg-black/5
      active:scale-95
      disabled:opacity-70
      disabled:hover:scale-100
      ${className}
    `}
    style={{
      WebkitTapHighlightColor: "transparent",
    }}
  >
    {children}
  </button>
)

export default function ScrollingTestimonials() {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = 280 
    const gap = 16
    const scrollAmount = cardWidth + gap

    const currentScroll = container.scrollLeft
    const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#f5f5f5]">
   
      <div className="flex lg:flex-row flex-col gap-2 items-center py-12">
        <h2 className="text-4xl max-h-fit md:w-1/2 md:text-5xl font-bold text-center">What our Clients are saying</h2>
        <div className="max-w-l px-4 lg:pr-12">
          <p className="text-muted-foreground text-lg mb-4">
            At Kizush Constructions, we believe in transforming spaces with purpose
            this has been our guiding principle in our development project. Below are 
            some reviews we got from our clients 
          </p>
          <button className="border-2 border-black hover:bg-black hover:text-white transition-colors px-4 py-2">
            View More Testimonials
          </button>
        </div>
      </div>

      {/* Mobile Scroll Container with Navigation */}
      <div className="relative md:hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative flex-none w-[280px] overflow-hidden rounded-lg group snap-start bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600">{testimonial.quote}</p>
              <div className="mt-4 pt-4 border-t">
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Updated Navigation Buttons */}
        <div className="flex justify-end items-center gap-3 mt-8 px-4">
          <div className="flex gap-3 p-1">
            <MaterialButton onClick={() => scroll("left")} aria-label="Previous testimonial">
              <ChevronLeftIcon className="w-6 h-6" />
            </MaterialButton>
            <MaterialButton onClick={() => scroll("right")} aria-label="Next testimonial">
              <ChevronRightIcon className="w-6 h-6" />
            </MaterialButton>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg group bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                {testimonial.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">{testimonial.name}</h3>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-slate-600">{testimonial.quote}</p>
            <div className="mt-4 pt-4">
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

