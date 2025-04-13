function WhyChooseUs() {
    return (
      <div className="relative max-w-[1400px] mr-auto ml-auto">
        <div className="relative w-full h-[500px]">
          {/* Background image */}
          <div className="absolute flex flex-col items-center justify-center p-4 inset-0 w-full h-full bg-cover bg-center bg-primary">
            <h2 className="text-4xl max-h-fit md:w-1/2 text-white bg-amber-400md:text-5xl font-bold text-center">Why Choose Us</h2>
            <div className="max-w-l px-4 lg:pr-12">
              <p className="text-muted-foreground text-lg text-white mb-4">
                At Kizush Constructions, we believe in transforming spaces with purpose
                this has been our guiding principle in our development project. Below are 
                some reviews we got from our clients 
              </p>
            </div>  
          </div>
  
          {/* Dim black overlay */}
          
        </div>
  
        <div className="flex flex-col md:flex-row justify-between bg-white p-8 md:p-10 pt-10 pb-6 -mt-20 mx-auto w-[90%] shadow-lg relative z-10 rounded-t-lg">
          <div className="flex-1 px-4 text-center mb-8 md:mb-0">
            <div className="w-10 h-10 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="#0C6E59" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Expertise</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Our experienced real estate professionals are experts in the local market, providing you with invaluable
              insights.
            </p>
          </div>
  
          <div className="flex-1 px-4 text-center mb-8 md:mb-0">
            <div className="w-10 h-10 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="#0C6E59" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Transparency</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              We pride ourselves on clear and honest communication throughout your real estate journey.
            </p>
          </div>
  
          <div className="flex-1 px-4 text-center">
            <div className="w-10 h-10 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="#0C6E59" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Personalized Service</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              We believe in understanding your unique needs and preferences, tailoring our services to match your goals.
            </p>
          </div>
        </div>
  
        {/* Second row of cards */}
        <div className="flex flex-col md:flex-row justify-between bg-white p-8 md:p-10 pt-6 pb-10 mx-auto w-[90%] shadow-lg relative z-10 rounded-b-lg border-t border-gray-100">
          <div className="flex-1 px-4 text-center mb-8 md:mb-0">
            <div className="w-10 h-10 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="#0C6E59" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Market Knowledge</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              We stay ahead of market trends and provide you with up-to-date information to make informed decisions.
            </p>
          </div>
  
          <div className="flex-1 px-4 text-center mb-8 md:mb-0">
            <div className="w-10 h-10 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="#0C6E59" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Negotiation Skills</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Our agents are skilled negotiators who work tirelessly to secure the best possible terms for your
              transaction.
            </p>
          </div>
  
          <div className="flex-1 px-4 text-center">
            <div className="w-10 h-10 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="#0C6E59" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Full-Service Support</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              From listing to closing, we provide comprehensive support throughout every step of your real estate
              transaction.
            </p>
          </div>
        </div>
        
      </div>
    )
  }
  
  export default WhyChooseUs;
  