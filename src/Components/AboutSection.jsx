import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="terminal">
        <p>taahirah $ cat about/taahirah</p>
        <p>Hello! I'm Taahirah. I'm a software developer with a passion for AI and web development. I studied Computer Science and have worked on various exciting projects. Let's connect!</p>
      </div>
      <div className="skills">
        <p>taahirah $ cd skills/tools</p>
        <p>taahirah $ ls</p>
        <ul>
          <li>Proficient With: JavaScript, React, HTML5, CSS3</li>
          <li>Exposed To: Node.js, Python</li>
        </ul>
      </div>
    </section>
  );
};

export default About;