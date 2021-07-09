import React from 'react';
import './Header.css';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>web development and webdesign</h1>
        <Link smooth={true} to='contacts' className='btn btn-main-offer'>
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
