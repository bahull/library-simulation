import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import tanLogo from './tan-logo.svg';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="headerBack">
        <nav>
          <div className="navLinks">
            <img src={tanLogo} className="tanLogo" />

            <Link to="/inventory">
              <h2>Browse</h2>
            </Link>
            <Link to="/cart">
              <h2>Cart</h2>
            </Link>
            <Link to="/myBook">
              <h2>My Shelf</h2>
            </Link>
          </div>
          <Link to="/">
            <h3>Logout</h3>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
