
import { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
    // Edit this array to change testimonials
    const testimonials = [
        {
            id: 1,
            name: "Tina H.",
            location: "Pahrump, NV",
            comment: "I had a weekend to find a home to buy. I was from another state, didn't know anyone. I had very specific needs (golf course home, pool). There weren't any homes on the course at that time, but she actually found TWO homes that fit my needs - neither were active listings! She approached the owner of the home and they sold! Happy. The entire transaction was handled with professionally and we closed earlier than contracted!. Marci also found my second home (income property) and I could not be happier. Highly recommend as a buying or listing agent."
        },
        {
            id: 2,
            name: "Brent R.",
            location: "Bellevue, WA",
            comment: "Marci is by far the most professional realtor I have ever worked with. I have purchased about 15 homes in all and have had many different realtors involved in the transactions. Mostly good experiences but none compare to the professionalism that was given by Marci. Responsive and offered great advice."
        },
        {
            id: 3,
            name: "Teresa L.",
            location: "Redondo Beach, CA",
            comment: "Professional, friendly and knows her profession well. Pahrump is lucky to have her 30+ years of experience. I highly recommend Marci and Lauren. Best of luck with your new endeavor."
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <AnimatedSection delay={0.1}>
                    <div className="testimonials-header">
                        <h2 className="font-serif tracking-tight text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-3 xs:mb-5 px-2 xs:px-0" style={{ fontWeight: 400 }}>
                            Client Testimonials
                        </h2>
                        <div className="flex justify-center mb-4 xs:mb-6">
                            <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
                        </div>
                        <p className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg leading-relaxed px-4 xs:px-2 sm:px-0" style={{ fontWeight: 400 }}>
                            Real experiences from real people who found their perfect home with us
                        </p>
                    </div>
                </AnimatedSection>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection key={testimonial.id} delay={0.3 + index * 0.2}>
                            <TestimonialCard testimonial={testimonial} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial }) => {
    const textRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (textRef.current) {
                const isOverflow = textRef.current.scrollHeight > textRef.current.clientHeight;
                setIsOverflowing(isOverflow);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [testimonial.comment]);

    return (
        <div
            className={`testimonial-bubble ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                }
            }}
            tabIndex={0}
            role="button"
            aria-expanded={isExpanded}
        >
            <div className="bubble-content">
                <div className="quote-mark">"</div>
                <div className={`testimonial-text-wrapper ${isOverflowing ? 'has-overflow' : ''}`}>
                    <p ref={textRef} className="testimonial-text">{testimonial.comment}</p>
                    <div className="read-more-indicator" style={{ visibility: isOverflowing ? 'visible' : 'hidden' }}>
                        <span>Read more</span>
                        <svg className="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="testimonial-author">
                    <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span className="location">{testimonial.location}</span>
                    </div>
                </div>
            </div>
            <div className="bubble-tail"></div>
        </div>
    );
};

export default Testimonials;
