import React from 'react';
import './Header.css';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>welcome to my portfolio</h1>
        <Link to='contacts' className='btn btn-main-offer'>
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
