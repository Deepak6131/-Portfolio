import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of science in Computer Science',
      institution: 'Theni Kammavar Sangam College of Arts and science',
      location: 'Theni, Tamilnadu',
      period: '2021 - 2024',
      description: 'Graduated with First Class Honors. Relevant coursework included Software Testing, '
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Nadar Saraswathi Higher Secondary School',
      location: 'Theni,Tamilnadu',
      period: '2020 - 2021'
  
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="timeline">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-period">{item.location} | {item.period}</p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;