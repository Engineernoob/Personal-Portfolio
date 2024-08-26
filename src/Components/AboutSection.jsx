import React from 'react';

const About = () => {
  // Define the skills and tools you want to showcase
  const skills = [
    { name: 'JavaScript', icon: 'path-to-js-icon.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: 'path-to-react-icon.png', link: 'https://reactjs.org/' },
    { name: 'HTML5', icon: 'path-to-html5-icon.png', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS3', icon: 'path-to-css3-icon.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Git', icon: 'path-to-git-icon.png', link: 'https://git-scm.com/' },
    { name: 'GitHub', icon: 'path-to-github-icon.png', link: 'https://github.com/' },
    { name: 'Node.js', icon: 'path-to-nodejs-icon.png', link: 'https://nodejs.org/' },
    { name: 'Python', icon: 'path-to-python-icon.png', link: 'https://www.python.org/' },
  ];

  return (
    <section id="about" className="about">
      {/* Terminal-style description */}
      <div className="terminal">
        <p><span className="user">taahirah</span> $ cat about/taahirah</p>
        <p>Hello! I'm Taahirah. I'm a software developer with a passion for AI and web development. I studied Computer Science and have worked on various exciting projects. Let's connect!</p>
      </div>

      {/* Skills grid */}
      <div className="skills-grid">
        <p><span className="user">taahirah</span> $ cd skills/tools</p>
        <p><span className="user">taahirah</span> $ ls</p>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interests section (optional) */}
      <div className="interests">
        <p><span className="user">taahirah</span> $ cd hobbies/interests</p>
        <p><span className="user">taahirah</span> $ ls</p>
        <ul>
          <li>📚 Reading</li>
          <li>🎭 Anime</li>
          <li>👩🏽‍💻 Coding</li>
          <li>🍳 Cooking</li>
        </ul>
      </div>
    </section>
  );
};

export default About;