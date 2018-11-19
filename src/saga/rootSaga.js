import { fork } from "redux-saga/effects";
import { watchFetchMAINList } from "./mainSagas";

export default function* rootSaga() {
  yield [fork(watchFetchMAINList)];
}
