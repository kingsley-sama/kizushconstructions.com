import React from 'react';
import { Typography} from '@mui/material';
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
    <div className="text-center bg-[] mb-8 md:mb-0">
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

function KizushValues() {
  const featuresData = [
    {
      icon: <Shield />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices. Our clients can trust us to deliver on our promises and maintain the highest moral standards.'
    },
    {
      icon: <HandHeart />,
      title: 'Service',
      description: 'Our commitment to exceptional service drives everything we do. We go above and beyond to ensure our clients receive personalized attention and support throughout their journey.'
    },
    {
      icon: <Star />,
      title: 'Gratitude',
      description: 'We are deeply grateful for the trust our clients place in us. This appreciation motivates us to continuously exceed expectations and build lasting relationships.'
    },
    {
      icon: <Award />,
      title: 'Quality',
      description: 'We never compromise on quality. From materials to craftsmanship, every aspect of our work meets the highest standards to ensure lasting results.'
    },
    {
      icon: <TrendingUp />,
      title: 'Excellence',
      description: 'Excellence is not just a goal, it\'s our standard. We continuously strive to improve and deliver outstanding results that surpass industry benchmarks.'
    },
    {
      icon: <Target />,
      title: 'Precision',
      description: 'Attention to detail and precision in execution set us apart. We meticulously plan and execute every project to ensure perfect results and client satisfaction.'
    }
  ];  

  return (
    <div className="relative max-w-[1400px] mx-auto">
		<Typography
				className='text-[var(--primary)]'
				variant='h2'
				component='h1'
				align='center'
				gutterBottom
				sx={{
					mb: 8,

					fontWeight: 500,
				}}>
				Our Values
		</Typography>
      <div className="bg-white p-8 md:p-12 -mt-20 mx-auto w-[90%] relative z-10 rounded-lg">
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

export default KizushValues;