
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
    // Edit this array to change testimonials
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            location: "Downtown Seattle",
            comment: "Amazing service! They helped us find our dream home in just two weeks. The team was professional and really understood what we were looking for."
        },
        {
            id: 2,
            name: "Michael Chen",
            location: "Bellevue, WA",
            comment: "Outstanding experience from start to finish. The market knowledge and negotiation skills saved us thousands. Highly recommend!"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            location: "Capitol Hill",
            comment: "First-time home buyer here, and they made the process so smooth. Always available to answer questions and guide us through every step."
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <AnimatedSection delay={0.1}>
                    <div className="testimonials-header">
                        <h2>What Our Clients Say</h2>
                        <p>Real experiences from real people who found their perfect home with us</p>
                    </div>
                </AnimatedSection>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection key={testimonial.id} delay={0.3 + index * 0.2}>
                            <div className="testimonial-bubble">
                                <div className="bubble-content">
                                    <div className="quote-mark">"</div>
                                    <p className="testimonial-text">{testimonial.comment}</p>
                                    <div className="testimonial-author">
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <span className="location">{testimonial.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bubble-tail"></div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;