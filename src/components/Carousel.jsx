import { useState, useEffect } from "react";
import "./Carousel.css";
import user2 from "../assets/user2.png";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    if (autoPlay) {
      timeOut = setTimeout(() => {
        slideRight();
      }, 2500);
    }
    return () => clearTimeout(timeOut);
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };

//   const slideLeft = () => {
//     setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
//   };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel_card ${
              index === current ? "carousel_card-active" : ""
            } ${
              index === (current - 1 + images.length) % images.length
                ? "carousel_card-prev"
                : ""
            }`}
          >
            <div className="carosel_heading">
              <h4>Recognised</h4>
              <span>View More</span>
            </div>
            <div className="carousel_profile_name_image">
              <img src={user2} alt="Img" />
              <div className="carousel_profile_name">
                <p>
                  <span>Jimson B</span> recognized by Thomas
                </p>
                <span>3 days ago</span>
              </div>
            </div>
            <div className="carousel_level">
              <p><span>Star (Super Hero) of the Month</span></p>
            </div>
            <div className="carousel_paragraph">
              <p>Lorem Ipsum has been the industry's standard dummy text ever since...</p>
            </div>
            <div className="carousel_image_parent">
              <img className="card_image" src={image.url} alt="" />
            </div>
          </div>
        ))}
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${
                index === current ? "pagination_dot-active" : ""
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
