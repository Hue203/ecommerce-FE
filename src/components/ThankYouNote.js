import React from "react";
import { Carousel, Card } from "react-bootstrap";
import thanknote from "../images/thanknote.jpg";
const ThankYouNote = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={thanknote} alt="First slide" />
          <Carousel.Caption>
            <div className="thankyoutitle">
              <h1>Thank you for your order</h1>
              <h3>You are the heart of my bussiness</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ThankYouNote;