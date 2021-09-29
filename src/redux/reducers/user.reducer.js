import * as types from "../constants/user.constants";

const initialState = {
  users: [],
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
  cart: [],
  order: [],
  package: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CUSTOMERS_REQUEST:
    case types.ADD_CART_REQUEST:
    case types.GET_CURRENT_CART_REQUEST:
    case types.UPDATE_BILLINGADDRESS_REQUEST:
      return { ...state, loading: true };

    case types.GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case types.ADD_CART_SUCCESS:
    case types.GET_CURRENT_CART_SUCCESS:
    case types.UPDATE_BILLINGADDRESS_SUCCESS:
      return {
        ...state,
        selectedUser: payload,
        loading: false,
      };
    case types.GET_CUSTOMERS_FAILURE:
    case types.GET_CURRENT_CART_FAILURE:
    case types.ADD_CART_FAILURE:
    case types.UPDATE_BILLINGADDRESS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default userReducer;
