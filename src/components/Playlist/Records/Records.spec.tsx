import React from "react"
import { shallow } from "enzyme"

import { List } from "components/commons"
import videoMock from "mocks/videos.json"
import { Records } from "./Records"

describe("Records", () => {
  it("renders correctly", () => {
    const comp = shallow(<Records videos={videoMock} selected={""} select={jest.fn() as any} />)
    expect(comp).toMatchSnapshot()
  })
  it("adds icon if selected id is equal to video id", () => {
    const comp = shallow(<Records videos={videoMock} selected={videoMock[0].id} select={jest.fn() as any} />)
    expect(comp).toMatchSnapshot()
  })
  it("calls function with item payload function when list item is clicked", () => {
    const mockFn = jest.fn() as any
    const comp = shallow(<Records videos={videoMock} selected={videoMock[0].id} select={mockFn} />)
    comp
      .find(List.Item)
      .at(0)
      .simulate("click")
    expect(mockFn).toBeCalledWith(videoMock[0].id)
  })
})
