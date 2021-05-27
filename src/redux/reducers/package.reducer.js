import * as types from "../constants/package.constants";

const initialState = {
  packages: [],
  totalPageNum: 1,
  selectedPackage: null,
  loading: false,
};

const packageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PACKAGES_REQUEST:
    case types.GET_SINGLE_PACKAGE_REQUEST:
    case types.CREATE_PACKAGE_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_PACKAGE_SUCCESS:
      return { ...state, loading: false };
    case types.GET_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: payload.packages,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_SINGLE_PACKAGE_REQUEST_SUCCESS:
      return {
        ...state,
        selectedPackage: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.GET_PACKAGES_FAILURE:
    case types.GET_SINGLE_PACKAGE_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default packageReducer;
