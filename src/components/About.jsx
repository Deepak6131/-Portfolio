import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6">
              Aspiring Software Test Engineer seeking an entry-level role to leverage knowledge of test automation, scripting, and bug tracking to ensure seamless functionality of software products.
            </p>
            <p className="mb-6">
              I am passionate about quality assurance and dedicated to identifying and resolving issues to enhance user experience. With a strong foundation in manual and automated testing methodologies, I am eager to contribute to a dynamic development team.
            </p>
            <p>
              My goal is to continuously expand my skills in test automation frameworks and stay updated with the latest testing tools and technologies to deliver high-quality software solutions.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-item">
              <h3 className="info-title">Name</h3>
              <p>Deepak S</p>
            </div>
            <div className="info-item">
              <h3 className="info-title">Email</h3>
              <p>itsdeepak510@gmail.com</p>
            </div>
            <div className="info-item">
              <h3 className="info-title">Phone</h3>
              <p>+91 8825887508</p>
            </div>
            <div className="info-item">
              <h3 className="info-title">Location</h3>
              <p>Chennai, Tamilnadu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;