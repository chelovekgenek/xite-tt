import { action, payload } from "ts-action"

import { VideoListTypes, VideoSelectedTypes, IVideo, IVideoDraft } from "./types"

export const VideoListActions = {
  append: action(VideoListTypes.APPEND, payload<IVideoDraft>()),
}

export const VideoSelectedActions = {
  set: action(VideoSelectedTypes.SET, payload<IVideo["id"]>()),
  setNext: action(VideoSelectedTypes.SET_NEXT),
}
