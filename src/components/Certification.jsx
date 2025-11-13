import React from 'react';
import { motion } from 'framer-motion';

const Certification = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Manual Testing Fundamentals',
      issuer: 'Greens Technologies',
      date: 'Jan-2025',
      description: 'Comprehensive course covering test planning, test case design, defect tracking,STLC,SDLC and various testing methodologies.',
      icon: '📋'
    },
    {
      title: 'Automation Testing with Selenium',
      issuer: 'QA Institute',
      date: 'Jan-2025',
      description: 'Advanced training in Selenium WebDriver, test automation frameworks, and continuous integration for automated testing.',
      icon: '🤖'
    },
    {
      title: 'Agile Testing Certification',
      issuer: 'Scrum Alliance',
      date: 'jan-2025',
      description: 'Certification covering Agile testing principles, practices, and integration of testing in Agile development environments.',
      icon: '🔄'
    },
    
      
  ];

  return (
    <section id="certification" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="certification-icon">{cert.icon}</div>
              <h3 className="certification-title">{cert.title}</h3>
              <h4 className="certification-issuer">{cert.issuer}</h4>
              <p className="certification-date">{cert.date}</p>
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;