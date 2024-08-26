import React from 'react';
import '../Styles/about.css';

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
    'Python'
  ];

  const exposedSkills = [
    'Node.js',
    'Java',
    'TensorFlow',
  ];

  return (
    <section id="about" className="about">
      {/* About Me Terminal-style description */}
      <div className="terminal">
      <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <p><span className="user">taahirah</span> $ cat about/taahirah</p>
        <p>Hello! I'm Taahirah. I'm a software developer with a passion for AI and web development. I studied Computer Science and have worked on various exciting projects. Let's connect!</p>
      </div>

      {/* Skills/Tools Terminal */}
      <div className="terminal">
      <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
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
      <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
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