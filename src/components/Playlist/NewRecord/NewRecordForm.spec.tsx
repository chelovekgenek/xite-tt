import React from "react"
import { shallow } from "enzyme"

import { NewRecordForm } from "./NewRecordForm"

describe("App", () => {
  it("renders correctly", () => {
    const comp = shallow(<NewRecordForm />)
    expect(comp).toMatchSnapshot()
  })
})
