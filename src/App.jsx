import DesignSections from './pages/services';
import AboutSection from './components/about';
import Portfolio from './components/portfolio';
import ScrollingTestimonials from './components/testimonial';
import WhyChooseUs from './components/why_choose_us';
import FAQPage from './components/faq';
import ContactForm from './components/contact';
import KiSushDifference from './components/kizush';

function HomeSection() {
  return (
         <>
            <AboutSection />
            <DesignSections />
            <Portfolio />
            <WhyChooseUs />
            <KiSushDifference />
            <ContactForm ></ContactForm>
            <ScrollingTestimonials />
            <FAQPage />
         </>
  )
}
export default HomeSection;
