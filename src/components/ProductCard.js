import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product, handleClick }) => {
  return (
    <>
      <div onClick={() => handleClick(product._id)}>
        <Card className="product-cart">
          <div className="item-product">
            {
              <div className="product-img-div">
                <img
                  width="250"
                  height="250"
                  src={product.images[0].imageUrl}
                  alt="product-img"
                  className="product-img"
                />
              </div>
            }
            <div className="product-info">
              <h4 className="product-title">
                <ul>
                  <h4>{product.name}</h4>
                </ul>
              </h4>
              <div className="product-price">
                <span className="price">
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      {`Old Price:  £${product.price} `}
                    </span>
                  </del>{" "}
                  <span>
                    <br />
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          £
                        </span>
                        {` ${(product.price * 80) / 100} - Bottle only`}
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
