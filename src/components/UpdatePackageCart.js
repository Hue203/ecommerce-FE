import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UpdatePackageCart = ({ packageItem }) => {
  const [quantity, setQuantity] = useState(packageItem.quantity);
  console.log("pakg", packageItem);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };
  const hanleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userActions.updateQuantityPackage({
        packageId: packageItem.packageId._id,
        quantity,
      })
    );
  };

  const handleOnclickDown = () => {
    setQuantity(quantity - 1);
  };
  const handleOnclickUp = () => {
    setQuantity(quantity + 1);
  };
  const handleDelete = () => {
    dispatch(
      userActions.removeFromCart({ packageId: packageItem.packageId._id })
    );
  };
  return (
    <>
      <Form onSubmit={hanleSubmit} className="cart-number">
        <div className="">
          <FontAwesomeIcon
            icon="angle-down"
            size="sm"
            onClick={handleOnclickDown}
          />

          <input
            min={quantity}
            title="Qty"
            size="2"
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleOnChange}
          />
          <FontAwesomeIcon
            icon="angle-up"
            size="sm"
            onClick={handleOnclickUp}
          />
          <button type="submit">
            {" "}
            <FontAwesomeIcon icon="save" />
          </button>
          <button onClick={handleDelete}>
            {" "}
            <FontAwesomeIcon icon="trash-alt" />
          </button>
        </div>
      </Form>
    </>
  );
};

export default UpdatePackageCart;
