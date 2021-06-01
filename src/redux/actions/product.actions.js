import * as types from "../constants/product.costants";
import api from "../api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const productsRequest =
  (pageNum = 1, limit = 6, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null });
    try {
      let queryString = "";

      if (query) {
        queryString = `&name[$regex]=${query}&name[$options]=i`;
      }
      console.log(pageNum, limit, query);

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/products?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );
      console.log("resProducts", res);
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    }
  };

const getSingleProduct = (productId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.get(`/products/${productId}`);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_SINGLE_PRODUCT_REQUEST_FAILURE,
      payload: err,
    });
  }
};

const createNewProduct = (formData) => async (dispatch) => {
  dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.post("/products", formData);
    console.log("addProduct", res);
    dispatch({
      type: types.CREATE_PRODUCT_SUCCESS,
      payload: res.data.data,
    });
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New product has been created!");
  } catch (err) {
    dispatch({ type: types.CREATE_PRODUCT_FAILURE, payload: err });
  }
};

const updateProduct = (productId, formData) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_PRODUCT_REQUEST, payload: null });
    const res = await api.put(`/products/${productId}`, formData);

    dispatch({
      type: types.UPDATE_PRODUCT_SUCCESS,
      payload: res.data.data,
    });
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("The product has been updated!");
  } catch (err) {
    dispatch({ type: types.UPDATE_PRODUCT_FAILURE, payload: err });
    toast.error("Something went wrong");
  }
};

const deleteProduct =
  (productId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_PRODUCT_REQUEST, payload: null });
      const res = await api.delete(`/products/${productId}`);
      dispatch({
        type: types.DELETE_PRODUCT_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The product has been Deleted");
    } catch (err) {
      dispatch({ type: types.DELETE_PRODUCT_FAILURE, payload: err });
      toast.error("Something went wrong");
    }
  };
const createReview = (productId, reviewText) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`/reviews/products/${productId}`, {
      content: reviewText,
    });
    dispatch({
      type: types.CREATE_REVIEW_SUCCESS,
      payload: res.data.data,
    });
    toast.success("You just review product");
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: error });
    toast.error("Something went wrong");
  }
};

export const productActions = {
  productsRequest,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  createReview,
};
