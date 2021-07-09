import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BookSearch from '../../../images/BookSearch.png';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const ProjectsCarousel = () => {
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
    <div className='container carousel-container'>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div className='my-carousel-item'>
          <div className='image-box-wrapper row justify-content-center'>
            <div
              className='projects-image-box'
              onClick={openPopupBoxBookSearch}
            >
              <img
                className='projects-image'
                src={BookSearch}
                alt='BookSearch Clone Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
          <p className='legend'>Project 1</p>
        </div>
        <div className='my-carousel-item'>
          <div className='image-box-wrapper row justify-content-center'>
            <div
              className='projects-image-box'
              onClick={openPopupBoxBookSearch}
            >
              <img
                className='projects-image'
                src={BookSearch}
                alt='BookSearch Clone Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
          <p className='legend'>Project 2</p>
        </div>
        <div className='my-carousel-item'>
          <div className='image-box-wrapper row justify-content-center'>
            <div
              className='projects-image-box'
              onClick={openPopupBoxBookSearch}
            >
              <img
                className='projects-image'
                src={BookSearch}
                alt='BookSearch Clone Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
          <p className='legend'>Project 3</p>
        </div>
      </Carousel>
      <PopupboxContainer {...popupboxConfigBookSearch} />
    </div>
  );
};
export default ProjectsCarousel;
