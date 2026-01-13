import house1 from '../assets/house-1.jpg';
import house2 from '../assets/house-2.jpg';
import house3 from '../assets/house-3.jpg';
import { Eye, ArrowRight, ChevronUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FeaturedListings = () => {
  const featuredListings = [
    {
      id: 1,
      image: house1,
      title: "Luxury Downtown Condo",
      price: "$850,000",
      description:
        "Modern living in the heart of the city with premium finishes and stunning views",
    },
    {
      id: 2,
      image: house2,
      title: "Elegant Suburban Estate",
      price: "$1,250,000",
      description:
        "Spacious family home with landscaped gardens and premium amenities",
    },
    {
      id: 3,
      image: house3,
      title: "Waterfront Penthouse",
      price: "$2,100,000",
      description:
        "Exclusive penthouse with panoramic water views and luxury appointments",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">

        {/* ===== HEADER (RESTORED) ===== */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-10 xs:mb-14 sm:mb-16 lg:mb-20">
            <h2
              id="featured-heading"
              className="
                font-serif font-light tracking-tight
                text-2xl xs:text-3xl sm:text-4xl lg:text-5xl
                mb-3 xs:mb-5
                px-2 xs:px-0
              "
              style={{ color: 'var(--color-text-primary)' }}
            >
              Featured Properties
            </h2>

            <div className="flex justify-center mb-4 xs:mb-6">
              <span
                className="w-14 h-px"
                style={{ backgroundColor: 'var(--color-muted-gold)' }}
              />
            </div>

            <p
              className="
                max-w-2xl mx-auto
                text-sm xs:text-base sm:text-lg
                leading-relaxed font-light
                px-4 xs:px-2 sm:px-0
              "
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Discover our carefully curated selection of exceptional luxury properties.
            </p>
          </div>
        </AnimatedSection>

        {/* ===== LISTINGS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 lg:gap-10">
          {featuredListings.map((listing, index) => (
            <AnimatedSection key={listing.id} delay={0.3 + index * 0.2}>
              <article
                className="
                  group relative overflow-hidden
                  h-64 xs:h-72 sm:h-80 lg:h-96
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
                style={{
                  backgroundImage: `url(${listing.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--color-border)',
                }}
              >
                {/* Gradient overlay (does NOT wash out text) */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70 via-black/30 to-transparent
                    group-hover:from-black/80 group-hover:via-black/50
                    transition-all duration-300
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute -bottom-25 xs:-bottom-24 left-0 right-0 z-10
                    flex flex-col items-center
                    text-center
                    transition-transform duration-300
                    group-hover:-translate-y-36
                  "
                >
                  {/* Title + Chevron */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-lg xs:text-xl sm:text-2xl text-white" style={{ color: '#ffffff' }}>
                      {listing.title}
                    </h3>
                    <ChevronUp
                      size={20}
                      className="
                        opacity-80
                        transition-all duration-300
                        group-hover:opacity-100 group-hover:-translate-y-1
                      "
                      style={{ color: '#ffffff' }}
                    />
                  </div>

                  {/* Details */}
                  <div
                    className="
                      opacity-0 translate-y-6
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 ease-out
                    "
                  >
                    <div className="font-serif text-xl xs:text-2xl mb-2" style={{ color: '#ffffff' }}>
                      {listing.price}
                    </div>

                    <p className="text-sm xs:text-base mb-4 px-6" style={{ color: '#ffffff', opacity: 0.95 }}>
                      {listing.description}
                    </p>

                    <button
                      type="button"
                      aria-label={`View details for ${listing.title}`}
                      className="
                        inline-flex items-center gap-2
                        text-xs sm:text-sm
                        uppercase tracking-widest
                        border-b
                        hover:opacity-80 transition-opacity
                        min-h-[44px]
                      "
                      style={{ color: '#ffffff', borderColor: '#ffffff' }}
                    >
                      <Eye size={14} />
                      View Details
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <AnimatedSection delay={0.9}>
          <div className="text-center mt-10 xs:mt-14 sm:mt-16 lg:mt-20">
            <button
              type="button"
              aria-label="View all available luxury properties"
              className="
                inline-flex items-center gap-2
                px-6 xs:px-8 sm:px-10 py-4
                text-sm sm:text-base
                uppercase tracking-wide
                transition-all duration-300
                hover:-translate-y-1 hover:opacity-90
                active:scale-95
              "
              style={{
                backgroundColor: 'var(--color-charcoal)',
                color: 'var(--color-bg-primary)',
                border: '1px solid var(--color-charcoal)',
              }}
            >
              View All Properties
              <ArrowRight size={16} />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default FeaturedListings;
