import React,{useState, useEffect} from "react";
import "./Poster.css";
import BannerOne from "../../assets/banner1.png";
import BannerTwo from "../../assets/banner2.jpg";


const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    BannerOne, 
    BannerTwo, 
  ];

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carousel;




// const Poster = () => {
  
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleSlideChange = (index) => {
//     setSelectedIndex(index);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // Calculate the index of the next slide
//       const nextIndex = (selectedIndex + 1) % 2; // Assuming 2 slides

//       // Call handleSlideChange to move to the next slide
//       handleSlideChange(nextIndex);
//     }, 3000); // Wait for 3 seconds

//     return () => clearTimeout(timer); // Clear the timer on component unmount
//   }, [selectedIndex]);


//   return (
//     <div className="poster">
//       <Carousel
//         showThumbs={false}
//         autoPlay={false} // Set autoPlay to false
//         interval={0}     // Set interval to 0 (no automatic transitioning)
//         infiniteLoop={true}
//         showStatus={false}
//         selectedItem={selectedIndex} // Control the selected item manually
//         onChange={handleSlideChange} // Handle slide change events
//         className="custom-carousel"
//       >
//         {/* I have use link here because i want to open the movie descp. if user clicks anywhere on the crousel it will got routes name id which has been defined in app.js */}
//         <Link style={{ textDecoration: "none", color: "white" }} to={Home} className="carousel-link">
//           <div className="posterImage">
//             <img src={BannerOne} alt="banner-one" />
//           </div>
//         </Link>
//         <Link style={{ textDecoration: "none", color: "white" }} to={Home} className="carousel-link">
//           <div className="posterImage">
//             <img src={BannerTwo} alt="banner-two" />
//           </div>
//         </Link>
//       </Carousel>
//     </div>
//   );
// };

// export default Poster;
