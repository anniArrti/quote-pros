import React from 'react'
import UserLogo from '../images/user-image.webp';
import Logo from '../images/quote-pros-logo.webp';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mobileToggle } from '../state/Actions/actionCreate';

import { menuIcon } from '../icons/svgicons'
const Header = ({ mobileToggle, isLogin }) => {
  return (
    <header className="site-header">
    <div className="mobile-menu__trigger-wrapper">
      <span 
        className="mobile-menu__trigger" 
        onClick={mobileToggle}
        dangerouslySetInnerHTML={{__html: menuIcon }}
      />
      <figure className="logo-wrapper">
        <a href="/">
          <img
            src={Logo}
            alt="Quote Pros Logo"
          />
        </a>
      </figure>
    </div>
    <nav className="site-nav desktop-nav">
      <ul className="site-nav__list unstyled-list">
        <li className="site-nav__list-item">
          <a href="/" aria-label="Home" className="site-nav__list-item-link">Home</a>
        </li>
        <li className="site-nav__list-item">
          <a href="/" aria-label="How it Works" className="site-nav__list-item-link">How it Works</a>
        </li>
        <li className="site-nav__list-item">
          <a href="/plan" aria-label="Pricing" className="site-nav__list-item-link">Pricing</a>
        </li>
        { !isLogin ?
        <li className="site-nav__list-item site-nav__list-item-button-wrapper">
          <a href="/register" aria-label="Sign Up" className="btn site-nav__list-item-link site-nav__list-item-button">Sign Up</a>
        </li>
        : ''}
      </ul>
    </nav>
    <div className="header__user-info">
    { !isLogin ?
      <a 
        href="/register" 
        aria-label="Sign Up" 
        className="btn btn-secondary site-nav__list-item-link site-nav__list-item-button site-nav__list-item-button-mobile">
          Sign Up
      </a>
        :
      <div className="header__user__image-wrapper">
        <img
          src={UserLogo}
          alt="User-logo"
          className="header__user__image"/>
      </div>
    }
      <div className="header-user__dropdown" style={{display:"none"}}>
        <ul className="header-user__dropdown-list unstyled-list">
          <li className="header-user__dropdown-list-item">
            <a href="/" aria-label="Account" className="header-user__dropdown-list-item-link">Account</a>
          </li>
          <li className="header-user__dropdown-list-item">
            <a href="/" aria-label="Settings" className="header-user__dropdown-list-item-link">Settings</a>
          </li>
          <li className="header-user__dropdown-list-item">
            <a href="/" aria-label="Logout" className="header-user__dropdown-list-item-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}
Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  mobileToggle: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  isLogin: state.chat.isLogin
});
const mapDispatchToProps = {
  mobileToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
