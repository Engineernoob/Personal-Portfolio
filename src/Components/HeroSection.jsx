import React from 'react';
import profilePic from './path-to-your-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={profilePic} alt="Profile" />
      <h1>Hi, I'm Taahirah <span role="img" aria-label="wave">👋</span></h1>
      <p>I'm a Software Developer.</p>
      <ul className="social-links">
        {/* Add social media icons with links */}
      </ul>
    </section>
  );
};

export default Hero;