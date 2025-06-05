import React from 'react';
import { 
  Star, 
  Shield, 
  Users, 
  TrendingUp, 
  HandHeart, 
  Award,
  Clock,
  Target, 
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center mb-8 md:mb-0">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-[rgba(8,68,94,0.7)] hover:bg-[rgba(8,68,94,0.9)] rounded-full flex items-center justify-center">
          {React.cloneElement(icon, { 
            size: 28, 
            color: 'white' 
          })}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 px-2">
        {description}
      </p>
    </div>
  );
};

function WhyChooseUs() {
  const featuresData = [
    {
      icon: <Star />,
      title: 'Proven Excellence',
      description: 'Our track record speaks for itself with countless successful projects and satisfied clients who trust us with their most important investments.'
    },
    {
      icon: <Shield />,
      title: 'Safety',
      description: 'We prioritize safety above all else. Our rigorous safety protocols and training ensure a secure environment for our team and clients throughout every project.'
    },
    {
      icon: <Users />,
      title: 'Personalized Approach',
      description: 'Every client is unique. We take time to understand your specific needs, preferences, and goals to deliver tailored solutions that exceed expectations.'
    },
    {
      icon: <TrendingUp />,
      title: 'Market Leadership',
      description: 'Stay ahead with our deep market knowledge and trend analysis. We provide insights that help you make informed decisions for optimal outcomes.'
    },
    {
      icon: <HandHeart />,
      title: 'Expert Negotiation',
      description: 'Our skilled negotiators work tirelessly to secure the best possible terms, protecting your interests and maximizing your investment value.'
    },
    {
      icon: <Award />,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in every aspect of our work, from initial consultation to project completion and beyond.'
    },
    {
      icon: <Clock />,
      title: 'Timely Delivery',
      description: 'Reliability is our commitment. We respect your time and ensure projects are completed efficiently without compromising on quality.'
    },
    {
      icon: <Target />,
      title: 'End-to-End Support',
      description: 'From initial planning to final handover and after-sales service, we provide comprehensive support throughout your entire journey with us.'
    }
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <div className="absolute flex flex-col items-center justify-center p-4 inset-0 w-full h-full bg-cover bg-center bg-primary">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            Why Choose Kizush Constructions
          </h2>
          <div className="max-w-3xl px-4">
            <p className="text-white font-serif text-lg text-center mb-4 leading-relaxed">
              At Kizush Constructions, we believe in transforming spaces with purpose and precision. 
              Our commitment to excellence has made us the trusted choice for clients who demand the best. 
              Here's what sets us apart in the construction and real estate industry.
            </p>
          </div>  
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white p-8 md:p-12 -mt-20 mx-auto w-[90%] relative z-10 rounded-lg">
        {/* First Row - Top 4 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuresData.slice(0, 4).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="border-t border-gray-200 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.slice(4, 8).map((feature, index) => (
            <FeatureCard
              key={index + 4}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;