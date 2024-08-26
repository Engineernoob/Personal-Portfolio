import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'path-to-project1-image.png', liveDemo: '#', sourceCode: '#' },
    { title: 'Project 2', image: 'path-to-project2-image.png', liveDemo: '#', sourceCode: '#' },
    // Add other projects here...
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