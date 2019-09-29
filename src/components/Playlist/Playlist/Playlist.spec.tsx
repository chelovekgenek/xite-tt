import React from "react"
import { shallow } from "enzyme"

import { Playlist } from "./Playlist"

describe("Playlist", () => {
  it("renders correctly", () => {
    const comp = shallow(<Playlist />)
    expect(comp).toMatchSnapshot()
  })
})
