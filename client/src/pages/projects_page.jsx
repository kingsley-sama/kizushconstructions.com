import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { ChevronLeft, ExpandMore, Place, ChevronRight, Close } from "@mui/icons-material" 
import { useParams, useNavigate } from 'react-router-dom';
import Contact from "./contact";

const projects = [   
  {     
    name: 'Ontario Home Construction',     
    src: '/project_images/project_three.jpeg',     
    location: 'Ontario',     
    caption: '',     
    id: "0",     
    cartegory: 'Accessibility',   
  },   
  {     
    name: 'Ontario Home Addition',     
    src: '/project_images/project_one.jpeg',     
    location: 'Ontario',     
    caption: '',     
    id: "1",     
    cartegory: 'Remodeling',   
  },   
  {     
    name: 'Simcoe County Home construction',     
    src: '/project_images/project_four.png',     
    location: 'Simcoe County',     
    caption: '',     
    id: '4',     
    cartegory: 'Construction',   
  },   
  {     
    name: 'Barrie Home Remodeling',     
    src: '/project_images/construction.jpeg',     
    location: 'Barrie',     
    caption: '',     
    id: "2",     
    cartegory: 'Construction',   
  },   
  {     
    name: 'Toronto Home Remodeling',     
    src: '/project_images/remodeling.jpeg',     
    location: 'Toronto',     
    caption: '',     
    id: "3",     
    cartegory: 'Remodeling',   
  },   
  {     
    name: 'Vaughan Home',     
    src: '/project_images/project_five.png',     
    location: 'Vaughan',     
    caption: '',     
    id: '5',     
    cartegory: 'Home',   
  },
];

const projectsData = [
  {
    id: "basement-remodel",
    title: "Modern Mansard",
    location: "Ontario",
    imageUrl: "https://baypointcontracting.ca/wp-content/uploads/2024/10/56A0391-Large-1200x800.jpeg",
    categories: ["Accessibility", "Addition"],
    description:
      "This modern home renovation transformed a beloved generational home originally built by the client's father. Over the years, it served as a seasonal retreat for the family.",
    details: [
      "A unique feature of the original design was the front door, which had been blocked by a spiral staircase and was purely decorative. This meant that guests were always welcomed through the side entrance, leading directly into the laundry room. To make the front door functional, we redesigned the staircase, replacing it with an L-shaped, open-riser design that complemented the flooring and maintained an airy feeling.",
      "To modernize the exterior while preserving abundant natural light, we installed a curtain wall across the front of the house, creating a bright and welcoming atmosphere.",
      "The cottage's DIY charm included picture-frame moulding on nearly every wall. As this was no longer desired, we removed it and added wide plank shiplap to the two-story vestibule – a modern update that honoured the home's character.",
    ],
    specifications: [
      { name: "Living Room", icon: "sofa" },
      { name: "Kitchen", icon: "utensils" },
      { name: "Stairs", icon: "stairs" },
      { name: "Windows", icon: "window" },
      { name: "Doors", icon: "door" },
      { name: "Bathroom", icon: "bath" },
    ],
    testimonial: {
      quote:
        "From the very start, your team was personable, knowledgeable, and attentive to detail. We felt extremely comfortable working with your team to formulate an incredible renovation plan. The contract and construction timeline was very clear, ensured no hidden costs, and exemplified what a 'full-service' renovation is intended to be.",
      author: "Michael and Sarah",
    },
    gallery: [],
    beforeAfter: [],
  },
  {
    id: "elevated-addition",
    title: "Elevated Addition",
    location: "Barrie",
    imageUrl: "https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Addition-20240421_24-Large-1200x800.jpeg",
    categories: ["Accessibility", "Bathroom"],
    description:
      "This stunning home addition project in Barrie expanded the living space while maintaining the architectural integrity of the original structure.",
    details: [
      "The homeowners needed additional space for their growing family but wanted to ensure the addition blended seamlessly with the existing home. Our design team created a plan that not only added square footage but enhanced the overall aesthetic of the property.",
      "We incorporated large windows to maximize natural light and provide beautiful views of the surrounding landscape. Energy-efficient materials and systems were used throughout to reduce environmental impact and lower utility costs.",
      "The interior features an open concept design with high ceilings and custom millwork, creating a sense of spaciousness and luxury.",
    ],
    specifications: [
      { name: "Addition", icon: "home" },
      { name: "Bathroom", icon: "bath" },
      { name: "Windows", icon: "window" },
      { name: "Doors", icon: "door" },
    ],
    testimonial: {
      quote:
        "We never had to worry... your team was fast to find solutions and delivered on their promises. The communication, professionalism, and craftsmanship completed by the tradespeople was outstanding!",
      author: "James and Emily",
    },
    gallery: [],
    beforeAfter: [
      {
        title: "Addition Construction",
        before: "https://baypointcontracting.ca/wp-content/uploads/2024/06/Turgeon-2ae-Large-1-1067x800.jpeg",
        after: "https://baypointcontracting.ca/wp-content/uploads/2024/06/BPC-Addition-20240421_24-Large-1200x800.jpeg",
      },
      {
        title: "Bathroom Renovation",
        before:
          "https://baypointcontracting.ca/wp-content/uploads/2025/02/Bay-Point-Contracting-Monochrome-Bath_07-Large-533x800.jpeg",
        after:
          "https://baypointcontracting.ca/wp-content/uploads/2024/05/Bay-Point-Contracting_Anderson_2024_14-Large-1200x800.jpeg",
      },
      {
        title: "Interior Transformation",
        before: "https://baypointcontracting.ca/wp-content/uploads/2024/06/Sharma-Living-Space-Large-1199x800.jpg",
        after:
          "https://baypointcontracting.ca/wp-content/uploads/2024/12/Bay-Point-Contracting-Main-Floor-Reno-28aewarm-1-Large-1199x800.jpeg",
      },
    ],
  },
]

