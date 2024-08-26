import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const scrollY = window.scrollY;
        if (scrollY > top && scrollY <= bottom) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}><Link to="/">home</Link></li>
          <li className={activeSection === 'about' ? 'active' : ''}><Link to="/about">about me</Link></li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}><Link to="/portfolio">portfolio</Link></li>
        </ul>
      </nav>
      <div className="logo">td</div>
    </header>
  );
};

export default Header;