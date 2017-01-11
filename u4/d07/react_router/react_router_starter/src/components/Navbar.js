import React from 'react';
import { Link } from 'react-router';
const navBarStyling = {padding: "0 20px"}

export default (props) => {
  return(
    <nav style={navBarStyling} className="purple darken-4" >
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">mytko</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/butlers/carson">Butlers</Link></li>
          <li><Link to="/rooms/study">Rooms</Link></li>
        </ul>
      </div>
    </nav>

  );
}

