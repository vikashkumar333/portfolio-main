import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            skills: ["Python", "Pandas, NumPy", "Scikit-learn"],
            color: "#ec4899"
        },
        {
            title: "Data Visualization",
            skills: ["Tableau", "Power BI", "Matplotlib, Seaborn"],
            color: "#eab308"
        },
        {
            title: "Databases & Tools",
            skills: ["MySQL (SQL)", "MS Excel (Advanced)", "Google Colab, Jupyter"],
            color: "#22c55e"
        },
        {
            title: "Core Concepts",
            skills: ["Exploratory Data Analysis (EDA)", "Statistical Analysis", "Data Cleaning, Modeling"],
            color: "#06b6d4"
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Expertise <span role="img" aria-label="tools">🛠️</span>
                </motion.h2>
                <p className="section-desc">Skills categorized for quick recruiter review and clarity.</p>

                <div className="skills-grid">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="skill-category-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ borderTop: `4px solid ${cat.color}` }}
                        >
                            <h3 className="skill-title" style={{ borderColor: cat.color }}>
                                {cat.title}
                            </h3>
                            <ul className="skill-list">
                                {cat.skills.map((skill, idx) => (
                                    <li key={idx} className="skill-item">
                                        <span className="skill-dot" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
