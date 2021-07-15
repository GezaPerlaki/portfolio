import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          {/*
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>cím ha kell</p>
            </div>
            <div className='d-flex'>
              <a href='tel:'></a>
            </div>
            <div className='d-flex'>
              <p>email cím ha kell</p>
            </div>
          </div>
          */}
          {/*
          <div className='col-md-7 col-sm-12 d-flex align-items-center justify-content-around flex-wrap'>
            <button className='btn footer-nav'>Home</button>

            <button className='btn footer-nav'>About me</button>

            <button className='btn footer-nav'>Services</button>

            <button id='projects' className='btn footer-nav'>
              Projects
            </button>

            <button id='contacts' className='btn footer-nav'>
              Contacts
            </button>
          </div>
          */}
          <div className=' align-items-center'>
            <div className='d-flex justify-content-center'>
              <FacebookShareButton
                url={'https://www.'}
                quote={'Front-End Developer'}
                hashtag='#javascript #react #bootstrap'
              >
                <FacebookIcon className='mx-3' size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={'https://www.'}
                quote={'Front-End Developer'}
                hashtag='#javascript #react #bootstrap'
              >
                <TwitterIcon className='mx-3' size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={'https://www.'}
                quote={'Front-End Developer'}
                hashtag='#javascript #react #bootstrap'
              >
                <RedditIcon className='mx-3' size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={'https://www.'}
                quote={'Front-End Developer'}
                hashtag='#javascript #react #bootstrap'
              >
                <LinkedinIcon className='mx-3' size={36} />
              </LinkedinShareButton>
            </div>
            <p className='pt-3 text-center'>Copyright&copy;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
