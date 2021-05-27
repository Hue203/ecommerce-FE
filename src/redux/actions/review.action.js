import * as types from "../constants/review.constants";
import api from "../api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const reviewsRequest =
  (pageNum = 1, limit = 6, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_REVIEWS_REQUEST, payload: null });
    try {
      let queryString = "";

      if (query) {
        queryString = `&title[$regex]=${query}&title[$options]=i`;
      }

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/products/:id?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );
      console.log("resREVIEW", res);
      dispatch({ type: types.GET_REVIEWS_SUCCESS, payload: res.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_REVIEWS_FAILURE, payload: err });
    }
  };

export const reviewActions = {
  reviewsRequest,
};
