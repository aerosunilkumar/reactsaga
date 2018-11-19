import * as types from "../actions/types";
import initialState from "./initialState";

export default (state = initialState.mainData, action) => {
  switch (action.type) {
    case types.FETCH_DATA_STARTED:
      return {
        ...state,
        isLoading: true,
        dataError: undefined
      };
    case types.RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        dataError: undefined
      };
    case types.FETCH_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        dataError: action.payload
      };
    default:
      return state;
  }
};
