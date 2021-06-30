import React from 'react';
import image from '../../images/me.png';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-mx-12'>
          <div className='image-wrap mb-5'>
            <img
              className='profile-img'
              src={image}
              alt='Geza Perlaki picture'
            />
          </div>
        </div>
        <div className='col-lg-6 col-mx-12'>
          <h1>about me</h1>
          <p>Hello! I am Geza Perlaki Front-End Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
