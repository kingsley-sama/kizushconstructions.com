import React from "react"
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    quote: "Absolutely love the simplicity and power of this platform!",
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    quote: "Game-changing features that have transformed our workflow.",
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    quote: "The analytics capabilities are simply outstanding.",
  },
  {
    name: "Alex Thompson",
    role: "Startup Founder",
    quote: "This solution has saved us countless hours of work.",
  },
  {
    name: "Lisa Wong",
    role: "UX Researcher",
    quote: "Intuitive design that our entire team loves using.",
  },
]

export default function ScrollingTestimonials() {
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-gray-200">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

      {/* First Row - Left to Right */}
      <div className="relative flex overflow-x-hidden py-4">
        <div className="animate-marquee flex min-w-full shrink-0 items-center gap-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 rounded-lg bg-gray-400 p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-shadow duration-300"
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
            </div>
          ))}
        </div>
        <div className="animate-marquee flex min-w-full shrink-0 items-center gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 rounded-lg bg-gray-400 p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-shadow duration-300"
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
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative flex overflow-x-hidden py-4">
        <div className="animate-marquee-reverse flex min-w-full shrink-0 items-center gap-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 rounded-lg bg-gray-400 p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-shadow duration-300"
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
            </div>
          ))}
        </div>
        <div className="animate-marquee-reverse flex min-w-full shrink-0 items-center gap-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 rounded-lg bg-gray-400 p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                  "
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Third Row - Left to Right */}
      <div className="relative flex overflow-x-hidden py-4">
        <div className="animate-marquee flex min-w-full shrink-0 items-center gap-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 rounded-lg bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                "
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex min-w-full shrink-0 items-center gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 rounded-lg bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_3px_12px_-3px_rgba(6,81,237,0.2)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                  "
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

