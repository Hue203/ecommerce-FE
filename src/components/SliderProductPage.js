import React from "react";
import { Carousel, Container } from "react-bootstrap";
import slide1 from "../images/slide1.jpg";
import slide6 from "../images/slide6.jpg";
import silde5 from "../images/slide5.jpg";
const SliderProductPage = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <div
              className="banner-info animated bounceIn"
              data-animated="bounceIn"
            >
              <div className="text-center white text-uppercase">
                <h3 className="title30 ">Detox Box on Sales</h3>
                <h2
                  className="title120 font-bold animated flash"
                  data-animated="flash"
                >
                  up to <span className="title90">35% off</span>
                </h2>
                <h4 className="title18 ">
                  {" "}
                  limited quantities only in the first week of June
                </h4>

                <a
                  href="/products"
                  target="_parent"
                  className="btn-arrow white"
                >
                  Shop now
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide6} alt="Second slide" />

          <Carousel.Caption>
            <div className="text-center white text-uppercase secondSlide">
              <h3 className="title30 ">Fruit Organic Juice</h3>
              <h2
                className="title120 font-bold animated flash"
                data-animated="flash"
              >
                up to <span className="title90">25% off </span>
              </h2>
              <h4 className="title18 "> Hurry Up!!!</h4>

              <a href="/products" target="_parent" className="btn-arrow white">
                Shop now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={silde5} alt="Third slide" />

          <Carousel.Caption>
            <div className="text-center white text-uppercase">
              <h3 className="title90">Detox Box </h3>
              <p className="titlestay" font-bold>
                Stay Safe - Stay Healthy
              </p>
              <h4 className="slideStayhealth">Up to 35% all products.</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default SliderProductPage;
