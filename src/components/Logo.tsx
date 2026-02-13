import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
    // Ensure the logo path is relative to the deployed base URL
    const logoFile = variant === 'dark' ? 'logo.svg' : 'logo-light.svg';
    const logoSrc = `${import.meta.env.BASE_URL}${logoFile}`;

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
