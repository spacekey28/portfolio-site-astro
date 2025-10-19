import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
    const fillColor = variant === 'light' ? '#FFFFFF' : '#2C405A';

    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Peter Son Logo"
        >
            {/* P letter shape based on peteson.me design */}
            <path
                d="M6 4h12c2.2 0 4 1.8 4 4v4c0 1.1-.4 2.1-1.1 2.8L18 16l2.9 1.2c.7.7 1.1 1.7 1.1 2.8v4c0 2.2-1.8 4-4 4H6V4zm2 2v20h10c1.1 0 2-.9 2-2v-4c0-.3-.1-.5-.2-.7L15.4 16l4.4-3.3c.1-.2.2-.4.2-.7V6c0-1.1-.9-2-2-2H8z"
                fill={fillColor}
            />
            <rect x="8" y="6" width="8" height="2" fill={fillColor} />
            <rect x="8" y="10" width="8" height="2" fill={fillColor} />
            <rect x="8" y="14" width="8" height="2" fill={fillColor} />
            <rect x="8" y="18" width="8" height="2" fill={fillColor} />
            <rect x="8" y="22" width="8" height="2" fill={fillColor} />
            <rect x="8" y="26" width="8" height="2" fill={fillColor} />
        </svg>
    );
};

export default Logo;