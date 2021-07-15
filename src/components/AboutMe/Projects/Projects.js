import React from 'react';
import './Projects.css';
import ProjectsCarousel from './ProjectsCarousel';

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <div className='container'>
        <h2>projects</h2>
      </div>
      <ProjectsCarousel />
    </div>
  );
};

export default Projects;
