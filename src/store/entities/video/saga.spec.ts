import { expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga-test-plan/matchers"

import videos from "mocks/videos.json"

import { handleNext } from "./saga"
import { getList, getSelected } from "./selectors"
import selectedReducer, { initialState as selectedInitialState } from "./reducers/selected"

describe("video", () => {
  describe("handleNext", () => {
    it("shouldn't change state if videos is empty", async () =>
      expectSaga(handleNext)
        .withReducer(selectedReducer)
        .provide([[select(getList), []]])
        .hasFinalState(selectedInitialState)
        .run())
    it("should set first if video item by selected id wasn't found", async () =>
      expectSaga(handleNext)
        .withReducer(selectedReducer)
        .provide([[select(getList), videos], [select(getSelected), ""]])
        .hasFinalState("1")
        .run())
    it("should set first if video selected id is last item in videos", async () =>
      expectSaga(handleNext)
        .withReducer(selectedReducer)
        .provide([[select(getList), videos], [select(getSelected), "2"]])
        .hasFinalState("1")
        .run())
    it("should set next item in array", async () =>
      expectSaga(handleNext)
        .withReducer(selectedReducer)
        .provide([[select(getList), videos], [select(getSelected), "1"]])
        .hasFinalState("2")
        .run())
  })
})
