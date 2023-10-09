import React from "react";
import "./Header.css";
import Model from "../Model/Model";
import Navbar from "../Navbar/Navbar";
import Poster from "../Crousel/Poster";

const Header = () => {
  return (
    <header className="main-header">
      {/* Top Navbar Section */}
      <Model />
      {/* Main Navbar with navigations */}
      <Navbar />
      {/* Marquee text */}
      <div className="sliding-text">
        <marquee behavior="scroll" direction="left">
          <p>
            <a href="https://andisoftwaresolutions.com/index.html"> </a>
            <a href="https://andisoftwaresolutions.com/franchise.php">
              Freelancers/Franchise/Reseller Required in all major cities
            </a>
          </p>
        </marquee>
      </div>
      {/* The Crousel section */}
      <Poster />
    </header>
  );
};

export default Header;
