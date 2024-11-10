import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='siteLogo'>Genix Auctions</div>
      <nav className='nav'>
        <Link className='navLink' to="/auctions">Auctions</Link>
        <Link className='navLink' to="/bidding">Bidding</Link>
        <Link className='navLink' to="/about">About Us</Link>
      </nav>
      <div className='buttonContainer'>
        <Link className='loginButton' to="/login">Login</Link>
        <Link className='getStartedButton' to="/signup">Get Started</Link>
      </div>
    </div>
  );
};

export default Header;
