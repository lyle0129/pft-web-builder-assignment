import aboutPlaceholder from '../assets/about-placeholder.jpg';
import { Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-8 xs:gap-12 lg:gap-16 xl:gap-20
            items-center
          "
        >
          {/* Image */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative max-w-xs xs:max-w-sm sm:max-w-md w-full overflow-hidden">
              <img
                src={aboutPlaceholder}
                alt="Professional real estate agent portrait"
                className="
                  w-full h-auto object-cover aspect-[4/5]
                  shadow-md
                "
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 xs:space-y-8 sm:space-y-10 text-center lg:text-left order-2 lg:order-none">
            {/* Heading */}
            <div className="space-y-3 xs:space-y-5">
              <h2
                id="about-heading"
                className="
                  font-serif font-light tracking-tight leading-tight
                  text-2xl xs:text-3xl sm:text-4xl lg:text-5xl
                  px-2 xs:px-0
                "
                style={{ color: 'var(--color-text-primary)' }}
              >
                Professional Excellence
              </h2>

              <div className="flex justify-center lg:justify-start">
                <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
              </div>
            </div>

            {/* Body */}
            <div
              className="
                space-y-4 xs:space-y-6
                text-sm xs:text-base sm:text-lg
                leading-relaxed font-light
                px-2 xs:px-0
              "
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <p>
                Dedicated to providing exceptional real estate services with over 15 years of
                experience in luxury property markets. Our commitment to excellence and
                personalized attention ensures every client receives the highest level of
                professional service.
              </p>

              <p>
                Specializing in high-end residential properties, we understand the unique needs
                of discerning clients seeking premium real estate solutions. From initial
                consultation to closing, we guide you through every step of the process with
                expertise and integrity.
              </p>

              <p>
                Our deep market knowledge, extensive network, and proven track record of
                successful transactions make us the trusted choice for luxury real estate in
                the region.
              </p>
            </div>

            {/* Stats */}
            <div
              className="pt-6 xs:pt-8 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="grid grid-cols-2 gap-6 xs:gap-10 max-w-xs xs:max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
                <div className="space-y-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Award size={20} style={{ color: 'var(--color-muted-gold)' }} />
                    <div
                      className="text-2xl xs:text-3xl font-serif font-light"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      15+
                    </div>
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Years Experience
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <TrendingUp size={20} style={{ color: 'var(--color-muted-gold)' }} />
                    <div
                      className="text-2xl xs:text-3xl font-serif font-light"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      $50M+
                    </div>
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Sales Volume
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
