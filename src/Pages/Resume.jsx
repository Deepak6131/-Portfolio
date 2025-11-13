import React from 'react';
import { motion } from 'framer-motion';
import resumePDF from '../assets/Deepak (1).pdf';

const Resume = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} py-20`}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">My Resume</h1>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={resumePDF}
            download="Deepak_Kumar_Resume.pdf"
            className="btn"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
              <p className="mb-8">
                Aspiring Software Test Engineer seeking an entry-level role to leverage knowledge of test automation, scripting, and bug tracking to ensure seamless functionality of software products. Passionate about quality assurance and dedicated to identifying and resolving issues to enhance user experience.
              </p>

              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              <ul className="list-disc pl-5 mb-8">
                <li>Manual Testing: Functional, Regression, UAT</li>
                <li>Test Automation: Selenium WebDriver, Appium</li>
                <li>Programming: Core Java, JavaScript</li>
                <li>Database: SQL, MySQL</li>
                <li>Methodologies: Agile, Scrum</li>
                <li>Tools: JIRA, Git, Postman, JMeter</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Software Test Engineer Intern</h3>
                <p className="mb-2">Tech Solutions Inc. | Jan 2022 - Jun 2022</p>
                <ul className="list-disc pl-5">
                  <li>Assisted in developing test cases for web applications</li>
                  <li>Participated in regression testing for new feature releases</li>
                  <li>Documented and tracked bugs using JIRA</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Bachelor of Technology in Computer Science</h3>
                <p>XYZ University | 2018 - 2022</p>
              </div>

              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              <div>
                <h3 className="text-xl font-semibold mb-2">Manual Testing Fundamentals</h3>
                <p className="mb-4">TechSkills Academy | March 2022</p>
                
                <h3 className="text-xl font-semibold mb-2">Automation Testing with Selenium</h3>
                <p className="mb-4">QA Institute | June 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;