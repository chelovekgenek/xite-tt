import React, { useRef, useCallback, useEffect } from "react"
import { connect } from "react-redux"
import { Player as VideoPlayer, ControlBar } from "video-react"

import { TAppState } from "store/entities"
import { getExpandedSelected, VideoSelectedActions } from "store/entities/video"

interface IStateProps {
  selected: ReturnType<typeof getExpandedSelected>
}
interface IDispatchProps {
  next: typeof VideoSelectedActions.setNext
}
interface IProps extends IStateProps, IDispatchProps {}

export const Player: React.FC<IProps> = ({ selected, next }) => {
  const player = useRef(null)
  const handleSubscription = useCallback(
    (nextState, prevState) => {
      if (nextState.ended && !prevState.ended) {
        next()
      }
    },
    [next],
  )
  useEffect(() => {
    if (player.current) {
      ;(player.current as any).subscribeToStateChange(handleSubscription) // for real life app it has to be typed
    }
  })
  if (!selected) {
    return null
  }
  return (
    <React.Fragment>
      <h4>
        {selected.title} | {selected.artist}
      </h4>
      <VideoPlayer ref={player} autoPlay key={selected.id} fluid={false} width={"100%"} height={"calc(100% - 2rem)"}>
        <source src={selected.src} />
        <ControlBar autoHide={false} />
      </VideoPlayer>
    </React.Fragment>
  )
}

export default connect<IStateProps, IDispatchProps, {}, TAppState>(
  state => ({ selected: getExpandedSelected(state) }),
  {
    next: VideoSelectedActions.setNext,
  },
)(Player)
