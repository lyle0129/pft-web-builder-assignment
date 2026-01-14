import { Phone, Mail, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CallToAction = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        <AnimatedSection delay={0.1}>
          <div className="text-center space-y-6 xs:space-y-8 sm:space-y-10">
            {/* Heading */}
            <h2
              id="cta-heading"
              className="
                font-serif font-semibold tracking-tight leading-tight
                text-3xl xs:text-4xl sm:text-5xl lg:text-6xl
                px-2 xs:px-0
              "
              style={{ color: 'var(--color-text-primary)' }}
            >
              Ready to Find Your Dream Property?
            </h2>

            {/* Divider */}
            <div className="flex justify-center">
              <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
            </div>

            {/* Copy */}
            <p
              className="
                max-w-2xl mx-auto
                text-sm xs:text-base sm:text-lg lg:text-xl
                leading-relaxed font-light
                px-4 xs:px-2 sm:px-0
              "
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Let us help you discover exceptional luxury properties with personalized service
              and expert guidance every step of the way.
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4 px-4 xs:px-0">
              <button
                type="button"
                aria-label="Contact us to start your property search"
                className="
                  group inline-flex items-center justify-center gap-2
                  px-6 xs:px-8 sm:px-10 lg:px-12
                  py-4 xs:py-3.5 sm:py-4 lg:py-5
                  min-w-[180px] xs:min-w-[200px] sm:min-w-[220px] lg:min-w-[250px]
                  min-h-[48px]
                  text-sm sm:text-base
                  font-medium uppercase tracking-wide
                  transition-all duration-300 ease-out
                  hover:opacity-90 hover:-translate-y-[1px]
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-offset-2
                  touch-manipulation
                  active:scale-95
                  border
                "
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-bg-primary)',
                  borderColor: 'var(--color-charcoal)',
                }}
              >
                <MessageCircle size={16} />
                Contact Us Today
              </button>
            </div>

            {/* Contact Info */}
            <div
              className="
                pt-4 xs:pt-6 sm:pt-8
                space-y-1 sm:space-y-2
                text-xs xs:text-sm sm:text-base font-light
                px-2 xs:px-0
              "
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <p className="flex items-center justify-center gap-2">
                <Phone size={14} />
                Call us at{' '}
                <span
                  className="font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  (555) 123-4567
                </span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail size={14} />
                Email{' '}
                <span
                  className="font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  info@luxuryrealestate.com
                </span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
