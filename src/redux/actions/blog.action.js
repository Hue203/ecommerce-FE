import * as types from "../constants/blog.constants";
import api from "../api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const blogsRequest =
  (pageNum = 1, limit = 3, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
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
        `/blogs?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );

      console.log("resBlogs", res);
      dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_BLOGS_FAILURE, payload: err });
    }
  };

const getSingleBlog = (blogId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BLOG_REQUEST, payload: null });
  try {
    const res = await api.get(`/blogs/${blogId}`);
    dispatch({
      type: types.GET_SINGLE_BLOG_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_SINGLE_BLOG_REQUEST_FAILURE,
      payload: err,
    });
  }
};

const createNewBlog = (title, content, blogImage) => async (dispatch) => {
  dispatch({ type: types.CREATE_BLOG_REQUEST, payload: null });
  try {
    const res = await api.post("/blogs", {
      title,
      content,
      blogImage,
    });

    dispatch({
      type: types.CREATE_BLOG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("New BLOG has been created!");
  } catch (err) {
    dispatch({ type: types.CREATE_BLOG_FAILURE, payload: err });
  }
};

const updateBlog = (blogId, title, content, blogImage) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_BLOG_REQUEST, payload: null });
    const res = await api.put(`/blogs/${blogId}`, {
      title,
      content,
      blogImage,
    });
    dispatch({
      type: types.UPDATE_BLOG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(routeActions.redirect("__GO_BACK__"));
    toast.success("The BLOG has been updated!");
  } catch (err) {
    dispatch({ type: types.UPDATE_BLOG_FAILURE, payload: err });
  }
};

const deleteblog =
  (blogId, redirectTo = "_GO_BACK_") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.DELETE_BLOG_REQUEST, payload: null });
      const res = await api.delete(`/blogs/${blogId}`);
      dispatch({
        type: types.DELETE_BLOG_SUCCESS,
        payload: res.data.data,
      });
      dispatch(routeActions.redirect(redirectTo));
      toast.success("The BLOG has been Deleted");
    } catch (err) {
      dispatch({ type: types.DELETE_BLOG_FAILURE, payload: err });
    }
  };
export const blogActions = {
  blogsRequest,
  getSingleBlog,
  createNewBlog,
  updateBlog,
  deleteblog,
};
