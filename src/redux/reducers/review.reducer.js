import * as types from "../constants/review.constants";

const initialState = {
  reviews: [],
  totalPageNum: 1,
  selectedReview: null,
  loading: false,
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REVIEWS_REQUEST:
    case types.GET_SINGLE_REVIEW_REQUEST:
    case types.CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: payload.reviews,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_REVIEW_REQUEST_SUCCESS:
      return {
        ...state,
        selectedReview: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.GET_REVIEWS_FAILURE:
    case types.GET_SINGLE_REVIEW_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default reviewReducer;
