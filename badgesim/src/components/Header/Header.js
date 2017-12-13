import React, { Component } from 'react';
import tanLogo from './tan-logo.svg';
class Header extends Component {
  render() {
    return (
      <div className="headerBack">
        Header
        <img src={tanLogo} className="tanLogo" />
      </div>
    );
  }
}

export default Header;
