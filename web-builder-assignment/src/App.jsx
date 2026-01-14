import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import FeaturedListings from './components/FeaturedListings';
import PhotoGallery from './components/PhotoGallery';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Main page container with semantic HTML structure */}
      <main id="main-content" className="w-full">
        <HeroSection />
        <AboutSection />
        <Services />
        <Testimonials />
        <FeaturedListings />
        <PhotoGallery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
