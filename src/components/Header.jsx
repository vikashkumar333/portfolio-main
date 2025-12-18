import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="header-content">
                <a href="#about" className="logo-container">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 38C20 38 35 30 35 20V5L20 2L5 5V20C5 30 20 38 20 38Z" fill="#6366f1" stroke="#4f46e5" strokeWidth="1" />
                        <polyline points="10 25, 17 18, 25 22, 30 15" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="30" cy="15" r="3" fill="#14b8a6" />
                    </svg>
                    <h1 className="gradient-text">VIKASH KUMAR</h1>
                </a>

                <nav className="nav-links">
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#education" className="nav-link">Education</a>
                    <a href="mailto:vikashkumar23054@gmail.com" className="cta-button">
                        Get In Touch
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
