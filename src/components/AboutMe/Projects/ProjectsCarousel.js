import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BookSearchBlackWhite from '../../../images/BookSearch-BlackWhite.png';
import BookSearch from '../../../images/BookSearch.png';
import Tetris from '../../../images/Tetris.png';
import TetrisBlackWhite from '../../../images/Tetris-BlackWhite.png';
import MoviesHub from '../../../images/Movies-Hub.png';
import MoviesHubBlackWhite from '../../../images/Movies-Hub-BlackWhite.png';
import MasterMind from '../../../images/MasterMind.png';
import MasterMindBlackWhite from '../../../images/MasterMind-BlackWhite.png';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const ProjectsCarousel = () => {
  const [popupboxConfig, setPopupboxConfig] = useState({
    titleBar: {
      enable: true,
      text: 'Book-Search project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  });
  //Book Search
  const openPopupBoxBookSearch = () => {
    setPopupboxConfig({
      titleBar: {
        enable: true,
        text: 'Book-Search project.*',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    });
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
      text: 'Book search project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Tetris
  const openPopupBoxTetris = () => {
    setPopupboxConfig({
      titleBar: {
        enable: true,
        text: 'Tetris game*',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    });
    const content = (
      <>
        <img
          className='projects-image-popupbox'
          src={Tetris}
          alt='Tetris game Project...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://gezaperlaki.github.io/kv-tetris/')
          }
        >
          https://gezaperlaki.github.io/kv-tetris/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTetris = {
    titleBar: {
      enable: true,
      text: 'Tetris game project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Movies-Hub
  const openPopupBoxMoviesHub = () => {
    setPopupboxConfig({
      titleBar: {
        enable: true,
        text: 'Movies-Hub*',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    });
    const content = (
      <>
        <img
          className='projects-image-popupbox'
          src={MoviesHub}
          alt='Movies-Hub...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://gezaperlaki.github.io/movies-hub/')
          }
        >
          https://gezaperlaki.github.io/movies-hub/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMoviesHub = {
    titleBar: {
      enable: true,
      text: 'Movies-Hub project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //MasterMind
  const openPopupBoxMasterMind = () => {
    const content = (
      <>
        <img
          className='projects-image-popupbox'
          src={MasterMind}
          alt='MasterMind...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://gezaperlaki.github.io/MasterMind/')
          }
        >
          https://gezaperlaki.github.io/MasterMind/
        </a>
      </>
    );
    PopupboxManager.open({ content });
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
                src={BookSearchBlackWhite}
                alt='BookSearch Clone Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
        </div>
        <div className='my-carousel-item'>
          <div className='image-box-wrapper row justify-content-center'>
            <div className='projects-image-box' onClick={openPopupBoxTetris}>
              <img
                className='projects-image'
                src={TetrisBlackWhite}
                alt='Tetris game Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
        </div>
        <div className='my-carousel-item'>
          <div className='image-box-wrapper row justify-content-center'>
            <div className='projects-image-box' onClick={openPopupBoxMoviesHub}>
              <img
                className='projects-image'
                src={MoviesHubBlackWhite}
                alt='BookSearch Clone Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
        </div>
        <div className='my-carousel-item'>
          <div className='image-box-wrapper row justify-content-center'>
            <div
              className='projects-image-box'
              onClick={openPopupBoxMasterMind}
            >
              <img
                className='projects-image'
                src={MasterMindBlackWhite}
                alt='MasterMind game Project...'
              />
              {/*<div className='overflow'></div>*/}
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </Carousel>
      <PopupboxContainer />
      {/*     <PopupboxContainer {...popupboxConfigBookSearch} />
      <PopupboxContainer {...popupboxConfigMoviesHub} />*/}
    </div>
  );
};
export default ProjectsCarousel;
