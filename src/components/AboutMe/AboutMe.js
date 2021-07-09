import React from 'react';
import image from '../../images/me.png';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faBootstrap,
  faReact,
  faGitSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div id='about' className='about-container py-5'>
      <div className='row'>
        <div className='image-wrap mb-5 col-lg-6 col-mx-12'>
          <img className='profile-img' src={image} alt='Geza Perlaki' />
        </div>
        <div className='col-lg-6 col-mx-12'>
          <h2 className='about-h2'>about me</h2>
          <p className='about-p'>
            Hello! I am Geza Perlaki Front-End Web Developer.
          </p>
        </div>
      </div>
      <div className='row'>
        <h2 className='about-h2'>Professional skills</h2>
        <div className='skills-container'>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faHtml5} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faCss3Alt} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faBootstrap} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faJs} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faReact} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faPython} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faGitSquare} />
          </div>
          <div class='skills-item'>
            <FontAwesomeIcon size='5x' icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
