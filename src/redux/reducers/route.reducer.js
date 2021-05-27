import * as types from "../constants/route.constants";
const initialState = {
  redirectTo: null,
};

const routeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_REDIRECT_TO:
      return { ...state, redirectTo: payload }; /// sent payload (link)

    case types.REMOVE_REDIRECT_TO:
      return { ...state, REMOVE_REDIRECT_TO: null };

    default:
      return state;
  }
};

export default routeReducer;
