import React from "react"
import { shallow } from "enzyme"

import { App } from "./App"

describe("App", () => {
  it("renders correctly", () => {
    const comp = shallow(<App />)
    expect(comp).toMatchSnapshot()
  })
})
