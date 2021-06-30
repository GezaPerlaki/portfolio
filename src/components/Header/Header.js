import React from 'react';
import './Header.css';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1>we development and websites promotions</h1>
        <a href='#' className='btn-main-offer'>
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
