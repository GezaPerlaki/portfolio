import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../images/Logo.webp';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={Logo} alt='logo'></img>
        </a>
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
              <a className='nav-link' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                about me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                experience
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
