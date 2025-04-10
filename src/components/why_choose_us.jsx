function WhyChooseUs() {
    return (
      <div className="relative max-w-[1400px] mr-auto ml-auto">
        <div className="container">
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
        </div>
        <div className="relative w-full h-[500px]">
          {/* Background image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1741850826374-47b63fd4a840?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
          ></div>
  
          {/* Dim black overlay */}
          <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
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
  