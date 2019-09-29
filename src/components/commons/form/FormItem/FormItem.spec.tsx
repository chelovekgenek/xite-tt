import React from "react"
import { shallow } from "enzyme"

import { FormItem } from "./FormItem"

describe("FormItem", () => {
  const render = (props = {}) => shallow(<FormItem label="asd" children={true} {...props} />)
  it("renders correctly", () => {
    const comp = render()
    expect(comp).toMatchSnapshot()
  })
  it("should render an error if form is touched and error is provided", () => {
    const comp = render({ touched: true, error: "error message" })
    expect(comp.find("Styled(FormItem)").props()).toEqual({
      validateStatus: "error",
      help: "error message",
      children: true,
    })
  })
})
