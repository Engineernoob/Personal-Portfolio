import React from 'react';
import '../styles/About.css';

const About = () => {
  const proficientSkills = [
    'JavaScript',
    'React',
    'Git',
    'GitHub',
    'Bootstrap',
    'HTML5',
    'CSS3',
    'Figma',
  ];

  const exposedSkills = [
    'Node.js',
    'Python',
    'Adobe Illustrator',
  ];

  return (
    <section id="about" className="about">
      {/* About Me Terminal-style description */}
      <div className="terminal">
        <p><span className="user">taahirah</span> $ cat about/taahirah</p>
        <p>Hello! I'm Taahirah. I'm a software developer with a passion for AI and web development. I studied Computer Science and have worked on various exciting projects. Let's connect!</p>
      </div>

      {/* Skills/Tools Terminal */}
      <div className="terminal">
        <p><span className="user">taahirah</span> $ cd skills/tools</p>
        <p><span className="user">taahirah</span> $ ls</p>
        <div className="skills-grid">
          <p className="skills-category">Proficient With</p>
          <div className="skills-list">
            {proficientSkills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
          <p className="skills-category">Exposed To</p>
          <div className="skills-list">
            {exposedSkills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies/Interests Terminal */}
      <div className="terminal">
        <p><span className="user">taahirah</span> $ cd hobbies/interests</p>
        <p><span className="user">taahirah</span> $ ls</p>
        <div className="interests">
          <ul>
            <li>📚 Reading</li>
            <li>🎭 Anime</li>
            <li>👩🏽‍💻 Coding</li>
            <li>🍳 Cooking</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;