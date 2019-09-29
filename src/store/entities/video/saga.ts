import { takeLatest, put, select } from "redux-saga/effects"

import { VideoSelectedTypes } from "./types"
import { getList, getSelected } from "./selectors"
import { VideoSelectedActions } from "./actions"

function* handleNext() {
  const list: ReturnType<typeof getList> = yield select(getList)
  if (!list.length) {
    return
  }
  const selected: ReturnType<typeof getSelected> = yield select(getSelected)
  const selectedIndex = list.findIndex(item => item.id === selected)
  if (selectedIndex < 0 || selectedIndex === list.length - 1) {
    yield put(VideoSelectedActions.set(list[0].id))
  } else {
    yield put(VideoSelectedActions.set(list[selectedIndex + 1].id))
  }
}

export default function*() {
  yield takeLatest(VideoSelectedTypes.SET_NEXT, handleNext)
}
