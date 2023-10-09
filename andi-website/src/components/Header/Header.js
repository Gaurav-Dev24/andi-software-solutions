import React from "react";
import "./Header.css";
import Model from "../Model/Model";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <Model />
      <Navbar />
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
    </header>
  );
};

export default Header;
