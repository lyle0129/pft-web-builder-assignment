import heroPlaceholder from '../assets/hero-placeholder.jpg';
import logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        flex items-start sm:items-center justify-center
        overflow-hidden
        pt-4 sm:pt-0
      "
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPlaceholder})` }}
        aria-hidden="true"
        role="img"
        aria-label="Luxury real estate property background"
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
      </div>

      {/* Logo */}
      <div className="absolute top-12 xs:top-14 sm:top-18 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src={logo}
          alt="The Ridge Realty Group Logo"
          className="
            h-18 xs:h-18 sm:h-18 lg:h-18 w-auto
            drop-shadow-lg
          "
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 xs:pt-36 sm:pt-0">
        <div className="text-center">

          {/* Headline */}
          <h1
            id="hero-heading"
            className="
              font-serif font-light text-white
              text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              leading-[1.1] xs:leading-[1.05] tracking-tight
              mb-4 xs:mb-6 sm:mb-8
              px-2 xs:px-0
            "
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            <span className="text-gray-50" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
              The Pahrump Realtor
            </span>
            <span
              className="
                block mt-1 xs:mt-2
                font-normal text-gray-100
                text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
              "
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              OWNER OF THE RIDGE REALTY GROUP
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="
              text-gray-200 font-light
              text-sm xs:text-base sm:text-lg lg:text-xl
              leading-relaxed
              mb-12 xs:mb-14 sm:mb-12
              px-4 xs:px-2 sm:px-0
              max-w-2xl mx-auto
            "
          >
            Discover exceptional properties with personalized service and unmatched expertise
            in luxury real estate.
          </p>

          {/* CTA */}
          <div className="flex justify-center px-4 xs:px-0">
            <button
              type="button"
              aria-label="View available luxury properties"
              className="
                group inline-flex items-center justify-center gap-2
                px-6 xs:px-8 sm:px-10 py-4 xs:py-3.5 sm:py-4
                min-w-[180px] xs:min-w-[200px]
                min-h-[48px]
                text-sm xs:text-sm sm:text-base font-medium uppercase tracking-wide
                border rounded-full
                transition-all duration-300 ease-out
                hover:opacity-90 hover:-translate-y-[1px]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                focus-visible:ring-offset-2 focus-visible:ring-offset-black/50
                touch-manipulation
                active:scale-95
              "
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
                borderColor: 'var(--color-bg-primary)',
              }}
            >
              View Properties
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
