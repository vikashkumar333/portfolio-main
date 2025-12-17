import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Customer Churn Analysis and Prediction",
            tags: ["Python", "Logistic Regression"],
            desc: [
                "Developed a Logistic Regression model achieving 80% accuracy for customer churn prediction.",
                "Identified key churn factors to support targeted retention strategies."
            ],
            color: "#ec4899"
        },
        {
            title: "Sales Performance & Trend Dashboard",
            tags: ["Tableau / Power BI", "SQL / CSV Data"],
            desc: [
                "Built interactive dashboards reducing manual reporting time by 50%.",
                "Connected live data sources to track Sales KPIs and long-term business trends."
            ],
            color: "#eab308"
        },
        {
            title: "COVID-19 Global Data Analysis",
            tags: ["Python (Pandas)", "Data Cleaning"],
            desc: [
                "Performed extensive Data Cleaning and analysis on global COVID-19 data using Pandas.",
                "Designed meaningful visualizations on infection trends, recovery rates, and mortality analysis."
            ],
            color: "#06b6d4"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    Quantified Project Impact <span role="img" aria-label="rocket">🚀</span>
                </motion.h2>
                <p className="section-desc">Showcasing data-driven results and technologies used.</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{ borderLeft: `6px solid ${project.color}` }}
                        >
                            <div className="card-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="tags-container">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="tag"
                                            style={{ backgroundColor: project.color, color: '#000' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-details">
                                <ul className="project-list">
                                    {project.desc.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
