import aboutPlaceholder from '../assets/about-placeholder.jpg';
import { Award, TrendingUp, Trophy, Home, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr_2fr_0.5fr] gap-8 xs:gap-12 lg:gap-8 items-center">
          {/* Empty space before image */}
          <div className="hidden lg:block"></div>

          {/* Image - Takes second column */}
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center lg:justify-end order-1 lg:order-none">
              <div className="relative max-w-xs xs:max-w-sm sm:max-w-md w-full overflow-hidden rounded-2xl">
                <img
                  src={aboutPlaceholder}
                  alt="Professional real estate agent portrait"
                  className="w-full h-auto object-cover aspect-[4/5] shadow-md rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Content - Takes second column */}
          <AnimatedSection delay={0.3}>
            <div className="order-2 lg:order-none">
              <div className="space-y-6 xs:space-y-8 sm:space-y-10 text-center lg:text-left px-4 xs:px-6 sm:px-8 lg:px-0">
                {/* Heading */}
                <div className="space-y-3 xs:space-y-5">
                  <h2
                    id="about-heading"
                    className="font-serif tracking-tight leading-tight text-3xl xs:text-4xl sm:text-5xl lg:text-6xl"
                    style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                  >
                    Professional Excellence
                  </h2>

                  <div className="flex justify-center lg:justify-start">
                    <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-6 xs:space-y-8">
                  <div>
                    <h3
                      className="font-serif text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 flex items-center gap-2 justify-center lg:justify-start"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      <Trophy size={24} style={{ color: 'var(--color-muted-gold)' }} />
                      Top Residential Sales Last 5 Years
                    </h3>
                    <p
                      className="text-sm xs:text-base sm:text-lg leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}
                    >
                      We helped nearly 90 clients in 2021, and closed $28.5 million in sales!
                      Our team works hard every day to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, and we want to make sure our best is better every year.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-serif text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 flex items-center gap-2 justify-center lg:justify-start"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      <Home size={24} style={{ color: 'var(--color-muted-gold)' }} />
                      Don't Just List It... Get It SOLD!
                    </h3>
                    <p
                      className="text-sm xs:text-base sm:text-lg leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}
                    >
                      We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-serif text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 flex items-center gap-2 justify-center lg:justify-start"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      <MapPin size={24} style={{ color: 'var(--color-muted-gold)' }} />
                      Guide to Buyers
                    </h3>
                    <p
                      className="text-sm xs:text-base sm:text-lg leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}
                    >
                      Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrade lists, contractors on speed dial, and more!
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-6 xs:pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="grid grid-cols-2 gap-6 xs:gap-10 max-w-xs xs:max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <Award size={20} style={{ color: 'var(--color-muted-gold)' }} />
                        <div
                          className="text-2xl xs:text-3xl font-serif"
                          style={{ color: 'var(--color-text-primary)', fontWeight: 300 }}
                        >
                          30+
                        </div>
                      </div>
                      <div
                        className="text-xs uppercase tracking-widest"
                        style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}
                      >
                        Years Experience
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <TrendingUp size={20} style={{ color: 'var(--color-muted-gold)' }} />
                        <div
                          className="text-2xl xs:text-3xl font-serif"
                          style={{ color: 'var(--color-text-primary)', fontWeight: 300 }}
                        >
                          $50M+
                        </div>
                      </div>
                      <div
                        className="text-xs uppercase tracking-widest"
                        style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}
                      >
                        Sales Volume
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
