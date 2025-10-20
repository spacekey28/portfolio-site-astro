import React from 'react';
import Avatar from './Avatar';
import TypingText from './TypingText';

interface AboutSectionProps {
    className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
    return (
        <section className={`py-12 sm:py-14 lg:py-16 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
                    {/* Avatar */}
                    <div className="flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end">
                        <Avatar size="xxl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-0 mr-3 float-left display-inline-block">
                            Hi
                        </h2>

                        <div className="text-lg text-navy leading-relaxed space-y-6 mb-12">
                            <p>
                                <TypingText
                                    text="I'm Peter. Front-end web developer based in Auckland, New Zealand. While not coding, I love playing basketball and watching movies."
                                    speed={30}
                                    delay={500}
                                />
                            </p>

                            <p>
                                This site was built with <strong>Astro, React, TypeScript, Tailwind CSS</strong> and <strong>Netlify</strong>.
                            </p>

                            <p>
                                My current languages/toolsets are <strong>HTML, CSS, SASS, JavaScript, TypeScript, Next.js, React, Astro, Tailwind CSS, Bootstrap CSS, Handlebars, Keystone, MongoDB, Grunt, Gulp, Node.js, Git, Vite, and modern web development tools</strong>.
                            </p>
                        </div>

                        <div className="text-center lg:text-left">
                            <p className="text-xl sm:text-2xl text-navy mb-8 font-medium">
                                Interested in working together?
                            </p>
                            <a
                                href="/contact"
                                className="btn btn-secondary btn-lg uppercase tracking-wide"
                            >
                                Let's do this
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;