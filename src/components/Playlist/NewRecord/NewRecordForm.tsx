import React from "react"
import { Form } from "formik"

import { Input } from "components/commons/form"

export const NewRecordForm = () => (
  <Form>
    <Input label="Title" name="title" />
    <Input label="Artist" name="artist" />
    <Input label="Video URL" name="src" />
  </Form>
)
