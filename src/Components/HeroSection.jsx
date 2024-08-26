import React from 'react';
import profilePic from '../assets/path-to-your-image.jpg'; // Update with the correct path to your profile image

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hi, I'm Taahirah <span role="img" aria-label="wave">👋</span></h1>
        <p>I'm a Full Stack Developer.</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          {/* Add more social links as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Hero;