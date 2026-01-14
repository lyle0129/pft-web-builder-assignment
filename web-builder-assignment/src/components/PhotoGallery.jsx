import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const galleryImages = [
  {
    id: 1,
    image: "/src/assets/gallery (1).png",
    altText: "Sun-Filled Living Area with Scenic Views",
    caption: "Sun-Filled Living Area with Scenic Views",
  },
  {
    id: 2,
    image: "/src/assets/gallery (2).png",
    altText: "Resort-Style Community with Golf & Mountain Views",
    caption: "Resort-Style Community with Golf & Mountain Views",
  },
  {
    id: 3,
    image: "/src/assets/gallery (3).png",
    altText: "Resort-Style Pool-Equiped Living",
    caption: "Resort-Style Pool-Equiped Living",
  },
  {
    id: 4,
    image: "/src/assets/gallery (4).png",
    altText: "Spacious Driveways",
    caption: "Spacious Driveways",
  },
  {
    id: 5,
    image: "/src/assets/gallery (5).png",
    altText: "Outdoor community entertainment area",
    caption: "Outdoor community entertainment area",
  },
  {
    id: 6,
    image: "/src/assets/gallery (6).png",
    altText: "Peaceful Environment",
    caption: "Peaceful Environment",
  },
  {
    id: 7,
    image: "/src/assets/gallery (7).png",
    altText: "Excellent and Friendly Community",
    caption: "Excellent and Friendly Community",
  },
];

const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 6500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case ' ':
          event.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  const goToImage = (index) => setCurrentImageIndex(index);
  const goToPrevious = () =>
    setCurrentImageIndex(
      currentImageIndex === 0
        ? galleryImages.length - 1
        : currentImageIndex - 1
    );
  const goToNext = () =>
    setCurrentImageIndex(
      currentImageIndex === galleryImages.length - 1
        ? 0
        : currentImageIndex + 1
    );

  return (
    <section
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-10 xs:mb-14 sm:mb-16 lg:mb-20">
            <h2
              id="gallery-heading"
              className="font-serif font-semibold tracking-tight
                         text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-3 xs:mb-5
                         px-2 xs:px-0"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Community Gallery
            </h2>

            <div className="flex justify-center mb-4 xs:mb-6">
              <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
            </div>

            <p
              className="max-w-2xl mx-auto
                         text-sm xs:text-base sm:text-lg
                         leading-relaxed font-light
                         px-4 xs:px-2 sm:px-0"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Explore our curated collection of luxury estates and exceptional properties.
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.3}>
          <div className="relative max-w-2xl mx-auto w-full md:w-1/2">
            <div
              className="relative aspect-[4/3] overflow-hidden shadow-md rounded-lg"
              role="region"
              aria-labelledby="gallery-heading"
              aria-live="polite"
            >
              <img
                src={galleryImages[currentImageIndex].image}
                alt={galleryImages[currentImageIndex].altText}
                className="w-full h-full object-cover transition-opacity duration-700"
              />

              {/* Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-4 xs:left-6 right-4 xs:right-6 text-center">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
                    <h3 className="font-serif font-light
                                   text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-2
                                   tracking-wide drop-shadow-lg"
                      style={{ color: '#ffffff' }}>
                      {galleryImages[currentImageIndex].caption}
                    </h3>
                    <div className="flex justify-center mb-2">
                      <span className="w-8 h-px bg-white/80" />
                    </div>
                    <p className="text-sm sm:text-base font-light tracking-wide drop-shadow-lg"
                      style={{ color: '#ffffff' }}>
                      {currentImageIndex + 1} of {galleryImages.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
                className="
                  absolute left-2 xs:left-4 sm:left-6 top-1/2 -translate-y-1/2
                  p-3 xs:p-2.5 sm:p-3
                  min-w-[44px] min-h-[44px]
                  bg-black/30 hover:bg-black/40
                  backdrop-blur-sm
                  transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-white/60
                  touch-manipulation
                  rounded-full
                "
              >
                <ChevronLeft size={20} className="text-white" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
                className="
                  absolute right-2 xs:right-4 sm:right-6 top-1/2 -translate-y-1/2
                  p-3 xs:p-2.5 sm:p-3
                  min-w-[44px] min-h-[44px]
                  bg-black/30 hover:bg-black/40
                  backdrop-blur-sm
                  transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-white/60
                  touch-manipulation
                  rounded-full
                "
              >
                <ChevronRight size={20} className="text-white" />
              </button>

              {/* Play/Pause */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className="
                  absolute top-2 xs:top-4 sm:top-6 right-2 xs:right-4 sm:right-6
                  p-3 xs:p-2.5 sm:p-3
                  min-w-[44px] min-h-[44px]
                  bg-black/30 hover:bg-black/40
                  backdrop-blur-sm
                  transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-white/60
                  touch-manipulation
                  rounded-full
                "
              >
                {isPlaying ? (
                  <Pause size={16} className="text-white" />
                ) : (
                  <Play size={16} className="text-white" />
                )}
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 xs:gap-3 mt-6 xs:mt-8 overflow-x-auto pb-2 px-4 xs:px-0">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => goToImage(index)}
                  aria-label={`View ${image.caption}`}
                  className={`
                    flex-shrink-0 overflow-hidden border
                    w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                    min-w-[44px] min-h-[44px]
                    transition-all duration-300
                    touch-manipulation
                    rounded-lg
                    ${index === currentImageIndex ? 'shadow-md' : 'hover:opacity-70'}
                  `}
                  style={{
                    borderColor:
                      index === currentImageIndex
                        ? 'var(--color-text-primary)'
                        : 'var(--color-border)',
                  }}
                >
                  <img
                    src={image.image}
                    alt={image.altText}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PhotoGallery;
