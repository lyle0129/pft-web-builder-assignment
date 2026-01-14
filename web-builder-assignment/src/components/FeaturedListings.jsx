import { useState } from 'react';
import house1 from '../assets/house-1.jpg';
import house2 from '../assets/house-2.jpg';
import house3 from '../assets/house-3.jpg';
import { Eye, ArrowRight, ChevronUp, Search } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FeaturedListings = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    type: '',
    sortBy: 'newest',
    bedrooms: 'any',
    bathrooms: 'any',
    minPrice: '',
    maxPrice: ''
  });

  const handleFilterChange = (field, value) => {
    setSearchFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', searchFilters);
    // Add your search logic here
  };

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
                font-serif tracking-tight
                text-3xl xs:text-4xl sm:text-5xl lg:text-6xl
                mb-3 xs:mb-5
                px-2 xs:px-0
              "
              style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
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
                leading-relaxed
                px-4 xs:px-2 sm:px-0
              "
              style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}
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
                className={`
                  group relative overflow-hidden
                  h-64 xs:h-72 sm:h-80 lg:h-96
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  rounded-2xl
                  ${activeCard === listing.id ? 'active' : ''}
                `}
                style={{
                  backgroundImage: `url(${listing.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--color-border)',
                }}
                onClick={() => setActiveCard(activeCard === listing.id ? null : listing.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCard(activeCard === listing.id ? null : listing.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={activeCard === listing.id}
              >
                {/* Gradient overlay (does NOT wash out text) */}
                <div
                  className={`
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70 via-black/30 to-transparent
                    group-hover:from-black/80 group-hover:via-black/50
                    transition-all duration-300
                    ${activeCard === listing.id ? 'from-black/80 via-black/50' : ''}
                  `}
                />

                {/* Content */}
                <div
                  className={`
                    absolute -bottom-25 xs:-bottom-24 left-0 right-0 z-10
                    flex flex-col items-center
                    text-center
                    transition-transform duration-300
                    group-hover:-translate-y-36
                    ${activeCard === listing.id ? '-translate-y-36' : ''}
                  `}
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
                    className={`
                      opacity-0 translate-y-6
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 ease-out
                      ${activeCard === listing.id ? 'opacity-100 translate-y-0' : ''}
                    `}
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  rounded-full
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

              <button
                type="button"
                onClick={() => setShowSearchBox(!showSearchBox)}
                aria-label="Toggle search listings"
                aria-expanded={showSearchBox}
                className="
                  inline-flex items-center gap-2
                  px-6 xs:px-8 sm:px-10 py-4
                  text-sm sm:text-base
                  uppercase tracking-wide
                  transition-all duration-300
                  hover:-translate-y-1 hover:opacity-90
                  active:scale-95
                  rounded-full
                "
                style={{
                  backgroundColor: showSearchBox ? 'var(--color-charcoal)' : 'transparent',
                  color: showSearchBox ? 'var(--color-bg-primary)' : 'var(--color-charcoal)',
                  border: '1px solid var(--color-charcoal)',
                }}
              >
                <Search size={16} />
                Search Listings
              </button>
            </div>

            {/* Search Box */}
            {showSearchBox && (
              <div 
                className="
                  mt-8 p-6 sm:p-8 rounded-2xl
                  max-w-6xl mx-auto
                  animate-fadeIn
                "
                style={{
                  backgroundColor: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Row 1 - 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {/* Location */}
                  <div>
                    <label 
                      htmlFor="location"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Location
                    </label>
                    <select
                      id="location"
                      value={searchFilters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <option value="">All Locations</option>
                      <option value="downtown">Downtown</option>
                      <option value="suburban">Suburban</option>
                      <option value="waterfront">Waterfront</option>
                      <option value="countryside">Countryside</option>
                      <option value="beachfront">Beachfront</option>
                      <option value="mountain">Mountain</option>
                      <option value="urban">Urban</option>
                      <option value="rural">Rural</option>
                    </select>
                  </div>

                  {/* Type */}
                  <div>
                    <label 
                      htmlFor="type"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Type
                    </label>
                    <select
                      id="type"
                      value={searchFilters.type}
                      onChange={(e) => handleFilterChange('type', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <option value="">All Types</option>
                      <option value="condo">Condo</option>
                      <option value="house">House</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="villa">Villa</option>
                      <option value="estate">Estate</option>
                      <option value="apartment">Apartment</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="loft">Loft</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label 
                      htmlFor="sortBy"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Sort By
                    </label>
                    <select
                      id="sortBy"
                      value={searchFilters.sortBy}
                      onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="price-low-high">Least Expensive to Most</option>
                      <option value="price-high-low">Most Expensive to Least</option>
                      <option value="bedrooms-low-high">Bedrooms (Low to High)</option>
                      <option value="bedrooms-high-low">Bedrooms (High to Low)</option>
                      <option value="bathrooms-low-high">Bathrooms (Low to High)</option>
                      <option value="bathrooms-high-low">Bathrooms (High to Low)</option>
                    </select>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label 
                      htmlFor="bedrooms"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      value={searchFilters.bedrooms}
                      onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <option value="any">Any Number</option>
                      <option value="studio">Studio</option>
                      <option value="1+">1+</option>
                      <option value="2+">2+</option>
                      <option value="3+">3+</option>
                      <option value="4+">4+</option>
                      <option value="5+">5+</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>

                {/* Row 2 - 3 inputs + 1 button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Bathrooms */}
                  <div>
                    <label 
                      htmlFor="bathrooms"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Baths
                    </label>
                    <select
                      id="bathrooms"
                      value={searchFilters.bathrooms}
                      onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <option value="any">Any Number</option>
                      <option value="1+">1+</option>
                      <option value="2+">2+</option>
                      <option value="3+">3+</option>
                      <option value="4+">4+</option>
                      <option value="5+">5+</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>

                  {/* Min Price */}
                  <div>
                    <label 
                      htmlFor="minPrice"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Min Price
                    </label>
                    <input
                      id="minPrice"
                      type="text"
                      placeholder="$0"
                      value={searchFilters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    />
                  </div>

                  {/* Max Price */}
                  <div>
                    <label 
                      htmlFor="maxPrice"
                      className="block text-sm mb-2"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 400 }}
                    >
                      Max Price
                    </label>
                    <input
                      id="maxPrice"
                      type="text"
                      placeholder="Any"
                      value={searchFilters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="
                        w-full px-4 py-2 rounded-lg
                        transition-all duration-200
                        focus:outline-none focus:ring-2
                      "
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)',
                      }}
                    />
                  </div>

                  {/* Search Button */}
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={handleSearch}
                      className="
                        w-full
                        inline-flex items-center justify-center gap-2
                        px-6 py-2
                        text-sm sm:text-base
                        uppercase tracking-wide
                        transition-all duration-300
                        hover:-translate-y-1 hover:opacity-90
                        active:scale-95
                        rounded-lg
                      "
                      style={{
                        backgroundColor: 'var(--color-charcoal)',
                        color: 'var(--color-bg-primary)',
                        border: '1px solid var(--color-charcoal)',
                      }}
                    >
                      <Search size={16} />
                      Search Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default FeaturedListings;
