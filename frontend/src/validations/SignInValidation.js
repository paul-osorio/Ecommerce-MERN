import * as Yup from "yup";

const SignInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email address."),

  password: Yup.string().required("Please enter your password."),
});

export default SignInValidation;
