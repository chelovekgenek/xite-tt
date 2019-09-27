import { all, fork } from "redux-saga/effects"

import video from "./video/saga"

export function* sagas() {
  yield all([fork(video)])
}
