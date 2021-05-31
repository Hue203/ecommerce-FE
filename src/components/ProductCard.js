import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
const ProductCard = ({ product, handleClick }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div onClick={() => handleClick(product._id)}>
        <Col className="product-card">
          <div data-toggle="tooltip">
            {
              <img
                width="600"
                height="766"
                src={product.images[0].imageUrl}
                alt="product-img"
                className="product-img"
              />
            }
            <div className="product-content">
              <div>
                <ul>
                  {
                    <strong>
                      <h4>{product.name}</h4>
                    </strong>
                  }
                </ul>
              </div>
              <div>
                <ul>{<p>{`Price: $ ${product.price} - Bottle`}</p>}</ul>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default ProductCard;
