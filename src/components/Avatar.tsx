import React from 'react';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src = '/images/corgi.jpg',
    alt = 'Peter Son Avatar',
    size = 'lg',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-20 h-20',
        lg: 'w-24 h-24',
        xl: 'w-32 h-32'
    };

    return (
        <div className={`${sizeClasses[size]} ${className}`}>
            <div className="w-full h-full rounded-full bg-sky p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Avatar;