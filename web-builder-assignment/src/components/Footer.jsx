import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: 'var(--color-dark-charcoal)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-12 xs:py-16 lg:py-20 text-white">
        {/* Main Content */}
        <div className="flex justify-center">
          <div
            className="
              grid grid-cols-1 lg:grid-cols-2
              gap-8 xs:gap-12 lg:gap-20
              text-center lg:text-left
              max-w-4xl
            "
          >
            {/* Contact */}
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="font-serif font-light text-lg xs:text-xl tracking-wide mb-4 xs:mb-6" style={{ color: 'white' }}>
                Contact Information
              </h3>

              <div className="space-y-3 xs:space-y-4 text-xs xs:text-sm sm:text-base font-light text-gray-300">
                <address className="not-italic">
                  <p className="flex items-center justify-center lg:justify-start gap-3">
                    <Phone size={16} className="text-white flex-shrink-0" />
                    <span>
                      <span className="block text-white font-medium mb-1">Phone</span>
                      <a 
                        href="tel:+15551234567"
                        className="hover:text-white transition-colors duration-300 touch-manipulation min-h-[44px] inline-flex items-center"
                      >
                        (555) 123-4567
                      </a>
                    </span>
                  </p>

                  <p className="flex items-center justify-center lg:justify-start gap-3">
                    <Mail size={16} className="text-white flex-shrink-0" />
                    <span>
                      <span className="block text-white font-medium mb-1">Email</span>
                      <a 
                        href="mailto:info@luxuryrealestate.com"
                        className="hover:text-white transition-colors duration-300 touch-manipulation min-h-[44px] inline-flex items-center"
                      >
                        info@luxuryrealestate.com
                      </a>
                    </span>
                  </p>

                  <p className="flex items-start justify-center lg:justify-start gap-3">
                    <MapPin size={16} className="text-white flex-shrink-0 mt-1" />
                    <span>
                      <span className="block text-white font-medium mb-1">Address</span>
                      123 Luxury Lane, Premium City, PC 12345
                    </span>
                  </p>
                </address>
              </div>
            </div>

            {/* Social */}
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="font-serif font-light text-lg xs:text-xl tracking-wide mb-4 xs:mb-6" style={{ color: 'white' }}>
                Connect With Us
              </h3>

              <nav aria-label="Social media links">
                <div className="flex justify-center lg:justify-start gap-3 xs:gap-4">
                  {[
                    { label: 'Facebook', text: 'f' },
                    { label: 'Instagram', text: 'ig' },
                    { label: 'LinkedIn', text: 'in' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      aria-label={`Follow us on ${item.label}`}
                      role="button"
                      className="
                        group
                        w-11 h-11 xs:w-12 xs:h-12
                        min-w-[44px] min-h-[44px]
                        flex items-center justify-center
                        bg-white/10
                        text-gray-300
                        transition-all duration-300
                        hover:bg-white/20 hover:text-white
                        focus-visible:ring-2 focus-visible:ring-white/60
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-black
                        touch-manipulation
                      "
                    >
                      <span className="text-sm font-medium uppercase">
                        {item.text}
                      </span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 xs:mt-12 pt-6 xs:pt-8 text-center">
          <div className="space-y-1 xs:space-y-2 text-xs sm:text-sm font-light text-gray-400">
            <p>&copy; 2024 Luxury Real Estate Excellence. All rights reserved.</p>
            <p>Licensed Real Estate Professional | Equal Housing Opportunity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;