import * as types from "../constants/user.constants";

const initialState = {
  users: [],
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
  cart: [],
  order: [],
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_CART_REQUEST:
    case types.GET_CURRENT_CART_REQUEST:
    case types.UPDATE_BILLINGADDRESS_REQUEST:
      return { ...state, loading: true };

    case types.ADD_CART_SUCCESS:
    case types.GET_CURRENT_CART_SUCCESS:
    case types.UPDATE_BILLINGADDRESS_SUCCESS:
      return {
        ...state,
        selectedUser: payload,
        loading: false,
      };

    case types.GET_CURRENT_CART_FAILURE:
    case types.ADD_CART_FAILURE:
    case types.UPDATE_BILLINGADDRESS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default userReducer;
