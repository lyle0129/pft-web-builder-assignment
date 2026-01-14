
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
                        <h2>Client testimonials</h2>
                        <div className="flex justify-center mb-4 xs:mb-6">
                            <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
                        </div>
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