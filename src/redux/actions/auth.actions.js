import * as types from "../constants/auth.constants";
import api from "../api";
import { toast } from "react-toastify";
import { routeActions } from "./route.actions";
const register = (name, email, password, avatarUrl) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST, payload: null });
    const res = await api.post("/users", {
      name,
      email,
      password,
      avatarUrl,
    });

    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Thank you for your registration, ${name}!`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};
const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    console.log("resauth", res);
    const name = res.data.data.user.name;
    localStorage.setItem("role", res.data.data.user.role);
    localStorage.setItem("accessToken", res.data.data.token);
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    toast.success(`Welcome ${name}`);
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.token;
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};
const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.removeItem("accessToken");
  dispatch({ type: types.LOGOUT, payload: null });
};

const getCurrentUser = (token) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (token) {
    const bearerToken = "Bearer " + token;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: err });
  }
};

const updateProfile = (name, avatarUrl) => async (dispatch) => {
  try {
    const res = await api.put(`/users`, { name, avatarUrl });
    localStorage.setItem("updateProfile", res.data.data);
    dispatch({
      type: types.UPDATE_PROFILE_SUCCESS,
      payload: res.data.data,
    });
    toast.success(`Your profile has been updated.`);
  } catch (err) {
    dispatch({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: err,
    });
  }
};
export const authActions = {
  register,
  loginRequest,
  logout,
  getCurrentUser,
  updateProfile,
};
