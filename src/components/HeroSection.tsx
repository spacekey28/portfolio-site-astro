import React from 'react';

interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
    return (
        <section className={`text-center py-12 sm:py-14 lg:py-16 ${className}`}>
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h1 className="text-5xl font-bold text-navy mb-6">
                    Peter Son
                </h1>
                <p className="text-xl text-navy mb-12 font-normal">
                    Front-end Web Developer & Mobile App Lover
                </p>
                <a
                    href="/work"
                    className="btn btn-primary btn-lg uppercase tracking-wide"
                >
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default HeroSection;