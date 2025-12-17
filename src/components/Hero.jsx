import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload, FaRocket, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Hero.css';
import assect from '../assets/Vikash_Resume.pdf'

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="hero-container">    
                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-subtitle">Data Analyst Portfolio</span>
                    <h2 className="hero-title">
                        Driving Insights, <br />
                        <span className="gradient-text">Delivering Success.</span>
                    </h2>
                    <p className="hero-description">
                        Seeking a challenging and responsible position in a reputable organization to utilize my comprehensive training and abilities in Data Analytics. I aim to expand my learning and skills while making a significant, data-driven contribution.
                    </p>

                    <div className="link-box-container">
                        <a href={assect} download className="hero-btn primary">
                            <FaDownload /> Resume
                        </a>
                        <a href="https://www.linkedin.com/in/vikashkumar333" target="_blank" rel="noreferrer" className="hero-btn">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://github.com/vikashkumar333" target="_blank" rel="noreferrer" className="hero-btn">
                            <FaGithub /> GitHub
                        </a>
                        <a href="#projects" className="hero-btn">
                            <FaRocket /> Projects
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="contact-summary glass-card">
                        <h3 className="summary-title">Quick Connect</h3>
                        <div className="summary-content">
                            <div className="summary-item">
                                <FaPhone color="#14b8a6" /> +91 8836824333
                            </div>
                            <div className="summary-item">
                                <FaEnvelope color="#14b8a6" /> <a href="mailto:vikashkumar23054@gmail.com" className="contact-link">vikashkumar23054@gmail.com</a>
                            </div>
                            <div className="summary-item">
                                <FaGithub color="#14b8a6" /> github.com/vikashkumar333
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
