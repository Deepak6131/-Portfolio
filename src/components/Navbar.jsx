import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1️⃣ Change navbar style when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2️⃣ Detect which section is currently visible
      const sections = [
        'home',
        'about',
        'skills',
        'education',
        'certification',
        'projects',
        'contact',
      ];

      const scrollPosition = window.scrollY + 150; // offset for smooth highlight
      let currentActiveSection = 'home';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentActiveSection = section;
            break;
          }
        }
      }

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certification', href: '#certification' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Deepak<span>.Portfolio</span>
        </a>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="navbar-item">
              <a
                href={link.href}
                className={`navbar-link ${
                  activeSection === link.href.split('#')[1] ? 'active' : ''
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
