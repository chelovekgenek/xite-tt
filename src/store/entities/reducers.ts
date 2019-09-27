import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import video from "./video/reducer"

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["video"],
}

export const appReducers = combineReducers({ video })
export const reducers = persistReducer(rootPersistConfig, appReducers)

export type TAppState = ReturnType<typeof appReducers>
