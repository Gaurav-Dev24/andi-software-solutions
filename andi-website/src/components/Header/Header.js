import React, { useState } from "react";
import "./Header.css";
import Model from "../Model/Model";
// import { Link } from 'react-router-dom';

const Header = () => {
  // State to handle click on hamburger icon
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  return (
    // The Model
    // *******************
    <header className="main-header">
      <div className="header-topbar">
        <Model />
      </div>
    </header>

    // <nav className="navbar">
    //     <div className="navbar-container">
    //         <Link to="/" className="navbar-logo" >
    //             DEV <i className="fab fa-typo3"></i>
    //         </Link>
    //         <div className="menu-icon" >
    //             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
    //         </div>
    //         <ul className={click ? "nav-menu active" : "nav-menu"}>
    //             <li className='nav-item'>
    //                 <Link to="/" className='nav-links' >
    //                     Home
    //                 </Link>
    //             </li>
    //             <li className='nav-item'>
    //                 <Link to="/about" className='nav-links' >
    //                     About
    //                 </Link>
    //             </li>
    //             <li className='nav-item'>
    //                 <Link to="/cloud" className='nav-links' >
    //                     Cloud
    //                 </Link>
    //             </li>
    //             <li className='nav-item'>
    //                 <Link to="/sign-up" className='nav-links-mobile' >
    //                     Sign Up
    //                 </Link>
    //             </li>
    //         </ul>
    //         {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
    //     </div>
    // </nav>
  );
};

export default Header;
