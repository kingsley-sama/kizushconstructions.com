import React from "react"
const Portfolio = () => {
    const galleryItems = [
      { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace", alt: "Mondrian", caption: "Mondrian" },
      { src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77", alt: "Nirnia", caption: "Nirnia" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", alt: "Artex", caption: "Artex" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", alt: "Brera", caption: "Brera" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea", alt: "Alea Pro", caption: "Alea Pro" },
      { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0", alt: "Nirnia", caption: "Nirnia" },
    ]
    
    return (
      <div className="container mx-auto px-4 py-12 bg-white ">
           {/* Content Section */}
        <div className="flex lg:flex-row flex-col gap-2 items-center py-12">
          <h2 className="text-4xl max-h-fit md:w-1/2 md:text-5xl font-bold text-center">Our Portfolio</h2>
          <div className="max-w-l px-4  lg:pr-12">
            <p className="text-muted-foreground text-lg mb-4">
            At Kizush Constructions, we believe in transforming spaces with purpose 
            </p> 
          <button variant="outline" className="border-2 border-black hover:bg-white hover:text-white transition-colors">
            View Mor Projects
          </button>
        </div>
        </div>
        {/* Mobile Scroll Container */}
        <div className="relative md:hidden">
          
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative flex-none w-[280px] h-[200px] overflow-hidden rounded-lg group snap-start"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {item.caption}
                </div>
                <button
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                  aria-label="More information"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group h-[200px]">
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                {item.caption}
              </div>
              <button
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                aria-label="More information"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Portfolio;
  
  