import DesignSections from './pages/services';
import AboutSection from './components/about';
import Portfolio from './components/portfolio';
import ScrollingTestimonials from './components/testimonial';
import WhyChooseUs from './components/why_choose_us';

function HomeSection() {
  return (
         <>
            <AboutSection />
            <DesignSections />
            <Portfolio />
            <WhyChooseUs />
            <ScrollingTestimonials />
         </>
  )
}
export default HomeSection;
