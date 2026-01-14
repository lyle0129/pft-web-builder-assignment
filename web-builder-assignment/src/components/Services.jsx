import { Building2, Home, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

function Services() {
    const services = [
        {
            icon: Building2,
            title: 'Commercial & Residential',
            description: 'Large or small, condo or mansion, we can find it and get at the price that\'s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.'
        },
        {
            icon: Home,
            title: 'Real Estate Done Right',
            description: 'Nervous about your property adventure? Don\'t be. Whether you\'re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!'
        },
        {
            icon: TrendingUp,
            title: 'Rely on Expertise',
            description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.'
        }
    ];

    return (
        <section
            className="py-16 sm:py-20 lg:py-28"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
                <AnimatedSection delay={0.1}>
                    <div className="text-center mb-10 xs:mb-14 sm:mb-16 lg:mb-20">
                        <h2
                            id="services-heading"
                            className="font-serif font-semibold tracking-tight text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-3 xs:mb-5 px-2 xs:px-0"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Our Services
                        </h2>

                        <div className="flex justify-center mb-4 xs:mb-6">
                            <span className="w-14 h-px" style={{ backgroundColor: 'var(--color-muted-gold)' }} />
                        </div>

                        <p
                            className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg leading-relaxed font-light px-4 xs:px-2 sm:px-0"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            Comprehensive real estate solutions tailored to your needs
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 lg:gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection key={index} delay={0.3 + index * 0.2}>
                                <div
                                    className="p-6 xs:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
                                    style={{
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        border: '1px solid var(--color-border)'
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                                        style={{ backgroundColor: 'var(--color-muted-gold)' }}
                                    >
                                        <Icon
                                            size={32}
                                            style={{ color: 'var(--color-bg-primary)' }}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <h3
                                        className="font-serif text-xl xs:text-2xl font-medium text-center mb-4"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="text-center text-sm xs:text-base leading-relaxed font-light flex-grow"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
