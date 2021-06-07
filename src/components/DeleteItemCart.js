import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const DeleteItemCart = () => {
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(userActions.removeFromCart(productId));
    handleClose();
  };

  return <div></div>;
};

export default DeleteItemCart;
