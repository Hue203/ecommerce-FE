import * as types from "../constants/order.constants";
import api from "../../redux/api";
import { toast } from "react-toastify";
import { routeActions } from "./route.actions";

const createOrder = (totalAmount) => async (dispatch) => {
  dispatch({ type: types.CREATE_ORDER_REQUEST, payload: null });
  try {
    const res = await api.post(`/orders`, { totalAmount });
    /* const res = await fetch("http://localhost:5000/api/orders", {
      method: "post",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ totalAmount }),
    }); */
    console.log("createOrder", res);
    dispatch({
      type: types.CREATE_ORDER_SUCCESS,
      payload: res.data.data,
    });
    toast.success("New order has been created!");
  } catch (err) {
    dispatch({
      type: types.CREATE_ORDER_FAILURE,
      payload: err,
    });
  }
};

const getAllOrders =
  ({ pageNum = 1, limit = 6, query = null, sortBy = null }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ORDERS_REQUEST, payload: null });
    try {
      console.log("limit", limit);
      let queryString = "";
      console.log(pageNum, limit, query);
      if (query) {
        queryString = `&_id[$regex]=${query}&_id[$options]=i`;
      }

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/orders?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );
      console.log("resorders", res);
      dispatch({
        type: types.GET_ORDERS_SUCCESS,
        payload: res.data.data.orders,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_ORDERS_FAILURE, payload: err });
    }
  };
const updateOrder = (orderId, formData) => async (dispatch) => {
  dispatch({ type: types.UPDATE_ORDER_REQUEST, payload: null });
  try {
    const res = await api.put(`/orders/${orderId}`, formData);

    dispatch({
      type: types.UPDATE_ORDER_SUCCESS,
      payload: res.data.data,
    });
    dispatch(orderActions.getAllOrders({ pageNum: 1 }));
  } catch (err) {
    dispatch({
      type: types.UPDATE_ORDER_FAILURE,
      payload: err,
    });
  }
};

const getSingleOrder = (orderId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_ORDER_REQUEST, payload: null });
  try {
    const res = await api.get(`/orders/${orderId}`);
    dispatch({
      type: types.GET_SINGLE_ORDER_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_SINGLE_ORDER_REQUEST_FAILURE,
      payload: err,
    });
  }
};

const deleteOrder =
  (orderId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_ORDER_REQUEST, payload: null });
      const res = await api.delete(`/orders/${orderId}`);
      dispatch({
        type: types.DELETE_ORDER_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The ORDER has been Deleted");
    } catch (err) {
      dispatch({ type: types.DELETE_ORDER_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };

const getCurrentUserOrder = () => async (dispatch) => {
  try {
    dispatch({ type: types.CURRENT_USER_ORDER_REQUEST, payload: null });
    const res = await api.get(`/orders/mine`);
    dispatch({
      type: types.CURRENT_USER_ORDER_SUCCESS,
      payload: res.data.data.orders,
    });
  } catch (err) {
    dispatch({ type: types.CURRENT_USER_ORDER_FAILURE, payload: err });
    toast.error("Something went wrong");
  }
};

export const orderActions = {
  createOrder,
  updateOrder,
  getAllOrders,
  getSingleOrder,
  deleteOrder,
  getCurrentUserOrder,
};
