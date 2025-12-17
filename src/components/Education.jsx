import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: "Post Graduation (MCA)",
            institution: "VGU Jaipur",
            year: "Pursuing (2024–2026)",
            score: "-"
        },
        {
            degree: "Graduation (BCA)",
            institution: "Magadh University, Bodhgaya",
            year: "2019–2023",
            score: "75.0%"
        },
        {
            degree: "Intermediate",
            institution: "GOVT H/S Kauakol, Nawadah (BSEB)",
            year: "2017–2019",
            score: "69.0%"
        },
        {
            degree: "Matriculation",
            institution: "High School Kauakol, Nawadah (BSEB)",
            year: "2016–2017",
            score: "67.0%"
        }
    ];

    const certifications = [
        "Introduction to Data Analytics",
        "SQL for Data Science / Advanced SQL",
        "Data Cleaning & Manipulation in Python",
        "Data Visualization with Tableau / Power BI"
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Academic Journey <span role="img" aria-label="grad-cap">🎓</span>
                </motion.h2>
                <p className="section-desc">A strong academic foundation built with consistent performance.</p>

                <div className="timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-degree">{item.degree}</h3>
                                <div className="timeline-institution">{item.institution}</div>
                                <div className="timeline-meta">
                                    <span>{item.year}</span>
                                    <span>{item.score !== '-' ? `Score: ${item.score}` : 'Pursuing'}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="certifications-container">
                    <h3 className="section-title" style={{ fontSize: '2rem' }}>Key Certifications 🏅</h3>
                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="cert-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {cert}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
