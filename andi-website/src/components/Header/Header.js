import React from "react";
import "./Header.css";
import Model from "../Model/Model";
import Navbar from "../Navbar/Navbar";


const Header = () => {


  return (
    <header className="main-header">
      <Model />
      <Navbar />
    </header>
  );
};

export default Header;
