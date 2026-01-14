import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: 'var(--color-dark-charcoal)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-12 xs:py-16 lg:py-20 text-white">
        {/* Main Content - Centered */}
        <div className="text-center space-y-8 xs:space-y-10 max-w-3xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3
              className="font-serif font-light text-lg xs:text-xl tracking-wide mb-4 xs:mb-6"
              style={{ color: 'white' }}
            >
              Contact Information
            </h3>
            <div className="space-y-3 xs:space-y-4 text-xs xs:text-sm sm:text-base font-light text-white">
              <address className="not-italic">
                <p className="flex items-center justify-center gap-3">
                  <Phone size={16} className="text-white flex-shrink-0" />
                  <span>
                    <span className="text-white font-medium">Phone: </span>
                    <a
                      href="tel:+15551234567"
                      className="text-white hover:opacity-70 transition-colors duration-300 touch-manipulation"
                    >
                      (555) 123-4567
                    </a>
                  </span>
                </p>

                <p className="flex items-center justify-center gap-3">
                  <Mail size={16} className="text-white flex-shrink-0" />
                  <span>
                    <span className="text-white font-medium">Email: </span>
                    <a
                      href="mailto:info@luxuryrealestate.com"
                      className="text-white hover:opacity-70 transition-colors duration-300 touch-manipulation"
                    >
                      info@luxuryrealestate.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center justify-center gap-3">
                  <MapPin size={16} className="text-white flex-shrink-0" />
                  <span>
                    <span className="text-white font-medium">Address: </span>
                    123 Luxury Lane, Premium City, PC 12345
                  </span>
                </p>
              </address>
            </div>
          </div>

          {/* Values */}
          <div>
            <p className="text-sm xs:text-base sm:text-lg font-light text-white leading-relaxed">
              Let us help you discover exceptional luxury properties with personalized service
              and expert guidance every step of the way.
            </p>
          </div>

          {/* Connect With Us */}
          <div>
            <h3
              className="font-serif font-light text-lg xs:text-xl tracking-wide mb-4 xs:mb-6"
              style={{ color: 'white' }}
            >
              Connect With Us
            </h3>

            {/* Social Icons - No boxes */}
            <nav aria-label="Social media links">
              <div className="flex justify-center gap-6 xs:gap-8">
                <a
                  href="#"
                  aria-label="Follow us on Facebook"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <Facebook size={24} className="xs:w-7 xs:h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Follow us on Instagram"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <Instagram size={24} className="xs:w-7 xs:h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Connect with us on LinkedIn"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <Linkedin size={24} className="xs:w-7 xs:h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Review us on Yelp"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <Star size={24} className="xs:w-7 xs:h-7" fill="currentColor" />
                </a>
              </div>
            </nav>
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