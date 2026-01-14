import { Phone, MapPin, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ContactForm from './ContactForm';

const CallToAction = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12 xs:mb-16 lg:mb-20">
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
          <div className="flex justify-center mt-6 xs:mt-8">
            <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
          </div>
        </div>

        {/* Grid Layout: [space] [Form] [Contact info] [space] */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr_2fr_0.5fr] gap-8 xs:gap-12 lg:gap-8 items-start">
          {/* Empty space before form */}
          <div className="hidden lg:block"></div>

          {/* Contact Form - Takes second column */}
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center lg:justify-end order-1 lg:order-none">
              <div className="w-full max-w-md">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Information - Takes third column */}
          <AnimatedSection delay={0.3}>
            <div className="order-2 lg:order-none">
              <div className="space-y-6 text-center lg:text-left px-4 xs:px-6 sm:px-8 lg:px-0">
                <div className="space-y-4 text-sm xs:text-base font-light" style={{ color: 'var(--color-text-secondary)' }}>
                  <p className="font-medium text-xl lg:text-2xl" style={{ color: 'var(--color-text-primary)' }}>
                    Marci Metzger
                  </p>
                  <p className="font-medium text-lg" style={{ color: 'var(--color-text-primary)' }}>
                    THE RIDGE REALTY GROUP
                  </p>
                  
                  <div className="flex items-start gap-3 pt-2 justify-center lg:justify-start">
                    <MapPin size={18} className="flex-shrink-0 mt-1" />
                    <span className="text-left">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</span>
                  </div>
                  
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Phone size={18} className="flex-shrink-0" />
                    <a
                      href="tel:+12069196886"
                      className="hover:opacity-70 transition-colors duration-300 font-medium"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      (206) 919-6886
                    </a>
                  </div>

                  <div className="pt-4 border-t" style={{ borderColor: 'var(--color-muted-gold)' }}>
                    <p className="font-medium mb-3 flex items-center gap-2 justify-center lg:justify-start" style={{ color: 'var(--color-text-primary)' }}>
                      <Clock size={18} />
                      Office Hours
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto lg:mx-0">
                        <span className="text-right lg:text-left">Monday - Sunday:</span>
                        <span className="font-medium text-left">8:00 am - 7:00 pm</span>
                      </div>
                    </div>
                    <p className="text-xs mt-3 italic">
                      Appointments outside office hours available upon request. Just call!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Empty space after contact info */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
