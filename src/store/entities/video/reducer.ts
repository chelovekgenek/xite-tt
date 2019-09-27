import { combineReducers } from "redux"

import list from "./reducers/list"
import selected from "./reducers/selected"

export default combineReducers({
  list,
  selected,
})
