import { reducer, on } from "ts-action"

import { IVideo } from "../types"
import { VideoSelectedActions } from "../actions"

export type TState = IVideo["id"]

const initialState: TState = ""

export default reducer(initialState, on(VideoSelectedActions.set, (state, { payload }) => payload))
