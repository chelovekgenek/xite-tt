export interface IVideoDraft {
  title: string
  artist: string
  src: string
}
export interface IVideo extends IVideoDraft {
  id: string
}

export enum VideoListTypes {
  APPEND = "VIDEO__LIST__APPEND",
}

export enum VideoSelectedTypes {
  SET = "VIDEO__SELECTED__SET",
  SET_NEXT = "VIDEO__SELECTED__SET_NEXT",
}
