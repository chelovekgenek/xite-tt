import { reducer, on } from "ts-action"

import { VideoListActions } from "../actions"
import { IVideo } from "../types"
import { getUniqueId } from "helpers"

export type TState = IVideo[]

const initialState: TState = []

export default reducer(
  initialState,
  on(VideoListActions.append, (state, { payload }) => state.concat({ id: getUniqueId(), ...payload })),
)
