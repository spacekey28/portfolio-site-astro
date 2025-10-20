import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
    return (
        <img
            src="/images/peteson-logo.png"
            alt="Peter Son Logo"
            className={className}
            width="80"
            height="54"
        />
    );
};

export default Logo;