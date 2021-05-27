import React from "react";
import {  Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide1-1.jpg";
import slide2 from "../images/slide1-2.jpg";
import slide3 from "../images/slide1-3.jpg";
import thumb1 from "../images/thumb1.jpg";

import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
const slideInUpAnimation = keyframes`${slideInUp}`;
const slideInUpDiv = styled.div`
  animation: infinite 3s ${slideInUpAnimation};
`;

const ProductSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <Row>
        <Slider {...settings} className="slide">
          <div className="slide-div">
            <img className="re-size-img-slide" src={slide1} alt="slide1"></img>
            {/* <slideInUpDiv>
              <img src={thumb1} alt="thuub1" />
            </slideInUpDiv>{" "} */}
          </div>

          <div className="slide-div">
            <img className="re-size-img-slide" src={slide2} alt="slide2" />
          </div>
          <div className="slide-div">
            <img className="re-size-img-slide" src={slide3} alt="slide3" />
          </div>
        </Slider>
      </Row>
    </>
  );
};

export default ProductSlider;
///style={{ height: "100vh" }}
