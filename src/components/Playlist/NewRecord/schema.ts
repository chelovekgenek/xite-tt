import * as Yup from "yup"

export const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(32, "Too Long!")
    .required("Required"),
  artist: Yup.string()
    .min(2, "Too Short!")
    .max(32, "Too Long!")
    .required("Required"),
  src: Yup.string()
    .url("Not a url")
    .required("Required"),
})

export const initialValues: Yup.InferType<typeof schema> = {
  title: "",
  artist: "",
  src: "",
}
