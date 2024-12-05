import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoImage from '../img/test.jpeg';

const MaterialNavbar = () => {
    const menuItems = [
        { label: 'Servizi', href: '#servizi' },
        { label: 'Eventi', href: '#eventi' },
        { label: 'Enoteca', href: '#enoteca' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Social Icons */}
                <div className="flex items-center space-x-3">
                    <FacebookIcon
                        className="text-gray-600 hover:text-blue-600 w-6 h-6 cursor-pointer"
                        fontSize="medium"
                    />
                    <TwitterIcon
                        className="text-gray-600 hover:text-blue-400 w-6 h-6 cursor-pointer"
                        fontSize="medium"
                    />
                </div>

                {/* Central Menu */}
                <div className="flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Logo */}
                <div className="max-h-full flex items-center">
                    <img
                        src={logoImage}
                        alt="Logo"
                        className="max-h-10 max-w-full object-contain"
                    />
                </div>
            </div>
        </nav>
    );
};

export default MaterialNavbar;