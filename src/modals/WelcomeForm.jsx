import * as yup from "yup";
// YUP WELCOME SCHEMA
const welcomeSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "Please enter only letters")
    .required("This Field Is Required"),
});

export default welcomeSchema;
