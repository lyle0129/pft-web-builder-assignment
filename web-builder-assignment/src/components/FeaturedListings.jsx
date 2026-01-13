import listingPlaceholder from '../assets/listing-placeholder.jpg';
import { Eye, ArrowRight } from 'lucide-react';

const FeaturedListings = () => {
  const featuredListings = [
    {
      id: 1,
      image: listingPlaceholder,
      title: "Luxury Downtown Condo",
      price: "$850,000",
      description:
        "Modern living in the heart of the city with premium finishes and stunning views",
      altText: "Luxury condominium exterior",
    },
    {
      id: 2,
      image: listingPlaceholder,
      title: "Elegant Suburban Estate",
      price: "$1,250,000",
      description:
        "Spacious family home with landscaped gardens and premium amenities",
      altText: "Elegant suburban estate exterior",
    },
    {
      id: 3,
      image: listingPlaceholder,
      title: "Waterfront Penthouse",
      price: "$2,100,000",
      description:
        "Exclusive penthouse with panoramic water views and luxury appointments",
      altText: "Waterfront penthouse exterior",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header */}
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
            <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
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

        {/* Listings */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 lg:gap-10"
          role="list"
          aria-label="Featured property listings"
        >
          {featuredListings.map((listing) => (
            <article
              key={listing.id}
              role="listitem"
              className="
                group overflow-hidden
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl
                touch-manipulation
              "
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.altText}
                  className="
                    w-full h-48 xs:h-56 sm:h-64 lg:h-72
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 xs:p-6 sm:p-8 text-center">
                <div
                  className="font-serif font-light mb-2
                             text-lg xs:text-xl sm:text-2xl"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {listing.price}
                </div>

                <h3
                  className="font-serif font-normal mb-3 xs:mb-4 leading-snug
                             text-base xs:text-lg sm:text-xl"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {listing.title}
                </h3>

                <p
                  className="mb-4 xs:mb-6 font-light leading-relaxed text-xs xs:text-sm sm:text-base"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {listing.description}
                </p>

                <button
                  type="button"
                  aria-label={`View details for ${listing.title}`}
                  className="
                    group inline-flex items-center justify-center gap-2
                    text-xs sm:text-sm
                    font-medium uppercase tracking-widest
                    transition-all duration-300
                    hover:opacity-70
                    border-b pb-1
                    min-h-[44px]
                    touch-manipulation
                  "
                  style={{
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-text-primary)',
                  }}
                >
                  <Eye size={14} />
                  View Details
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 xs:mt-14 sm:mt-16 lg:mt-20 px-4 xs:px-0">
          <button
            type="button"
            aria-label="View all available luxury properties"
            className="
              group inline-flex items-center justify-center gap-2
              px-6 xs:px-8 sm:px-10 py-4 xs:py-3.5 sm:py-4
              min-w-[180px] xs:min-w-[200px]
              min-h-[48px]
              text-sm sm:text-base
              font-medium uppercase tracking-wide
              transition-all duration-300
              hover:opacity-90 hover:-translate-y-[1px]
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-offset-2
              touch-manipulation
              active:scale-95
            "
            style={{
              backgroundColor: 'var(--color-charcoal)',
              color: 'var(--color-bg-primary)',
              border: '1px solid var(--color-charcoal)',
            }}
          >
            View All Properties
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
