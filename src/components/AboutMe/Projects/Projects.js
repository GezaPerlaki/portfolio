import React from 'react';
import './Projects.css';
import ProjectsCarousel from './ProjectsCarousel';

const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <div className='container'>
        <h2 className='text-uppercase text-center py-5'>projects</h2>
      </div>

      <ProjectsCarousel />
    </div>
  );
};

export default Projects;
