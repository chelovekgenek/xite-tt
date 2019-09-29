import React from "react"
import { connect } from "react-redux"

import { List, Icon } from "components/commons"
import { TAppState } from "store/entities"
import { getList, VideoSelectedActions, getSelected } from "store/entities/video"

interface IStateProps {
  videos: ReturnType<typeof getList>
  selected: ReturnType<typeof getSelected>
}
interface IDispatchProps {
  select: typeof VideoSelectedActions.set
}
interface IProps extends IStateProps, IDispatchProps {}

export const Records: React.FC<IProps> = ({ videos, selected, select }) => (
  <React.Fragment>
    {videos.map(({ id, title }) => (
      <List.Item key={id} onClick={() => select(id)}>
        {selected === id && <Icon type="caret-right" />}
        {title}
      </List.Item>
    ))}
  </React.Fragment>
)

export default connect<IStateProps, IDispatchProps, {}, TAppState>(
  state => ({
    videos: getList(state),
    selected: getSelected(state),
  }),
  {
    select: VideoSelectedActions.set,
  },
)(Records)
