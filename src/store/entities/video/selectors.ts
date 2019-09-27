import { createSelector } from "reselect"
import { TAppState } from "../reducers"

export const getList = (state: TAppState) => state.video.list
export const getSelected = (state: TAppState) => state.video.selected
export const getExpandedSelected = createSelector(
  getList,
  getSelected,
  (list, selectedId) => list.find(item => item.id === selectedId),
)
