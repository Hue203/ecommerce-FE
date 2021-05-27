import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../images/slide1-1.jpg";
import slide2 from "../images/slide1-2.jpg";
import slide3 from "../images/slide1-3.jpg";

const SliderHome = () => {
  let settings = {
    autoPlay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };
  return (
    <Carousel style={{ height: "100vh" }} {...settings}>
      <div>
        <img src={slide1} alt="1" />
        <h1 className="legend">Fresh drink for good day</h1>
      </div>
      <div>
        <img src={slide2} alt="2" />
        <p className="legend">Make by Love</p>
      </div>
      <div>
        <img src={slide3} alt="3" />
        <p className="legend">Yummy - Healthy</p>
      </div>
    </Carousel>
  );
};

export default SliderHome;
