import React from 'react';
import '../Styles/about.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: 'src/assets/Images/Js-logo.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: 'src/assets/Images/React logo.png', link: 'https://reactjs.org/' },
    { name: 'HTML5', icon: 'src/assets/Images/HTML5 logo and wordmark.png', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS3', icon: 'src/assets/Images/CSS3 Logo Blue.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Git', icon: 'src/assets/Images/Git Logo 2Color.png', link: 'https://git-scm.com/' },
    { name: 'GitHub', icon: 'src/assets/Images/Github logo monochrome.png', link: 'https://github.com/' },
    { name: 'Node.js', icon: 'src/assets/Images/Node.js logo.png', link: 'https://nodejs.org/' },
    { name: 'Python', icon: 'src/assets/Images/Python logo thumbnail.png', link: 'https://www.python.org/' },
  ];

  return (
    <section id="about" className="about">
      <div className="terminal">
        <p><span className="user">taahirah</span> $about/taahirah</p>
        <p>Hello! I'm Taahirah. I'm a software developer with a passion for AI and web development. I studied Computer Science and have worked on various exciting projects. Let's connect!</p>
      </div>

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