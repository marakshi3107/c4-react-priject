import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';
import mainLogo from "../images/121391.jpg"
const Header = () => {
  return (
    <div>
      <link rel="stylesheet" href="hint.css" />
      <header><Link to="/">
        <div className="logo" data-rh="tooltip 1">

          <img src={mainLogo} alt="Logo" />
        </div>
      </Link>
        <nav>
          <ul>
            <li>
              <NavLink className="main-link" to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink className="main-link" to="/aboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink className="main-link" to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
