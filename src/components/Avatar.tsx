import React from 'react';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src = '/images/peterson-avatar.png',
    alt = 'Peter Son Avatar',
    size = 'lg',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24',
        lg: 'w-32 h-32',
        xl: 'w-40 h-40',
        xxl: 'w-48 h-48'
    };

    // Apply fetchpriority="high" and remove lazy loading for peterson-avatar.png
    // This is a critical above-the-fold image that should load immediately
    const isDefaultAvatar = src === '/images/peterson-avatar.png';

    return (
        <div className={`${sizeClasses[size]} ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                {...(isDefaultAvatar ? { fetchPriority: 'high' as const } : { loading: 'lazy' })}
            />
        </div>
    );
};

export default Avatar;