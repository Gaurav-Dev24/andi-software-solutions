import React from "react";
import "./Poster.css";
import Home from "../../pages/Home";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerOne from "../../assets/banner1.png";
import BannerTwo from "../../assets/banner2.jpg";

const Poster = () => {
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {/* I have use link here because i want to open the movie descp. if user clicks anywhere on the crousel it will got routes name id which has been defined in app.js */}
        <Link style={{ textDecoration: "none", color: "white" }} to={Home}>
          <div className="posterImage">
            <img src={BannerOne} alt="banner-one" />
            <img src={BannerTwo} alt="banner-one" />
          </div>
          {/* <div className="posterImage__overlay">
            <div className="posterImage__runtime">
              <span className="posterImage__rating">
                <i className="fas fa-star" />
              </span>
            </div>
            <div className="posterImage__description"></div>
          </div> */}
        </Link>
      </Carousel>
    </div>
  );
};

export default Poster;
