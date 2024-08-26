import React, { useState, useEffect } from 'react';

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
          <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">home</a></li>
          <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">about me</a></li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio">portfolio</a></li>
        </ul>
      </nav>
      <div className="logo">js</div>
    </header>
  );
};

export default Header;