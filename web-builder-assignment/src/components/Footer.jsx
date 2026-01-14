import { Facebook, Instagram } from 'lucide-react';
import favicon from '../assets/favicon.png';
import favicon2 from '../assets/favicon2.png';
import favicon3 from '../assets/favicon3.png';
import favicon4 from '../assets/favicon4.png';
import yelpLogo from '../assets/yelp-svgrepo-com.svg';

// LinkedIn SVG Component
const LinkedInIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: 'var(--color-dark-charcoal)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-12 xs:py-16 lg:py-20 text-white">
        {/* Main Content - Centered */}
        <div className="text-center space-y-8 xs:space-y-10 max-w-3xl mx-auto">
          {/* Connect With Us */}
          <div>
            <h3
              className="font-serif font-light text-lg xs:text-xl tracking-wide mb-4 xs:mb-6"
              style={{ color: 'white' }}
            >
              Connect With Us
            </h3>

            {/* Social Icons */}
            <nav aria-label="Social media links">
              <div className="flex justify-center gap-6 xs:gap-8">
                <a
                  href="https://www.facebook.com/MarciHomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <Facebook size={24} className="xs:w-7 xs:h-7" />
                </a>
                <a
                  href="https://www.instagram.com/marciandlauren_nvrealtors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <Instagram size={24} className="xs:w-7 xs:h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marci-metzger-30642496/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                  className="text-white transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <LinkedInIcon size={24} className="xs:w-7 xs:h-7" />
                </a>
                <a
                  href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Review us on Yelp"
                  className="transition-all duration-300 hover:opacity-70 hover:-translate-y-1 touch-manipulation"
                >
                  <img
                    src={yelpLogo}
                    alt="Yelp"
                    className="w-6 h-6 xs:w-7 xs:h-7 inline-block brightness-0 invert"
                  />
                </a>
              </div>
            </nav>
          </div>

          {/* Credential Favicons - Single line after Connect With Us */}
          <div className="flex gap-4 items-center justify-center">
            <img
              src={favicon}
              alt="Credential icon 1"
              className="w-14 h-14 rounded-full transition-all duration-300 hover:opacity-70 hover:-translate-y-1 cursor-pointer"
            />
            <img
              src={favicon2}
              alt="Credential icon 2"
              className="w-14 h-14 transition-all duration-300 hover:opacity-70 hover:-translate-y-1 cursor-pointer"
            />
            <img
              src={favicon3}
              alt="Credential icon 3"
              className="w-14 h-14 rounded-full transition-all duration-300 hover:opacity-70 hover:-translate-y-1 cursor-pointer"
            />
            <img
              src={favicon4}
              alt="Credential icon 4"
              className="w-14 h-14 rounded-full transition-all duration-300 hover:opacity-70 hover:-translate-y-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 xs:mt-12 pt-6 xs:pt-8 text-center">
          {/* Credits - Centered */}
          <div className="text-xs sm:text-sm font-light text-gray-400">
            <p>&copy; 2026 Marci METZGER Homes - All Rights Reserved</p>
            <p className="mt-1">Site made by Lyle Denzell C. Trillanes</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;