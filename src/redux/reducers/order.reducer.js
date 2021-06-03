import * as types from "../constants/order.constants";

const initialState = {
  orders: [],

  totalPageNum: 1,
  selectedOrder: {},
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_ORDER_REQUEST:
    case types.GET_ORDERS_REQUEST:
    case types.CURRENT_USER_ORDER_REQUEST:
    case types.GET_SINGLE_ORDER_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_ORDER_SUCCESS:
    case types.GET_ORDERS_SUCCESS:
    case types.CURRENT_USER_ORDER_SUCCESS:
      return {
        ...state,
        orders: payload,
        loading: false,
      };

    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        selectedOrder: payload,
        loading: false,
      };
    case types.GET_SINGLE_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        selectedOrder: payload,
        loading: false,
      };
    case types.CURRENT_USER_ORDER_FAILURE:
    case types.GET_ORDERS_FAILURE:
    case types.CREATE_ORDER_FAILURE:
    case types.UPDATE_ORDER_FAILURE:
    case types.GET_SINGLE_ORDER_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default orderReducer;
