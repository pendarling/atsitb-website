import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = (props) => (
  <div className='mobile-menu' onClick={props.handleClose} >
    <div className='mobile-menu__item' >
      <Link className='mobile-menu__link' to='/gallery' >
        <h1>Photo Gallery</h1>
      </Link>
    </div>
    <div className='mobile-menu__item' >
      <Link className='mobile-menu__link' to='/paint-info' >
        <h1>Paint Info</h1>
      </Link>
    </div>
    <div className='mobile-menu__item' >
      <Link className='mobile-menu__link' to='/about-us' >
        <h1>About Us</h1>
      </Link>
    </div>
    <div className='mobile-menu__item' >
      <a className='mobile-menu__link' href='https://www.instagram.com/allthatstuffinthebarn/' target='_blank' rel='noopener noreferrer' >
        <h1>Instagram</h1>
      </a>
    </div>
    <div className='mobile-menu__item' >
      <a className='mobile-menu__link' href='https://www.facebook.com/notyoureverydaybarn/' target='_blank' rel='noopener noreferrer' >
        <h1>Facebook</h1>
      </a>
    </div>
    <div className='mobile-menu__item' >
      <button className='mobile-menu__link' onClick={props.modalOpen} >
        <h1>Join Email List</h1>
      </button>
    </div>
  </div>
);

export default MobileMenu;
