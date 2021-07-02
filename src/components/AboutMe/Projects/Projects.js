import React from 'react';
import BookSearch from '../../../images/BookSearch.png';
import cityGuide from '../../../images/city-guide-app.png';
import projects from '../../../images/projects.png';
import taskManager from '../../../images/task-manager.png';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './Projects.css';

const Projects = () => {
  const openPopupBoxBookSearch = () => {
    const content = (
      <>
        <img
          className='projects-image-popupbox'
          src={BookSearch}
          alt='Book-Search Project...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://gezaperlaki.github.io/book-search/')
          }
        >
          https://gezaperlaki.github.io/book-search/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigBookSearch = {
    titleBar: {
      enable: true,
      text: 'Book-Search project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <div className='projects-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>projects</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='projects-image-box' onClick={openPopupBoxBookSearch}>
            <img
              className='projects-image'
              src={BookSearch}
              alt='BookSearch Clone Project...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigBookSearch} />
    </div>
  );
};

export default Projects;
