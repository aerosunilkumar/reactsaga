import * as types from "./types";

export const featchMainItemsList = () => ({ type: types.FETCH_DATA_STARTED });

export const updateMainItemsList = newData => ({
  type: types.RECEIVE_DATA_SUCCESS,
  payload: newData
});
