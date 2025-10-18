import React from 'react';
import Avatar from './Avatar';

interface AboutSectionProps {
    className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
    return (
        <section className={`py-16 sm:py-24 lg:py-32 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                    {/* Avatar */}
                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                        <Avatar size="xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
                            Hi
                        </h2>

                        <div className="space-y-6 text-lg sm:text-xl text-navy leading-relaxed">
                            <p>
                                I'm Peter. Front-end web developer based in Auckland, New Zealand.
                                While not coding, I love playing basketball and watching movies.
                            </p>

                            <p>
                                This site was built with <strong>Astro, React, TypeScript, Tailwind CSS</strong> and <strong>Netlify</strong>.
                            </p>

                            <p>
                                My current languages/toolsets are <strong>HTML, CSS, SASS, JavaScript, TypeScript, Next.js, React, Astro, Tailwind CSS, Bootstrap CSS, Handlebars, Keystone, MongoDB, Grunt, Gulp, Node.js, Git, Vite, and modern web development tools</strong>.
                            </p>
                        </div>

                        <div className="mt-12">
                            <p className="text-xl sm:text-2xl text-navy mb-8 font-medium">
                                Interested in working together?
                            </p>
                            <a
                                href="/contact"
                                className="btn btn-secondary btn-lg"
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
