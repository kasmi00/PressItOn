import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && showMobileMenu) {
                setShowMobileMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMobileMenu]);

    return (
        <div className="App">
            <div className="navbar">
                <div className="navbar-logo">Press It On</div>
                <div className={`navbar-links ${showMobileMenu ? 'show' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/Account">Account</a>
                    {/* <a href="/sign-up">
            <button>Sign-Up</button>
          </a>
          <a href="/log-in">
            <button>Sign-In</button>
          </a> */}
                </div>
                <div className="navbar-toggle" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;