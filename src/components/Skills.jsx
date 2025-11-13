import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const [flippedCard, setFlippedCard] = useState(null);

  const skills = [
    { name: 'Manual Testing', level: 95, description: 'Experienced in functional, regression, and user acceptance testing.' },
    { name: 'Selenium', level: 80, description: 'Proficient in creating automated test scripts using Selenium WebDriver.' },
    { name: 'Core Java', level: 75, description: 'Strong foundation in Java programming for test automation.' },
    { name: 'SQL', level: 80, description: 'Skilled in writing SQL queries for database testing.' },
    { name: 'Agile', level: 85, description: 'Familiar with Agile methodologies and Scrum framework.' },
    { name: 'Git', level: 50, description: 'Experienced in version control using Git and GitHub.' },
  ];

  const handleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-card ${flippedCard === index ? 'flipped' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card-inner">
                {/* Front of card */}
                <div className="skill-card-front">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-level">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="skill-percentage">{skill.level}%</div>
                  <button
                    onClick={() => handleCardFlip(index)}
                    className="skill-flip-btn"
                  >
                    Learn More →
                  </button>
                </div>

                {/* Back of card */}
                <div className="skill-card-back">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <button
                    onClick={() => handleCardFlip(index)}
                    className="skill-flip-btn"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;