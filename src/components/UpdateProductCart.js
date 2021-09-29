import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UpdateProductCart = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };
  const hanleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userActions.updateQuantityCart({
        productId: product.productId._id,
        quantity,
      })
    );
  };
  const handleOnclickDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleOnclickUp = () => {
    setQuantity(quantity + 1);
  };

  const handleDelete = () => {
    dispatch(userActions.removeFromCart({ productId: product.productId._id }));
  };

  return (
    <>
      <Form onSubmit={hanleSubmit} className="cart-number">
        <div className="">
          <FontAwesomeIcon icon="minus" size="sm" onClick={handleOnclickDown} />

          <input
            min={quantity}
            title="Qty"
            size="3"
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleOnChange}
            className="input-quantity"
          />
          <FontAwesomeIcon icon="plus" size="sm" onClick={handleOnclickUp} />
          <Button
            style={{ margin: "0 20px" }}
            type="submit"
            size={1}
            variant="outline-success"
          >
            {" "}
            <FontAwesomeIcon icon="save" />
          </Button>
          <Button variant="outline-danger" size={1} onClick={handleDelete}>
            {" "}
            <FontAwesomeIcon icon="trash-alt" />
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UpdateProductCart;
