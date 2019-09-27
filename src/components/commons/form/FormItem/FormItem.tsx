import React from "react"
import { isNil } from "lodash-es"

import { Grid } from "components/commons"

import * as Styled from "./FormItem.styled"

const { Row, Col } = Grid

interface IProps {
  label: string
  children: React.ReactNode
  touched?: any
  error?: any
}

export const FormItem: React.FC<IProps> = ({ children, label, touched, error }) => (
  <Row type="flex">
    <Col span={4}>{label}</Col>
    <Col span={20}>
      <Styled.FormItem
        {...(touched && !isNil(error)
          ? {
              validateStatus: "error",
              help: error,
            }
          : {})}
      >
        {children}
      </Styled.FormItem>
    </Col>
  </Row>
)
