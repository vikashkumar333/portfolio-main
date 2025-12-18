import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaRocket, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-grid">

                {/* Soft Skills */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3>Soft Skills & Languages</h3>
                    <div className="soft-skills">
                        {["Problem Solving", "Strategic Thinking", "Team Work", "Communication", "Hindi (Native)", "English (Professional)"].map((skill, idx) => (
                            <span key={idx} className="soft-skill-tag">{skill}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3>Contact Information</h3>
                    <div className="contact-links">
                        <p><FaPhone /> <a href="tel:+918935824333">+91 8935824333</a></p>
                        <p><FaEnvelope /> <a href="mailto:vikashkumar23054@gmail.com">vikashkumar23054@gmail.com</a></p>
                        <p className="note" style={{ fontSize: '0.85rem', marginTop: '15px', color: '#64748b' }}>
                            Always open for freelance, collaborations, and full-time roles.
                        </p>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3>Quick Links</h3>
                    <div className="quick-links">
                        <a href="https://www.linkedin.com/in/vikashkumar333" target="_blank" rel="noreferrer" className="quick-link">
                            <FaLinkedin /> LinkedIn Profile
                        </a>
                        <a href="https://github.com/vikashkumar333" target="_blank" rel="noreferrer" className="quick-link">
                            <FaGithub /> GitHub Profile
                        </a>
                        <a href="#projects" className="quick-link">
                            <FaRocket /> View All Projects
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="footer-bottom">
                &copy; 2024 – 2025 <span className="footer-accent">VIKASH KUMAR</span> | Data Analyst Portfolio
            </div>
        </footer>
    );
};

export default Footer;
