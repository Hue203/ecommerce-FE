import * as types from "../constants/package.constants";
import api from "../api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const packagesRequest =
  (pageNum = 1, limit = 6, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_PACKAGES_REQUEST, payload: null });
    try {
      let queryString = "";

      if (query) {
        queryString = `&name[$regex]=${query}&name[$options]=i`;
      }

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/packages?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );
      console.log("resPackages", res);
      dispatch({ type: types.GET_PACKAGES_SUCCESS, payload: res.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_PACKAGES_FAILURE, payload: err });
    }
  };

const getSinglePackage = (packageId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PACKAGE_REQUEST, payload: null });
  try {
    const res = await api.get(`/packages/${packageId}`);
    dispatch({
      type: types.GET_SINGLE_PACKAGE_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.CREATE_PACKAGE_FAILURE,
      payload: err,
    });
  }
};

const createNewPackage = (formData) => async (dispatch) => {
  dispatch({ type: types.CREATE_PACKAGE_REQUEST, payload: null });
  try {
    const res = await api.post("/packages", formData);
    console.log("addPACKAGES", res);
    dispatch({
      type: types.CREATE_PACKAGE_SUCCESS,
      payload: res.data.data,
    });

    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New product has been created!");
  } catch (err) {
    dispatch({ type: types.CREATE_PACKAGE_FAILURE, payload: err });
  }
};
export const packageActions = {
  packagesRequest,
  getSinglePackage,
  createNewPackage,
};
