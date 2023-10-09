import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/andi-logo.jpg";

const Navbar = () => {
  // State to handle click on hamburger icon
  const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  // handler function to handle toggle of hamburger icon
  const handleClick = () => setClick(!click);

  // handler function to handle menu-bar toggle
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="andi-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cloud" className="nav-links" onClick={closeMobileMenu}>
              Cloud
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
