import React, { useState, useCallback } from "react"
import { connect } from "react-redux"
import { withFormik, FormikProps } from "formik"

import { Icon, Modal, List } from "components/commons"
import { TAppState } from "store/entities"
import { VideoListActions } from "store/entities/video"

import { initialValues, schema } from "./schema"
import { NewRecordForm } from "./NewRecordForm"

interface IDispatchProps {
  append: typeof VideoListActions.append
}
interface IProps extends IDispatchProps {}

export const NewRecord: React.FC<IProps & FormikProps<typeof initialValues>> = ({
  isValid,
  handleSubmit,
  resetForm,
}) => {
  const [opened, setOpened] = useState(false)
  const toggleOpened = useCallback(() => setOpened(!opened), [opened])
  const handleOk = useCallback(() => {
    handleSubmit()
    toggleOpened()
  }, [handleSubmit, toggleOpened])
  const handleCancel = useCallback(() => {
    resetForm()
    toggleOpened()
  }, [resetForm, toggleOpened])
  return (
    <React.Fragment>
      <List.Item onClick={toggleOpened}>
        <Icon type="plus" />
        Add video
      </List.Item>
      <Modal
        okText="Submit"
        closable={false}
        visible={opened}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: !isValid }}
      >
        <NewRecordForm />
      </Modal>
    </React.Fragment>
  )
}

export default connect<{}, IDispatchProps, {}, TAppState>(
  null,
  {
    append: VideoListActions.append,
  },
)(
  withFormik<IProps, typeof initialValues>({
    handleSubmit: (values, { props }) => props.append(values),
    validationSchema: schema,
    validateOnBlur: true,
  })(NewRecord),
)
