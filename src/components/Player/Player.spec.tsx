import React from "react"
import { shallow } from "enzyme"

import videos from "mocks/videos.json"
import { Player } from "./Player"

describe("Player", () => {
  it("renders correctly", () => {
    const comp = shallow(<Player selected={videos[0]} next={jest.fn() as any} />)
    expect(comp).toMatchSnapshot()
  })
  it("shouldn't render if nothing is selected", () => {
    const comp = shallow(<Player selected={undefined} next={jest.fn() as any} />)
    expect(comp).toMatchSnapshot()
  })
})
