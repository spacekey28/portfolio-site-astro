import React, { useState, useEffect } from 'react';

interface TypingTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    showCursor?: boolean;
}

const TypingText: React.FC<TypingTextProps> = ({
    text,
    speed = 50,
    delay = 1000,
    className = '',
    showCursor = true
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        // Start typing after delay
        const startTimer = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!isTyping) return;

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed, isTyping]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && isTyping && currentIndex < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </span>
    );
};

export default TypingText;
