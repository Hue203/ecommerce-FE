import * as types from "../constants/auth.constants";
const isAuthenticated = !!localStorage.getItem("accessToken"); //true
const role = localStorage.getItem("role");
const updateProfile = localStorage.getItem("updateProfile");

const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated,
  loading: false,
  role,
  updateProfile,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.LOGIN_SUCCESS:
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload.user,
        accessToken: payload.token,
        loading: false,
        isAuthenticated: true,
        role: payload.role,
        updateProfile: payload.user,
      };
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        accessToken: payload.token,
        loading: false,
        isAuthenticated: true,
        role: payload.role,
      };
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
    case types.UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
