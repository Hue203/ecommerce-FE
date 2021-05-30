import * as types from "../constants/user.constants";
import api from "../api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const addCartRequest =
  ({ productId, quantity }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.ADD_CART_REQUEST, payload: null });
      const res = await api.put(`/users/cart`, {
        productId,
        quantity,
      });
      console.log("resUserAdd", res);
      dispatch({
        type: types.ADD_CART_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect("__GO_BACK__"));
      toast.success("You just add product to cart");
    } catch (err) {
      dispatch({ type: types.ADD_CART_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };
const getCartRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_CART_REQUEST, payload: null });
  try {
    const res = await api.get(`/users/cart`);
    dispatch({
      type: types.GET_CURRENT_CART_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_CURRENT_CART_FAILURE,
      payload: err,
    });
  }
};
const updateBillingAddress =
  ({
    fullname,
    email,
    address1,
    address2,
    phone,
    city,
    paymentMethod,
    shippingFee,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.UPDATE_BILLINGADDRESS_REQUEST, payload: null });
      // const res = await api.put(`/users/shipping`, {
      //   fullname,
      //   email,
      //   address1,
      //   address2,
      //   phone,
      //   city,
      //   paymentMethod,
      //   shippingFee,
      // });
      const res = await fetch("http://localhost:5000/api/users/shipping", {
        method: "put",
        headers: new Headers({
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          fullname,
          email,
          address1,
          address2,
          phone,
          city,
          paymentMethod,
          shippingFee,
        }),
      });
      dispatch({
        type: types.UPDATE_BILLINGADDRESS_SUCCESS,
        payload: res.data.data,
      });
      toast.success("Update user BILLINGADDRESS success");
    } catch (err) {
      dispatch({ type: types.UPDATE_BILLINGADDRESS_FAILURE, payload: err });
    }
  };

export const userActions = {
  addCartRequest,
  getCartRequest,
  updateBillingAddress,
};
