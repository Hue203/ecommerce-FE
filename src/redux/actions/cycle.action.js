import * as types from "../constants/cycle.constants";
import api from "../api";
import { routeActions } from "./route.actions";
import { toast } from "react-toastify";

const createCycle =
  ({ cycleName, price }) =>
  async (dispatch) => {
    dispatch({ type: types.CREATE_CYCLE_REQUEST, payload: null });
    try {
      const res = await api.post("/cycles", {
        cycleName,
        price,
      });
      console.log("cycle", res);
      dispatch({
        type: types.CREATE_CYCLE_SUCCESS,
        payload: res.data.data,
      });

      dispatch(routeActions.redirect("__GO_BACK__"));
      toast.success("New cycle has been created!");
    } catch (err) {
      dispatch({ type: types.CREATE_CYCLE_FAILURE, payload: err });
    }
  };

const getCycle = () => async (dispatch) => {
  dispatch({ type: types.GET_CYCLE_REQUEST, payload: null });
  try {
    const res = await api.get("/cycles");
    console.log("cycle", res);
    dispatch({
      type: types.GET_CYCLE_SUCCESS,
      payload: res.data.data,
    });

    dispatch(routeActions.redirect("__GO_BACK__"));
    // toast.success("Get cycle success!");
  } catch (err) {
    dispatch({ type: types.GET_CYCLE_FAILURE, payload: err });
  }
};

export const cycleActions = {
  createCycle,
  getCycle,
};
