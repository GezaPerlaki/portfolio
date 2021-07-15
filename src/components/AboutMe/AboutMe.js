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
    <div id='about' className='container about-container py-5'>
      <div className='row'>
        <div className='image-container mb-5 col-lg-6 col-mx-12'>
          <img className='profile-img' src={image} alt='Geza Perlaki' />
        </div>
        <div className='col-lg-6 col-mx-12'>
          <h2 className='about-h2'>about me</h2>
          <p className='about-p text-center'>
            Hello! I am Geza Perlaki Front-End Web Developer.
          </p>
        </div>
      </div>
      <div className='row'>
        <h2 className='about-h2'>Professional skills </h2>
        <div className='skills-items-container'>
          <div className='skill-item'>
            <dfn title='HTML 5'>
              <FontAwesomeIcon size='5x' icon={faHtml5} />
            </dfn>
          </div>
          <dfn title='CSS 3'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faCss3Alt} />
            </div>
          </dfn>
          <dfn title='Bootstrap 5'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faBootstrap} />
            </div>
          </dfn>
          <dfn title='JavaScript'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faJs} />
            </div>
          </dfn>
          <dfn title='React'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faReact} />
            </div>
          </dfn>
          <dfn title='Python'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faPython} />
            </div>
          </dfn>
          <dfn title='git'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faGitSquare} />
            </div>
          </dfn>
          <dfn title='GitHub'>
            <div className='skill-item '>
              <FontAwesomeIcon size='5x' icon={faGithub} />
            </div>
          </dfn>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
