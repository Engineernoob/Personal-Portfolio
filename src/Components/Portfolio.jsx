import React from 'react';
import '/home/Engineernoob/Personal-Portfolio/src/portfolio.css';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: '../assets/project1.png', liveDemo: '#', sourceCode: '#' },
    { title: 'Project 2', image: '../assets/project2.png', liveDemo: '#', sourceCode: '#' },
    { title: 'Project 3', image: '../assets/project3.png', liveDemo: '#', sourceCode: '#' },
    { title: 'Project 4', image: '../assets/project4.png', liveDemo: '#', sourceCode: '#' },
    { title: 'Project 5', image: '../assets/project5.png', liveDemo: '#', sourceCode: '#' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;