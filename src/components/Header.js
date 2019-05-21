import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import EmailSignUpModal from './EmailSignUpModal';
import MobileMenu from './MobileMenu';

export default class Header extends React.Component {
  state = {
      modalOpen: false,
      mobileMenuOpen: false
  };

  openModal() {
      this.setState({ modalOpen: true });
  }
  closeModal() {
      this.setState({ modalOpen: false });
  }
  openMobileMenu() {
      if (!this.state.mobileMenuOpen) {
          this.setState({ mobileMenuOpen: true });
      } else if (this.state.mobileMenuOpen) {
          this.setState({ mobileMenuOpen: false }); 
      }
  }
  closeMobileMenu() {
      if (this.state.mobileMenuOpen) {
          this.setState({ mobileMenuOpen: false });
      }
  }
  renderModal() {
      if (this.state.modalOpen) {
          return <EmailSignUpModal handleClose={this.closeModal.bind(this)} />;
      }
  }
  renderMobileMenu() {
      if (this.state.mobileMenuOpen) {
          return <MobileMenu handleClose={this.closeMobileMenu.bind(this)} modalOpen={this.openModal.bind(this)} />;
      }
  }

  render() {
      return (
          <div>
              {this.renderModal()}
              <div className='header' onClick={this.closeMobileMenu.bind(this)} >
                  <div className='content-container'>
                      <div className='header__content' >
                          <div className='header__logo' >
                              <Link to='/' >
                                  <img className='header__img' src='/images/logos/logo_blk2.png' alt='logo' />
                              </Link>
                              <NavLink className='header__text' to='/'>
                                  <h1>All That Stuff in the Barn</h1>
                              </NavLink>
                          </div>
                          <div className='header__nav' >
                              <NavLink className='header__text' activeStyle={{ borderBottom: '1px solid black' }} to='/gallery' >
                                  <h3>Photo Gallery</h3>
                              </NavLink>
                              <NavLink className='header__text' activeStyle={{ borderBottom: '1px solid black' }} to='/paint-info' > 
                                  <h3>Paint Info</h3>
                              </NavLink >
                              <NavLink className='header__text' activeStyle={{ borderBottom: '1px solid black' }} to='/about-us' > 
                                  <h3>About Us</h3>
                              </NavLink >
                              <div>
                                  <a href='https://www.facebook.com/notyoureverydaybarn/' target='_blank' rel='noopener noreferrer' >
                                      <img className='header__social-icon' src='/images/icons/facebook.png' alt='facebook' />
                                  </a>
                                  <a href='https://www.instagram.com/allthatstuffinthebarn/' target='_blank' rel='noopener noreferrer' >
                                      <img className='header__social-icon' src='/images/icons/instagram.png' alt='instagram' />
                                  </a>
                              </div>
                              <button className='header__text header__text--secondary' onClick={this.openModal.bind(this)} > 
                                  Join Email List
                              </button >
                          </div>
                          <img className='header__menu-icon' onClick={this.openMobileMenu.bind(this)} src='/images/menu_icon.png' alt='menu' />
                      </div>
                  </div>
              </div>
              {this.renderMobileMenu()}
          </div>
      );
  }
}
