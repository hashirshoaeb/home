import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure the styles are imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <strong>WILLEM</strong> {/* Site name */}
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/work">Work</Link>
          </li>
          {/* <li>
            <Link to="/about">About Me</Link>
          </li> */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