// Helper function to convert text to URL-friendly slug
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Project Not Found Component
function ProjectNotFound({ projectId }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/projects');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.513-.751-6.281-2.03.938-2.471 2.905-4.246 5.281-4.97zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#08445e] mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find a project with ID "{projectId}". You'll be redirected to the projects page shortly.
          </p>
          <div className="space-y-3">
            <Link
              to="/projects"
              className="inline-block bg-[#ed6a11] hover:bg-[#ed6a11]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Projects
            </Link>
            <div className="text-sm text-gray-500">
              Redirecting in 3 seconds...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectSlug = params.slug;
    
    // Search in both arrays for the project
    let foundProject = null;
    
    // First search in projectsData by id
    foundProject = projectsData.find(p => p.id === projectSlug);
    
    // If not found, search in projects array by id
    if (!foundProject) {
      foundProject = projects.find(p => p.id === projectSlug);
    }
    
    // If still not found, search by name converted to slug
    if (!foundProject) {
      foundProject = projects.find(p => createSlug(p.name) === projectSlug);
    }
    
    // If we found a basic project, convert it to full project format
    if (foundProject && !foundProject.title) {
      foundProject = {
        id: foundProject.id,
        title: foundProject.name,
        name: foundProject.name,
        location: foundProject.location,
        imageUrl: foundProject.src,
        categories: [foundProject.cartegory || "General"],
        description: `A beautiful ${foundProject.cartegory?.toLowerCase() || 'renovation'} project in ${foundProject.location}, showcasing our craftsmanship and attention to detail.`,
        details: [
          "This project represents our commitment to quality craftsmanship and client satisfaction.",
          "We worked closely with the homeowners to understand their vision and bring it to life.",
          "The result is a space that perfectly balances functionality with aesthetic appeal."
        ],
        specifications: [
          { name: foundProject.cartegory || "Renovation", icon: "home" },
          { name: "Design", icon: "utensils" },
        ],
        testimonial: {
          quote: "Outstanding work and professional service throughout the entire project.",
          author: "Satisfied Client",
        },
        gallery: [foundProject.src],
        beforeAfter: [],
      };
    }
    
    setProject(foundProject);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ed6a11] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return <ProjectNotFound projectId={params.slug} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-medium text-[#08445e] hover:text-[#ed6a11] mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Projects
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#08445e] mb-4">{project.title || project.name}</h1>
              <div className="flex items-center text-gray-600 mb-6">
                <Place className="h-5 w-5 mr-2 text-[#ed6a11]" />
                <span>{project.location}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-block bg-[#08445e]/10 text-[#08445e] text-sm px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.imageUrl || project.src || "/placeholder.svg"}
                alt={project.title || project.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#08445e] mb-6">Project Details</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#08445e] mb-4">Location</h3>
                <div className="flex items-center text-gray-700">
                  <Place className="h-5 w-5 mr-2 text-[#ed6a11]" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#08445e] mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.specifications.map((spec, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-md bg-[#08445e]/10">
                        <span className="text-[#08445e]">
                          {spec.icon === "sofa"
                            ? "🛋️"
                            : spec.icon === "utensils"
                              ? "🍽️"
                              : spec.icon === "stairs"
                                ? "🪜"
                                : spec.icon === "window"
                                  ? "🪟"
                                  : spec.icon === "door"
                                    ? "🚪"
                                    : spec.icon === "home"
                                      ? "🏠"
                                      : "🛁"}
                        </span>
                      </div>
                      <span>{spec.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg text-[#08445e] font-medium hover:bg-gray-100 transition-colors">
                  <span>Renovation Details</span>
                  <ExpandMore className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.gallery?.[1] || project.imageUrl || project.src || "/placeholder.svg"} 
                alt="Project Detail" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.gallery?.[2] || project.imageUrl || project.src || "/placeholder.svg"} 
                alt="Project Feature" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#08445e] mb-6">Our Approach</h2>
              <div className="space-y-4">
                {project.details.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Link to={'/contact'}>
                <button className="bg-[#ed6a11] hover:bg-[#ed6a11]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Request a Consultation
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-[#08445e] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11L8 17H5L7 11H5V5H11V11H10ZM18 11L16 17H13L15 11H13V5H19V11H18Z" fill="white" />
            </svg>
          </div>
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
            {project.testimonial.quote}
          </blockquote>
          <div className="text-[#ed6a11] font-medium">- {project.testimonial.author}</div>
        </div>
      </section>

      {/* Gallery - Only show if there are gallery images */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#08445e] mb-8 text-center">Gallery</h2>
            <ImageGallery images={project.gallery} alt={project.title || project.name} />
          </div>
        </section>
      )}

      {/* Before/After - Only show if there are before/after images */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#08445e] mb-8 text-center">Before / After</h2>
            <BeforeAfterSlider images={project.beforeAfter} />
          </div>
        </section>
      )}

      {/* CTA */}
      <Contact />
    </div>
  )
}

// BeforeAfterSlider component
function BeforeAfterSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBefore, setShowBefore] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
    document.body.style.overflow = "hidden"
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    document.body.style.overflow = "auto"
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeFullscreen()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
    if (e.key === "b") setShowBefore(!showBefore)
  }

  return (
    <>
      <div className="relative max-w-4xl mx-auto">
        <div
          className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={openFullscreen}
        >
          <img
            src={showBefore ? images[currentIndex].before : images[currentIndex].after}
            alt={showBefore ? "Before Renovation" : "After Renovation"}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-[#08445e]" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-[#08445e]" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowBefore(!showBefore)
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-semibold text-white bg-black/50 px-6 py-2 rounded-full hover:bg-black/70 transition-colors"
        >
          {showBefore ? "Before" : "After"}
        </button>

        <div className="absolute top-4 left-4 bg-[#ed6a11] text-white px-3 py-1 rounded-md text-sm font-medium">
          {images[currentIndex].title}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer ${
              index === currentIndex ? "ring-2 ring-[#ed6a11]" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.after || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeFullscreen}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              closeFullscreen()
            }}
          >
            <Close className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[90vh] m-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <img
                src={showBefore ? images[currentIndex].before : images[currentIndex].after}
                alt={showBefore ? "Before Renovation" : "After Renovation"}
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={() => setShowBefore(!showBefore)}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-semibold text-white bg-black/50 px-6 py-2 rounded-full hover:bg-black/70 transition-colors"
            >
              Toggle {showBefore ? "Before" : "After"}
            </button>

            <div className="absolute top-4 left-4 bg-[#ed6a11] text-white px-3 py-1 rounded-md text-sm font-medium">
              {images[currentIndex].title}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
function ImageGallery({ images, alt = "Project image" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image|| "/placeholder.svg"}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
          >
            <Close className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[90vh] m-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${alt} ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}


function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative py-16 bg-[#08445e] text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11L8 17H5L7 11H5V5H11V11H10ZM18 11L16 17H13L15 11H13V5H19V11H18Z" fill="white" />
          </svg>
        </div>
        <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
          {testimonials[currentIndex].quote}
        </blockquote>
        <div className="text-[#ed6a11] font-medium">- {testimonials[currentIndex].author}</div>

        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
