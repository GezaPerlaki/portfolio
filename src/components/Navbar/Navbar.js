import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../images/Logo.webp';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='justify-content-center navbar navbar-expand-md navbar-light fixed-top'>
      {/* 
        <a className='navbar-brand' href='#'>
          <img className='logo' src={Logo} alt='logo'></img>
        </a>*/}
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
      </button>
      <div
        className='collapse navbar-collapse flex-grow-0'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav  mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='home'
              className='nav-link'
              aria-current='page'
              href='#'
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='about'
              offset={-54}
              className='nav-link'
              href='#'
            >
              about me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='services'
              offset={-54}
              className='nav-link'
              href='#'
            >
              services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='experience'
              offset={-54}
              className='nav-link'
              href='#'
            >
              experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='portfolio'
              offset={-54}
              className='nav-link'
              href='#'
            >
              portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='contacts'
              offset={-54}
              className='nav-link'
              href='#'
            >
              contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
