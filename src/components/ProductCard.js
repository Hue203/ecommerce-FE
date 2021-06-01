import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

const ProductCard = ({ product, handleClick }) => {
  return (
    <>
      <div onClick={() => handleClick(product._id)}>
        <Card className="product-cart">
          <div className="item-product">
            {
              <img
                width="250"
                height="250"
                src={product.images[0].imageUrl}
                alt="product-img"
                className="product-img"
              />
            }
            <div className="product-info">
              <h3 className="product-title">
                <ul>
                  {
                    <strong>
                      <h4>{product.name}</h4>
                    </strong>
                  }
                </ul>
              </h3>
              <div className="product-price">
                <span className="price">
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        £
                      </span>
                      {`Old Price: ${product.price} `}
                    </span>
                  </del>{" "}
                  <span>
                    <br />
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        {` ${product.price}- Bottle only`}
                      </span>
                    </ins>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
