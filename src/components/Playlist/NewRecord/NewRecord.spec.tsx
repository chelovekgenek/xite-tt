import React from "react"
import { shallow } from "enzyme"

import { List, Modal } from "components/commons"
import formikMock from "mocks/formik-props"
import { NewRecord } from "./NewRecord"

describe("NewRecord", () => {
  const defaultValues = { title: "", artist: "", src: "" }
  const render = (props = {}) =>
    shallow(
      <NewRecord
        {...formikMock}
        append={jest.fn() as any}
        initialValues={defaultValues}
        values={defaultValues}
        {...props}
      />,
    )
  it("renders correctly", () => {
    const comp = render()
    expect(comp).toMatchSnapshot()
  })
  it('should show "submit" button as disabled, while form is not valid', () => {
    const comp = render()
    expect(comp.find(Modal).prop("okButtonProps")).toEqual({ disabled: true })
  })
  it('should set modal to visible, when "add record" button was clicked', () => {
    const comp = render()
    comp.find(List.Item).simulate("click")
    expect(comp.find(Modal).prop("visible")).toEqual(true)
  })
})
