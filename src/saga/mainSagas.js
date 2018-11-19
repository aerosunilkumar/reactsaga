import * as types from "../actions/types";

import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

function* FetchMAINList() {
  try {
    const mainItems = yield Api.getMainListAPI();
    yield put({ type: types.RECEIVE_DATA_SUCCESS, payload: mainItems });
  } catch (error) {
    yield put({ type: types.FETCH_DATA_FAILED });
  }
}
export function* watchFetchMAINList() {
  yield takeLatest(types.FETCH_DATA_STARTED, FetchMAINList);
}
