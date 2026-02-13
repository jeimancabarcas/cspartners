import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
    const logoSrc = variant === 'dark' ? '/logo.svg' : '/logo-light.svg';

    return (
        <img
            src={logoSrc}
            alt="C&S Partners Logo"
            className={`h-10 w-auto ${className}`}
            style={{ display: 'block' }}
        />
    );
};

export default Logo;
