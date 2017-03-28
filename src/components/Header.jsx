import React, { Component } from 'react';
import logo from '.././logo.svg';
import './styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h2>Welcome to Astrological Planetal Chart</h2>
      </div>  
    );
  }
}

export default Header;