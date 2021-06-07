import React from "react";
import { Carousel, Card } from "react-bootstrap";

const ThankYouNote = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="thanyounote"
            src="https://snappygoat.com/b/da328150476730f17c1d302d1d60c4e6c84c0288"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="thankyoutitle">
              <h3>You are the heart of my bussiness</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ThankYouNote;
