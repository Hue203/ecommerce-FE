import * as types from "../constants/cycle.constants";

const initialState = {
  cycle: [],
  loading: false,
};

const cycleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_CYCLE_REQUEST:
    case types.GET_CYCLE_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_CYCLE_SUCCESS:
    case types.GET_CYCLE_SUCCESS:
      return { ...state, loading: false, cycle: payload.cycle };

    case types.CREATE_CYCLE_FAILURE:
    case types.GET_CYCLE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default cycleReducer;
