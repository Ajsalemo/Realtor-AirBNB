import * as Yup from "yup";

// Validation schema for Formik
export const FormSchemaValidation = Yup.object().shape({
  location: Yup.string()
    .min(2, "The location provided is too short")
    .max(300, "The location is too long")
    .required("A location name is required"),
});
