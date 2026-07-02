import React from 'react';
import Avatar from './Avatar';
import TypingText from './TypingText';

interface AboutSectionProps {
    className?: string;
}

const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'shadcn/ui',
    'CSS',
    'HTML',
    'Supabase',
    'Sanity',
    'Node.js',
    'REST APIs',
    'Git',
    'GitHub Actions',
    'Vitest',
] as const;

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
    return (
        <section className={`py-12 sm:py-14 lg:py-16 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
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
                                    text="I'm Peter, a Frontend Developer based in Auckland, New Zealand.
                                        I build modern web applications with React, Next.js, TypeScript, Tailwind CSS, Sanity, and Supabase. I enjoy solving real-world problems through thoughtful design, clean code, and practical product development.
                                        Outside of work, I enjoy playing basketball, watching movies, and learning new technologies."
                                    speed={30}
                                    delay={500}
                                />
                            </p>
                            <p>
                                This portfolio is built with <strong>Astro, TypeScript, Tailwind CSS</strong>, and deployed on <strong>Netlify</strong>.                            
                            </p>
                            <div className="space-y-4">
                                <p className="font-medium text-navy">What I work with</p>
                                <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
                                    {techStack.map((item) => (
                                        <li key={item}>
                                            <span className="inline-block rounded-full bg-sky/10 px-2 py-1 text-xs text-sky">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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