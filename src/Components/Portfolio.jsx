import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'project1.png', liveDemo: '#', sourceCode: '#' },
    { title: 'Project 2', image: 'project2.png', liveDemo: '#', sourceCode: '#' },
    // Add more projects
  ];

  return (
    <section id="portfolio" className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.liveDemo}>Live Demo</a>
          <a href={project.sourceCode}>Source Code</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;