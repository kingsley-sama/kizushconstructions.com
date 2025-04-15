import { ArrowRight } from "@mui/icons-material"

export default function KiSushDifference() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Left column - Text content */}
        <div className="pr-0 lg:pr-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#08445e] mb-6">The KiSush Difference</h1>

          <p className="text-[#08445e]/80 mb-4">
            At KiSush Constructions, we believe in transforming spaces with purpose and passion. Our dedicated team
            brings expertise, creativity, and attention to detail to every project, ensuring results that exceed
            expectations.
          </p>

          <p className="text-[#08445e]/80 mb-8">
            What sets us apart is our commitment to understanding your vision and bringing it to life. We don't just
            build structures; we create environments where people thrive, connect, and feel inspired every day.
          </p>

          <div>
            <button className="inline-flex items-center gap-2 bg-[#ed6a11] text-white px-6 py-3 rounded-md hover:bg-[#ed6a11]/90 transition-colors">
              <span>Join our team</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right column - Main image */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
          <img
            src="/placeholder.svg?height=500&width=600"
            alt="KiSush team members collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom image grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="rounded-lg overflow-hidden shadow-md h-[200px] md:h-[240px]">
          <img
            src="/placeholder.svg?height=240&width=400"
            alt="KiSush team at a community event"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-lg overflow-hidden shadow-md h-[200px] md:h-[240px] md:col-span-2">
          <img
            src="/placeholder.svg?height=240&width=800"
            alt="KiSush team meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Testimonials section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-[#08445e] mb-10 text-center">What Our Clients Say</h2>
        <ScrollingTestimonials />
      </div>

      {/* Contact form */}
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  )
}

// Import the ScrollingTestimonials component
const ScrollingTestimonials = () => {
  // This is a placeholder - you would import your actual ScrollingTestimonials component
  return (
    <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-[#08445e]">Your ScrollingTestimonials component will appear here</p>
    </div>
  )
}

// Import the ContactForm component
const ContactForm = () => {
  // This is a placeholder - you would import your actual ContactForm component
  return (
    <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-[#08445e]">Your ContactForm component will appear here</p>
    </div>
  )
}
