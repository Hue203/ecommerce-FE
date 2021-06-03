import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user.actions";
const ProductCard = ({ product, handleClick }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(
      userActions.addCartRequest({ productId: product._id, quantity: 1 })
    );
  };
  return (
    <>
      <Card className="product-cart">
        <div className="item-product">
          <div
            className="product-img-div"
            onClick={() => handleClick(product._id)}
          >
            <img
              width="250"
              height="250"
              src={product.images[0].imageUrl}
              alt="product-img"
              className="product-img"
            />
          </div>
          <div className="product-info">
            <h4
              className="product-title"
              onClick={() => handleClick(product._id)}
            >
              {product.name}{" "}
            </h4>
            <div className="product-price">
              <small className="amount">
                Old Price: <del> {`£${product.price} `}</del>
              </small>
              <div style={{ fontWeight: "bolder" }}>{` £${
                (product.price * 80) / 100
              }`}</div>
            </div>
          </div>
        </div>
        <div className="add-wishlist">
          <FontAwesomeIcon icon="heart" size="lg" />
        </div>
        <div className="shopping-cart" onClick={handleOnClick}>
          <FontAwesomeIcon icon="shopping-cart" size="lg" />
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
