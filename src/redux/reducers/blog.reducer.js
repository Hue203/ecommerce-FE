import * as types from "../constants/blog.constants";

const initialState = {
  blogs: [],
  totalPageNum: 1,
  selectedBlog: null,
  loading: false,
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BLOGS_REQUEST:
    case types.GET_SINGLE_BLOG_REQUEST:
    case types.CREATE_BLOG_REQUEST:
      return { ...state, loading: true };

    case types.CREATE_BLOG_SUCCESS:
      return { ...state, loading: false };
    case types.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload.blogs,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_BLOG_REQUEST_SUCCESS:
      return {
        ...state,
        selectedBlog: payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.GET_BLOGS_FAILURE:
    case types.GET_SINGLE_BLOG_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default blogReducer;
